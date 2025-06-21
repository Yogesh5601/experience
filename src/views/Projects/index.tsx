"use client";
import ProjectCard from "@/components/elements/Cards/ProjectCard";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const projects = [
    {
      title: "Vacay stay",
      description:
        "Vacay stay is a vacation rental website, where user can book properties for the vacations.",
      techStacks: ["Next.js", "TypeScript", "Redux", "Tailwind CSS", "Shadcn-ui", "Mongodb", "NextAuth", "Firebase"],
      imageSrc: "/images/vacaystay.png",
      url: "https://vacaystay.vercel.app/",
      github: "https://github.com/Yogesh5601/vacaystay",
    },
    {
      title: "Coderixx Labs",
      description:
        "Coderixx empowers businesses with expert blockchain solutions for growth and innovation.",
      techStacks: ["Next.js", "TypeScript", "Tailwind CSS", "Mongodb"],
      imageSrc: "/images/coderixx.png",
      url: "https://coderixxlabs.vercel.app/",
      github: "https://github.com/Yogesh5601/coderixx",
    },
    {
      title: "Ordinl Novus",
      description:
        "The ultimate platform for NFT enthusiasts, collectors, and creators.",
      techStacks: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
      imageSrc: "/images/ordinalnovus.png",
      url: "https://ordinalnovus.com/",
      github: "",
    },
    {
      title: "Falcon Launchpad",
      description:
        " the ultimate platform to Launch NFT, collections, and tokens.",
      techStacks: ["Next.js", "TypeScript", "Redux", "Tailwind CSS", "Mongodb"],
      imageSrc: "/images/falcon.jpg",
      url: "https://ordinalnovus.com/",
      github: "",
    },
    // {
    //   title: "NSE-MBW",
    //   description:
    //     "the ultimate platform to Launch NFT, collections, and tokens.",
    //   techStacks: ["Next.js", "TypeScript", "Redux", "Tailwind CSS", "Shadcn-ui"],
    //   imageSrc: "/images/nse-mbw.png",
    //   url: "https://nse-mbw.vercel.app/",
    //   github: "https://github.com/Yogesh5601/nse-mbw",
    // },
   
  ];

  return (
    <div className="py-20 lg:py-28 bg-[#0f0715]" id="works">
      <div className="w-full flex flex-col justify-center items-center gap-10 max-w-screen-xl mx-auto px-3">
        <div className="max-w-[600px] flex flex-col gap-4 justify-center items-center text-center">
          <Fade direction="up" delay={400} duration={1500} triggerOnce>
            <div className="text-4xl lg:text-[45px] font-bold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text transition-transform duration-500 transform">
              My Recent Work
            </div>
            <div className="text-gray mb-10 max-w-lg mx-auto text-base">
              Explore my latest projects, featuring innovative solutions, modern
              designs, and seamless user experiences built with cutting-edge
              technologies.
            </div>
          </Fade>
        </div>
        <Fade direction="left" delay={400} duration={1500} triggerOnce>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-3">
            {projects?.map((item, index: number) => (
              <ProjectCard key={index} item={item} index={0} />
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
