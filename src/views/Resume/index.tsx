import React from "react";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { GiAchievement } from "react-icons/gi";
import ResumeCard, { ResumeItem } from "@/components/elements/Cards/ResumeCard";



const Resume = () => {
  const Educations = [
    {
      time: "2018 - present",
      role: "Lead Developer",
      address: "noida uttar pradesh",
    },
    {
      time: "2018 - present",
      role: "Lead Developer",
      address: "noida uttar pradesh",
    },
    {
      time: "2018 - present",
      role: "Lead Developer",
      address: "noida uttar pradesh",
    },
  ];
  return (
    <div
      id="resume"
      className="w-full flex flex-col lg:flex-row justify-center item:center lg:justify-between max-w-screen-xl mx-auto gap-10 lg:gap-6 py-20 lg:py-28 px-3 "
    >
      {/* my education */}
      <div className="w-full lg:w-6/12 flex flex-col gap-8">
        <div className="w-full flex gap-4 ">
          <GiAchievement size={48} color="#8750f7" />
          <h1 className="text-4xl lg:text-5xl font-semibold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text">
            My Experience
          </h1>
        </div>
        <div className="w-full flex ">
          <div className="w-full lg:w-10/12 flex flex-col gap-6">
            {Educations.map(
              (item: ResumeItem, index: React.Key | null | undefined) => (
                <ResumeCard key={index} item={item} />
              )
            )}
          </div>
        </div>
      </div>

      {/* my experience */}
      <div className="w-full lg:w-6/12 flex flex-col gap-8">
        <div className="w-full flex gap-4 ">
          <LiaGraduationCapSolid size={48} color="#8750f7" />
          <h1 className="text-4xl lg:text-5xl font-semibold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text">
            My Education
          </h1>
        </div>
        <div className="w-full flex">
          <div className="w-full lg:w-10/12 flex flex-col gap-6">
            {Educations.map(
              (item: ResumeItem, index: React.Key | null | undefined) => (
                <ResumeCard key={index} item={item} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
