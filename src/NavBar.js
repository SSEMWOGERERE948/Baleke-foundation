import React, { useState, useEffect } from 'react';
import './NavBar.css'; // Import the CSS file for NavBar styles
import { slide as Menu } from 'react-burger-menu'; // Import the slide menu from react-burger-menu
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
    <div className="navbar-container">      
      <nav className="navbar">
        <ul className="navbar-list">
          {!isSmallScreen && (
            <>
              <li className="navbar-item">
                <NavLink to="/" className="navbar-link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/about" className="navbar-link" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/" className="navbar-link" activeClassName="active">
                  Causes
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/contact" className="navbar-link" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="donate-button">
          <a href="/donate" className="navbar-link donate-link">
            <div className="donate-card">
              <span className='span1'>Donate Now</span>
              <span className="arrow">&#10148;</span> {/* Arrow */}
            </div>
            <div className="overlay"></div> {/* Transparent overlay */}
          </a>
        </div>
      </nav>
    </div>
    </div>
    
  );
}

export default NavBar;
