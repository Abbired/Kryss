import React from "react";
import { Link } from "react-router-dom";
import Menu from "./helpers/Menu";
const dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center pt-5 bg-black text-white font-bold"
          : "hidden"
      }
      onClick={toggle}
    >
      {Menu.map((id) => (
        <Link to={id.link} className="p-4">
          {id.name}
        </Link>
      ))}
    </div>
  );
};

export default dropdown;
