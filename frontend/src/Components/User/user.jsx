import React from "react";
import { Box, Avatar, Text, Button } from "@chakra-ui/react";

const user = () => {
  return (
    <div>
      <Box
        // w={{ base: "100%", sm: "100%", lg: "25%" }}
        padding={10}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      >
        <Avatar src="https://bit.ly/broken-link" />
        <Text margin={1}>Tinkle</Text>
        <Text>tinkledash@gmail.com</Text>
        <Button>Logout</Button>
      </Box>
    </div>
  );
};

export default user;
