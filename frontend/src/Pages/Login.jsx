import React from "react";
import "./Login.css";
import loginimg from "../Assets/login_img.webp";
import logo from "../Assets/logo.jpeg";
import close from "../Assets/closeicon.png";
const Login = () => {
  return (
    <>
      <div className="main_container">
        <div className="coverl">
          <h2 className="signup-heading">Sign In</h2>

          <p className="input-heading">Email</p>
          <input
            className="inputs-in-login"
            style={{ padding: "10px" }}
            type="email"
            placeholder="Enter Your Email"
          />

          <p className="input-heading">Password</p>
          <input
            className="inputs-in-login"
            style={{ padding: "10px" }}
            type="password"
            placeholder="Enter Your password"
          />
          <br />

          <p className="forgotpass">Forgot Password ?</p>
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
            SIGN IN
          </button>
          <br />

          <p className="no_account">Don't Have an Account?</p>
          <br />
          <button
            className="button"
            style={{
              padding: "12px",
              fontWeight: "bold",
              color: "black",
              border: "2px solid black",
              fontSize: "17px",
              cursor: "pointer",
            }}
          >
            CREATE ACCOUNT
          </button>
          <br />
          <br />
          <hr />
          <hr />
          <hr />
          <hr />
          <br />
          <p>
            © 2023 Advance Spare Care{" "}
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
};

export default Login;
