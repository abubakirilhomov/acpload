import React, { useState } from "react";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import CustomText from "../../../components/CustomText/CustomText";
import { motion } from "framer-motion";

const FAQs = () => {
  const carrierDispatcherFAQs = [
    {
      question: "Do I need an MC number to sign up as a Dispatcher?",
      answer: "No. Dispatchers can register without an MC or USDOT number.",
    },
    {
      question: "What can I do as a dispatcher?",
      answer:
        "You can search for broker-posted loads using advanced filters like origin, destination, date, trailer length, and load type.",
    },
    {
      question: "Can I post loads or trucks as a Dispatcher?",
      answer: "No. Dispatchers can only view and book available loads.",
    },
    {
      question: "Can I rate brokers?",
      answer:
        "You must upgrade your account to “Carrier” status to leave reviews or ratings.",
    },
  ];

  const carrierFAQs = [
    {
      question: "What’s required to register as a Carrier?",
      answer:
        "You’ll need an MC or USDOT number, which will be validated and auto-filled from FMCSA.",
    },
    {
      question: "Can I post my available trucks?",
      answer:
        "Yes. Carriers can post available trucks for brokers and shippers to see.",
    },
    {
      question: "Can I book loads directly?",
      answer:
        "Yes. You can contact brokers or shippers who posted loads and book directly.",
    },
    {
      question: "Can I add other users to my account?",
      answer:
        "Yes, if you’re a verified user, you can verify or invite others under the same MC.",
    },
    {
      question: "Can I review brokers?",
      answer:
        "Yes. You can rate brokers on communication, service, payment speed, and reliability.",
    },
  ];

  const brokerFAQs = [
    {
      question: "How do I sign up as a Broker?",
      answer:
        "Enter your MC/USDOT number and verify your company details retrieved from FMCSA.",
    },
    {
      question: "What can I do on the platform?",
      answer:
        "Post loads, search for available trucks, and connect with carriers and dispatchers.",
    },
    {
      question: "Can I find loads from shippers?",
      answer: "Yes. Brokers can also browse available shipper loads.",
    },
    {
      question: "Can I review carriers?",
      answer:
        "Yes. Brokers can rate carriers on service level, punctuality, and care.",
    },
    {
      question: "Can I work with ACP Loads via API?",
      answer:
        "Yes. If your system supports auto-load posting, contact us to integrate.",
    },
  ];

  const shipperFAQs = [
    {
      question: "How do I register as a Shipper?",
      answer:
        "Register with your company details. MC or USDOT numbers aren't required, and your role is automatically set to Shipper.",
    },
    {
      question: "Can Shippers directly post loads?",
      answer:
        "Yes. Shippers can easily post loads that become available to brokers.",
    },
    {
      question: "How do shippers track posted loads?",
      answer:
        "Shippers can view all interactions, responses, and matched trucks via their dashboard.",
    },
    {
      question: "Can Shippers review brokers or carriers?",
      answer:
        "Shippers can view ratings and reviews but do not directly rate brokers or carriers.",
    },
  ];

  const generalPlatformFAQs = [
    {
      question: "Is ACP Loads free to use?",
      answer:
        "Currently, ACP Loads is entirely free with full access to all features.",
    },
    {
      question: "How do I update my company or personal information?",
      answer:
        "Use the ACP Directory or Help section to request information updates.",
    },
    {
      question: "What should I do if I suspect unauthorized access?",
      answer:
        "Immediately contact support through the Help section to secure your account.",
    },
    {
      question: "Can I customize my ACP Loads experience?",
      answer:
        "Yes, ACP Loads offers language preferences, themes (ACP Style and Classic), and dark or light modes.",
    },
    {
      question: "How do I get support for technical issues?",
      answer:
        "Contact our support team directly through the Help section or Support Center page.",
    },
    {
      question: "Is ACP Loads available on mobile devices?",
      answer:
        "Yes, ACP Loads is fully responsive and accessible on all devices.",
    },
    {
      question: "How can I partner with ACP Loads or become an affiliate?",
      answer:
        'Visit our "Partnership & Affiliate" page to learn about collaboration opportunities.',
    },
    {
      question: "How do I provide feedback or report bugs?",
      answer:
        "Feedback and bugs can be reported through the platform’s Help section or directly via email to our support center.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDrawer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFAQSection = (title, data, startIndex) => (
    <div className="mb-12">
      <CustomText type="subtitle" className="text-xl font-semibold mb-6">
        {title}
      </CustomText>
      <div className="space-y-4">
        {data.map((item, i) => {
          const index = startIndex + i;
          return (
            <div
              key={index}
              className="border border-gray-700 rounded-xl bg-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleDrawer(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-base sm:text-lg font-medium">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm sm:text-base text-gray-200">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-gray-800 text-white">
      {/* Intro Section */}
      <SectionContainer className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-2/3 z-10 bg-gray-500 p-6 sm:p-8 md:p-10 rounded-3xl mb-10 md:mb-0 md:-mr-16"
          >
            <CustomText
              type="title"
              className="text-2xl sm:text-3xl font-bold mb-4"
            >
              FAQs
            </CustomText>
            <CustomText type="text" className="text-sm sm:text-base mb-8">
              Welcome to the ACP Loads FAQ section. Below you'll find detailed
              answers grouped by user roles, along with general platform
              information to ensure you have all necessary details.
            </CustomText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="w-full md:w-1/2 relative aspect-square"
          >
            <img
              src="/images/faqs-showcase.png"
              alt="FAQs Illustration"
              className="absolute inset-0 w-full h-full rounded-full object-cover"
            />
          </motion.div>
        </div>
      </SectionContainer>

      {/* FAQs */}
      <div className="bg-gray-900">
        <SectionContainer className="py-10">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            {renderFAQSection(
              "Carrier Dispatcher FAQs",
              carrierDispatcherFAQs,
              0
            )}
            {renderFAQSection(
              "Carrier FAQs",
              carrierFAQs,
              carrierDispatcherFAQs.length
            )}
            {renderFAQSection(
              "Broker FAQs",
              brokerFAQs,
              carrierDispatcherFAQs.length + carrierFAQs.length
            )}
            {renderFAQSection(
              "Shipper FAQs",
              shipperFAQs,
              carrierDispatcherFAQs.length +
                carrierFAQs.length +
                brokerFAQs.length
            )}
            {renderFAQSection("General Platform FAQs", generalPlatformFAQs, 0)}
          </div>
        </SectionContainer>
      </div>
      {/* Contact Form Section */}
<SectionContainer className="py-16">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <CustomText type="subtitle" className="text-xl font-semibold mb-6">
      Still have questions? Reach out to us.
    </CustomText>

    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-4xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-4xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <textarea
        rows="5"
        placeholder="Type your message here..."
        className="w-full px-4 py-3 rounded-2xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>

      <button
        type="submit"
        className="btn btn-info rounded-full text-white transition"
      >
        Submit
      </button>
    </form>
  </div>
</SectionContainer>

    </div>
  );
};

export default FAQs;
