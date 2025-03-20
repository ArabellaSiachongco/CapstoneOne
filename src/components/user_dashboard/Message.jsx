import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../../wrapper/index.js";
import { styles } from "../../styles.js";
import { db } from "../database/firebase.js"; // Ensure this points to your Firebase config
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth to get the current user

// Predefined lawyer details
const lawyers = {
  "Noel Magalgalit": {
    name: "Noel Magalgalit",
    title: "Civil Law",
    address:
      "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2600 Benguet",
  },
  "Palmer Fagyan Bugtong": {
    name: "Palmer Fagyan Bugtong",
    title: "Criminal Law",
    address:
      "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2600 Benguet",
  },
  "Jess B. Evasco": {
    name: "Jess B. Evasco",
    title: "Criminal Law",
    address:
      "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2600 Benguet",
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
  
    const user = auth.currentUser;
  
    if (!user) {
      alert("User is not authenticated.");
      return;
    }
  
    try {
      // Fetch user details from Firestore
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
  
      let userName = user.displayName || "Unknown User"; // Default to Firebase displayName
  
      if (userSnap.exists()) {
        userName = userSnap.data().firstName + " " + userSnap.data().lastName; // Get full name
      }
  
      // Add message to Firestore
      await addDoc(collection(db, "messages"), {
        date: serverTimestamp(),
        details: chatMessage.trim(),
        sender: userName,
        userId: user.uid,
        appointmentId: chatAppointment.id,
      });
  
      // Create a notification for the recipient
      await addDoc(collection(db, "notifications"), {
        userId: chatAppointment.lawyer?.id || "admin", // Notify the lawyer or admin
        message: `New message from ${userName}`,
        details: chatMessage.trim(),
        read: false,
        timestamp: serverTimestamp(),
      });
  
      setChatMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send the message. Please try again.");
    }
  };
  

  useEffect(() => {
    if (!chatAppointment) return;

    const messagesRef = collection(db, "messages");
    const q = query(
      messagesRef,
      where("appointmentId", "==", chatAppointment.id),
      orderBy("date", "asc") // 🔹 Ensure messages are sorted in ascending order
    );

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

          unsubscribeFromSnapshot = onSnapshot(
            appointmentsQuery,
            (snapshot) => {
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
            }
          );
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
                      <td className="px-4 py-3 text-right border font-semibold">
                        Name
                      </td>
                      <td className="px-4 py-3 text-left border">
                        {recentAppointment.firstName}{" "}
                        {recentAppointment.lastName}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-right border font-semibold">
                        Email
                      </td>
                      <td className="px-4 py-3 text-left border">
                        {recentAppointment.email}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-right border font-semibold">
                        Date
                      </td>
                      <td className="px-4 py-3 text-left border">
                        {recentAppointment.date}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-right border font-semibold">
                        Time
                      </td>
                      <td className="px-4 py-3 text-left border">
                        {recentAppointment.time}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-right border font-semibold">
                        Reason
                      </td>
                      <td className="px-4 py-3 text-left border">
                        {recentAppointment.reasons}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-right border font-semibold">
                        Lawyer
                      </td>
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
                        <td className="px-4 py-3 text-right border font-semibold">
                          Name
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appointment.firstName} {appointment.lastName}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-right border font-semibold">
                          Email
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appointment.email}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-right border font-semibold">
                          Date
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appointment.date}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-right border font-semibold">
                          Time
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appointment.time}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-right border font-semibold">
                          Reason
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appointment.reasons}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-right border font-semibold">
                          Lawyer
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appointment.lawyerInfo?.name || "Unknown Lawyer"}
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan="2"
                          className="px-4 py-3 text-center border"
                        >
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
          <div className="bg-white border border-2 rounded-lg p-4 shadow-lg w-8/12 flex flex-col">
            {/* Chat Header */}
            <h6 className="text-black mb-4">
              <b>Chat with:</b> {chatAppointment?.lawyer?.name}
            </h6>

            {/* Chat Messages */}
            <div className="flex flex-col mb-4 p-2 h-80 overflow-y-scroll text-black space-y-2">
              {messages.length > 0 ? (
                messages
                  .slice()
                  .sort((a, b) => a.date - b.date) // Ensure messages are in order
                  .map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "admin"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`p-3 max-w-xs rounded-lg shadow-md ${
                          message.sender === "admin"
                            ? "bg-blue-900 text-white rounded-br-none"
                            : "bg-gray-200 text-black rounded-bl-none"
                        }`}
                      >
                        <p className="text-sm">{message.details}</p>
                        <p className="text-xs text-gray-400 mt-1 text-right">
                          {message.date
                            ? new Date(message.date.toDate()).toLocaleString()
                            : ""}
                        </p>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="text-gray-500 text-center p-12">
                  No messages yet.
                </p>
              )}
            </div>

            {/* Message Input */}
            <textarea
              className="p-2 w-full bg-gray-200 rounded mb-2 text-black"
              rows="3"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Type your message here..."
            ></textarea>

            {/* Buttons */}
            <div className="flex justify-end space-x-2">
              <button
                className="px-3 py-1 text-red-900 rounded-lg"
                onClick={() => setChatAppointment(null)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 bg-blue-900 text-white rounded-lg"
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
