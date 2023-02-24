

import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Userpage from "./Userpage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      
      {/* user page */}
      <Route path="/user" element={<Userpage />} />
    </Routes>
  )
}


export default AllRoutes;
