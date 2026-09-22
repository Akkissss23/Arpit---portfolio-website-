import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/mock';
import { Code, Brain, Database, Terminal, Cpu, Sparkles } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'End-to-end ML pipelines with Scikit-learn, TensorFlow, and Keras',
      color: '#ff84e4'
    },
    {
      icon: Code,
      title: 'NLP Expert',
      description: 'Text classification, sentiment analysis, and recommendation systems',
      color: '#88a2ff'
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Data preprocessing, visualization, and insights extraction',
      color: '#d987ff'
    },
    {
      icon: Terminal,
      title: 'DevOps',
      description: 'CI/CD pipelines with Docker, GitHub Actions, and GitLab',
      color: '#78d692'
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Arduino, Raspberry Pi, and hardware-software integration',
      color: '#ffe03d'
    },
    {
      icon: Sparkles,
      title: 'Problem Solver',
      description: 'Creative solutions to complex technical challenges',
      color: '#ff965a'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-[#0f0f10] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff84e4]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#88a2ff]/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#ff84e4]/10 text-[#ff84e4] text-sm font-mono uppercase tracking-wider mb-4">
            About Me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Turning Data Into
            <span className="text-[#88a2ff]"> Intelligence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#aaa] text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${item.color}15, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-[#aaa] text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '7+', label: 'Projects Completed' },
            { value: '5+', label: 'Technologies Mastered' },
            { value: '3+', label: 'Leadership Roles' },
            { value: '1', label: 'Research Paper' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="font-display text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-[#aaa] text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
