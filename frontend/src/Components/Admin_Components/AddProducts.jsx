import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Text,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../../Redux/Admin_Products/admin.product.action";

// Function to generate random number
function randomNumber(min, max) {
    return (Math.random() * Math.ceil((max - min) + min))
}



const initialState = {
  price: 0,
  desc: "",
  image: "",
  brand: "",
  category: "",
  strike_price: 2000,
  ratings: randomNumber(2,5),
  delivery_time: 5,
  reviews: 456,
  isActive: true,
  name: "rrr",
};

const AddProducts = () => {
  const [formData, setFormData] = useState(initialState);
const toast = useToast()
const {data} = useSelector(
  (state) => state.Admin_Products_reducer
);
const dispatch = useDispatch();

  const HandleClick = () => {
    console.log(formData);

dispatch(addData(formData));
console.log("data",data)

    toast({
      title: "Product Added",
      description: "We've successfully added the product in your database.",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };
  const HandleChange = (e) => {
    if(e.target.name == "price"){
const data = Number(e.target.value);
setFormData({ ...formData, [e.target.name]: data });
    }
    else{
const data = e.target.value;
setFormData({ ...formData, [e.target.name]: data });
    }
    
    
  };

  const { desc, price, image, category,brand } = formData;
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
      <Heading>ADD PRODUCTS</Heading>
      <Text color={"#00b5b8"}>Create a product</Text>

      <Flex bg={"#0C0E1F"} color="black" align={"center"} justify={"center"}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"xl"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={2}
        >
          <Heading fontSize={{ base: "xl", md: "2xl" }}>
            Enter Product Details
          </Heading>
          <FormControl id="desc" isRequired>
            <FormLabel>Product Description</FormLabel>
            <Input
              placeholder="Type Here"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={desc}
              name="desc"
              onChange={HandleChange}
            />
          </FormControl>
          <FormControl id="price" isRequired>
            <FormLabel>Price</FormLabel>
            <Input
              placeholder="Type Here"
              _placeholder={{ color: "gray.500" }}
              type="number"
              value={price}
              name="price"
              onChange={HandleChange}
            />
          </FormControl>
          <FormControl id="brand" isRequired>
            <FormLabel>Brand</FormLabel>
            <Input
              placeholder="Type Here"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={brand}
              name="brand"
              onChange={HandleChange}
            />
          </FormControl>
          <FormControl id="category" isRequired>
            <FormLabel>Category</FormLabel>
            <Select
              // variant="flushed"

              value={category}
              name="category"
              onChange={HandleChange}
            >
              <option value="">Select categories 🔽</option>
              <option value="Air Filter">Air Filters</option>
              <option value="Turbo Chargers">Turbo Chargers</option>
              <option value="Motor Oil">Motor Oil</option>
            </Select>
          </FormControl>

          <FormControl id="Images" isRequired>
            <FormLabel>Images</FormLabel>
            <Input
              placeholder="Type Here"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={image}
              name="image"
              onChange={HandleChange}
            />
          </FormControl>

          <Stack spacing={6}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={HandleClick}
            >
              Add Now
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};
export default AddProducts;
