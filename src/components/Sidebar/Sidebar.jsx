import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";

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

const Sidebar = ({ closeSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={closeSidebar}></label>
      <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col">
        {/* ACP Logo on the left */}
        <div className="flex items-center justify-between w-full mb-4">
          <Link to="/">
            <img src="/images/acp-logo.png" className="h-9" alt="Logo" />
          </Link>
          {/* Language Switcher on the right */}
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
        </div>

        {/* Navigation Menu */}
        <ul className="flex-grow">
          {Object.entries(navLinks).map(([category, links], index) => (
            <li key={index} className="mb-1">
              <div 
                className="flex items-center justify-between cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-300"
                onClick={() => toggleSubmenu(index)}
              >
                <span className="w-full">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                {links.length > 0 && (
                  <FaChevronDown className={`transition-transform ${openMenu === index ? "rotate-180" : ""}`} />
                )}
              </div>
              {links.length > 0 && (
                <ul
                  className={`overflow-hidden transition-all ${
                    openMenu === index ? "max-h-52 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {links.map((link, subIndex) => (
                    <li key={subIndex} className="ml-4">
                      <Link
                        to={link.link}
                        className="block py-2 px-4 rounded-lg hover:bg-gray-300 hover:text-black"
                        onClick={closeSidebar}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;