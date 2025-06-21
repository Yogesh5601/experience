import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectItems {
  title: string;
  description: string;
  techStacks: string[];
  imageSrc: string;
  url: string;
  github: string;
}

const ProjectCard = ({ item, index }: { item: ProjectItems; index: number }) => {
  return (
    <motion.div 
      className="group relative bg-gradient-to-br from-bg-card to-bg-secondary rounded-2xl overflow-hidden border border-gray-800/50 hover:border-accent/50 transition-all duration-500 h-[600px] flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top Icons */}
      <div className="flex justify-start p-4 space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* Project Image */}
      <div className="relative px-4 mb-6">
        <div className="relative overflow-hidden rounded-xl h-48">
          <img
            src={item.imageSrc}
            alt={`${item.title} Preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-4 pb-4">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {item.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6 flex-1">
          <div className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {item.techStacks.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-block px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300 hover:bg-accent/20 hover:border-accent/50 hover:text-accent transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-accent to-accent-light rounded-lg text-white font-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink size={16} />
            View Project
          </Link>
          
          {item.github && item.github !== "" && (
            <Link
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 border border-gray-700 rounded-lg text-gray-400 hover:text-accent hover:border-accent transition-all duration-300"
            >
              <Github size={20} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
