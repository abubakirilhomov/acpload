import React from "react";
import { IoSend, IoCall, IoMail, IoLocation } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="w-full max-w-[90%] mx-auto my-10">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {t("contact-us.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information Section */}
        <motion.div
          className="p-6 bg-white/10 rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            {t("contact-us.contact-info")}
          </h3>
          <div className="mb-10 text-lg">
            <p>{t("contact-us.description")}</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <IoCall className="text-info" />
              <p>
                <strong>{t("contact-us.phone")}:</strong> +1 408-676-5535
              </p>
            </div>
            <div className="flex items-center gap-3">
              <IoMail className="text-info" />
              <p>
                <strong>{t("contact-us.email")}:</strong> info@acploads.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <IoLocation size={20} className="text-info" />
              <p>
                <strong>{t("contact-us.location")}:</strong> 38511 S Hampton Dr,
                Frankford, DE 19945 USA
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="p-6 bg-white/10 rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            {t("contact-us.question-suggestion")}
          </h3>
          <form className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                {t("contact-us.name")}
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 bg-white/20 rounded-lg border border-white/30 focus:outline-none focus:border-info"
                placeholder={t("contact-us.name")}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                {t("contact-us.email-label")}
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-white/20 rounded-lg border border-white/30 focus:outline-none focus:border-info"
                placeholder={t("contact-us.email")}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="question"
              >
                {t("contact-us.question")}
              </label>
              <textarea
                id="question"
                className="w-full p-2 bg-white/20 rounded-lg border border-white/30 focus:outline-none focus:border-info"
                rows="4"
                placeholder={t("contact-us.question")}
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="flex items-center justify-center gap-3 w-full p-2 bg-info text-white rounded-lg hover:bg-info/90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {t("contact-us.send")} <IoSend />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
