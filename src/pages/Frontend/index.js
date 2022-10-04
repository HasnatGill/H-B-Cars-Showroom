import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
function index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' />
                    <Route index element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default index
