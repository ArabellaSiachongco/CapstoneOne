import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { SectionWrapper } from "../../wrapper";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

const AppointmentModal = ({ formData, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4 text-center text-orange-700">
          Appointment Confirmed!
        </h2>
        <p className="text-gray-700 text-center">
          You have successfully booked an appointment in{" "}
          <strong>Magalgalit Law Office</strong>, Baguio City on{" "}
          <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
        </p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 border-2 border-orange-700 text-black rounded hover:bg-gray-500 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const AppointmentResult = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData;

  const handlePrevArticleClick = () => {
    navigate("/appointment-table");
  };

  const handleConfirmClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!formData) {
    return (
      <div className="text-center mt-10">
        <p className="text-white text-lg">No appointment details found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <p className={styles.paragraphSubText}>Appointment</p>
      <h2 className={`${styles.headText} highlight-border`}>
        <span className="title-with-line">Confirmation</span>
      </h2>
      <p className={styles.paragraphSubTextLower}>
        Please Review the details of your appointment. Keep in mind that this
        appointment is non-transferable.
      </p>

      {/* Appointment Details */}
      <div className="mt-6 mb-6">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td className="w-1/3 px-4 py-3 text-right border border-gray-300 font-semibold">
                First Name
              </td>
              <td className="w-2/3 px-4 py-3 border border-gray-300">
                {formData.firstName}
              </td>
            </tr>
            <tr>
              <td className="w-1/3 px-4 py-3 text-right border border-gray-300 font-semibold">
                Middle Name
              </td>
              <td className="w-2/3 px-4 py-3 border border-gray-300">
                {formData.middleName || "N/A"}
              </td>
            </tr>
            <tr>
              <td className="w-1/3 px-4 py-3 text-right border border-gray-300 font-semibold">
                Last Name
              </td>
              <td className="w-2/3 px-4 py-3 border border-gray-300">
                {formData.lastName}
              </td>
            </tr>
            <tr>
              <td className="w-1/3 px-4 py-3 text-right border border-gray-300 font-semibold">
                Date of Appointment
              </td>
              <td className="w-2/3 px-4 py-3 border border-gray-300">
                {formData.date}
              </td>
            </tr>
            <tr>
              <td className="w-1/3 px-4 py-3 text-right border border-gray-300 font-semibold">
                Time of Appointment
              </td>
              <td className="w-2/3 px-4 py-3 border border-gray-300">
                {formData.time}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className={styles.paragraphSubText}>Contact Information</p>
      <div className="mt-6 mb-6">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td className="w-1/3 px-4 py-3 text-right border border-gray-300 font-semibold">
                Email
              </td>
              <td className="w-2/3 px-4 py-3 border border-gray-300">
                {formData.email}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Embedded Map */}
      <div className="mt-8">
        <h3 className={`${styles.paragraphSubText} mb-3`}>Office Location</h3>
        <div className="overflow-hidden rounded-lg border-2 border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.8100522452935!2d120.59064956949452!3d16.412622399019856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a16f4d31ac6b%3A0x202c9d24bf1944d5!2sInsular%20Life!5e0!3m2!1sen!2sph!4v1732626377918!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>

      <div className="mt-10 text-center flex justify-between">
        <button
          onClick={handlePrevArticleClick}
          className="px-6 py-2 border-2 border-orange-700 text-white rounded-lg hover:bg-gray-500"
        >
          Go back
        </button>
       
        
            <Link
                onClick={handleConfirmClick}
                to="/lawyer-status"
                className="px-6 py-2 border-2 border-orange-700 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold flex items-center"
            > Confirm
            </Link>            
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        formData={formData}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

AppointmentResult.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default SectionWrapper(AppointmentResult);
