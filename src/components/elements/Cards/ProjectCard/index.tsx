interface ProjectItems {
  title: string;
  description: string;
  techStacks: string[];
  imageSrc: string;
  url: string;
}

const ProjectCard = ({ item }: { item: ProjectItems }) => {
  return (
    <div className="relative text-white w-full lg:w-3/12 p-4 bg-[#0f0715] rounded-lg  shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] transition-all ease-in-out duration-500 hover:-translate-y-[10px] hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] filter-[1.1]">
      {/* Top Icons */}
      <div className="flex justify-start mb-2 space-x-1">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
      </div>

      {/* Project Image */}
      <div className="mb-4">
        <img
          src={item.imageSrc}
          alt={`${item.title} Image`}
          className="rounded-lg object-cover w-full h-[256px] bg-black"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">{item.description}</p>

      {/* Tech Stack */}
      <p className="text-xs text-gray-300 mb-4 flex gap-1">
        Tech Stack:
        {item.techStacks.map((techStack: string, index: number) => (
          <div key={index} className="flex gap-1">
            {techStack},
          </div>
        ))}
      </p>

      {/* Action Button */}
      <button className="py-1 px-4 bg-gradient-to-r from-accent_dark to-accent rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
        See Project
      </button>
    </div>
  );
};

export default ProjectCard;
