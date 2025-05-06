import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import './Planetary.css';
import { useLanguage } from '../../context/LanguageContext';
import planetBg from '../../assets/planet.jpg';

const Planetary = () => {
  const { language } = useLanguage();

  return (
    <div className="planetary-page">
      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with background image */}
      <div className="planetary-content" style={{ backgroundImage: `url(${planetBg})` }}>
        <div className="container planetary-container">
          <div className="page-header">
            <h1 className="main-heading">
              <span className="cosmic-icon">🌌</span>
              {language === 'hindi'
                ? 'ज्योतिष में करियर पर ग्रहों का प्रभाव'
                : 'Planetary Influence on Career in Astrology'}
            </h1>
            {/* <h2 className="sub-heading">
              {language === 'hindi'
                ? 'आपके पेशेवर भाग्य के लिए एक 7000-शब्द मार्गदर्शिका'
                : 'A 7000-Word Guide for Your Professional Destiny'}
            </h2> */}
          </div>

          <section className="intro-section">
            <h2 className="section-heading">
              <span className="cosmic-icon">🧭</span>
              {language === 'hindi'
                ? 'परिचय: ग्रह कैसे आपके पेशेवर जीवन को आकार देते हैं'
                : 'Introduction: How Planets Shape Your Professional Life'}
            </h2>
            <p className="intro-paragraph">
              {language === 'hindi'
                ? 'वैदिक ज्योतिष में, आपका करियर पथ आपकी जन्म कुंडली में ग्रहों की स्थिति, उनकी शक्ति और बातचीत (योग) से जटिल रूप से जुड़ा हुआ है। करियर ज्योतिष आपकी क्षमता, उद्देश्य और पेशेवर कर्म को प्रकट करता है। सटीक मार्गदर्शन के साथ, ज्योतिष स्पष्टता का एक उपकरण बन जाता है, जो आपको अपने प्रयासों को आपके ग्रहीय ब्लूप्रिंट के साथ संरेखित करने में मदद करता है। यह गाइड प्रत्येक ग्रह के साथ-साथ प्रमुख भावों और योगों का पता लगाती है, जो आपके करियर विकल्पों, सफलता, चुनौतियों और परिवर्तनों को प्रभावित करते हैं।'
                : 'In Vedic astrology, your career path is intricately tied to the placement of planets, their strength, and interactions (Yogas) in your birth chart (Kundli). Career astrology reveals your potential, purpose, and professional karma. With accurate guidance, astrology becomes a tool of clarity, helping you align your efforts with your planetary blueprint. This guide explores how each planet, along with key houses and yogas, influences your career choices, success, challenges, and transitions.'}
            </p>
          </section>

          <section className="planets-section">
            <h2 className="section-heading">
              <span className="cosmic-icon">🌞</span>
              {language === 'hindi'
                ? 'करियर में प्रत्येक ग्रह की भूमिका'
                : 'Role of Each Planet in Career'}
            </h2>
            <p className="section-intro">
              {language === 'hindi'
                ? 'प्रत्येक ग्रह विशिष्ट पेशों और ऊर्जाओं को नियंत्रित करता है। इन भूमिकाओं को समझने से करियर के झुकावों की पहचान करने में मदद मिलती है:'
                : 'Each planet governs specific professions and energies. Understanding these roles helps identify career inclinations:'}
            </p>

            <div className="planet-card">
              <h3 className="planet-title">
                <span className="planet-icon">🔆</span>
                {language === 'hindi' ? '1. सूर्य (सूर्य) - प्राधिकरण और नेतृत्व' : '1. Sun (Surya) – Authority & Leadership'}
              </h3>
              <div className="planet-details">
                <p className="planet-governs">
                  <strong>{language === 'hindi' ? 'नियंत्रित करता है:' : 'Governs:'}</strong>
                  {language === 'hindi'
                    ? ' राजनीति, सरकार, प्रशासन, चिकित्सा, प्राधिकरण भूमिकाएँ'
                    : ' Politics, Government, Administration, Medicine, Authority roles'}
                </p>
                <p className="planet-traits">
                  <strong>{language === 'hindi' ? 'विशेषताएँ:' : 'Traits:'}</strong>
                  {language === 'hindi'
                    ? ' आत्मविश्वास, महत्वाकांक्षा, कमान'
                    : ' Confidence, ambition, command'}
                </p>
                <p className="planet-strong">
                  <strong>{language === 'hindi' ? 'मजबूत सूर्य:' : 'Strong Sun:'}</strong>
                  {language === 'hindi'
                    ? ' समाज में शक्तिशाली स्थिति, मान्यता'
                    : ' Powerful position in society, recognition'}
                </p>
                <p className="planet-weak">
                  <strong>{language === 'hindi' ? 'कमजोर सूर्य:' : 'Weak Sun:'}</strong>
                  {language === 'hindi'
                    ? ' अहंकार के मुद्दे, नेतृत्व में अस्थिरता'
                    : ' Ego issues, instability in leadership'}
                </p>
                <p className="planet-house">
                  <strong>📌</strong>
                  {language === 'hindi'
                    ? ' 10वें भाव में सूर्य: सरकारी नौकरियों, सीईओ स्तर के पदों के लिए आदर्श'
                    : ' Sun in 10th House: Ideal for government jobs, CEO-level positions'}
                </p>
              </div>
            </div>

            <div className="planet-card">
              <h3 className="planet-title">
                <span className="planet-icon">🌙</span>
                {language === 'hindi' ? '2. चंद्रमा (चंद्र) - मन और जनसंपर्क' : '2. Moon (Chandra) – Mind & Public Relations'}
              </h3>
              <div className="planet-details">
                <p className="planet-governs">
                  <strong>{language === 'hindi' ? 'नियंत्रित करता है:' : 'Governs:'}</strong>
                  {language === 'hindi'
                    ? ' मीडिया, आतिथ्य, परामर्श, नर्सिंग, यात्रा, तरल पदार्थ'
                    : ' Media, Hospitality, Counseling, Nursing, Travel, Liquids'}
                </p>
                <p className="planet-traits">
                  <strong>{language === 'hindi' ? 'विशेषताएँ:' : 'Traits:'}</strong>
                  {language === 'hindi'
                    ? ' अनुकूलनशीलता, स्मृति, भावनात्मक बुद्धिमत्ता'
                    : ' Adaptability, memory, emotional intelligence'}
                </p>
                <p className="planet-strong">
                  <strong>{language === 'hindi' ? 'मजबूत चंद्रमा:' : 'Strong Moon:'}</strong>
                  {language === 'hindi'
                    ? ' रचनात्मक, अच्छा संचार'
                    : ' Creative, good communication'}
                </p>
                <p className="planet-weak">
                  <strong>{language === 'hindi' ? 'कमजोर चंद्रमा:' : 'Weak Moon:'}</strong>
                  {language === 'hindi'
                    ? ' मानसिक तनाव, अस्थिरता'
                    : ' Mental stress, instability'}
                </p>
                <p className="planet-house">
                  <strong>📌</strong>
                  {language === 'hindi'
                    ? ' 3रे भाव में चंद्रमा: मीडिया, यात्रा, कलात्मक क्षेत्र'
                    : ' Moon in 3rd House: Media, travel, artistic fields'}
                </p>
              </div>
            </div>

            <div className="planet-card">
              <h3 className="planet-title">
                <span className="planet-icon">🔵</span>
                {language === 'hindi' ? '3. मंगल (मंगल) - ऊर्जा और निष्पादन' : '3. Mars (Mangal) – Energy & Execution'}
              </h3>
              <div className="planet-details">
                <p className="planet-governs">
                  <strong>{language === 'hindi' ? 'नियंत्रित करता है:' : 'Governs:'}</strong>
                  {language === 'hindi'
                    ? ' इंजीनियरिंग, सैन्य, खेल, पुलिस, रियल एस्टेट'
                    : ' Engineering, Military, Sports, Police, Real Estate'}
                </p>
                <p className="planet-traits">
                  <strong>{language === 'hindi' ? 'विशेषताएँ:' : 'Traits:'}</strong>
                  {language === 'hindi'
                    ? ' आक्रामकता, साहस, तकनीकी क्षमताएँ'
                    : ' Aggression, courage, technical abilities'}
                </p>
                <p className="planet-strong">
                  <strong>{language === 'hindi' ? 'मजबूत मंगल:' : 'Strong Mars:'}</strong>
                  {language === 'hindi'
                    ? ' कार्य-उन्मुख, आत्मविश्वासी नेतृत्व'
                    : ' Action-oriented, assertive leadership'}
                </p>
                <p className="planet-weak">
                  <strong>{language === 'hindi' ? 'कमजोर मंगल:' : 'Weak Mars:'}</strong>
                  {language === 'hindi'
                    ? ' क्रोध, आवेगपूर्ण करियर निर्णय'
                    : ' Anger, impulsive career decisions'}
                </p>
                <p className="planet-house">
                  <strong>📌</strong>
                  {language === 'hindi'
                    ? ' 6ठे भाव में मंगल: रक्षा, प्रतिस्पर्धा-आधारित करियर के लिए बढ़िया'
                    : ' Mars in 6th House: Great for defense, competition-based careers'}
                </p>
              </div>
            </div>

            <div className="planet-card">
              <h3 className="planet-title">
                <span className="planet-icon">🟡</span>
                {language === 'hindi' ? '4. बुध (बुध) - बुद्धिमत्ता और संचार' : '4. Mercury (Budh) – Intelligence & Communication'}
              </h3>
              <div className="planet-details">
                <p className="planet-governs">
                  <strong>{language === 'hindi' ? 'नियंत्रित करता है:' : 'Governs:'}</strong>
                  {language === 'hindi'
                    ? ' व्यापार, लेखन, मार्केटिंग, वित्त, आईटी, शिक्षण'
                    : ' Business, Writing, Marketing, Finance, IT, Teaching'}
                </p>
                <p className="planet-traits">
                  <strong>{language === 'hindi' ? 'विशेषताएँ:' : 'Traits:'}</strong>
                  {language === 'hindi'
                    ? ' तर्क, अनुकूलनशीलता, भाषण'
                    : ' Logic, adaptability, speech'}
                </p>
                <p className="planet-strong">
                  <strong>{language === 'hindi' ? 'मजबूत बुध:' : 'Strong Mercury:'}</strong>
                  {language === 'hindi'
                    ? ' विश्लेषणात्मक और स्पष्ट'
                    : ' Analytical and articulate'}
                </p>
                <p className="planet-weak">
                  <strong>{language === 'hindi' ? 'कमजोर बुध:' : 'Weak Mercury:'}</strong>
                  {language === 'hindi'
                    ? ' तंत्रिका ऊर्जा, अनिर्णय'
                    : ' Nervous energy, indecision'}
                </p>
                <p className="planet-house">
                  <strong>📌</strong>
                  {language === 'hindi'
                    ? ' 2रे या 3रे भाव में बुध: बिक्री, पत्रकारिता, लेखांकन में मजबूत करियर'
                    : ' Mercury in 2nd or 3rd House: Strong career in sales, journalism, accounting'}
                </p>
              </div>
            </div>

            <div className="planet-card">
              <h3 className="planet-title">
                <span className="planet-icon">🟣</span>
                {language === 'hindi' ? '5. बृहस्पति (गुरु) - ज्ञान और विस्तार' : '5. Jupiter (Guru) – Wisdom & Expansion'}
              </h3>
              <div className="planet-details">
                <p className="planet-governs">
                  <strong>{language === 'hindi' ? 'नियंत्रित करता है:' : 'Governs:'}</strong>
                  {language === 'hindi'
                    ? ' शिक्षा, कानून, धर्म, आध्यात्मिक परामर्श, शिक्षण'
                    : ' Education, Law, Religion, Spiritual Counseling, Teaching'}
                </p>
                <p className="planet-traits">
                  <strong>{language === 'hindi' ? 'विशेषताएँ:' : 'Traits:'}</strong>
                  {language === 'hindi'
                    ? ' नैतिकता, मार्गदर्शन, नेतृत्व'
                    : ' Morality, guidance, leadership'}
                </p>
                <p className="planet-strong">
                  <strong>{language === 'hindi' ? 'मजबूत बृहस्पति:' : 'Strong Jupiter:'}</strong>
                  {language === 'hindi'
                    ? ' उत्कृष्ट मेंटर, सम्मानित नेता'
                    : ' Excellent mentor, respected leader'}
                </p>
                <p className="planet-weak">
                  <strong>{language === 'hindi' ? 'कमजोर बृहस्पति:' : 'Weak Jupiter:'}</strong>
                  {language === 'hindi'
                    ? ' अति-आत्मविश्वास, सफलता में देरी'
                    : ' Over-confidence, delay in success'}
                </p>
                <p className="planet-house">
                  <strong>📌</strong>
                  {language === 'hindi'
                    ? ' 9वें या 10वें भाव में बृहस्पति: प्रोफेसरों, वकीलों, आध्यात्मिक गाइडों के लिए अनुकूल'
                    : ' Jupiter in 9th or 10th House: Favors professors, lawyers, spiritual guides'}
                </p>
              </div>
            </div>

            <div className="planet-card">
              <h3 className="planet-title">
                <span className="planet-icon">🔵</span>
                {language === 'hindi' ? '6. शुक्र (शुक्र) - कला और विलासिता' : '6. Venus (Shukra) – Art & Luxury'}
              </h3>
              <div className="planet-details">
                <p className="planet-governs">
                  <strong>{language === 'hindi' ? 'नियंत्रित करता है:' : 'Governs:'}</strong>
                  {language === 'hindi'
                    ? ' फैशन, फिल्म, संगीत, डिजाइन, सौंदर्य, लक्जरी ब्रांड'
                    : ' Fashion, Film, Music, Design, Beauty, Luxury Brands'}
                </p>
                <p className="planet-traits">
                  <strong>{language === 'hindi' ? 'विशेषताएँ:' : 'Traits:'}</strong>
                  {language === 'hindi'
                    ? ' आकर्षण, रचनात्मकता, सौंदर्यबोध'
                    : ' Charm, creativity, aesthetics'}
                </p>
                <p className="planet-strong">
                  <strong>{language === 'hindi' ? 'मजबूत शुक्र:' : 'Strong Venus:'}</strong>
                  {language === 'hindi'
                    ? ' कलाकार, अभिनेता, प्रभावशाली'
                    : ' Artist, actor, influencer'}
                </p>
                <p className="planet-weak">
                  <strong>{language === 'hindi' ? 'कमजोर शुक्र:' : 'Weak Venus:'}</strong>
                  {language === 'hindi'
                    ? ' अभिमान, आनंद, विकल्पों में भ्रम'
                    : ' Vanity, indulgence, confusion in choices'}
                </p>
                <p className="planet-house">
                  <strong>📌</strong>
                  {language === 'hindi'
                    ? ' 5वें या 7वें भाव में शुक्र: रचनात्मक और साझेदारी-उन्मुख पेशे'
                    : ' Venus in 5th or 7th House: Creative & partnership-oriented professions'}
                </p>
              </div>
            </div>

            <div className="planet-card">
              <h3 className="planet-title">
                <span className="planet-icon">🖤</span>
                {language === 'hindi' ? '7. शनि (शनि) - अनुशासन और श्रम' : '7. Saturn (Shani) – Discipline & Labor'}
              </h3>
              <div className="planet-details">
                <p className="planet-governs">
                  <strong>{language === 'hindi' ? 'नियंत्रित करता है:' : 'Governs:'}</strong>
                  {language === 'hindi'
                    ? ' कानून, न्यायपालिका, श्रम, इंजीनियरिंग, लोहा, खनन, कृषि'
                    : ' Law, Judiciary, Labor, Engineering, Iron, Mining, Agriculture'}
                </p>
                <p className="planet-traits">
                  <strong>{language === 'hindi' ? 'विशेषताएँ:' : 'Traits:'}</strong>
                  {language === 'hindi'
                    ? ' धैर्य, दृढ़ता, दीर्घकालिक फोकस'
                    : ' Patience, perseverance, long-term focus'}
                </p>
                <p className="planet-strong">
                  <strong>{language === 'hindi' ? 'मजबूत शनि:' : 'Strong Saturn:'}</strong>
                  {language === 'hindi'
                    ? ' संघर्ष के बाद सफलता'
                    : ' Success after struggle'}
                </p>
                <p className="planet-weak">
                  <strong>{language === 'hindi' ? 'कमजोर शनि:' : 'Weak Saturn:'}</strong>
                  {language === 'hindi'
                    ? ' देरी, कठिनाई, करियर में ठहराव'
                    : ' Delay, hardship, career stagnation'}
                </p>
                <p className="planet-house">
                  <strong>📌</strong>
                  {language === 'hindi'
                    ? ' 10वें भाव में शनि: कानूनी, सरकारी, तकनीकी करियर'
                    : ' Saturn in 10th House: Legal, government, technical careers'}
                </p>
              </div>
            </div>

            <div className="planet-card">
              <h3 className="planet-title">
                <span className="planet-icon">🌀</span>
                {language === 'hindi' ? '8. राहु - नवाचार और वैश्विक करियर' : '8. Rahu – Innovation & Global Careers'}
              </h3>
              <div className="planet-details">
                <p className="planet-governs">
                  <strong>{language === 'hindi' ? 'नियंत्रित करता है:' : 'Governs:'}</strong>
                  {language === 'hindi'
                    ? ' विदेशी मामले, आईटी, राजनीति, शेयर बाजार, विमानन, डिजिटल करियर'
                    : ' Foreign affairs, IT, Politics, Stock Market, Aviation, Digital Careers'}
                </p>
                <p className="planet-traits">
                  <strong>{language === 'hindi' ? 'विशेषताएँ:' : 'Traits:'}</strong>
                  {language === 'hindi'
                    ? ' जुनून, अपरंपरागत विकल्प, महत्वाकांक्षा'
                    : ' Obsession, unconventional choices, ambition'}
                </p>
                <p className="planet-strong">
                  <strong>{language === 'hindi' ? 'मजबूत राहु:' : 'Strong Rahu:'}</strong>
                  {language === 'hindi'
                    ? ' बॉक्स से बाहर सोचने वाला'
                    : ' Out-of-the-box thinker'}
                </p>
                <p className="planet-weak">
                  <strong>{language === 'hindi' ? 'कमजोर राहु:' : 'Weak Rahu:'}</strong>
                  {language === 'hindi'
                    ? ' लालच, लत, उत्थान के बाद पतन'
                    : ' Greed, addiction, downfall after rise'}
                </p>
                <p className="planet-house">
                  <strong>📌</strong>
                  {language === 'hindi'
                    ? ' 6ठे या 11वें भाव में राहु: आधुनिक, अपरंपरागत क्षेत्रों के लिए उत्कृष्ट'
                    : ' Rahu in 6th or 11th House: Excellent for modern, unconventional fields'}
                </p>
              </div>
            </div>

            <div className="planet-card">
              <h3 className="planet-title">
                <span className="planet-icon">🔻</span>
                {language === 'hindi' ? '9. केतु - मोक्ष और अनुसंधान' : '9. Ketu – Moksha & Research'}
              </h3>
              <div className="planet-details">
                <p className="planet-governs">
                  <strong>{language === 'hindi' ? 'नियंत्रित करता है:' : 'Governs:'}</strong>
                  {language === 'hindi'
                    ? ' गुप्त विज्ञान, आध्यात्मिकता, अनुसंधान, मनोविज्ञान'
                    : ' Occult sciences, Spirituality, Research, Psychology'}
                </p>
                <p className="planet-traits">
                  <strong>{language === 'hindi' ? 'विशेषताएँ:' : 'Traits:'}</strong>
                  {language === 'hindi'
                    ? ' अलगाव, विरक्ति, अंतर्दृष्टि'
                    : ' Isolation, detachment, insight'}
                </p>
                <p className="planet-strong">
                  <strong>{language === 'hindi' ? 'मजबूत केतु:' : 'Strong Ketu:'}</strong>
                  {language === 'hindi'
                    ? ' अंतर्ज्ञानी, अत्यधिक केंद्रित'
                    : ' Insightful, highly focused'}
                </p>
                <p className="planet-weak">
                  <strong>{language === 'hindi' ? 'कमजोर केतु:' : 'Weak Ketu:'}</strong>
                  {language === 'hindi'
                    ? ' भ्रम, पलायनवाद'
                    : ' Confusion, escapism'}
                </p>
                <p className="planet-house">
                  <strong>📌</strong>
                  {language === 'hindi'
                    ? ' 12वें या 8वें भाव में केतु: ज्योतिषी, रहस्यवादी, आध्यात्मिक शोधकर्ता'
                    : ' Ketu in 12th or 8th House: Astrologers, mystics, spiritual researchers'}
                </p>
              </div>
            </div>
          </section>

          <section className="houses-section">
            <h2 className="section-heading">
              <span className="cosmic-icon">🏠</span>
              {language === 'hindi' ? 'कुंडली में करियर भाव' : 'Career Houses in Kundli'}
            </h2>
            <div className="houses-table-container">
              <table className="houses-table">
                <thead>
                  <tr>
                    <th>{language === 'hindi' ? 'भाव संख्या' : 'House Number'}</th>
                    <th>{language === 'hindi' ? 'करियर महत्व' : 'Career Significance'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{language === 'hindi' ? '1ला भाव' : '1st House'}</td>
                    <td>{language === 'hindi' ? 'स्वयं, व्यक्तित्व, महत्वाकांक्षा' : 'Self, personality, ambition'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? '2रा भाव' : '2nd House'}</td>
                    <td>{language === 'hindi' ? 'धन, वाणी, पारिवारिक व्यवसाय' : 'Wealth, speech, family business'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? '6ठा भाव' : '6th House'}</td>
                    <td>{language === 'hindi' ? 'नौकरी, सेवा, प्रतिस्पर्धा' : 'Job, service, competition'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? '7वां भाव' : '7th House'}</td>
                    <td>{language === 'hindi' ? 'व्यापार, साझेदारी' : 'Business, partnerships'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? '10वां भाव' : '10th House'}</td>
                    <td>{language === 'hindi' ? 'मुख्य पेशा, करियर स्थिति' : 'Main profession, career status'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? '11वां भाव' : '11th House'}</td>
                    <td>{language === 'hindi' ? 'लाभ, पेशे से आय' : 'Gains, income from profession'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="yogas-section">
            <h2 className="section-heading">
              <span className="cosmic-icon">⚖️</span>
              {language === 'hindi' ? 'शक्तिशाली करियर योग (संयोजन)' : 'Powerful Career Yogas (Combinations)'}
            </h2>
            <div className="yogas-list">
              <div className="yoga-item">
                <h3 className="yoga-title">
                  <span className="yoga-icon">✅</span>
                  {language === 'hindi' ? '1. राज योग - प्राधिकरण और नेतृत्व सफलता' : '1. Raj Yoga – Authority and leadership success'}
                </h3>
                <p className="yoga-description">
                  {language === 'hindi'
                    ? 'केंद्र (1,4,7,10) और त्रिकोण (1,5,9) स्वामियों के जुड़ने पर होता है।'
                    : 'Occurs when Kendra (1,4,7,10) and Trikona (1,5,9) lords connect.'}
                </p>
              </div>
              <div className="yoga-item">
                <h3 className="yoga-title">
                  <span className="yoga-icon">✅</span>
                  {language === 'hindi' ? '2. धन योग - करियर से धन' : '2. Dhana Yoga – Wealth from career'}
                </h3>
                <p className="yoga-description">
                  {language === 'hindi'
                    ? 'जब 2रे, 11वें और 5वें स्वामी जुड़ते हैं।'
                    : 'When 2nd, 11th, and 5th lords combine.'}
                </p>
              </div>
              <div className="yoga-item">
                <h3 className="yoga-title">
                  <span className="yoga-icon">✅</span>
                  {language === 'hindi' ? '3. बुधादित्य योग - बुद्धिमत्ता और प्रसिद्धि' : '3. Budhaditya Yoga – Intelligence and fame'}
                </h3>
                <p className="yoga-description">
                  {language === 'hindi'
                    ? 'एक ही भाव में सूर्य + बुध द्वारा बनाया गया।'
                    : 'Formed by Sun + Mercury in the same house.'}
                </p>
              </div>
              <div className="yoga-item">
                <h3 className="yoga-title">
                  <span className="yoga-icon">✅</span>
                  {language === 'hindi' ? '4. गज केसरी योग - ज्ञान और प्रसिद्धि' : '4. Gaja Kesari Yoga – Wisdom & fame'}
                </h3>
                <p className="yoga-description">
                  {language === 'hindi'
                    ? 'केंद्र में चंद्रमा + बृहस्पति'
                    : 'Moon + Jupiter in Kendra'}
                </p>
              </div>
              <div className="yoga-item">
                <h3 className="yoga-title">
                  <span className="yoga-icon">✅</span>
                  {language === 'hindi' ? '5. विपरीत राज योग - प्रतिकूलताओं से सफलता' : '5. Vipreet Raj Yoga – Success from adversities'}
                </h3>
                <p className="yoga-description">
                  {language === 'hindi'
                    ? '6ठे, 8वें, 12वें भावों के स्वामियों द्वारा इन्हीं भावों में स्थित होने पर बनता है।'
                    : 'Formed by lords of 6th, 8th, 12th houses in these houses themselves.'}
                </p>
              </div>
            </div>
          </section>

          <section className="dashas-section">
            <h2 className="section-heading">
              <span className="cosmic-icon">📊</span>
              {language === 'hindi' ? 'ग्रहीय दशाएँ और करियर चरण' : 'Planetary Dashas and Career Phases'}
            </h2>
            <p className="section-intro">
              {language === 'hindi'
                ? 'आपकी दशा (ग्रहीय अवधि) तय करती है कि करियर में परिवर्तन कब होंगे।'
                : 'Your Dasha (planetary period) decides when career changes happen.'}
            </p>
            <div className="dashas-table-container">
              <table className="dashas-table">
                <thead>
                  <tr>
                    <th>{language === 'hindi' ? 'दशा अवधि' : 'Dasha Period'}</th>
                    <th>{language === 'hindi' ? 'संभावित प्रभाव' : 'Likely Impact'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{language === 'hindi' ? 'सूर्य दशा' : 'Sun Dasha'}</td>
                    <td>{language === 'hindi' ? 'नेतृत्व, शक्ति, पदोन्नति' : 'Leadership, power, promotions'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'चंद्र दशा' : 'Moon Dasha'}</td>
                    <td>{language === 'hindi' ? 'मानसिक कार्य, भावनात्मक निर्णय' : 'Mental work, emotional decisions'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'मंगल दशा' : 'Mars Dasha'}</td>
                    <td>{language === 'hindi' ? 'साहसिक कदम, नई करियर दिशा' : 'Bold moves, new career direction'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'बुध दशा' : 'Mercury Dasha'}</td>
                    <td>{language === 'hindi' ? 'सीखना, संचार, छोटी यात्राएँ' : 'Learning, communication, short travels'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'बृहस्पति दशा' : 'Jupiter Dasha'}</td>
                    <td>{language === 'hindi' ? 'शिक्षण, ज्ञान, उच्च स्थिति' : 'Teaching, wisdom, high status'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'शुक्र दशा' : 'Venus Dasha'}</td>
                    <td>{language === 'hindi' ? 'रचनात्मक विकास, आनंद' : 'Creative growth, enjoyment'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'शनि दशा' : 'Saturn Dasha'}</td>
                    <td>{language === 'hindi' ? 'कड़ी मेहनत, परीक्षाएँ, दीर्घकालिक सफलता' : 'Hard work, tests, long-term success'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'राहु दशा' : 'Rahu Dasha'}</td>
                    <td>{language === 'hindi' ? 'अचानक परिवर्तन, अपरंपरागत उत्थान' : 'Sudden changes, unconventional rise'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'केतु दशा' : 'Ketu Dasha'}</td>
                    <td>{language === 'hindi' ? 'विरक्ति, आध्यात्मिक परिवर्तन' : 'Detachment, spiritual transitions'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="ascendant-section">
            <h2 className="section-heading">
              <span className="cosmic-icon">👩‍💼</span>
              {language === 'hindi' ? 'लग्न (लग्न) द्वारा करियर अनुशंसाएँ' : 'Career Recommendations by Ascendant (Lagna)'}
            </h2>
            <div className="ascendant-table-container">
              <table className="ascendant-table">
                <thead>
                  <tr>
                    <th>{language === 'hindi' ? 'लग्न' : 'Ascendant'}</th>
                    <th>{language === 'hindi' ? 'उपयुक्त करियर' : 'Suitable Careers'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{language === 'hindi' ? 'मेष' : 'Aries'}</td>
                    <td>{language === 'hindi' ? 'रक्षा, खेल, रियल एस्टेट, सर्जरी' : 'Defense, sports, real estate, surgery'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'वृषभ' : 'Taurus'}</td>
                    <td>{language === 'hindi' ? 'वित्त, कला, सौंदर्य, लक्जरी व्यवसाय' : 'Finance, art, beauty, luxury business'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'मिथुन' : 'Gemini'}</td>
                    <td>{language === 'hindi' ? 'लेखन, पत्रकारिता, मार्केटिंग, शिक्षण' : 'Writing, journalism, marketing, teaching'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'कर्क' : 'Cancer'}</td>
                    <td>{language === 'hindi' ? 'आतिथ्य, चिकित्सा, परामर्श, रियल एस्टेट' : 'Hospitality, medicine, counseling, real estate'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'सिंह' : 'Leo'}</td>
                    <td>{language === 'hindi' ? 'सरकार, नेतृत्व, मीडिया, प्रशासन' : 'Government, leadership, media, administration'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'कन्या' : 'Virgo'}</td>
                    <td>{language === 'hindi' ? 'लेखांकन, अनुसंधान, ज्योतिष, शिक्षण' : 'Accounting, research, astrology, teaching'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'तुला' : 'Libra'}</td>
                    <td>{language === 'hindi' ? 'कला, फैशन, कानून, कूटनीति' : 'Art, fashion, law, diplomacy'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'वृश्चिक' : 'Scorpio'}</td>
                    <td>{language === 'hindi' ? 'फोरेंसिक, गुप्त, सैन्य, मनोविज्ञान' : 'Forensics, occult, military, psychology'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'धनु' : 'Sagittarius'}</td>
                    <td>{language === 'hindi' ? 'आध्यात्मिक कार्य, कानून, शिक्षा' : 'Spiritual work, law, education'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'मकर' : 'Capricorn'}</td>
                    <td>{language === 'hindi' ? 'इंजीनियरिंग, सरकार, अनुशासन-आधारित कार्य' : 'Engineering, government, discipline-based work'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'कुंभ' : 'Aquarius'}</td>
                    <td>{language === 'hindi' ? 'प्रौद्योगिकी, नवाचार, मानवतावादी कार्य' : 'Technology, innovation, humanitarian work'}</td>
                  </tr>
                  <tr>
                    <td>{language === 'hindi' ? 'मीन' : 'Pisces'}</td>
                    <td>{language === 'hindi' ? 'उपचार, आध्यात्मिक कला, एनजीओ, लेखन' : 'Healing, spiritual arts, NGO, writing'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="remedies-section">
            <h2 className="section-heading">
              <span className="cosmic-icon">🛠️</span>
              {language === 'hindi' ? 'करियर विकास के लिए ज्योतिषीय उपाय' : 'Astrological Remedies for Career Growth'}
            </h2>
            <div className="remedies-content">
              <div className="remedy-category">
                <h3 className="remedy-category-title">{language === 'hindi' ? 'मंत्र:' : 'Mantras:'}</h3>
                <ul className="remedy-list">
                  <li>
                    {language === 'hindi'
                      ? 'सूर्य बीज मंत्र: "ओम ह्रां ह्रीं ह्रौं सः सूर्याय नमः"'
                      : 'Surya Beej Mantra: "Om Hraam Hreem Hraum Sah Suryaya Namah"'}
                  </li>
                  <li>
                    {language === 'hindi'
                      ? 'बुध बीज मंत्र: "ओम ब्रां ब्रीं ब्रौं सः बुधाय नमः"'
                      : 'Budh Beej Mantra: "Om Braam Breem Broum Sah Budhaya Namah"'}
                  </li>
                </ul>
              </div>
              <div className="remedy-category">
                <h3 className="remedy-category-title">{language === 'hindi' ? 'यंत्र:' : 'Yantras:'}</h3>
                <ul className="remedy-list">
                  <li>
                    {language === 'hindi'
                      ? 'श्री यंत्र, कुबेर यंत्र (धन और सफलता के लिए)'
                      : 'Sri Yantra, Kuber Yantra (for wealth & success)'}
                  </li>
                </ul>
              </div>
              <div className="remedy-category">
                <h3 className="remedy-category-title">{language === 'hindi' ? 'पूजा:' : 'Pujas:'}</h3>
                <ul className="remedy-list">
                  <li>
                    {language === 'hindi'
                      ? 'अशुभ ग्रहों के लिए नवग्रह शांति'
                      : 'Navagraha Shanti for malefic planets'}
                  </li>
                  <li>
                    {language === 'hindi'
                      ? 'करियर में मानसिक स्पष्टता के लिए चंद्र शांति'
                      : 'Chandra Shanti for mental clarity in career'}
                  </li>
                  <li>
                    {language === 'hindi'
                      ? 'करियर स्थिरता के लिए शनि पूजा'
                      : 'Shani Puja for career stability'}
                  </li>
                </ul>
              </div>
              <div className="remedy-category">
                <h3 className="remedy-category-title">{language === 'hindi' ? 'रत्न:' : 'Gemstones:'}</h3>
                <ul className="remedy-list">
                  <li>
                    {language === 'hindi'
                      ? 'सूर्य के लिए माणिक'
                      : 'Ruby for Sun'}
                  </li>
                  <li>
                    {language === 'hindi'
                      ? 'बुध के लिए पन्ना'
                      : 'Emerald for Mercury'}
                  </li>
                  <li>
                    {language === 'hindi'
                      ? 'शनि के लिए नीलम (केवल विशेषज्ञ मार्गदर्शन के बाद)'
                      : 'Blue Sapphire for Saturn (only after expert guidance)'}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="case-study-section">
            <h2 className="section-heading">
              <span className="cosmic-icon">📋</span>
              {language === 'hindi' ? 'केस स्टडी उदाहरण' : 'Case Study Example'}
            </h2>
            <div className="case-study-content">
              <p className="case-study-details">
                <span className="case-study-icon">✨</span>
                {language === 'hindi'
                  ? 'महिला, जन्म तिथि: 12-03-1990, सुबह 10:10, दिल्ली'
                  : 'Female, DOB: 12-03-1990, 10:10 AM, Delhi'}
              </p>
              <ul className="case-study-analysis">
                <li>
                  {language === 'hindi' ? 'लग्न: मीन' : 'Lagna: Pisces'}
                </li>
                <li>
                  {language === 'hindi' ? '10वें भाव का स्वामी: 9वें भाव में बृहस्पति' : '10th House Lord: Jupiter in 9th house'}
                </li>
                <li>
                  {language === 'hindi' ? '5वें भाव में शुक्र - रचनात्मकता' : 'Venus in 5th house – creativity'}
                </li>
                <li>
                  {language === 'hindi' ? 'मजबूत बुध - लेखन कौशल' : 'Strong Mercury – writing skills'}
                </li>
              </ul>
            </div>
          </section>

          <div className="cta-section">
            <h2 className="cta-heading">
              {language === 'hindi'
                ? 'अपने करियर के लिए व्यक्तिगत ज्योतिषीय मार्गदर्शन प्राप्त करें'
                : 'Get Personalized Astrological Guidance for Your Career'}
            </h2>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                {language === 'hindi' ? 'अभी बुक करें' : 'Book Now'}
              </a>
              <a href="/services" className="cta-button secondary">
                {language === 'hindi' ? 'और सेवाएँ देखें' : 'View More Services'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Planetary;