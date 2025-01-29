import React, { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
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

  return (
    <div className=" shadow fixed w-full z-50 backdrop-blur-3xl">
      <div className="flex w-full max-w-[90%] mx-auto py-3 items-center justify-between">
        <div>
            <img src="images/acp-logo.png" className="h-14" alt="Dark Logo" />
        </div>
        <div className="flex gap-4 items-center">
          <button className="btn btn-info btn-outline hover:text-white  px-7 rounded-full">
          {t("log-in")}
          </button>
          <button className="btn btn-info border-info hover:text-white  px-7 rounded-full">
          {t("sign-up")}
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button "
              className="btn rounded-full btn-info"
            >
              <GrLanguage size={18} color="white" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li><button onClick={() => changeLanguage("en")}>English</button></li>
              <li><button onClick={() => changeLanguage("ru")}>Русский</button></li>
              <li><button onClick={() => changeLanguage("es")}>Español</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
