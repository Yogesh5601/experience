"use client";
import ProjectCard from "@/components/elements/Cards/ProjectCard";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const projects = [
    {
      title: "Ordinl Novus",
      description:
        "The ultimate platform for NFT enthusiasts, collectors, and creators.",
      techStacks: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
      imageSrc: "/images/ordinalnovus.png",
      url: "https://ordinalnovus.com/",
    },
    {
      title: "coderixx",
      description:
        "Coderixx empowers businesses with expert blockchain solutions for growth and innovation.",
      techStacks: ["Next.js", "TypeScript", "Tailwind CSS"],
      imageSrc: "/images/coderixx.png",
      url: "https://coderixx.com/",
    },
    {
      title: "Falcon",
      description:
        " the ultimate platform to Launch NFT, collections, and tokens.",
      techStacks: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
      imageSrc:
        "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-3-1024x877.jpg",
      url: "https://ordinalnovus.com/",
    },
  ];

  return (
    <div className="py-28 bg-[#0f0715]" id="works">
      <div className="w-full flex flex-col justify-center items-center gap-10 max-w-screen-xl mx-auto px-3">
        {/* <Fade direction="up" delay={400} duration={1500}> */}
        <div className="text-4xl lg:[45px] font-bold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text transition-transform duration-500 transform">
          My Recent Works
        </div>
        {/* </Fade> */}
        <Fade direction="left" delay={400} duration={1500} triggerOnce>
          <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center gap-10 px-3">
            {projects?.map((item, index: number) => (
              <ProjectCard key={index} item={item} />
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
