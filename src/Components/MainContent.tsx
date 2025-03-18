import {
  FaUsers,
  FaSyncAlt,
  FaDoorOpen,
  FaAngry,
  FaHandsHelping,
  FaMoneyBillWave,
  FaShieldAlt,
  FaClipboardList,
} from 'react-icons/fa';

const departments = [
  { name: 'Management', icon: <FaUsers /> },
  { name: 'Recruitment', icon: <FaSyncAlt /> },
  { name: 'Logistic', icon: <FaDoorOpen /> },
  { name: 'Harassment', icon: <FaAngry /> },
  { name: 'Welfare', icon: <FaHandsHelping /> },
  { name: 'Salary Issue', icon: <FaMoneyBillWave /> },
  { name: 'Sexual Harassment', icon: <FaShieldAlt /> },
  { name: 'Missed Attendance', icon: <FaClipboardList /> },
];

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow p-4 sm:p-8">
      {/* Title */}
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">INDOMAIN TECHNOLOGY PVT. LTD.</h1>

      {/* Grievance Department Section */}
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Select Grievance Department</h2>

      {/* Grid of Departments */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 sm:p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer transition duration-300"
          >
            <span className="text-3xl sm:text-4xl mb-2 sm:mb-3">{dept.icon}</span>
            <p className="text-center text-sm sm:text-base">{dept.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;