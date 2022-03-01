import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../components/Login';
import NavBarOut from '../components/NavBarOut';
import SingIn from '../components/SingIn';

const LogOutComponents = () => {
    return (
        <>
            <NavBarOut />
            <Routes>
            <Route path='/register' element={<SingIn />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Navigate to='/login/login' />} />
            </Routes>
        </>
    )
}

export default LogOutComponents