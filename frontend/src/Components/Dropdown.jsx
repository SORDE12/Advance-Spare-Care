import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { parts } from "./NavbarData";
import { NavMenSlider } from "./NavSlider";
import "./navbar.css";
import { useSelector } from "react-redux";

export const PartsDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="nav-men-main-con">
      <div
        id="MenSubmenu"
        className={dropdown ? "Men-Submenu-Open" : "Men-Submenu-Close"}
        onClick={() => setDropdown(!dropdown)}
      >
        {parts.map((ele, index) => (
          <p id={ele.id === 1 ? "Item-Heading" : "notHeading"} key={index + 1}>
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
  const authState = useSelector((state) => state.auth);

  return (
    <div
      style={{ color: "black" }}
      id="Account-Submenu"
      className={dropdown ? "Account-Submenu-Open" : "Account-Submenu-Close"}
      onClick={() => setDropdown(!dropdown)}
    >
      <Link to="/user" style={{ fontWeight: "bold" }}>
        Account
      </Link>
      {authState.data.isAuthenticated ? (
        <Link>Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <Link to="/admin/login">Admin Login</Link>
      <Link style={{ fontWeight: "bold" }} to="/favorites">
        Quick Links
      </Link>
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
