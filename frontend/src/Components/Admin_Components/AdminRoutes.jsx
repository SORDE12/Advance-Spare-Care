import React from 'react'
import {Route,Routes} from "react-router-dom";
import Dashboard from './Dashboard';

import Orders from './Orders';
import Customers from './Customers';
import ProductListing from './ProductListing';
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/listing" element={<ProductListing />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/customers" element={<Customers />} />
    </Routes>
  );
}

export default AdminRoutes