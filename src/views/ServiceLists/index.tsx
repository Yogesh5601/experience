"use client";
import ServiceCard from "@/components/elements/Cards/ServiceCard";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Branding Design",
    description:
      "We bring your brand to life with creative and impactful design.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Crafting user-friendly and visually engaging experiences.",
  },
  {
    id: 3,
    title: "Web Design",
    description: "Creating responsive and modern websites that impress.",
  },
  {
    id: 4,
    title: "App Design",
    description: "Designing seamless and attractive interfaces for apps.",
  },
];

export default function ServiceList() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <div
      id="services"
      className="max-w-screen-xl mx-auto py-20 px-4 text-center gap-10"
    >
      {/* Section Title */}
      <h2 className="text-4xl lg:text-[45px] font-bold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text mb-2">
        My Quality Services
      </h2>
      <p className="text-gray-400 mb-10 max-w-lg mx-auto">
        We put your ideas and wishes in the form of a unique web project that
        inspires you and your customers.
      </p>

      {/* Services List */}
      <div className="w-full">
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
      </div>
    </div>
  );
}
