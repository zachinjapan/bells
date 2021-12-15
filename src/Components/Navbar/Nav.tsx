import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "../Navbar/Nav.css";

const Nav = () => {
  return (
    <nav className="Nav">
      <div>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
      <div>
        <Link className="nav-link" to="/newsletter">
          Newsletter
        </Link>
      </div>
      <div>
        <Link className="nav-link" to="/media">
          Media
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
