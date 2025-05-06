import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import garhImage from '../../assets/Garh.jpg';
import './Grahpravesh.css';

const Grahpravesh = () => {
  const { language } = useLanguage();

  return (
    <div className="grahpravesh-container">
      <div className="background-image">
        <img src={garhImage} alt="Background" aria-hidden="true" />
      </div>
      <Navbar />

      <div className="grahpravesh-content">
        {/* Main Header */}
        <header className="main-header">
          <h1>
            {language === 'hindi'
              ? 'गृह प्रवेश: अपने नए घर में दैवीय आशीर्वाद आमंत्रित करें'
              : 'Grah Pravesh: Invite Divine Blessings into Your New Home'}
          </h1>
          <p className="subheading">
            {language === 'hindi'
              ? 'गृह प्रवेश के पवित्र अनुष्ठानों के साथ अपने निवास स्थान को शुद्ध, ऊर्जावान और आशीर्वादित करें।'
              : 'Purify, energize, and bless your living space with the sacred rituals of Grah Pravesh.'}
          </p>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <p>
            {language === 'hindi'
              ? 'गृह प्रवेश एक पवित्र वैदिक अनुष्ठान है जो नवनिर्मित या नवीनीकृत घर में प्रवेश करने से पहले किया जाता है।'
              : 'Grah Pravesh is a sacred Vedic ritual performed before entering a newly built or renovated home.'}
          </p>
          <p>
            {language === 'hindi'
              ? 'यह दैवीय आशीर्वाद, शांति, समृद्धि और सुरक्षा से भरी एक नई शुरुआत का प्रतीक है।'
              : 'It marks a new beginning filled with divine blessings, peace, prosperity, and protection.'}
          </p>
        </section>

        {/* Importance Section */}
        <section className="importance-section">
          <h2>
            {language === 'hindi' ? 'गृह प्रवेश क्यों महत्वपूर्ण है?' : 'Why is Grah Pravesh Important?'}
          </h2>
          <ul className="benefits-list">
            {[
              {
                hindi: 'घर के वातावरण को शुद्ध करता है',
                english: 'Purifies the homes environment'
              },
              {
                hindi: 'वास्तु ऊर्जाओं को संतुलित करता है',
                english: 'Balances the Vastu energies'
              },
              {
                hindi: 'बाधाओं और नकारात्मकता से दैवीय सुरक्षा',
                english: 'Invokes divine protection against obstacles and negativity'
              },
              {
                hindi: 'परिवार के लिए समृद्धि, शांति और विकास सुनिश्चित करता है',
                english: 'Ensures prosperity, peace, and growth for the family'
              },
              {
                hindi: 'पारिवारिक बंधन और स्थान से आध्यात्मिक जुड़ाव को मजबूत करता है',
                english: 'Strengthens family bonding and spiritual connection to the space'
              }
            ].map((benefit, index) => (
              <li key={index}>
                {language === 'hindi' ? benefit.hindi : benefit.english}
              </li>
            ))}
          </ul>
        </section>

        {/* Types Section */}
        <section className="types-section">
          <h2>
            {language === 'hindi' ? 'गृह प्रवेश के प्रकार' : 'Types of Grah Pravesh'}
          </h2>
          <div className="types-grid">
            {/* Add types content */}
          </div>
        </section>

        {/* Timing Section */}
        <section className="timing-section">
          <h2>
            {language === 'hindi' ? 'शुभ मुहूर्त' : 'Ideal Timing (Muhurat)'}
          </h2>
          {/* Add timing content */}
        </section>

        {/* Steps Section */}
        <section className="steps-section">
          <h2>
            {language === 'hindi' ? 'गृह प्रवेश की विधि' : 'Steps Included in Grah Pravesh Ceremony'}
          </h2>
          {/* Add steps content */}
        </section>

        {/* Booking Section */}
        <section className="booking-section">
          <h2>
            {language === 'hindi' ? 'गृह प्रवेश पूजा बुक करें' : 'Book a Grah Pravesh Puja'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'हमारे अनुभवी वैदिक पुरोहित वास्तु और ज्योतिषीय सिद्धांतों के अनुरूप पारंपरिक, शक्तिशाली गृह प्रवेश समारोह सुनिश्चित करते हैं।'
              : 'Our experienced Vedic priests ensure a traditional, powerful Grah Pravesh ceremony aligned with Vastu and astrological principles.'}
          </p>
          <button className="book-button">
            {language === 'hindi' ? 'गृह प्रवेश पूजा शेड्यूल करें' : 'Schedule Grah Pravesh Puja Now'} 🙏
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Grahpravesh;
