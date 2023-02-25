import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Products from './productsPage/Products'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route  path='/products' element={<Products/>}/>
    </Routes>
  )
}

export default AllRoutes