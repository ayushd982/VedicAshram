import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Vedic Ashram</h3>
            <p>Preserving and sharing the ancient wisdom of Vedic Astrology for spiritual growth and self-awareness.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/vedic-astrology">Vedic Astrology</Link></li>
              <li><Link to="/vastu">Vastu</Link></li>
              <li><Link to="/hawan">Yagya/Hawan</Link></li>
              <li><Link to="/training">Training Program</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/birth-chart">Birth Chart Analysis</Link></li>
              <li><Link to="/compatibility">Relationship Compatibility</Link></li>
              <li><Link to="/career">Career Guidance</Link></li>
              <li><Link to="/muhurta">Muhurta (Electional Astrology)</Link></li>
              <li><Link to="/remedies">Astrological Remedies</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Spiritual Path, New Delhi, India</p>
            <p><i className="fas fa-envelope"></i> info@vedicashram.com</p>
            <p><i className="fas fa-phone"></i> +91 98765 43210</p>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vedic Ashram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;