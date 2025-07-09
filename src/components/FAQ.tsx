import {useState} from "react";
const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Handle the accordions
  const handleAccordion = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="faq max-w-7xl mx-auto pt-10">
        <h1 className="text-xl font-bold md:text-5xl lg:text-5xl text-center">Frequently Asked Questions</h1>
        <p className="font-bold mt-5 text-center">Find answers to common inquiries about my services and processes.</p>
        <div className="py-10 text-left font-bold">
          <div className="py-4 border-t-1 border-b-1 border-gray-200 ">
            <p onClick={handleAccordion} className="cursor-pointer">What services do we offer?</p>
          {isOpen && <p className="py-3">I offer a range of services including Full-Stack Development (Vue.js, React, Node.js), Technical Consulting, Project Leadership, Code Review & Mentoring, Browser Extension Development, and API Development & Integration. We can discuss your specific needs to tailor a service package.</p>}
          </div>
          <div className="py-4 border-t-1 border-b-1 border-gray-200 ">
            <p onClick={handleAccordion} className="cursor-pointer">What technologies do you specialize in?</p>
          {isOpen && <p className="py-3">I specialize in HTML5, CSS3, JavaScript (ES6+), React.js, and Tailwind CSS. I also have experience with TypeScript, Next.js, and frontend tooling like Webpack, Vite, and ESLint.</p>}
          </div>
          <div className="py-4 border-t-1 border-b-1 border-gray-200 ">
            <p onClick={handleAccordion} className="cursor-pointer">How do you stay updated with frontend trends?</p>
          {isOpen && <p className="py-3">I follow blogs, attend webinars, read documentation, and experiment with new tools and frameworks. I’m active on platforms like Dev.to, Twitter, and GitHub.</p>}
          </div>
          <div className="py-4 border-t-1 border-b-1 border-gray-200 ">
            <p onClick={handleAccordion} className="cursor-pointer">Do you have experience working with backend technologies?</p>
          {isOpen && <p className="py-3">Yes, while my main focus is frontend, I have experience integrating with RESTful APIs and working with backend tools like Node.js, Express.js, and Firebase for full-stack applications.</p>}
          </div>
          <div className="py-4 border-t-1 border-b-1 border-gray-200 ">
            <p onClick={handleAccordion} className="cursor-pointer">Do you follow responsive design and accessibility standards?</p>
          {isOpen && <p className="py-3">Absolutely. I ensure all my projects are fully responsive, mobile-first, and follow WCAG accessibility guidelines to provide an inclusive experience for all users.</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
