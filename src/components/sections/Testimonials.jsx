import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Digital Ventures',
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'Pradip delivered an exceptional website that exceeded our expectations. His attention to detail and understanding of modern design is remarkable.',
      rating: 5,
    },
    {
      name: 'Alex Chen',
      role: 'Founder, TechStart',
      image: 'https://i.pravatar.cc/150?img=2',
      text: 'Working with Pradip was a game-changer for our project. His expertise in full-stack development helped us launch on time.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Marketing Director, Creative Co',
      image: 'https://i.pravatar.cc/150?img=3',
      text: 'The e-commerce platform Pradip built for us increased our sales by 40%. Highly recommend his services!',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-glow-purple rounded-full"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-title">
          <h2 className="section-heading">
            Client <span className="gradient-text-sm">Testimonials</span>
          </h2>
          <div className="accent-line" />
          <p className="section-subtitle">What my clients say about working with me</p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card-hover group"
                animate={{
                  scale: index === currentIndex ? 1.02 : 1,
                  opacity: Math.abs(index - currentIndex) > 1 ? 0.5 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiStar className="w-5 h-5 fill-accent-orange text-accent-orange" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-accent-orange/30"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            className="flex justify-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-lg bg-accent-orange/20 hover:bg-accent-orange/40 text-accent-orange transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-lg bg-accent-orange/20 hover:bg-accent-orange/40 text-accent-orange transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-accent-orange w-8' : 'bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
