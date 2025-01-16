import React, { useState } from 'react';
import Books from './Books';
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utility/motion";
import { SectionWrapper } from "../../wrapper";

// if alphabetically yung labas ng schedule niya 
const Header = () => {
  const initialAppointments = {
    Evasco: ['Meeting on Jan 15', 'Review documents on Jan 20'],
    Noel: [],
    Palmer: ['Call on Feb 1'],
  };

  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [chatAppointment, setChatAppointment] = useState(null);
  const [chatMessage, setChatMessage] = useState("");

  const handleShowAppointments = (lawyerName) => {
    setSelectedLawyer(lawyerName);
  };

  const handleSendMessage = () => {
    alert(`Message sent: ${chatMessage}`);
    setChatMessage("");
    setChatAppointment(null); // Close the chat box after sending
  };

  const rejectAppointment = (lawyerName, appointmentIndex) => {
    setAppointments((prev) => ({
      ...prev,
      [lawyerName]: prev[lawyerName].filter((_, index) => index !== appointmentIndex),
    }));
  };

  const lawyerAppointments = selectedLawyer ? appointments[selectedLawyer] : [];

  return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        <h2 id='admin_appointment' className={`${styles.headText} highlight-border`}>
          <span className="title-with-line">Appointment</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wide mb-5"
      >
        Select a lawyer to view their appointments.
      </motion.p>

      <div className="flex">
        <div className={`${styles.paragraphSubTextLower} mt-3 p-4 border-r`}>
          <table>
            <thead>
              <tr>
                <th>Lawyers Name</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(appointments).map((lawyer, index) => (
                <tr key={lawyer} onClick={() => handleShowAppointments(lawyer)}>
                  <td className="cursor-pointer mb-1 hover:text-orange-700 p-2">{index + 1}. {lawyer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Content */}
        <div className="w-3/4 p-4">
          <h3 className="text-lg font-bold mt-3 mb-3">Scheduled Appointments</h3>
          <div className="space-y-4">
            {lawyerAppointments.length === 0 ? (
              <p>No appointment has been made</p>
            ) : (
              lawyerAppointments.map((appointment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border p-2 mt-2 rounded shadow-md"
                >
                  <span>{appointment}</span>
                  <div className="flex space-x-2">
                    <button
                      className="px-3 py-1 text-orange-400 rounded hover:text-orange-900"
                      onClick={() => setChatAppointment(appointment)}
                    >
                      Message
                    </button>
                    <button
                      className="px-2 text-red-600 hover:text-red-800"
                      onClick={() => rejectAppointment(selectedLawyer, index)}
                    >
                      ✖
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Chat Box */}
      {chatAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-black border border-2 rounded-lg p-4 w-1/3 shadow-lg">
            <h3 className={`${styles.paragraphSubText} highlight-border mb-4`}> <b>Chat about: {chatAppointment} </b></h3>
            <textarea
              className="w-full p-2 bg-slate-600 rounded mb-4"
              rows="5"
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
      {/* <div className="mt-44">
        <Books />
      </div> */}
    </>
  );
};

export default SectionWrapper(Header);
