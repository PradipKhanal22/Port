import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    {
      size: 'w-64 h-64',
      delay: 0,
      duration: 10,
      color: 'from-accent-orange/10 to-transparent',
      position: 'top-20 left-20',
    },
    {
      size: 'w-96 h-96',
      delay: 2,
      duration: 15,
      color: 'from-accent-pink/10 to-transparent',
      position: 'bottom-40 right-20',
    },
    {
      size: 'w-80 h-80',
      delay: 4,
      duration: 12,
      color: 'from-accent-purple/10 to-transparent',
      position: 'top-1/2 left-1/3',
    },
  ];

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} bg-gradient-to-br ${element.color} rounded-full blur-3xl pointer-events-none ${element.position}`}
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
};

export default FloatingElements;
