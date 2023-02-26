import styles from "./CartDiv.module.css";
import React, { useState } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart, editCartItem, getCartProducts } from "../../Redux/Cart/cart.action";

// import Size from './size'
let dollarIndianLocale = Intl.NumberFormat("en-IN");

const CartDiv = (props) => {
  const [qty,setQty]=useState(1)
  const { desc, image, price, strike_price,_id} = props;
  const toast =useToast()
  const dispatch = useDispatch();
  const token=localStorage.getItem("token")
   //const { handleRemove, id, qty, handleQtyChange, size } = props;
//console.log( desc, image, price, stricke_price,id )
//console.log(strike_price)
   let s = strike_price

   let discount = +s - +price;

   function deleteAddToCart(_id,token){

    dispatch(deleteItemFromCart(_id,token));
    dispatch(getCartProducts(token));
    toast({
      title: "Deleted from Cart",
      description: "Item has deleted from Cart",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
   }

    const handleQtyChange = async ({ _id, qty }) => {
      setQty(qty)

    await dispatch(editCartItem( _id, qty, token));
    dispatch(getCartProducts(token));
  //  dispatch(getCartProducts(user.email));
  };

  return (
    <div className={styles.main__prod__container} >
    <div className={styles.prod__desc}>
      <div>
        <p
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            webkitLineClamp: "1" /* number of lines to show */,
            lineClamp: "1",
            webkitBoxOrient: "vertical",
          }}
        >
          {desc}

        </p>
        <div className={styles.inline}>

          <h1>₹{dollarIndianLocale.format(price)}/-</h1>
          <p>
          
            <s>{strike_price }/-</s>
          </p>
        </div>

        <p>You saved ₹{dollarIndianLocale.format(discount)}/-</p>
      </div>
      <div>
        <img src={image} alt="prod" />
        
      </div>

      <div className={styles.prod__qty}>
        <div>
          Qty:
          <select
            value={qty}
           onChange={(e) => handleQtyChange({ _id, qty: e.target.value })}
    
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
           <Box>Current Quantity:- {props.quantity}</Box>
        </div>
       
      </div >
     
    </div>
    <div className={styles.move__remove}>
      <button onClick={()=>deleteAddToCart(_id,token)}>Remove</button>
     
      <button>Move to Wishlist</button>
    </div>
  </div>
  );
};

export default CartDiv;
  