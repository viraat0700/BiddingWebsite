const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 sm:p-6 flex flex-col sm:flex-row justify-center items-center">
      <div className="text-center">
        <p className="text-xs sm:text-sm mb-2 sm:mb-0">© 2023 Insolution Hub Pvt. Ltd. All rights reserved. Version 2.0</p>
        <a href="#top" className="text-blue-400 hover:underline text-xs sm:text-sm block">
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;