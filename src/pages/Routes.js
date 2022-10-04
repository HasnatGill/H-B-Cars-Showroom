import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontend from '../pages/Frontend'
import Auth from '../pages/Authentication'

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' />
                <Route index element={<Frontend />} />
                <Route path='/auth/*' element={<Auth />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Index
