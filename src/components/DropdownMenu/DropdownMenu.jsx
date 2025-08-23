import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";

const DropdownMenu = ({ links, title }) => {
  return (
    <div className="dropdown relative">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 flex items-center gap-1 backdrop-blur-3xl bg-white/20 border-none"
      >
        {title} <IoIosArrowDown />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu backdrop-blur-3xl bg-black/50 rounded-box z-50 w-52 p-2 shadow-md md:w-40 sm:w-full border border-white/20"
      >
        {links.map((item, index) => (
          <li key={index} className="py-1">
            <Link to={item?.link} className="block px-2 py-1 hover:bg-gray-200 hover:text-black">
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
