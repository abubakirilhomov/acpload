import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa";
import Sidebar from "../../Sidebar/Sidebar";

const NavMobile = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.getElementById("my-drawer").checked = false;
  }, [location]);

  const closeSidebar = () => {
    document.getElementById("my-drawer").checked = false;
  };

  return (
    <div className="shadow fixed w-full z-50 backdrop-blur-3xl">
      <div className="flex items-center justify-between w-full max-w-[90%] mx-auto py-3">
        <div>
          <Link to="/">
            <img src="/images/acp-logo.png" className="h-9" alt="Logo" />
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <button className="btn btn-info btn-outline hover:text-white px-3 rounded-full">
            {t("btn-input-texts.log-in")}
          </button>

          <label
            htmlFor="my-drawer"
            className="btn btn-info text-white rounded-full drawer-button"
          >
            <FaBars size={18} />
          </label>
        </div>
      </div>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <Sidebar closeSidebar={closeSidebar} />
      </div>
    </div>
  );
};

export default NavMobile;
