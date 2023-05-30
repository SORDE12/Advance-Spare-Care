import React from "react";
import styles from "./Cart.module.css";
import { GrNext } from "react-icons/gr";
import { useState, useEffect } from "react";
//import Product from "./Add product/Product";
//import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import CartDiv from "../Components/CartPage/CartDiv";
import {
  getCartProducts,
} from "../Redux/Cart/cart.action";
//import { addOrders } from "../../Redux/Orders/orders.actions";
import { Image, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
let dollarIndianLocale = Intl.NumberFormat("en-IN");


const Cart = () => {
  const {products} = useSelector((store) => store.cartManager);
  const dispatch = useDispatch();
  const [count,setCount]=useState([]);
  
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getCartProducts(token));
    setCount(products)
  }, [token,count]);


  //console.log(products,"count",count);

  
  
  if (!products.length) {
    return (
      <Box px={"10%"} py={"30px"}>
        <Image
          src={
            "https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
          }
          m={"auto"}
          w={"30%"}
        />
        <Heading textAlign={"center"} color="gray">
          Cart is empty
        </Heading>
      </Box>
    );
  }
  let res = products.map((el) => {
    return el.quantity * el.price;
  });
  res = res.reduce(function (sum, el) {
    return sum + el;
  }, 0);
  // total original price calculation
  let MRP = products.map((el) => {
    return (
      el.quantity * +el.strike_price
    );
  });
  MRP = MRP.reduce(function (sum, el) {
    return sum + el;
  }, 0);
  // saving amount
  let saving = MRP - res;


  return (
    <div className={styles.main__container}>
      <h2>
        <b>My Bag</b> {products.length} item(s)
      </h2>
      <div className={styles.card__container}>
        {/* ----- Selected item in cart ----- */}
        <div className={styles.product__container}>
          <div>
            <img
              src="https://images.bewakoof.com/web/Red-truck.png"
              alt="logo"
              width="19px"
              height="12px"
            />
            <p>Yay! You get FREE delivery on this order</p>
          </div>
          <div className={styles.comp__container}>
            {products.map((items) => (
              <CartDiv
                key={items.id}
                {...items}
                // handleRemove={handleRemove}
                // handleQtyChange={handleQtyChange}
              />
            ))}
          </div>
        </div>

        {/* ------ product Information ------ */}
        <div className={styles.info__container}>
          <div className={styles.box1}>
            <div>
              <p>
                Save extra <b>₹367</b> with TriBe
              </p>
              <p>
                <GrNext />
              </p>
            </div>
            <div>
              <p>
                Whistles! Get extra 10% Cashback upto 100 on prepaid orders
                <br />
                above Rs.699. Coupon code - MAD10.
              </p>
            </div>
            <div>
              <p>
                Get Rs.200 instant discount on your First Purchase above
                <br /> Rs.999. Coupon code -NEW200
              </p>
            </div>
            <div>
              <p>
                Whistles! Get extra 20% Cashback on prepaid orders above
                <br />
                Rs.499. Coupon code - NEW20. Applicable for new customers only!
              </p>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.box21}>
              <div>
                <p>Have a Coupon / Referral / Gift Card ?</p>
                <p>
                  <b>Redeem</b>
                </p>
              </div>
            </div>
            <div className="box22">
              <div>
                <p>
                  <b>PRICE SUMMARY</b>
                </p>
              </div>
              <div>
                <p>Total MRP (Incl. of taxes) </p>
                <p>₹{dollarIndianLocale.format(MRP)}/-</p>
              </div>
              <div>
                <p>Shipping Charges </p>
                <p>FREE</p>
              </div>
              <div>
                <p>Bag Discount </p>
                <p>{saving}</p>
              </div>
              <div>
                <p>Subtotal </p>
                <p>{res}</p>
              </div>
              <div>
                <div>
                  <p>
                    You are saving ₹ {saving}/- on
                    this order
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.box23}>
              <div>
                <span>
                  <p>Total</p>
                  <p>
                    <b>₹{res}/-</b>
                  </p>
                </span>
                <Link to="/checkoutaddress"><button >Place Order</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Cart;


