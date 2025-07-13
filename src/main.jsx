import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from "./context/CartContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
)
