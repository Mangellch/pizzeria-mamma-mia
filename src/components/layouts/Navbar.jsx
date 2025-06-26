import React from 'react';
import { Link } from 'react-router-dom';

import { formatPrice } from '../../assets/helpers/formatPrice';

const Navbar = () => {
  const total = 25000;

  const handleLogout = () => {
    alert("Cerrar sesión (funcionalidad aún no implementada)");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Pizzería Mamma Mia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link border border-white text-white rounded px-3"
                to="/"
              >
                🍕 Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link border border-white text-white rounded px-3"
                to="/profile"
              >
                🔓 Profile
              </Link>
            </li>

            <li className="nav-item">
              {/* Logout como botón para disparar alerta */}
              <button
                className="nav-link btn btn-link border border-white text-white rounded px-3"
                style={{ cursor: 'pointer' }}
                onClick={handleLogout}
              >
                🔒 Logout
              </button>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link border border-white text-white rounded px-3"
                to="/login"
              >
                🔐 Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link border border-white text-white rounded px-3"
                to="/register"
              >
                🔐 Register
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link border border-info text-info rounded px-3"
                to="/cart"
              >
                🛒 Total: {formatPrice(total)}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
