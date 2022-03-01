import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import NavBarIn from '../components/NavBarIn'

const LogInComponents = () => {
  return (
    <>
    <NavBarIn  />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
    </Routes>
    </>
  )
}

export default LogInComponents