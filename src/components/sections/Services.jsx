import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiEdit3, FiTarget, FiTrendingUp, FiSettings, FiUsers, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Services = ({ setPrefilledMessage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Custom, responsive, and scalable web applications built with modern technologies',
      features: ['React', 'Laravel', 'Tailwind CSS'],
    },
    {
      icon: FiEdit3,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience',
      features: ['Figma', 'Design Systems', 'Prototyping'],
    },
    {
      icon: FiTarget,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites optimized for speed and SEO',
      features: ['Core Web Vitals', 'SEO', 'Caching'],
    },
    {
      icon: FiTrendingUp,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration',
      features: ['Shopping Cart', 'Payment API', 'Admin Panel'],
    },
    {
      icon: FiSettings,
      title: 'API Development',
      description: 'RESTful APIs and backend solutions for modern applications',
      features: ['REST API', 'Database Design', 'Security'],
    },
    {
      icon: FiUsers,
      title: 'Consultation',
      description: 'Technical guidance and project planning for your digital needs',
      features: ['Architecture', 'Best Practices', 'Mentoring'],
    },
  ];

  const ServiceCard = ({ service, index }) => {
    const Icon = service.icon;

    return (
      <motion.div
        ref={ref}
        className="card-hover group"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="space-y-4">
          {/* Icon */}
          <motion.div
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 flex items-center justify-center text-3xl text-accent-orange"
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            <Icon />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

          {/* Features */}
          <div className="pt-4 border-t border-dark-border">
            <div className="flex flex-wrap gap-2 mb-4">
              {service.features.map((feature, i) => (
                <motion.span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-accent-orange/20 text-accent-orange"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            {/* Action Link */}
            <Link 
              to="contact" 
              spy 
              smooth 
              offset={-100} 
              duration={500}
              onClick={() => setPrefilledMessage(`Hi Pradip, I'm interested in your ${service.title} service. Let's discuss!`)}
            >
              <motion.button
                className="flex items-center gap-2 text-sm text-accent-orange hover:gap-3 transition-all font-semibold"
                whileHover={{ x: 5 }}
              >
                Inquire Now <FiArrowRight />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} id="services" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-glow-orange rounded-full"
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-title">
          <h2 className="section-heading">
            My <span className="gradient-text-sm">Services</span>
          </h2>
          <div className="accent-line" />
          <p className="section-subtitle">Comprehensive solutions tailored to your business needs</p>
        </div>

        {/* Services Grid */}
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
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
