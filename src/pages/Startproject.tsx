import { FaMailBulk } from "react-icons/fa";
import { Link } from "react-router";
import FAQ from "../components/FAQ";

const Startproject = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto py-5 pt-20 text-center">
      <div className="contact">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold mb-2">
          Let's Work Together
        </h1>
        <p>
          Ready to bring your ideas to life? Let's connect and start building
          something amazing together.
        </p>
        <h1>Choose Your Preferred Method</h1>
        <p>
          Select the most convenient way to reach out, and I'll get back to you
          as soon as possible.
        </p>
        <div className="contact-info flex flex-col sm:flex-row md:flex-row lg:flex-row">
          <div>
            <FaMailBulk />
            <h1>Email</h1>
            <p>Send me an email anytime</p>
            <Link to="">rahmantarek.dev@gmail.com</Link>
          </div>
          <div>
            <FaMailBulk />
            <h1>Email</h1>
            <p>Send me an email anytime</p>
            <Link to="">rahmantarek.dev@gmail.com</Link>
          </div>
          <div>
            <FaMailBulk />
            <h1>Email</h1>
            <p>Send me an email anytime</p>
            <Link to="">rahmantarek.dev@gmail.com</Link>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Startproject;
