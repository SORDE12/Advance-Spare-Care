import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  Toast,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import style from "./ProductItem.module.css";
import UpdateModal from "./Update_Modal";
import { useSelector, useDispatch } from "react-redux";
import { removeData } from "../../Redux/Admin_Products/admin.product.action";



export const ProductCard = ({product}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const handleUpdate = () => {
    console.log("Update");
    onOpen();
  };

  const handleRemove = (id) => {
    console.log("Delete id", id);
    dispatch(removeData(id));

    onClose();
    // console.log("data", data);

    Toast({
      title: "Product Deleted",
      description: "We've successfully deleted the product from your database.",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };


  const { image, price, category, desc, ratings, _id } = product;


  return (
    <Stack
      bg={"#efe8e8"}
      border={"3px solid #ffcc00"}
      borderRadius={"10"}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      padding={"8px"}
      spacing={{
        base: "4",
        md: "5",
      }}
     key={key}
    >
      <Box position="relative">
        <AspectRatio ratio={5 / 3}>
          <Image
            src={image}
            alt={desc}
            fallback={<Skeleton />}
            borderRadius={{
              base: "md",
              md: "xl",
            }}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
            className={style.text}
          >
            📝 {desc}
          </Text>
        </Stack>
        <HStack justifyContent={"space-around"}>
          <Text fontSize="sm" color={"black"}>
            {ratings} Ratings ⭐
          </Text>
          <Text fontSize="sm" color="black">
            {price} Price 💰
          </Text>
        </HStack>
        <Text fontSize="sm" color="black" fontWeight={"bold"}>
          {category}
        </Text>
      </Stack>
      <Stack>
        <Flex justifyContent={"space-between"}>
          <Button colorScheme="blue" onClick={handleUpdate}>
            UPDATE
          </Button>

          <Box display={"none"}>
            <UpdateModal
              product={product}
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
            />
          </Box>
          <Button bg="#f24646" onClick={() => handleRemove(_id)}>
            REMOVE
          </Button>
        </Flex>
        <Button bg="#38bc5e" width="full" color={"black"}>
          Active
        </Button>
      </Stack>
    </Stack>
  );
};
