import React from "react";
import { FaBell, FaMoon, FaGlobe, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // Theme context import karein

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-800 dark:text-white">NTF</span>
            <span className="text-xs text-gray-500 hidden md:block dark:text-gray-400">
              NATIONAL TRADE FAIR
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 md:w-48 lg:w-64 dark:bg-gray-800 dark:text-white"
          />

          <button className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Post Your Requirement
          </button>
          <button className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition">
            Bid Now
          </button>
          <button className="text-gray-700 dark:text-gray-300 text-sm font-medium hover:text-gray-900 dark:hover:text-white">
            Login/Register
          </button>

          <div className="flex items-center space-x-2">
            <FaBell className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white cursor-pointer" />
            
            {/* Theme Toggle Button */}
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <FaMoon className="text-gray-600 hover:text-gray-800 cursor-pointer" />
              ) : (
                <FaSun className="text-yellow-500 hover:text-yellow-700 cursor-pointer" />
              )}
            </button>

            <FaGlobe className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white text-center py-2 text-sm">
        <p>Welcome to our new website! Stay tuned for exciting updates.</p>
      </div>
    </header>
  );
};

export default Header;
