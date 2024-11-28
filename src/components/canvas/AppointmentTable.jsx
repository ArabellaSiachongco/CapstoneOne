import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../../wrapper";
import { styles } from "../../styles";
import { useNavigate } from "react-router-dom";

const AppointmentTable = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
  });

  const [minDate, setMinDate] = useState("");
  const [minTime, setMinTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Set the minimum date and time
    const now = new Date();

    // Format date 
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    setMinDate(`${year}-${month}-${day}`);

    // Format time 
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setMinTime(`${hours}:${minutes}`);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to the result 
    navigate("/appointment-result", { state: { formData } });
  };

  return (
    <>
      <p className={styles.paragraphSubText}>Schedule a</p>
      <h2 className={`${styles.headText} highlight-border`}>
        <span className="title-with-line">Consultation</span>
      </h2>

      <div className="p-6 border-2 border-orange-700 shadow-lg rounded-lg mt-10">
        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="mb-4 flex space-x-4">
            {/* First Name */}
            <div className="w-1/3">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
                placeholder="First name"
                required
              />
            </div>

            {/* Middle Name */}
            <div className="w-1/3">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="middleName"
              >
                Middle Name
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
                placeholder="Middle name"
              />
            </div>

            {/* Last Name */}
            <div className="w-1/3">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
                placeholder="Last name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="w-full mb-4">
            <label
              className="block text-white font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
              placeholder="sample@gmail.com"
              required
            />
          </div>

          {/* Date */}
          <div className="mb-4">
            <label
              className="block text-white font-medium mb-2"
              htmlFor="date"
            >
              Date of Appointment
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-orange-700"
              min={minDate}
              required
            />
          </div>

          {/* Time */}
          <div className="mb-4">
            <label
              className="block text-white font-medium mb-2"
              htmlFor="time"
            >
              Time of Appointment
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full mb-5 px-4 py-2 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
              min={formData.date === minDate ? minTime : undefined}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border text-white font-medium py-2 px-4 rounded-lg hover:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700"
          >
            Submit Appointment Request
          </button>
        </form>
      </div>
    </>
  );
};

export default SectionWrapper(AppointmentTable);
