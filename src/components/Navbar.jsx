import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar-header">
      <div className="container">
        <p className="logo">CrediSmart</p>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "activo" : ""}>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/simular"
                className={location.pathname === "/simular" ? "activo" : ""}
              >
                Simular crédito
              </Link>
            </li>
            <li>
              <Link
                to="/solicitar"
                className={location.pathname === "/solicitar" ? "activo" : ""}
              >
                Solicitar crédito
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
