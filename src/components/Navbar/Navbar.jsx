import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/dtechlabs.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/divisions', label: 'Divisions' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="logo">
              <img src={logo} alt="D. Huhu Techlabs Logo" />
            </Link>
            
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className={location.pathname === item.path ? 'active' : ''}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="cta-button">
                <Link to="/contact" className="btn-primary" onClick={closeMenu}>
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </nav>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;