import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface Service {
  id: number;
  title: string;
  description: string;
}

// Props for the ServiceCard component
interface ServiceCardProps {
  service: Service; // Service data for this particular card
  isActive: boolean; // Whether the card is active
  onClick: () => void; // Click handler
  onMouseEnter: () => void; // Mouse enter handler
  onMouseLeave: () => void; // Mouse leave handler
}

const ServiceCard = ({
  service,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ServiceCardProps) => {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`flex items-center justify-between p-3 lg:px-[30px] cursor-pointer transition-all duration-500 ease-in-out transform border-b border-accent_dark gap-4 ${
        isActive
          ? "bg-gradient-to-r from-accent to-accent_dark text-white shadow-lg scale-105"
          : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 text-gray-400 hover:text-white hover:scale-105 hover:shadow-2xl"
      }`}
    >
      <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-1">
        <div className="w-full lg:w-4/12 flex item-center gap-2 lg:gap-5 lg:py-[30px]">
          <span
            className={`text-3xl lg:text-4xl font-bold transition-colors duration-500 ${
              isActive ? "text-white" : "text-accent"
            }`}
          >
            {String(service.id).padStart(2, "0")}
          </span>
          <h3
            className={`flex items-center text-3xl lg:text-4xll font-bold transition-colors duration-500 ${
              isActive ? "text-white" : "text-gray-100"
            }`}
          >
            {service.title}
          </h3>
        </div>
        <div className="w-full lg:w-6/12 flex text-start lg:justify-between gap-4">
          <p
            className={`textbase lg:text-lg transition-colors duration-500 ${
              isActive ? "text-gray-200" : "text-gray-500"
            }`}
          >
            {service.description}
          </p>
          <FiArrowRight
            className={`text-2xl transition-transform duration-500 ease-in-out ${
              isActive ? "rotate-45 text-white" : "text-purple-400"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
