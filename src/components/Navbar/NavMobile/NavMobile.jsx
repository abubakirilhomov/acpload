import React, { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
const NavMobile = () => {
  const [theme, setTheme] = useState("light");

  // Check the device's theme preference
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  return (
    <div className="w-full max-w-[90%] mx-auto py-3">
      <div className="flex items-center justify-between">
        <div>
          {theme === "dark" ? (
            <img src="images/acp-logo.png" className="h-12" alt="Dark Logo" />
          ) : (
            <img
              src="images/acp-dark-logo.png"
              className="h-9"
              alt="Light Logo"
            />
          )}
        </div>
        <div className="flex gap-2 items-center">
          <button className="btn btn-info btn-outline hover:text-white px-3 rounded-full">
            Log In
          </button>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button " className="btn btn rounded-full btn-info">
            <GrLanguage size={16} color="white"/>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
