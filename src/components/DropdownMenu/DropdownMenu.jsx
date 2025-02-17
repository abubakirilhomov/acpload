    import React from 'react'
    import { Link } from 'react-router-dom'
    import { IoIosArrowDown } from "react-icons/io";

    const DropdownMenu = ({links, title}) => {
    return (

        <div className="dropdown relative">
            <div
            tabIndex={0}
            role="button"
            className="btn m-1 flex items-center gap-1"
            >
            {title} <IoIosArrowDown />
            </div>
            <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-md md:w-40 sm:w-full"
            >
            {links.map((item, index) => (
                <li key={index} className="py-1">
                <Link to={item.link} className="block px-2 py-1 hover:bg-gray-200">
                    {item.title}
                </Link>
                </li>
            ))}
            </ul>
        </div>

    )
    }

    export default DropdownMenu
