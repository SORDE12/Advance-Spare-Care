import React from "react";
import "./navbar.css";
import logo from "../Assets/1677236412281-01.jpeg";
import car from "../Assets/car.png";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NavHamburger from "./NavHamburger";
import { AccountDropdown } from "./Dropdown";
import { useState } from "react";
import Navbar2 from "./Navbar2";

const Navbar = () => {
const [DropdownAccount, setDropdownAccount] = useState(false);

  const navigate = useNavigate();
  const bagfunc = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="navbar1">
        <div className="navbar1-box">
          <div className="nav1-left">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="add-a-vehicle">
            <div>
              <img src={car} />
              <p>Add a Vehicle</p>
              <ChevronDownIcon boxSize={25} />
            </div>
          </div>
          <div className="nav1-right">
            <div className="nav1-search-div">
              <input
                className="nav1-search-div-input"
                type="text"
                placeholder="What part do you need today ?"
              />
              <div
                style={{
                  backgroundColor: "rgb(255, 204, 0)",
                  padding: "3px",
                  borderRadius: "4px",
                }}
              >
                <IoIosSearch size={30} color={"black"} />
              </div>
            </div>
            <div className="store-in-navbar">
              <CiLocationOn size={25} color={"white"} />
              <p>Choose a store</p>
            </div>
            <div
              className="store-in-navbar"
              onMouseEnter={() => setDropdownAccount(true)}
              onMouseLeave={() => setDropdownAccount(false)}
            >
              <BsPersonCircle size={25} color={"white"} />
              {DropdownAccount && <AccountDropdown />}
              <p>Account</p>
            </div>
            <div className="store-in-navbar">
              <BsBag size={25} color={"white"} />
              <p>Bag</p>
            </div>
          </div>
        </div>
        <NavHamburger />
      </div>
      <Navbar2 />
    </>
  );
};

export default Navbar;
