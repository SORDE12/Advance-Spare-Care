import { Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./checkout.css";

export default function CheckoutAddress() {
  
  const {products} = useSelector((store) => store.cartManager);
  console.log(products)
  const navigat = useNavigate();

  const [userData, setUserdata] = useState({});
  const token = localStorage.getItem("token");

  
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
  

  const getUser = async (token) => {
    await fetch(`https://shy-ruby-piglet.cyclic.app/users/user`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) =>{console.log(userData); setUserdata(res.user)})
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    getUser(token)
  
    localStorage.setItem("total",JSON.stringify(MRP))
    localStorage.setItem("res",JSON.stringify(res))
    localStorage.setItem("saving",JSON.stringify(saving))
  },[token])

  const handleContinue = () => {
    navigat("/checkoutpayment");
  };
  const {first_name,last_name,email,mobile,address}=userData;
  return (
    <div>
      <hr />
      <Heading p={"20px"} bg={"rgb(255, 204, 0)"}>
        CHECKOUT
      </Heading>

      <div className="checkout-main-container">
        <div className="shipping-container">
        
          <input placeholder="Full Name" type="text" value={`${first_name} ${last_name}`}/>
          
          <input placeholder="+91" type="text" value={email}/>
          
          <input placeholder="Country/Region" type="text"value={mobile}/>
          
          <input placeholder="Your Address" type="text" value={address}/>
        
          <br />
          <div className="checkbox-div">
            <input className="cart-checkbox" type="radio" />
            <p>Save this details for next shipment.</p>
          </div>
        </div>
        <div>
          <Heading as="h5">ORDER SUMMARY</Heading>
          <br />

          <div className="order-summary-fle-div">
            <p>Item Total  ({products.length}-Items)</p>
            <Heading color={"orange.500"} fontSize={"18px"}>
              {"  "}: Rs. {MRP}
            </Heading>
          </div>
          <div className="order-summary-fle-div">
            <p>Discount </p>
            <Heading color={"orange.500"} fontSize={"18px"}>
              {" "}
              : Rs.{saving}
            </Heading>
          </div>
          <div className="order-summary-fle-div">
            <p>Shipping</p>
            <Heading color={"orange.500"} fontSize={"18px"}>
              : FREE
            </Heading>
          </div>
          <hr />
          <div className="order-summary-fle-div">
            <p>Grand Total</p>
            <Heading color={"orange.500"} fontSize={"18px"}>
              : Rs.{res}
            </Heading>
          </div>
          
          <button onClick={handleContinue} className="redeem-apply-btn">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
