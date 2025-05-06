import React, { useEffect } from 'react';
import './about.css';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import Translate from '../../translations/Translate';
import { english, hindi } from '../../translations/translations';
import constillationImage from '../../assets/Constillation.png';

const About = () => {
  const { language } = useLanguage();

  useEffect(() => {
    console.log('About component mounted');
    document.title = 'Vedic Ashram - About Us';
  }, []);

  return (
    <div className="about-container">
      <Navbar />

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div style={{ height: '100px' }}></div>

      {/* Main Content with Dark Theme */}
      <div className="about-main-content">
        <div className="about-header">
          <h1 style={{ color: '#fff' }}><b>VEDICASHRAM</b>: <span className="tagline"><Translate textKey="aboutTitle" /></span></h1>
        </div>

        {/* About content with image and intro */}
        <div className="about-content-wrapper">
          <div className="about-image-container">
            <img src={constillationImage} alt="Constellation" className="constillation-image" />
          </div>

          <div className="about-text-container">
            <p className="intro-paragraph">
              <Translate textKey="aboutIntro" />
            </p>

            {/* What We Do section - placed parallel to the image */}
            <div className="about-section">
              <h2><Translate textKey="whatWeDoTitle" /></h2>
              <p style={{ color: '#fff' }}>
                <Translate textKey="whatWeDo" />
              </p>
            </div>
          </div>
        </div>

        {/* Full-width about sections placeholder - can be used for additional content */}
        <div className="full-width-sections">
        </div>
      </div>

      {/* Full-width about sections */}
      <div className="full-width-sections">
        <div className="about-section full-width fullwidth">
          <h2><Translate textKey="whyVedicAshramTitle" /></h2>
          <p>
            <Translate textKey="whyVedicAshram1" />
          </p>
          <p>
            <Translate textKey="whyVedicAshram2" />
          </p>
        </div>
      </div>

      {/* Clear both to ensure content below takes full width */}
      <div style={{ clear: 'both', width: '100%', display: 'block', height: '1px' }}></div>

      {/* Astrologer and Contact Form Section */}
      <div className="astrologer-contact-section">
        <div className="astrologer-section">
          <h2><Translate textKey="expertAstrologer" /></h2>
          <div className="astrologer-profile">
            <div className="astrologer-image">
              <img src="/astrologer.jpg" alt="Expert Astrologer" onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x300/6a0dad/ffffff?text=Astrologer";
              }} />
            </div>
            <div className="astrologer-info">
              <h3><Translate textKey="astrologerName" /></h3>
              <p className="astrologer-specialization"><Translate textKey="astrologerSpecialization" /></p>
              <div className="astrologer-rating">
                <span><Translate textKey="astrologerRating" /></span>
                <span className="rating-count">(<Translate textKey="consultations" />)</span>
              </div>
              <p className="astrologer-description">
                <Translate textKey="astrologerDescription" />
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-container">
            <h2><Translate textKey="getFreeGuidance" /></h2>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={language === 'hindi' ? hindi.name : english.name}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={language === 'hindi' ? hindi.email : english.email}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder={language === 'hindi' ? hindi.mobileNumber : english.mobileNumber}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="gender"
                    required
                  >
                    <option value="" disabled selected><Translate textKey="gender" /></option>
                    <option value="male"><Translate textKey="male" /></option>
                    <option value="female"><Translate textKey="female" /></option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <select
                    name="maritalStatus"
                    required
                  >
                    <option value="" disabled selected><Translate textKey="maritalStatus" /></option>
                    <option value="Married"><Translate textKey="married" /></option>
                    <option value="Unmarried"><Translate textKey="unmarried" /></option>
                    <option value="Widow/Widower"><Translate textKey="widowWidower" /></option>
                    <option value="Divorced"><Translate textKey="divorced" /></option>
                    <option value="Live In"><Translate textKey="liveIn" /></option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="birthDate"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="birthPlace"
                    placeholder={language === 'hindi' ? hindi.birthPlace : english.birthPlace}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="number"
                    name="birthHour"
                    placeholder={language === 'hindi' ? hindi.birthHour : english.birthHour}
                    min="0"
                    max="23"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="birthMinute"
                    placeholder={language === 'hindi' ? hindi.birthMinute : english.birthMinute}
                    min="0"
                    max="59"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="birthSecond"
                    placeholder={language === 'hindi' ? hindi.birthSecond : english.birthSecond}
                    min="0"
                    max="59"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="concern"
                  placeholder={language === 'hindi' ? hindi.askConcern : english.askConcern}
                  maxLength="500"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <button type="submit" className="submit-btn"><Translate textKey="submit" /></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Space before footer */}
      <div className="footer-spacer"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;