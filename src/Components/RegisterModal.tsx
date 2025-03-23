import React from "react";

interface RegisterModalProps {
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-80 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-600 text-lg"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Register</h2>

        <input type="text" placeholder="Full Name" className="w-full border dark:border-gray-600 rounded-md px-3 py-2 mb-3 dark:bg-gray-800 dark:text-white" />
        <input type="email" placeholder="Email" className="w-full border dark:border-gray-600 rounded-md px-3 py-2 mb-3 dark:bg-gray-800 dark:text-white" />
        <input type="password" placeholder="Password" className="w-full border dark:border-gray-600 rounded-md px-3 py-2 mb-3 dark:bg-gray-800 dark:text-white" />

        <button className="w-full bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition">Register</button>

        <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <button className="text-blue-600 hover:underline" onClick={onClose}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
