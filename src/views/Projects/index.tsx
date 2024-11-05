import ProjectCard from "@/components/elements/Cards/ProjectCard";
import React from "react";

const Projects = () => {
 const projects = [
   {
     title: "Ordinl Novus",
     description: "An innovative project using cutting-edge technology.",
     techStacks: ["Next.js", "TypeScript", "Tailwind CSS"],
     imageSrc:
       "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-3-1024x877.jpg",
     url: "",
   },
   {
     title: "Ordinl Novus",
     description: "An innovative project using cutting-edge technology.",
     techStacks: ["Next.js", "TypeScript", "Tailwind CSS"],
     imageSrc:
       "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-3-1024x877.jpg",
     url: "",
   },
   {
     title: "Ordinl Novus",
     description: "An innovative project using cutting-edge technology.",
     techStacks: ["Next.js", "TypeScript", "Tailwind CSS"],
     imageSrc:
       "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-3-1024x877.jpg",
     url: "",
   },
   {
     title: "Ordinl Novus",
     description: "An innovative project using cutting-edge technology.",
     techStacks: ["Next.js", "TypeScript", "Tailwind", "CSS"],
     imageSrc:
       "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-3-1024x877.jpg",
     url: "",
   },
 ];

  return (
    <div className="py-28 bg-[#0f0715]" id="works">
      <div className="w-full flex flex-col justify-center items-center gap-10 max-w-screen-xl mx-auto px-3">
        <div className="text-4xl lg:[45px] font-bold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text transition-transform duration-500 transform hover:scale-105">
          My Recent Works
        </div>
        <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center gap-10 px-3">
          {projects?.map((item, index: number) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
