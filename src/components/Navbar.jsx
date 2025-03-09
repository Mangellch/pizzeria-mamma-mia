import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatTotal } from "../helpers/helpers.js";

const Navbar = () => {
  const { total, cart } = useCart(); // Obtener el total y el carrito desde el contexto
  const cartItemCount = cart.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center me-auto">
          <p className="navbar-brand mb-0">Pizzería Mamma Mía!</p>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav d-flex gap-2">
            <Link to="/" className="btn btn-outline-light">🍕 Home</Link>
            <Link to="/profile" className="btn btn-outline-light">📝 Profile</Link>
            <Link to="/login" className="btn btn-outline-light">🔐 Login</Link>
            <Link to="/register" className="btn btn-outline-light">📝 Register</Link>
          </div>
          <div className="ms-auto">
            <Link to="/cart" className="btn btn-outline-warning">
              🛒 Total: ${formatTotal(total)} 
              {cartItemCount > 0 && <span className="badge bg-danger ms-2">{cartItemCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
