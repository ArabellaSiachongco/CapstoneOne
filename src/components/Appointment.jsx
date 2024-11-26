import { styles } from '../styles';
import { SectionWrapper } from "/src/wrapper";
import { Link } from "react-router-dom";

const Appointment = () => {
    return (
        <div>
            <p className={styles.paragraphSubText}>
                Instructions for booking an
            </p>
            <h2 className={`${styles.headText} highlight-border`}>
                <span className="title-with-line">Appointment</span>
            </h2>

            <table className="mt-5 w-full border-collapse border border-gray-200">
                <tbody>
                    <tr>
                        <td
                            className={`${styles.appointmentSubTextLower} border border-gray-300 p-3`}
                        >
                            1. Securing an appointment is <b>FREE OF CHARGE</b>  and Appointment Slip is <b>NON-TRANSFERABLE</b>.
                        </td>
                    </tr>
                    <tr>
                        <td
                            className={`${styles.appointmentSubTextLower} border border-gray-300 p-3`}
                        >
                            2. <b>MINORS</b> are not allowed to book an appointment.
                        </td>
                    </tr>
                    <tr>
                        <td
                            className={`${styles.appointmentSubTextLower} border border-gray-300 p-3`}
                        >
                            3. The appointment must be named after the requester who will personally apply at the Magalgalit Law Office.
                        </td>
                    </tr>
                    <tr>
                        <td
                            className={`${styles.appointmentSubTextLower} border border-gray-300 p-3`}
                        >
                            4. Be at the Magalgalit Law Office at least 30 minutes before the appointment schedule.
                        </td>
                    </tr>
                    <tr>
                        <td value="checkbox"
                        className={`${styles.appointmentSubTextLower} border border-gray-300 p-3`}
                        > I agree to the collection and use of the data that I will provide through this form by PSA for the purpose of booking an appointment. I understand that the collection and use of this data, which may include personal and sensitive personal information, shall be in accordance with the Data Privacy Act of 2021.
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-5 flex justify-end">
            <Link
                to="/appointment-table"
                className="px-6 py-2 border-2 border-orange-500 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold flex items-center"
            > Make an Appointment
            </Link>
            </div>
        </div>
    );
};

export default SectionWrapper(Appointment);
