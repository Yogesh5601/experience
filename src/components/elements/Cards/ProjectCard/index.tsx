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
    <div className=" text-white w-full p-2 bg-[#0f0715] rounded-lg  shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] transition-all ease-in-out duration-500 hover:-translate-y-[10px] hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] filter-[1.1]">
      {/* Top Icons */}
      <div className="flex justify-start mb-2 space-x-1">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
      </div>

      {/* Project Image */}
      <div className="mb-4 h-[256px]">
        <img
          src={item.imageSrc}
          alt={`${item.title} Image`}
          className="rounded-lg  object-cover w-full h-full bg-black"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">{item.description.slice(0, 50)}</p>

      {/* Tech Stack */}
      <div className="text-xs text-gray-300 mb-4 flex gap-1">
        Tech Stack:
        {item.techStacks.map((techStack: string, index: number) => (
          <div key={index} className="flex gap-1">
            {techStack},
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="w-full flex gap-5">
        <Link
          href={item.url}
          target="_blank"
          className="py-1 px-4 bg-gradient-to-r from-accent_dark to-accent rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
        >
          See Project
        </Link>
        {item.github === "" ? null : <Link
          href={item.github === "" ? item.url : item.github}
          target="_blank"
          className="py-1 px-4 bg-gradient-to-r from-accent_dark to-accent rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
        >
          Github
        </Link>}
      </div>
    </div>
  );
};

export default ProjectCard;
