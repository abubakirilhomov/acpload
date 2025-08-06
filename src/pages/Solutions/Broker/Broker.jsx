import { motion } from "framer-motion";
import { CheckCircle, PlusCircle, Search, Eye, TrendingUp, MessageSquare, FileText } from "lucide-react";
import React from "react";

const Broker = () => {
  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-gray-700 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-[95%] md:max-w-[90%] mx-auto min-h-[80vh] flex flex-col md:flex-row items-center p-4 md:p-6 pt-12 md:pt-6"
      >
        {/* Text Content */}
        <motion.div
          variants={itemVariants}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-6 lg:pr-10"
        >
          <motion.h1
            whileHover={{ scale: 1.02 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Post Loads & Find
          </motion.h1>
          <motion.h2
            whileHover={{ scale: 1.02 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 md:mb-8"
          >
            Trusted Carriers
          </motion.h2>

          <motion.p
            whileHover={{ scale: 1.01 }}
            className="text-lg sm:text-xl md:text-2xl text-white mb-3 md:mb-4"
          >
            Simplified Freight Management for Brokers
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.01 }}
            className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8"
          >
            Connect with Reliable Carriers & Move
            <br />
            Shipments Fast!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:text-white text-black font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition text-sm sm:text-base"
          >
            SIGN UP NOW
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <img
            src="https://jurnalkawasan.com/storage/temp/public/a4d/33f/9c4/6455d7d11e907266387163__768.jpg"
            alt="Truck transportation"
            className="rounded-lg shadow-xl w-full max-w-md h-auto max-h-80 sm:max-h-96 object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        className="bg-gray-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-10 sm:mb-16"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Brokers Choose Our Platform?
            </h1>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={staggerItems}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          >
            {[
              {
                title: "Post Loads Instantly",
                desc: "List your available freight with just a few clicks.",
                icon: PlusCircle,
              },
              {
                title: "Find Reliable Carriers",
                desc: "Access a network of pre-vetted, MC-verified carriers.",
                icon: Search,
              },
              {
                title: "Live Loadboard Visibility",
                desc: "See carrier availability and match loads in real time.",
                icon: Eye,
              },
              {
                title: "Freight Rate Insights",
                desc: "Use Freight Rate Calculator to price your loads competitively.",
                icon: TrendingUp,
              },
              {
                title: "Seamless Communication",
                desc: "Connect directly with carriers for efficient load booking.",
                icon: MessageSquare,
              },
              {
                title: "Compliance & Documentation",
                desc: "Keep track of paperwork, contracts, and load status effortlessly.",
                icon: FileText,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-transparent p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 rounded-lg backdrop-blur-sm"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base flex-grow">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        className="bg-[#0f172a] py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-white">
          <motion.div
            variants={itemVariants}
            className="mb-8 sm:mb-12"
          >
            <motion.h2
              whileHover={{ scale: 1.01 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              whileHover={{ scale: 1.01 }}
              className="text-base sm:text-lg max-w-3xl"
            >
              As a freight broker, efficiency is everything. Whether you're
              managing high-volume freight or handling specialized shipments,
              our platform provides seamless load posting, real-time carrier
              matching, and industry-leading tools to help you optimize your
              operations.
            </motion.p>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            variants={staggerItems}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
          >
            {[
              {
                step: "1",
                title: "Sign Up & Create Your Broker Profile",
                points: [
                  "Get verified and start posting loads immediately.",
                  "Set preferences for carrier qualifications, freight types, and preferred routes.",
                ],
              },
              {
                step: "2",
                title: "Post Your Load & Get Matched with Carriers",
                points: [
                  "Enter load details, including weight, pickup/delivery locations, and special requirements.",
                  "Our system connects you with qualified carriers based on availability and preferences.",
                ],
              },
              {
                step: "3",
                title: "Select & Book the Best Carrier",
                points: [
                  "Review carrier profiles, ratings, and history before finalizing.",
                  "Directly communicate with carriers for negotiations and confirmations.",
                ],
              },
              {
                step: "4",
                title: "Track & Manage Shipments in Real Time",
                points: [
                  "Get updates on load status from pickup to delivery.",
                  "Maintain records of shipments, rates, and contracts through your dashboard.",
                ],
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-500/50 p-4 sm:p-6 flex gap-3 sm:gap-4 items-start min-h-[250px] sm:min-h-[300px] rounded-lg backdrop-blur-sm"
              >
                <div className="bg-primary text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-bold text-xs sm:text-sm mt-1 flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-6 sm:mb-8 text-lg sm:text-xl">
                    {step.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {step.points.map((point, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 5 }}
                        className="text-white text-sm sm:text-base md:text-lg"
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        className="relative bg-[#0a3b52] py-12 sm:py-16 px-4 text-white"
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10"
          >
            Key Features for Freight Brokers
          </motion.h2>

          <motion.div
            variants={staggerItems}
            className="space-y-4 sm:space-y-6"
          >
            {[
              "Instant Load Posting - Get your loads in front of carriers quickly.",
              "Verified Carrier Network - Work with reliable, MC-approved carriers.",
              "Real-Time Load Matching - Reduce downtime and ensure efficient shipments.",
              "Rate Optimization Tools - Use Freight Rate Calculator to set competitive pricing.",
              "Secure & Transparent Operations - Keep track of all bookings, payments, and carrier details in one place.",
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-5 rounded-lg flex items-start gap-3 sm:gap-4 border-l-4 border-blue-400 shadow-md"
              >
                <CheckCircle className="text-white w-5 h-5 sm:w-6 sm:h-6 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold text-white text-base sm:text-lg">
                    {feature.split(" - ")[0]}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1">
                    {feature.split(" - ")[1]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background image */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://admin.netlawman.com/uploads/article/original/shareholders-agreements-why-and-when-to-use-one.jpg')",
          }}
        ></div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 max-w-[100%] px-4 sm:px-6 md:pl-10 lg:pl-20 xl:pl-40 mx-auto pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-t from-gray-700 to-gray-800"
      >
        <motion.div
          variants={slideInLeft}
          className="text-center lg:text-left order-2 lg:order-1 lg:w-1/2"
        >
          <motion.h1
            whileHover={{ scale: 1.01 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight"
          >
            Scale Your Brokerage <br /> Business Today!
          </motion.h1>
          <motion.p
            whileHover={{ scale: 1.01 }}
            className="max-w-[600px] text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8"
          >
            Our platform is built to empower brokers by offering the fastest,
            easiest, and most transparent way to connect with carriers and move
            freight. Whether you're a small broker or a nationwide operation,
            our tools help you reduce deadhead, maximize profits, and streamline
            logistics like never before
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white hover:bg-gray-100 text-primary font-bold py-2 sm:py-3 px-6 sm:px-8 md:px-12 rounded-full transition shadow-lg mb-4 sm:mb-6 text-sm sm:text-base"
          >
            SIGN UP TODAY
          </motion.button>
          <motion.p
            whileHover={{ scale: 1.01 }}
            className="text-gray-300 text-base sm:text-lg italic"
          >
            and start posting your loads hassle-free!
          </motion.p>
        </motion.div>
        <motion.div
          variants={slideInRight}
          className="order-1 lg:order-2 lg:w-1/2 flex justify-center w-full max-w-md lg:max-w-none"
        >
          <motion.img
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src="https://static.vecteezy.com/system/resources/thumbnails/024/558/280/small_2x/businessman-isolated-illustration-ai-generative-free-png.png"
            alt="Business illustration"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto lg:mx-0"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Broker;