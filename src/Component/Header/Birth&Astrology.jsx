import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './Birth&Astrology.css';

const BirthAndAstrology = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    english: {
      pageTitle: "Unlock the Story of Your Soul: Personalized Birth & Life Predictions",
      mainHeading: "Personalized Vedic Astrology: Discover Who You Truly Are",
      subHeading: "Get deep, intuitive insights about your personality, potential, and life direction through your exact birth details.",
      mainContent: "Your birth is no coincidence—it's a cosmic alignment of time, space, and karma. Birth & Personal Astrology offers a detailed look at your individual nature, strengths, weaknesses, and soul mission. Unlike generic sun sign horoscopes, this is based on your exact date, time, and place of birth.",
      coversList: [
        "Your Ascendant (Lagna): How the world sees you",
        "Sun Sign: Your core self and vitality",
        "Moon Sign: Your emotions, mind, and comfort zone",
        "Nakshatra & Pada: Deeper karmic traits",
        "Elemental Balance: Fire, Earth, Air, Water qualities",
        "Current Planetary Influences (Gochar)",
        "Personalized Predictions for career, love, health, and spiritual growth"
      ],
      bonus: "Bonus: Get lucky numbers, colors, and personalized remedies!",
      ctaButton: "Get Your Personalized Birth & Life Reading"
    },
    hindi: {
      pageTitle: "अपनी आत्मा की कहानी को अनलॉक करें: व्यक्तिगत जन्म और जीवन भविष्यवाणियां",
      mainHeading: "व्यक्तिगत वैदिक ज्योतिष: जानें आप वास्तव में कौन हैं",
      subHeading: "अपने सटीक जन्म विवरण के माध्यम से अपने व्यक्तित्व, क्षमता और जीवन दिशा के बारे में गहरी, अंतर्ज्ञानी अंतर्दृष्टि प्राप्त करें।",
      mainContent: "आपका जन्म कोई संयोग नहीं है - यह समय, स्थान और कर्म का एक ब्रह्मांडीय संरेखण है। जन्म और व्यक्तिगत ज्योतिष आपकी व्यक्तिगत प्रकृति, ताकत, कमजोरियों और आत्मा के मिशन पर एक विस्तृत नज़र प्रदान करता है। सामान्य सूर्य राशि राशिफल के विपरीत, यह आपकी सटीक तिथि, समय और जन्म स्थान पर आधारित है।",
      coversList: [
        "आपका लग्न: दुनिया आपको कैसे देखती है",
        "सूर्य राशि: आपका मूल स्वयं और जीवन शक्ति",
        "चंद्र राशि: आपकी भावनाएं, मन और आराम क्षेत्र",
        "नक्षत्र और पद: गहरे कार्मिक लक्षण",
        "तत्व संतुलन: अग्नि, पृथ्वी, वायु, जल गुण",
        "वर्तमान ग्रहीय प्रभाव (गोचर)",
        "करियर, प्रेम, स्वास्थ्य और आध्यात्मिक विकास के लिए व्यक्तिगत भविष्यवाणियां"
      ],
      bonus: "बोनस: भाग्यशाली संख्याएं, रंग और व्यक्तिगत उपाय प्राप्त करें!",
      ctaButton: "अपना व्यक्तिगत जन्म और जीवन पठन प्राप्त करें"
    }
  };

  return (
    <div className="birth-astrology-container">
      <Navbar />
      <div className="birth-astrology-content">
        <button className="language-toggle" onClick={() => setLanguage(language === 'english' ? 'hindi' : 'english')}>
          {language === 'english' ? 'हिंदी में देखें' : 'View in English'}
        </button>

        <header className="main-header">
          <h1 className="page-title">{content[language].pageTitle}</h1>
          <h2 className="main-heading">{content[language].mainHeading}</h2>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="content-section">
          <p className="main-content">{content[language].mainContent}</p>

          <div className="covers-section">
            <h3>It covers:</h3>
            <ul className="covers-list">
              {content[language].coversList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="bonus-text">{content[language].bonus}</p>
        </section>

        <div className="cta-section">
          <button className="cta-button">{content[language].ctaButton}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BirthAndAstrology;