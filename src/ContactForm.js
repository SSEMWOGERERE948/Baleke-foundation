import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Contact.css'; // Import your CSS file
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <div className="contact-form-card">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button className='button' type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-group">
            <i className="fas fa-map-marker-alt"></i>
            <p>Baleke Foundation, Kampala Uganda</p>
          </div>
          <div className="info-group">
            <i className="fas fa-phone"></i>
            <p>+256 123 456 7890</p>
          </div>
          <div className="social-icons">
            <h2>Follow Us</h2>
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
      </div>
    </div>
  );
};

export default ContactForm;
