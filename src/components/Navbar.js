import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-black text-white relative shadow-sm font-mono"
      role="navigation"
    >
      <Link
        to="#"
        className="pl-12 pt-10 font-bold text-4xl text-center"
        style={{ fontFamily: "Corinthia" }}
      >
        KRYSS
        <br /> Motorcycles
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden font-bold text-xl">
        <Link className="p-4" to="#">
          World of Kryss
        </Link>
        <Link className="p-4" to="#">
          Models
        </Link>
        <Link className="p-4" to="#">
          Technology
        </Link>
        <Link className="p-4" to="#">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
