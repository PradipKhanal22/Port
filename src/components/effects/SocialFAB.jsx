import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';

const SocialFAB = () => {
  const socials = [
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/9779804453481',
      color: 'bg-[#25D366]',
      label: 'WhatsApp',
    },
    {
      icon: FaFacebookMessenger,
      href: 'https://m.me/pradip.khanal.22',
      color: 'bg-[#0084FF]',
      label: 'Messenger',
    },
  ];

  return (
    <div className="fixed bottom-8 left-8 z-[90] flex flex-col gap-4">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className={`p-4 rounded-2xl ${social.color} text-white shadow-lg flex items-center justify-center group relative`}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="w-6 h-6" />
            
            {/* Label Tooltip */}
            <span className="absolute left-full ml-4 px-3 py-1 rounded-lg bg-dark-secondary border border-white/10 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat on {social.label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialFAB;
