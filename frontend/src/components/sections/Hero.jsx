import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../../data/mock';
import ParticleField from '../3d/ParticleField';
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#151515]">
      {/* 3D Particle Background */}
      <ParticleField />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151515]/50 to-[#151515] z-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff84e4]/20 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#88a2ff]/20 rounded-full blur-[120px] z-0" />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#78d692] animate-pulse" />
            <span className="text-sm text-[#aaa] font-mono">Available for ML Engineer / SDE-1 roles</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            {personalInfo.name.split(' ')[0]}
            <span className="text-[#ff84e4]"> {personalInfo.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-[#aaa] mb-8 h-10"
          >
            <span className="text-white">I'm a </span>
            <TypeAnimation
              sequence={[
                'Machine Learning Engineer',
                2000,
                'Software Developer',
                2000,
                'Data Scientist',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#88a2ff]"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto text-[#717171] text-lg leading-relaxed mb-12"
          >
            Final-year Electrical Engineering undergraduate with hands-on experience in
            <span className="text-white"> Backend Development</span>, &
            <span className="text-white"> Machine Learning</span>
            .Built and deployed
            <span className="text-white"> end-to-end ML pipelines</span> .Proficient in backend development using
            <span className="text-white"> Flask</span> and
            <span className="text-white"> Django</span>. Seeking
            <span className="text-white"> ML Engineer / SDE-1</span> roles in IT companies.
          </motion.p>


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="group flex items-center gap-2 px-8 py-4 bg-[#ff84e4] text-[#151515] rounded-full font-mono uppercase text-sm tracking-wider hover:bg-[#ff84e4]/90 transition-colors"
            >
              View My Work
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="flex items-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-mono uppercase text-sm tracking-wider hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#aaa] hover:text-white transition-colors"
            >
              <Github size={20} />
              <span className="text-sm group-hover:underline">GitHub</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-[#717171]" />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#aaa] hover:text-white transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm group-hover:underline">LinkedIn</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-[#717171]" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-2 text-[#aaa] hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm group-hover:underline">Email</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-[#717171]"
        >
          <span className="text-xs font-mono uppercase tracking-wider">Scroll Down</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
