import React from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
    console.log("App se está renderizando");
    return (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    );
  }
  
  export default App;