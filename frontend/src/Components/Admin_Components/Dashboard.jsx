import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: true,
      text: "Order Details",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "Orders",
      data: [10, 20, 50, 10, 45, 35, 21],
      backgroundColor: "#00b5b8",
    },
  ],
};

const Dashboard = () => {
  const [AirFilters, setAirFilters] = useState([]);
  const [TurboChargers, setTurboChargers] = useState([]);
  const [MotorOil, setMotorOil] = useState([]);
  
  
  

  useEffect(() => {
    axios
      .get(`https://shy-ruby-piglet.cyclic.app/products?category=air`)
      .then((res) => setAirFilters(res.data))
      axios
        .get(
          `https://shy-ruby-piglet.cyclic.app/products?category=turbo`
        )
        .then((res) => setTurboChargers(res.data))
        axios
          .get(`https://shy-ruby-piglet.cyclic.app/products?category=motor`)
          .then((res) => setMotorOil(res.data));
    
  }, []);
  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
      w={{ base: "100%", md: "71%", lg: "81.61%" }}
      ml={{ base: "0%", md: "29%", lg: "18.39%" }}
    >
      <Heading>Dashboard</Heading>
      <Text color={"#00b5b8"}>Welcome to Dashboard</Text>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        width={{ base: "100%", md: "100%", lg: "95%" }}
        m={"auto"}
        spacingY={10}
      >
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {AirFilters?.length}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Air Filters
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {TurboChargers?.length}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Turbo Chargers
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {MotorOil?.length}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Motor Oil
          </Text>
        </Box>

        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            42
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Brakes
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            23
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Drivetrain
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            37
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Batteries
          </Text>
        </Box>
      </SimpleGrid>
      <Text></Text>
    </Box>
  );
};

export default Dashboard;
