import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./checkout.css";
import { MdArrowRight } from "react-icons/md";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

export default function CheckoutPayment() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [cardNo, setCardNo] = useState("");
  const [validMonthYear, setValidMonthYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  const navigate = useNavigate();

  const HandleContinue = () => {
    const payload = {
      cardNo,
      validMonthYear,
      cvv,
      cardHolderName,
    };
    localStorage.setItem("card", JSON.stringify(payload));
    navigate("/loading");
  };

  return (
    <div>
      <div>
        <hr />
        <Heading bg={"rgb(255, 204, 0)"} p={"20px"}>
          CHECKOUT
        </Heading>

        <div className="checkout-main-container">
          <div>
            <Heading textAlign={"center"} size="lg">
              PAYMENT METHOD
            </Heading>

            <div className="payment-method-div">
              <button className="payment-card-flex-btn" onClick={onOpen}>
                <p>Debit/Credit Card</p>
                <MdArrowRight size="30" />
              </button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader style={{ margin: "auto" }}>
                    ADD CARD DETAILS
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody className="cart-detail-box">
                    <Heading
                      size="20"
                      mt="10px"
                      bg={"yellowgreen"}
                      p={"5px"}
                      textAlign={"center"}
                    >
                      DEBIT/CREDIT CARD
                    </Heading>
                    <input
                      type="text"
                      placeholder="Card Number*"
                      onChange={(e) => setCardNo(e.target.value)}
                    />
                    <div style={{ gap: "10%" }}>
                      <input
                        type="text"
                        placeholder="Valid (MM/YY)*"
                        onChange={(e) => setValidMonthYear(e.target.value)}
                      />

                      <input
                        type="password"
                        placeholder="CVV*"
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Name on Card*"
                      onChange={(e) => setCardHolderName(e.target.value)}
                    />

                    <p style={{ margin: "20px 0px", fontWeight: "bold" }}>
                      *We do not store your card details with us
                    </p>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      className="modal-add-address-btn"
                      bg="rgb(255, 204, 0)"
                      onClick={HandleContinue}
                    >
                      CONTINUE
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <div className="payment-card-option">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/paytm-226448.png?f=avif&w=256"
                  alt=""
                />
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/mastercard-10-226450.png?f=avif&w=256"
                  alt=""
                />
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/amex-american-business-buy-card-cart-cash-checkout-donate-express-financial-33550.png?f=avif&w=256"
                  alt=""
                />
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/payment-visa-card-pay-checkout-transaction-bank-51303.png?f=avif&w=256"
                  alt=""
                />
                <img
                  src="https://trak.in/wp-content/uploads/2022/09/Rupay-Cards-Big.jpeg"
                  alt=""
                />
              </div>
              <hr style={{ margin: "10px" }} />
              <button className="payment-card-flex-btn">
                <p>UPI</p>
                <MdArrowRight size="30" />
              </button>
              <hr style={{ margin: "10px" }} />
              <button className="payment-card-flex-btn">
                <p>PhonePe</p>
                <MdArrowRight size="30" />
              </button>
              <hr style={{ margin: "10px" }} />
              <button className="payment-card-flex-btn">
                <p>Paytm</p>
                <MdArrowRight size="30" />
              </button>
              <hr style={{ margin: "10px" }} />
              <button className="payment-card-flex-btn">
                <p>Net Banking</p>
                <MdArrowRight size="30" />
              </button>
              <hr style={{ margin: "10px" }} />
              <button className="payment-card-flex-btn">
                <p>COD</p>
                <MdArrowRight size="30" />
              </button>
            </div>
          </div>

          <div>
            <Heading as="h5">ORDER SUMMARY</Heading>
            <br/>
            <div className="order-summary-fle-div">
              <p>Item Total(1 Items)</p>
              <Heading  color={"orange.500"} fontSize={"18px"}>{"  "}: Rs.{JSON.parse(localStorage.getItem("total"))}</Heading>
            </div>
            <div className="order-summary-fle-div">
              <p>Discount{" "}</p>
              <Heading  color={"orange.500"} fontSize={"18px"} >
              {" "}: Rs.{JSON.parse(localStorage.getItem("saving"))}
              </Heading>
            </div>
            <div className="order-summary-fle-div">
              <p>Shipping</p>
              <Heading  color={"orange.500"} fontSize={"18px"}>
                : FREE
              </Heading>
            </div>
            <hr />
            <div className="order-summary-fle-div">
              <p>Grand Total</p>
              <Heading  color={"orange.500"} fontSize={"18px"}>: Rs.{JSON.parse(localStorage.getItem("total"))}</Heading>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
