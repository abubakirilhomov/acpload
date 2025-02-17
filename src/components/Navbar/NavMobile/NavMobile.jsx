import React, { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa";
import Sidebar from "../../Sidebar/Sidebar";

const NavMobile = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  // Close the drawer when the location (route) changes
  useEffect(() => {
    document.getElementById("my-drawer").checked = false;
  }, [location]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const closeSidebar = () => {
    document.getElementById("my-drawer").checked = false;
  };

  return (
    <div className="shadow fixed w-full z-50 backdrop-blur-3xl">
      <div className="flex items-center justify-between w-full max-w-[90%] mx-auto py-3">
        <div>
          <Link to="/">
            <img src="images/acp-logo.png" className="h-9" alt="Logo" />
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <button className="btn btn-info btn-outline hover:text-white px-3 rounded-full">
            {t("log-in")}
          </button>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn rounded-full btn-info">
              <GrLanguage size={16} color="white" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
              <li><button onClick={() => changeLanguage("en")}>English</button></li>
              <li><button onClick={() => changeLanguage("ru")}>Русский</button></li>
              <li><button onClick={() => changeLanguage("es")}>Español</button></li>
            </ul>
          </div>

          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            <FaBars size={20} />
          </label>
        </div>
      </div>

      {/* Drawer Sidebar */}
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <Sidebar closeSidebar={closeSidebar} /> {/* Use Sidebar Component */}
      </div>
    </div>
  );
};

export default NavMobile;
