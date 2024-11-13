"use client";
import ServiceCard from "@/components/elements/Cards/ServiceCard";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const services = [
  {
    id: 1,
    title: "Branding Design",
    description:
      "Transforming your brand identity with innovative and impactful designs that leave a lasting impression.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces that deliver seamless and enjoyable experiences.",
  },
  {
    id: 3,
    title: "Web Design",
    description:
      "Building responsive, modern websites that combine aesthetic appeal with functionality to captivate your audience.",
  },
  {
    id: 4,
    title: "content Writing",
    description:
      "Creating engaging and well-crafted content for websites, blogs, and digital platforms to drive user engagement and enhance brand messaging.",
  },
];

export default function ServiceList() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <div
      id="services"
      className="max-w-screen-xl mx-auto py-20 px-4 text-center text-white gap-10"
    >
      {/* Section Title */}
      <Fade direction="up" delay={400} duration={1500} triggerOnce>
        <div className="text-4xl lg:text-[45px] font-bold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text mb-2">
          My Quality Services
        </div>
        <div className="text-gray-400 mb-10 max-w-lg mx-auto">
          We put your ideas and wishes in the form of a unique web project that
          inspires you and your customers.
        </div>
      </Fade>

      {/* Services List */}
      <div className="w-full">
        <Fade cascade direction="up" damping={0.5} triggerOnce>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService === service.id}
              onClick={() => setActiveService(service.id)}
              onMouseEnter={() => setActiveService(service.id)} // Activate on hover
              onMouseLeave={() => setActiveService(null)} // Deactivate on hover end
            />
          ))}
        </Fade>
      </div>
    </div>
  );
}
