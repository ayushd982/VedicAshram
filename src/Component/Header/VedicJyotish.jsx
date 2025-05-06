import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import vedicJyotishBg from '../../assets/VedicJyotish.jpg';
import './VedicJyotish.css';

const VedicJyotish = () => {
  const { language } = useLanguage();

  return (
    <div className="vedic-jyotish-container">
      <Navbar />
      <div className="background-wrapper">
        <img src={vedicJyotishBg} alt="" className="background-image" />
      </div>

      <div className="vedic-jyotish-content">
        {/* Main Header */}
        <header className="main-header">
          <h1>
            {language === 'hindi'
              ? '🕉️ वैदिक ज्योतिष – प्रकाश का पवित्र विज्ञान'
              : '🕉️ Vedic Jyotish – The Sacred Science of Light'}
          </h1>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <h2>
            {language === 'hindi'
              ? '🌟 वैदिक ज्योतिष का परिचय'
              : '🌟 Introduction to Vedic Jyotish'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'वैदिक ज्योतिष, संस्कृत शब्द "ज्योति" से व्युत्पन्न जिसका अर्थ है "प्रकाश", प्राचीन भारतीय ज्योतिष विज्ञान है। वेदों, विशेष रूप से वेदांग ज्योतिष में निहित, यह पवित्र अनुशासन ग्रहों की स्थिति के माध्यम से हमारे कर्म और नियति का एक ब्रह्मांडीय मानचित्र प्रदान करता है। वैदिक ज्योतिष केवल घटनाओं की भविष्यवाणी के बारे में नहीं है, बल्कि धर्म (जीवन का उद्देश्य) को समझने और सार्वभौमिक व्यवस्था (ऋत) के साथ संरेखित करने के बारे में है।'
              : 'Vedic Jyotish, derived from the Sanskrit word "Jyoti" meaning "light," is the ancient Indian science of astrology. Rooted in the Vedas, especially the Vedanga Jyotisha, this sacred discipline provides a cosmic map of our karma and destiny through planetary positions. Vedic Jyotish is not just about predicting events, but about understanding the dharma (life purpose) and aligning with universal order (Rta).'}
          </p>
        </section>

        {/* Origins and Historical Background Section */}
        <section className="history-section">
          <h2>
            {language === 'hindi'
              ? '📚 उत्पत्ति और ऐतिहासिक पृष्ठभूमि'
              : '📚 Origins and Historical Background'}
          </h2>
          <ul>
            <li>
              {language === 'hindi'
                ? '5000 साल पहले छह वेदांगों में से एक के रूप में विकसित।'
                : 'Developed over 5000 years ago as one of the six Vedangas.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'ऋग्वेद, अथर्ववेद और गरुड़ पुराण में संदर्भित।'
                : 'Referenced in Rigveda, Atharvaveda, and Garuda Purana.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'पराशर, जैमिनी और भृगु जैसे महान ऋषियों ने नींव रखी।'
                : 'Great sages like Parashara, Jaimini, and Bhrigu laid the foundations.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'बृहत पराशर होरा शास्त्र केंद्रीय शास्त्रीय ग्रंथ है।'
                : 'Brihat Parashara Hora Shastra is the central classical text.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'पश्चिमी ज्योतिष के साथ तुलना और नक्षत्र राशिचक्र (निरयण प्रणाली) की विशिष्टता।'
                : 'Comparison with Western astrology and uniqueness of the sidereal zodiac (Nirayana system).'}
            </li>
          </ul>
        </section>

        {/* Core Principles Section */}
        <section className="principles-section">
          <h2>
            {language === 'hindi'
              ? '🪐 वैदिक ज्योतिष के मूल सिद्धांत'
              : '🪐 The Core Principles of Vedic Jyotish'}
          </h2>
          <div className="principles-grid">
            <div className="principle-card">
              <h3>
                {language === 'hindi' ? 'ग्रह' : 'Grahas (Planets)'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'सूर्य, चंद्रमा, मंगल, बुध, बृहस्पति, शुक्र, शनि, राहु, केतु।'
                  : 'Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu.'}
              </p>
            </div>
            <div className="principle-card">
              <h3>
                {language === 'hindi' ? 'राशियां' : 'Rashis (Zodiac signs)'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'नक्षत्रों पर आधारित 12 राशियां।'
                  : '12 signs based on constellations.'}
              </p>
            </div>
            <div className="principle-card">
              <h3>
                {language === 'hindi' ? 'भाव' : 'Bhavas (Houses)'}
              </h3>
              <p>
                {language === 'hindi'
                  ? '12 भाव जो जीवन के सभी पहलुओं का प्रतिनिधित्व करते हैं।'
                  : '12 houses that represent all aspects of life.'}
              </p>
            </div>
            <div className="principle-card">
              <h3>
                {language === 'hindi' ? 'लग्न' : 'Lagna (Ascendant)'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'कुंडली निर्माण में इसका महत्व।'
                  : 'Its importance in chart construction.'}
              </p>
            </div>
            <div className="principle-card">
              <h3>
                {language === 'hindi' ? 'नक्षत्र' : 'Nakshatras'}
              </h3>
              <p>
                {language === 'hindi'
                  ? '27 चंद्र नक्षत्र और उनकी मनोवैज्ञानिक अंतर्दृष्टि।'
                  : '27 lunar constellations and their psychological insights.'}
              </p>
            </div>
            <div className="principle-card">
              <h3>
                {language === 'hindi' ? 'दशा प्रणाली' : 'Dasha System'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'विंशोत्तरी, योगिनी, कालचक्र।'
                  : 'Vimshottari, Yogini, Kalachakra.'}
              </p>
            </div>
            <div className="principle-card">
              <h3>
                {language === 'hindi' ? 'गोचर' : 'Transits (Gochara)'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'उनका व्यावहारिक अनुप्रयोग।'
                  : 'Their practical application.'}
              </p>
            </div>
            <div className="principle-card">
              <h3>
                {language === 'hindi' ? 'गहन विश्लेषण' : 'Advanced Analysis'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'अष्टकवर्ग, योग और षड्बल गहन व्याख्या के लिए।'
                  : 'Ashtakavarga, Yogas, and Shadbala for deeper interpretation.'}
              </p>
            </div>
          </div>
        </section>

        {/* Key Tools Section */}
        <section className="tools-section">
          <h2>
            {language === 'hindi'
              ? '🔯 वैदिक ज्योतिष के प्रमुख उपकरण'
              : '🔯 Key Tools of Vedic Jyotish'}
          </h2>
          <ul>
            <li>
              <strong>
                {language === 'hindi' ? 'जन्म कुंडली:' : 'Janma Kundali (Birth chart):'}
              </strong>{' '}
              {language === 'hindi'
                ? 'किसी के कर्म का ब्लूप्रिंट।'
                : 'Blueprint of one\'s karma.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'नवांश (D9):' : 'Navamsa (D9):'}
              </strong>{' '}
              {language === 'hindi'
                ? 'विवाह और धर्म के लिए चार्ट।'
                : 'Chart for marriage and dharma.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'चंद्र कुंडली:' : 'Chandra Kundali (Moon chart):'}
              </strong>{' '}
              {language === 'hindi'
                ? 'भावनाएं और मानसिक स्थिरता।'
                : 'Emotions and mental stability.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'प्रश्न चार्ट:' : 'Prashna Chart:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'विशिष्ट प्रश्नों के उत्तर के लिए चार्ट।'
                : 'Chart for answering specific questions.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'मुहूर्त:' : 'Muhurta (Electional astrology):'}
              </strong>{' '}
              {language === 'hindi'
                ? 'शुभ समय का चयन।'
                : 'Choosing auspicious times.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'ताजिक और जैमिनी:' : 'Tajika and Jaimini:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'वार्षिक राशिफल और जैमिनी तकनीकें।'
                : 'Annual horoscope and Jaimini techniques.'}
            </li>
          </ul>
        </section>

        {/* Applications Section */}
        <section className="applications-section">
          <h2>
            {language === 'hindi'
              ? '🧭 वैदिक ज्योतिष के अनुप्रयोग'
              : '🧭 Applications of Vedic Astrology'}
          </h2>
          <div className="applications-grid">
            <div className="application-card">
              <h3>
                {language === 'hindi' ? 'करियर और धन' : 'Career & Wealth'}
              </h3>
              <p>
                {language === 'hindi'
                  ? '2, 6, 10, और 11वें भाव।'
                  : '2nd, 6th, 10th, and 11th houses.'}
              </p>
            </div>
            <div className="application-card">
              <h3>
                {language === 'hindi' ? 'विवाह संगतता' : 'Marriage Compatibility'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'नवांश, 7वां भाव, शुक्र/मंगल की शक्ति।'
                  : 'Navamsa, 7th house, Venus/Mars strength.'}
              </p>
            </div>
            <div className="application-card">
              <h3>
                {language === 'hindi' ? 'स्वास्थ्य और आयु' : 'Health & Longevity'}
              </h3>
              <p>
                {language === 'hindi'
                  ? '6, 8, 12वें भाव; अरिष्ट योग।'
                  : '6th, 8th, 12th houses; Arishta Yogas.'}
              </p>
            </div>
            <div className="application-card">
              <h3>
                {language === 'hindi' ? 'शिक्षा और संतान' : 'Education & Children'}
              </h3>
              <p>
                {language === 'hindi'
                  ? '4 और 5वें भाव।'
                  : '4th and 5th houses.'}
              </p>
            </div>
            <div className="application-card">
              <h3>
                {language === 'hindi' ? 'आध्यात्मिक प्रगति' : 'Spiritual Progress'}
              </h3>
              <p>
                {language === 'hindi'
                  ? '9, 12वां भाव, बृहस्पति और केतु की स्थिति।'
                  : '9th, 12th house, Jupiter and Ketu placements.'}
              </p>
            </div>
            <div className="application-card">
              <h3>
                {language === 'hindi' ? 'उपाय' : 'Remedies'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'रत्न, मंत्र, पूजा, उपवास, दान।'
                  : 'Gemstones, Mantras, Pujas, Fasting (Upvas), Donations (Daan).'}
              </p>
            </div>
          </div>
        </section>

        {/* Karma and Rebirth Section */}
        <section className="karma-section">
          <h2>
            {language === 'hindi'
              ? '🧘 ज्योतिष के माध्यम से कर्म और पुनर्जन्म'
              : '🧘 Karma and Rebirth Through Jyotish'}
          </h2>
          <ul>
            <li>
              {language === 'hindi'
                ? 'ज्योतिष प्रारब्ध कर्म (निश्चित कर्म) को डिकोड करने का एक लेंस है।'
                : 'Jyotish as a lens to decode Prarabdha Karma (fixed karma).'}
            </li>
            <li>
              {language === 'hindi'
                ? 'मुक्त इच्छा बनाम नियति की भूमिका।'
                : 'Role of free will vs destiny.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'ग्रह कर्म वितरण के एजेंट के रूप में।'
                : 'Planets as agents of karma delivery.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'साढ़े साती, राहु-केतु गोचर और विकास में शनि की भूमिका का महत्व।'
                : 'Importance of Sade Sati, Rahu-Ketu transits, and Saturn\'s role in evolution.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'वैदिक ज्योतिष उच्च चेतना के साथ संरेखित करने और भय से अलग होने में मदद करता है।'
                : 'Vedic Jyotish helps align with higher consciousness and detach from fear.'}
            </li>
          </ul>
        </section>

        {/* Doshas and Yogas Section */}
        <section className="doshas-section">
          <h2>
            {language === 'hindi'
              ? '🌒 दोष और योग को समझना'
              : '🌒 Understanding Doshas and Yogas'}
          </h2>
          <div className="doshas-yogas-grid">
            <div className="doshas-card">
              <h3>
                {language === 'hindi' ? 'प्रमुख दोष' : 'Major Doshas'}
              </h3>
              <ul>
                <li>
                  {language === 'hindi'
                    ? 'मंगलिक दोष'
                    : 'Manglik Dosha'}
                </li>
                <li>
                  {language === 'hindi'
                    ? 'काल सर्प दोष'
                    : 'Kaal Sarp Dosha'}
                </li>
                <li>
                  {language === 'hindi'
                    ? 'पित्र दोष'
                    : 'Pitra Dosha'}
                </li>
                <li>
                  {language === 'hindi'
                    ? 'ग्रहण योग'
                    : 'Grahan Yog'}
                </li>
              </ul>
            </div>
            <div className="yogas-card">
              <h3>
                {language === 'hindi' ? 'शुभ योग' : 'Auspicious Yogas'}
              </h3>
              <ul>
                <li>
                  {language === 'hindi'
                    ? 'राज योग'
                    : 'Raj Yog'}
                </li>
                <li>
                  {language === 'hindi'
                    ? 'धन योग'
                    : 'Dhan Yog'}
                </li>
                <li>
                  {language === 'hindi'
                    ? 'विपरीत राज योग'
                    : 'Vipreet Raj Yoga'}
                </li>
                <li>
                  {language === 'hindi'
                    ? 'गज केसरी योग'
                    : 'Gaj Kesari Yog'}
                </li>
              </ul>
            </div>
          </div>
          <p>
            {language === 'hindi'
              ? 'उनका महत्व, गलत व्याख्याएं और संतुलित विश्लेषण की आवश्यकता।'
              : 'Their significance, misinterpretations, and need for balanced analysis.'}
          </p>
        </section>

        {/* Predictive Techniques Section */}
        <section className="predictive-section">
          <h2>
            {language === 'hindi'
              ? '🔮 भविष्यवाणी तकनीक और सटीकता'
              : '🔮 Predictive Techniques and Accuracy'}
          </h2>
          <ul>
            <li>
              {language === 'hindi'
                ? 'विंशोत्तरी दशा और उसके उप-काल।'
                : 'Vimshottari Dasha and its sub-periods.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'सटीक समय के लिए गोचर + दशा का उपयोग।'
                : 'Using transits + dashas for accurate timing.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'विवाह, संतान जन्म, नौकरी परिवर्तन, यात्रा, स्वास्थ्य का समय।'
                : 'Timing marriage, childbirth, job changes, travel, health.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'शक्ति (बल) और ग्रहीय गरिमा की अवधारणा।'
                : 'Concept of strength (Bala) and planetary dignity.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'भविष्यवाणी की नैतिकता: डराना नहीं, मार्गदर्शन करना।'
                : 'Ethics of prediction: guiding, not scaring.'}
            </li>
          </ul>
        </section>

        {/* Remedies Section */}
        <section className="remedies-section">
          <h2>
            {language === 'hindi'
              ? '🛠 वैदिक ज्योतिष में उपाय'
              : '🛠 Remedies in Vedic Jyotish'}
          </h2>
          <div className="remedies-grid">
            <div className="remedy-card">
              <h3>
                {language === 'hindi' ? 'मंत्र' : 'Mantras'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'ॐ नमः शिवाय (चंद्रमा), ॐ ब्रीं बृहस्पतये नमः (बृहस्पति)'
                  : 'Om Namah Shivaya (Moon), Om Brim Brihaspataye Namah (Jupiter)'}
              </p>
            </div>
            <div className="remedy-card">
              <h3>
                {language === 'hindi' ? 'पूजा और यज्ञ' : 'Pujas and Yagyas'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'नवग्रह पूजा, रुद्राभिषेक, पित्र दोष निवारण।'
                  : 'Navagraha Puja, Rudrabhishek, Pitra Dosh Nivaran.'}
              </p>
            </div>
            <div className="remedy-card">
              <h3>
                {language === 'hindi' ? 'रत्न' : 'Gemstones'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'पीला नीलम (बृहस्पति), नीला नीलम (शनि), मूंगा (मंगल)'
                  : 'Yellow Sapphire (Jupiter), Blue Sapphire (Saturn), Coral (Mars)'}
              </p>
            </div>
            <div className="remedy-card">
              <h3>
                {language === 'hindi' ? 'दान' : 'Charity'}
              </h3>
              <p>
                {language === 'hindi'
                  ? 'पीड़ित ग्रहों के आधार पर - भोजन, कपड़े, दान।'
                  : 'Based on afflicted planets – food, clothes, donations.'}
              </p>
            </div>
          </div>
        </section>

        {/* Relevance Section */}
        <section className="relevance-section">
          <h2>
            {language === 'hindi'
              ? '🌍 आधुनिक जीवन में वैदिक ज्योतिष की प्रासंगिकता'
              : '🌍 Relevance of Vedic Jyotish in Modern Life'}
          </h2>
          <ul>
            <li>
              {language === 'hindi'
                ? 'चार्ट अंतर्दृष्टि के माध्यम से वंशानुगत कर्म का उपचार।'
                : 'Healing ancestral karma through chart insight.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'विवाह, वित्त, व्यापार में बेहतर निर्णय लेना।'
                : 'Better decision-making in marriage, finance, business.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'समग्र मार्गदर्शन: शरीर, मन, आत्मा।'
                : 'Holistic guidance: body, mind, spirit.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'आध्यात्मिक संरेखण के लिए सीईओ, नेताओं, योगियों द्वारा विश्व स्तर पर उपयोग किया जाता है।'
                : 'Used by CEOs, leaders, yogis globally for spiritual alignment.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'एआई और एनालिटिक्स के युग में प्राचीन ज्ञान का पुनरुद्धार।'
                : 'Reviving ancient wisdom in the age of AI and analytics.'}
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default VedicJyotish;