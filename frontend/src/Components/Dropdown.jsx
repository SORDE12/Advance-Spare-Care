import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { parts, NavNewArrival } from "./NavbarData";
import { NavMenSlider } from "./NavSlider";
import "./navbar.css"

export const PartsDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  
  return (
    <div className="nav-men-main-con">
      <div
        id="MenSubmenu"
        className={dropdown ? "Men-Submenu-Open" : "Men-Submenu-Close"}
        onClick={() => setDropdown(!dropdown)}
      >
        {parts.map((ele) => (
          <p id={ele.id === 1 ? "Item-Heading" : "notHeading"} key={ele.id}>
            {ele.title}
          </p>
        ))}
      </div>
      <div className="nav-men-slider-con">
        <NavMenSlider />
      </div>
    </div>
  );
};



export const AccountDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div 
     style={{color:"black"}}
      id="Account-Submenu"
      className={dropdown ? "Account-Submenu-Open" : "Account-Submenu-Close"}
      onClick={() => setDropdown(!dropdown)}
    >
      <Link to="/signin">signin</Link>
      <Link to="/register">Register</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};
