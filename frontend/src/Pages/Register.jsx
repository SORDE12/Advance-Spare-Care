import "./register.css";
import loginimg from "../Assets/login_img.webp";
import React from "react";

export default function Register() {
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
          />

          <p className="input-heading">Last Name</p>
          <input
            className="refister-input-field"
            style={{ padding: "10px" }}
            type="text"
            placeholder="Last Name"
          />

          <p className="input-heading">Mobile Number</p>
          <input
            className="refister-input-field"
            style={{ padding: "10px" }}
            placeholder="Mobile Number"
            class="textbox-n"
            type="number"
          />

          <p className="input-heading">Email</p>
          <input
            className="refister-input-field"
            style={{ padding: "10px" }}
            type="email"
            placeholder="Enter Your Email"
          />

          <p className="input-heading">Password</p>
          <input
            className="refister-input-field"
            style={{ padding: "10px" }}
            type="password"
            placeholder="Enter Your password"
          />

          <p className="input-heading">Address</p>
          <input
            className="refister-input-field"
            style={{ padding: "10px" }}
            type="text"
            placeholder="Permanent Address"
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
              textAlign: "justify",
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
          <img className="loginImg-img" src={loginimg} />
        </div>
      </div>
    </>
  );
}
