import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // ✅ added useNavigate
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // ✅ added

  const isActive = (path) =>
    location.pathname === path ? styles.active : "";

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        {/* LOGO */}
        <div className={styles.logo}>
          <Link to="/">Kognivex</Link>
        </div>

        {/* NAV LINKS */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <Link to="/" className={isActive("/")}>Home</Link>
          <Link to="/about" className={isActive("/about")}>About</Link>
          <Link to="/services" className={isActive("/services")}>Services</Link>
          <Link to="/projects" className={isActive("/projects")}>Projects</Link>
          <Link to="/blog" className={isActive("/blog")}>Blog</Link>
          <Link to="/careers" className={isActive("/careers")}>Careers</Link>
          <Link to="/contact" className={isActive("/contact")}>Contact</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <button 
            className={styles.cta}
            onClick={() => navigate("/get-quote")}  // ✅ added
          >
            Get a Quote
          </button>

          <div
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;