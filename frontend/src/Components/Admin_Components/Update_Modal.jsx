import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Toast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateData,getData } from "../../Redux/Admin_Products/admin.product.action";

function UpdateModal({ isOpen, onOpen, onClose,product }) {
const { data } = useSelector((state) => state.Admin_Products_reducer);
//const [myStoreData,setmyStoreData]=useState(data)

    // useEffect(() => {
    //   dispatch(getData("", ""));
    //   setmyStoreData(data);
    // }, [myStoreData]);

    const [formData, setFormData] = useState(product);
   const { image, price, category, desc, brand,_id } = formData;
  const finalRef = React.useRef(null);
  

  const dispatch = useDispatch();

  const HandleClick = () => {
    console.log(formData);

    dispatch(updateData(_id,formData));
    
     
    onClose()
    // console.log("data", data);

    Toast({
      title: "Product Updated",
      description: "We've successfully updated the product in your database.",
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

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" mr={3} onClick={HandleClick}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}


export default UpdateModal;