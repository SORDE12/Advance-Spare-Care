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
} from "@chakra-ui/react";
import { User } from "../Components/User";

const Userpage = () => {
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
      <User />
    </Box>
  );
};

export default Userpage;
