import Link from "next/link";

interface ProjectItems {
  title: string;
  description: string;
  techStacks: string[];
  imageSrc: string;
  url: string;
  github: string;
}

const ProjectCard = ({ item }: { item: ProjectItems }) => {
  return (
    <div className="text-white w-full p-4 bg-[#0f0715] rounded-lg shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] transition-all ease-in-out duration-500 hover:-translate-y-[10px] hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] filter-[1.1] flex flex-col h-[500px]">
      {/* Top Icons */}
      <div className="flex justify-start mb-2 space-x-1">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
      </div>

      {/* Project Image */}
      <div className="mb-4 h-[200px] flex-shrink-0">
        <img
          src={item.imageSrc}
          alt={`${item.title} Image`}
          className="rounded-lg object-cover w-full h-full bg-black"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-bold mb-2 flex-shrink-0">{item.title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 flex-shrink-0 line-clamp-2">{item.description.slice(0, 80)}</p>

      {/* Tech Stack */}
      <div className="mb-4 flex-shrink-0 flex-grow">
        <div className="text-xs text-gray-300 mb-2">Tech Stack:</div>
        <div className="flex flex-wrap gap-1">
          {item.techStacks.map((techStack: string, index: number) => (
            <span
              key={index}
              className="inline-block px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300 border border-gray-700"
            >
              {techStack}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full flex gap-3 mt-auto pt-4 flex-shrink-0">
        <Link
          href={item.url}
          target="_blank"
          className="py-2 px-4 bg-gradient-to-r from-accent_dark to-accent rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors duration-200 cursor-pointer flex-1 text-center"
        >
          See Project
        </Link>
        {item.github && item.github !== "" && (
          <Link
            href={item.github}
            target="_blank"
            className="py-2 px-4 bg-gradient-to-r from-accent_dark to-accent rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors duration-200 cursor-pointer flex-1 text-center"
          >
            Github
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
