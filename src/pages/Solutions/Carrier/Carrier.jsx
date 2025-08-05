import { motion } from "framer-motion";
import { MdOutlineAccessTime } from "react-icons/md";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { BsFillTicketPerforatedFill, BsCardChecklist } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import {
  ArrowUpRight,
  CheckCircle,
  DollarSign,
  FileText,
  Laptop,
  Search,
  Share2,
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      ease: "easeInOut" 
    } 
  },
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.6
    }
  },
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.6
    }
  },
};

const staggerItems = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    },
  },
};

const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }
};

const Carrier = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative pt-40 bg-[url('https://www.potelawfirm.com/img/agreement-new-ownership.jpg')] bg-cover bg-center h-[90vh]"
      >
        <div className="max-w-[90%] mx-auto bg-blue-500 bg-opacity-80 w-[600px] h-[500px] rounded-2xl p-8 flex flex-col justify-center items-start ml-48 z-10">
          <motion.p
            variants={itemVariants}
            className="text-3xl text-white max-w-[70%] font-bold mb-5"
          >
            Find Loads & Keep Your Trucks Moving
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-white text-[20px] font-medium mb-5 max-w-[50%]"
          >
            Maximize Your Earnings with Access to High-Paying Loads & Trusted
            Brokers!
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-white max-w-[80%] mb-8"
          >
            As a carrier, finding the right freight at the right time is crucial
            for keeping your trucks moving and maximizing profits. Our platform
            gives you access to a real-time loadboard, trusted brokers, and
            powerful tools designed to streamline your operations.
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#ffffff",
              color: "#000000"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-none border-2 text-white border-white px-8 py-3 rounded-md transition"
          >
            Contact Us
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 60,
            damping: 10,
            duration: 0.8 
          }}
          className="absolute top-40 right-30 z-0"
        >
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/61008b130788d17e927fd31b/TuSimple-Ryder-Partnership/0x0.jpg?format=jpg&crop=3470,1998,x222,y19,safe&width=960"
            alt="Truck partnership"
            width={650}
            className="rounded-2xl h-[500px] shadow-xl"
          />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="mt-20 bg-gray-900 max-w-[80%] mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-center font-bold justify-center py-10 text-white text-4xl"
        >
          Why Carriers Choose Our Platform?
        </motion.h2>
        <motion.div
          variants={staggerItems}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 pb-20 text-white"
        >
          {[
            {
              icon: <ArrowUpRight className="w-6 h-6" />,
              title: "Find Loads Instantly",
              desc: "Browse a real-time loadboard with high-paying freight.",
            },
            {
              icon: <DollarSign className="w-6 h-6" />,
              title: "Load Matching",
              desc: "Get personalized load recommendations based on your routes and preferences.",
            },
            {
              icon: <Search className="w-6 h-6" />,
              title: "Work with Verified Brokers & Shippers",
              desc: "Access reliable partnerships with trusted industry professionals.",
            },
            {
              icon: <FileText className="w-6 h-6" />,
              title: "Freight Rate Insights",
              desc: "Use our Freight Rate Calculator to ensure profitable hauls.",
            },
            {
              icon: <Laptop className="w-6 h-6" />,
              title: "Easy Booking & Paperwork",
              desc: "Simplify contracts, rate confirmations, and load details all in one place.",
            },
            {
              icon: <Share2 className="w-6 h-6" />,
              title: "Minimize Deadhead",
              desc: "Reduce empty miles with optimized load planning.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "rgba(55, 65, 81, 0.7)"
              }}
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl transition-all"
            >
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="w-14 h-14 mb-4 rounded-full border-2 border-blue-400 p-4 flex items-center justify-center"
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-gray-800 py-20 px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-white text-center text-4xl font-bold mb-12"
        >
          How It Works
        </motion.h2>

        <motion.div
          variants={staggerItems}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: <CheckCircle className="w-12 h-12" />,
              title: "Step 1: Sign Up & Create Your Carrier Profile",
              desc: "Register your company and set up your trucking preferences. No MC number? No problem! Carrier Dispatchers can search for loads without one.",
            },
            {
              icon: <CheckCircle className="w-12 h-12" />,
              title: "Step 2: Search & Find Loads in Seconds",
              desc: "Filter loads based on origin, destination, weight, and rate. View broker and shipper ratings before booking.",
            },
            {
              icon: <CheckCircle className="w-12 h-12" />,
              title: "Step 3: Book & Haul Freight",
              desc: "Accept loads directly through the platform or negotiate with brokers. Receive all necessary shipment details instantly.",
            },
            {
              icon: <CheckCircle className="w-12 h-12" />,
              title: "Step 4: Track, Deliver & Get Paid Fast",
              desc: "Manage your shipments from pickup to delivery. Work with brokers offering quick payment options.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                backgroundColor: "rgba(55, 65, 81, 0.7)"
              }}
              className="bg-gray-700 rounded-xl p-8 text-white transition-all"
            >
              <motion.div 
                animate={floatAnimation}
                className="text-blue-400 mx-auto mb-4 flex justify-center"
              >
                {step.icon}
              </motion.div>
              <h3 className="font-bold text-lg mb-2 text-center">{step.title}</h3>
              <p className="text-gray-300 text-center">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="mt-10 bg-gray-900 max-w-[80%] mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-center font-bold py-10 text-white text-4xl"
        >
          Key Features for Carriers
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between px-10 pb-20 text-white gap-10">
          <motion.div
            variants={slideInLeft}
            className="flex-1 pr-6 space-y-6"
          >
            {[
              {
                icon: <MdOutlineAccessTime className="w-6 h-6 text-blue-400" />,
                title: "Real-Time Loadboard",
                desc: "Access thousands of loads daily.",
              },
              {
                icon: <HiMiniCheckBadge className="w-6 h-6 text-blue-400" />,
                title: "Verified Broker Network",
                desc: "Work with trusted freight partners.",
              },
              {
                icon: (
                  <BsFillTicketPerforatedFill className="w-6 h-6 text-blue-400" />
                ),
                title: "Rate Comparison Tool",
                desc: "Get fair compensation for every haul.",
              },
              {
                icon: <BsCardChecklist className="w-6 h-6 text-blue-400" />,
                title: "Instant Load Booking",
                desc: "Secure the best loads before they're gone.",
              },
              {
                icon: <GiProgression className="w-6 h-6 text-blue-400" />,
                title: "User-Friendly Dashboard",
                desc: "Manage loads, documents, and payments in one place.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  x: 5,
                  backgroundColor: "rgba(31, 41, 55, 0.7)"
                }}
                className="flex items-center gap-5 p-4 rounded-lg transition-all"
              >
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0"
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={slideInRight}
            className="flex-1"
          >
            <motion.img
              animate={floatAnimation}
              src="https://www.shutterstock.com/image-photo/manager-formal-clothes-holding-plan-600nw-2264317751.jpg"
              alt="Team working together"
              className="rounded-xl w-full h-full object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-gray-800 pt-2 pb-12"
      >
        <motion.div
          variants={itemVariants}
          className="border-4 border-blue-400 bg-gray-700 max-w-[80%] mx-auto mt-20 rounded-xl p-12 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold pb-10 text-white"
          >
            Take Control of Your Trucking Business Today!
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-2xl pb-5 text-gray-300"
          >
            Join thousands of carriers who are maximizing profits and reducing
            deadhead miles with our easy-to-use platform. Whether youre an
            owner-operator or running a fleet, we give you the tools to stay
            loaded, stay profitable, and stay ahead.
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#3B82F6", 
              color: "white",
              borderColor: "#3B82F6"
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 text-blue-400 border-blue-400 py-4 px-12 rounded-xl text-2xl transition-all"
          >
            Sign Up Now & Start Booking Loads Instantly!
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Carrier;