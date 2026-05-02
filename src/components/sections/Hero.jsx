import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Web Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden section">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-glow-orange rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-glow-purple rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.div
                className="inline-block px-4 py-2 glass-dark rounded-full border border-accent-orange/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-accent-orange text-sm font-semibold">Welcome to my portfolio</span>
              </motion.div>
              <div className="accent-line" />
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                I'm <span className="gradient-text">Pradip Khanal</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300">
                <span className="gradient-text-sm">{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="text-accent-orange"
                >
                  |
                </motion.span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Crafting beautiful, responsive, and performant web experiences. Specializing in modern web technologies
              with a passion for clean code and intuitive user interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link to="contact" spy smooth offset={-100} duration={500}>
                <motion.button
                  className="btn-primary flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
              <Link to="projects" spy smooth offset={-100} duration={500}>
                <motion.button
                  className="btn-secondary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              <span className="text-gray-400">Follow me:</span>
              <div className="flex gap-4">
                {[
                  { icon: FiGithub, href: 'https://github.com/PradipKhanal22', label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://linkedin.com/in/pradip-khanal-92a97333a', label: 'LinkedIn' },
                  { icon: FiMail, href: 'mailto:khanalpradip66@gmail.com', label: 'Email' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass-dark rounded-xl flex items-center justify-center text-gray-400 hover:text-accent-orange hover:border-accent-orange/50 transition-all"
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="text-xl" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="relative hidden lg:flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-96 h-96"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Glowing Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              {/* Profile Card */}
              <div className="relative z-10 glass-dark p-8 rounded-3xl border-2 border-accent-orange/20 hover:border-accent-orange/50 transition-all duration-300 overflow-hidden">
                <motion.div
                  className="w-80 h-80 rounded-2xl bg-gradient-to-br from-dark-secondary to-dark-primary overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="./images/me.jpeg"
                    alt="Pradip Khanal"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Experience Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 glass-dark px-6 py-3 rounded-2xl border border-accent-orange/30 text-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-2xl font-bold gradient-text">2+</div>
                  <div className="text-xs text-gray-400">Years Exp</div>
                </motion.div>

                {/* Projects Badge */}
                <motion.div
                  className="absolute -top-4 -left-4 glass-dark px-6 py-3 rounded-2xl border border-accent-pink/30 text-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="text-2xl font-bold gradient-text">15+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-accent-orange rounded-full flex items-start justify-center pt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-accent-orange rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
