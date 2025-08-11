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
import { useTranslation } from "react-i18next";

// Animation variants (unchanged)
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
      ease: "easeInOut",
    },
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
      duration: 0.6,
    },
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
      duration: 0.6,
    },
  },
};

const staggerItems = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Carrier = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative pt-24 md:pt-32 lg:pt-40 bg-[url('https://www.potelawfirm.com/img/agreement-new-ownership.jpg')] bg-cover bg-center min-h-[70vh] lg:h-[90vh]"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 py-12 lg:py-0">
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[600px] bg-blue-500/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-start"
          >
            <motion.p
              variants={itemVariants}
              className="w-full lg:w-[600px] bg-blue-500/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-start"
            >
              {t("carrier.title")}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-white text-lg sm:text-xl font-medium mb-4 sm:mb-5"
            >
              {t("carrier.sub-title")}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-white mb-6 sm:mb-8 text-sm sm:text-base"
            >
              {t("carrier.description")}
            </motion.p>
            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              className="w-full lg:w-auto mt-8 lg:mt-0"
            >
              {t("btn-input-texts.contact-us")}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              duration: 0.8,
            }}
            className="w-full lg:w-auto mt-8 lg:mt-0"
          >
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/61008b130788d17e927fd31b/TuSimple-Ryder-Partnership/0x0.jpg?format=jpg&crop=3470,1998,x222,y19,safe&width=960"
              alt="Truck partnership"
              className="rounded-2xl w-full max-w-[650px] h-auto max-h-[500px] object-cover shadow-xl mx-auto"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="mt-12 sm:mt-16 lg:mt-20 bg-gray-900 w-full py-12 sm:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-center font-bold text-white text-3xl sm:text-4xl mb-10 sm:mb-12 lg:mb-16"
          >
            {t("carrier.why-choose.title")}
          </motion.h2>
          <motion.div
            variants={staggerItems}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          >
            {[
              {
                icon: <ArrowUpRight className="w-6 h-6" />,
                title: t("carrier.why-choose.1.title"),
                desc: t("carrier.why-choose.1.description"),
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: t("carrier.why-choose.2.title"),
                desc: t("carrier.why-choose.2.description"),
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: t("carrier.why-choose.3.title"),
                desc: t("carrier.why-choose.3.description"),
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: t("carrier.why-choose.4.title"),
                desc: t("carrier.why-choose.4.description"),
              },
              {
                icon: <Laptop className="w-6 h-6" />,
                title: t("carrier.why-choose.5.title"),
                desc: t("carrier.why-choose.5.description"),
              },
              {
                icon: <Share2 className="w-6 h-6" />,
                title: t("carrier.why-choose.6.title"),
                desc: t("carrier.why-choose.6.description"),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(55, 65, 81, 0.7)",
                }}
                className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-full border-2 border-blue-400 p-3 sm:p-4 flex items-center justify-center"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-bold text-lg sm:text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-gray-800 py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-white text-center text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 lg:mb-16"
          >
            {t("carrier.how-it-works.title")}
          </motion.h2>

          <motion.div
            variants={staggerItems}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: t("carrier.how-it-works.card-1.title"),
                desc: `${t("carrier.how-it-works.card-1.description-1")} ${t(
                  "carrier.how-it-works.card-1.description-2"
                )}`,
              },
              {
                icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: t("carrier.how-it-works.card-2.title"),
                desc: `${t("carrier.how-it-works.card-2.description-1")} ${t(
                  "carrier.how-it-works.card-2.description-2"
                )}`,
              },
              {
                icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: t("carrier.how-it-works.card-3.title"),
                desc: `${t("carrier.how-it-works.card-3.description-1")} ${t(
                  "carrier.how-it-works.card-3.description-2"
                )}`,
              },
              {
                icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: t("carrier.how-it-works.card-4.title"),
                desc: `${t("carrier.how-it-works.card-4.description-1")} ${t(
                  "carrier.how-it-works.card-4.description-2"
                )}`,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(55, 65, 81, 0.7)",
                }}
                className="bg-gray-700 rounded-xl p-6 sm:p-8 text-white transition-all"
              >
                <motion.div
                  animate={floatAnimation}
                  className="text-blue-400 mx-auto mb-3 sm:mb-4 flex justify-center"
                >
                  {step.icon}
                </motion.div>
                <h3 className="font-bold text-base sm:text-lg mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base text-center">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="mt-10 sm:mt-12 lg:mt-16 bg-gray-900 w-full py-12 sm:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-center font-bold text-white text-3xl sm:text-4xl mb-10 sm:mb-12 lg:mb-16"
          >
            {t("carrier.key-features.1.title").split(" ")[0]}{" "}
            {t("carrier.key-features.1.title").split(" ").slice(1).join(" ")}
          </motion.h2>
          <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10">
            <motion.div
              variants={slideInLeft}
              className="w-full lg:w-1/2 space-y-4 sm:space-y-6"
            >
              {[
                {
                  icon: (
                    <MdOutlineAccessTime className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  ),
                  title: t("carrier.key-features.1.title"),
                  desc: t("carrier.key-features.1.description"),
                },
                {
                  icon: (
                    <HiMiniCheckBadge className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  ),
                  title: t("carrier.key-features.2.title"),
                  desc: t("carrier.key-features.2.description"),
                },
                {
                  icon: (
                    <BsFillTicketPerforatedFill className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  ),
                  title: t("carrier.key-features.3.title"),
                  desc: t("carrier.key-features.3.description"),
                },
                {
                  icon: (
                    <BsCardChecklist className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  ),
                  title: t("carrier.key-features.4.title"),
                  desc: t("carrier.key-features.4.description"),
                },
                {
                  icon: (
                    <GiProgression className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  ),
                  title: t("carrier.key-features.5.title"),
                  desc: t("carrier.key-features.5.description"),
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 5,
                    backgroundColor: "rgba(31, 41, 55, 0.7)",
                  }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex-shrink-0"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={slideInRight}
              className="w-full lg:w-1/2 mt-8 lg:mt-0"
            >
              <motion.img
                animate={floatAnimation}
                src="https://www.shutterstock.com/image-photo/manager-formal-clothes-holding-plan-600nw-2264317751.jpg"
                alt="Team working together"
                className="rounded-xl w-full h-auto max-h-[500px] object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-gray-800 py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <motion.div
            variants={itemVariants}
            className="border-4 border-blue-400 bg-gray-700 rounded-xl p-6 sm:p-8 lg:p-12 text-center max-w-6xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-white"
            >
              {t("carrier.take-control.title")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 text-gray-300"
            >
              {t("carrier.take-control.description")}
            </motion.p>
            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#3B82F6",
                color: "white",
                borderColor: "#3B82F6",
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 text-blue-400 border-blue-400 py-2 sm:py-3 lg:py-4 px-6 sm:px-8 lg:px-12 rounded-xl text-base sm:text-lg lg:text-xl transition-all"
            >
              {t(
                "btn-input-texts.sign-up-now-and-start-booking-loads-instantly"
              )}
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Carrier;
