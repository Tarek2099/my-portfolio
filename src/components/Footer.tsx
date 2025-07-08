import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center gap-2 py-6 text-sm">
      <ul className="flex flex-row justify-center items-center gap-3 text-center text-lg text-blue-800">
        <li>
          <a
            href="https://github.com/Tarek2099"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/tarek209"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Tarek2099"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/tarek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
      </ul>
      <p>Designed & built by MD Tarek Rahman</p>
      <p className="flex flex-row justify-center items-center">
        © {new Date().getFullYear()} present, All rights reserved
      </p>
    </div>
  );
};

export default Footer;
