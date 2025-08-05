import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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
      duration: 0.5,
      ease: "easeOut"
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      ease: "easeOut" 
    } 
  },
};

const Shipper = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative pt-20 h-[100vh] bg-[url('https://www.knighttrans.com/wp-content/uploads/2024/07/Chris-C.jpg')] bg-cover bg-left"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-[90%] mx-auto bg-gray-600 bg-opacity-80 w-[600px] h-[600px] rounded-2xl p-8 flex flex-col justify-center items-start ml-18"
        >
          <h1 className="text-5xl text-white max-w-[70%] font-bold mb-5">
            Streamline Your Freight Shipping
          </h1>
          <p className="text-white text-[20px] font-medium mb-5 max-w-[50%]">
            Get Your Freight Moved Quickly & Efficiently with Trusted Carriers!
          </p>
          <p className="text-white max-w-[80%] mb-8">
            Finding reliable carriers and ensuring on-time deliveries can be
            challenging. Our platform makes freight shipping fast, transparent,
            and hassle-free by connecting shippers with verified carriers and
            brokers in real time.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#3B82F6",
              color: "white"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-none border-2 text-primary border-primary px-6 py-3 rounded-md transition"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Why Choose Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="relative bg-gray-900 text-white py-20"
      >
        <div className="max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center p-10 gap-10">
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2"
          >
            <img
              src="https://www.peforhire.com/wp-content/uploads/2021/11/hire-an-electrical-engineer.jpeg"
              alt="Warehouse Worker"
              className="rounded-lg h-96 w-full object-cover"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Shippers Choose Our Platform?
            </h2>
            <div className="space-y-4">
              {[
                "Instant Load Posting – List your shipments in seconds and get instant matches.",
                "Reliable Carrier Network – Work with pre-screened, professional carriers.",
                "Competitive Freight Rates – Compare and choose the best offers.",
                "Real-Time Tracking – Monitor your shipments every step of the way.",
                "Effortless Documentation – Simplify contracts, rate confirmations, and invoices.",
                "Faster Delivery – Reduce transit time with optimized carrier matching."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 mt-1 flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-gray-800 text-white py-20"
      >
        <div className="max-w-[90%] mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Post Your Load",
                description: "Enter shipment details, including pickup, destination, weight, and special requirements. Get instant load visibility to trusted carriers."
              },
              {
                step: "2",
                title: "Get Matched with Reliable Carriers",
                description: "Our smart system finds the best carriers & brokers based on availability and price. Review carrier ratings and performance before booking."
              },
              {
                step: "3",
                title: "Secure the Best Rate & Confirm Shipment",
                description: "Receive competitive bids from carriers. Choose the best offer and confirm your shipment with one click."
              },
              {
                step: "4",
                title: "Track & Deliver with Confidence",
                description: "Real-time tracking for full shipment visibility. Get notifications on status updates and delivery confirmations."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-700 p-6 rounded-lg h-[350px] flex flex-col"
              >
                <div className="bg-blue-200 text-blue-800 rounded-full w-12 h-12 mx-auto mb-6 flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
                <p className="text-gray-300 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-gray-900 text-white py-20"
      >
        <div className="max-w-[80%] mx-auto">
          <h2 className="text-5xl font-bold mb-12">
            Key Features for Shippers
          </h2>
          <div className="space-y-6 flex flex-col items-center">
            {[
              {
                title: "Instant Load Posting",
                description: "Post, manage, and edit shipments easily."
              },
              {
                title: "Verified Carriers & Brokers",
                description: "Work with industry-trusted professionals."
              },
              {
                title: "Freight Rate Calculator",
                description: "Ensure cost-effective shipping."
              },
              {
                title: "Optimized Load Matching",
                description: "Reduce delays and increase efficiency."
              },
              {
                title: "24/7 Shipment Tracking",
                description: "Stay informed from pickup to delivery."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-b from-gray-700 to-gray-800 p-6 rounded-2xl flex items-center justify-between h-40 w-full max-w-3xl"
              >
                <div className="bg-blue-200 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="ml-6 text-left flex-1">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-gray-800 py-20"
      >
        <div className="border-4 border-blue-400 bg-gray-700 max-w-[80%] mx-auto rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ship Smarter, Faster & More Efficiently!
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Whether youre a small business or a high-volume shipper, our platform helps you move freight faster, cheaper, and with complete visibility.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#3B82F6",
              color: "white",
              borderColor: "#3B82F6"
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 text-blue-400 border-blue-400 py-4 px-8 rounded-full text-xl md:text-2xl transition-all"
          >
            Post Your Load Now & Get Matched with Carriers Instantly!
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Shipper;