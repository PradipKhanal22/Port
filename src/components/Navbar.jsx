import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Services', to: 'services' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-accent-orange to-accent-pink rounded-lg flex items-center justify-center">
              <FiCode className="text-white text-lg" />
            </div>
            <span className="text-xl font-bold gradient-text">Pradip</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="nav-active"
                className="relative group"
              >
                <motion.span
                  className="text-gray-300 hover:text-accent-orange cursor-pointer transition-colors duration-300 relative"
                  whileHover={{ color: '#ff6b35' }}
                >
                  {item.label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-accent-orange to-accent-pink group-[.nav-active]:w-full group-hover:w-full transition-all duration-300" />
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-dark-secondary/50 hover:bg-dark-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-blue-300" />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-dark-secondary/50 hover:bg-dark-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden sm:block btn-primary text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-4 space-y-3 border-t border-dark-border/20">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="nav-active-mobile"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  className="px-4 py-2 text-gray-300 hover:text-accent-orange hover:bg-dark-secondary/30 rounded-lg cursor-pointer transition-colors nav-link-mobile"
                  whileHover={{ paddingLeft: 20 }}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
