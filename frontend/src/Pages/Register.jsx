import "./register.css";
import loginimg from "../Assets/login_img.webp";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { authRegister } from "../Redux/Authentication/auth.action";

export default function Register() {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  // console.log("authState: ", authState);
  const dispatch = useDispatch();

  const handleRegister = () => {
    let obj = {
      first_name,
      last_name,
      email,
      mobile,
      password,
      address,
    };
    if (
      obj.first_name === "" ||
      obj.last_name === "" ||
      obj.password === "" ||
      obj.email === "" ||
      obj.address === "" ||
      obj.mobile === ""
    ) {
      toast({
        title: "Please fill add details",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      // console.log(obj);

      dispatch(authRegister(obj));

      if (
        authState.userRegister.message === "User already exist, Please login"
      ) {
        toast({
          title: authState.userRegister.message,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      if (authState.userRegister.message === "Something Went Wrong") {
        toast({
          title: "Wrong Details",
          status: "warning",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
      if (authState.userRegister.message === "User Registration Suceessful") {
        toast({
          title: authState.userRegister.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  return (
    <>
      <div className="main_container">
        <div className="cover">
          <h2 className="signup-heading">Sign Up</h2>

          <p className="input-heading">First Name</p>
          <input
            className="refister-input-field"
            style={{ padding: "10px" }}
            type="text"
            placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirst_Name(e.target.value)}
          />

          <p className="input-heading">Last Name</p>
          <input
            className="refister-input-field"
            style={{ padding: "10px" }}
            type="text"
            placeholder="Last Name"
            value={last_name}
            onChange={(e) => setLast_Name(e.target.value)}
          />

          <p className="input-heading">Mobile Number</p>
          <input
            className="refister-input-field"
            style={{ padding: "10px" }}
            placeholder="Mobile Number"
            class="textbox-n"
            type="number"
            required
            value={mobile}
            onChange={(e) => setMobile(Number(e.target.value))}
          />

          <p className="input-heading">Email</p>
          <input
            className="refister-input-field"
            style={{ padding: "10px" }}
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="input-heading">Password</p>
          <input
            className="refister-input-field"
            style={{ padding: "10px" }}
            type="password"
            placeholder="Enter Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="input-heading">Address</p>
          <input
            className="refister-input-field"
            style={{ padding: "10px" }}
            type="text"
            placeholder="Permanent Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <button
            className="button"
            style={{
              padding: "12px",
              fontWeight: "bold",
              backgroundColor: "rgb(255, 204, 0)",
              color: "black",
              border: "none",
              fontSize: "17px",
              cursor: "pointer",
            }}
            onClick={handleRegister}
          >
            CREATE ACCOUNT
          </button>
          <br />

          <p style={{ fontSize: "15px", textAlign: "left", color: "#373737" }}>
            ** By creating an account, you agree to our{" "}
            <span style={{ textDecoration: "underline", color: "blue" }}>
              STATUS Terms & Conditions
            </span>
            ,
            <span style={{ textDecoration: "underline", color: "blue" }}>
              {" "}
              Privacy Policy
            </span>
            , and{" "}
            <span style={{ textDecoration: "underline", color: "blue" }}>
              {" "}
              Terms of Use
            </span>
            .
          </p>
          <br />

          <p
            style={{
              fontSize: "15px",
              textAlign: "left",
              color: "#373737",
            }}
          >
            ** By choosing to receive text messages, the customer agrees to
            receive auto-dialed text messages from Advance Auto Parts relating
            to Speed Perks Rewards. Message and data rates may apply. Reward and
            reminder messages will be sent based on qualified rewards earned.See
            <span style={{ textDecoration: "underline", color: "blue" }}>
              {" "}
              STATUS Terms & Conditions
            </span>
            ,
            <span style={{ textDecoration: "underline", color: "blue" }}>
              {" "}
              Privacy Policy
            </span>
            , and{" "}
            <span style={{ textDecoration: "underline", color: "blue" }}>
              {" "}
              Terms of Use.
            </span>
          </p>
          <br />
          <hr />
          <hr />
          <hr />
          <hr />
          <br />
          <p>
            © 2023 Advance Auto Parts{" "}
            <span style={{ textDecoration: "underline" }}> Privacy Policy</span>
            , and{" "}
            <span style={{ textDecoration: "underline" }}> Terms of Use.</span>
          </p>
        </div>

        <div className="loginImg">
          <img className="loginImg-img" src={loginimg} alt="" />
        </div>
      </div>
    </>
  );
}
