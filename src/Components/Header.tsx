import logo from '../assets/IT.png'; 

const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="mb-4 sm:mb-0">
        <img src={logo} alt="Indomain Technology Logo" className="h-12" />
      </div>

      {/* Buttons and Language Selector */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto">
          Track Your GRIEVANCE
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full sm:w-auto">
          Organization Login
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full sm:w-auto">
          Manager Login
        </button>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google Translate"
            className="h-6"
          />
          <select className="border rounded p-1 w-full sm:w-auto">
            <option>Select Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;