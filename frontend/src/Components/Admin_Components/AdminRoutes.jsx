import React from 'react'
import {Route,Routes} from "react-router-dom";
import Dashboard from './Dashboard';
import Listing from './Listing';
import Orders from './Orders';
import Customers from './Customers';
const AdminRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
}

export default AdminRoutes