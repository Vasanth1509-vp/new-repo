import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollDirection } from '../hooks/useScrollDirection';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const visible = useScrollDirection();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle body class and scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/implementations', label: 'Implementations' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/blogs', label: 'Blogs' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="navbar-brand">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>VP</Link>
      </div>

      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div 
        className={`navbar-links ${isMenuOpen ? 'active' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={isActive(item.path) ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 