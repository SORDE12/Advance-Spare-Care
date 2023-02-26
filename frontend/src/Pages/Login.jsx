import React from "react";
import "./Login.css";
import loginimg from "../Assets/login_img.webp";
import logo from "../Assets/logo.jpeg";
import close from "../Assets/closeicon.png";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_LOGIN_RESET } from "../Redux/Authentication/auth.actionTypes";
import { authLogin } from "../Redux/Authentication/auth.action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  console.log("authState: ", authState);
  const dispatch = useDispatch();

  const handleSignup=()=>{
    navigate("/register")
  }

  React.useEffect(() => {
    if (
      authState.userLogin.message ===
      "User is not registered,Please register first"
    ) {
      toast({
        title: authState.userLogin.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    if (authState.userLogin.message === "Something Went Wrong") {
      toast({
        title: "Wrong Password",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    if (authState.userLogin.message === "Login Suceessful") {
      toast({
        title: "Login Successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      dispatch({ type: AUTH_LOGIN_RESET });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [dispatch, navigate, authState, toast]);

  const handleUserLogin = () => {
    // console.log(formData);
    // console.log(email,password)
    let obj = {
      email,
      password,
    };
    dispatch(authLogin(obj));
  };

  if (authState.data.isAuthenticated) {
    return <Navigate to={"/"} />;
  }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="input-heading">Password</p>
          <input
            className="inputs-in-login"
            style={{ padding: "10px" }}
            type="password"
            placeholder="Enter Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            onClick={handleUserLogin}
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
            onClick={handleSignup}
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
          <img className="loginImg-img" src={loginimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
