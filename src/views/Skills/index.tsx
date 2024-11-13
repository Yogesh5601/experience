"use client"
import React from "react";
import { Fade } from "react-awesome-reveal";

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
      icon: "https://gerold.themejunction.net/wp-content/uploads/2024/05/react.png",
    },
    {
      name: "Next",
      percentage: 90,
      icon: "/images/Next.js.png",
    },
    {
      name: "JavaScript",
      percentage: 93,
      icon: "https://gerold.themejunction.net/wp-content/uploads/2024/05/js.png",
    },
    {
      name: "TypeScript",
      percentage: 89,
      icon: "/images/typescript.png",
    },
    {
      name: "Tailwind",
      percentage: 89,
      icon: "/images/Tailwind CSS.png",
    },
  ];
  return (
    <div id="skills" className="bg-[#0f0715] lg:py-28 px-3 lg:px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-10 py-20 lg:py-0">
        <div className="max-w-[600px] flex flex-col gap-4 justify-center items-center text-center">
          <Fade direction="up" delay={400} duration={1500} triggerOnce>
            <div className="text-[45px] font-bold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text transition-transform duration-500 transform">
              My Skills
            </div>
            <div className="text-gray mb-10  text-base">
              User specializes in full-stack development and UX design,
              proficient in Next.js, TypeScript, JavaScript, Tailwind CSS,
              Redux, and MongoDB.
            </div>
          </Fade>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6 justify-around items-center px-8">
          <Fade cascade direction="up" delay={100} duration={800} triggerOnce>
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
                        filter:
                          "grayscale(100%) brightness(50%) saturate(1000%)",
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
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;
