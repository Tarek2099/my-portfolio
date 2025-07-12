import { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // Handle the accordions
  const handleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="py-4 border-t-1 border-b-1 border-gray-200 ">
        <p onClick={handleAccordion} className="cursor-pointer">
          {title}
        </p>
        {isOpen && <p className="py-3">{content}</p>}
      </div>
    </div>
  );
};

export default Accordion;
