"use client";
import React from "react";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { GiAchievement } from "react-icons/gi";
import ResumeCard, { ResumeItem } from "@/components/elements/Cards/ResumeCard";
import { Fade } from "react-awesome-reveal";

const Resume = () => {
  const Educations = [
    {
      time: "2018 - 2022",
      role: "Bachelors of Technology(CSE)",
      address: "Chhatarpur Madhya pradesh",
    },
    {
      time: "2017 - 2018",
      role: "Intermediat",
      address: "Chhatarpur Madhya pradesh",
    },
    {
      time: "2014 - 2015",
      role: "Higher Secondary",
      address: "Chhatarpur Madhya pradesh",
    },
  ];

  const Experience = [
    {
      time: "01/2024 - 11/2024",
      role: "Full Stack developer",
      address: "coderixx Labs (Noida UP)",
    },
    {
      time: "2023 - 2024",
      role: "Internship(Remote)",
      address: "coderixx Labs (Noida UP)",
    },
    {
      time: "2022 - 2023",
      role: "Internship ",
      address: "indore MP",
    },
  ];
  return (
    <div
      id="resume"
      className="w-full flex flex-col lg:flex-row justify-center item:center lg:justify-between max-w-screen-xl mx-auto gap-10 lg:gap-6 py-20 lg:py-28 px-3 "
    >
      {/* my education */}
      <div className="w-full lg:w-6/12 flex flex-col gap-8">
        <div className="w-full flex  gap-4 ">
          <GiAchievement size={48} color="#8750f7" />

          <h1 className="text-4xl lg:text-[45px] font-bold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text">
            My Experience
          </h1>
        </div>

        <div className="w-full flex ">
          <div className="w-full lg:w-10/12 flex flex-col gap-6">
            <Fade direction="left" delay={400} duration={1500} triggerOnce>
              {Experience.map(
                (item: ResumeItem, index: React.Key | null | undefined) => (
                  <ResumeCard key={index} item={item} />
                )
              )}
            </Fade>
          </div>
        </div>
      </div>

      {/* my experience */}
      <div className="w-full lg:w-6/12 flex flex-col gap-8">
        <div className="w-full flex gap-4 ">
          <LiaGraduationCapSolid size={48} color="#8750f7" />
          <h1 className="text-4xl lg:text-[45px] font-bold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text">
            My Education
          </h1>
        </div>
        <div className="w-full flex">
          <div className="w-full lg:w-10/12 flex flex-col gap-6">
            <Fade direction="right" delay={400} duration={1500} triggerOnce>
              {Educations.map(
                (item: ResumeItem, index: React.Key | null | undefined) => (
                  <ResumeCard key={index} item={item} />
                )
              )}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
