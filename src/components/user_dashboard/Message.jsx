import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utility/motion";
import { SectionWrapper } from "../../wrapper";
import { db } from "../database/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  Timestamp,
  collection,
  onSnapshot,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  getDoc,
  query,
  orderBy,
  where,
  setDoc,
} from "firebase/firestore";

const Message = () => {
  const [appointments, setAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [chatAppointment, setChatAppointment] = useState(null);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [user, setUser] = useState(null);
  const [archivedAppointments, setArchivedAppointments] = useState([]);
  const [showArchivedAppointments, setShowArchivedAppointments] =
    useState(false);
  const [archivedMessages, setArchivedMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const auth = getAuth();

  // Fetch appointments for the logged-in user
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (!currentUser) {
        console.log("User is null");
        return;
      }

      console.log("User ID:", currentUser.uid);

      // Fetch all appointments where the user is involved
      const appointmentsRef = collection(db, "appointments");
      const q = query(
        appointmentsRef,
        where("email", "==", currentUser.email),
        orderBy("timestamp", "asc") // Use the timestamp field for sorting
      );

      const unsubscribeAppointments = onSnapshot(q, (snapshot) => {
        const currentAppointments = [];
        const pastAppointmentsList = [];
        const now = new Date();

        snapshot.forEach((docSnap) => {
          const appointment = docSnap.data();
          const appointmentDate = new Date(appointment.date);

          console.log("Converted Date:", appointmentDate);

          const formattedAppointment = {
            id: docSnap.id,
            date: appointment.date, // Keep the date as a string
            time: appointment.time || "No time provided",
            reasons: appointment.reasons || "No reasons provided",
            lawyer: appointment.lawyer || { name: "Unknown Lawyer" },
            firstName: appointment.firstName || "",
            lastName: appointment.lastName || "",
          };

          if (appointmentDate >= now) {
            currentAppointments.push(formattedAppointment);
          } else {
            pastAppointmentsList.push(formattedAppointment);
          }
        });

        setAppointments(currentAppointments);
        setPastAppointments(pastAppointmentsList);
      });

      return () => unsubscribeAppointments();
    });

    return () => unsubscribeAuth();
  }, [auth, db]);

  useEffect(() => {
    if (!chatAppointment || !chatAppointment.id) return;

    const messagesRef = collection(db, "messages");
    const q = query(
      messagesRef,
      where("appointmentId", "==", chatAppointment.id),
      orderBy("date", "asc")
    );

    const unsubscribeMessages = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((docSnap) => {
        const message = docSnap.data();
        let date;

        // Convert Firestore Timestamp to Date object
        if (message.date && typeof message.date.toDate === "function") {
          date = message.date.toDate();
        }
        // Convert string to Date object
        else if (message.date) {
          date = new Date(message.date);
        }
        // Fallback to current date if no valid date is found
        else {
          date = new Date();
        }

        return {
          id: docSnap.id,
          ...message,
          date: date, // Store the Date object
        };
      });

      setMessages(fetchedMessages);
    });

    return () => unsubscribeMessages();
  }, [chatAppointment]);

  // Send a message for the selected appointment
  const handleSendMessage = async () => {
    if (!chatMessage.trim() || !chatAppointment) return;

    const messageData = {
      sender: user.uid, // Stores sender's UID
      recipient:
        chatAppointment.lawyer?.uid ||
        chatAppointment.lawyer?.email ||
        "unknown",
      appointmentId: chatAppointment.id,
      details: chatMessage,
      date: Timestamp.now(),
    };

    try {
      await addDoc(collection(db, "messages"), messageData);
      setChatMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Delete (or cancel) an appointment – ensure your rules allow this for clients
  const handleDelete = async (appointmentId) => {
    if (!appointmentId || typeof appointmentId !== "string") {
      console.error("Invalid ID received for deletion:", appointmentId);
      return;
    }

    try {
      const appointmentRef = doc(db, "appointments", appointmentId);
      const appointmentSnap = await getDoc(appointmentRef);

      if (!appointmentSnap.exists()) {
        console.error("Appointment not found:", appointmentId);
        return;
      }

      const appointmentData = appointmentSnap.data();

      // Optional: Archive the appointment before deletion if needed
      const archiveAppointmentRef = doc(
        db,
        "archived_appointments",
        appointmentId
      );
      await setDoc(archiveAppointmentRef, {
        ...appointmentData,
        archivedAt: new Date().toISOString(),
      });

      // Delete any related messages if required
      const messagesQuery = query(
        collection(db, "messages"),
        where("appointmentId", "==", appointmentId)
      );
      const messagesSnap = await getDocs(messagesQuery);
      for (const messageDoc of messagesSnap.docs) {
        await deleteDoc(doc(db, "messages", messageDoc.id));
      }

      await deleteDoc(appointmentRef);

      // Update local state
      setAppointments((prev) =>
        prev.filter((appointment) => appointment.id !== appointmentId)
      );
      setPastAppointments((prev) =>
        prev.filter((appointment) => appointment.id !== appointmentId)
      );
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const handleOpen = async (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    await fetchArchivedMessages();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAppointmentId(null);
  };

  const fetchArchivedAppointments = async () => {
    if (!user) {
      console.error("No user is logged in.");
      return;
    }

    try {
      const archivedRef = query(
        collection(db, "archived_appointments"),
        where("email", "==", user.email) // Filter by user email
      );

      const snapshot = await getDocs(archivedRef);
      const archives = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("User's Archived Appointments:", archives);

      setArchivedAppointments(archives);
      setShowArchivedAppointments((prev) => !prev);
    } catch (error) {
      console.error("Error fetching archived appointments:", error);
    }
  };

  const fetchArchivedMessages = async () => {
    try {
      if (!user?.uid || !user?.email) return;
  
      // Define queries
      const queries = [
        query(collection(db, "archived_messages"), where("sender", "==", user.uid)),
        query(collection(db, "archived_messages"), where("userId", "==", user.uid)),
        query(collection(db, "archived_messages"), where("sender", "==", "admin"))
      ];
  
      // Fetch all queries in parallel
      const snapshots = await Promise.all(queries.map(getDocs));
  
      // Process and merge messages, removing duplicates
      const allMessages = snapshots
        .flatMap(snapshot => snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            date: data.date?.toDate ? data.date.toDate().toLocaleString() : "No date available",
            archivedAt: data.archivedAt?.toDate ? data.archivedAt.toDate().toLocaleString() : "No archive date"
          };
        }))
        .filter((msg, index, self) => self.findIndex(m => m.id === msg.id) === index);
  
      // Sort messages by date
      allMessages.sort((a, b) => new Date(a.date) - new Date(b.date));
  
      // Set state
      setArchivedMessages(allMessages);
    } catch (error) {
      console.error("Error fetching archived messages:", error);
    }
  };
  

  return (
    <>
      <Navbar notifications={notifications} />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.headText} highlight-border`}>
          <span className="title-with-line">Your Appointments</span>
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="paragraphSubText mb-5 mt-2"
      >
        Manage your upcoming and past appointments, send messages, and cancel
        bookings.
      </motion.p>

      <div className="w-full p-4 bg-gray-800 rounded-lg">
        <table className="w-full mt-4 border-collapse border border-gray-950">
          <thead>
            <tr className="bg-gray-800">
              <th className="border p-2">Current Appointments</th>
              <th className="border p-2">Past Appointments</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* Render current (upcoming) appointments */}
            {appointments.map((appointment, index) => (
              <tr key={appointment.id || index} className="hover:bg-gray-700">
                <td className="border p-2">
                  {appointment.date} | {appointment.time} <br />
                  <strong>Client:</strong> {appointment.firstName}{" "}
                  {appointment.lastName} <br />
                  <strong>Lawyer:</strong>{" "}
                  {appointment.lawyer?.name || "Unknown Lawyer"} <br />
                  <strong>Reason:</strong> {appointment.reasons}
                </td>
                <td className="border p-2 text-center">N/A</td>
                <td className="border p-2 text-center">
                  <button
                    className="px-3 py-1 bg-blue-900 text-white rounded-lg"
                    onClick={() => setChatAppointment(appointment)}
                  >
                    Message
                  </button>
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleDelete(appointment.id)}
                    className="px-3 py-1 bg-red-900 text-white rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {/* Render past appointments */}
            {pastAppointments.map((appointment, index) => (
              <tr key={appointment.id || index} className="hover:bg-gray-700">
                <td className="border p-2 text-center">N/A</td>
                <td className="border p-2">
                  {appointment.date} | {appointment.time} <br />
                  <strong>Client:</strong> {appointment.firstName}{" "}
                  {appointment.lastName} <br />
                  <strong>Lawyer:</strong>{" "}
                  {appointment.lawyer?.name || "Unknown Lawyer"} <br />
                  <strong>Reason:</strong> {appointment.reasons}
                </td>
                <td className="border p-2 text-center">
                  <button
                    className="px-3 py-1 bg-blue-900 text-white rounded-lg"
                    onClick={() => setChatAppointment(appointment)}
                  >
                    Message
                  </button>
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleDelete(appointment.id)}
                    className="px-3 py-1 bg-red-900 text-white rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {appointments.length === 0 && pastAppointments.length === 0 && (
              <tr>
                <td colSpan="4" className="border p-4 text-center">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Archived Appointments Button */}
      <button
        className="mt-4 px-4 py-2 border bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        onClick={fetchArchivedAppointments}
      >
        {showArchivedAppointments
          ? "Hide Archived Appointments"
          : "Show Archived Appointments"}
      </button>

      {/* Archived Appointments List (only shown when button is clicked) */}
      {showArchivedAppointments && archivedAppointments.length > 0 && (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-700">
          <h3 className="text-lg font-bold mb-4">Archived Appointments</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-900">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Time</th>
                  <th className="border p-2">Client</th>
                  <th className="border p-2">Lawyer</th>
                  <th className="border p-2">Reason</th>
                  <th className="border p-2">Messages</th>
                </tr>
              </thead>
              <tbody>
                {archivedAppointments.map((appointment, index) => (
                  <tr key={index} className="hover:bg-gray-700">
                    <td className="border p-2">{appointment.date}</td>
                    <td className="border p-2">{appointment.time}</td>
                    <td className="border p-2">
                      {appointment.client ||
                        `${appointment.firstName || ""} ${appointment.lastName || ""}`.trim() ||
                        "Unknown Client"}
                    </td>
                    <td className="border p-2">{appointment.lawyer?.name}</td>
                    <td className="border p-2">{appointment.reasons}</td>
                    <td className="border p-2 text-center">
                      <button
                        onClick={() => handleOpen(appointment.id)}
                        className="px-3 py-1 bg-blue-900 text-white rounded-lg"
                      >
                        View Messages
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Archived Messages Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white border-2 rounded-lg p-4 shadow-lg w-8/12">
            <h6 className="text-black mb-4">
              <b>Archived Messages</b>
            </h6>
            {/* Filter Messages for the Selected Appointment */}
            <div className="mb-4 p-2 h-64 overflow-y-scroll text-black flex flex-col space-y-2">
              {archivedMessages.filter(
                (msg) =>
                  msg.appointmentId.trim().toLowerCase() ===
                  selectedAppointmentId.trim().toLowerCase()
              ).length > 0 ? (
                archivedMessages
                  .filter(
                    (msg) =>
                      msg.appointmentId.trim().toLowerCase() ===
                      selectedAppointmentId.trim().toLowerCase()
                  )
                  .sort((a, b) => new Date(a.date) - new Date(b.date)) // Ensure chronological order
                  .map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "admin" ? "justify-start" : "justify-end"}`}
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
                          {message.date instanceof Date
                            ? message.date.toLocaleString() // Already a Date object
                            : typeof message.date === "string"
                              ? new Date(message.date).toLocaleString() // Convert from string
                              : "No date available"}
                        </p>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="text-gray-500 text-center p-12">
                  No archived messages available.
                </p>
              )}
            </div>

            {/* Close Button */}
            <div className="flex justify-end space-x-2">
              <button
                className="px-3 py-1 text-red-900 rounded-lg"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Popup */}
      {chatAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white border-2 rounded-lg p-4 shadow-lg w-8/12 flex flex-col">
            {/* Chat Header */}
            <h6 className="text-black mb-4">
              <b>Chat with:</b> {chatAppointment.lawyer?.name}
            </h6>

            {/* Chat Messages */}
            <div className="flex flex-col mb-4 p-2 h-80 overflow-y-scroll text-black space-y-2">
              {messages.length > 0 ? (
                messages
                  .slice()
                  .sort((a, b) => a.date.getTime() - b.date.getTime())
                  .map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === user.uid ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`p-3 max-w-xs rounded-lg shadow-md ${
                          message.sender === "admin"
                            ? "bg-gray-200 text-black rounded-bl-none"
                            : "bg-blue-900 text-white rounded-br-none"
                        }`}
                      >
                        <p className="text-sm">{message.details}</p>
                        <p className="text-xs text-gray-400 mt-1 text-right">
                          {message.date.toLocaleString()}{" "}
                          {/* Display formatted date */}
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
export default SectionWrapper(Message, "Message");
