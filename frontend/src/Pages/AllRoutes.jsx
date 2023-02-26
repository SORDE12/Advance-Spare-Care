import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

import Cart from "./Cart";
import Login from "./Login";
import Products from "./productsPage/Products";
import Userpage from "./Userpage";
import Loading from "./Loading";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutPayment from "./CheckoutPayment";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/register"
        element={
          <PrivateRoute>
            <Register />
          </PrivateRoute>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/user" element={<Userpage />} />
      <Route path="/checkoutaddress" element={<CheckoutAddress />} />
      <Route path="/checkoutpayment" element={<CheckoutPayment />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
    </Routes>
  );
};

export default AllRoutes;
