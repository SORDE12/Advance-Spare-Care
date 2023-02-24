import React from "react";
import { Route, Routes } from "react-router-dom";
import Userpage from "./Userpage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* user page */}
        <Route path="/user" element={<Userpage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
