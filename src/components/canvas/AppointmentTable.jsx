import React, { useState } from "react";
import { SectionWrapper } from "../../wrapper"
import { styles } from "../../styles";
import { useNavigate } from "react-router-dom"; // Import useNavigate


// 3E48625FC9690E4AE4AD76B053F5779776EB9734752C7AD852408517FF7046FFAD8EE57AE3C2FB65A5F34DFC5DC0E8A7
const AppointmentTable = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        date: "",
        time: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Navigate to the result page with formData
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
                {/* Name Fields in One Row */}
                <div className="mb-4 flex space-x-4">
                    {/* First Name */}
                    <div className="w-1/3">
                        <label className="block text-white font-medium mb-2" htmlFor="firstName">
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
                        <label className="block text-white font-medium mb-2" htmlFor="middleName">
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
                        <label className="block text-white font-medium mb-2" htmlFor="lastName">
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
                {/* email  */}
                <div className="w-full mb-4">
                        <label className="block text-white font-medium mb-2" htmlFor="email">
                           Email
                        </label>
                        <input
                            type="text"
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
                    <label className="block text-white font-medium mb-2" htmlFor="date">
                        Date of Appointment
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-orange-700"
                        required
                    />
                </div>

                {/* Time */}
                <div className="mb-4">
                    <label className="block text-white font-medium mb-2" htmlFor="time">
                        Time of Appointment
                    </label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full mb-5 px-4 py-2 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
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
