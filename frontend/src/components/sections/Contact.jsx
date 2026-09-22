import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../../data/mock";
import { sendContactEmail } from "../../services/emailService";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Loader2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await sendContactEmail(formData);

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Hide success message after 5s
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#ff84e4",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "#88a2ff",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "#78d692",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#151515] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff84e4]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#88a2ff]/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#ff84e4]/10 text-[#ff84e4] text-sm font-mono mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let’s Build Something{" "}
            <span className="text-[#88a2ff]">Amazing</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#aaa]">
            Have a project or opportunity? I’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left info */}
          <div>
            <h3 className="text-2xl text-white mb-8">Contact Information</h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-[#717171] text-sm">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                  <ArrowRight className="ml-auto text-[#717171]" size={18} />
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer">
                <Github className="text-white" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="text-white" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl text-white mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                <p className="text-white text-lg">Message sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-white/10 text-white rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-white/10 text-white rounded"
                />
                <input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-white/10 text-white rounded"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-white/5 border border-white/10 text-white rounded"
                />

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ff84e4] text-black py-3 rounded flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
