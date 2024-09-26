import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../src/components/Home'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default Routers
