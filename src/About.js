import React from "react";
import { Link } from "react-router-dom";
import backgroundImage4 from './baleke4.jpg';
import Layout from './Layout';
import './About.css';

const About = () => {
  const textContent = [
    { title: "LET'S TRANSFORM THE WORLD", description: "With compassion, empathy, and unity" },
    { title: "LET'S TRANSFORM THE COUNTRY", description: "With compassion, empathy, and unity" },
    { title: "LET'S TRANSFORM THE CONTINENT", description: "With compassion, empathy, and unity" },
  ];

  return (
    <div>
      <header className="hero">
        <h1 className="hero-text">Welcome to Baleke Foundation</h1>
      </header>

      <section className='about top'>
        <div className='container'>
          <div className="about-container">
            <div className="about-content">
              <div className="about-text">
                <h2 className="about-heading">About Baleke Foundation</h2>
                <p className="about-description">
                  The Baleke Foundation was inspired by the vision and dedication of Praise Jovia Baleke.
                  Founded on principles of compassion, empathy, and unity, the foundation aims to transform
                  communities through various initiatives and projects.
                </p>
                <p className="about-description">
                  Praise Jovia Baleke's unwavering commitment to positive change has driven the foundation
                  to strive for excellence in every endeavor, touching the lives of many and leaving a lasting impact.
                </p>
                <p className="about-description">
                  Join us on our journey to make the world a better place, one step at a time.
                </p>
                <div className="about-line"></div> {/* Green line */}
              </div>
              <div className="about-images">
              <div className="image-gallery">
                <div className="image-container">
                  <img src={backgroundImage4} alt="Baleke Foundation" className="about-image" />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className='testimonials'>
  <div className='container'>
    <h2 className='section-heading'>What Our Supporters Say</h2>
    <div className='testimonial-slider'>
      <div className='testimonial-card'>
        <img src={backgroundImage4} alt='Supporter 1' className='testimonial-image' />
        <p className='testimonial-text'>"Baleke Foundation has truly made a difference in our community. Their dedication and commitment to positive change are admirable."</p>
        <p className='testimonial-author'>- John Doe</p>
      </div>
      <div className='testimonial-card'>
        <img src={backgroundImage4} alt='Supporter 2' className='testimonial-image' />
        <p className='testimonial-text'>"I'm proud to support Baleke Foundation's initiatives. They are making a significant impact, one project at a time."</p>
        <p className='testimonial-author'>- Jane Smith</p>
      </div>
      <div className='testimonial-card'>
        <img src={backgroundImage4} alt='Supporter 2' className='testimonial-image' />
        <p className='testimonial-text'>"I'm proud to support Baleke Foundation's initiatives. They are making a significant impact, one project at a time."</p>
        <p className='testimonial-author'>- Jane Smith</p>
      </div>
      <div className='testimonial-card'>
        <img src={backgroundImage4} alt='Supporter 2' className='testimonial-image' />
        <p className='testimonial-text'>"I'm proud to support Baleke Foundation's initiatives. They are making a significant impact, one project at a time."</p>
        <p className='testimonial-author'>- Jane Smith</p>
      </div>
      <div className='testimonial-card'>
        <img src={backgroundImage4} alt='Supporter 2' className='testimonial-image' />
        <p className='testimonial-text'>"I'm proud to support Baleke Foundation's initiatives. They are making a significant impact, one project at a time."</p>
        <p className='testimonial-author'>- Jane Smith</p>
      </div>
      {/* Add more testimonial cards here */}
    </div>
  </div>
</section>

      
      <section className='additional-info'>
        <div className='container'>
          <h2 className='section-heading'>Why Choose Baleke Foundation?</h2>
          <div className='info-cards'>
            <div className='info-card'>
              <h3>Impactful Initiatives</h3>
              <p>Our projects are designed to create real, lasting change in communities.</p>
            </div>
            <div className='info-card'>
              <h3>Community Engagement</h3>
              <p>We believe in working closely with communities to ensure sustainable development.</p>
            </div>
            <div className='info-card'>
              <h3>Transparency</h3>
              <p>We are committed to transparency and accountability in all our endeavors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='progress-bar'>
        <div className='container'>
          <h2 className='section-heading'>Join Our Journey</h2>
          <div className='progress-container'>
            <div className='progress'>
              <div className='progress-done' style={{width: '70%'}}>
                70%
              </div>
            </div>
          </div>
          <p>Help us reach our goals and make a difference.</p>
          <button className='primary-btn'>
            <Link to="/Join" className="link">
              Get Involved <i className='fas fa-long-arrow-alt-right'></i>
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
