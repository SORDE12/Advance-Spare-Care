import React from "react";
import "./navbar.css";
import logo from "../Assets/logo.jpeg";
import car from "../Assets/car.png";
import {Search2Icon } from '@chakra-ui/icons'
const Navbar = () => {
  return (

    <div className="navbar-main-container">


      <div className="logo-img-div">
        <img src={logo} />
      </div>

      <div className="car-select-input">
        <div className="car-select">
          <img src={car} />
        </div>
        <div>
          <select className="select-tag-in-navbar">
            <option>Add a vehicle</option>
          </select>
        </div>
      </div>
      

      <div className="search-bar-div-in-navbar">
        <input className="input-search-field" placeholder="What part do you need today ?" />
        <div style={{border:"1px solid  rgb(255, 204, 0)",paddingLeft:"10px",paddingRight:"10px",backgroundColor:"rgb(255, 204, 0)"}}>
        <Search2Icon w={6} h={6} mt={2}/>
        </div>
         
      </div>


    </div>
  );
};

export default Navbar;
