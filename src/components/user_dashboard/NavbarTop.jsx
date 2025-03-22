import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { db } from "../database/firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  updateDoc,
  doc,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser); // ✅ Set user state
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!user) return; // ✅ Prevent query if user is null

    const notificationsRef = collection(db, "notifications");
    const q = query(
      collection(db, "notifications"),
      where("userId", "==", user.uid), // 🔹 Match logged-in user's notifications
      where("read", "==", false),
      orderBy("timestamp", "desc")
    );    

    const unsubscribeNotifications = onSnapshot(q, (snapshot) => {
      setUnreadCount(snapshot.docs.length);
      setNotifications(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribeNotifications();
  }, [user]);

  const markNotificationAsRead = async (notifId) => {
    const notifRef = doc(db, "notifications", notifId);
    await updateDoc(notifRef, { read: true });

    setNotifications((prev) => prev.filter((n) => n.id !== notifId));
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  const markAllAsRead = async () => {
    const updates = notifications.map(async (notif) => {
      const notifRef = doc(db, "notifications", notif.id);
      return updateDoc(notifRef, { read: true });
    });

    await Promise.all(updates); // ✅ Wait for all updates to complete
    setNotifications([]);
    setUnreadCount(0);
    setShowDropdown(false);
  };

  const handleSendMessage = async (chatMessage, chatAppointment) => {
    if (!chatMessage.trim() || !chatAppointment) return;

    try {
      await addDoc(collection(db, "messages"), {
        sender: "admin",
        recipient: chatAppointment.client,
        appointmentId: chatAppointment.id,
        lawyerId: chatAppointment.lawyer.id,
        details: chatMessage,
        date: serverTimestamp(),
      });

      await addDoc(collection(db, "notifications"), {
        userId: chatAppointment.clientId,
        message: `New message from admin`,
        details: chatMessage.trim(),
        read: false,
        timestamp: serverTimestamp(),
      });

      console.log("Message and notification sent!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-primary"}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/main" className="flex items-center gap-2" onClick={() => setActive("/")}>
          <img className="w-9 h-9 object-contain" src="/assets/logo2.png" alt="Logo" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Karapatan &nbsp;<span className="sm:block hidden">Ko</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.id ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                navigate(nav.id);
                setActive(nav.id);
              }}
            >
              {nav.title}
            </li>
          ))}

          {/* Notification Bell */}
          {user && (
            <div className="relative cursor-pointer ml-auto">
              <div onClick={() => setShowDropdown(!showDropdown)}>
                <FaBell className="text-2xl text-white" />
                {unreadCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>

              {/* Notification Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-3">
                  <h3 className="font-semibold text-gray-700 border-b pb-2 flex justify-between">
                    Notifications
                    {notifications.length > 0 && (
                      <button className="text-blue-500 text-sm" onClick={markAllAsRead}>
                        Mark all as read
                      </button>
                    )}
                  </h3>
                  {notifications.length > 0 ? notifications.map((notification) => (
                    <div key={notification.id} className="notification p-2 border-b cursor-pointer hover:bg-gray-100" onClick={() => markNotificationAsRead(notification.id)}>
                      <p className="text-sm font-semibold">{notification.message}</p>
                      {notification.details && <p className="text-xs text-gray-600 mt-1">{notification.details}</p>}
                      <span className="text-xs text-gray-500">
                        {notification.timestamp ? new Date(notification.timestamp.toDate()).toLocaleTimeString() : "Unknown time"}
                      </span>
                    </div>
                  )) : (
                    <p className="text-sm text-gray-500 p-2">No new notifications</p>
                  )}
                </div>
              )}
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
