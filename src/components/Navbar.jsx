import React, { useState, useEffect, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { VscListSelection } from "react-icons/vsc";
import { FiSun, FiMoon, FiX } from "react-icons/fi";
import { navLinks } from "../constants"; // Ensure this file is correct

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    try {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    } catch {
      console.error("Error applying theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [active, setActive] = useState("");
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (title) => {
    setActive(title);
    setIsNavbarVisible(false);
  };

  return (
    <div className="relative">
      {/* Burger Icon */}
      <button
        id="navbar-toggle"
        onClick={() => setIsNavbarVisible((prev) => !prev)}
        className="fixed top-4 left-4 z-30 bg-primary dark:bg-gray-800 p-2 rounded"
        aria-label={isNavbarVisible ? "Close Navigation" : "Open Navigation"}
      >
        {isNavbarVisible ? <FiX className="text-white w-6 h-6" /> : <VscListSelection className="text-white w-6 h-6" />}
      </button>

      {/* Navbar */}
      <div
        id="navbar"
        className={`fixed top-0 left-0 h-full w-64 bg-primary dark:bg-gray-800 transform transition-transform duration-300 ease-in-out z-20 ${
          isNavbarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-5 border-b border-secondary dark:border-gray-700 flex items-center">
            <Link to="/" className="flex items-center gap-2" onClick={() => handleNavClick("")}>
              <div className="w-8 h-8 object-contain"></div>
              <p className="text-white dark:text-gray-200 text-lg font-bold">Karapatan Ko</p>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-4">
            <ul className="px-4 space-y-2">
              {Array.isArray(navLinks) && navLinks.length > 0 ? (
                navLinks.map((nav) => (
                  <li key={nav.id}>
                    {/* Use `href` for same-page navigation */}
                    {nav.id.startsWith("#") ? (
                      <a
                        href={nav.id}
                        className={`block p-3 rounded-lg text-lg transition-colors duration-200 ${
                          active === nav.title
                            ? "bg-secondary/20 dark:bg-gray-700/30 text-white"
                            : "hover:bg-secondary/10 dark:hover:bg-gray-700/20 text-secondary dark:text-gray-300"
                        }`}
                        onClick={() => handleNavClick(nav.title)}
                      >
                        {nav.title}
                      </a>
                    ) : (
                      // Use `to` for route-based navigation
                      <Link
                        to={nav.id}
                        className={`block p-3 rounded-lg text-lg transition-colors duration-200 ${
                          active === nav.title
                            ? "bg-secondary/20 dark:bg-gray-700/30 text-white"
                            : "hover:bg-secondary/10 dark:hover:bg-gray-700/20 text-secondary dark:text-gray-300"
                        }`}
                        onClick={() => handleNavClick(nav.title)}
                      >
                        {nav.title}
                      </Link>
                    )}
                  </li>
                ))
              ) : (
                <li className="text-center text-secondary dark:text-gray-400">No links available</li>
              )}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <div className="p-4 border-t border-secondary dark:border-gray-700">
            <button
              onClick={toggleTheme}
              className="w-full p-2 rounded-lg bg-gray-200/20 dark:bg-gray-700/20 text-white flex items-center justify-center space-x-2"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <FiMoon className="w-6 h-6" /> : <FiSun className="w-6 h-6" />}
              <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isNavbarVisible && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsNavbarVisible(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Navbar;



