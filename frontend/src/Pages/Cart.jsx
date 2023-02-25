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
  const { loading, products, error } = useSelector(
    (store) => store.cartManager
  );
  console.log(products)
  return (
    <div>Cart</div>
  )
}

export default Cart