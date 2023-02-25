import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./checkout.css";

export default function CheckoutAddress() {
  const navigat = useNavigate();

  const handleContinue = () => {
    navigat("/checkoutpayment");
  };

  return (
    <div>
      <hr />
      <Heading p={"20px"} bg={"rgb(255, 204, 0)"}>
        CHECKOUT
      </Heading>

      <div className="checkout-main-container">
        <div className="shipping-container">
          <p>Name</p>
          <input placeholder="Full Name" type="text" />
          <p>Phone Number</p>
          <input placeholder="+91" type="text" />
          <p>Country</p>
          <input placeholder="Country/Region" type="text" />
          <p>Address</p>
          <input placeholder="Your Address" type="text" />
          <p>ZIP Code</p>
          <input placeholder="Pin Code" type="text" />
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
            <p>Item Total(1 Items)</p>
            <Heading color={"orange.500"} fontSize={"18px"}>
              {"  "}: Rs.234
            </Heading>
          </div>
          <div className="order-summary-fle-div">
            <p>Discount </p>
            <Heading color={"orange.500"} fontSize={"18px"}>
              {" "}
              : Rs.1999
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
              : Rs.2198
            </Heading>
          </div>
          <div className="order-summary-fle-div">
            <p>(Inclusive of Taxes)</p>
            <Heading color={"orange.500"} fontSize={"18px"}>
              : You Saved Rs.1999
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
