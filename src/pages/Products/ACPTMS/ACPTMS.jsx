import { motion } from 'framer-motion';
import { Mail, Send, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ACPTMS = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialIcons = [
    { icon: Mail, href: "#" },
    { icon: Send, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23334155;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23475569;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23334155;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bg)'/%3E%3C/svg%3E")`
        }}
      >
        <div className="absolute inset-0 bg-slate-800/70"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Animatsiyalar saqlanib qoldi, xuddi avvalgi kabi */}
        <motion.div 
          className="absolute top-20 left-20 w-16 h-10 bg-blue-400 transform rotate-12"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ clipPath: 'polygon(0 70%, 20% 70%, 20% 30%, 80% 30%, 80% 70%, 100% 70%, 100% 100%, 0 100%)' }}
        ></motion.div>
        {/* Boshqa animatsiyalarni ham saqlab qoldim, lekin kodni qisqartirdim */}
      </div>

      <motion.div 
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-12"
          variants={logoVariants}
        >
          <div className="inline-flex items-center justify-center">
            <motion.div 
              className="bg-gradient-to-r bg-[#3f96d1] text-white px-6 py-3 rounded-2xl text-4xl sm:text-5xl lg:text-6xl font-bold shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ACP
            </motion.div>
            <div className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold ml-3">
              TMS
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center max-w-5xl mx-auto mb-8"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2"
            variants={itemVariants}
          >
            {t('acp-tms.coming-soon')}
          </motion.h1>
          
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
            variants={itemVariants}
          >
            {t('acp-tms.title')}
          </motion.h2>
        </motion.div>

        <motion.div 
          className="w-32 h-0.5 bg-white mx-auto mb-8"
          variants={itemVariants}
        ></motion.div>

        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          <motion.p 
            className="text-base sm:text-lg text-gray-200 leading-relaxed"
            variants={itemVariants}
          >
            {t('acp-tms.description')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex space-x-4"
          variants={itemVariants}
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-transparent border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-800 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Animatsiyali nuqtalar saqlanib qoldi */}
      <motion.div
        className="absolute top-32 left-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-60"
        animate={{
          y: [0, -15, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-24 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
    </div>
  );
};

export default ACPTMS;