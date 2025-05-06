import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" style={{ marginBottom: 0, paddingBottom: 0 }}>
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            {/* About Section */}
            <div className="footer-section about">
              <h3 className="footer-heading">About Vedic Ashram</h3>
              <p>
                Vedic Ashram is a premier institution dedicated to Vedic astrology,
                vastu shastra, and spiritual guidance. We help individuals navigate
                life's challenges through ancient wisdom and modern approaches.
              </p>
              <div className="contact-info">
                <p><i className="fas fa-map-marker-alt"></i> Noida sec-132, Urbtech Centre, Tower-A near DPS School</p>
                <p><i className="fas fa-phone"></i> +91 9958807444</p>
                <p><i className="fas fa-envelope"></i> info@vedicashram.com</p>
              </div>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://wa.me/919958807444" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="footer-section links">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="footer-section services">
              <h3 className="footer-heading">Our Services</h3>
              <ul className="footer-links">
                <li><Link to="/services/vedic-astrology">Vedic Astrology</Link></li>
                <li><Link to="/services/vastu-shastra">Vastu Shastra</Link></li>
                <li><Link to="/services/numerology">Numerology</Link></li>
                <li><Link to="/services/kundali-matching">Kundali Matching</Link></li>
                <li><Link to="/services/birth-chart">Birth Chart Analysis</Link></li>
                <li><Link to="/services/gemstone-recommendation">Gemstone Recommendation</Link></li>
                <li><Link to="/services/puja-services">Puja Services</Link></li>
                <li><Link to="/services/career-guidance">Career Guidance</Link></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="footer-section newsletter">
              <h3 className="footer-heading">Subscribe to Newsletter</h3>
              <p>Stay updated with our latest insights and special offers.</p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
              <div className="payment-methods">
                <h4>Secure Payment Options</h4>
                <div className="payment-icons">
                  <i className="fab fa-cc-visa"></i>
                  <i className="fab fa-cc-mastercard"></i>
                  <i className="fab fa-cc-paypal"></i>
                  <i className="fab fa-google-pay"></i>
                  <i className="fab fa-apple-pay"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom" style={{ marginBottom: 0, paddingBottom: 0 }}>
        <div className="container" style={{ marginBottom: 0, paddingBottom: 0 }}>
          <p style={{ marginBottom: 0 }}>&copy; {currentYear} Vedic Ashram. All Rights Reserved.</p>
          <div className="footer-bottom-links" style={{ marginBottom: 0, paddingBottom: 0 }}>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-conditions">Terms & Conditions</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;