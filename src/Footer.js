import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-box">
          <h2>Baleke Foundation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec est id magna consectetur fermentum.
          </p>
          <div className="icon">
            <SocialIcon
              className="social-icon"
              url="https://www.facebook.com"
              bgColor="#000000"
            />
            <SocialIcon
              className="social-icon"
              url="https://www.twitter.com"
              bgColor="#000000"
            />
            <SocialIcon
              className="social-icon"
              url="https://www.instagram.com"
              bgColor="#000000"
            />
            <SocialIcon
              className="social-icon"
              url="https://www.tiktok.com"
              bgColor="#000000"
            />
          </div>
        </div>

        <div className="footer-box">
          <h2>Navigation</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Causes</Link>
            </li>
            <li>
              <Link to="/destinations">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Donate</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="legal">
        <p>© 2024 Baleke Foundation. All rights reserved.</p>
        <p>Designed by Ssemwogerere Trevor</p>
      </div>
    </footer>
  );
};

export default Footer;
