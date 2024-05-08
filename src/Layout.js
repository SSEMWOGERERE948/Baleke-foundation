// Layout.js

import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import './Layout.css'; // Import the CSS file for layout styles

const Layout = ({ children, slider }) => {
  return (
    <div className="layout-container">
      <NavBar />
      {slider}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
