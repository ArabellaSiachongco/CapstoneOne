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
import { FaBell } from "react-icons/fa";

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
  const [user, setUser] = useState(null);


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
  
      let firstName = "";
      let lastName = "";
      if (userSnap.exists()) {
        firstName = userSnap.data()?.firstName || "";
        lastName = userSnap.data()?.lastName || "";
      }
      const userName = firstName && lastName ? `${firstName} ${lastName}` : user.displayName || "Unknown User";
  
      // Ensure recipient (lawyer) is defined
      const recipientId = chatAppointment.lawyer?.uid; // Use unique ID
      if (!recipientId) {
        console.error("❌ Error: Recipient ID is undefined.");
        alert("Recipient not found.");
        return;
      }
  
      // Add message to Firestore
      await addDoc(collection(db, "messages"), {
        sender: "client",
        recipient: recipientId,
        appointmentId: chatAppointment.id,
        lawyerId: recipientId,
        details: chatMessage,
        date: serverTimestamp(),
      });
  
      // Add notification for lawyer
      await addDoc(collection(db, "notifications"), {
        userId: recipientId,
        message: `New message from ${userName}`,
        details: chatMessage.trim(),
        read: false,
        timestamp: serverTimestamp(),
      });
  
      setChatMessage("");
      console.log("✅ Message and notification sent!");
    } catch (error) {
      console.error("❌ Error sending message:", error);
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
        console.log("⚡ Fetching appointments for:", user.email);

        const appointmentsRef = collection(db, "appointments");
        const appointmentsQuery = query(
          appointmentsRef,
          where("email", "==", user.email),
          orderBy("timestamp", "desc") // Order by date descending
        );

        unsubscribeFromSnapshot = onSnapshot(appointmentsQuery, (snapshot) => {
          console.log("🔥 Firestore query executed!");
          console.log("📜 Firestore Snapshot:", snapshot.docs.length);

          if (!snapshot.empty) {
            const now = new Date();
            now.setHours(0, 0, 0, 0); // Ensure comparison ignores time

            const appointments = snapshot.docs.map((doc) => {
              const data = doc.data();
              let appointmentDate = data.timestamp
                ? data.timestamp.toDate()
                : new Date(data.date);

              appointmentDate.setHours(0, 0, 0, 0); // Normalize time

              return {
                id: doc.id,
                ...data,
                appointmentDate,
                lawyerInfo: lawyers[data.lawyer] || { name: "Unknown Lawyer" }, // Ensure correct lawyer mapping
              };
            });

            // Ensure proper categorization of past and upcoming appointments
            const upcomingAppointments = appointments
              .filter((appt) => appt.appointmentDate >= now) // Only appointments in the future
              .sort((a, b) => a.appointmentDate - b.appointmentDate); // Sort by earliest date

            const pastAppointments = appointments
              .filter((appt) => appt.appointmentDate < now) // Only past appointments
              .sort((a, b) => b.appointmentDate - a.appointmentDate); // Sort by most recent past date

            console.log("📅 Current Date:", now);
            console.log("🔜 Upcoming Appointments:", upcomingAppointments);
            console.log("⏳ Past Appointments:", pastAppointments);

            setRecentAppointment(upcomingAppointments);
            setPastAppointments(pastAppointments);

            console.log(
              "✅ State updated - Recent:",
              upcomingAppointments[0] || null
            );
            console.log("✅ State updated - Past:", pastAppointments);
          } else {
            console.warn("⚠ No appointments found for user.");
            setRecentAppointment(null);
            setPastAppointments([]);
          }
          setLoading(false);
        });
      } else {
        console.warn("⚠ No user authenticated.");
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
            {recentAppointment.length > 0 ? (
              recentAppointment.map((appt) => (
                <div
                  key={appt.id}
                  className="p-2 mt-2 rounded shadow-md border-gray-300 tracking-wide"
                >
                  <table className="min-w-full table-auto border-collapse border border-gray-300 mb-14">
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-right border font-semibold">
                          Name
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appt.firstName} {appt.lastName}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-right border font-semibold">
                          Email
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appt.email}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-right border font-semibold">
                          Date
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appt.date}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-right border font-semibold">
                          Time
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appt.time}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-right border font-semibold">
                          Reason
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appt.reasons}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-right border font-semibold">
                          Lawyer
                        </td>
                        <td className="px-4 py-3 text-left border">
                          {appt.lawyer?.name || "Unknown Lawyer"}
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan="2"
                          className="px-4 py-3 text-center border"
                        >
                          <button
                            className="px-3 py-1 text-orange-400 rounded hover:text-orange-900"
                            onClick={() => setChatAppointment(appt)}
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
              <p className="text-gray-500">No upcoming appointments found.</p>
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
                          {appointment.lawyer?.name || "Unknown Lawyer"}
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
      {/* Notification Bell */}
      {user && (
        <div className="relative cursor-pointer ml-auto">
          <div onClick={() => setShowDropdown(!showDropdown)}>
            <FaBell className="text-2xl text-white" />
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {unreadCount}
              </span>
            )}
          </div>

          {/* Notification Dropdown */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-3">
              <h3 className="font-semibold text-gray-700 border-b pb-2 flex justify-between">
                Notifications
                {notifications.length > 0 && (
                  <button className="text-blue-500 text-sm" onClick={markAllAsRead}>
                    Mark all as read
                  </button>
                )}
              </h3>
              {notifications.length > 0 ? notifications.map((notification) => (
                <div key={notification.id} className="notification p-2 border-b cursor-pointer hover:bg-gray-100" onClick={() => markNotificationAsRead(notification.id)}>
                  <p className="text-sm font-semibold">{notification.message}</p>
                  {notification.details && <p className="text-xs text-gray-600 mt-1">{notification.details}</p>}
                  <span className="text-xs text-gray-500">
                    {notification.timestamp ? new Date(notification.timestamp.toDate()).toLocaleTimeString() : "Unknown time"}
                  </span>
                </div>
              )) : (
                <p className="text-sm text-gray-500 p-2">No new notifications</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Message);
