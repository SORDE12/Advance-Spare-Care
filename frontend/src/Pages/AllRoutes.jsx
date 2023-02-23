import React from 'react'
import Dashboard from '../Components/Admin_Components/Dashboard'
import { Route, Routes } from "react-router-dom";
import Listing from '../Components/Admin_Components/Listing';
import Orders from '../Components/Admin_Components/Orders';
import Customers from '../Components/Admin_Components/Customers';
const AllRoutes = () => {
  return (

    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );

}

export default AllRoutes