import React from "react";
import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { User } from "../Components/User";
import {  useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import { AUTH_LOGIN_RESET } from "../Redux/Authentication/auth.actionTypes";

const Userpage = () => {
 
 
  const authState = useSelector((state) => state.auth);
  

  const [userData, setUserdata] = useState({});
  const token = authState.data.token;
  const toast = useToast();
  

  const getUser = async (token) => {
    await fetch(`https://advance-spare-care.onrender.com/users/user`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => setUserdata(res.user))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser(token);
  }, [token]);

  if (!token) {
    toast({
      title: "Please Login First",
      status: "warning",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    

    return <Navigate to="/login" />;
  } else {
    return (
      <Box
        display="flex"
        //   flexDirection={{
        //     base: "column-reverse",
        //     sm: "column-reverse",
        //     lg: "row",
        //   }}
        gap={5}
        marginTop="20px"
        justifyContent="center"
      >
        <Box
          boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
          flexBasis="80%"
        >
          <Tabs orientation="vertical" colorScheme="red">
            <TabList w="25%">
              <Tab>Orders</Tab>
              <Tab>My Wishlist</Tab>
              <Tab>Address Book</Tab>
              <Tab>Saved Payments</Tab>
              <Tab>Coupons</Tab>
            </TabList>
            <Center height="inherit">
              <Divider orientation="vertical" />
            </Center>
            <TabPanels>
              <TabPanel>
                <Text>Orders</Text>
              </TabPanel>
              <TabPanel>
                <Text>My Wishlist</Text>
              </TabPanel>
              <TabPanel>
                <Text>Address Book</Text>
              </TabPanel>
              <TabPanel>
                <p>Saved Payments</p>
              </TabPanel>
              <TabPanel>
                <p>Coupons</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <User {...userData} setUserdata={setUserdata} />
      </Box>
    );
  }
};

export default Userpage;
