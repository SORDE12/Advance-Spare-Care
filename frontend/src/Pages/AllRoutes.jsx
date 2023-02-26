import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProducts from "../Components/Admin_Components/AddProducts";
import AdminLogin from "../Components/Admin_Components/AdminLogin";
import Dashboard from "../Components/Admin_Components/Dashboard";
import Orders from "../Components/Admin_Components/Orders";
import ProductListing from "../Components/Admin_Components/ProductListing";
import Homepage from "./Homepage";
import Login from "./Login";
import Cart from "./Cart";
import Products from "./productsPage/Products";
import Userpage from "./Userpage";
import Loading from "./Loading";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutPayment from "./CheckoutPayment";
import PatnersPage from "../Components/Admin_Components/PatnersPage";
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
            <Register />
        }
      />
      <Route path="/products" element={<Products />} />
      {/* user page */}
      <Route path="/user" element={<Userpage />} />
      {/* admin page */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/listing" element={<ProductListing />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/patners" element={<PatnersPage />} />
      <Route path="/admin/addproducts" element={<AddProducts />} />
      <Route path="/user" element={<Userpage />} />
      <Route path="/checkoutaddress"  element={<PrivateRoute><CheckoutAddress  /></PrivateRoute>}/>
      <Route path="/checkoutpayment" element={<PrivateRoute><CheckoutPayment /></PrivateRoute>}  />
      <Route path="/loading" element={<Loading />}  />
      <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
    </Routes>
  );
};

export default AllRoutes;