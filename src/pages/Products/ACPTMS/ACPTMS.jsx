import { motion } from 'framer-motion';
import { Mail, Send, Instagram, Youtube, Linkedin } from 'lucide-react';

const ACPTMS = () => {
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
        <motion.div 
          className="absolute top-20 left-20 w-16 h-10 bg-blue-400 transform rotate-12"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ clipPath: 'polygon(0 70%, 20% 70%, 20% 30%, 80% 30%, 80% 70%, 100% 70%, 100% 100%, 0 100%)' }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-32 right-32 w-20 h-12 bg-cyan-400 transform -rotate-12"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          style={{ clipPath: 'polygon(0 70%, 20% 70%, 20% 30%, 80% 30%, 80% 70%, 100% 70%, 100% 100%, 0 100%)' }}
        ></motion.div>

        {/* Packages/Boxes */}
        <motion.div 
          className="absolute top-40 right-20 w-12 h-12 bg-blue-300 transform rotate-45"
          animate={{ rotate: [45, 60, 45] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-20 left-32 w-10 h-10 bg-cyan-300 transform -rotate-30"
          animate={{ rotate: [-30, -15, -30] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        ></motion.div>

        <motion.div 
          className="absolute top-1/3 left-1/4 w-14 h-10 bg-slate-400 rounded-sm transform rotate-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-full h-6 bg-slate-300 rounded-t-sm"></div>
        </motion.div>

        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-16 h-12 bg-slate-400 rounded-sm transform -rotate-12"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 1.2 }}
        >
          <div className="w-full h-7 bg-slate-300 rounded-t-sm"></div>
        </motion.div>

        {/* Documents/Papers */}
        <motion.div 
          className="absolute top-1/2 right-16 w-8 h-12 bg-white transform rotate-12"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-full h-1 bg-slate-300 mt-2"></div>
          <div className="w-3/4 h-1 bg-slate-300 mt-1"></div>
          <div className="w-full h-1 bg-slate-300 mt-1"></div>
        </motion.div>

        {/* Gears/Cogs */}
        <motion.div 
          className="absolute top-16 right-1/3 w-8 h-8 border-2 border-blue-400 rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-1 border border-blue-400 rounded-full"></div>
        </motion.div>

        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-300 rounded-full"></div>
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
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl text-4xl sm:text-5xl lg:text-6xl font-bold shadow-xl"
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
            COMING SOON:
          </motion.h1>
          
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
            variants={itemVariants}
          >
            ACP TMS - THE FUTURE OF FREIGHT
            <br />
            MANAGEMENT!
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
            Get ready for a smarter, more efficient way to manage your trucking operations! 
            ACP TMS (Transport Management System) is coming soon—designed to streamline 
            dispatching, load tracking, and fleet management all in one powerful platform. 
            Stay tuned for updates and be the first to experience the future of freight logistics!
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