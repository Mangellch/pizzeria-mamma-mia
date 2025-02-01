import React from 'react'
import {formatTotal} from '../helpers/helpers.js'


const Navbar = () => {
  const total = 25000;
  const token = false
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <div className="navbar-items d-flex gap-2">
          <p className="navbar-brand"> Pizzería Mamma Mía!</p>
          <button className="btn btn-outline">🍕 Home</button>
          <button className="btn btn-outline">🔓 Profile</button>
          <button className="btn btn-outline">🔒 Logout</button>
          <button className="btn btn-outline">🔐 Login</button>
          <button className="btn btn-outline">🔐 Register</button>
          <button className="btn btn-outline">🛒 Total: ${formatTotal(total)}</button>

        </div>
      </div>
    </nav>
  );
};


export default Navbar;