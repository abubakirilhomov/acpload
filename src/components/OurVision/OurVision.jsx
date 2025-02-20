import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Decor from '../Decor/Decor';

const OurVision = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', bounce: 0.3 } });
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="container max-w-[90%] bg-opacity-80 backdrop-blur-lg mx-auto space-y-6">
      <Decor />
      <motion.p
        className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={controls}
      >
        Our Vision
      </motion.p>
      <motion.p
        className="text-center text-lg"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.4, duration: 1 }}
      >
        We envision a future where every freight transaction is seamless, transparent, and efficient. By harnessing innovative technology and fostering a collaborative environment, ACP Loads aims to be the go-to platform for every stakeholder in the logistics ecosystem.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {[1, 2, 3, 4].map((num, index) => (
          <motion.img
            key={num}
            className="w-full h-56 md:h-80 object-cover rounded-lg"
            src={`/images/acp-content-${num}.png`}
            alt=""
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ delay: index * 0.3, duration: 1, ease: 'easeOut', bounce: 0.2 }}
          />
        ))}
      </div>
      <motion.div
        className="flex justify-center mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ delay: 0.6, duration: 1, ease: 'easeOut', bounce: 0.2 }}
      >
      </motion.div>
    </section>
  );
};

export default OurVision;