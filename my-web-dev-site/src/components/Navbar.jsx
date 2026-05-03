import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">

      {/* LOGO */}
      <NavLink to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Brits Web Solutions" />
        <span>Brits Web Solutions</span>
      </NavLink>

      {/* DESKTOP NAV */}
      <nav className="desktop-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* HAMBURGER */}
      <div className={`hamburger ${open ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
            <NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}