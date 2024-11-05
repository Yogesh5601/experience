import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "Figma",
      percentage: 92,
      icon: "https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png",
    },
    {
      name: "React",
      percentage: 89,
      icon: "https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png",
    },
    {
      name: "Next",
      percentage: 90,
      icon: "https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png",
    },
    {
      name: "JavaScript",
      percentage: 93,
      icon: "https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png",
    },
    {
      name: "TypeScript",
      percentage: 89,
      icon: "https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png",
    },
    {
      name: "Tailwind",
      percentage: 89,
      icon: "https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png",
    },
  ];
  return (
    <div id="skills" className="bg-[#0f0715] lg:py-28 px-3 lg:px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-10 py-20 lg:py-0">
        <div className="max-w-[600px] flex flex-col gap-4 justify-center items-center text-center">
          {/* Title with gradient text */}
          <div className="text-[45px] font-bold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text transition-transform duration-500 transform hover:scale-105">
            My Skills
          </div>

          {/* Description with improved styling */}
          <div className="text-gray text-base font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            vero, obcaecati ducimus veritatis consequuntur fugiat
            necessitatibus.
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6 justify-around items-center px-8">
          {skills.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 justify-center items-center text-center group relative overflow-hidden"
            >
              {/* Skill Card */}
              <div className="w-full flex flex-col items-center gap-4 bg-[#170f1c] rounded-3xl py-6 px-9 shadow-md border border-[#170f1c] transition duration-300 hover:shadow-lg hover:bg-[#2a1454] hover:border-accent">
                {/* Skill Icon */}
                <div className="w-full flex group relative">
                  {/* Default Skill Icon */}
                  <img
                    src={item.icon}
                    alt="Skill Icon"
                    className="w-20 h-20 object-contain transition duration-300 ease-in-out filter"
                    style={{
                      filter: "grayscale(100%) brightness(50%) saturate(1000%)",
                    }} // Apply a filter to get the desired color
                  />

                  {/* Hover Skill Icon with scaling effect */}
                  <img
                    src={item.icon}
                    alt="Skill Icon (Hover)"
                    className="absolute w-20 h-20 object-contain transition duration-500 ease-in-out filter opacity-0 group-hover:opacity-100 group-hover:scale-125"
                    style={{
                      filter: "none", // Remove filter on hover to show the original color
                    }}
                  />
                </div>

                {/* Skill Progress */}
                <div className="text-lg font-semibold text-[#626063] group-hover:text-accent relative z-10 transition-colors duration-300">
                  {item.percentage}%
                </div>
              </div>

              {/* Skill Name */}
              <p className="text-accent">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
