import React, { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";

const NavDesktop = () => {
  const [theme, setTheme] = useState("light");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Check the device's theme preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  const navLinks = {
    company: [
      { title: "About Us", link: "/our-company/about-us" },
      { title: "Leadership", link: "/our-company/leadership" },
      { title: "Testimonials", link: "/our-company/testimonials-reviews" },
      { title: "Support Center", link: "/our-company/support-center" },
      { title: "Contact Us", link: "/our-company/contact-us" },
    ],
    platform: [
      { title: "How It Works", link: "/platform/how-it-works" },
      { title: "Features", link: "/platform/features" },
      { title: "Live Loadboard", link: "/platform/live-loadboard" },
      { title: "Freight Rate Calculator", link: "/platform/freight-rate-calculator" },
      { title: "Terms of Service", link: "/platform/terms-of-service" },
    ],
    products: [
      { title: "Loadboard", link: "/products/loadboard" },
      { title: "ACP TMS", link: "/products/acp-tms" },
    ],
    solutions: [
      { title: "Carrier Dispatcher", link: "/solutions/carrier-dispatcher" },
      { title: "Broker", link: "/solutions/broker" },
      { title: "Carrier", link: "/solutions/carrier" },
      { title: "Shipper", link: "/solutions/shipper" },
    ],
    resources: [
      { title: "Blog", link: "/resources/freight-logistics-blog" },
      { title: "Partnership & Affiliate", link: "/resources/partnership-affiliate" },
      { title: "Newsletter Subscription", link: "/resources/newsletter-subscription" },
      { title: "Guides", link: "/resources/guides" },
      { title: "Videos", link: "/resources/videos" },
      { title: "FAQs", link: "/resources/faqs" },
    ],
  };

  return (
    <div className="shadow fixed w-full z-50 backdrop-blur-3xl">
      <div className="flex w-full max-w-[90%] mx-auto py-3 items-center justify-between">
        <div>
          <Link to="/">
            <img src="/images/acp-logo.png" className="h-12" alt="ACP Logo" />
          </Link>
        </div>
        <div className="flex gap-4">
          <DropdownMenu title="Our Company" links={navLinks.company} />
          <DropdownMenu title="Platform" links={navLinks.platform} />
          <DropdownMenu title="Products" links={navLinks.products} />
          <DropdownMenu title="Solutions" links={navLinks.solutions} />
          <DropdownMenu title="Resources" links={navLinks.resources} />
        </div>
        <div className="flex gap-4 items-center">
          <button className="btn btn-info btn-outline hover:text-white px-5 rounded-full">
            {t("log-in")}
          </button>
          <button className="btn btn-info border-info hover:text-white px-5 rounded-full">
            {t("sign-up")}
          </button>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn rounded-full btn-info p-3">
              <GrLanguage size={18} color="white" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
            >
              {["en", "ru", "es"].map((lng) => (
                <li key={lng}>
                  <button onClick={() => changeLanguage(lng)}>
                    {lng === "en" ? "English" : lng === "ru" ? "Русский" : "Español"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
