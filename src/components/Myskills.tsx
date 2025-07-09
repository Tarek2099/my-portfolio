import ThreeDot from "./ThreeDot";


const Myskills = () => {
  const skills = {
    languages: ["C", "JavaScript", "TypeScript", "Node.Js"],
    frameworks: ["Next.js", "tailwind", "Express"],
    frontend: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "SCSS"],
    testing: [""],
    databases: [],
    devops: [],
    automation: [],
    build: [],
    other: [],
  };
  return (
    <>
      <div className="skills max-w-7xl flex flex-col justify-center items-center mx-auto pt-10 pb-10">
        <h1 className="text-4xl font-bold mb-6">Skills & Expertise</h1>
        <p className="font-bold max-w-3xl text-center">
          Comprehensive technical expertise across modern web technologies,
          frameworks, and development practices.
        </p>
        <div className="flex flex-row gap-4 justify-center items-center h-full mt-7">
          <div className="flex flex-col gap-5 border-1 border-gray-400 rounded-lg h-[180px] px-5 py-3">
           <ThreeDot />
            <div className="text-3xl font-bold">
              {"</>"} <span>Languages</span>
            </div>
            <div className="flex flex-row gap-2">
              {skills.languages.map((lang) => (
                <div
                  key={lang}
                  className="text-xs px-2 py-1 border-1 border-gray-500 rounded-md text-gray-500"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myskills;
