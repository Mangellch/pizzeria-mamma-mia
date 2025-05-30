import { formatPrice } from '../assets/helpers/formatPrice';

const Navbar = () => {

  const total = 25000;
  const token = false;

  return (
  <div>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">Pizzería Mamma Mia</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link border border-white text-white rounded px-3" href="#">🍕 Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link border border-white text-white rounded px-3" href="#">🔐 Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link border border-white text-white rounded px-3" href="#">🔐 Register</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link border border-info text-info rounded px-3" href="#">🛒 Total: {formatPrice(total)}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  )
}

export default Navbar