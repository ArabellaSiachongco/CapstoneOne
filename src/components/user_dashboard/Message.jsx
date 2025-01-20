import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../../wrapper/index.js";
import { styles } from "../../styles.js";
import { db } from "../database/firebase.js"; // Ensure this points to your Firebase config
import { collection, query, where, orderBy, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth to get the current user

// Predefined lawyer details
const lawyers = {
    "Noel Magalgalit": {
        name: "Noel Magalgalit",
        title: "Civil Law",
        address: "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2660 Benguet",
    },
    "Palmer Fagyan Bugtong": {
        name: "Palmer Fagyan Bugtong",
        title: "Criminal Law",
        address: "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2660 Benguet",
    },
    "Jess B. Evasco": {
        name: "Jess B. Evasco",
        title: "Criminal Law",
        address: "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2660 Benguet",
    },
};

const Message = () => {
    const [recentAppointment, setRecentAppointment] = useState(null);
    const [pastAppointments, setPastAppointments] = useState([]);
    const [chatAppointment, setChatAppointment] = useState(null);
    const [messages, setMessages] = useState([]);
    const [chatMessage, setChatMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    const handleSendMessage = async () => {
        if (!chatAppointment || !chatMessage.trim()) {
            alert("Message cannot be empty.");
            return;
        }

        // Get the current user ID from Firebase Auth as a fallback
        const user = auth.currentUser;

        try {
            await addDoc(collection(db, "messages"), {
                date: serverTimestamp(),
                details: chatMessage.trim(),
                sender: "user", // Mark sender as 'user'
                userId: chatAppointment.clientId || user?.uid || "Unknown",
                appointmentId: chatAppointment.id,
            });
            alert("Message sent successfully!");
            setChatMessage("");
            setChatAppointment(null);
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send the message. Please try again.");
        }
    };




    useEffect(() => {
        if (!chatAppointment) return;

        const messagesRef = collection(db, "messages");
        const q = query(messagesRef, where("appointmentId", "==", chatAppointment.id));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messagesData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMessages(messagesData);
        });

        return () => unsubscribe();
    }, [chatAppointment]);


    useEffect(() => {
        let unsubscribeFromAuth = null;
        let unsubscribeFromSnapshot = null;

        unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                const fetchAppointments = () => {
                    const appointmentsRef = collection(db, "appointments");
                    const appointmentsQuery = query(
                        appointmentsRef,
                        where("email", "==", user.email),
                        orderBy("timestamp", "desc")
                    );

                    unsubscribeFromSnapshot = onSnapshot(appointmentsQuery, (snapshot) => {
                        if (!snapshot.empty) {
                            const appointments = snapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data(),
                                lawyerInfo: lawyers[doc.data().lawyer?.name] || {},
                            }));
                            setRecentAppointment(appointments[0]);
                            setPastAppointments(appointments.slice(1));
                        } else {
                            setRecentAppointment(null);
                            setPastAppointments([]);
                        }
                        setLoading(false);
                    });
                };

                fetchAppointments();
            } else {
                setRecentAppointment(null);
                setPastAppointments([]);
                setLoading(false);
            }
        });

        return () => {
            if (unsubscribeFromAuth) unsubscribeFromAuth();
            if (unsubscribeFromSnapshot) unsubscribeFromSnapshot();
        };
    }, [auth]);

    if (loading) {
        return <p>Loading appointments...</p>;
    }


    return (
        <>
            <h2 className={`${styles.headText} highlight-border`}>
                <span className="title-with-line mb-5">Appointments</span>
            </h2>
            <div className="p-4">
                {/* Recent Appointment Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mt-3 mb-4">Recent Appointment</h3>
                    <div className="space-y-4">
                        {recentAppointment ? (
                            <div
                                key={recentAppointment.id}
                                className="p-2 mt-2 rounded shadow-md border-gray-300 tracking-wide"
                            >
                                <table className="min-w-full table-auto border-collapse border border-gray-300 mb-14">
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-3 text-right border font-semibold">Name</td>
                                            <td className="px-4 py-3 text-left border">
                                                {recentAppointment.firstName} {recentAppointment.lastName}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-right border font-semibold">Email</td>
                                            <td className="px-4 py-3 text-left border">{recentAppointment.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-right border font-semibold">Date</td>
                                            <td className="px-4 py-3 text-left border">{recentAppointment.date}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-right border font-semibold">Time</td>
                                            <td className="px-4 py-3 text-left border">{recentAppointment.time}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-right border font-semibold">Reason</td>
                                            <td className="px-4 py-3 text-left border">{recentAppointment.reasons}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-right border font-semibold">Lawyer</td>
                                            <td className="px-4 py-3 text-left border">
                                                {recentAppointment.lawyerInfo?.name || "Unknown Lawyer"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" className="px-4 py-3 text-center border">
                                                <button
                                                    className="px-3 py-1 text-orange-400 rounded hover:text-orange-900"
                                                    onClick={() => setChatAppointment(recentAppointment)}
                                                >
                                                    Message
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p className="text-gray-500">No recent appointments found.</p>
                        )}
                    </div>
                </div>

                {/* Past Appointments Section */}
                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-4">Past Appointments</h3>
                    <div className="space-y-4">
                        {pastAppointments.length > 0 ? (
                            pastAppointments.map((appointment) => (
                                <div
                                    key={appointment.id}
                                    className="p-2 mt-2 rounded shadow-md border-gray-300 tracking-wide"
                                >
                                    <table className="min-w-full table-auto border-collapse border border-gray-300 mb-14">
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-3 text-right border font-semibold">Name</td>
                                                <td className="px-4 py-3 text-left border">
                                                    {appointment.firstName} {appointment.lastName}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-right border font-semibold">Email</td>
                                                <td className="px-4 py-3 text-left border">{appointment.email}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-right border font-semibold">Date</td>
                                                <td className="px-4 py-3 text-left border">{appointment.date}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-right border font-semibold">Time</td>
                                                <td className="px-4 py-3 text-left border">{appointment.time}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-right border font-semibold">Reason</td>
                                                <td className="px-4 py-3 text-left border">{appointment.reasons}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-right border font-semibold">Lawyer</td>
                                                <td className="px-4 py-3 text-left border">
                                                    {appointment.lawyerInfo?.name || "Unknown Lawyer"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" className="px-4 py-3 text-center border">
                                                    <button
                                                        className="px-3 py-1 text-orange-400 rounded hover:text-orange-900"
                                                        onClick={() => setChatAppointment(appointment)}
                                                    >
                                                        Message
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No past appointments found.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Chat Popup */}
            {chatAppointment && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white border border-2 rounded-lg p-4 w-1/3 shadow-lg">
                        <h6 className="text-black mb-4">
                            <b>Chat with:</b> {chatAppointment.firstName} {chatAppointment.lastName}
                        </h6>
                        <div className="mb-4 p-2 bg-gray-100 h-40 overflow-y-scroll text-black">
                            {messages.length > 0 ? (
                                    messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`mb-2 ${message.sender === "admin" ? "text-right" : "text-left"}`}
                                        >
                                            <p>
                                                <strong>{message.sender === "admin" ? "Admin" : message.userId || "User"}</strong>: {message.details}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {message.date ? new Date(message.date.toDate()).toLocaleString() : ""}
                                            </p>
                                        </div>
                                    ))
                            ) : (
                                <p className="text-gray-500">No messages yet.</p>
                            )}
                        </div>

                        <textarea
                            className="w-full p-2 bg-gray-200 rounded mb-4 text-black"
                            rows="3"
                            value={chatMessage}
                            onChange={(e) => setChatMessage(e.target.value)}
                            placeholder="Type your message here..."
                        ></textarea>
                        <div className="flex justify-end space-x-2">
                            <button
                                className="px-4 py-2 text-red-600 hover:text-red-800"
                                onClick={() => setChatAppointment(null)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 text-orange-400 rounded hover:text-orange-900"
                                onClick={handleSendMessage}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SectionWrapper(Message);