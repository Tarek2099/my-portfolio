import { FaRocket } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header h-20 w-full max-w-7xl inset-x-0 mx-auto bg-transparent fixed z-5000 flex flex-row justify-between items-center py-4 px-8">
      <div className="logo">
        {/* <img className="w-10 h-10 rounded" src="/tarek.png" alt="Logo" /> */}
        <h3 className="text-xl font-bold">
          <span className="text-blue-800 text-sm">{"</> "}</span>tarek.dev
        </h3>
      </div>
      <div className="nav border-1 border-gray-300 px-3 py-2 rounded-full backdrop-blur-md">
        <ul className="flex flex-row justify-between items-center gap-2 text-gray-500 text-center text-sm">
          <li>
            <a
              href="#home"
              className="focus:border-1 rounded-full border-gray-300 px-4 py-1"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="focus:border-1 rounded-full  border-gray-300  px-4 py-1"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="focus:border-1 rounded-full border-gray-300 px-4 py-1"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="focus:border-1 rounded-full border-gray-300 px-4 py-1"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="focus:border-1 rounded-full border-gray-300 px-4 py-1"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#more"
              className="focus:border-1 rounded-full border-gray-300 px-4 py-1"
            >
              More
            </a>
          </li>
        </ul>
      </div>
      <div className="start-project flex justify-center items-center gap-2 bg-gray-200 px-3 py-1 rounded-full cursor-pointer">
        <FaRocket /> Start Project
      </div>
    </div>
  );
};

export default Header;
