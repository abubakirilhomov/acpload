import React from 'react';
import SectionContainer from '../../../components/SectionContainer/SectionContainer'; // Adjust the import path as needed
import CustomText from '../../../components/CustomText/CustomText'; // Adjust the import path as needed
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaHandshake,
  FaRocket,
  FaCogs,
  FaHeadset,
  FaCheck,
} from 'react-icons/fa';

const PartnershipAffiliate = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true, threshold: 0.3 });

  const partnerBenefits = [
    {
      title: 'Trusted Loadboard in the U.S. Logistics Sector',
      description: 'Our platform connects thousands of carriers, brokers, dispatchers, and shippers every day.',
      icon: FaHandshake,
    },
    {
      title: 'Free Access, Fast Growth',
      description: 'As a free-to-use loadboard, we attract high volumes of users, ensuring your referral network scales quickly.',
      icon: FaRocket,
    },
    {
      title: 'Modern Technology & Real-Time Tools',
      description: 'Partner with a platform that integrates cutting-edge tools like TMS, rate calculators, and live load data.',
      icon: FaCogs,
    },
    {
      title: 'Dedicated Support & Co-Marketing',
      description: 'Get access to custom assets, branded campaigns, and support to promote effectively.',
      icon: FaHeadset,
    },
  ];

  return (
    <div>
      <SectionContainer>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-10"
        >
          <div className="w-full lg:w-[65%] h-64 sm:h-80 p-4 sm:p-6 bg-[#4c7397] rounded-2xl sm:rounded-4xl flex flex-col justify-center">
            <CustomText type="title">Partnership Opportunities</CustomText>
            <CustomText type="text" className="mt-4 sm:mt-6">
              Discover how our partnership program can help you grow your business by collaborating with industry leaders. Gain access to exclusive resources, marketing tools, and a supportive network designed to drive your success.
            </CustomText>
          </div>
          <div className="w-full lg:w-[35%] mt-6 lg:mt-0 lg:ml-6">
            <img
              src="/images/partnership-showcase-1.jpeg"
              alt="Partnership Showcase 1"
              className="w-full h-64 sm:h-80 rounded-2xl sm:rounded-4xl shadow-lg object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col lg:flex-row items-start justify-between gap-6"
        >
          <div className="w-full lg:w-[35%] mb-6 lg:mt-0 lg:mr-6">
            <div className="w-full h-64 sm:h-80 p-4 sm:p-6 bg-info rounded-2xl sm:rounded-4xl flex flex-col justify-center">
              <CustomText type="heading">Affiliate Benefits</CustomText>
              <CustomText type="text" className="mt-4 sm:mt-6">
                Join our affiliate program to earn competitive commissions by promoting our services. Enjoy real-time tracking, personalized support, and flexible earning opportunities tailored to your goals.
              </CustomText>
            </div>
          </div>
          <div className="w-full lg:w-[65%]">
            <img
              src="/images/partnership-showcase-2.jpeg"
              alt="Partnership Showcase 2"
              className="w-full h-64 sm:h-80 rounded-2xl sm:rounded-4xl shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </SectionContainer>

      <SectionContainer>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <CustomText type="subtitle" className="mb-4 sm:mb-10 text-white">
            Why Partner with ACP Loads?
          </CustomText>
          <div className="w-full mx-auto flex flex-col lg:flex-col justify-center gap-6 shadow-lg">
            {partnerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 min-w-[250px] p-4 sm:p-6 flex flex-col lg:flex-row items-center lg:items-start text-left bg-[#2a3447] rounded-4xl border border-white/10 cursor-pointer select-none shadow-md text-white"
                >
                  <div className="lg:static lg:ml-0 lg:mr-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-info rounded-full shadow-md">
                    <Icon className="text-white text-xl sm:text-2xl" />
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <CustomText type="heading" className="mb-2">
                      {benefit.title}
                    </CustomText>
                    <CustomText type="text" className="text-gray-300">
                      {benefit.description}
                    </CustomText>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </SectionContainer>

      <SectionContainer>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 p-8"
          >
            <CustomText type="subtitle" className="text-white mb-4">Affiliate Program</CustomText>
            <CustomText type="heading" className="text-white font-normal mb-6">Earn by Sharing ACP Loads</CustomText>
            <CustomText type="text" className="text-white/80 mb-6 leading-relaxed">
              If you’re a logistics influencer, content creator, consultant, or digital marketer, our Affiliate Program lets you earn money by referring new users to our platform.
            </CustomText>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-center text-white/80">
                <FaCheck className="text-info mr-3" />
                <span>Commission on Sign-Ups</span>
              </li>
              <li className="flex items-center text-white/80">
                <FaCheck className="text-info mr-3" />
                <span>Custom Referral Links</span>
              </li>
              <li className="flex items-center text-white/80">
                <FaCheck className="text-info mr-3" />
                <span>Analytics Dashboard</span>
              </li>
              <li className="flex items-center text-white/80">
                <FaCheck className="text-info mr-3" />
                <span>Payouts via Stripe or PayPal</span>
              </li>
            </ul>
            <div className="flex items-center mb-8">
              <CustomText type="text" className="text-green-500 font-medium">Perfect for dispatching trainers, loadboard reviewers, and freight marketing pros.</CustomText>
            </div>
            <button className="btn rounded-full border-none bg-[#6b99c7] text-white hover:bg-[#5a87b6] transition-colors">Read More</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex-1 p-8 rounded-4xl shadow-lg bg-[#4c7397]"
          >
            <CustomText type="subtitle" className="text-white mb-4">Strategic Partnerships</CustomText>
            <CustomText type="heading" className="text-white font-normal mb-6">Build Logistics Solutions Together</CustomText>
            <CustomText type="text" className="text-white/80 mb-6 leading-relaxed">
              We’re always open to strategic collaborations with:
            </CustomText>
            <ul className="list-disc list-inside space-y-2 mb-8 text-white/80 marker:text-info">
              <li>Trucking schools or training academies</li>
              <li>Freight factoring or insurance companies</li>
              <li>Truck stop operators & telematics providers</li>
              <li>Tech startups in logistics automation</li>
              <li>Digital freight brokers</li>
            </ul>
            <CustomText type="text" className="text-white/80 mb-8 leading-relaxed">
              Let’s explore how we can integrate, co-brand, or develop tools to move the industry forward — together.
            </CustomText>
            <button className="btn rounded-full border-none bg-[#6b99c7] text-white hover:bg-[#5a87b6] transition-colors">Read More</button>
          </motion.div>
        </motion.div>
      </SectionContainer>

      <SectionContainer>
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: 50 }}
          animate={inView4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-start justify-between gap-6"
        >
          <div className="w-full lg:w-[50%] h-[400px] sm:h-[500px] p-4 sm:p-6 bg-[#4c7397] rounded-2xl sm:rounded-4xl flex flex-col justify-center">
            <CustomText type="subtitle">For Brokers with Automated Systems</CustomText>
            <CustomText type="text" className="mt-4 sm:mt-6">
              If you're a freight broker with your own load posting system or TMS, you can integrate directly with ACP Loads. Share your loads through a secure API and have them automatically posted on our platform — saving you time and expanding your exposure instantly.
            </CustomText>
            <ul className="list-none mt-4 text-white/80">
              <li className="flex items-center">It’s fast, secure, and brings your freight to a wider network of qualified carriers and dispatchers.</li>
            </ul>
            <CustomText type="text" className="mt-auto text-white/70 text-end">
              Collaborating for Mutual Business Growth
            </CustomText>
          </div>
          <div className="w-full lg:w-[50%] h-[400px] sm:h-[500px] mt-6 lg:mt-0 lg:ml-6">
            <img
              src="/images/partnership-section.jpeg"
              alt="Automated Systems Showcase"
              className="w-full h-full rounded-2xl sm:rounded-4xl shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </SectionContainer>

      <SectionContainer>
        <motion.form
          ref={ref5}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView5 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-[#2a3447] p-6 rounded-3xl"
        >
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-400 mb-2">First Name</label>
              <input
                type="text"
                placeholder="Enter your First Name"
                className="w-full p-3 bg-gray-600 text-white rounded-2xl focus:outline-none"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-400 mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Enter your Last Name"
                className="w-full p-3 bg-gray-600 text-white rounded-2xl focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full p-3 bg-gray-600 text-white rounded-2xl focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full p-3 bg-gray-500 text-white rounded-2xl focus:outline-none h-32"
            ></textarea>
          </div>
          <button type="submit" className="w-full btn btn-info text-white px-6 py-5 rounded-2xl transition-colors">
            Submit
          </button>
        </motion.form>
        <motion.div
          ref={ref5}
          initial={{ opacity: 0, y: 50 }}
          animate={inView5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-col md:flex-row justify-between items-start gap-10 text-white"
        >
          <div>
            <CustomText type="heading" className="font-semibold mb-4">
              Get started now!
            </CustomText>
            <CustomText type="text" className="text-white/70">
              If you would like to work with us or just want to get in touch, we’d love to hear from you!
            </CustomText>
          </div>

          <div>
            <CustomText type="text" className="font-medium mb-3">
              Want to join our growing partner network?
            </CustomText>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✔</span>
                <CustomText type="text" className="text-white/70">
                  Fill out the quick application form
                </CustomText>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✔</span>
                <CustomText type="text" className="text-white/70">
                  Our team will review your fit and reach out
                </CustomText>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">✔</span>
                <CustomText type="text" className="text-white/70">
                  Start earning and collaborating!
                </CustomText>
              </li>
            </ul>
          </div>
        </motion.div>
      </SectionContainer>
    </div>
  );
};

export default PartnershipAffiliate;  