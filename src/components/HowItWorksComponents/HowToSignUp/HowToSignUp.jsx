import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  { number: "1", title: "Visit Our Registration Page:", description: "Navigate to our simple sign-up form where you'll provide basic contact details and select your role (Carrier, Dispatcher, Freight Broker, Shipper, or Owner-Operator)." },
  { number: "2", title: "Complete the Form:", description: "Fill out the necessary information—don’t worry, it only takes a few minutes. Carrier Dispatchers can register without needing an MC number, making the process even quicker." },
  { number: "3", title: "Get Verified:", description: "Once you complete the registration, our system will verify your details. You’ll receive instant confirmation and immediate access to our full range of features." },
  { number: "4", title: "Start Connecting:", description: "Begin exploring load opportunities, posting shipments, or finding available trucks. With your account activated, you’re ready to join a thriving community that’s driving the future of US trucking logistics." },
];

const HowToSignUp = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="w-full h-full py-16 text-white text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold mb-14"
      >
        How To Sign Up
      </motion.h2>

      {/* Steps Container */}
      <div className="max-w-[90%] w-full mx-auto flex flex-wrap justify-center gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative flex-1 min-w-[250px] p-8 flex flex-col items-center text-center bg-white/10 rounded-2xl border border-white/20 cursor-pointer select-none shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white backdrop-blur-md"
          >
            {/* Step Number */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center text-white text-2xl font-bold bg-info dark:bg-blue-500 rounded-full shadow-lg">
              {step.number}
            </div>

            {/* Step Title */}
            <h3 className="text-2xl font-semibold mt-6">{step.title}</h3>

            {/* Step Description */}
            <p className="text-gray-300 mt-3">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowToSignUp;
