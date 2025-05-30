import { formatPrice } from '../assets/helpers/formatPrice';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Pizzería Mamma Mia</a>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link border border-white text-white rounded px-3" href="#">🍕 Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link border border-white text-white rounded px-3" href="#">
                  {token ? '🔓 Profile' : '🔐 Login'}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link border border-white text-white rounded px-3" href="#">
                  {token ? '🔒 Logout' : '🔐 Register'}
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link border border-info text-info rounded px-3" href="#">
                  🛒 Total: {formatPrice(total)}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;