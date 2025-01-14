import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utility/motion";
import { SectionWrapper } from "../../wrapper";

const Header = () => {
  function showAppointments(lawyerName) {
    const appointments = {
      Evasco: ['Meeting on Jan 15', 'Review documents on Jan 20'],
      Noel: [],
      Palmer: ['Call on Feb 1']
    };

    const appointmentDisplay = document.getElementById('appointmentDisplay');
    const lawyerAppointments = appointments[lawyerName];

    if (lawyerAppointments.length > 0) {
      appointmentDisplay.innerHTML = `Appointments for ${lawyerName}:<ul>` +
        lawyerAppointments.map(appt => `<li>${appt}</li>`).join('') +
        '</ul>';
    } else {
      appointmentDisplay.innerText = 'No appointment has been made';
    }
  }
  return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        {/* <p id="#lawyers" className={styles.paragraphSubText}>List of</p> */}
        <h2 className={`${styles.headText} highlight-border`}>
          <span className="title-with-line">Lawyers</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wide"
      >
        Quis ullamco sit Lorem est id consequat proident ad est nisi cillum.
      </motion.p>

      {/* Table */}
      <div className="flex">
        {/* Sidebar */}
        <div className={`${styles.paragraphSubTextLower} p-4 border-r`}>
          <ul>
            <li className="cursor-pointer mb-1 hover:bg-slate-700" onClick={() => showAppointments('Evasco')}>Evasco</li>                
            <li className="cursor-pointer mb-1 hover:bg-slate-700" onClick={() => showAppointments('Noel')}>Noel</li>
            <li className="cursor-pointer mb-1 hover:bg-slate-700" onClick={() => showAppointments('Palmer')}>Palmer</li>
          </ul>
        </div>

        {/* Content */}
        <div className="w-3/4 p-4">
          <h3 className="text-lg font-bold">Appointments</h3>
          <div id="appointmentDisplay">No appointment has been made</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SectionWrapper(Header);
