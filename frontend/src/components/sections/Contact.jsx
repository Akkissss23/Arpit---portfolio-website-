import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/mock';
import { sendContactEmail } from "../services/emailService";

import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (mock)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: '#ff84e4',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: '#88a2ff',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: '#78d692',
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#151515] overflow-hidden">
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
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Build Something
            <span className="text-[#88a2ff]"> Amazing</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#aaa] text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-[#717171] text-sm font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-white group-hover:text-[#ff84e4] transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="ml-auto text-[#717171] group-hover:text-white group-hover:translate-x-1 transition-all"
                  />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-[#aaa] text-sm font-mono uppercase tracking-wider mb-4">
                Connect With Me
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#333] transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 p-6 rounded-lg bg-gradient-to-br from-[#ff84e4]/10 to-[#88a2ff]/10 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#78d692] animate-pulse" />
                <span className="text-white font-semibold">Currently Available</span>
              </div>
              <p className="text-[#aaa] text-sm">
                Open to ML Engineer and SDE-1 opportunities in product-based IT companies.
                Let's discuss how I can contribute to your team!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/5 rounded-lg border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#78d692]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-[#78d692]" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-[#aaa]">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#aaa] text-sm font-mono mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#717171] focus:border-[#ff84e4] focus:outline-none focus:ring-1 focus:ring-[#ff84e4] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[#aaa] text-sm font-mono mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#717171] focus:border-[#ff84e4] focus:outline-none focus:ring-1 focus:ring-[#ff84e4] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#aaa] text-sm font-mono mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#717171] focus:border-[#ff84e4] focus:outline-none focus:ring-1 focus:ring-[#ff84e4] transition-colors"
                      placeholder="Project Discussion / Job Opportunity"
                    />
                  </div>

                  <div>
                    <label className="block text-[#aaa] text-sm font-mono mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#717171] focus:border-[#ff84e4] focus:outline-none focus:ring-1 focus:ring-[#ff84e4] transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#ff84e4] text-[#151515] rounded-lg font-mono uppercase text-sm tracking-wider hover:bg-[#ff84e4]/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
