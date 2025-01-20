import React from "react";
import { Link } from "react-router-dom";

const NavDesktop = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal space-x-4 px-1">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDesktop;
