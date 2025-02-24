import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utility/motion";
import { SectionWrapper } from "../../wrapper";
import { db } from "../database/firebase";
import { doc, deleteDoc, Timestamp, collection, onSnapshot, addDoc, serverTimestamp, query, where } from "firebase/firestore";

const lawyers = {
  "Noel Magalgalit": {
    name: "Noel Magalgalit",
    title: "Civil Law",
    address: "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2660 Benguet",
  },
  "Palmer Fagyan Bugtong": {
    name: "Palmer Fagyan Bugtong",
    title: "Criminal Law",
    address: "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2600 Benguet",
  },
  "Jess B. Evasco": {
    name: "Jess B. Evasco",
    title: "Criminal Law",
    address: "Insular Life Building, Legarda Street, corner Abanao extension, Baguio, 2600 Benguet",
  },
};

const Header = () => {
  const [appointments, setAppointments] = useState({});
  const [pastAppointments, setPastAppointments] = useState({});
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [chatAppointment, setChatAppointment] = useState(null);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showPastAppointments, setShowPastAppointments] = useState(false);

  useEffect(() => {
    const appointmentsRef = collection(db, "appointments");
    const unsubscribe = onSnapshot(appointmentsRef, (snapshot) => {
      const currentAppointments = {};
      const pastAppointments = {};
      const currentDate = new Date();

      snapshot.forEach((doc) => {
        const appointment = doc.data();
        const lawyerName = appointment.lawyer?.name || "Unknown Lawyer";
        if (!lawyers[lawyerName]) return;

        if (!currentAppointments[lawyerName]) currentAppointments[lawyerName] = [];
        if (!pastAppointments[lawyerName]) pastAppointments[lawyerName] = [];

        const appointmentDate = appointment.date instanceof Timestamp ? appointment.date.toDate() : new Date(appointment.date);
        const formattedAppointment = {
          id: doc.id,
          date: appointmentDate.toLocaleDateString(),
          time: appointment.time || "No time provided",
          reasons: appointment.reasons || "No reasons provided",
          client: `${appointment.firstName || ""} ${appointment.lastName || ""}`.trim() || "Unknown Client",
        };

        if (appointmentDate >= currentDate) {
          currentAppointments[lawyerName].push(formattedAppointment);
        } else {
          pastAppointments[lawyerName].push(formattedAppointment);
        }
      });

      setAppointments(currentAppointments);
      setPastAppointments(pastAppointments);
    });

    return () => unsubscribe();
  }, []);

  const deleteAppointment = async (appointmentId, lawyerName) => {
    try {
      await deleteDoc(doc(db, "appointments", appointmentId));
      setAppointments((prev) => ({
        ...prev,
        [lawyerName]: prev[lawyerName].filter((a) => a.id !== appointmentId),
      }));
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        <h2 id="admin_appointment" className={`${styles.headText} highlight-border`}>
          <span className="title-with-line">Appointments</span>
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wide mb-5 mt-2">
        Manage appointments, send messages, and delete bookings.
      </motion.p>

      <div className="flex">
        <div className={`${styles.paragraphSubTextLower} mt-3 p-4 border-r`}> {/* Sidebar */}
          <table>
            <thead>
              <tr><th>Lawyer Name</th></tr>
            </thead>
            <tbody>
              {Object.keys(appointments).map((lawyer, index) => (
                <tr key={lawyer} onClick={() => setSelectedLawyer(lawyer)}>
                  <td className="cursor-pointer mb-1 hover:text-orange-700 p-2">{index + 1}. {lawyer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-3/4 p-4"> {/* Main Content */}
          {selectedLawyer && (
            <>
              <h3 className="text-lg font-bold">Appointments for {selectedLawyer}</h3>
              <button className="px-4 py-2 text-orange-400 rounded hover:text-orange-900" onClick={() => setShowPastAppointments(!showPastAppointments)}>
                {showPastAppointments ? 'Show Current Appointments' : 'Show Past Appointments'}
              </button>

              {(showPastAppointments ? pastAppointments[selectedLawyer] : appointments[selectedLawyer])?.map((appointment, index) => (
                <div key={index} className="border p-2 mt-2 rounded shadow-md">
                  <p><strong>Date:</strong> {appointment.date}</p>
                  <p><strong>Time:</strong> {appointment.time}</p>
                  <p><strong>Client:</strong> {appointment.client}</p>
                  <p><strong>Reason:</strong> {appointment.reasons}</p>
                  <button className="text-red-600 hover:text-red-800" onClick={() => deleteAppointment(appointment.id, selectedLawyer)}>✖</button>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Header, "header");
