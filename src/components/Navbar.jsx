import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
  <img src={logo} alt="Brits Web Solutions" />
  <span>Brits Web Solutions</span>
</div>

      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          About
        </NavLink>

        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>
          Portfolio
        </NavLink>

        <NavLink to="/pricing" className={({ isActive }) => isActive ? "active" : ""}>
          Pricing
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}