import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes