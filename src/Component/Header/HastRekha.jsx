import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import { FaHandPaper, FaHeart, FaBrain, FaStar, FaUpload } from 'react-icons/fa';
import './HastRekha.css';

const HastRekha = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      mainHeading: "Hast Rekha Jyotish: Decode Your Destiny Through Palm Lines",
      subHeading: "Unlock the secrets of your future, personality, and karmic patterns through the ancient science of palmistry.",
      // Add other English content
    },
    hindi: {
      mainHeading: "हस्त रेखा ज्योतिष: अपनी हथेली की रेखाओं से जानें अपनी नियति",
      subHeading: "हस्त रेखा विज्ञान के माध्यम से अपने भविष्य, व्यक्तित्व और कार्मिक पैटर्न के रहस्यों को जानें।",
      // Add other Hindi content
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="content-wrapper">
          <button className="language-toggle" onClick={() => setLanguage(language === 'english' ? 'hindi' : 'english')}>
            {language === 'english' ? 'हिंदी में देखें' : 'View in English'}
          </button>

          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <h2 className="sub-heading">{content[language].subHeading}</h2>

          <section className="section">
            {/* Introduction Section */}
          </section>

          <section className="section">
            <div className="palm-line-grid">
              <div className="palm-line-card">
                <FaHandPaper />
                <div>
                  <h3>Life Line</h3>
                  <p>Vitality & Life Changes</p>
                </div>
              </div>
              {/* Add more PalmLineCards */}
            </div>
          </section>

          <button className="booking-button">
            {language === 'english' ? 'Get My Palm Reading' : 'पाम रीडिंग प्राप्त करें'}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HastRekha;
