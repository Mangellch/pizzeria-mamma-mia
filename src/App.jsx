import React from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer'

function App() {
    console.log("App se está renderizando");
    return (
      <>
        <Navbar />
        {/* <Home /> */}
        {/*<Register /> */}
        <Login/>
        <Footer />
      </>
    );
  }
  
  export default App;