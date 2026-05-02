import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'RetroKits Nepal',
      description: 'E-commerce platform for sportswear with complete shopping cart and payment integration',
      image: './images/s1.png',
      tags: ['Laravel', 'React', 'Tailwind', 'MySQL', 'Payment API'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Nutricare FishOil',
      description: 'Premium product website with elegant design and seamless user experience',
      image: './images/s3.png',
      tags: ['React', 'Tailwind', 'Stripe', 'Animation'],
      link: 'https://nutricareus.com/',
      github: '#',
    },
    {
      id: 3,
      title: 'Smart Hands Cleaning',
      description: 'Service booking platform with online scheduling and customer management',
      image: './images/image7.png',
      tags: ['Laravel', 'React', 'Calendar API', 'Admin Panel'],
      link: 'https://smarthandscleaningservices.com.au/',
      github: '#',
    },
    {
      id: 4,
      title: 'Lict College Portal',
      description: 'College management system with student portal and online admission',
      image: './images/image2.png',
      tags: ['Laravel', 'Database', 'Admin Dashboard', 'PHP'],
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Chetana Electronics',
      description: 'Electronics store with advanced filtering and product catalog system',
      image: './images/image1.png',
      tags: ['E-Commerce', 'Laravel', 'Search Engine', 'Inventory'],
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Opera Educational',
      description: 'Educational consulting website with appointment booking system',
      image: './images/image4.png',
      tags: ['Web Design', 'Laravel', 'Booking System', 'CMS'],
      link: '#',
      github: '#',
    },
  ];

  const ProjectCard = ({ project, index }) => {
    const isHovered = hoveredProject === project.id;

    return (
      <motion.div
        key={project.id}
        className="group relative overflow-hidden rounded-2xl cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -15 }}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Card Container */}
        <div className="glass-dark overflow-hidden rounded-2xl aspect-video md:aspect-square lg:aspect-video">
          {/* Image */}
          <motion.div
            className="relative w-full h-full overflow-hidden"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 via-dark-primary/50 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content Overlay */}
            <motion.div
              className="absolute inset-0 p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gradient-to-r from-accent-orange to-accent-pink text-white hover:shadow-glow transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink />
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Info Footer */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 glass-dark border-t border-white/10"
            animate={{ y: isHovered ? 0 : '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-accent-orange/20 text-accent-orange"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} id="projects" className="section bg-dark-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 border border-accent-orange rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-title">
          <h2 className="section-heading">
            Featured <span className="gradient-text-sm">Projects</span>
          </h2>
          <div className="accent-line" />
          <p className="section-subtitle">Explore some of my best work and creative solutions</p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
