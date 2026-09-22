import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../data/mock';
import { ExternalLink, Github, ChevronRight, Filter } from 'lucide-react';

const categories = ['All', 'Machine Learning', 'Deep Learning', 'NLP', 'DevOps', 'Embedded Systems'];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-lg overflow-hidden cursor-pointer"
      style={{ backgroundColor: project.color }}
    >
      {/* Card Content */}
      <div className="relative p-6 min-h-[320px] flex flex-col justify-between z-10">
        {/* Top Section */}
        <div>
          {/* Category Tag */}
          <span className="inline-block px-3 py-1 rounded-full bg-[#151515]/80 text-white text-xs font-mono uppercase tracking-wider mb-4">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-[#151515] mb-3 group-hover:underline transition-all">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[#151515]/70 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Association Tag */}
          {project.association && (
            <span className="text-xs font-mono text-[#151515]/60">
              @ {project.association}
            </span>
          )}
        </div>

        {/* Bottom Section */}
        <div>
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded text-xs bg-[#151515]/10 text-[#151515] font-mono"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded text-xs bg-[#151515]/10 text-[#151515] font-mono">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#151515] hover:underline text-sm font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              Code
            </a>
            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#151515] hover:underline text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-[#151515]/90 flex items-center justify-center z-20"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: isHovered ? 1 : 0.8 }}
          className="text-center"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: project.color }}
          >
            <ChevronRight size={32} className="text-[#151515]" />
          </div>
          <p className="text-white font-mono text-sm uppercase tracking-wider">View Project</p>
        </motion.div>
      </motion.div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-30">
          <span className="px-2 py-1 rounded-full bg-[#151515] text-white text-xs font-mono uppercase">
            Featured
          </span>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-[#0f0f10] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff84e4]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ffe03d]/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#ffe03d]/10 text-[#ffe03d] text-sm font-mono uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured
            <span className="text-[#ff84e4]"> Projects</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#aaa] text-lg">
            A showcase of my machine learning, data science, and software development projects
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 flex-wrap mb-12"
        >
          <div className="flex items-center gap-2 mr-4 text-[#aaa]">
            <Filter size={16} />
            <span className="text-sm font-mono">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#ff84e4] text-[#151515]'
                  : 'bg-white/10 text-[#aaa] hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Akkissss23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-mono uppercase text-sm tracking-wider hover:bg-white/10 transition-colors"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
