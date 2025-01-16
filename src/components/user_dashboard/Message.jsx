import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../../wrapper/index.js";
import { styles } from "../../styles.js";
import { db } from "../database/firebase.js"; // Ensure this points to your Firebase config
import { collection, query, where, orderBy, limit, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Auth to get the current user
import { findLawyerByName } from "../../constants/lawayersData.js";

const Message = () => {
    const [recentAppointment, setRecentAppointment] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const currentUser = auth.currentUser; // Get the current logged-in user

    useEffect(() => {
        if (!currentUser) {
            setLoading(false);
            return;
        }

        const fetchRecentAppointment = () => {
            const appointmentsRef = collection(db, "appointments");
            const recentQuery = query(
                appointmentsRef,
                where("email", "==", currentUser.email), // Filter by the logged-in user's email
                orderBy("timestamp", "desc"),
                limit(1)
            );

            const recent = onSnapshot(recentQuery, (snapshot) => {
                if (!snapshot.empty) {
                    const data = snapshot.docs[0].data();
                    setRecentAppointment({
                        id: snapshot.docs[0].id,
                        ...data,
                    });
                } else {
                    setRecentAppointment(null); // No appointment found
                }
                setLoading(false); // Set loading state to false once the data is fetched
            });

            return recent; // Cleanup the subscription on unmount
        };

        const recent = fetchRecentAppointment();
        return () => recent();
    }, [currentUser]); // Re-run effect if currentUser changes

    if (loading) {
        return <p>No recent appointments have been made</p>; // Show loading text while fetching data
    }

    // Get the lawyer name (using the function imported from lawyersData.js)
    const lawyerInfo = findLawyerByName(recentAppointment?.lawyer);

    return (
        <>
            <h2 className={`${styles.headText} highlight-border`}>
                <span className="title-with-line mb-5">Recent Appointment</span>
            </h2>
            <div className="flex">
                {/* Content */}
                <div className="w-3/4 p-4">
                    <h3 className="text-lg font-bold mt-3 mb-3">Scheduled Appointments</h3>
                    <div className="space-y-4">
                        {recentAppointment ? (
                            <div className="flex items-center justify-between border p-2 mt-2 rounded shadow-md">
                                <div>
                                    <p className="text-sm font-semibold">Name: {recentAppointment.firstName} {recentAppointment.lastName}</p>
                                    <p className="text-sm">Email: {recentAppointment.email}</p>
                                    <p className="text-sm">Date: {recentAppointment.date}</p>
                                    <p className="text-sm">Time: {recentAppointment.time}</p>
                                    <p className="text-sm">Reason: {recentAppointment.reasons}</p>
                                    {lawyerInfo ? (
                                        <>
                                            <p className="text-sm">Lawyer Name: {lawyerInfo.name}</p>
                                            <p className="text-sm">Title: {lawyerInfo.title}</p>
                                        </>
                                    ) : (
                                        <p className="text-sm text-red-500">Lawyer not found.</p>
                                    )}

                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        className="px-3 py-1 text-orange-400 rounded hover:text-orange-900"
                                        onClick={() => alert(`Message to ${recentAppointment.firstName}`)}
                                    >
                                        Message
                                    </button>
                                    <button
                                        className="px-2 text-red-600 hover:text-red-800"
                                        onClick={() => alert("Cancel appointment")}
                                    >
                                        ✖
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-500">No recent appointments found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Message);
