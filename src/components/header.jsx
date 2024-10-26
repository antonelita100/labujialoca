import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./header.css";
import logo from '../assets/Logo.png';

const Navigation = function () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductPage, setIsProductPage] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Para el efecto de scroll
  const location = useLocation();

  // Detecta si estás en la página de detalles de productos
  useEffect(() => {
    if (location.pathname.startsWith("/product/")) {
      setIsProductPage(true);
    } else {
      setIsProductPage(false);
    }
  }, [location]);

  // Efecto de scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia el valor según el scroll deseado
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isProductPage ? 'product-page' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <Link to="/#home"><img src={logo} alt="logo la bujia loca" /></Link>
        </div>
        <div className={`nav_container ${isMenuOpen ? 'active' : ''}`}>
          <nav className="navbar">
            <ul>
              <li><Link className="nav_item" to="/#home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link className="nav_item" to="/#services" onClick={() => setIsMenuOpen(false)}>Servicios</Link></li>
              <li><Link className="nav_item" to="/#products" onClick={() => setIsMenuOpen(false)}>Productos</Link></li>
              <li><Link className="nav_item" to="/#about" onClick={() => setIsMenuOpen(false)}>Sobre nosotros</Link></li>
              <li><Link className="nav_item contact-button" to="/#contact" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
