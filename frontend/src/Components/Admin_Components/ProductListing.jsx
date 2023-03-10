import { IconButton, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductItem";
import { Box, Input, Text, Heading, Select, } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getData} from "../../Redux/Admin_Products/admin.product.action";
import Loader from "./Loader";
import { FcSeBiSearchAlt2arch } from "react-icons/fa";

export const ProductListing = () => {

    // const [data,setData] = useState([]);

    const [ProductCategory, setProductCategory] = useState("");
   
    const [searchValue,setsearchValue] = useState('');


    const { data, isloader,iserror } = useSelector((state) => state.Admin_Products_reducer);
    const dispatch = useDispatch();
// console.log("dataarray",data)
    const handleCategories=(event)=>{
        const val = event.target.value;
   console.log("category",val);
   setProductCategory(val);
    }
useEffect(() => {
  dispatch(getData(ProductCategory, searchValue));
}, [ProductCategory]);
 
const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    console.log("Search Value", searchValue);
    dispatch(getData(ProductCategory, searchValue));
    setsearchValue('');
  }
};


const handleInputChange =(e)=>{
setsearchValue(e.target.value);
}



if(isloader){
  console.log("loader true")
  return <Loader />
}
if(iserror){
  return "ERROR-----"
}

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
              value={searchValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
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
              <option style={{ backgroundColor: "#0c0e1f" }} value="">
                Categories
              </option>
              <option style={{ backgroundColor: "#0c0e1f" }} value="air filter">
                Air Filters
              </option>
              <option
                style={{ backgroundColor: "#0c0e1f" }}
                value="turbo charger"
              >
                Turbo Chargers
              </option>
              <option style={{ backgroundColor: "#0c0e1f" }} value="motor oil">
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
            {data.length &&
              data.map((product) => (

                <ProductCard key={product._id} product={product} />

              ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default ProductListing;
