import React from "react";
import { IoSend, IoCall, IoMail, IoLocation } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[90%] mx-auto my-10 px-5">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white font-serif">
        {t("contact-us.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white/10 rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            {t("contact-us.contact-info")}
          </h3>
          <div className="mb-10 text-lg ">
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
              <IoLocation className="text-info" />
              <p>
                <strong>{t("contact-us.location")}:</strong> 38511 S Hampton Dr,
                Frankford, DE 19945 USA
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/10 rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            {t("contact-us.question-suggestion")}
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                {t("contact-us.name")}
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 bg-white/20 rounded-lg border border-white/30 focus:outline-none focus:border-info"
                placeholder={t("contact-us.name")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                {t("contact-us.email-label")}
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-white/20 rounded-lg border border-white/30 focus:outline-none focus:border-info"
                placeholder={t("contact-us.email")}
              />
            </div>
            <div>
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
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full p-2 bg-info text-white rounded-lg hover:bg-info/90 transition-colors duration-300"
            >
              {t("contact-us.send")} <IoSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
