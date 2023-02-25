import React from "react";
import styles from "./ProductDiv.module.css";
import { Box, Button, Image } from "@chakra-ui/react";
import { StarIcon} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
let dollarIndianLocale = Intl.NumberFormat("en-IN");


const ProductDiv = ({ data }) => {
  const { image, desc, price, strike_price, ratings ,id, category, brand, reviews} = data;

  return (
    <Box
      px="10px"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      textAlign={"left"}
    >
      <Link to ={`/product-details/${id}`}><Image margin="auto" height="250px" src={image} alt={image} /></Link>
      
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
        <Box >
          <Image
            boxSize="30px"
            src="https://images.bewakoof.com/web/Wishlist.svg"
          />
        </Box>
        <Button>Add to Cart</Button>
      </Box>
    </Box>
  );
};

export default ProductDiv;
