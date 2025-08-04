import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbarr ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        {/* Logo */}
        <Link to="/" className="logo-container">
          <span className="logo">Elysian Escapes</span>
          <span className="logo-subtitle">LUXURY RESORTS</span>
        </Link>

        {/* Navigation Links */}
        <div className={`navLinks ${mobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" className="nav-link-wrapper">
                <span className="nav-link-text">Home</span>
                <span className="nav-link-hover"></span>
              </Link>
            </li>
            <li>
              <Link to="/FeaturesPage" className="nav-link-wrapper">
                <span className="nav-link-text">Rooms</span>
                <span className="nav-link-hover"></span>
              </Link>
            </li>
            <li>
              <Link to="/FeaturesPage" className="nav-link-wrapper">
                <span className="nav-link-text">Amenities</span>
                <span className="nav-link-hover"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link-wrapper">
                <span className="nav-link-text">Contact</span>
                <span className="nav-link-hover"></span>
              </Link>
            </li>

          {/* ✅ Show Admin Panel link only for admins */}
            {user?.isAdmin && (
              <li>
                <Link to="/admin" className="bookBtn">
                  <span className="btn-text">Admin Panel</span>
                </Link>
              </li>
            )}
            {/* User Greeting if logged in */}
            {user && (
              <li className="user-greeting">
                <span>Welcome, {user.username}</span>
              </li>
            )}
          </ul>

          {/* Auth Buttons (only if not logged in) */}
          {!user && (
            <div className="auth-buttons">
              <Link to="/register">
                <button className="bookBtn">
                  <span className="btn-text">Register</span>
                  <span className="btn-icon">→</span>
                </button>
              </Link>
              <Link to="/login">
                <button className="bookBtn">
                  <span className="btn-text">Login</span>
                  <span className="btn-icon">→</span>
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <div
          className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
