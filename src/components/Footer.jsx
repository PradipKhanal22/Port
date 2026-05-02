import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiCode, FiAward, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/PradipKhanal22', label: 'GitHub', color: 'from-blue-500 to-cyan-500' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/pradip-khanal-92a97333a', label: 'LinkedIn', color: 'from-blue-600 to-blue-400' },
    { icon: FiMail, href: 'mailto:khanalpradip66@gmail.com', label: 'Email', color: 'from-accent-orange to-accent-pink' },
  ];

  const quickLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
  ];

  const footerLinks = [
    { label: 'Services', to: 'services' },
    { label: 'Contact', to: 'contact' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative bg-gradient-to-b from-dark-primary to-dark-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-r from-accent-orange/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 -right-40 w-80 h-80 bg-gradient-to-l from-accent-purple/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-orange to-accent-pink rounded-xl flex items-center justify-center shadow-glow">
                <FiCode className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Pradip</h3>
                <p className="text-xs text-gray-500">Premium Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting digital experiences with passion, precision, and cutting-edge technology.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-lg hover:shadow-glow transition-all`}
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-accent-orange to-accent-pink rounded-full" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy
                    smooth
                    duration={500}
                    className="text-gray-400 hover:text-accent-orange transition-colors cursor-pointer text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-accent-purple to-accent-blue rounded-full" />
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      spy
                      smooth
                      duration={500}
                      className="text-gray-400 hover:text-accent-purple transition-colors cursor-pointer text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-accent-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent-purple transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-accent-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-accent-pink to-accent-orange rounded-full" />
              Highlights
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-accent-orange/20 hover:border-accent-orange/40 transition-colors group">
                <div className="flex items-center gap-3">
                  <FiAward className="text-accent-orange text-xl flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Portfolio</p>
                    <p className="text-sm font-semibold text-white">15+ Projects</p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-accent-purple/20 hover:border-accent-purple/40 transition-colors group">
                <div className="flex items-center gap-3">
                  <FiArrowRight className="text-accent-purple text-xl flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Experience</p>
                    <p className="text-sm font-semibold text-white">2+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/10 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pradip Khanal. <span className="text-accent-orange">All rights reserved.</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">Designed & Developed with ❤️</p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            variants={itemVariants}
            className="p-3 rounded-xl bg-gradient-to-r from-accent-orange to-accent-pink text-white shadow-glow hover:shadow-lg transition-all"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            title="Back to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
      {/* End Footer */}
    </footer>
  );
};

export default Footer;
