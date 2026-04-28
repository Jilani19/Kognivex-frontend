import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) =>
    location.pathname === path ? styles.active : "";

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
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
            onClick={() => navigate("/get-quote")}
          >
            Get a Quote
          </button>

          <div
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;