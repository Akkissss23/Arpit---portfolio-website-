import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/mock';
import { Code2, Brain, BarChart3, GitBranch, Cpu, Database } from 'lucide-react';

const skillCategories = [
  { id: 'programming', label: 'Programming', icon: Code2, data: skills.programming },
  { id: 'machineLearning', label: 'Machine Learning', icon: Brain, data: skills.machineLearning },
  { id: 'dataAnalysis', label: 'Data Analysis', icon: BarChart3, data: skills.dataAnalysis },
  { id: 'devOps', label: 'DevOps', icon: GitBranch, data: skills.devOps },
  { id: 'embedded', label: 'Embedded', icon: Cpu, data: skills.embedded },
  { id: 'databases', label: 'Databases', icon: Database, data: skills.databases },
];

const SkillBar = ({ skill, index, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-[#aaa] text-sm font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: skill.color }}
        >
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `linear-gradient(90deg, transparent, ${skill.color}50, transparent)`,
              animation: 'shimmer 2s infinite',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('machineLearning');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.data || [];

  return (
    <section id="skills" className="relative py-24 bg-[#151515] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#d987ff]/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#88a2ff]/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#88a2ff]/10 text-[#88a2ff] text-sm font-mono uppercase tracking-wider mb-4">
            Technical Skills
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            My Tech
            <span className="text-[#d987ff]"> Arsenal</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#aaa] text-lg">
            Proficient in a wide range of technologies for building intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-white/10 border border-white/20'
                      : 'bg-transparent border border-transparent hover:bg-white/5'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      activeCategory === category.id
                        ? 'bg-[#ff84e4]/20 text-[#ff84e4]'
                        : 'bg-white/10 text-[#aaa]'
                    }`}
                  >
                    <category.icon size={20} />
                  </div>
                  <div className="text-left">
                    <div
                      className={`font-medium transition-colors ${
                        activeCategory === category.id ? 'text-white' : 'text-[#aaa]'
                      }`}
                    >
                      {category.label}
                    </div>
                    <div className="text-sm text-[#717171]">
                      {category.data.length} skills
                    </div>
                  </div>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 rounded-lg border border-white/10 p-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {activeSkills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={index}
                      isVisible={inView}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* All Skills Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <h4 className="text-[#aaa] text-sm font-mono uppercase tracking-wider mb-4">
                All Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {Object.values(skills)
                  .flat()
                  .map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium border"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        borderColor: `${skill.color}30`,
                        color: skill.color,
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
