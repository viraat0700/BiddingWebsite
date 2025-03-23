import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <FaMoon className="text-gray-600 hover:text-gray-800 cursor-pointer" />
      ) : (
        <FaSun className="text-yellow-500 hover:text-yellow-700 cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeToggle;
