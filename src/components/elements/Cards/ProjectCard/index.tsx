import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface ProjectItems {
  title: string;
  description: string;
  techStacks: string[];
  imageSrc: string;
  url: string;
  github: string;
}

const ProjectCard = ({ item, index }: { item: ProjectItems; index: number }) => {
  const handleCardClick = () => {
    if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div 
      className="group relative bg-gradient-to-br from-bg-card via-[#1a1429] to-bg-secondary rounded-3xl overflow-hidden border border-accent/20 hover:border-accent/60 transition-all duration-500 h-[600px] flex flex-col cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-accent/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onClick={handleCardClick}
    >
      {/* Floating GitHub Button in top right corner */}
      {item.github && item.github !== "" && (
        <Link
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleGithubClick}
          className="absolute top-5 right-5 z-20 w-12 h-12 flex items-center justify-center glass-effect border border-accent/40 rounded-full text-gray-400 hover:text-white hover:border-accent hover:bg-gradient-to-br hover:from-accent/20 hover:to-accent-light/20 transition-all duration-300 transform hover:scale-110 hover:rotate-6 group-hover:shadow-glow"
        >
          <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
        </Link>
      )}

      {/* Mac Window Dots */}
      <div className="flex justify-start p-5 space-x-2 relative z-10">
        <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
      </div>

      {/* Project Image with Enhanced Effects */}
      <div className="relative px-5 mb-6">
        <div className="relative overflow-hidden rounded-2xl h-48 shadow-2xl transition-all duration-500">
          <img
            src={item.imageSrc}
            alt={`${item.title} Preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-5 pb-5 relative z-10">
        {/* Project Title with Gradient Effect */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-light transition-all duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {item.description}
        </p>

        {/* Tech Stack with Enhanced Design */}
        <div className="flex-1">
          <div className="text-xs text-accent mb-3 font-semibold uppercase tracking-widest">
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-2.5">
            {item.techStacks.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-block px-4 py-1.5 glass-effect border border-accent/30 rounded-full text-xs text-gray-300 font-medium hover:bg-gradient-to-r hover:from-accent/20 hover:to-accent-light/20 hover:border-accent hover:text-accent hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
