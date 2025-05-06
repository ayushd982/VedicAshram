import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import vivahImage from '../../assets/Vivah.jpg';
import './Vivah.css';

const Vivah = () => {
  const { language } = useLanguage();

  return (
    <div className="vivah-container">
      <div className="background-wrapper">
        <img src={vivahImage} alt="" className="background-image" />
      </div>

      <Navbar />

      <div className="vivah-content">
        {/* Main Header */}
        <header className="main-header">
          <h1>
            {language === 'hindi'
              ? 'विवाह संस्कार योजना: मिलन और धर्म का पवित्र बंधन'
              : 'Vivah Sanskar Yojna: The Sacred Bond of Union and Dharma'}
          </h1>
          <p className="subheading">
            {language === 'hindi'
              ? 'प्राचीन वैदिक विवाह अनुष्ठानों और ज्योतिषीय आशीर्वाद के माध्यम से एकता की दिव्य यात्रा का उत्सव मनाएं।'
              : 'Celebrate the divine journey of togetherness through ancient Vedic marriage rituals and astrological blessings.'}
          </p>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <p>
            {language === 'hindi'
              ? 'हिंदू संस्कृति में विवाह केवल एक सामाजिक समझौता नहीं बल्कि एक पवित्र आध्यात्मिक यात्रा है - सात जन्मों का बंधन।'
              : 'In Hindu culture, marriage is not just a social agreement but a sacred spiritual journey — a bond of seven lifetimes.'}
          </p>
          <p>
            {language === 'hindi'
              ? 'विवाह संस्कार वेदों में वर्णित सोलह आवश्यक संस्कारों में से एक है, जो दैवीय शक्तियों द्वारा आशीर्वादित एक सुंदर मिलन का प्रतीक है।'
              : 'Vivah Sanskar is one of the sixteen essential Sanskars (rites of passage) described in the Vedas, signifying a beautiful union blessed by divine forces.'}
          </p>
        </section>

        {/* Importance Section */}
        <section className="importance-section">
          <h2>
            {language === 'hindi'
              ? 'विवाह संस्कार का महत्व'
              : 'Importance of Vivah Sanskar'}
          </h2>
          <div className="importance-grid">
            {[
              {
                icon: '💑',
                title: {
                  hindi: 'पवित्र प्रतिज्ञाओं से दो आत्माओं का बंधन',
                  english: 'Binds two souls together with sacred vows'
                }
              },
              {
                icon: '⚡',
                title: {
                  hindi: 'ब्रह्मांडीय नियमों के अनुसार पति-पत्नी की ऊर्जाओं का सामंजस्य',
                  english: 'Harmonizes the energies of husband and wife'
                }
              },
              {
                icon: '🌟',
                title: {
                  hindi: 'स्वास्थ्य, धन, संतान और आध्यात्मिक विकास सुनिश्चित करता है',
                  english: 'Ensures health, wealth, progeny, and spiritual growth'
                }
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: {
                  hindi: 'पारिवारिक बंधन और सामाजिक सद्भाव को मजबूत करता है',
                  english: 'Strengthens family ties and social harmony'
                }
              },
              {
                icon: '🕉️',
                title: {
                  hindi: 'पिछले जन्मों के कर्म ऋण का संतुलन',
                  english: 'Balances the karmic debts from past lives'
                }
              }
            ].map((item, index) => (
              <div key={index} className="importance-card">
                <span className="importance-icon">{item.icon}</span>
                <p>{language === 'hindi' ? item.title.hindi : item.title.english}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Astrological Section */}
        <section className="astrology-section">
          <h2>
            {language === 'hindi'
              ? 'विवाह संस्कार में ज्योतिष का महत्व'
              : 'Astrological Importance in Vivah Sanskar'}
          </h2>
          {/* Add astrological content */}
        </section>

        {/* Rituals Section */}
        <section className="rituals-section">
          <h2>
            {language === 'hindi'
              ? 'विवाह संस्कार में शामिल मुख्य अनुष्ठान'
              : 'Main Rituals Included in Vivah Sanskar'}
          </h2>
          <div className="rituals-grid">
            {/* Add rituals content */}
          </div>
        </section>

        {/* Booking Section */}
        <section className="booking-section">
          <h2>
            {language === 'hindi'
              ? 'संपूर्ण विवाह संस्कार योजना बुक करें'
              : 'Book a Complete Vivah Sanskar Yojna'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'हमारे अनुभवी वैदिक विद्वान और पुरोहित आपको हर कदम पर मार्गदर्शन करते हैं - कुंडली मिलान से लेकर विवाह मुहूर्त चयन और भव्य विवाह अनुष्ठानों तक।'
              : 'Our experienced Vedic scholars and purohits guide you through every step — from Kundali matching to Vivah Muhurat selection to the grand wedding rituals.'}
          </p>
          <button className="book-button">
            {language === 'hindi'
              ? 'विवाह संस्कार बुक करें'
              : 'Book Vivah Sanskar Now'} 💑
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Vivah;
