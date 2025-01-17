import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../../wrapper/index.js";
import { styles } from "../../styles.js";
import { db } from "../database/firebase.js"; // Ensure this points to your Firebase config
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth to get the current user

const lawyers = {
    "Noel Magalgalit": {
        name: "Noel Magalgalit",
        title: "Civil Law",
        address: "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2660 Benguet"
    },
    "Palmer Fagyan Bugtong": {
        name: "Palmer Fagyan Bugtong",
        title: "Criminal Law",
        address: "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2660 Benguet"
    },
    "Jess B. Evasco": {
        name: "Jess B. Evasco",
        title: "Criminal Law",
        address: "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2660 Benguet"
    },
};
const Message = () => {
    const [recentAppointment, setRecentAppointment] = useState(null);
    const [pastAppointments, setPastAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

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
                            const appointments = snapshot.docs.map((doc) => {
                                const appointmentData = doc.data();
                                const lawyerInfo = lawyers[appointmentData.lawyer.name]; // Get the lawyer info
                                return {
                                    id: doc.id,
                                    ...appointmentData,
                                    lawyerInfo: lawyerInfo || {} // Fallback to empty object if no match
                                };
                            });
                            setRecentAppointment(appointments[0]); // Most recent appointment
                            setPastAppointments(appointments.slice(1)); // Past appointments
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
                            <div key={recentAppointment.id} className="p-2 mt-2 rounded shadow-md border-gray-300 tracking-wide">
                                <table className="min-w-full table-auto border-collapse border border-gray-300 mb-14">
                                    <tbody>
                                        <tr>
                                            <td className="w-1 px-4 py-3 text-right border font-semibold">Name</td>
                                            <td className="w-1 px-4 py-3 text-left border">
                                                {recentAppointment.firstName} {recentAppointment.lastName}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-1 px-4 py-3 text-right border font-semibold">Email</td>
                                            <td className="w-1 px-4 py-3 text-left border">{recentAppointment.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="w-1 px-4 py-3 text-right border font-semibold">Date</td>
                                            <td className="w-1 px-4 py-3 text-left border">{recentAppointment.date}</td>
                                        </tr>
                                        <tr>
                                            <td className="w-1 px-4 py-3 text-right border font-semibold">Time</td>
                                            <td className="w-1 px-4 py-3 text-left border">{recentAppointment.time}</td>
                                        </tr>
                                        <tr>
                                            <td className="w-1 px-4 py-3 text-right border font-semibold">Reason</td>
                                            <td className="w-1 px-4 py-3 text-left border">{recentAppointment.reasons}</td>
                                        </tr>
                                        <tr>
                                            <td className="w-1 px-4 py-3 text-right border font-semibold">Lawyer</td>
                                            <td className="w-1 px-4 py-3 text-left border">
                                                {recentAppointment.lawyerInfo?.name || "Unknown Lawyer"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-1 px-4 py-3 text-right border font-semibold">Messages</td>
                                            <td className="w-1 px-4 py-3 text-left border italic cursor-pointer underline text-amber-400 tracking-wide">
                                                View Message
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
                                <div key={appointment.id} className="p-2 mt-2rounded shadow-md border-gray-300 tracking-wide">
                                    <table className="min-w-full table-auto border-collapse border border-gray-300 mb-14">
                                        <tbody>
                                            <tr>
                                                <td className="w-1 px-4 py-3 text-right border font-semibold">Name</td>
                                                <td className="w-1 px-4 py-3 text-left border">{appointment.firstName} {appointment.lastName}</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1 px-4 py-3 text-right border font-semibold">Email</td>
                                                <td className="w-1 px-4 py-3 text-left border">{appointment.email}</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1 px-4 py-3 text-right border font-semibold">Date</td>
                                                <td className="w-1 px-4 py-3 text-left border">{appointment.date}</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1 px-4 py-3 text-right border font-semibold">Time</td>
                                                <td className="w-1 px-4 py-3 text-left border">{appointment.time}</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1 px-4 py-3 text-right border font-semibold">Reason</td>
                                                <td className="w-1 px-4 py-3 text-left border">{appointment.reasons}</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1 px-4 py-3 text-right border font-semibold">Lawyer</td>
                                                <td className="w-1 px-4 py-3 text-left border">
                                                    {appointment.lawyerInfo?.name || "Unknown Lawyer"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-1 px-4 py-3 text-right border font-semibold">Messages</td>
                                                <td className="w-1 px-4 py-3 text-left border italic cursor-pointer underline text-amber-400 tracking-wide">
                                                    View Message
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
        </>
    );
};

export default SectionWrapper(Message);