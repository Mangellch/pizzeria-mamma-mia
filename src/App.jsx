import './App.css'
import { Route, Routes } from 'react-router-dom'

import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Pizza from './components/pages/Pizza'
import Register from './components/pages/Register'
import Cart from './components/pages/Cart'
import NotFound from './components/pages/NotFound'
import Profile from './components/Profile'

import ProtectedRoute from './components/ProtectedRoute'  
import PublicRoute from './components/PublicRoute'        

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pizza/:pizzaId" element={<Pizza />} />
        <Route path="/cart" element={<Cart />} />

        {/* Ruta protegida */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Rutas públicas protegidas si ya hay sesión */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
