import React from "react";
import { Link } from "react-router-dom";

const dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-black text-white font-bold"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4" to="#">
        About
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
  );
};

export default dropdown;
