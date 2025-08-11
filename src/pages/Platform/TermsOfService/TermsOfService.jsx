import React from 'react'
import { useTranslation } from 'react-i18next'
import AnimatedContent from '../../../components/ReactBits/AnimatedContent'
import { FaUser } from "react-icons/fa";
import { FaUsersRectangle, FaComputer, FaUserGear } from "react-icons/fa6";
import { RiFolderForbidFill, RiPictureInPictureExitFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TermsOfService = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <FaUser className="text-5xl mb-2" />,
      title: t('terms-and-conditions.why-are-terms-important.card-1.title'),
      description: t('terms-and-conditions.why-are-terms-important.card-1.description'),
    },
    {
      icon: <FaUsersRectangle className="text-5xl mb-2" />,
      title: t('terms-and-conditions.why-are-terms-important.card-2.title'),
      description: t('terms-and-conditions.why-are-terms-important.card-2.description'),
    },
    {
      icon: <FaComputer className="text-5xl mb-2" />,
      title: t('terms-and-conditions.why-are-terms-important.card-3.title'),
      description: t('terms-and-conditions.why-are-terms-important.card-3.description'),
    },
    {
      icon: <FaUserGear className="text-5xl mb-2" />,
      title: t('terms-and-conditions.why-are-terms-important.card-4.title'),
      description: t('terms-and-conditions.why-are-terms-important.card-4.description'),
    },
    {
      icon: <RiFolderForbidFill className="text-5xl mb-2" />,
      title: t('terms-and-conditions.why-are-terms-important.card-5.title'),
      description: t('terms-and-conditions.why-are-terms-important.card-5.description'),
    },
    {
      icon: <RiPictureInPictureExitFill className="text-5xl mb-2" />,
      title: t('terms-and-conditions.why-are-terms-important.card-6.title'),
      description: t('terms-and-conditions.why-are-terms-important.card-6.description'),
    },
  ];

  return (
    <div>
      <div className="">
        {/* Header */}
        <div
          className="flex flex-col items-start justify-center min-h-screen bg-cover bg-center text-white text-start p-8 relative"
          style={{ backgroundImage: "url('/images/images-Pica.png')" }}
        >
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
              <p className="w-2xl text-6xl font-bold mb-6">
                {t('terms-and-conditions.title')}
              </p>
              <p className="w-2xl text-lg mb-4">
                {t('terms-and-conditions.description')}
              </p>
            </div>
          </AnimatedContent>
        </div>

        {/* Why Important */}
        <div className="relative ">
          <div className="flex flex-col items-center justify-center bg-gray-600 text-white text-start p-8">
            <p className="text-4xl font-bold text-center my-8">
              {t('terms-and-conditions.why-are-terms-important.title')}
            </p>
            <p className="text-lg flex justify-center items-center text-center max-w-[70%] italic mb-30">
              {t('terms-and-conditions.why-are-terms-important.description')}
            </p>
          </div>

          {/* Cards */}
          <div className="bg-gray-800 text-white p-8">
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

        {/* Agreement */}
        <div
          className="flex flex-col items-start justify-center min-h-screen bg-cover bg-center text-white text-start p-8 relative"
          style={{ backgroundImage: "url('/images/wites-Pica.png')" }}
        >
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
              <p className="w-2xl text-6xl font-bold mb-6">
                {t('terms-and-conditions.your-agreement.title')}
              </p>
              <p className="w-2xl text-lg mb-4">
                {t('terms-and-conditions.your-agreement.description')}
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                {t('terms-and-conditions.read-full', 'READ THE FULL TERMS AND CONDITIONS')}
              </button>
              <p className='text-lg'>
                {t('terms-and-conditions.your-agreement.sub-text')}
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
  