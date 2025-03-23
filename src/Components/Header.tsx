import React, { useState } from "react";
import { FaBell, FaGlobe } from "react-icons/fa";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ThemeToggle from "./ThemeToggle";

const dummyUser = { email: "test@example.com", password: "password123" };

const Header: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (email: string, password: string) => {
    if (email === dummyUser.email && password === dummyUser.password) {
      setIsLoggedIn(true);
      setShowLogin(false);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900 shadow-md">
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-800 dark:text-white">NTF</span>
            <span className="text-xs text-gray-500 hidden md:block dark:text-gray-400">NATIONAL TRADE FAIR</span>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm w-32 md:w-48 lg:w-64 dark:bg-gray-800 dark:text-white"
            />

            <button className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Post Your Requirement
            </button>
            <button className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition">
              Bid Now
            </button>

            {isLoggedIn ? (
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Welcome, User!</span>
            ) : (
              <button className="text-gray-700 dark:text-gray-300 text-sm font-medium hover:text-gray-900 dark:hover:text-white"
                onClick={() => setShowLogin(true)}
              >
                Login/Register
              </button>
            )}

            <div className="flex items-center space-x-2">
              <FaBell className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white cursor-pointer" />
              <ThemeToggle />
              <FaGlobe className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} error={error} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </>
  );
};

export default Header;
