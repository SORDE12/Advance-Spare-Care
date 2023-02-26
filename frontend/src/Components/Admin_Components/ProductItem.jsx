import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";


export const ProductCard = ({key,product}) => {
 
    console.log(product);
  const {
    image,
    price,
    category,
    desc,
    ratings,
  } = product;
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
          >
            📝{" "}{desc}
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
          <Button colorScheme="blue">UPDATE</Button>
          <Button bg="#f24646">REMOVE</Button>
        </Flex>
        <Button bg="#38bc5e" width="full" color={"black"}>
          Active
        </Button>
      </Stack>
    </Stack>
  );
};
