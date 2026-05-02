import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'khanalpradip66@gmail.com', href: 'mailto:khanalpradip66@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+977 9804453481', href: 'tel:+977 9804453481' },
    { icon: FiMapPin, label: 'Location', value: 'Nawalpur, Nepal', href: '#' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} id="contact" className="section bg-dark-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-glow-orange rounded-full"
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-title">
          <h2 className="section-heading">
            Get In <span className="gradient-text-sm">Touch</span>
          </h2>
          <div className="accent-line" />
          <p className="section-subtitle">Let's collaborate and create something amazing together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Feel free to
              reach out through any of the channels below.
            </motion.p>

            {/* Contact Methods */}
            <motion.div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="card-hover flex items-center gap-4 group"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 flex items-center justify-center text-accent-orange group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold hover:text-accent-orange transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 mb-4">Or connect with me on social media:</p>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', href: 'https://github.com/PradipKhanal22' },
                  { name: 'LinkedIn', href: 'https://linkedin.com/in/pradip-khanal-92a97333a' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="card-hover space-y-6"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {/* Name Input */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="name" className="text-gray-300 text-sm font-medium mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-secondary/50 border border-dark-border rounded-lg focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50 transition-all text-white placeholder-gray-500"
                placeholder="John Doe"
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="email" className="text-gray-300 text-sm font-medium mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-secondary/50 border border-dark-border rounded-lg focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50 transition-all text-white placeholder-gray-500"
                placeholder="john@example.com"
                required
              />
            </motion.div>

            {/* Message Input */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="message" className="text-gray-300 text-sm font-medium mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-secondary/50 border border-dark-border rounded-lg focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50 transition-all text-white placeholder-gray-500 resize-none"
                placeholder="Tell me about your project..."
                rows="5"
                required
              />
            </motion.div>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend /> Send Message
            </motion.button>

            {/* Additional Info */}
            <motion.p variants={itemVariants} className="text-gray-400 text-sm text-center">
              I typically respond within 24 hours
            </motion.p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
