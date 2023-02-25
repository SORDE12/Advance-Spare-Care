import React from "react";
import styles from "./ProductDiv.module.css";
import { Box, Button, Image, useToast } from "@chakra-ui/react";
import { StarIcon} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Cart/cart.action";
let dollarIndianLocale = Intl.NumberFormat("en-IN");


const ProductDiv = ({ data }) => {
  // console.log({data})
  const { image, desc, price, strike_price, ratings ,_id, category, brand, reviews} = data;
  const dispatch = useDispatch();
  const toast=useToast()
  const token=localStorage.getItem("token")

  const handleAddToCart = (_id,token) => {
    console.log(_id)

    dispatch(addToCart(_id,token));
    toast({
      title: "Added to Cart",
      description: "Item has successfully added to Cart",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  return (
    <Box
      px="10px"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      textAlign={"left"}
    >
<Image margin="auto" height="250px" src={image} alt={image} />
      
      <Box display={"flex"} flexDirection={"row"}>
        <Box p={2} width={"80%"}>
          <Box mt="1" as="p" lineHeight="tight" noOfLines={1} marginLeft="10px">
            {desc}
          </Box>
          <Box marginLeft="6px">
            <Box marginLeft="4px" as="span" color="gray.600" fontSize="sm">
            Brand :
            </Box>
            <Box marginLeft="4px" as="span" color="gray.600" fontSize="sm">
              {brand}
            </Box>
          </Box>
          <Box marginLeft="6px">
            <Box marginLeft="4px" as="span" color="gray.600" fontSize="sm">
            Category :
            </Box>
            <Box marginLeft="4px" as="span" color="gray.600" fontSize="sm">
              {category}
            </Box>
          </Box>
          <Box marginLeft="6px">
            <Box marginLeft="4px" as="span" color="gray.600" fontSize="sm">
            Reviews :
            </Box>
            <Box marginLeft="4px" as="span" color="gray.600" fontSize="sm">
              {reviews}
            </Box>
          </Box>
          <Box marginLeft="6px">
            <Box marginLeft="4px" as="span" color="gray.600" fontSize="sm">
            Discount Price :
            </Box>
            <Box marginLeft="4px" as="span" color="gray.600" fontSize="sm">
              ₹{dollarIndianLocale.format(price)}
              /-
            </Box>
          </Box>
          <Box >
            <Box
              marginLeft="4px"
              as="span"
              p={"5px"}
              color="gray.600"
              fontSize="sm"
            >
              Actual Price :
            </Box>
            <Box as="span" color="gray.600" fontSize="sm">
              <s>{strike_price}</s>
            </Box>
          </Box>
          <Box px={2}  display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < ratings ? "teal.500" : "gray.300"}
                />
              ))}

          </Box>
        </Box>
      </Box>
      <div style={{display:"flex", flexDirection:"row" , alignItems:"center", gap:"50px"}}>
      <Button style={{margin:"15px" , padding:"10px"}} onClick={()=>handleAddToCart(_id,token)}>Add to Cart</Button>
      
      <Image
            boxSize="30px"
            src="https://images.bewakoof.com/web/Wishlist.svg"
          />
      </div>
     
    </Box>
  );
};

export default ProductDiv;
