import { FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  // Navigate to the StartNew project page
  const handlestartproject = () => {
    navigate("/startproject");
  };
  return (
    <div className="header h-20 w-full max-w-7xl inset-x-0 mx-auto bg-transparent fixed z-5000 flex flex-row justify-between items-center py-4 px-8">
      <div className="logo">
        {/* <img className="w-10 h-10 rounded" src="/tarek.png" alt="Logo" /> */}
        <Link className="text-xl font-bold px-1 rounded-full cursor-pointer" to={"/"}>
          <span className="text-blue-800 text-sm">{"</> "}</span>tarek.dev
        </Link>
      </div>
      <div className="nav border-1 hidden lg:block border-gray-300 px-3 py-2 rounded-full backdrop-blur-md">
        <ul className="flex flex-row justify-between items-center gap-2 text-gray-500 text-center text-sm">
          <li>
            <Link
              to="/"
              className="focus:border-1 rounded-full border-gray-300 px-4 py-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="focus:border-1 rounded-full  border-gray-300  px-4 py-1"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="focus:border-1 rounded-full border-gray-300 px-4 py-1"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="focus:border-1 rounded-full border-gray-300 px-4 py-1"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="focus:border-1 rounded-full border-gray-300 px-4 py-1"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/more"
              className="focus:border-1 rounded-full border-gray-300 px-4 py-1"
            >
              More
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="start-project text-xs md:text-sm flex justify-center items-center gap-2 bg-gray-200 px-3 py-1 rounded-full cursor-pointer"
        onClick={handlestartproject}
      >
        <FaRocket /> Start Project
      </div>
    </div>
  );
};

export default Header;
