import styles from "./CartDiv.module.css";
import React, { useState } from "react";
// import Size from './size'
let dollarIndianLocale = Intl.NumberFormat("en-IN");

const CartDiv = (props) => {
  const { desc, image, price, strike_price,id} = props;
   //const { handleRemove, id, qty, handleQtyChange, size } = props;
//console.log( desc, image, price, stricke_price,id )
console.log(strike_price)
   let s = strike_price

   let discount = +s - +price;

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
            value={'1'}
          //   onChange={(e) => handleQtyChange({ id, qty: e.target.value })}
    
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
      </div>
    </div>
    <div className={styles.move__remove}>
      {/* <button onClick={() => handleRemove(id)}>Remove</button> */}
      <button>Remove</button>
      <button>Move to Wishlist</button>
    </div>
  </div>
  );
};

export default CartDiv;
  