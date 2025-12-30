import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, navLinks } from '../../data/mock';
import { Github, Linkedin, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10">
      {/* Floating back to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#ff84e4] rounded-full flex items-center justify-center text-[#151515] shadow-lg shadow-[#ff84e4]/30 hover:shadow-[#ff84e4]/50 transition-shadow"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              {personalInfo.name.split(' ')[0]}
              <span className="text-[#ff84e4]">.</span>
            </h2>
            <p className="text-[#aaa] max-w-md mb-6 leading-relaxed">
              {personalInfo.tagline}. Let's build something amazing together.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#ff84e4] hover:text-[#151515] transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#88a2ff] hover:text-[#151515] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d987ff] hover:text-[#151515] transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-wider text-[#ff84e4] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#aaa] hover:text-white hover:pl-2 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-wider text-[#ff84e4] mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#aaa]">
                <Mail size={16} className="text-[#88a2ff]" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors text-sm">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#aaa]">
                <Phone size={16} className="text-[#78d692]" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors text-sm">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#aaa]">
                <MapPin size={16} className="text-[#ffe03d]" />
                <span className="text-sm">{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#717171] text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
