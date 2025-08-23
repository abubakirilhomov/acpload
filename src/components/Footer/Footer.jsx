import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAttachEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("info@acploads.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-base-300 text-base-content py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div>
              <img src="/images/acp-logo.png" alt="ACP Loads" className="h-12" />
            </div>
            <p className="text-sm opacity-80">
              {t('navfooter.footer-info-text')}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <MdOutlinePhone className="text-lg" />
                <span>{t('navfooter.phone')}: +1 408-676-5535</span>
              </div>
              <div className="flex items-center gap-2 relative">
                <button
                  onClick={copyEmailToClipboard}
                  className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
                >
                  <MdOutlineAttachEmail className="text-lg" />
                  <span>{t('navfooter.email')}: info@acploads.com</span>
                </button>
                {copied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-base-200 text-base-content text-xs rounded px-2 py-1">
                    Copied!
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineLocationOn className="text-lg" />
                <span>{t('navfooter.location')}: 38511 S Hampton Dr, Frankford, DE 19945 USA</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base mb-2 text-[#3f96d1]">{t('navfooter.platform')}</h3>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.how-it-works')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.features')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.loadboard')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.trucker-calculator')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.freight-rate-calculator')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.terms-and-conditions')}
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base mb-2 text-[#3f96d1]">{t('navfooter.products')}</h3>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.loadboard')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.acp-tms')}
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base mb-2 text-[#3f96d1]">{t('navfooter.solutions')}</h3>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.carrier-dispatcher')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.broker')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.carrier')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.shipper')}
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base mb-2 text-[#3f96d1]">{t('navfooter.resources')}</h3>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.freight-and-logistics-blog')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.partnership-and-affiliate')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.newsletter-subscription')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.guides-and-videos')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.faqs')}
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base mb-2 text-[#3f96d1]">{t('navfooter.our-company')}</h3>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.about-us')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.leadership')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.testimonials-and-reviews')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.support-center')}
              </Link>
              <Link to="#" className="text-sm hover:text-[#3f96d1] text-[#3f96d1]">
                {t('navfooter.contact-us')}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline normal-case justify-start gap-2 text-base-content hover:text-base-content"
              >
                <IoLogoApple className="text-xl" />
                <div className="flex flex-col items-start text-xs">
                  <span className="text-xs">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </div>
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline normal-case justify-start gap-2 text-base-content hover:text-base-content"
              >
                <FaGooglePlay className="text-xl" />
                <div className="flex flex-col items-start text-xs">
                  <span className="text-xs">GET IT ON</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </a>
            </div>
            <div className="flex flex-col items-start gap-1 mt-2">
              <span className="text-xs">{t('navfooter.footer-review-us-on')}</span>
              <div className="flex items-center gap-1">
                <img src="/images/trustpilot.png" alt="Trustpilot" className="h-6" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current text-success" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-70">{t('navfooter.footer-sub-text')} 2022</p>
          <div className="flex gap-2">
            <button
              onClick={copyEmailToClipboard}
              className="relative p-1 rounded-full border border-[#3f96d1] text-[#3f96d1] hover:bg-[#3f96d1] hover:text-white transition-colors duration-300"
            >
              <MdOutlineAttachEmail size={18} />
              {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1">
                  Copied!
                </span>
              )}
            </button>
            <Link
              to="https://anycappro.com"
              target="_blank"
              className="p-1 rounded-full border border-[#3f96d1] text-[#3f96d1] hover:bg-[#3f96d1] hover:text-white transition-colors duration-300"
            >
              <LiaTelegramPlane size={18} />
            </Link>
            <Link
              to="https://www.instagram.com/acploads/"
              target="_blank"
              className="p-1 rounded-full border border-[#3f96d1] text-[#3f96d1] hover:bg-[#3f96d1] hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              to="https://www.youtube.com/@acploads"
              target="_blank"
              className="p-1 rounded-full border border-[#3f96d1] text-[#3f96d1] hover:bg-[#3f96d1] hover:text-white transition-colors duration-300"
            >
              <FiYoutube size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/acp-loads-155277302/"
              target="_blank"
              className="p-1 rounded-full border border-[#3f96d1] text-[#3f96d1] hover:bg-[#3f96d1] hover:text-white transition-colors duration-300"
            >
              <FaLinkedinIn size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;