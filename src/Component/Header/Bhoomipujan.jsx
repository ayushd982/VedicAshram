import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './Bhoomipujan.css';
import kalashImage from '../../assets/kalsh.png'; // Update this path to match your project structure

const Bhoomi = () => {
  const { language } = useLanguage();

  return (
    <div className="bhoomi-container">
      {/* Background Kalash */}
      <div className="kalash-background">
        <img src={kalashImage} alt="" aria-hidden="true" />
      </div>

      {/* Decorative Kalash corners */}
      <div className="kalash-corner kalash-top-left" aria-hidden="true"></div>
      <div className="kalash-corner kalash-top-right" aria-hidden="true"></div>
      <div className="kalash-corner kalash-bottom-left" aria-hidden="true"></div>
      <div className="kalash-corner kalash-bottom-right" aria-hidden="true"></div>
      <Navbar />
      <div className="bhoomi-content">
        <div className="bhoomi-content">
          {/* Main Header Section */}
          <header className="bhoomi-header">
            <h1>
              {language === 'hindi'
                ? 'भूमि पूजन: माँ धरती को समर्पित पवित्र अनुष्ठान'
                : 'Bhoomi Pujan: Sacred Ritual to Honor Mother Earth'}
            </h1>
            <p className="subheading">
              {language === 'hindi'
                ? 'निर्माण कार्य प्रारंभ करने से पूर्व दैवीय आशीर्वाद प्राप्त करें और शांति, समृद्धि एवं सुरक्षा की नींव रखें।'
                : 'Invoke divine blessings before starting construction and ensure a foundation of peace, prosperity, and protection.'}
            </p>
          </header>

          {/* Introduction Section */}
          <section className="intro-section">
            <p>
              {language === 'hindi'
                ? 'भूमि पूजन, या माता धरती की आराधना, एक गहन आध्यात्मिक वैदिक अनुष्ठान है जो किसी भी निर्माण कार्य - चाहे वह घर हो, कार्यालय, मंदिर, या सार्वजनिक संरचना - से पहले किया जाता है।'
                : 'Bhoomi Pujan, or the worship of Mother Earth, is a deeply spiritual Vedic ritual performed before starting any construction work — be it a home, office, temple, or public structure.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'हिंदू परंपरा में, पृथ्वी को एक जीवंत देवी - "भूमि देवी" के रूप में पूजा जाता है। भूमि पूजन के माध्यम से प्राकृतिक संतुलन को बाधित करने के लिए उनसे क्षमा याचना की जाती है और भूमि को आशीर्वाद देने के लिए शुभ ऊर्जाओं को आमंत्रित किया जाता है, जो समृद्धि, स्थिरता और बाधाओं से सुरक्षा सुनिश्चित करता है।'
                : 'In Hindu tradition, the Earth is revered as a living Goddess — "Bhoomi Devi." Performing Bhoomi Pujan seeks her forgiveness for disturbing the natural balance and invites auspicious energies to bless the land, ensuring prosperity, stability, and protection from obstacles.'}
            </p>
          </section>

          {/* Importance Section */}
          <section className="importance-section">
            <h2>
              {language === 'hindi'
                ? 'भूमि पूजन क्यों महत्वपूर्ण है?'
                : 'Why Bhoomi Pujan is Important'}
            </h2>
            <div className="benefits-grid">
              {[
                {
                  hindi: 'वास्तु दोषों का निवारण करता है',
                  english: 'Neutralizes Vastu doshas',
                  icon: '🏠'
                },
                {
                  hindi: 'स्थल से नकारात्मक ऊर्जाओं को दूर करता है',
                  english: 'Removes negative energies from the site',
                  icon: '✨'
                },
                {
                  hindi: 'भूमि देवी, विश्वकर्मा और स्थानीय देवताओं का आशीर्वाद',
                  english: 'Seeks blessings from Bhoomi Devi, Vishwakarma, and Guardian Deities',
                  icon: '🙏'
                },
                {
                  hindi: 'भवन और निवासियों को समृद्धि, सुरक्षा और शांति',
                  english: 'Brings prosperity, safety, and peace',
                  icon: '🕊️'
                },
                {
                  hindi: 'विलंब, आर्थिक नुकसान और कानूनी समस्याओं से सुरक्षा',
                  english: 'Protects from delays, financial losses, and legal troubles',
                  icon: '⚖️'
                }
              ].map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <p>{language === 'hindi' ? benefit.hindi : benefit.english}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Timing Section */}
          <section className="timing-section">
            <h2>
              {language === 'hindi'
                ? 'भूमि पूजन का शुभ मुहूर्त'
                : 'Ideal Time for Bhoomi Pujan'}
            </h2>
            <div className="timing-content">
              {/* Add timing content here */}
            </div>
          </section>

          {/* Steps Section */}
          <section className="steps-section">
            <h2>
              {language === 'hindi'
                ? 'भूमि पूजन की विधि'
                : 'Steps in Bhoomi Pujan Ritual'}
            </h2>
            <div className="steps-grid">
              {/* Add steps content here */}
            </div>
          </section>

          {/* Booking Section */}
          <section className="booking-section">
            <h2>
              {language === 'hindi'
                ? 'भूमि पूजन का आयोजन करें'
                : 'Book a Bhoomi Pujan Ceremony'}
            </h2>
            <p>
              {language === 'hindi'
                ? 'हमारे विशेषज्ञ वैदिक पुरोहित आपको प्रामाणिक भूमि पूजन विधि, शुभ मुहूर्त, मंत्र और पूजा सामग्री के चयन में मार्गदर्शन करेंगे।'
                : 'Our expert Vedic priests will guide you through the authentic Bhoomi Pujan rituals, selecting the right Muhurat, mantras, and puja samagri.'}
            </p>
            <button className="book-button">
              {language === 'hindi'
                ? 'भूमि पूजन की बुकिंग करें'
                : 'Schedule Bhoomi Pujan Now'} 🙏
            </button>
          </section>
          <style jsx>{`
          section {
            position: relative;
            overflow: hidden;
          }
          
          section::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            background: url(${kalashImage}) no-repeat center center;
            background-size: contain;
            opacity: 0.03;
            pointer-events: none;
          }
        `}</style>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Bhoomi;
