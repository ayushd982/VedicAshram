import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import lotusImage from '../../assets/Mool.jpg';
import './moolshanti_new.css';

const Moolshanti = () => {
  const { language } = useLanguage();

  return (
    <div className="moolshanti-page">
      <div className="moolshanti-background">
        <img src={lotusImage} alt="Background" aria-hidden="true" />
      </div>
      <Navbar />

      <div className="moolshanti-content">
        <div className="moolshanti-container">
          {/* Header Section */}
          <div className="moolshanti-header">
            <h1 className="moolshanti-title">
              {language === 'hindi'
                ? 'मूल शांति योजना: जन्म नक्षत्र ऊर्जाओं को संतुलित करना'
                : 'Mool Shanti Yojna: Balancing Birth Nakshatra Energies'}
            </h1>
            <p className="moolshanti-subtitle">
              {language === 'hindi'
                ? 'मूल नक्षत्र की छिपी हुई चुनौतियों को निष्प्रभावित करके अपने भाग्य को सामंजस्यपूर्ण बनाएं।'
                : 'Harmonize your destiny by neutralizing the hidden challenges of Mool Nakshatra.'}
            </p>
          </div>

          {/* Introduction Section */}
          <div className="moolshanti-intro">
            <p>
              {language === 'hindi'
                ? 'वैदिक ज्योतिष के अनुसार, कुछ नक्षत्रों (विशेष रूप से मूल नक्षत्र) के अंतर्गत जन्मे बच्चे को विशिष्ट कार्मिक चुनौतियों का सामना करना पड़ सकता है जो उनके जीवन और परिवार के कल्याण को प्रभावित कर सकती हैं।'
                : 'According to Vedic Astrology, a child born under certain Nakshatras (especially Mool Nakshatra) may face specific karmic challenges that can influence their life and family\'s wellbeing.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'मूल शांति योजना एक पवित्र अनुष्ठान है जो मूल नक्षत्र के संभावित प्रतिकूल प्रभावों को शांत करने और बच्चे के भाग्य को शांति, समृद्धि और अच्छे स्वास्थ्य के साथ संरेखित करने के लिए किया जाता है।'
                : 'Mool Shanti Yojna is a sacred ritual performed to pacify the potentially adverse effects of Mool Nakshatra and align the child\'s destiny with peace, prosperity, and good health.'}
            </p>
          </div>

          {/* What is Mool Nakshatra Section */}
          <div className="nakshatra-section">
            <h2 className="section-title">
              {language === 'hindi' ? 'मूल नक्षत्र क्या है?' : 'What is Mool Nakshatra?'}
            </h2>
            <p>
              {language === 'hindi'
                ? 'मूल नक्षत्र 27 चंद्र नक्षत्रों (नक्षत्रों) में से 19वां है।'
                : 'Mool Nakshatra is the 19th among the 27 lunar constellations (Nakshatras).'}
            </p>
            <p>
              {language === 'hindi'
                ? 'इसमें मूला, अश्विनी, मघा, आश्लेषा, ज्येष्ठा और रेवती जैसे तारे शामिल हैं।'
                : 'It includes stars like Moola, Ashwini, Magha, Ashlesha, Jyeshtha, and Revati.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'इन नक्षत्रों में जन्म लेने पर कभी-कभी सुचारू, आशीर्वादित जीवन पथ सुनिश्चित करने के लिए विशेष शांति अनुष्ठानों की आवश्यकता हो सकती है।'
                : 'A birth in these Nakshatras may sometimes require special pacification rituals to ensure a smooth, blessed life path.'}
            </p>

            <div className="nakshatra-grid">
              <div className="nakshatra-item">
                <div className="nakshatra-icon">🌟</div>
                <div className="nakshatra-name">
                  {language === 'hindi' ? 'मूला' : 'Moola'}
                </div>
              </div>
              <div className="nakshatra-item">
                <div className="nakshatra-icon">🌟</div>
                <div className="nakshatra-name">
                  {language === 'hindi' ? 'अश्विनी' : 'Ashwini'}
                </div>
              </div>
              <div className="nakshatra-item">
                <div className="nakshatra-icon">🌟</div>
                <div className="nakshatra-name">
                  {language === 'hindi' ? 'मघा' : 'Magha'}
                </div>
              </div>
              <div className="nakshatra-item">
                <div className="nakshatra-icon">🌟</div>
                <div className="nakshatra-name">
                  {language === 'hindi' ? 'आश्लेषा' : 'Ashlesha'}
                </div>
              </div>
              <div className="nakshatra-item">
                <div className="nakshatra-icon">🌟</div>
                <div className="nakshatra-name">
                  {language === 'hindi' ? 'ज्येष्ठा' : 'Jyeshtha'}
                </div>
              </div>
              <div className="nakshatra-item">
                <div className="nakshatra-icon">🌟</div>
                <div className="nakshatra-name">
                  {language === 'hindi' ? 'रेवती' : 'Revati'}
                </div>
              </div>
            </div>
          </div>

          {/* Why Mool Shanti Yojna is Important */}
          <div className="benefits-section">
            <div className="highlight-banner">
              {language === 'hindi' ? 'महत्वपूर्ण लाभ' : 'Important Benefits'}
            </div>
            <h2 className="section-title">
              {language === 'hindi' ? 'मूल शांति योजना क्यों महत्वपूर्ण है' : 'Why Mool Shanti Yojna is Important'}
            </h2>
            <ul className="benefits-list">
              <li className="benefit-item">
                <div className="benefit-icon">✅</div>
                <div className="benefit-text">
                  {language === 'hindi'
                    ? 'जन्म कुंडली से कार्मिक बाधाओं को निष्प्रभावित करता है'
                    : 'Neutralizes karmic obstacles from birth chart'}
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">✅</div>
                <div className="benefit-text">
                  {language === 'hindi'
                    ? 'अच्छा स्वास्थ्य, समृद्धि और भावनात्मक स्थिरता सुनिश्चित करता है'
                    : 'Ensures good health, prosperity, and emotional stability'}
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">✅</div>
                <div className="benefit-text">
                  {language === 'hindi'
                    ? 'बच्चे और परिवार को अचानक दुर्भाग्य से बचाता है'
                    : 'Protects the child and family from sudden misfortunes'}
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">✅</div>
                <div className="benefit-text">
                  {language === 'hindi'
                    ? 'सकारात्मक ग्रह ऊर्जाओं को मजबूत करता है (विशेष रूप से केतु, बुध आदि से जुड़े)'
                    : 'Strengthens positive planetary energies (especially linked to Ketu, Mercury, etc.)'}
                </div>
              </li>
            </ul>
          </div>

          {/* When to Perform Section */}
          <div className="timing-section">
            <h2 className="section-title">
              {language === 'hindi' ? 'मूल शांति योजना कब करें?' : 'When to Perform Mool Shanti Yojna?'}
            </h2>
            <p>
              {language === 'hindi'
                ? 'परंपरागत रूप से, यह बच्चे के जन्म के 27वें दिन किया जाता है।'
                : 'Traditionally, it is performed on the 27th day after the child\'s birth.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'कुछ परिवार इसे बच्चे के पहले जन्मदिन पर या किसी अन्य ज्योतिषीय रूप से उपयुक्त मुहूर्त पर करते हैं।'
                : 'Some families perform it during the child\'s first birthday or another astrologically suitable Muhurat.'}
            </p>
          </div>

          {/* What Happens During Section */}
          <div className="ritual-section">
            <h2 className="section-title">
              {language === 'hindi' ? 'मूल शांति योजना के दौरान क्या होता है?' : 'What Happens During Mool Shanti Yojna?'}
            </h2>
            <div className="ritual-steps">
              <div className="ritual-step">
                <h3>
                  {language === 'hindi' ? 'गणेश पूजा' : 'Ganesh Puja'}
                </h3>
                <p>
                  {language === 'hindi'
                    ? 'बाधाओं को दूर करने के लिए'
                    : 'To remove obstacles'}
                </p>
              </div>
              <div className="ritual-step">
                <h3>
                  {language === 'hindi' ? 'नवग्रह शांति' : 'Navagraha Shanti'}
                </h3>
                <p>
                  {language === 'hindi'
                    ? 'ग्रह प्रभावों को शांत करना'
                    : 'Pacifying planetary influences'}
                </p>
              </div>
              <div className="ritual-step">
                <h3>
                  {language === 'hindi' ? 'नक्षत्र के अधिष्ठाता देवता के लिए विशेष मंत्र' : 'Special Mantras for the ruling deity of the Nakshatra'}
                </h3>
                <p>
                  {language === 'hindi'
                    ? 'नक्षत्र के देवता को प्रसन्न करने के लिए'
                    : 'To please the deity of the Nakshatra'}
                </p>
              </div>
              <div className="ritual-step">
                <h3>
                  {language === 'hindi' ? 'होमम (अग्नि अनुष्ठान)' : 'Homam (fire ritual)'}
                </h3>
                <p>
                  {language === 'hindi'
                    ? 'शुद्धिकरण और आशीर्वाद के लिए'
                    : 'For purification and blessings'}
                </p>
              </div>
              <div className="ritual-step">
                <h3>
                  {language === 'hindi' ? 'दान' : 'Charity (daan)'}
                </h3>
                <p>
                  {language === 'hindi'
                    ? 'ब्राह्मणों और जरूरतमंदों को दान'
                    : 'To Brahmins and the needy'}
                </p>
              </div>
            </div>
          </div>

          {/* Book a Personalized Section */}
          <div className="booking-section">
            <h2>
              {language === 'hindi'
                ? 'व्यक्तिगत मूल शांति योजना बुक करें'
                : 'Book a Personalized Mool Shanti Yojna'}
            </h2>
            <p>
              {language === 'hindi'
                ? 'हमारे विशेषज्ञ वैदिक पुरोहित मूल शांति अनुष्ठान को सटीकता के साथ करते हैं, जो आपके बच्चे की जन्म कुंडली और पारिवारिक परंपराओं के साथ पूर्ण संरेखण सुनिश्चित करता है। अपने प्रियजनों की रक्षा करें और उनके भविष्य को दिव्य ऊर्जाओं से आशीर्वाद दें।'
                : 'Our expert Vedic priests conduct the Mool Shanti ritual with precision, ensuring full alignment with your child\'s birth chart and family traditions. Protect your loved ones and bless their future with divine energies.'}
            </p>
            <button className="book-button">
              {language === 'hindi' ? 'अभी मूल शांति पूजा शेड्यूल करें' : 'Schedule Mool Shanti Puja Now'} 🙏
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Moolshanti;