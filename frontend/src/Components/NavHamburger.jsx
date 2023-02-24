import React from "react";
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  // Input
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import logo from "../Assets/1677236412281-01.jpeg";
import { Link, useNavigate } from "react-router-dom";

import "./navbar.css";
const NavHamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  const navigate = useNavigate();

  const loginFunc = () => {
    navigate("/signin");
  };

  return (
    <div className="Hamburger-box">
      <div className="hamburger-nav">
        <Button ref={btnRef} bg="unset" onClick={onOpen}>
          <RxHamburgerMenu fontSize="25px" color="white" />
        </Button>
        <IoIosSearch fontSize="25px" color="white" />
        <Link className="hamburger-log" to="/">
          <img src={logo} alt="" />
        </Link>

        <BsPersonCircle fontSize="25px" color="white" onClick={loginFunc} />
        <BsBag fontSize="25px" color="white" />
      </div>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="full"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerHeader
            textAlign="center"
            borderBottom="1px solid  rgb(191, 190, 190)"
            backgroundColor={"rgb(255, 204, 0)"}
          >
            CATEGORIES
          </DrawerHeader>

          <DrawerBody>
            <Link className="hamburger-catagories-box">
              <img
                src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2/large/15790154_puo_a35592_pri_larg.jpg"
                alt=""
              />
              <p>Air Filter</p>
              <MdOutlineArrowForwardIos />
            </Link>
            <Link className="hamburger-catagories-box">
              <img
                src="https://m.media-amazon.com/images/I/518gFneyn3L._SL1001_.jpg"
                alt=""
              />
              <p>Air tank Filter</p>
              <MdOutlineArrowForwardIos />
            </Link>
            <Link className="hamburger-catagories-box">
              <img
                src="https://m.media-amazon.com/images/I/71MHDp0AwGL._SY450_.jpg"
                alt=""
              />
              <p>Cabin Air Filter</p>
              <MdOutlineArrowForwardIos />
            </Link>
            <Link className="hamburger-catagories-box">
              <img
                src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3255/large/12260512_fmh_f6605qt_pri_larg.jpg"
                alt=""
              />
              <p>Oil and fluids</p>
              <MdOutlineArrowForwardIos />
            </Link>
            <Link className="hamburger-catagories-box">
              <img
                src="https://e7.pngegg.com/pngimages/921/889/png-clipart-car-honda-scooter-spare-part-vehicle-brakes-and-parts-grey-vehicle-tools-photography-happy-birthday-vector-images.png"
                alt=""
              />
              <p>Replacement Parts</p>
              <MdOutlineArrowForwardIos />
            </Link>
            <Link className="hamburger-catagories-box">
              <img
                src="https://shop.advanceautoparts.com/images/performance-brake.jpg"
                alt=""
              />
              <p>Performance Part</p>
              <MdOutlineArrowForwardIos />
            </Link>
            <Link className="hamburger-catagories-box">
              <img
                src="https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/menu/Accessories/PaintBodyRepair.jpg"
                alt=""
              />
              <p>Accessories</p>
              <MdOutlineArrowForwardIos />
            </Link>
            <Link className="hamburger-catagories-box">
              <img
                src="https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2021/gasrewards/Gas-Pump.png"
                alt=""
              />
              <p>Speed perks</p>
              <MdOutlineArrowForwardIos />
            </Link>
          </DrawerBody>

          <Button
            variant="outline"
            mr={3}
            backgroundColor={"rgb(255, 204, 0)"}
            onClick={onClose}
          >
            Cancel
          </Button>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavHamburger;
