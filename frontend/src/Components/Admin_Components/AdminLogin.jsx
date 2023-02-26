import React from "react";
import "../../Pages/Login.css";
import loginimg from "../../Assets/login_img.webp"
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ADMINLogin } from "../../Redux/AdminAuthentication/adminauth.action";
import { ADMIN_LOGIN_RESET } from "../../Redux/AdminAuthentication/adminauth.actionTypes";


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const adminState = useSelector((state) => state.adminAuthReducer);
  console.log("adminState: ", adminState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (adminState.adminLogin.message === "Admin is not registered") {
      toast({
        title: adminState.adminLogin.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    if (adminState.adminLogin.message === "Something Went Wrong") {
      toast({
        title: "Wrong Password",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    if (adminState.adminLogin.message === "Login Suceessful") {
      toast({
        title: "Login Successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      
      // dispatch({ type: ADMIN_LOGIN_RESET });
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    }
  }, [dispatch, navigate, adminState, toast]);

  const handleadminLogin = () => {
    // console.log(formData);
    // console.log(email,password)
    let obj = {
      email,
      password,
    };
    dispatch(ADMINLogin(obj));
  };

  if (adminState.data.isAuthenticated) {
    return <Navigate to={"/admin"} />;
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
            onClick={handleadminLogin}
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
          <img className="loginImg-img" src={loginimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
