import React from "react";

import { GrNext } from "react-icons/gr";
import { useState, useEffect } from "react";
//import Product from "./Add product/Product";
//import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCart,
  editCartItem,
  getCartProducts,
} from "../Redux/Cart/cart.action";
import { useNavigate } from "react-router";
//import { addOrders } from "../../Redux/Orders/orders.actions";
import { Flex, Spinner, useToast, Image, Box, Heading } from "@chakra-ui/react";
let dollarIndianLocale = Intl.NumberFormat("en-IN");

const Cart = () => {
  const {products,loading,error} = useSelector((store) => store.cartManager);
  const dispatch = useDispatch();
  const [count,setCount]=useState([]);
  
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getCartProducts(token));
    setCount(products)
  }, [token,count]);
  console.log(products,"count",count);

  return <div>
    {products && products.map((el)=>(
      <div key={el._id}>
        <h1>{el.price}</h1>
        <button>Update</button>
        <button onClick={()=>{dispatch(deleteItemFromCart(el._id,token));setCount(products)}}>Delete</button>
      </div>
    ))}
  </div>;
};

export default Cart;
