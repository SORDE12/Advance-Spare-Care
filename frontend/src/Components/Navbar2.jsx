import React from "react";
import "./navbar.css";
import { useState } from "react";
import { PartsDropdown } from "./Dropdown";
import { Link } from "react-router-dom";

export default function Navbar2() {
  const [DropdownNewarrival, setDropdownNewarrival] = useState(false);
  const [DropdownMen, setDropdownMen] = useState(false);
  const [DropdownWomen, setDropdownWomen] = useState(false);
  const [DropdownBoys, setDropdownBoys] = useState(false);
  const [DropdownGirls, setDropdownGirls] = useState(false);
  const [DropdownClothing, setDropdownClothing] = useState(false);
  const [DropdownAccessories, setDropdownAccessories] = useState(false);
  const [DropdownSale, setDropdownSales] = useState(false);
  const [DropdownBrands, setDropdownBrands] = useState(false);
  const [DropdownRelease, setDropdownRelease] = useState(false);

  return (
    <div className="navbar2">
      <div className="navbar2-box">
        <div
          onMouseEnter={() => setDropdownNewarrival(true)}
          onMouseLeave={() => setDropdownNewarrival(false)}
        >
          {" "}
          <Link>Air Filter</Link>
          {DropdownNewarrival && <PartsDropdown />}
        </div>
        <div
          onMouseEnter={() => setDropdownMen(true)}
          onMouseLeave={() => setDropdownMen(false)}
        >
          {" "}
          <Link>Air tank Filter</Link>
          {DropdownMen && <PartsDropdown />}
        </div>
        <div
          onMouseEnter={() => setDropdownWomen(true)}
          onMouseLeave={() => setDropdownWomen(false)}
        >
          {" "}
          <Link>Cabin Air Filter</Link>
          {DropdownWomen && <PartsDropdown />}
        </div>
        <div
          onMouseEnter={() => setDropdownBoys(true)}
          onMouseLeave={() => setDropdownBoys(false)}
        >
          {" "}
          <Link>Oil and fluids</Link>
          {DropdownBoys && <PartsDropdown />}
        </div>
        <div
          onMouseEnter={() => setDropdownGirls(true)}
          onMouseLeave={() => setDropdownGirls(false)}
        >
          {" "}
          <Link>Replacement Parts</Link>
          {DropdownGirls && <PartsDropdown />}
        </div>
        <div
          onMouseEnter={() => setDropdownClothing(true)}
          onMouseLeave={() => setDropdownClothing(false)}
        >
          {" "}
          <Link>Performance Part</Link>
          {DropdownClothing && <PartsDropdown />}
        </div>
        <div
          onMouseEnter={() => setDropdownAccessories(true)}
          onMouseLeave={() => setDropdownAccessories(false)}
        >
          {" "}
          <Link>Accessories</Link>
          {DropdownAccessories && <PartsDropdown />}
        </div>
        <div
          onMouseEnter={() => setDropdownSales(true)}
          onMouseLeave={() => setDropdownSales(false)}
        >
          {" "}
          <Link>Speed perks</Link>
          {DropdownSale && <PartsDropdown />}
        </div>
        <div
          onMouseEnter={() => setDropdownBrands(true)}
          onMouseLeave={() => setDropdownBrands(false)}
        >
          {" "}
          <Link>BRANDS</Link>
          {DropdownBrands && <PartsDropdown />}
        </div>
        <div
          onMouseEnter={() => setDropdownRelease(true)}
          onMouseLeave={() => setDropdownRelease(false)}
        >
          {" "}
          <Link>RELEASES</Link>
          {DropdownRelease && <PartsDropdown />}
        </div>
      </div>
    </div>
  );
}
