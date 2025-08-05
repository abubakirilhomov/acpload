import React from 'react';
import CustomText from '../../../components/CustomText/CustomText';
import SectionContainer from '../../../components/SectionContainer/SectionContainer';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChartLine, FaTruckMoving, FaFileSignature, FaSearchDollar, FaBolt, FaGlobeAmericas, FaCogs, FaCalculator } from 'react-icons/fa';
import SubscribeSection from '../../../components/Blog/SubscribeSection/SubscribeSection';

const Blog = () => {
  const { t } = useTranslation();
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.3 });

  const cardData = [
    { title: 'Stay Informed', text: 'Get timely updates on industry trends, regulations, and freight markets.' },
    { title: 'Data-Driven Insights', text: 'Access expert analysis and forecasts to make smarter decisions.' },
    { title: 'Actionable Tips', text: 'Learn proven strategies for dispatching, pricing, and cost reduction.' },
    { title: 'Technology & Innovation', text: 'Explore how digital loadboards, TMS systems, and automation are transforming logistics.' },
    { title: 'Real Success Stories', text: 'Get inspired by companies, brokers, and carriers achieving remarkable results.' },
  ];

  const iconComponents = [FaChartLine, FaSearchDollar, FaBolt, FaCogs, FaGlobeAmericas];

  return (
    <>
      <div ref={ref1} className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-[url('/images/blog-showcase.jpg')] bg-cover bg-center flex items-end justify-start">
        <SectionContainer>
          <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-2xl text-white"
          >
            <CustomText type="title">Freight & Logistics Blog:</CustomText>
            <CustomText type="title">Your Trusted Source for Industry Insights</CustomText>
            <CustomText type="text" className="mt-5">
              Stay Ahead in the Fast-Paced World of Freight & Logistics!
            </CustomText>
          </motion.div>
        </SectionContainer>
      </div>

      <SectionContainer>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <CustomText type="subtitle">Why Follow Our Blog?</CustomText>
        </motion.div>

        <div className="w-full mx-auto flex flex-wrap justify-center gap-6">
          {cardData.map((card, index) => {
            const Icon = iconComponents[index % iconComponents.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative flex-1 min-w-[250px] p-8 flex flex-col items-center text-center bg-white/10 rounded-2xl border border-white/20 cursor-pointer select-none shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white backdrop-blur-md"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center text-white text-2xl font-bold bg-info dark:bg-blue-500 rounded-full shadow-lg">
                  <Icon />
                </div>
                <CustomText type="heading" className="mt-6">
                  {card.title}
                </CustomText>
                <CustomText type="text" className="mt-3 text-gray-300">
                  {card.text}
                </CustomText>
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <CustomText type="subtitle" className="mb-4">Freight Market Trends: 2025</CustomText>
          <CustomText type="heading" className="mb-2">Trucking Industry Snapshot</CustomText>
          <CustomText type="text" className="mb-4">The U.S. trucking industry in mid-2025 is navigating a freight recession, with spot market rates stabilizing but overall demand remaining weak. Overcapacity continues to pressure carriers, while diesel prices have seen a modest 4% drop since the start of the year.</CustomText>
          <CustomText type="heading" className="mt-6 mb-2">Key Highlights</CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>Short-Haul Volume Growth: Driven by e-commerce and consumer demand, short-haul loads are increasing, especially in metro areas.</li>
            <li>Long-Haul Slowdown: Long-haul freight is shifting to intermodal solutions due to cost savings.</li>
            <li>Spot Market Insights: Load rejections are trending upward (currently around 7%), signaling tightening capacity in some regions.</li>
            <li>Tariff Impacts: Recent trade tensions have caused temporary rate surges, especially on imported goods, but these are now easing.</li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">FMCSA & DOT Compliance Updates</CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>Pre-2000 Truck ELD Deadline: Starting June 2025, all trucks—including pre-2000 models—must comply with the ELD mandate. No more paper logs.</li>
            <li>DOT Medical Certificates Go Digital: From June 23, 2025, medical certificates will be electronically submitted to state agencies, streamlining the process for drivers.</li>
            <li>English Proficiency Enforcement: Roadside inspections will now verify drivers’ English-speaking ability as part of FMCSA’s safety compliance checks.</li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">Dispatching Strategies for 2025</CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>Focus on Short-Haul Efficiency: With long-haul capacity decreasing, carriers can maximize profits by optimizing short-haul routes.</li>
            <li>Monitor Real-Time Loadboard Data: Adjust strategies based on shifting load densities, rejection rates, and spot market changes.</li>
            <li>Carrier–Broker Partnerships: Strengthen relationships by leveraging live rates, transparent communication, and reliable dispatching tools.</li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">Fuel Price Trends</CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>Fuel Prices Down: Diesel costs have decreased by about 4% since January.</li>
            <li>Geopolitical Risks Remain: Middle East shipping disruptions could still create volatility, so keep an eye on global tanker rates and supply chain bottlenecks.</li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">Building Stronger Freight Networks</CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>Use Smart Loadboards: Live data, real-time rates, and verified load details help build long-term trust between brokers and carriers.</li>
            <li>Transparent Pricing: Brokers offering real-time rate visibility foster loyalty with carrier partners.</li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">Technology & Automation</CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>Digital Freight Platforms Rising: More brokers and carriers are adopting advanced TMS and AI-powered logistics solutions.</li>
            <li>Autonomous Truck Pilots: Self-driving truck routes are expanding in Texas and Arizona, potentially reshaping the industry in the coming years.</li>
          </ul>

          <CustomText type="heading" className="mt-6 mb-2">Freight Rate Calculations</CustomText>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>Data-Driven Rates: Use dynamic pricing tools that factor in fuel costs, market capacity, load volumes, and regional trends.</li>
            <li>Freight Calculators: Real-time freight rate calculators help carriers and brokers negotiate more competitively.</li>
          </ul>
        </motion.div>
      </SectionContainer>
      <SubscribeSection />
    </>
  );
};

export default Blog;