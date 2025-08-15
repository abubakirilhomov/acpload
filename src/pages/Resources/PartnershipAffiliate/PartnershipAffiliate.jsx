import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionContainer from '../../../components/SectionContainer/SectionContainer';
import CustomText from '../../../components/CustomText/CustomText';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaHandshake,
  FaRocket,
  FaCogs,
  FaHeadset,
  FaCheck,
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const PartnershipAffiliate = () => {
  const { t } = useTranslation();

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.3 });

  const partnerBenefits = [
    {
      title: t('partnership-and-affiliate.why-partner.1.title'),
      description: t('partnership-and-affiliate.why-partner.1.description'),
      icon: FaHandshake,
    },
    {
      title: t('partnership-and-affiliate.why-partner.2.title'),
      description: t('partnership-and-affiliate.why-partner.2.description'),
      icon: FaRocket,
    },
    {
      title: t('partnership-and-affiliate.why-partner.3.title'),
      description: t('partnership-and-affiliate.why-partner.3.description'),
      icon: FaCogs,
    },
    {
      title: t('partnership-and-affiliate.why-partner.4.title'),
      description: t('partnership-and-affiliate.why-partner.4.description'),
      icon: FaHeadset,
    },
  ];

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  return (
    <div>
      <SectionContainer>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-10"
        >
          <div className="w-full lg:w-[65%] h-64 sm:h-80 p-4 sm:p-6 bg-[#4c7397] rounded-2xl sm:rounded-4xl flex flex-col justify-center">
            <CustomText type="title">{t('partnership-and-affiliate.title')}</CustomText>
            <CustomText type="heading" className="mt-2">{t('partnership-and-affiliate.sub-title-1')}</CustomText>
            <CustomText type="text" className="mt-4 sm:mt-6">
              {t('partnership-and-affiliate.description-1')}
            </CustomText>

          </div>
          <div className="w-full lg:w-[35%] mt-6 lg:mt-0 lg:ml-6">
            <img
              src="/images/partnership-showcase-1.jpeg"
              alt={t('partnership-and-affiliate.title')}
              className="w-full h-64 sm:h-80 rounded-2xl sm:rounded-4xl shadow-lg object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col lg:flex-row items-start justify-between gap-6"
        >
          <div className="w-full lg:w-[35%] mb-6 lg:mt-0 lg:mr-6">
            <div className="w-full h-64 sm:h-80 p-4 sm:p-6 bg-info rounded-2xl sm:rounded-4xl flex flex-col justify-center">
              <CustomText type="text" className="mb-5">
              {t('partnership-and-affiliate.description-2')}
            </CustomText>
              <CustomText type="text">{t('partnership-and-affiliate.sub-title-2')}</CustomText>
            </div>
          </div>
          <div className="w-full lg:w-[65%]">
            <img
              src="/images/partnership-showcase-2.jpeg"
              alt={t('partnership-and-affiliate.cards.1.title')}
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
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <CustomText type="subtitle" className="mb-4 sm:mb-10 text-white">
            {t('partnership-and-affiliate.why-partner.title')}
          </CustomText>
          <div className="w-full mx-auto flex flex-col lg:flex-col justify-center gap-6 shadow-lg">
            {partnerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
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
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex-1 p-8"
          >
            <CustomText type="subtitle" className="text-white mb-4">
              {t('partnership-and-affiliate.why-partner.cards.1.title')}
            </CustomText>
            <CustomText type="heading" className="text-white font-normal mb-6">
              {t('partnership-and-affiliate.why-partner.cards.1.sub-title')}
            </CustomText>
            <CustomText type="text" className="text-white/80 mb-6 leading-relaxed">
              {t('partnership-and-affiliate.why-partner.cards.1.description')}
            </CustomText>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-center text-white/80">
                <FaCheck className="text-info mr-3" />
                <span>{t('partnership-and-affiliate.why-partner.cards.1.text-1')}</span>
              </li>
              <li className="flex items-center text-white/80">
                <FaCheck className="text-info mr-3" />
                <span>{t('partnership-and-affiliate.why-partner.cards.1.text-2')}</span>
              </li>
              <li className="flex items-center text-white/80">
                <FaCheck className="text-info mr-3" />
                <span>{t('partnership-and-affiliate.why-partner.cards.1.text-3')}</span>
              </li>
              <li className="flex items-center text-white/80">
                <FaCheck className="text-info mr-3" />
                <span>{t('partnership-and-affiliate.why-partner.cards.1.text-4')}</span>
              </li>
            </ul>
            <div className="flex items-center mb-8">
              <CustomText type="text" className="text-green-500 font-medium">
                {t('partnership-and-affiliate.why-partner.cards.1.footer-text')}
              </CustomText>
            </div>
            <button className="btn rounded-full border-none bg-[#6b99c7] text-white hover:bg-[#5a87b6] transition-colors">
              {t('btn-input-texts.read-more')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="flex-1 p-8 rounded-4xl shadow-lg bg-[#4c7397]"
          >
            <CustomText type="subtitle" className="text-white mb-4">
              {t('partnership-and-affiliate.why-partner.cards.2.title')}
            </CustomText>
            <CustomText type="heading" className="text-white font-normal mb-6">
              {t('partnership-and-affiliate.why-partner.cards.2.sub-title')}
            </CustomText>
            <CustomText type="text" className="text-white/80 mb-6 leading-relaxed">
              {t('partnership-and-affiliate.why-partner.cards.2.label')}
            </CustomText>
            <ul className="list-disc list-inside space-y-2 mb-8 text-white/80 marker:text-info">
              <li>{t('partnership-and-affiliate.why-partner.cards.2.text-1')}</li>
              <li>{t('partnership-and-affiliate.why-partner.cards.2.text-2')}</li>
              <li>{t('partnership-and-affiliate.why-partner.cards.2.text-3')}</li>
              <li>{t('partnership-and-affiliate.why-partner.cards.2.text-4')}</li>
              <li>{t('partnership-and-affiliate.why-partner.cards.2.text-5')}</li>
            </ul>
            <CustomText type="text" className="text-white/80 mb-8 leading-relaxed">
              {t('partnership-and-affiliate.why-partner.cards.2.description')}
            </CustomText>
            <button className="btn rounded-full border-none bg-[#6b99c7] text-white hover:bg-[#5a87b6] transition-colors">
              {t('btn-input-texts.read-more', { defaultValue: 'Read More' })}
            </button>
          </motion.div>
        </motion.div>
      </SectionContainer>

      <SectionContainer>
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: 50 }}
          animate={inView4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row items-start justify-between gap-6"
        >
          <div className="w-full lg:w-[50%] h-[400px] sm:h-[500px] p-4 sm:p-6 bg-[#4c7397] rounded-2xl sm:rounded-4xl flex flex-col justify-center">
            <CustomText type="subtitle">{t('partnership-and-affiliate.why-partner.cards.3.title')}</CustomText>
            <CustomText type="text" className="mt-4 sm:mt-6">
              {t('partnership-and-affiliate.why-partner.cards.3.description')}
            </CustomText>
            <ul className="list-none mt-4 text-white/80">
              <li className="flex items-center">{t('partnership-and-affiliate.why-partner.cards.3.sub-description')}</li>
            </ul>
            <CustomText type="text" className="mt-auto text-white/70 text-end">
              {t('partnership-and-affiliate.why-partner.cards.3.footer-text')}
            </CustomText>
          </div>
          <div className="w-full lg:w-[50%] h-[400px] sm:h-[500px] mt-6 lg:mt-0 lg:ml-6">
            <img
              src="/images/partnership-section.jpeg"
              alt={t('partnership-and-affiliate.cards.3.title')}
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
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full bg-[#2a3447] p-6 rounded-3xl"
        >
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-400 mb-2">
                {t('btn-input-texts.first-name', { defaultValue: 'First Name' })}
              </label>
              <input
                type="text"
                placeholder={t('btn-input-texts.enter-first-name', { defaultValue: 'Enter your First Name' })}
                className="w-full p-3 bg-gray-600 text-white rounded-2xl focus:outline-none"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-400 mb-2">
                {t('btn-input-texts.last-name', { defaultValue: 'Last Name' })}
              </label>
              <input
                type="text"
                placeholder={t('btn-input-texts.enter-last-name', { defaultValue: 'Enter your Last Name' })}
                className="w-full p-3 bg-gray-600 text-white rounded-2xl focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2">
              {t('btn-input-texts.email', { defaultValue: 'Email' })}
            </label>
            <input
              type="email"
              placeholder={t('btn-input-texts.enter-email', { defaultValue: 'Enter a valid email address' })}
              className="w-full p-3 bg-gray-600 text-white rounded-2xl focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2">
              {t('btn-input-texts.msg', { defaultValue: 'Message' })}
            </label>
            <textarea
              placeholder={t('btn-input-texts.enter-msg', { defaultValue: 'Enter your message' })}
              className="w-full p-3 bg-gray-500 text-white rounded-2xl focus:outline-none h-32"
            ></textarea>
          </div>
          <button type="submit" className="w-full btn btn-info text-white px-6 py-5 rounded-2xl transition-colors">
            {t('btn-input-texts.submit', { defaultValue: 'Submit' })}
          </button>
        </motion.form>
        <motion.div
          ref={ref5}
          initial={{ opacity: 0, y: 50 }}
          animate={inView5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 flex flex-col md:flex-row justify-between items-start gap-10 text-white"
        >
          <div>
            <CustomText type="heading" className="font-semibold mb-4">
              {t('partnership-and-affiliate.why-partner.get-started.title')}
            </CustomText>
            <CustomText type="text" className="text-white/70">
              {t('partnership-and-affiliate.why-partner.get-started.description')}
            </CustomText>
          </div>
          <div>
            <CustomText type="text" className="font-medium mb-3">
              {t('partnership-and-affiliate.why-partner.get-started.question-text')}
            </CustomText>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CustomText type="text" className="text-white/70">
                  {t('partnership-and-affiliate.why-partner.get-started.1')}
                </CustomText>
              </li>
              <li className="flex items-start gap-2">
                <CustomText type="text" className="text-white/70">
                  {t('partnership-and-affiliate.why-partner.get-started.2')}
                </CustomText>
              </li>
              <li className="flex items-start gap-2">
                <CustomText type="text" className="text-white/70">
                  {t('partnership-and-affiliate.why-partner.get-started.3')}
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