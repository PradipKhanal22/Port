import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: FiCode, label: 'Projects Completed', value: 15, suffix: '+' },
    { icon: FiUsers, label: 'Happy Clients', value: 10, suffix: '+' },
    { icon: FiAward, label: 'Years Experience', value: 2, suffix: '+' },
    { icon: FiTrendingUp, label: 'Code Quality', value: 100, suffix: '%' },
  ];

  const StatCard = ({ icon: Icon, label, value, suffix, index }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isInView, value]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="card-hover group"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 flex items-center justify-center text-2xl text-accent-orange group-hover:scale-110 transition-transform"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon />
          </motion.div>
          <div>
            <div className="text-4xl md:text-5xl font-bold gradient-text">
              {count}
              <span className="text-accent-orange">{suffix}</span>
            </div>
            <p className="text-gray-400 mt-2">{label}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="section bg-dark-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 border border-accent-orange rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 border border-accent-pink rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-title">
          <h2 className="section-heading">
            My <span className="gradient-text-sm">Achievements</span>
          </h2>
          <div className="accent-line" />
          <p className="section-subtitle">Proven track record of delivering exceptional results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
