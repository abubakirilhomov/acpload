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

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  const navLinks = {
    platform: [
      { title: t("navfooter.how-it-works"), link: "/platform/how-it-works" },
      { title: t("navfooter.features"), link: "/platform/features" },
      {
        title: t("navfooter.trucker-calculator"),
        link: "/platform/trucker-calculator",
      },
      {
        title: t("navfooter.freight-rate-calculator"),
        link: "/platform/freight-rate-calculator",
      },
      {
        title: t("navfooter.terms-and-conditions"),
        link: "/platform/terms-of-service",
      },
    ],
    company: [
      { title: t("navfooter.about-us"), link: "/our-company/about-us" },
      { title: t("navfooter.leadership"), link: "/our-company/leadership" },
      {
        title: t("navfooter.testimonials-and-reviews"),
        link: "/our-company/testimonials-reviews",
      },
      {
        title: t("navfooter.support-center"),
        link: "/our-company/support-center",
      },
      { title: t("navfooter.contact-us"), link: "/our-company/contact-us" },
    ],
    products: [
      { title: t("navfooter.loadboard"), link: "/products/loadboard" },
      { title: t("navfooter.acp-tms"), link: "/products/acp-tms" },
    ],
    solutions: [
      {
        title: t("navfooter.carrier-dispatcher"),
        link: "/solutions/carrier-dispatcher",
      },
      { title: t("navfooter.broker"), link: "/solutions/broker" },
      { title: t("navfooter.carrier"), link: "/solutions/carrier" },
      { title: t("navfooter.shipper"), link: "/solutions/shipper" },
    ],
    resources: [
      {
        title: t("navfooter.freight-and-logistics-blog"),
        link: "/resources/freight-logistics-blog",
      },
      {
        title: t("navfooter.partnership-and-affiliate"),
        link: "/resources/partnership-affiliate",
      },
      {
        title: t("navfooter.newsletter-subscription"),
        link: "/resources/newsletter-subscription",
      },
      { title: t("navfooter.guides-and-videos"), link: "/resources/guides" },
      { title: t("navfooter.faqs"), link: "/resources/faqs" },
    ],
  };

  // RU bo‘lsa qisqa label
  const isRU = (i18n.language || "").startsWith("ru");
  const loginLabel = isRU ? "Вход" : t("btn-input-texts.log-in");
  const signupLabel = isRU ? "Рег." : t("btn-input-texts.sign-up");

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
            title={t("navfooter.platform")}
            links={navLinks.platform}
          />
          <DropdownMenu
            title={t("navfooter.products")}
            links={navLinks.products}
          />
          <DropdownMenu
            title={t("navfooter.solutions")}
            links={navLinks.solutions}
          />
          <DropdownMenu
            title={t("navfooter.resources")}
            links={navLinks.resources}
          />
          <DropdownMenu
            title={t("navfooter.our-company")}
            links={navLinks.company}
          />
        </div>
        <div className="flex gap-4 items-center">
          <button className="btn btn-info btn-outline hover:text-white px-5 rounded-full">
            {loginLabel}
          </button>
          <button className="btn btn-info border-info hover:text-white px-5 rounded-full">
            {signupLabel}
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
