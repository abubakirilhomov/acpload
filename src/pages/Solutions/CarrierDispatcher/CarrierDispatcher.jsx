import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Animation variants (unchanged)
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
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-cover bg-center pt-16 md:pt-20 min-h-screen bg-[url('https://freightwaves.b-cdn.net/wp-content/uploads/2020/02/Volvo-driver-cab.jpg?width=1200&height=683')] flex items-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-600 bg-opacity-80 w-full max-w-3xl lg:max-w-4xl xl:max-w-[700px] h-auto min-h-[400px] md:min-h-[500px] lg:h-[600px] rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-start md:my-0">
            <motion.p
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl text-white w-full lg:max-w-[85%] font-bold mb-4 md:mb-5 leading-tight"
            >
              {t("carrier-dispatcher.title")}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-white text-base sm:text-lg md:text-xl font-medium mb-4 md:mb-5 w-full"
            >
              {t("carrier-dispatcher.description").split("!")[0]}!
              <br />
              {t("carrier-dispatcher.description").split("!")[1]}
            </motion.p>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-none border-2 border-primary text-primary hover:text-white hover:bg-primary px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-md transition text-sm sm:text-base md:text-lg"
            >
              {t("btn-input-texts.contact-us")}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-gray-900 text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-8 md:mb-10 lg:mb-12 text-center"
          >
            {t("carrier-dispatcher.why-use-platform.title")}
          </motion.h2>
          <motion.div
            variants={staggerItems}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
          >
            {[
              {
                icon: "https://assets.nicepagecdn.com/08f6c9cc/6449759/images/3178933-1f084769.png",
                title: t("carrier-dispatcher.why-use-platform.1.title"),
                desc: t("carrier-dispatcher.why-use-platform.1.description"),
              },
              {
                icon: "https://assets.nicepagecdn.com/08f6c9cc/6449759/images/679720-7f4b0609.png",
                title: t("carrier-dispatcher.why-use-platform.2.title"),
                desc: t("carrier-dispatcher.why-use-platform.2.description"),
              },
              {
                icon: "https://assets.nicepagecdn.com/08f6c9cc/6449759/images/3061732-78ef29a0.png",
                title: t("carrier-dispatcher.why-use-platform.3.title"),
                desc: t("carrier-dispatcher.why-use-platform.3.description"),
              },
              {
                icon: "https://assets.nicepagecdn.com/08f6c9cc/6449759/images/7314686-690bdad7.png",
                title: t("carrier-dispatcher.why-use-platform.4.title"),
                desc: t("carrier-dispatcher.why-use-platform.4.description"),
              },
              {
                icon: "https://assets.nicepagecdn.com/08f6c9cc/6449759/images/4947736-13ce3961.png",
                title: t("carrier-dispatcher.why-use-platform.5.title"),
                desc: t("carrier-dispatcher.why-use-platform.5.description"),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-lg hover:bg-gray-800 transition h-full"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4"
                />
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-gray-800 text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10 lg:mb-12 text-center"
          >
            {t("carrier-dispatcher.how-it-works.title")}
          </motion.h2>
          <motion.div
            variants={staggerItems}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {[
              {
                step: "1",
                title: t("carrier-dispatcher.how-it-works.card-1.title"),
                desc: [
                  t("carrier-dispatcher.how-it-works.card-1.description-1"),
                  t("carrier-dispatcher.how-it-works.card-1.description-2"),
                ],
              },
              {
                step: "2",
                title: t("carrier-dispatcher.how-it-works.card-2.title"),
                desc: [
                  t("carrier-dispatcher.how-it-works.card-2.description-1"),
                  t("carrier-dispatcher.how-it-works.card-2.description-2"),
                ],
              },
              {
                step: "3",
                title: t("carrier-dispatcher.how-it-works.card-3.title"),
                desc: [
                  t("carrier-dispatcher.how-it-works.card-3.description-1"),
                  t("carrier-dispatcher.how-it-works.card-3.description-2"),
                ],
              },
              {
                step: "4",
                title: t("carrier-dispatcher.how-it-works.card-4.title"),
                desc: [
                  t("carrier-dispatcher.how-it-works.card-4.description-1"),
                  t("carrier-dispatcher.how-it-works.card-4.description-2"),
                ],
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start p-5 sm:p-6 md:p-7 bg-gray-700 rounded-2xl hover:bg-gray-600 transition"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-white rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 md:mr-6 bg-primary shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold">
                    {step.step}
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
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
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 sm:px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-center md:text-left"
        >
          {t("carrier-dispatcher.key-features.title")}
        </motion.h2>
        <motion.div
          variants={staggerItems}
          className="space-y-4 sm:space-y-5 md:space-y-6 flex flex-col items-center"
        >
          {[
            t("carrier-dispatcher.key-features.1"),
            t("carrier-dispatcher.key-features.2"),
            t("carrier-dispatcher.key-features.3"),
            t("carrier-dispatcher.key-features.4"),
            t("carrier-dispatcher.key-features.5"),
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              className="bg-gradient-to-r from-blue-600 to-gray-900 p-4 sm:p-5 md:p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between h-auto sm:h-32 md:h-36 lg:h-40 w-full max-w-4xl"
            >
              <div className="bg-white text-blue-800 rounded-full p-2 sm:p-3 md:p-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 shrink-0">
                <img
                  src="https://assets.nicepagecdn.com/08f6c9cc/6449759/images/1656075-ff126c17.png"
                  alt="Feature icon"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                />
              </div>
              <div className="text-left flex-1">
                <p className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  {feature}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-gray-800 text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight"
          >
            {t("carrier-dispatcher.join-today-and-simplify.title")}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-7 md:mb-8 text-gray-300"
          >
            {t("carrier-dispatcher.join-today-and-simplify.description")}
          </motion.p>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block bg-primary text-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-lg text-lg sm:text-xl font-semibold mb-3 sm:mb-4 hover:bg-blue-700 transition"
          >
            {t("btn-input-texts.sign-up-now")}
          </motion.a>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base"
          >
            {t("carrier-dispatcher.join-today-and-simplify.sub-text")}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default CarrierDispatcher;
