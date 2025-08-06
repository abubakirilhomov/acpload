import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import CustomText from "../../../components/CustomText/CustomText";
import {
  MdTrendingUp,
  MdBarChart,
  MdLocalShipping,
  MdOutlineInsights,
  MdCheckCircle,
} from "react-icons/md";
import { MdStarRate } from "react-icons/md"; // Replace MdCheckCircle import
const NewsletterSubscription = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const items = [
    {
      icon: <MdTrendingUp className="h-8 w-8 text-white" />,
      text: "Freight market trends & industry news",
    },
    {
      icon: <MdBarChart className="h-8 w-8 text-white" />,
      text: "Live loadboard stats & hot lanes",
    },
    {
      icon: <MdLocalShipping className="h-8 w-8 text-white" />,
      text: "Carrier & broker tips",
    },
    {
      icon: <MdOutlineInsights className="h-8 w-8 text-white" />,
      text: "Expert insights, guides, and compliance alerts",
    },
  ];

  const subscribeItems = [
    {
      title: "Monthly Industry Insights",
      description:
        "Get expert analysis on trends in freight rates, capacity, regulations, and more—delivered every month.",
    },
    {
      title: "Invitations to Webinars & Events",
      description:
        "Gain knowledge from live sessions hosted by logistics experts and connect with the ACP Loads community.",
    },
    {
      title: "Real-Time Freight Tips",
      description:
        "Stay sharp with timely tips on load searching, dispatching, fuel savings, and optimizing your operations.",
    },
    {
      title: "No Spam – Just Freight-Focused Content",
      description:
        "We value your time. Expect only relevant and high-impact updates—no fluff, no junk.",
    },
    {
      title: "Early Access to Tools & Features",
      description:
        "Be the first to try new platform tools, calculators, and performance upgrades before public release.",
    },
    {
      title: "Expert Interviews & Success Stories",
      description:
        "Learn directly from real brokers, carriers, and dispatchers sharing their insights and real-world wins.",
    },
  ];

  return (
    <>
      {/* TOP SECTION WITH IMAGE */}
      <div className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-[url('/images/news-subscription-showcase.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <SectionContainer>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center text-white max-w-3xl mx-auto px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <CustomText
                type="title"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                Always stay connected with ACP LOADS
              </CustomText>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <CustomText
                type="text"
                className="text-base sm:text-lg md:text-xl mb-8"
              >
                Stay updated with the latest news, trends, and insights in the
                freight and logistics industry!
              </CustomText>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="btn btn-info text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                MISSION
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                className="btn btn-outline text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                DONATE NOW
              </motion.button>
            </div>
          </motion.div>
        </SectionContainer>
      </div>

      {/* MIDDLE INFO SECTION */}
      <SectionContainer className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <CustomText
              type="subtitle"
              className="text-2xl sm:text-3xl font-bold mb-4"
            >
              Join Our Newsletter — Stay Ahead in Trucking & Logistics
            </CustomText>
            <CustomText type="text" className="mb-6">
              Whether you're a carrier, dispatcher, broker, or shipper, our
              newsletter brings you value-packed updates that help you work
              smarter and stay competitive.
            </CustomText>
            <button className="btn btn-info rounded-full text-white">
              Learn More
            </button>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {items.map((item, i) => (
              <div key={i} className="bg-[#4c7397] p-6 rounded-2xl">
                <motion.div
                  whileInView={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="block mb-2">{item.icon}</span>
                  <CustomText
                    type="text"
                    className="text-base sm:text-lg text-white/90"
                  >
                    {item.text}
                  </CustomText>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </SectionContainer>

      {/* WHY SUBSCRIBE SECTION */}
      <SectionContainer className="py-12 px-4 sm:px-6 lg:px-8  md:py-16 text-white">
        <div className="text-center mb-12">
          <CustomText
            type="subtitle"
            className="text-3xl md:text-4xl font-bold"
          >
            Why Subscribe?
          </CustomText>
        </div>
        <div
          ref={ref2}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto"
        >
          {subscribeItems.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView2 ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.05 }}
              className="flex-1 min-w-[250px] p-4 sm:p-6 flex flex-col lg:flex-row items-center lg:items-center text-left bg-[#2a3447] rounded-4xl border border-white/10 cursor-pointer select-none shadow-md"
            >
              <div className="lg:static lg:ml-0 lg:mr-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-info sm:bg-transparent text-info rounded-full shadow-md">
                <MdStarRate className=" text-xl sm:text-3xl text-white sm:text-info" />
              </div>
              <div className="mt-4 lg:mt-0">
                <CustomText type="heading" className="mb-2">
                  {benefit.title}
                </CustomText>
                <CustomText type="text" className="text-white/80">
                  {benefit.description}
                </CustomText>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 30 }}
        animate={inView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto bg-gray-800 px-4 sm:px-6 lg:px-8 flex items-center justify-between"
      >
        <SectionContainer className="text-white py-8">
          <div className="flex items-center">
            <span className="block w-6 h-36 bg-info mb-2"></span>
            <div className="ml-4">
              <CustomText type="title" className="text-4xl font-bold">
                YOUR PRIVACY MATTERS
              </CustomText>
              <CustomText type="text" className="mt-4 text-lg">
                We respect your inbox. ACP Loads will never sell or share your
                information. You can unsubscribe at any time.
              </CustomText>
            </div>
          </div>
        </SectionContainer>
      </motion.div>
    </>
  );
};

export default NewsletterSubscription;
