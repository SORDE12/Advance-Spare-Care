import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { parts, NavNewArrival } from "./NavbarData";
import { NavMenSlider } from "./NavSlider";
import "./navbar.css";

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
      style={{ color: "black" }}
      id="Account-Submenu"
      className={dropdown ? "Account-Submenu-Open" : "Account-Submenu-Close"}
      onClick={() => setDropdown(!dropdown)}
    >
      <Link to="/user" style={{fontWeight:"bold"}}>Account</Link>

      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link style={{fontWeight:"bold"}} to="/favorites">Quick Links</Link>
      <Link> Coupons & Deals</Link>
      <Link>Gift Card Balance Check</Link>
      <Link>Store Locator</Link>
      <Link>Videos</Link>
      <Link>Order Lookup</Link>
      <Link>Speed Perkseos</Link>
      <Link>Order Lookup</Link>
      <Link>Program Information</Link>
    </div>
  );
};


