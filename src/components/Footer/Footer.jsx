import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("info@acploads.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <footer className="footer sm:footer-horizontal bg-white/5 backdrop-blur-xs text-neutral-content w-full">
      <div className="footer sm:footer-horizontal text-neutral-content items-center lg:py-8 py-4 w-full mx-auto max-auto max-w-[90%] flex lg:flex-row flex-col justify-center gap-5 lg:justify-between">
        <aside className="grid-flow-col items-center">
          <img src="" alt="" />
          <p className="lg:text-lg text-md">{t('footer-desc')}</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <button
            onClick={copyEmailToClipboard}
            className="relative p-2 rounded-full border border-info text-info hover:bg-info hover:text-white transition-colors duration-300"
          >
            <MdOutlineAttachEmail size={24} />
            {copied && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1">
                Copied!
              </span>
            )}
          </button>
          <Link
            to="https://anycappro.com"
            target="_blank"
            className="p-2 rounded-full border border-info text-info hover:bg-info hover:text-white transition-colors duration-300"
          >
            <LiaTelegramPlane size={24} />
          </Link>
          <Link
            to="https://www.instagram.com/acploads/"
            target="_blank"
            className="p-2 rounded-full border border-info text-info hover:bg-info hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            to="https://www.youtube.com/@acploads"
            target="_blank"
            className="p-2 rounded-full border border-info text-info hover:bg-info hover:text-white transition-colors duration-300"
          >
            <FiYoutube size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/acp-loads-155277302/"
            target="_blank"
            className="p-2 rounded-full border border-info text-info hover:bg-info hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn size={24} />
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
