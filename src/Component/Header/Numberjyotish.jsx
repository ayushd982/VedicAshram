import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import { FaCalculator, FaCalendarAlt, FaChartLine, FaUserAlt, FaGem, FaBriefcase } from 'react-icons/fa';
import './Numberjyotish.css';

const Numberjyotish = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    english: {
      mainHeading: "Number Jyotish: Discover the Power of Numbers in Your Life",
      subHeading: "Decode your destiny, personality, and future trends through the sacred science of numbers.",
      introduction: "Number Jyotish, or Vedic Numerology, is an ancient predictive science that connects your birth date and name vibrations to cosmic energies. Each number carries specific frequencies that influence your career, health, relationships, and spiritual journey. By understanding your ruling number, destiny number, and name number, you can align yourself with universal rhythms for success and harmony.",
      keyAspectsTitle: "Key Aspects of Number Jyotish",
      keyAspects: [
        "Ruling Number Analysis (based on Birth Date)",
        "Destiny Number Prediction (Life Path and Karma)",
        "Name Correction and Suggestions",
        "Personal Year Forecasts",
        "Lucky Dates, Colors, and Numbers",
        "Career, Marriage, and Health Guidance based on numbers"
      ],
      whyChooseTitle: "Why Choose Number Jyotish Reading?",
      whyChoose: [
        "Easy to apply: No need for full birth chart",
        "Immediate remedies for challenges",
        "Best for business name selection, marriage timing, career moves",
        "Highly accurate when birth time is unknown"
      ],
      whatYouReceiveTitle: "What You Receive",
      whatYouReceive: [
        "Personalized Numerology Report",
        "Lucky Numbers, Colors, and Dates",
        "Name Correction Advice",
        "Yearly Roadmap Based on Your Numbers"
      ],
      ctaButton: "Get My Personalized Number Jyotish Reading"
    },
    hindi: {
      mainHeading: "अंक ज्योतिष: अपने जीवन में संख्याओं की शक्ति का अनुभव करें",
      subHeading: "पवित्र संख्या विज्ञान के माध्यम से अपनी नियति, व्यक्तित्व और भविष्य के रुझानों को समझें।",
      introduction: "अंक ज्योतिष, या वैदिक न्यूमरोलॉजी, एक प्राचीन भविष्यवाणी विज्ञान है जो आपकी जन्म तिथि और नाम के कंपन को ब्रह्मांडीय ऊर्जाओं से जोड़ता है। प्रत्येक संख्या विशिष्ट आवृत्तियों को वहन करती है जो आपके करियर, स्वास्थ्य, रिश्तों और आध्यात्मिक यात्रा को प्रभावित करती हैं। अपने शासक अंक, नियति अंक और नाम अंक को समझकर, आप सफलता और सद्भाव के लिए सार्वभौमिक लय के साथ स्वयं को संरेखित कर सकते हैं।",
      keyAspectsTitle: "अंक ज्योतिष के प्रमुख पहलू",
      keyAspects: [
        "शासक अंक विश्लेषण (जन्म तिथि के आधार पर)",
        "नियति अंक भविष्यवाणी (जीवन पथ और कर्म)",
        "नाम सुधार और सुझाव",
        "व्यक्तिगत वर्ष पूर्वानुमान",
        "शुभ तिथियां, रंग और संख्याएं",
        "संख्याओं के आधार पर करियर, विवाह और स्वास्थ्य मार्गदर्शन"
      ],
      whyChooseTitle: "अंक ज्योतिष रीडिंग क्यों चुनें?",
      whyChoose: [
        "आसानी से लागू करने योग्य: पूर्ण जन्म कुंडली की आवश्यकता नहीं",
        "चुनौतियों के लिए तत्काल उपाय",
        "व्यापार नाम चयन, विवाह समय, करियर कदमों के लिए सर्वोत्तम",
        "जब जन्म समय अज्ञात हो तब अत्यधिक सटीक"
      ],
      whatYouReceiveTitle: "आप क्या प्राप्त करेंगे",
      whatYouReceive: [
        "व्यक्तिगत न्यूमरोलॉजी रिपोर्ट",
        "शुभ संख्याएं, रंग और तिथियां",
        "नाम सुधार सलाह",
        "आपकी संख्याओं के आधार पर वार्षिक रोडमैप"
      ],
      ctaButton: "मेरी व्यक्तिगत अंक ज्योतिष रीडिंग प्राप्त करें"
    }
  };

  return (
    <div className="number-jyotish-container">
      <Navbar />
      <div className="number-jyotish-content">

        <header className="main-header">
          <h1>{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="section">
          <p>{content[language].introduction}</p>
        </section>

        <section className="section">
          <h2>{content[language].keyAspectsTitle}</h2>
          <div className="key-aspects">
            {content[language].keyAspects.map((aspect, index) => (
              <div className="aspect-card" key={index}>
                {index === 0 && <FaCalculator className="benefit-icon" />}
                {index === 1 && <FaChartLine className="benefit-icon" />}
                {index === 2 && <FaUserAlt className="benefit-icon" />}
                {index === 3 && <FaCalendarAlt className="benefit-icon" />}
                {index === 4 && <FaGem className="benefit-icon" />}
                {index === 5 && <FaBriefcase className="benefit-icon" />}
                <p>{aspect}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>{content[language].whyChooseTitle}</h2>
          <div className="benefits-grid">
            {content[language].whyChoose.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="what-you-receive">
          <h3>{content[language].whatYouReceiveTitle}</h3>
          <ul className="receive-list">
            {content[language].whatYouReceive.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <button className="cta-button">
          {content[language].ctaButton}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Numberjyotish;