import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiLayers, FiZap, FiMessageSquare, FiClock } from 'react-icons/fi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technicalSkills = [
    { name: 'Laravel & PHP', level: 90 },
    { name: 'React & JavaScript', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'MySQL & Database', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'UI/UX Design', level: 75 },
  ];

  const softSkills = [
    { icon: FiLayers, label: 'Problem Solving', desc: 'Creative solutions to complex challenges' },
    { icon: FiZap, label: 'Fast Learning', desc: 'Quick adoption of new technologies' },
    { icon: FiMessageSquare, label: 'Communication', desc: 'Clear and effective communication' },
    { icon: FiClock, label: 'Time Management', desc: 'Efficient project delivery' },
  ];

  const CircularProgress = ({ name, level }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (level / 100) * circumference;

    return (
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-32 h-32">
          {/* Background circle */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 transform">
            <circle
              cx="64"
              cy="64"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-dark-secondary"
            />
            {/* Progress circle */}
            <motion.circle
              cx="64"
              cy="64"
              r={radius}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={isInView ? { strokeDashoffset: offset } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
              strokeLinecap="round"
              className="drop-shadow-glow"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b35" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              className="text-2xl font-bold gradient-text"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {level}%
            </motion.span>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-4 text-sm">{name}</p>
      </motion.div>
    );
  };

  return (
    <section ref={ref} id="skills" className="section relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-glow-pink rounded-full"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-title">
          <h2 className="section-heading">
            My <span className="gradient-text-sm">Skills</span>
          </h2>
          <div className="accent-line" />
          <p className="section-subtitle">Technologies and expertise I use to create exceptional digital experiences</p>
        </div>

        {/* Technical Skills - Circular Progress */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-12 text-center text-gray-200">Technical Skills</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
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
            {technicalSkills.map((skill, index) => (
              <CircularProgress key={index} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
        </div>

        {/* Soft Skills - Cards */}
        <div>
          <h3 className="text-2xl font-semibold mb-12 text-center text-gray-200">Professional Skills</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  className="card-hover group flex flex-col items-center text-center space-y-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 flex items-center justify-center text-2xl text-accent-orange group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">{skill.label}</h4>
                    <p className="text-xs text-gray-400 mt-1">{skill.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Skills Technologies */}
        <motion.div
          className="mt-20 pt-12 border-t border-dark-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-8 text-center text-gray-200">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['PHP', 'Laravel', 'React', 'JavaScript', 'Tailwind', 'MySQL', 'Git', 'Docker', 'Next.js', 'HTML5', 'CSS3', 'Vue.js'].map((tech, index) => (
              <motion.div
                key={index}
                className="glass-dark p-4 rounded-lg text-center text-gray-300 hover:text-accent-orange hover:border-accent-orange/50 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
