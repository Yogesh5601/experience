import React from 'react'

export interface ResumeItem {
  time: string;
  role: string;
  address: string;
}

const ResumeCard = ({ item }: { item: ResumeItem }) => {
  return (
    <div className="w-full flex flex-col justify-center items-start bg-secondary py-4 px-6 gap-2 rounded-2xl shadow-lg group relative overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Gradient background with enhanced animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-150 group-hover:scale-100 group-hover:animate-gradient-slide"></div>

      {/* Content */}
      <h1 className="w-full text-xl text-accent font-[800] group-hover:text-white relative z-10 transition-colors duration-300">
        {item.time}
      </h1>
      <h1 className="w-full text-gray text-2xl font-semibold relative z-10 ">
        {item.role}
      </h1>
      <p className="w-full text-gray text-base font-medium relative z-10 ">
        {item.address}
      </p>
    </div>
  );
};

export default ResumeCard