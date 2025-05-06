import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import bhoomipujanImage from '../../assets/bhoomipujan.jpg';
import './Bhoomipujan_new.css';

const Bhoomipujan = () => {
  const { language } = useLanguage();

  return (
    <div className="bhoomipujan-container">
      <div className="background-image">
        <img src={bhoomipujanImage} alt="Background" aria-hidden="true" />
      </div>
      <Navbar />

      <div className="bhoomipujan-content">
        {/* Main Header */}
        <header className="main-header">
          <h1>
            {language === 'hindi'
              ? 'भूमि पूजन: नए निर्माण के लिए पवित्र आधारशिला'
              : 'Bhoomi Pujan: Sacred Foundation for New Construction'}
          </h1>
          <p className="subheading">
            {language === 'hindi'
              ? 'भूमि पूजन के पवित्र अनुष्ठानों के साथ अपने नए निर्माण की नींव को आशीर्वादित करें।'
              : 'Bless the foundation of your new construction with the sacred rituals of Bhoomi Pujan.'}
          </p>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <p>
            {language === 'hindi'
              ? 'भूमि पूजन एक पवित्र वैदिक अनुष्ठान है जो किसी भी नए निर्माण की शुरुआत से पहले किया जाता है।'
              : 'Bhoomi Pujan is a sacred Vedic ritual performed before beginning any new construction.'}
          </p>
          <p>
            {language === 'hindi'
              ? 'यह भूमि के देवताओं और प्रकृति के तत्वों को प्रसन्न करने के लिए किया जाता है, जिससे निर्माण कार्य में सफलता और भविष्य में समृद्धि सुनिश्चित होती है।'
              : 'It is performed to please the deities of the land and elements of nature, ensuring success in construction and prosperity in the future.'}
          </p>
        </section>

        {/* Importance Section */}
        <section className="importance-section">
          <h2>
            {language === 'hindi' ? 'भूमि पूजन क्यों महत्वपूर्ण है?' : 'Why is Bhoomi Pujan Important?'}
          </h2>
          <ul className="benefits-list">
            {[
              {
                hindi: 'भूमि के नकारात्मक ऊर्जाओं को शुद्ध करता है',
                english: 'Purifies the negative energies of the land'
              },
              {
                hindi: 'निर्माण में आने वाली बाधाओं को दूर करता है',
                english: 'Removes obstacles in construction'
              },
              {
                hindi: 'भूमि के देवताओं और प्रकृति के तत्वों का आशीर्वाद प्राप्त करता है',
                english: 'Obtains blessings from the deities of land and elements of nature'
              },
              {
                hindi: 'निर्माण की सुरक्षा और स्थिरता सुनिश्चित करता है',
                english: 'Ensures safety and stability of the construction'
              },
              {
                hindi: 'भविष्य में रहने वालों के लिए सुख, शांति और समृद्धि लाता है',
                english: 'Brings happiness, peace, and prosperity for future inhabitants'
              }
            ].map((benefit, index) => (
              <li key={index}>
                {language === 'hindi' ? benefit.hindi : benefit.english}
              </li>
            ))}
          </ul>
        </section>

        {/* Rituals Section */}
        <section className="rituals-section">
          <h2>
            {language === 'hindi' ? 'भूमि पूजन के प्रमुख अनुष्ठान' : 'Key Rituals of Bhoomi Pujan'}
          </h2>
          <div className="rituals-grid">
            {/* Add rituals content */}
            <div className="ritual-item">
              <h3>{language === 'hindi' ? 'गणेश पूजन' : 'Ganesh Pujan'}</h3>
              <p>{language === 'hindi'
                ? 'सभी अनुष्ठानों की शुरुआत भगवान गणेश की पूजा से होती है, जो सभी बाधाओं को दूर करते हैं।'
                : 'All rituals begin with the worship of Lord Ganesha, who removes all obstacles.'}</p>
            </div>
            <div className="ritual-item">
              <h3>{language === 'hindi' ? 'वास्तु पूजन' : 'Vastu Pujan'}</h3>
              <p>{language === 'hindi'
                ? 'वास्तु देवता की पूजा की जाती है, जो निर्माण और आवास के देवता हैं।'
                : 'Worship of Vastu Devata, the deity of construction and dwelling.'}</p>
            </div>
            <div className="ritual-item">
              <h3>{language === 'hindi' ? 'नवग्रह पूजन' : 'Navagraha Pujan'}</h3>
              <p>{language === 'hindi'
                ? 'नौ ग्रहों की पूजा की जाती है ताकि उनका आशीर्वाद प्राप्त हो।'
                : 'Worship of the nine planets to obtain their blessings.'}</p>
            </div>
            <div className="ritual-item">
              <h3>{language === 'hindi' ? 'शिलान्यास' : 'Shilanyas'}</h3>
              <p>{language === 'hindi'
                ? 'पहला पत्थर या ईंट रखने का पवित्र अनुष्ठान, जो निर्माण की आधारशिला है।'
                : 'The sacred ritual of laying the first stone or brick, which is the foundation of construction.'}</p>
            </div>
          </div>
        </section>

        {/* Auspicious Timing Section */}
        <section className="timing-section">
          <h2>
            {language === 'hindi' ? 'शुभ मुहूर्त' : 'Auspicious Timing'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'भूमि पूजन के लिए शुभ मुहूर्त का चयन अत्यंत महत्वपूर्ण है। यह ज्योतिषीय गणनाओं के आधार पर किया जाता है, जिसमें तिथि, नक्षत्र, योग और करण का विशेष ध्यान रखा जाता है।'
              : 'Selecting an auspicious time for Bhoomi Pujan is extremely important. It is done based on astrological calculations, with special attention to date, constellation, yoga, and karana.'}
          </p>
          <p>
            {language === 'hindi'
              ? 'हमारे अनुभवी ज्योतिषी आपके लिए सर्वोत्तम मुहूर्त का चयन करेंगे, जिससे आपके निर्माण कार्य में सफलता सुनिश्चित होगी।'
              : 'Our experienced astrologers will select the best muhurat for you, ensuring success in your construction work.'}
          </p>
        </section>

        {/* Materials Section */}
        <section className="materials-section">
          <h2>
            {language === 'hindi' ? 'भूमि पूजन के लिए आवश्यक सामग्री' : 'Materials Required for Bhoomi Pujan'}
          </h2>
          <ul className="materials-list">
            {[
              {
                hindi: 'कलश (पानी से भरा हुआ)',
                english: 'Kalash (filled with water)'
              },
              {
                hindi: 'पंचरत्न (पांच कीमती पत्थर)',
                english: 'Pancharatna (five precious stones)'
              },
              {
                hindi: 'पंचधातु (पांच धातुएं)',
                english: 'Panchadhatu (five metals)'
              },
              {
                hindi: 'नवधान्य (नौ अनाज)',
                english: 'Navadhanya (nine grains)'
              },
              {
                hindi: 'पूजा की अन्य सामग्री (अगरबत्ती, दीया, फूल, आदि)',
                english: 'Other puja materials (incense, lamp, flowers, etc.)'
              }
            ].map((material, index) => (
              <li key={index}>
                {language === 'hindi' ? material.hindi : material.english}
              </li>
            ))}
          </ul>
        </section>

        {/* Booking Section */}
        <section className="booking-section">
          <h2>
            {language === 'hindi' ? 'भूमि पूजन बुक करें' : 'Book a Bhoomi Pujan'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'हमारे अनुभवी पंडित वैदिक विधि-विधान के अनुसार संपूर्ण भूमि पूजन करवाते हैं, जिससे आपके निर्माण कार्य में सफलता और भविष्य में समृद्धि सुनिश्चित होती है।'
              : 'Our experienced pandits perform complete Bhoomi Pujan according to Vedic rituals, ensuring success in your construction work and prosperity in the future.'}
          </p>
          <button className="book-button">
            {language === 'hindi' ? 'भूमि पूजन शेड्यूल करें' : 'Schedule Bhoomi Pujan Now'} 🙏
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Bhoomipujan;