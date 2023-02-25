

import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Homepage from './Homepage'
import Login from './Login'

import Products from './productsPage/Products'
import Userpage from "./Userpage";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route  path='/products' element={<Products/>}/>
      <Route path="/user" element={<Userpage />} />
      <Route path="/carts" element={<Cart/>}/>
    </Routes>
  )
}


export default AllRoutes;
