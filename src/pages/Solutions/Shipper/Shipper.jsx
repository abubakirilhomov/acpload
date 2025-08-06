import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
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
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Shipper = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative pt-16 md:pt-20 h-[90vh] md:h-[100vh] bg-[url('https://www.knighttrans.com/wp-content/uploads/2024/07/Chris-C.jpg')] bg-cover bg-center md:bg-left"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          variants={itemVariants}
          className="relative bg-gray-600/90 rounded-xl md:rounded-2xl mx-4 md:ml-10 p-4 md:p-6 w-auto md:w-[90%] max-w-[600px] flex flex-col items-start"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 sm:mb-4 md:mb-5">
            Streamline Your Freight Shipping
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4 md:mb-5">
            Get Your Freight Moved Quickly & Efficiently with Trusted Carriers!
          </p>
          <p className="text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">
            Finding reliable carriers and ensuring on-time deliveries can be
            challenging. Our platform makes freight shipping fast, transparent,
            and hassle-free by connecting shippers with verified carriers and
            brokers in real time.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#3B82F6",
              color: "white",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-none border-2 text-primary border-primary px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-md transition text-sm sm:text-base"
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
        className="relative bg-gray-900 text-white py-12 md:py-20"
      >
        <div className="max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center p-4 md:p-6 lg:p-10 gap-6 md:gap-8 lg:gap-10">
          <motion.div variants={itemVariants} className="w-full md:w-1/2">
            <img
              src="https://www.peforhire.com/wp-content/uploads/2021/11/hire-an-electrical-engineer.jpeg"
              alt="Warehouse Worker"
              className="rounded-lg h-48 sm:h-64 md:h-80 lg:h-96 w-full object-cover"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6">
              Why Shippers Choose Our Platform?
            </h2>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {[
                "Instant Load Posting – List your shipments in seconds and get instant matches.",
                "Reliable Carrier Network – Work with pre-screened, professional carriers.",
                "Competitive Freight Rates – Compare and choose the best offers.",
                "Real-Time Tracking – Monitor your shipments every step of the way.",
                "Effortless Documentation – Simplify contracts, rate confirmations, and invoices.",
                "Faster Delivery – Reduce transit time with optimized carrier matching.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="text-blue-400 mt-0.5 sm:mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                  <p className="text-xs sm:text-sm md:text-base">{item}</p>
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
        className="bg-gray-800 text-white py-12 md:py-20"
      >
        <div className="max-w-[90%] mx-auto px-4">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          >
            How It Works for Shippers
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              {
                step: "1",
                title: "Post Your Load",
                description:
                  "Enter shipment details, including pickup, destination, weight, and special requirements. Get instant load visibility to trusted carriers.",
              },
              {
                step: "2",
                title: "Get Matched with Reliable Carriers",
                description:
                  "Our smart system finds the best carriers & brokers based on availability and price. Review carrier ratings and performance before booking.",
              },
              {
                step: "3",
                title: "Secure the Best Rate & Confirm Shipment",
                description:
                  "Receive competitive bids from carriers. Choose the best offer and confirm your shipment with one click.",
              },
              {
                step: "4",
                title: "Track & Deliver with Confidence",
                description:
                  "Real-time tracking for full shipment visibility. Get notifications on status updates and delivery confirmations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-700 p-3 sm:p-4 md:p-6 rounded-lg h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] flex flex-col items-center justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-center text-xs sm:text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
        className="bg-gray-900 text-white py-12 md:py-20"
      >
        <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Key Features for Shippers
          </h2>
          <div className="space-y-4 md:space-y-6 flex flex-col items-center">
            {[
              {
                title: "Instant Load Posting",
                description: "Post, manage, and edit shipments easily.",
              },
              {
                title: "Verified Carriers & Brokers",
                description: "Work with industry-trusted professionals.",
              },
              {
                title: "Freight Rate Calculator",
                description: "Ensure cost-effective shipping.",
              },
              {
                title: "Optimized Load Matching",
                description: "Reduce delays and increase efficiency.",
              },
              {
                title: "24/7 Shipment Tracking",
                description: "Stay informed from pickup to delivery.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-b from-gray-700 to-gray-800 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl flex items-center justify-between h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[120px] w-full max-w-3xl"
              >
                <div className="bg-blue-200 text-blue-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="ml-4 sm:ml-6 text-left flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
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
        className="bg-gray-800 py-12 md:py-20"
      >
        <div className="border-2 sm:border-3 md:border-4 border-blue-400 bg-gray-700 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mx-auto rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
            Ship Smarter, Faster & More Efficiently!
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 text-gray-300">
            Whether you're a small business or a high-volume shipper, our
            platform helps you move freight faster, cheaper, and with complete
            visibility.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#3B82F6",
              color: "white",
              borderColor: "#3B82F6",
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 text-blue-400 border-blue-400 py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl transition-all"
          >
            Post Your Load Now & Get Matched with Carriers Instantly!
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Shipper;