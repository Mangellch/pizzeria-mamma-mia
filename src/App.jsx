import './App.css'
import {Route, Routes} from 'react-router-dom'

import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Pizza from './components/pages/Pizza'
import Register from './components/pages/Register'
import Cart from './components/pages/Cart'
import NotFound from './components/pages/NotFound'

import Profile from './components/Profile'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pizza/:pizzaId" element={<Pizza />} />
        <Route path="/home" element={<Home/>} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App