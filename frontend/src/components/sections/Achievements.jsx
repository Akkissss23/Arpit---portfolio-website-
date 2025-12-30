import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { achievements } from '../../data/mock';
import { Award, Trophy, Code, Users, Star, Zap } from 'lucide-react';

const iconMap = {
  Award: Award,
  Trophy: Trophy,
  Code: Code,
  Users: Users,
};

const AchievementCard = ({ achievement, index }) => {
  const Icon = iconMap[achievement.icon] || Star;
  const colors = ['#ff84e4', '#88a2ff', '#ffe03d', '#78d692', '#d987ff', '#ff965a'];
  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}15, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={28} style={{ color }} />
        </div>

        {/* Organization Tag */}
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-3"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {achievement.organization}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3">
          {achievement.title}
        </h3>

        {/* Description */}
        <p className="text-[#aaa] text-sm leading-relaxed">
          {achievement.description}
        </p>
      </div>

      {/* Decorative Element */}
      <div
        className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-10"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="relative py-24 bg-[#0f0f10] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#ffe03d]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#d987ff]/10 rounded-full blur-[150px]" />

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute top-20 left-10 text-[#ff84e4]/20"
      >
        <Zap size={48} />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 text-[#88a2ff]/20"
      >
        <Star size={48} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#d987ff]/10 text-[#d987ff] text-sm font-mono uppercase tracking-wider mb-4">
            Recognition
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Achievements &
            <span className="text-[#ffe03d]"> Recognition</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#aaa] text-lg">
            Milestones and accomplishments throughout my journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-lg bg-gradient-to-r from-[#ff84e4]/10 to-[#88a2ff]/10 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-[#ff84e4]/20 flex items-center justify-center">
              <Award size={24} className="text-[#ff84e4]" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Open to New Opportunities</p>
              <p className="text-[#aaa] text-sm">Looking for ML Engineer & SDE-1 roles in product-based companies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
