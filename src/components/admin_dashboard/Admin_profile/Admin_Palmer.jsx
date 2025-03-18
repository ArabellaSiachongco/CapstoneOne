import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import { fadeIn, textVariant } from "../../../utility/motion";
import { SectionWrapper } from "../../../wrapper";
import { db } from "../../database/firebase";
import { Timestamp, collection, onSnapshot, getDocs, deleteDoc, doc } from "firebase/firestore";

const PALMER_NAME = "Palmer Fagyan Bugtong"; // Change this to match the exact name stored in Firestore

const Admin_Palmer = () => {
  const [appointments, setAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [archivedAppointments, setArchivedAppointments] = useState([]);
  const [showArchivedAppointments, setShowArchivedAppointments] = useState(false);

  useEffect(() => {
    const appointmentsRef = collection(db, "appointments");
    const unsubscribe = onSnapshot(appointmentsRef, (snapshot) => {
      const currentAppointments = [];
      const pastAppointmentsList = [];
      const currentDate = new Date();

      snapshot.forEach((doc) => {
        const appointment = doc.data();
        if (appointment.lawyer?.name !== PALMER_NAME) return;

        const appointmentDate =
          appointment.date instanceof Timestamp
            ? appointment.date.toDate()
            : new Date(appointment.date);

        const formattedAppointment = {
          id: doc.id,
          date: appointmentDate.toLocaleDateString(),
          time: appointment.time || "No time provided",
          reasons: appointment.reasons || "No reasons provided",
          client: `${appointment.firstName || ""} ${appointment.lastName || ""}`.trim() || "Unknown Client",
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

  const fetchArchivedAppointments = async () => {
    if (showArchivedAppointments) {
      setShowArchivedAppointments(false);
      return;
    }

    try {
      const archivedRef = collection(db, "archived_appointments");
      const snapshot = await getDocs(archivedRef);
      const archives = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((appointment) => appointment.lawyer?.name === PALMER_NAME);
      setArchivedAppointments(archives);
      setShowArchivedAppointments(true);
    } catch (error) {
      console.error("Error fetching archived appointments:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "appointments", id));
      setAppointments((prev) => prev.filter((appt) => appt.id !== id));
      setPastAppointments((prev) => prev.filter((appt) => appt.id !== id));
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        <h2 id="admin_appointment" className={`${styles.headText} highlight-border`}>
          <span className="title-with-line">Palmer's Appointments</span>
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wide mb-5 mt-2">
        Manage Palmer's appointments, send messages, and delete bookings.
      </motion.p>

      <div className="w-3/4 p-4">
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Current Appointments</th>
              <th className="border p-2">Past Appointments</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border p-2">
                  {appointment.date} - {appointment.time} <br />
                  <strong>Client:</strong> {appointment.client} <br />
                  <strong>Reason:</strong> {appointment.reasons}
                </td>
                <td className="border p-2 text-center">-</td>
                <td className="border p-2 text-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded">Message</button>
                </td>
                <td className="border p-2 text-center">
                  <button onClick={() => handleDelete(appointment.id)} className="px-3 py-1 bg-red-500 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {pastAppointments.map((appointment, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border p-2 text-center">-</td>
                <td className="border p-2">
                  {appointment.date} - {appointment.time} <br />
                  <strong>Client:</strong> {appointment.client} <br />
                  <strong>Reason:</strong> {appointment.reasons}
                </td>
                <td className="border p-2 text-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded">Message</button>
                </td>
                <td className="border p-2 text-center">
                  <button onClick={() => handleDelete(appointment.id)} className="px-3 py-1 bg-red-500 text-white rounded">
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

        {/* Archived Appointments Button */}
        <button
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          onClick={fetchArchivedAppointments}
        >
          {showArchivedAppointments ? "Hide Archived Appointments" : "Show Archived Appointments"}
        </button>

        {/* Archived Appointments List (only shown when button is clicked) */}
        {showArchivedAppointments && archivedAppointments.length > 0 && (
          <div className="mt-4 p-4 border rounded shadow-md bg-gray-100">
            <h3 className="text-lg font-bold">Archived Appointments</h3>
            <ul className="list-disc pl-6">
              {archivedAppointments.map((appointment, index) => (
                <li key={index} className="mt-2">
                  {appointment.date} - {appointment.time} <br />
                  <strong>Client:</strong> {appointment.client} <br />
                  <strong>Reason:</strong> {appointment.reasons}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Admin_Palmer);
