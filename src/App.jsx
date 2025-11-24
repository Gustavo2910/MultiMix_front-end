import { useState } from 'react'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/products'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Navigate to="/Home" />}/>
        <Route  path="/login" element={<Login />} />
         <Route  path="/register" element={<Register />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route  path="/products" element={<Products />} />
         <Route  path="/Home" element={<Home />} />
         
      </Routes>
    </BrowserRouter>
  )
}

export default App;
