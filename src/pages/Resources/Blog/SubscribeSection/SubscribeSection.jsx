import React from "react";
import CustomText from "../../../../components/CustomText/CustomText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const SubscribeSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#3E4F5F] rounded-4xl py-12 px-6 md:px-16 max-w-[1200px] mx-auto my-16"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white">
          <CustomText type="subtitle" className="text-white mb-2">
            {t("freight-and-logistics-blog.subscribe.text")}
          </CustomText>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[360px]">
          <input
            type="email"
            placeholder={t(
              "freight-and-logistics-blog.subscribe.subscribe-form.placeholder"
            )}
            className="rounded-full px-6 py-3 w-full bg-[#3E4F5F] border border-white text-white placeholder-white/70 focus:outline-none"
          />
          <button className="btn bg-brand border-0 outline-0 hover:bg-[#3082b8] text-white px-6 py-3 rounded-full w-full transition-all duration-300">
            {t("freight-and-logistics-blog.subscribe.subscribe-form.button")}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SubscribeSection;
