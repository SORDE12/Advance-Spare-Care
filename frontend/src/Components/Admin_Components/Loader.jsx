import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Box
      w={{ base: "100%", md: "71%", lg: "81.61%" }}
      ml={{ base: "0%", md: "29%", lg: "18.39%" }}
      bg={"#0f2026"}
    >
      <Image
        m={"auto"}
        src="https://cdn.dribbble.com/users/68398/screenshots/3687284/media/13bafc8b04af3756e57c134bfd6ac256.gif"
        alt="dddd"
      />
    </Box>
  );
}

export default Loader