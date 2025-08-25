import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CustomText from "../../../../components/CustomText/CustomText";
import { useTranslation } from "react-i18next";

const GetStarted = () => {
  const { t } = useTranslation();

  // reference for the container
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // margin = trigger a bit earlier

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-start max-w-3xl mx-auto py-15 md:px-0 px-4"
    >
      <CustomText type="heading">
        <h2 className="mb-10">{t("trucker-calculator.get-started.title")}</h2>
      </CustomText>
      <CustomText type="text">
        <p className="mb-5">{t("trucker-calculator.get-started.description")}</p>
      </CustomText>
      <button className="bg-brand text-white font-medium px-6 py-2 rounded-sm">
        {t("btn-input-texts.get-access-now")}
      </button>
    </motion.div>
  );
};

export default GetStarted;
