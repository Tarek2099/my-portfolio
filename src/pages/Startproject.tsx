import { FaMailBulk, FaLinkedin, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";
import FAQ from "../components/FAQ";
import ThreeDot from "../components/ThreeDot";

const Startproject = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto py-5 pt-20 text-center">
        <div className="contact pb-10">
          <div className="py-10">
            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-5 text-center">
              Let's Work Together
            </h1>
            <p className="font-bold text-center">
              Ready to bring your ideas to life? Let's connect and start building
              something amazing together.
            </p>
          </div>
          <div className="mb-10">
            <h1 className="text-xl font-bold sm:text-4xl md:text-4xl lg:3xl mb-3 text-center">
              Choose Your Preferred Method
            </h1>
            <p className="text-center font-bold">
              Select the most convenient way to reach out, and I'll get back to
              you as soon as possible.
            </p>
          </div>
          <div className="contact-info flex flex-col gap-5 sm:flex-row md:flex-row lg:flex-row">
            <div className="text-center font-bold p-5 border-1 rounded-lg border-gray-300">
              <ThreeDot />
              <FaMailBulk className="w-10 md:w-12 lg:w-12 h-10 md:h-12 lg:h-12 mx-auto text-blue-800" />
              <h1 className="text-xl md:3xl lg:text-3xl mt-3 mb-1">Email</h1>
              <p className="mb-5">Send me an email anytime</p>
              <Link
                to="mailto:rahmantarek.dev@gmail.com"
                className="px-2 py-1 rounded-full bg-blue-800 text-white"
              >
                rahmantarek.dev@gmail.com
              </Link>
            </div>
            <div className="text-center font-bold p-5 border-1 rounded-lg border-gray-300">
              <ThreeDot />
              <FaLinkedin className="w-10 md:w-12 lg:w-12 h-10 md:h-12 lg:h-12 mx-auto text-blue-800" />
              <h1 className="text-xl md:3xl lg:text-3xl mt-3 mb-1">LinkedIn</h1>
              <p className="mb-5">Connect with me professionally</p>
              <Link
                to="https://www.linkedin.com/in/tarek2/"
                className="px-2 py-1 rounded-full bg-blue-800 text-white"
              >
                www.linkedin.com/in/tarek2/
              </Link>
            </div>
            <div className="text-center font-bold p-5 border-1 rounded-lg border-gray-300">
              <ThreeDot />
              <FaRegCalendarAlt className="w-10 md:w-12 lg:w-12 h-10 md:h-12 lg:h-12 mx-auto text-blue-800" />
              <h1 className="text-xl md:3xl lg:text-3xl mt-3 mb-1">Schedule a Call</h1>
              <p className="mb-5">Book a 30-min consultation</p>
              <Link
                to=""
                className="px-2 py-1 rounded-full bg-blue-800 text-white"
              >
                rahmantarek.dev@gmail.com
              </Link>
            </div>

          </div>
        </div>

      </div>
      <FAQ />
    </>
  );
};

export default Startproject;
