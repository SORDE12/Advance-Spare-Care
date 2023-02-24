import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductItem";
import { Box, Input, Text, Heading, Select, } from "@chakra-ui/react";




export const ProductListing = () => {
    const [Data,setData] = useState([]);
    const [ProductCategory, setProductCategory] = useState("");


    const handleCategories=(event)=>{
        const val = event.target.value;
   console.log("category",val)

    }
useEffect(()=>{
axios.get(`https://shy-ruby-piglet.cyclic.app/products`).then((res)=> setData(res.data))
},[])
 
  return (
    <>
      <Box
        color={"white"}
        minH={"100vh"}
        mt={{ base: "60px", md: "0px" }}
        padding={"20px"}
        bg={"#0c0e1f"}
        w={{ base: "100%", md: "71%", lg: "81.61%" }}
        ml={{ base: "0%", md: "29%", lg: "18.39%" }}
      >
        <Heading>Products</Heading>
        <Text color={"#00b5b8"}>List of Products</Text>

        <Box mt={"30px"} w={"100%"}>
          <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
            {/* input search */}
            <Input
              type={"text"}
              placeholder="Search Listings.."
              w={{ base: "40%", md: "35%", lg: "25%" }}
            ></Input>
            {/* select option */}
            <Select
              // variant="flushed"
              bg="#0c0e1f"
              w={{ base: "45%", md: "25%", lg: "20%" }}
              cursor={"pointer"}
              value={ProductCategory}
              onChange={handleCategories}
            >
              <option style={{ backgroundColor: "#0c0e1f" }}>Categories</option>
              <option style={{ backgroundColor: "#0c0e1f" }} value="airfilters">
                Air Filters
              </option>
              <option
                style={{ backgroundColor: "#0c0e1f" }}
                value="turbocharger"
              >
                Turbo Chargers
              </option>
              <option style={{ backgroundColor: "#0c0e1f" }} value="motoroil">
                Motor Oil
              </option>
            </Select>
          </Box>
          <SimpleGrid
            zIndex={0}
            columns={{ base: 1, md: 3, lg: 4 }}
            columnGap={{
              base: "4",
              md: "6",
            }}
            rowGap={{
              base: "8",
              md: "10",
            }}
          >
            {Data.length &&
              Data.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default ProductListing;
