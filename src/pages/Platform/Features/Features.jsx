import React from "react";
import { motion } from "framer-motion";
import Notifications from "./Notifications";
import Statistics from "./Statistics";
import Advanced from "./Advanced";
import Integrated from "./Integrated ";
import Compatibility from "./Compatibility";

const Features = () => {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen bg-gradient-to-r from-[#050A30] to-[#08142B] pb-40">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0, 255, 255, 0.5)" }}
        className="relative shadow-2xl p-20 rounded-3xl w-[1300px] h-auto flex flex-col items-center justify-center text-white text-center space-y-10 z-20 mt-20"
        style={{
          background: "linear-gradient(145deg, #0a0f29, #06142e)",
          borderRadius: "40px",
          overflow: "hidden",
          position: "relative",
          border: "3px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "15px 15px 40px #020617, -15px -15px 40px #0f172a",
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

        <h2
          className="text-7xl font-extrabold uppercase drop-shadow-lg relative z-10"
          style={{
            background: "linear-gradient(to right, #007CF0, #00DFD8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Empower Your Freight Operations
        </h2>

        <p className="text-2xl text-gray-300 max-w-6xl leading-relaxed relative z-10">
          Discover a cutting-edge loadboard platform designed to streamline your US trucking logistics. With our intuitive interface, you can quickly post and search for loads, leverage smart matching with real-time notifications, and utilize advanced tools—like a freight rate calculator, live loadboard statistics, route optimization, and AI-driven insights—to make informed and profitable decisions.
        </p>
      </motion.div>

      <div className="pb-40 mt-48 flex flex-wrap justify-center gap-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.08, rotate: 2 }}
          className="relative shadow-xl p-14 rounded-2xl w-[800px] h-[500px] flex flex-col items-center justify-center text-white text-center transform hover:scale-110 transition duration-300"
          style={{
            backgroundImage: `url('/images/aa.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "4px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 0 50px rgba(0, 255, 255, 0.4)",
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
          <h3 className="text-5xl font-bold relative z-10">Enhanced Logistics</h3>
          <p className="text-2xl text-gray-300 relative z-10 max-w-[90%]">
            Optimize your freight operations with our advanced tools. Track shipments in real-time, reduce operational costs, and maximize route efficiency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.08, rotate: -2 }}
          className="relative shadow-xl p-14 rounded-2xl w-[800px] h-[500px] flex flex-col items-center justify-center text-white text-center transform hover:scale-110 transition duration-300"
          style={{
            backgroundImage: `url('/images/ss.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "4px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 0 50px rgba(255, 165, 0, 0.4)",
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
          <h3 className="text-5xl font-bold relative z-10">Seamless Integration</h3>
          <p className="text-2xl text-gray-300 relative z-10 max-w-[90%]">
            Connect effortlessly with top logistics solutions, integrate with existing TMS systems, and automate processes for a seamless freight experience.
          </p>
        </motion.div>
      </div>


      <Advanced />
      <Notifications/>
      <Integrated />
      <Statistics />
      <Compatibility />
    </div>
  );
};

export default Features;
