import React from "react";
import { Box, Avatar, Text, Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { logout } from "../../Redux/Authentication/auth.action";
import { useEffect } from "react";
import { AUTH_LOGIN_RESET } from "../../Redux/Authentication/auth.actionTypes";

const User = ({
  _id,
  first_name,
  last_name,
  mobile,
  email,
  address,
  setUserdata,
}) => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  console.log(authState);
  const logOutUser = () => {
    setUserdata({});
    dispatch(logout);
    dispatch({ type: AUTH_LOGIN_RESET });
    
  };

  useEffect(()=>{
    if ((authState.userLogout.message === "Logout Successfully") && (authState.data.isAuthenticated===false)) {
      toast({
        title: authState.userLogout.message,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        navigate("/")
      }, 500);
      // dispatch({ type: AUTH_LOGIN_RESET });
    } 
  },[authState.data.isAuthenticated,authState.userLogout.message,navigate,toast])

  if(authState.data.isAuthenticated===false){
    setTimeout(() => {
      navigate("/login")
    }, 500);
  }else{
    return (
      <div>
        <Box
          key={_id}
          // w={{ base: "100%", sm: "100%", lg: "25%" }}
          padding={10}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        >
          <Avatar
            src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
            alt="dummy"
          />
          <Text margin={1}>{`Username :- ${first_name} ${last_name}`}</Text>
          <Text margin={1}>{`${mobile}`}</Text>
          <Text>{email}</Text>
          <Text>{address}</Text>
          <Button onClick={logOutUser}>Logout</Button>
        </Box>
      </div>
    );
  }
 
};

export default User;
