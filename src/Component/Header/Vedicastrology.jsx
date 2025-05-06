import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import './Vedicastrology.css';
import { useLanguage } from '../../context/LanguageContext';

const Vedicastrology = () => {
  const { language } = useLanguage();

  // Array of astrology services with their titles and descriptions in both English and Hindi
  const astrologyServices = [
    // Row 1
    [
      {
        title: language === 'hindi' ? "हस्त रेखा ज्योतिष" : "Hast Rekha Jyotish",
        description: language === 'hindi'
          ? "हस्त रेखा पठन की प्राचीन कला के माध्यम से अपनी नियति का पता लगाएं। हमारे विशेषज्ञ आपके जीवन पथ, रिश्तों और भविष्य के बारे में जानकारी प्रदान करने के लिए आपकी हथेली की रेखाओं का विश्लेषण करते हैं।"
          : "Discover your destiny through the ancient art of palm reading. Our experts analyze the lines on your palm to reveal insights about your life path, relationships, and future.",
        image: "hast-rekha-jyotish.jpg"
      },
      {
        title: language === 'hindi' ? "अंक ज्योतिष" : "Number Jyotish",
        description: language === 'hindi'
          ? "अपने जीवन में संख्याओं की रहस्यमय शक्ति को अनलॉक करें। हमारे अंक ज्योतिष विशेषज्ञ आपकी ताकत, कमजोरियों और जीवन के उद्देश्य को प्रकट करने के लिए आपके व्यक्तिगत अंकों की गणना करते हैं।"
          : "Unlock the mystical power of numbers in your life. Our numerology experts calculate your personal numbers to reveal your strengths, weaknesses, and life purpose.",
        image: "number-jyotish.jpg"
      },
      {
        title: language === 'hindi' ? "कर्मचारी कुंडली पठन" : "Employee Horoscope Reading",
        description: language === 'hindi'
          ? "आपके पेशेवर जीवन के लिए विशेष ज्योतिषीय मार्गदर्शन। अपने करियर पथ, कार्यस्थल गतिशीलता और विकास और सफलता की संभावना को समझें।"
          : "Specialized astrological guidance for your professional life. Understand your career path, workplace dynamics, and potential for growth and success.",
        image: "employee-horoscope.jpg"
      }
    ],
    // Row 2
    [
      {
        title: language === 'hindi' ? "घरों के लिए वास्तु ज्योतिष" : "Architectural Astrology for Homes",
        description: language === 'hindi'
          ? "सामंजस्यपूर्ण रहने की जगह बनाने के लिए ज्योतिष के सिद्धांतों को वास्तुकला के साथ जोड़ें। जानें कि आकाशीय ऊर्जाएं आपके घर को कैसे प्रभावित करती हैं और उन्हें कैसे अनुकूलित किया जाए।"
          : "Combine the principles of astrology with architecture to create harmonious living spaces. Learn how celestial energies affect your home and how to optimize them.",
        image: "architectural-astrology.jpg"
      },
      {
        title: language === 'hindi' ? "जन्म और व्यक्तिगत ज्योतिष" : "Birth and Personal Astrology",
        description: language === 'hindi'
          ? "जन्म के समय ग्रहों की स्थिति के आधार पर आपके अनूठे व्यक्तित्व लक्षणों, ताकतों, चुनौतियों और जीवन के उद्देश्य को प्रकट करने के लिए आपके जन्म कुंडली का व्यापक विश्लेषण।"
          : "Comprehensive analysis of your birth chart to reveal your unique personality traits, strengths, challenges, and life purpose based on planetary positions at birth.",
        image: "birth-personal-astrology.jpg"
      },
      {
        title: language === 'hindi' ? "जन्म कुंडली" : "Birth Chart",
        description: language === 'hindi'
          ? "आपके जन्म के समय ग्रहों की स्थिति का विस्तृत मानचित्रण। हमारे विशेषज्ञ आपके जीवन के विभिन्न पहलुओं में अंतर्दृष्टि प्रदान करने के लिए इस ब्रह्मांडीय स्नैपशॉट की व्याख्या करते हैं।"
          : "Detailed mapping of planetary positions at the time of your birth. Our experts interpret this cosmic snapshot to provide insights into various aspects of your life.",
        image: "birth-chart.jpg"
      }
    ],
    // Row 3
    [
      {
        title: language === 'hindi' ? "जन्म समय निर्धारण" : "Birth Time Determination",
        description: language === 'hindi'
          ? "जब सटीक समय अज्ञात हो, तो सुधार तकनीकों का उपयोग करके आपके वास्तविक जन्म समय की सटीक गणना, सटीक ज्योतिषीय पठन सुनिश्चित करती है।"
          : "Precise calculation of your actual birth time using rectification techniques when the exact time is unknown, ensuring accurate astrological readings.",
        image: "birth-time-determination.jpg"
      },
      {
        title: language === 'hindi' ? "करियर और धन कुंडली" : "Career and Wealth Horoscope",
        description: language === 'hindi'
          ? "आपके पेशेवर मार्ग और वित्तीय संभावनाओं पर केंद्रित विशेष ज्योतिषीय मार्गदर्शन। सर्वोत्तम करियर विकल्प और वित्तीय निर्णयों के लिए सही समय का पता लगाएं।"
          : "Specialized astrological guidance focused on your professional path and financial prospects. Discover the best career options and timing for financial decisions.",
        image: "career-wealth-horoscope.jpg"
      },
      {
        title: language === 'hindi' ? "बाल कुंडली पठन" : "Child Horoscope Reading",
        description: language === 'hindi'
          ? "आपके बच्चे के व्यक्तित्व, प्रतिभाओं और संभावित चुनौतियों में ज्योतिषीय अंतर्दृष्टि। उनकी अद्वितीय कुंडली के अनुरूप ब्रह्मांडीय ज्ञान के साथ उनके विकास का मार्गदर्शन करें।"
          : "Astrological insights into your child's personality, talents, and potential challenges. Guide their development with cosmic wisdom tailored to their unique chart.",
        image: "child-horoscope.jpg"
      }
    ],
    // Row 4
    [
      {
        title: language === 'hindi' ? "कुंडली मिलान" : "Horoscope Matching",
        description: language === 'hindi'
          ? "जोड़ों के लिए पारंपरिक वैदिक संगतता विश्लेषण। हमारे विशेषज्ञ रिश्ते की सद्भाव का आकलन करने के लिए दो व्यक्तियों के बीच ब्रह्मांडीय संगतता की जांच करते हैं।"
          : "Traditional Vedic compatibility analysis for couples. Our experts examine the cosmic compatibility between two individuals to assess relationship harmony.",
        image: "horoscope-matching.jpg"
      },
      {
        title: language === 'hindi' ? "कॉर्पोरेट इमेजिंग ज्योतिष" : "Corporate Imaging Astrology",
        description: language === 'hindi'
          ? "व्यवसायों और संगठनों के लिए ज्योतिषीय मार्गदर्शन। महत्वपूर्ण निर्णयों के लिए समय का अनुकूलन करें, टीम गतिशीलता को समझें, और कॉर्पोरेट सफलता बढ़ाएं।"
          : "Astrological guidance for businesses and organizations. Optimize timing for important decisions, understand team dynamics, and enhance corporate success.",
        image: "corporate-imaging.jpg"
      },
      {
        title: language === 'hindi' ? "केपी प्रश्न ज्योतिष" : "KP Horary Astrology",
        description: language === 'hindi'
          ? "विशिष्ट प्रश्नों के उत्तर देने के लिए कृष्णमूर्ति पद्धति प्रणाली। यह सटीक भविष्यवाणी प्रणाली आपके सबसे अधिक दबाव वाले जीवन के प्रश्नों के स्पष्ट उत्तर प्रदान करती है।"
          : "Krishnamurti Paddhati system for answering specific questions. This precise predictive system provides clear answers to your most pressing life questions.",
        image: "kp-horary.jpg"
      }
    ]
  ];

  return (
    <div className="vedicastrology-page">
      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with margin after navbar */}
      <div className="vedicastrology-content">
        <div className="container">
          <h1 className="page-title">
            {language === 'hindi' ? 'वैदिक ज्योतिष सेवाएँ' : 'Vedic Astrology Services'}
          </h1>
          <p className="page-description">
            {language === 'hindi'
              ? 'प्राचीन ज्ञान और ब्रह्मांडीय अंतर्दृष्टि के माध्यम से जीवन के विभिन्न पहलुओं में मार्गदर्शन और स्पष्टता प्रदान करने के लिए डिज़ाइन की गई हमारी व्यापक वैदिक ज्योतिष सेवाओं का अन्वेषण करें।'
              : 'Explore our comprehensive range of Vedic astrology services designed to provide guidance and clarity in various aspects of life through ancient wisdom and cosmic insights.'}
          </p>

          {/* Services Grid */}
          <div className="astrology-services-grid">
            {astrologyServices.map((row, rowIndex) => (
              <div className="service-row" key={`row-${rowIndex}`}>
                {row.map((service, colIndex) => (
                  <div
                    className="service-card"
                    key={`service-${rowIndex}-${colIndex}`}
                    style={{
                      animationDelay: `${(rowIndex * 3 + colIndex) * 0.1}s`,
                      animation: 'fadeInUp 0.8s ease-out forwards'
                    }}
                  >
                    <div className="service-image">
                      <img
                        src={`/images/vedic-astrology/${service.image}`}
                        alt={service.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://source.unsplash.com/300x200/?vedic,astrology,${service.title.replace(/ /g, ',')}`;
                        }}
                      />
                    </div>
                    <div className="service-info">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                      <Link
                        to={`/services/vedic-astrology/${service.title.toLowerCase().replace(/ /g, '-')}`}
                        className="service-link"
                      >
                        {language === 'hindi' ? 'अधिक जानें' : 'Learn More'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Vedicastrology;