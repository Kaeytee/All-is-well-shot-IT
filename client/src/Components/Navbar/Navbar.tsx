import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../Assets/logo.PNG";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center  py-4 uppercase text-lg w-4/5 mx-auto">
      <img src={Logo} alt="All is well Logo" className="w-1/5" />
      <ul className="flex justify-between w-1/2 mx-auto">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "active hover:text-gray-500 font-semibold"
                : "hover:text-gray-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "active hover:text-gray-500 font-semibold"
                : "hover:text-gray-500"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "active hover:text-gray-500 font-semibold"
                : "hover:text-gray-500"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive
                ? "active hover:text-gray-500 font-semibold"
                : "hover:text-gray-500"
            }
          >
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "active hover:text-gray-500 font-semibold"
                : "hover:text-gray-500"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ratecard"
            className={({ isActive }) =>
              isActive
                ? "active hover:text-gray-500 font-semibold"
                : "hover:text-gray-500"
            }
          >
            Ratecard
          </NavLink>
        </li>
      </ul>
      <NavLink
        to="/book-us"
        className="bg-black text-white hover:bg-gray-500 px-12 py-3 rounded-lg active:bg-gray-700"
      >
        Book Us
      </NavLink>
    </div>
  );
}
