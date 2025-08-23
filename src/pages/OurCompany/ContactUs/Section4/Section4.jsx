import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  {
    label: "Email",
    icon: <FaEnvelope className="text-white text-2xl" />,
    href: "mailto:info@acploads.com",
    bgColor: "bg-blue-500",
  },
  {
    label: "Telegram",
    icon: <FaTelegramPlane className="text-white text-2xl" />,
    href: "https://t.me/your_channel",
    bgColor: "bg-cyan-500",
  },
  {
    label: "Instagram",
    icon: <FaInstagram className="text-white text-2xl" />,
    href: "https://instagram.com/your_account",
    bgColor: "bg-pink-500",
  },
  {
    label: "Youtube",
    icon: <FaYoutube className="text-white text-2xl" />,
    href: "https://youtube.com/your_channel",
    bgColor: "bg-red-600",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedinIn className="text-white text-2xl" />,
    href: "https://linkedin.com/company/your_company",
    bgColor: "bg-blue-700",
  },
];

const ConnectSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#14293d] py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
          {t("contact-us.connect-with-us.title")}
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto text-base md:text-lg">
          {t("contact-us.connect-with-us.description")}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-3 transition-transform hover:scale-105"
            >
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full shadow-md ${item?.bgColor}`}
              >
                {item?.icon}
              </div>
              <span className="text-blue-300 font-medium">{item?.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
