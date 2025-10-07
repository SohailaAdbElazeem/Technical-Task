import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={`${style.header}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className={`${style.logo} navbar-brand`} to="product">
            Ecommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`${style.brand} nav-link active text-success `}
                  aria-current="page"
                  to="product"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`${style.brand} nav-link  `}
                  aria-current="page"
                  to="product"
                >
                  Category
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`${style.brand} nav-link  `}
                  aria-current="page"
                  to="product"
                >
                  Cart
                </Link>
              </li>
            </ul>

            <div className={`${style.icon}`}>
              <i className="fas fa-user"></i>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
