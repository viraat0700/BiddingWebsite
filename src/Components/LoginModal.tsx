import React, { useState } from "react";

interface LoginModalProps {
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
  error: string;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-80 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-600 text-lg"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border dark:border-gray-600 rounded-md px-3 py-2 mb-3 dark:bg-gray-800 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border dark:border-gray-600 rounded-md px-3 py-2 mb-3 dark:bg-gray-800 dark:text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => onLogin(email, password)}
        >
          Login
        </button>

        <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <button className="text-blue-600 hover:underline" onClick={onClose}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
