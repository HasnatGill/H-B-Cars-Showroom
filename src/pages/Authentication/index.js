import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Forgetpassword from './Forgetpassword'
import Login from './Login'
import Register from './Register'
function index() {
    return (
        <>
            <Routes>
                <Route path='/' />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='forgetpassword' element={<Forgetpassword />} />
            </Routes>
        </>
    )
}

export default index
