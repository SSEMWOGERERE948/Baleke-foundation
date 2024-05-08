import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink and useLocation
import './Slider.css';
import logo2 from './logo.png';
import backgroundImage from './baleke3.jpg';
import backgroundImage2 from './baleke2.jpg';
import backgroundImage4 from './baleke4.jpg';

const Slider = ({ textContent }) => {
  const backgroundImages = [backgroundImage, backgroundImage2, backgroundImage4];
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // Initialize isSmallScreen based on window width

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Update isSmallScreen based on window width
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [backgroundImages]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  let title, description;
  if (location.pathname === "/") {
    title = "Home Slider Title";
    description = "This is the description for the Home Slider.";
  } else if (location.pathname === "/about") {
    title = "About Slider Title";
    description = "This is the description for the About Slider.";
  } else {
    title = textContent[index]?.title || "";
    description = textContent[index]?.description || "";
  }


  return (
    <div className='slider-container'>
      <div className='menu-overlay' style={{ display: showMenu ? 'block' : 'none' }} onClick={toggleMenu}></div>
      <div className='home-container' style={{ backgroundImage: `url(${backgroundImages[index]})` }}>
        <div className="tint"></div>
        <div className="logo-container">
          <img src={logo2} alt="Baleke Logo" className="logo" />
          <div className="burger-menu">
            {isSmallScreen && (
              <button className="burger-menu-button" onClick={toggleMenu}>
              {showMenu ? (
                <span className="burger-menu-x">&times;</span> // Render "X" when menu is open
              ) : (
                <>
                 <span className="burger-menu-icon fa fa-bars"></span>
                </>
              )}
            </button>
            
            )}
          </div>
        </div>
        <div className="content-container">
          <h1 className='h1'>{title}</h1>
          <p className='para'>{description}</p>
        </div>
        {showMenu && isSmallScreen && (
          <div className="mobile-menu">
            <NavLink to="/" className="menu-item" activeClassName="active" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className="menu-item" activeClassName="active" onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/causes" className="menu-item" activeClassName="active" onClick={toggleMenu}>
              Causes
            </NavLink>
            <NavLink to="/contact" className="menu-item" activeClassName="active" onClick={toggleMenu}>
              Contact
            </NavLink>
            <NavLink to="/donate" className="menu-item" activeClassName="active" onClick={toggleMenu}>
              Donate
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Slider;