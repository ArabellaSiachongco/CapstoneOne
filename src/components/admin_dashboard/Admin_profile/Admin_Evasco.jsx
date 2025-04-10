import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import { fadeIn, textVariant } from "../../../utility/motion";
import { SectionWrapper } from "../../../wrapper";
import { db } from "../../database/firebase";
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
import { FaTrash } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";

const EVASCO_NAME = "Jess B. Evasco";

const Admin_Evasco = () => {
  const [appointments, setAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [archivedAppointments, setArchivedAppointments] = useState([]);
  const [showArchivedAppointments, setShowArchivedAppointments] =
    useState(false);
  const [messages, setMessages] = useState([]);
  const [chatAppointment, setChatAppointment] = useState(null);
  const [chatMessage, setChatMessage] = useState("");
  const [archivedMessages, setArchivedMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
  const [user, setUser] = useState(null);
  const [rejectedAppointments, setRejectedAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showRejectedAppointments, setShowRejectedAppointments] =
    useState(false);

  const handleOpen = async (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    await fetchArchivedMessages();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAppointmentId(null); // Reset when closing
  };

  useEffect(() => {
    const q = query(
      collection(db, "appointments"),
      where("lawyer.name", "==", EVASCO_NAME)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const currentAppointments = [];
      const pastAppointmentsList = [];
      const currentDate = new Date();

      snapshot.forEach((doc) => {
        const appointment = doc.data();
        if (appointment.lawyer?.name !== EVASCO_NAME) return;

        const appointmentDate =
          appointment.date instanceof Timestamp
            ? appointment.date.toDate()
            : appointment.date instanceof Timestamp
              ? appointment.date.toDate()
              : new Date(appointment.date);

        const formattedAppointment = {
          id: doc.id,
          date: appointmentDate.toLocaleDateString(),
          time: appointment.time || "No time provided",
          reasons: appointment.reasons || "No reasons provided",
          client:
            `${appointment.firstName || ""} ${appointment.lastName || ""}`.trim() ||
            "Unknown Client",
        };

        if (appointmentDate >= currentDate) {
          currentAppointments.push(formattedAppointment);
        } else {
          pastAppointmentsList.push(formattedAppointment);
        }
      });

      setAppointments(currentAppointments);
      setPastAppointments(pastAppointmentsList);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!chatAppointment) return;

    const messagesRef = query(
      collection(db, "messages"),
      where("appointmentId", "==", chatAppointment.id), // 🔹 Fetch only messages for this appointment
      orderBy("date", "asc") // 🔹 Sort messages by date
    );

    const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, [chatAppointment]);

  const fetchRejectedAppointments = async () => {
    if (showRejectedAppointments) {
      setShowRejectedAppointments(false);
      return;
    }

    try {
      const rejectedRef = query(collection(db, "rejected_appointments"));
      const snapshot = await getDocs(rejectedRef);

      const rejectedList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setRejectedAppointments(rejectedList);
      setShowRejectedAppointments(true);
    } catch (error) {
      console.error("Error fetching rejected appointments:", error);
    }
  };

  const handleRejectAppointment = async () => {
    if (!selectedAppointment) {
      alert("Please select an appointment before rejecting.");
      return;
    }
  
    if (!chatMessage.trim()) {
      alert("Please provide a reason for rejection.");
      return;
    }
  
    try {
      const appointmentRef = doc(db, "appointments", selectedAppointment.id);
  
      // Add to rejected_appointments collection
      await addDoc(collection(db, "rejected_appointments"), {
        id: selectedAppointment.id,
        date: selectedAppointment.date || "No date provided",
        time: selectedAppointment.time || "No time provided",
        client: selectedAppointment.client || "Unknown Client",
        reasons: selectedAppointment.reasons || "No reasons provided",
        reason: chatMessage, // User-provided rejection reason
        timestamp: new Date(),
      });
  
      // Remove from appointments collection in Firebase
      await deleteDoc(appointmentRef);
  
      // Remove from the state
      setAppointments((prevAppointments) =>
        prevAppointments.filter((app) => app.id !== selectedAppointment.id)
      );
  
      setShowModal(false);
      setChatMessage("");
      setSelectedAppointment(null);
  
      // Fetch and update rejected appointments list
      fetchRejectedAppointments();
    } catch (error) {
      console.error("Error rejecting appointment:", error);
    }
  };  

  const fetchArchivedAppointments = async () => {
    if (showArchivedAppointments) {
      setShowArchivedAppointments(false);
      return;
    }
    setShowRejectedAppointments(false);
    if (archivedAppointments.length > 0) {
      setShowArchivedAppointments(true);
      return;
    }

    try {
      const archivedRef = query(
        collection(db, "archived_appointments"),
        where("lawyer.name", "==", EVASCO_NAME)
      );

      const snapshot = await getDocs(archivedRef);
      const archives = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setArchivedAppointments(archives);
      setShowArchivedAppointments(true);
    } catch (error) {
      console.error("Error fetching archived appointments:", error);
    }
  };

  const fetchArchivedMessages = async () => {
    try {
      const archivedMessagesRef = query(
        collection(db, "archived_messages"),
        where("lawyerName", "==", EVASCO_NAME) // 🔹 Filter for Evasco only
      );

      const snapshot = await getDocs(archivedMessagesRef);
      const archivedMsgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setArchivedMessages(archivedMsgs);
    } catch (error) {
      console.error("Error fetching archived messages:", error);
    }
  };

  const handleSendMessage = async () => {
    if (!chatMessage.trim() || !chatAppointment) return;

    const messageData = {
      sender: "admin", // or the logged-in user
      recipient: chatAppointment.client, // Ensure user email is stored
      appointmentId: chatAppointment.id, // Link to appointment
      lawyerName: EVASCO_NAME, // Include lawyer's name
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

  const handleDelete = async (appointmentId) => {
    if (!appointmentId || typeof appointmentId !== "string") {
      console.error("Invalid ID received for deletion:", appointmentId);
      return;
    }

    try {
      // Step 1: Fetch appointment data
      const appointmentRef = doc(db, "appointments", appointmentId);
      const appointmentSnap = await getDoc(appointmentRef);

      if (!appointmentSnap.exists()) {
        console.error("Appointment not found:", appointmentId);
        return;
      }

      const appointmentData = appointmentSnap.data();

      // Step 2: Move appointment to archived_appointments
      const archiveAppointmentRef = doc(
        db,
        "archived_appointments",
        appointmentId
      );
      await setDoc(archiveAppointmentRef, {
        ...appointmentData,
        archivedAt: new Date().toISOString(),
      });

      // Step 3: Fetch related messages from "messages" collection
      const messagesQuery = query(
        collection(db, "messages"),
        where("appointmentId", "==", appointmentId)
      );
      const messagesSnap = await getDocs(messagesQuery);

      // Step 4: Archive messages in "archived_messages" (flat structure)
      for (const messageDoc of messagesSnap.docs) {
        const messageData = messageDoc.data();
        const archiveMessageRef = doc(
          collection(db, "archived_messages"),
          messageDoc.id
        );

        await setDoc(archiveMessageRef, {
          ...messageData,
          archivedAt: new Date().toISOString(),
        });
      }

      // Step 5: Delete original appointment and messages
      await deleteDoc(appointmentRef);
      for (const messageDoc of messagesSnap.docs) {
        await deleteDoc(doc(db, "messages", messageDoc.id)); // Remove original messages
      }

      console.log("Archived successfully:", appointmentId);

      // Step 6: Update local state
      setAppointments((prev) =>
        prev.filter((appointment) => appointment.id !== appointmentId)
      );
      setArchivedAppointments((prev) => [
        ...prev,
        { id: appointmentId, ...appointmentData },
      ]);
    } catch (error) {
      console.error("Error archiving appointment and messages:", error);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // ✅ Store authenticated user
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        <h2
          id="admin_appointment"
          className={`${styles.headText} highlight-border`}
        >
          <span className="title-with-line">Evasco Appointments</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="paragraphSubText mb-5 mt-2"
      >
        Manage appointments, send messages, and delete bookings.
      </motion.p>

      <div className="w-full p-4 bg-gray-800 rounded-lg">
        <table className="w-full mt-4 border-collapse border border-gray-950">
          <thead>
            <tr className="bg-gray-700">
              <th className="border p-2">Current Appointments</th>
              <th className="border p-2">Past Appointments</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Reject</th>
              <th className="border p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="border p-2">
                  {appointment.date} - {appointment.time} <br />
                  <strong>Client:</strong> {appointment.client} <br />
                  <strong>Reason:</strong> {appointment.reasons}
                </td>
                <td className="border p-2 text-center">N/A</td>
                <td className="border p-2 text-center">
                  <button
                    className="px-3 py-1 text-white rounded-lg"
                    onClick={() => setChatAppointment(appointment)}
                  >
                    <FaEnvelope size={26} color="#22c55e" />
                  </button>
                </td>
                <td className="border p-2 text-center">
                  <button
                    className="px-3 py-1 rounded-lg cursor-pointer"
                    onClick={() => {
                      setSelectedAppointment(appointment); // Set the appointment
                      setShowModal(true); // Open modal
                    }}
                  >
                    <MdCancel size={30} color="#f97316" />
                  </button>
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleDelete(appointment.id)}
                    className="px-3 py-1 rounded-lg cursor-pointer"
                  >
                    <FaTrash size={24} color="red" />
                  </button>
                </td>
              </tr>
            ))}
            {pastAppointments.map((appointment, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="border p-2 text-center">N/A</td>
                <td className="border p-2">
                  {appointment.date} - {appointment.time} <br />
                  <strong>Client:</strong> {appointment.client} <br />
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
                    className="border px-3 py-1 bg-red-900 text-white rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {appointments.length === 0 && pastAppointments.length === 0 && (
              <tr className="border p-2 text-center">
                <td colSpan="4" className="p-4 text-center">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <br />
        {/* Archived Appointments Button */}
        <button
          className="mt-4 px-4 py-2 border bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          onClick={fetchArchivedAppointments}
        >
          {showArchivedAppointments
            ? "Hide Archived Appointments"
            : "Show Archived Appointments"}
        </button>
        
        {/* Rejected Appointments Button */}
        <button
          className="ml-8 mt-4 px-4 py-2 border bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          onClick={fetchRejectedAppointments}
        >
          {showRejectedAppointments
            ? "Hide Rejected Appointments"
            : "Show Rejected Appointments"}
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
                          className="px-3 py-1 text-white rounded-lg "
                        >
                          <FaEnvelope size={26} color="#16a34a" />
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
                  (msg) => msg.appointmentId === selectedAppointmentId
                ).length > 0 ? (
                  archivedMessages
                    .filter(
                      (msg) => msg.appointmentId === selectedAppointmentId
                    ) // Filter by selected appointment
                    .sort((a, b) => a.date - b.date) // Ensure chronological order
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
            <div className="bg-white border border-2 rounded-lg p-4 shadow-lg w-8/12 flex flex-col">
              {/* Chat Header */}
              <h6 className="text-black mb-4">
                <b>Chat with:</b> {chatAppointment.client}
              </h6>

              {/* Chat Messages */}
              <div className="flex flex-col mb-4 p-2 h-80 overflow-y-scroll text-black space-y-2">
                {messages.length > 0 ? (
                  messages
                    .slice()
                    .sort((a, b) => a.date - b.date) // Ensures chronological order
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

        {/* Rejected Appointments Section */}
        {showRejectedAppointments && rejectedAppointments.length > 0 && (
          <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-700">
            <h3 className="text-lg font-bold mb-4 text-white">
              Rejected Appointments
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-900">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Time</th>
                    <th className="border p-2">Client</th>
                    <th className="border p-2">Reason</th>
                    <th className="border p-2">Messages</th>
                  </tr>
                </thead>
                <tbody>
                  {rejectedAppointments.map((appointment, index) => (
                    <tr key={index} className="hover:bg-gray-700">
                      <td className="border p-2">{appointment.date}</td>
                      <td className="border p-2">{appointment.time}</td>
                      <td className="border p-2">
                        {appointment.client ||
                          `${appointment.firstName || ""} ${appointment.middleName || ""} ${appointment.lastName || ""}`.trim() ||
                          "Unknown Client"}
                      </td>
                      <td className="border p-2">{appointment.reason}</td>
                      <td className="border p-2 text-center">
                        <button
                          onClick={() => handleOpen(appointment.id)}
                          className="px-3 py-1 text-white rounded-lg"
                        >
                          <FaEnvelope size={26} color="#16a34a" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold text-red-700 text-center">
                Confirm Rejection
              </h2>
              <hr className="mb-2 mt-2" />
              <p className="mt-2 mb-3 text-black">
                Are you sure you want to reject this appointment, Why?
              </p>
              <textarea
                className="p-2 w-full bg-gray-200 rounded border mb-2 text-black"
                rows="3"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message here..."
              ></textarea>
              <div className="mt-4 flex justify-end gap-3">
                {/* Cancel Button */}
                <button
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                {/* Confirm Reject Button */}
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={handleRejectAppointment}
                >
                  Confirm Reject
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Admin_Evasco);
