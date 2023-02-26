import React from "react";
import { Button } from "@chakra-ui/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ page, totalPages, handleClick }) => {
  // console.log(typeof page);
  return (
    <div>
      <Button
        colorScheme="white"
        border="0px"
        size="md"
        isDisabled={page === 1}
        onClick={() => handleClick(page - 1)}
      >
        <AiOutlineLeft color="black" />
      </Button>
      <Button colorScheme="white" variant="outline" size="md" border="0px">
        {page}
      </Button>
      <Button
        colorScheme="white"
        variant="outline"
        size="md"
        border="0px"
        isDisabled={page === totalPages}
        onClick={() => handleClick(page + 1)}
      >
        <AiOutlineRight color="black" />
      </Button>
    </div>
  );
};

export default Pagination;
