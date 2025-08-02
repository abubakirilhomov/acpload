import React from 'react'
import AnimatedContent from '../../../components/ReactBits/AnimatedContent'
import { FaUser, } from "react-icons/fa";
import { FaUsersRectangle, FaComputer, FaUserGear } from "react-icons/fa6";
import { RiFolderForbidFill, RiPictureInPictureExitFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TermsOfService = () => {

  const cards = [
    {
      icon: <FaUser className="text-5xl mb-2" />,
      title: 'User Eligibility',
      description: 'Who can use our platform and what requirements must be met.',
    },
    {
      icon: <FaUsersRectangle className="text-5xl mb-2" />,
      title: 'Account & Registration',
      description: 'Your responsibilities when creating and maintaining an account.',
    },
    {
      icon: <FaComputer className="text-5xl mb-2" />,
      title: 'Platform Usage',
      description: 'Guidelines on how to search for loads, post freight, and interact with other users.',
    },
    {
      icon: <FaUserGear className="text-5xl mb-2" />,
      title: 'Privacy & Data Protection',
      description: 'How we handle user data securely and in compliance with regulations.',
    },
    {
      icon: <RiFolderForbidFill className="text-5xl mb-2" />,
      title: 'Prohibited Activities',
      description: 'What actions are not allowed on our platform to maintain a safe marketplace.',
    },
    {
      icon: <RiPictureInPictureExitFill className="text-5xl mb-2" />,
      title: 'Dispute Resolution',
      description: 'Steps for resolving conflicts between users or with the platform.',
    },
  ];

  return (
    <div>
      <div className="">

        <div className="flex flex-col items-start justify-center min-h-screen bg-cover bg-center text-white text-start p-8 relative"
          style={{ backgroundImage: "url('/images/images-Pica.png')" }}>
          <div className="absolute inset-0 bg-[#081621] opacity-40"></div>
          <AnimatedContent
            distance={100}
            direction="Vertical"
            reverse={false}
            duration={2}
            initialOpacity={0}
            animateOpacity={true}
            initialScale={1}
            threshold={0}
            delay={0}
          >

            <div className="relative z-10 max-w-5xl mx-auto space-y-6 px-4 md:px-8">
              <p className="w-2xl text-6xl font-bold mb-6 ">Know Your Rights and Responsibilities</p>
              <p className="w-2xl   text-lg mb-4">
                Welcome to ACP Loads, the premier trucking loadboard connecting carriers, brokers, and shippers across the U.S. Before using our services, please take a moment to review our Terms and Conditions to understand your rights, obligations, and the guidelines for using our platform.
              </p>
            </div>
          </AnimatedContent>
        </div>
        <div className="relative ">
          <div className="flex flex-col items-center justify-center  bg-gray-600 text-white text-start p-8">


            <p className="text-4xl font-bold text-center my-8">
              Why Are Terms and Conditions Important?</p>
            <p className="text-lg flex justify-center items-center text-center max-w-[70%] italic mb-30">
              By using ACP Loads​​, you agree to comply with our policies that ensure a secure, fair,
              and efficient experience for all users. Our Terms and Conditions outline:
            </p>
          </div>
          <div className="bg-gray-800 text-white  p-8   ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto -translate-y-50">
              {cards.map((card, index) => {
                const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

                return (
                  <motion.div
                    ref={ref}
                    key={index}
                    className="bg-info/80 flex flex-col items-center justify-between w-full h-full py-12 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      {card.icon}
                      <p className="text-2xl font-bold text-center">{card.title}</p>
                    </div>
                    <p className="text-lg text-center max-w-[70%] italic mt-4">{card.description}</p>
                  </motion.div>
                );
              })}
            </div>


          </div>

        </div>
        <div className="flex flex-col items-start justify-center min-h-screen bg-cover bg-center text-white text-start p-8 relative"
          style={{ backgroundImage: "url('/images/wites-Pica.png')" }}>
          <div className="absolute inset-0 bg-[#081621] opacity-40"></div>
          <AnimatedContent
            distance={100}
            direction="Vertical"
            reverse={false}
            duration={2}
            initialOpacity={0}
            animateOpacity={true}
            initialScale={1}
            threshold={0}
            delay={0}
          >

            <div className="relative z-10 max-w-5xl mx-auto space-y-6 px-4 md:px-8">
              <p className="w-2xl text-6xl font-bold mb-6 ">Your Agreement</p>
              <p className="w-2xl   text-lg mb-4">
               By continuing to use ACP Loads, you acknowledge that you have read, understood, and agreed to our Terms and Conditions. If you have any questions, feel free to reach out to our support team.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" >READ THE FULL TERMS AND CONDITIONS</button>
              <p className='text-lg '>Need Assistance? 📩 Contact us at info@acploads.com for any questions or clarifications.</p>
            </div>
          </AnimatedContent>
        </div>

      </div>
    </div >
  )
}

export default TermsOfService
