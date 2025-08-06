import { motion } from "framer-motion";

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

const CarrierDispatcher = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-cover pt-20 h-[100vh] bg-[url('https://freightwaves.b-cdn.net/wp-content/uploads/2020/02/Volvo-driver-cab.jpg?width=1200&height=683')]"
      >
        <div className="max-w-[90%] mx-auto bg-gray-600 bg-opacity-80 w-[700px] h-[600px] rounded-2xl p-8 flex flex-col justify-center items-start mr-22">
          <motion.p
            variants={itemVariants}
            className="text-5xl text-white max-w-[70%] font-bold mb-5"
          >
            Find & Manage Loads with Ease
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-white text-[20px] font-medium mb-5 max-w-[100%]"
          >
            Maximize Efficiency, Minimize Hassle – The Ultimate Load Search Tool
            for Carrier Dispatchers! Carrier dispatchers play a critical role in
            the trucking industry by managing loads, coordinating drivers, and
            ensuring timely freight delivery.
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-none border-2 border-primary text-primary hover:text-white hover:bg-primary px-6 py-3 rounded-md transition"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-gray-900 text-white py-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-12"
          >
            Why Use Our Platform as a Carrier Dispatcher?
          </motion.h2>
          <motion.div
            variants={staggerItems}
            className="grid grid-cols-1 md:grid-cols-5 gap-8"
          >
            {[
              {
                icon: "https://assets.nicepagecdn.com/08f6c9cc/6449759/images/3178933-1f084769.png",
                title: "INSTANT LOAD ACCESS",
                desc: "Search and secure the best loads in real-time, without delays.",
              },
              {
                icon: "https://assets.nicepagecdn.com/08f6c9cc/6449759/images/679720-7f4b0609.png",
                title: "SMART LOAD MATCHING",
                desc: "Find shipments based on truck availability, location, and preferred routes.",
              },
              {
                icon: "https://assets.nicepagecdn.com/08f6c9cc/6449759/images/3061732-78ef29a0.png",
                title: "SEAMLESS COORDINATION",
                desc: "Easily manage multiple carriers and optimize freight movements.",
              },
              {
                icon: "https://assets.nicepagecdn.com/08f6c9cc/6449759/images/7314686-690bdad7.png",
                title: "MAXIMIZE PROFITS",
                desc: "Reduce deadhead miles and boost earnings with well-matched loads.",
              },
              {
                icon: "https://assets.nicepagecdn.com/08f6c9cc/6449759/images/4947736-13ce3961.png",
                title: "LIVE LOADBOARD DATA",
                desc: "Get access to real-time freight postings and market insights.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-800 transition"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-gray-800 text-white py-14 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold mb-12"
          >
            How It Works
          </motion.h2>
          <motion.div
            variants={staggerItems}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                step: "1",
                title: "Sign Up – Quick & Free Registration",
                desc: [
                  "No MC number required – start dispatching loads instantly.",
                  "Create a dispatcher profile to access real-time freight listings.",
                ],
              },
              {
                step: "2",
                title: "Search & Select the Best Loads",
                desc: [
                  "Use filters to find loads based on route, price, and truck type.",
                  "Get live loadboard updates to stay ahead in the market.",
                ],
              },
              {
                step: "3",
                title: "Dispatch & Coordinate",
                desc: [
                  "Assign loads to carriers and manage trips with ease.",
                  "Track progress and updates in real time.",
                ],
              },
              {
                step: "4",
                title: "Optimize & Scale Your Operations",
                desc: [
                  "Use advanced tools like Freight Rate Calculator to ensure profitable dispatching.",
                  "Leverage analytics to refine strategies and grow your business.",
                ],
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start p-6 bg-gray-700 rounded-2xl hover:bg-gray-600 transition"
              >
                <div className="w-20 h-20 text-white rounded-full flex items-center justify-center mr-6 bg-primary">
                  <span className="text-3xl font-bold">{step.step}</span>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {step.desc.map((item, i) => (
                      <li key={i} className="text-gray-300">
                        {item}
                      </li>
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
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-6xl mx-auto py-20 px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-bold mb-10 text-start"
        >
          Key Features for Dispatchers
        </motion.h2>
        <motion.div
          variants={staggerItems}
          className="space-y-6 flex flex-col items-center"
        >
          {[
            "No MC Number Required – Register and start dispatching immediately.",
            "Fast & Easy Load Search – Access thousands of verified loads daily.",
            "Smart Matching System – Find the most profitable and suitable loads for your carriers.",
            "Live Market Insights – Get real-time rate updates to stay competitive.",
            "Integrated Freight Tools – Use calculators and analytics to enhance decision-making.",
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              className="bg-gradient-to-r from-blue-600 to-gray-900 p-6 rounded-2xl flex items-center justify-between h-40 w-full max-w-4xl"
            >
              <div className="bg-white text-blue-800 rounded-full p-4 w-20 h-20 flex items-center justify-center">
                <img
                  src="https://assets.nicepagecdn.com/08f6c9cc/6449759/images/1656075-ff126c17.png"
                  alt="Feature icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="text-left ml-6 flex-1">
                <p className="text-xl font-semibold text-white">{feature}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-gray-800 text-white py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold mb-6"
          >
            Join Today & Simplify Your Dispatching Process!
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-2xl mb-8 text-gray-300"
          >
            Carrier dispatchers are the backbone of trucking logistics. Whether
            youre managing a small fleet or a large operation, our platform
            gives you the tools you need to work smarter, not harder.
          </motion.p>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-xl font-semibold mb-4 hover:bg-blue-700 transition"
          >
            Sign Up Now
          </motion.a>
          <motion.p variants={itemVariants} className="text-gray-400">
            and take your dispatching operations to the next level!
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default CarrierDispatcher;