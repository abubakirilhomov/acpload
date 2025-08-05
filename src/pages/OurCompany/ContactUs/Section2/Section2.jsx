import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'General Inquiries:',
    content:
      'If you have general questions about ACP Loads, our platform features, or need help getting started, reach out via the contact form below or use any of the options provided.',
  },
  {
    title: 'Customer Support:',
    content:
      'For immediate help with your account, load posting, searching, or technical issues, please visit our Support Center or email us directly.',
  },
  {
    title: 'Partnerships & Affiliates:',
    content: (
      <>
        Are you interested in partnering or integrating your system with ACP Loads? Visit our Partnership & Affiliate page or contact us at:{' '}
        <a href="mailto:partners@acploads.com" className="text-blue-400 underline">
          partners@acploads.com
        </a>
      </>
    ),
  },
];

const Section2 = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 text-center">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How to Reach Us
      </motion.h1>

      {/* Animated Cards */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all p-6 rounded-2xl shadow-md hover:shadow-blue-500/20 hover:scale-[1.03] duration-300 ease-in-out"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-3">{card.title}</h3>
            <p className="text-sm text-gray-200 leading-relaxed">{card.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Section2;
