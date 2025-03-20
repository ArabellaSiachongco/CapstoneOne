import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { db, auth } from "../database/firebase";
import {
  collection,
  query,
  where,
  orderBy,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import "../layouts/admin_navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        setUnreadCount(0);
        setNotifications([]);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  // Fetch unread notifications and store them
  useEffect(() => {
    if (!user) return;

    const notificationsRef = collection(db, "notifications");
    const unsubscribe = onSnapshot(
      query(
        notificationsRef,
        where("userId", "==", "admin"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        const newNotifications = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNotifications(newNotifications);
        setUnreadCount(newNotifications.filter((n) => !n.read).length); // ✅ Fix unread count
      }
    );

    return () => unsubscribe();
  }, [user]);

  // Mark a specific notification as read
  const markNotificationAsRead = async (notificationId) => {
    try {
      // Mark as read in Firestore
      await updateDoc(doc(db, "notifications", notificationId), { read: true });

      // ✅ Remove the notification from state immediately
      setNotifications((prev) => prev.filter((notif) => notif.id !== notificationId));

      // ✅ Decrease the unread count
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (error) {
      console.error("Error updating notification:", error);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <nav className="admin_navbar">
        <div className="admin_navbar-container">
          <div className="text-white text-lg font-bold admin_logo highlight-border cursor-pointer">
            KARAPATAN KO
          </div>

          {user && (
            <div className="relative cursor-pointer ml-auto">
              {/* Notification Bell Icon */}
              <div onClick={() => setShowDropdown(!showDropdown)}>
                <FaBell className="text-2xl text-white" />
                {unreadCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-3">
                  <h3 className="font-semibold text-gray-700 border-b pb-2">
                    Notifications
                  </h3>
                  {/* ✅ Notifications List */}
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="notification p-2 border-b cursor-pointer hover:bg-gray-100"
                        onClick={() => markNotificationAsRead(notification.id)}
                      >
                        <p className="text-xs text-gray-600">{notification.message}</p>
                        {notification.details && (
                          <p className="text-lg text-black font-semibold mt-1">{notification.details}</p>
                        )}
                        <span className="text-xs text-gray-500">
                          {notification.timestamp
                            ? new Date(notification.timestamp.toDate()).toLocaleTimeString()
                            : "Unknown time"}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 p-2">
                      No new notifications
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          <button
            className={`admin-mobile-nav-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
