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
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  const navLinks = {
    company: [
      { title: t("nav.company.aboutUs"), link: "/our-company/about-us" },
      { title: t("nav.company.leadership"), link: "/our-company/leadership" },
      {
        title: t("nav.company.testimonials"),
        link: "/our-company/testimonials-reviews",
      },
      {
        title: t("nav.company.supportCenter"),
        link: "/our-company/support-center",
      },
      { title: t("nav.company.contactUs"), link: "/our-company/contact-us" },
    ],
    platform: [
      { title: t("nav.platform.howItWorks"), link: "/platform/how-it-works" },
      { title: t("nav.platform.features"), link: "/platform/features" },
      {
        title: t("nav.platform.liveLoadboard"),
        link: "/platform/live-loadboard",
      },
      {
        title: t("nav.platform.freightRateCalculator"),
        link: "/platform/freight-rate-calculator",
      },
      {
        title: t("nav.platform.termsOfService"),
        link: "/platform/terms-of-service",
      },
    ],
    products: [
      { title: t("nav.products.loadboard"), link: "/products/loadboard" },
      { title: t("nav.products.acpTms"), link: "/products/acp-tms" },
    ],
    solutions: [
      {
        title: t("nav.solutions.carrierDispatcher"),
        link: "/solutions/carrier-dispatcher",
      },
      { title: t("nav.solutions.broker"), link: "/solutions/broker" },
      { title: t("nav.solutions.carrier"), link: "/solutions/carrier" },
      { title: t("nav.solutions.shipper"), link: "/solutions/shipper" },
    ],
    resources: [
      {
        title: t("nav.resources.blog"),
        link: "/resources/freight-logistics-blog",
      },
      {
        title: t("nav.resources.partnership"),
        link: "/resources/partnership-affiliate",
      },
      {
        title: t("nav.resources.newsletter"),
        link: "/resources/newsletter-subscription",
      },
      { title: t("nav.resources.guides"), link: "/resources/guides" },
      { title: t("nav.resources.videos"), link: "/resources/videos" },
      { title: t("nav.resources.faqs"), link: "/resources/faqs" },
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
          <DropdownMenu
            title={t("nav.company.title")}
            links={navLinks.company}
          />
          <DropdownMenu
            title={t("nav.platform.title")}
            links={navLinks.platform}
          />
          <DropdownMenu
            title={t("nav.products.title")}
            links={navLinks.products}
          />
          <DropdownMenu
            title={t("nav.solutions.title")}
            links={navLinks.solutions}
          />
          <DropdownMenu
            title={t("nav.resources.title")}
            links={navLinks.resources}
          />
        </div>
        <div className="flex gap-4 items-center">
          <button className="btn btn-info btn-outline hover:text-white px-5 rounded-full">
            {t("log-in")}
          </button>
          <button className="btn btn-info border-info hover:text-white px-5 rounded-full">
            {t("sign-up")}
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn rounded-full btn-info p-3"
            >
              <GrLanguage size={18} color="white" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
            >
              {["en", "ru", "es"].map((lng) => (
                <li key={lng}>
                  <button onClick={() => changeLanguage(lng)}>
                    {lng === "en"
                      ? "English"
                      : lng === "ru"
                      ? "Русский"
                      : "Español"}
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
