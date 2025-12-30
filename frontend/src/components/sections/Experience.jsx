import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience, education, responsibilities } from '../../data/mock';
import { Briefcase, GraduationCap, Users, Calendar, MapPin, Award } from 'lucide-react';

const TimelineItem = ({ item, type, index, isLast }) => {
  const getIcon = () => {
    switch (type) {
      case 'experience':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'responsibility':
        return Users;
      default:
        return Briefcase;
    }
  };

  const getColor = () => {
    switch (type) {
      case 'experience':
        return '#ff84e4';
      case 'education':
        return '#88a2ff';
      case 'responsibility':
        return '#78d692';
      default:
        return '#ff84e4';
    }
  };

  const Icon = getIcon();
  const color = getColor();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div
          className="absolute left-[11px] top-10 w-0.5 h-[calc(100%-20px)]"
          style={{ backgroundColor: `${color}30` }}
        />
      )}

      {/* Timeline Dot */}
      <div
        className="absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}
      >
        <Icon size={12} style={{ color }} />
      </div>

      {/* Content Card */}
      <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:border-white/20 transition-colors">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              {item.title || item.degree || item.role}
            </h3>
            <p className="text-[#aaa]">
              {item.organization || item.institution}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span
              className="px-3 py-1 rounded-full text-xs font-mono"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {item.period || item.status}
            </span>
            {item.location && (
              <span className="flex items-center gap-1 text-xs text-[#717171]">
                <MapPin size={12} />
                {item.location}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-[#aaa] text-sm leading-relaxed mb-4">
            {item.description}
          </p>
        )}

        {/* Grade */}
        {item.grade && (
          <div className="flex items-center gap-2 text-sm">
            <Award size={14} className="text-[#ffe03d]" />
            <span className="text-white">{item.grade}</span>
          </div>
        )}

        {/* Skills */}
        {item.skills && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded text-xs bg-white/10 text-[#aaa] font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="relative py-24 bg-[#151515] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff84e4]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#88a2ff]/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#78d692]/10 text-[#78d692] text-sm font-mono uppercase tracking-wider mb-4">
            Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Experience &
            <span className="text-[#88a2ff]"> Education</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#aaa] text-lg">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xl font-semibold text-white mb-8"
            >
              <Briefcase size={20} className="text-[#ff84e4]" />
              Work Experience
            </motion.h3>
            {experience.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                type="experience"
                index={index}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>

          {/* Education Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 text-xl font-semibold text-white mb-8"
            >
              <GraduationCap size={20} className="text-[#88a2ff]" />
              Education
            </motion.h3>
            {education.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                type="education"
                index={index}
                isLast={index === education.length - 1}
              />
            ))}
          </div>

          {/* Responsibilities Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 text-xl font-semibold text-white mb-8"
            >
              <Users size={20} className="text-[#78d692]" />
              Leadership
            </motion.h3>
            {responsibilities.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                type="responsibility"
                index={index}
                isLast={index === responsibilities.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
