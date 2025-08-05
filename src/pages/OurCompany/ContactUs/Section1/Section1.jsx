import React from "react";
import { motion } from "framer-motion";
import bgImg from "../../../../assets/contact-us.png";

const Section1 = () => {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Child animation for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Particle animation with varied timing
  const particleVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Contact background"
          className="object-cover opacity-80 w-full h-full"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />

      <motion.div
        className="relative z-10 flex min-h-screen items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div
                className="backdrop-blur-sm bg-slate-800/40 rounded-2xl p-8 lg:p-12 border border-slate-700/50 shadow-2xl"
                variants={textVariants}
              >
                <div className="space-y-6">
                  <motion.h1
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
                    variants={textVariants}
                  >
                    Contact Us
                  </motion.h1>

                  <motion.h2
                    className="text-xl lg:text-2xl text-slate-300 font-medium"
                    variants={textVariants}
                  >
                    Get in Touch with ACP Loads
                  </motion.h2>

                  <motion.p
                    className="text-slate-400 text-lg leading-relaxed max-w-lg"
                    variants={textVariants}
                  >
                    We're here to help! Whether you have a question about our platform, need technical assistance, want
                    to partner with us, or just want to share your feedback—our team is ready to connect with you.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            <div className="hidden lg:block"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full"
        variants={particleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-400 rounded-full"
        variants={particleVariants}
        animate="animate"
        transition={{ duration: 2.5 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full"
        variants={particleVariants}
        animate='animate'
        transition={{ duration: 3 }}
      />
    </section>
  );
};

export default Section1;