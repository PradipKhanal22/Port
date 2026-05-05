import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      year: '2022-2024',
      title: 'Full Stack Developer',
      company: 'Tech Companies & Freelance',
      description: 'Developed multiple web applications using React, Laravel, and modern web technologies. Collaborated with teams on enterprise solutions.',
    },
    {
      year: '2021-2022',
      title: 'Junior Web Developer',
      company: 'Web Development Studio',
      description: 'Started career building responsive websites and learning full-stack development. Gained expertise in HTML, CSS, JavaScript, and PHP.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} id="about" className="section bg-dark-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="glass-dark p-8 rounded-3xl overflow-hidden border-2 border-accent-orange/20 hover:border-accent-orange/50 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src="/images/me2.jpg"
                  alt="About Pradip"
                  className="w-full h-auto rounded-2xl object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass-dark px-6 py-4 rounded-2xl border border-accent-pink/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-sm text-gray-400">Always learning & growing</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {/* Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">About</span> Me
              </h2>
              <div className="accent-line" />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed"
            >
              I'm Pradip Khanal, a passionate web developer from Nepal with over 2 years of hands-on experience
              crafting modern, responsive websites and dynamic web applications. My expertise spans both front-end
              and back-end development, allowing me to deliver seamless, full-stack solutions.
            </motion.p>

            {/* Key Info */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div className="card p-4">
                <p className="text-gray-400 text-sm">📍 <span className="text-white font-semibold">Location</span></p>
                <p className="text-gray-300">Kawasoti-09, Nawalpur, Gandaki Province, Nepal</p>
              </div>
              <div className="card p-4">
                <p className="text-gray-400 text-sm">✉️ <span className="text-white font-semibold">Email</span></p>
                <a href="mailto:khanalpradip66@gmail.com" className="text-gray-300 hover:text-accent-orange transition-colors">
                  khanalpradip66@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white">Professional Timeline</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="card p-4 border-l-2 border-accent-orange"
                    whileHover={{ x: 10 }}
                  >
                    <p className="text-accent-orange text-sm font-semibold">{item.year}</p>
                    <h4 className="text-white font-semibold mt-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.company}</p>
                    <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="/Pradip_Khanal_CV (1).pdf"
                download="Pradip_Khanal_CV"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Download My CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
