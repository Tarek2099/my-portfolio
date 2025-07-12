interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Frequently Asked Questions",
    content:
      "Find answers to common inquiries about my services and processes.",
  },
  {
    title: "What services do we offer?",
    content:
      "I offer a range of services including Full-Stack Development (Vue.js, React, Node.js), Technical Consulting, Project Leadership, Code Review & Mentoring, Browser Extension Development, and API Development & Integration. We can discuss your specific needs to tailor a service package.",
  },
  {
    title: "What technologies do you specialize in?",
    content:
      "I specialize in HTML5, CSS3, JavaScript (ES6+), React.js, and Tailwind CSS. I also have experience with TypeScript, Next.js, and frontend tooling like Webpack, Vite, and ESLint.",
  },
  {
    title: "How do you stay updated with frontend trends?",
    content:
      "I follow blogs, attend webinars, read documentation, and experiment with new tools and frameworks. I’m active on platforms like Dev.to, Twitter, and GitHub.",
  },
  {
    title: "Do you have experience working with backend technologies?",
    content:
      "Yes, while my main focus is frontend, I have experience integrating with RESTful APIs and working with backend tools like Node.js, Express.js, and Firebase for full-stack applications.",
  },
  {
    title: "Do you follow responsive design and accessibility standards?",
    content:
      "Absolutely. I ensure all my projects are fully responsive, mobile-first, and follow WCAG accessibility guidelines to provide an inclusive experience for all users.",
  },
];

export default accordionData;
