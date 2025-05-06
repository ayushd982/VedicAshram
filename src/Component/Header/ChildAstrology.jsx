import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import './ChildAstrology.css';
import { useLanguage } from '../../context/LanguageContext';

const ChildAstrology = () => {
  const { language } = useLanguage();
  return (
    <div className="child-astrology-page">
      {/* Twinkling stars in the background */}
      <div className="twinkling-stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      {/* Shooting stars */}
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with margin after navbar */}
      <div className="child-astrology-content">
        <div className="container child-astrology-container">
          <div className="page-header">
            <div className="cosmic-decoration left"></div>
            <h1 className="main-heading">
              <i className="fas fa-child"></i> {language === 'hindi' ? 'बाल ज्योतिष' : 'Child Astrology'}
              <span className="heading-subtitle">
                {language === 'hindi'
                  ? 'आकाशीय मार्गदर्शन के माध्यम से युवा जीवन का पोषण'
                  : 'Nurturing Young Lives Through Celestial Guidance'}
              </span>
            </h1>
            <div className="cosmic-decoration right"></div>
          </div>

          <section className="intro-section">
            <h2 className="section-heading">
              <i className="fas fa-question-circle"></i> {language === 'hindi' ? 'बाल ज्योतिष क्या है?' : 'What is Child Astrology?'}
            </h2>
            <p className="intro-paragraph">
              {language === 'hindi'
                ? 'बाल ज्योतिष वैदिक ज्योतिष की एक विशेष शाखा है जो बच्चे की जन्म कुंडली का विश्लेषण करके उनकी जन्मजात प्रतिभाओं, व्यक्तित्व लक्षणों और संभावित चुनौतियों को समझने पर केंद्रित है। यह माता-पिता और देखभाल करने वालों को बच्चे की प्राकृतिक क्षमताओं का पोषण करने और उन्हें ज्ञान और करुणा के साथ विकास के चरणों से गुजरने में मार्गदर्शन करने के लिए मूल्यवान अंतर्दृष्टि प्रदान करता है।'
                : 'Child Astrology is a specialized branch of Vedic astrology that focuses on analyzing a child\'s birth chart to understand their innate talents, personality traits, and potential challenges. It provides parents and caregivers with valuable insights to nurture a child\'s natural abilities and guide them through developmental stages with wisdom and compassion.'}
            </p>
            <div className="cosmic-illustration">
              <div className="planets-orbit child-theme">
                <div className="planet sun"></div>
                <div className="planet mercury"></div>
                <div className="planet venus"></div>
                <div className="planet earth"></div>
                <div className="planet mars"></div>
                <div className="planet jupiter"></div>
                <div className="planet saturn"></div>
              </div>
            </div>
          </section>

          <section className="key-elements-section">
            <h2 className="section-heading">
              <i className="fas fa-key"></i> {language === 'hindi' ? 'बाल ज्योतिष के प्रमुख पहलू' : 'Key Aspects of Child Astrology'}
            </h2>

            <div className="element-card personality-card">
              <h3 className="element-title">
                <span className="element-number">1</span> {language === 'hindi' ? 'आपके बच्चे के व्यक्तित्व को समझना' : 'Understanding Your Child\'s Personality'}
              </h3>
              <p className="element-description">
                {language === 'hindi'
                  ? 'बच्चे की जन्म कुंडली उनके अद्वितीय व्यक्तित्व लक्षणों, भावनात्मक प्रवृत्तियों और प्राकृतिक झुकावों को प्रकट करती है:'
                  : 'A child\'s birth chart reveals their unique personality traits, emotional tendencies, and natural inclinations:'}
              </p>
              <ul className="personality-list">
                <li>
                  <span className="aspect-name">{language === 'hindi' ? 'सूर्य राशि' : 'Sun Sign'}</span> –
                  {language === 'hindi' ? 'मूल व्यक्तित्व और अहंकार का विकास' : 'Core personality and ego development'}
                </li>
                <li>
                  <span className="aspect-name">{language === 'hindi' ? 'चंद्र राशि' : 'Moon Sign'}</span> –
                  {language === 'hindi' ? 'भावनात्मक प्रकृति और आराम की जरूरतें' : 'Emotional nature and comfort needs'}
                </li>
                <li>
                  <span className="aspect-name">{language === 'hindi' ? 'लग्न' : 'Ascendant'}</span> –
                  {language === 'hindi' ? 'वे दुनिया से कैसे संपर्क करते हैं और पहले प्रभाव' : 'How they approach the world and first impressions'}
                </li>
                <li>
                  <span className="aspect-name">{language === 'hindi' ? 'बुध' : 'Mercury'}</span> –
                  {language === 'hindi' ? 'सीखने की शैली और संचार पैटर्न' : 'Learning style and communication patterns'}
                </li>
              </ul>
              <div className="personality-illustration"></div>
            </div>

            <div className="element-card talents-card">
              <h3 className="element-title">
                <span className="element-number">2</span> {language === 'hindi' ? 'प्राकृतिक प्रतिभाओं और क्षमताओं की पहचान' : 'Identifying Natural Talents and Abilities'}
              </h3>
              <p className="element-description">
                {language === 'hindi'
                  ? 'बाल ज्योतिष जन्मजात प्रतिभाओं और क्षमताओं की पहचान करने में मदद करता है जिन्हें प्रारंभिक उम्र से ही पोषित किया जा सकता है:'
                  : 'Child astrology helps identify innate talents and abilities that can be nurtured from an early age:'}
              </p>
              <div className="talents-grid">
                <div className="talent-item">
                  <div className="talent-icon creative-icon"></div>
                  <h4 className="talent-name">{language === 'hindi' ? 'रचनात्मक प्रतिभाएँ' : 'Creative Talents'}</h4>
                  <p className="talent-description">
                    {language === 'hindi'
                      ? 'शुक्र, नेपच्यून और 5वें भाव की स्थिति से प्रभावित'
                      : 'Influenced by Venus, Neptune, and the 5th house placements'}
                  </p>
                </div>
                <div className="talent-item">
                  <div className="talent-icon intellectual-icon"></div>
                  <h4 className="talent-name">{language === 'hindi' ? 'बौद्धिक क्षमताएँ' : 'Intellectual Abilities'}</h4>
                  <p className="talent-description">
                    {language === 'hindi'
                      ? 'बुध, यूरेनस और 3रे भाव की स्थिति से दर्शाया गया'
                      : 'Shown by Mercury, Uranus, and the 3rd house positions'}
                  </p>
                </div>
                <div className="talent-item">
                  <div className="talent-icon athletic-icon"></div>
                  <h4 className="talent-name">{language === 'hindi' ? 'खेल क्षमता' : 'Athletic Potential'}</h4>
                  <p className="talent-description">
                    {language === 'hindi'
                      ? 'मंगल की स्थिति और पहलुओं से संकेतित'
                      : 'Indicated by Mars placements and aspects'}
                  </p>
                </div>
                <div className="talent-item">
                  <div className="talent-icon leadership-icon"></div>
                  <h4 className="talent-name">{language === 'hindi' ? 'नेतृत्व कौशल' : 'Leadership Skills'}</h4>
                  <p className="talent-description">
                    {language === 'hindi'
                      ? 'सूर्य, बृहस्पति और 10वें भाव के प्रभावों के माध्यम से प्रकट'
                      : 'Revealed through Sun, Jupiter, and 10th house influences'}
                  </p>
                </div>
              </div>
            </div>

            <div className="element-card challenges-card">
              <h3 className="element-title">
                <span className="element-number">3</span> {language === 'hindi' ? 'संभावित चुनौतियों का समाधान' : 'Addressing Potential Challenges'}
              </h3>
              <p className="element-description">
                {language === 'hindi'
                  ? 'बाल ज्योतिष संभावित चुनौतियों की पहचान कर सकता है और उनका समाधान करने के लिए मार्गदर्शन प्रदान कर सकता है:'
                  : 'Child astrology can identify potential challenges and provide guidance on how to address them:'}
              </p>
              <div className="challenges-table-container">
                <table className="challenges-table">
                  <thead>
                    <tr>
                      <th>{language === 'hindi' ? 'चुनौती क्षेत्र' : 'Challenge Area'}</th>
                      <th>{language === 'hindi' ? 'ज्योतिषीय संकेतक' : 'Astrological Indicators'}</th>
                      <th>{language === 'hindi' ? 'सहायक दृष्टिकोण' : 'Supportive Approaches'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{language === 'hindi' ? 'सीखने की कठिनाइयाँ' : 'Learning Difficulties'}</td>
                      <td>{language === 'hindi' ? 'बुध के चुनौतीपूर्ण पहलू' : 'Challenging Mercury aspects'}</td>
                      <td>{language === 'hindi' ? 'व्यक्तिगत सीखने की रणनीतियाँ, धैर्य, वैकल्पिक शिक्षण विधियाँ' : 'Personalized learning strategies, patience, alternative teaching methods'}</td>
                    </tr>
                    <tr>
                      <td>{language === 'hindi' ? 'भावनात्मक संवेदनशीलता' : 'Emotional Sensitivity'}</td>
                      <td>{language === 'hindi' ? 'चंद्र-नेपच्यून पहलू, जल राशि पर जोर' : 'Moon-Neptune aspects, Water sign emphasis'}</td>
                      <td>{language === 'hindi' ? 'भावनात्मक मान्यता, भावनाओं की सुरक्षित अभिव्यक्ति, कला चिकित्सा' : 'Emotional validation, safe expression of feelings, art therapy'}</td>
                    </tr>
                    <tr>
                      <td>{language === 'hindi' ? 'व्यवहारिक समस्याएँ' : 'Behavioral Issues'}</td>
                      <td>{language === 'hindi' ? 'मंगल-यूरेनस पहलू, चुनौतीपूर्ण शनि स्थिति' : 'Mars-Uranus aspects, challenging Saturn positions'}</td>
                      <td>{language === 'hindi' ? 'स्पष्ट सीमाएँ, शारीरिक आउटलेट, अनुशासन में निरंतरता' : 'Clear boundaries, physical outlets, consistency in discipline'}</td>
                    </tr>
                    <tr>
                      <td>{language === 'hindi' ? 'सामाजिक चुनौतियाँ' : 'Social Challenges'}</td>
                      <td>{language === 'hindi' ? 'कठिन शुक्र पहलू, 11वें भाव की समस्याएँ' : 'Difficult Venus aspects, 11th house issues'}</td>
                      <td>{language === 'hindi' ? 'धीरे-धीरे सामाजिक संपर्क, सामाजिक परिदृश्यों का रोल-प्ले, आत्मविश्वास निर्माण' : 'Gradual social exposure, role-playing social scenarios, building confidence'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="developmental-section">
            <h2 className="section-heading">
              <i className="fas fa-child"></i> {language === 'hindi' ? 'विकासात्मक चरण और ग्रहीय अवधियां' : 'Developmental Stages & Planetary Periods'}
            </h2>
            <p className="section-intro">
              {language === 'hindi'
                ? 'बाल ज्योतिष यह मानता है कि विभिन्न विकासात्मक चरणों के दौरान अलग-अलग ग्रहीय प्रभाव प्रमुख हो जाते हैं:'
                : 'Child astrology recognizes that different planetary influences become prominent during various developmental stages:'}
            </p>

            <div className="stages-timeline">
              <div className="stage-item">
                <div className="stage-age">{language === 'hindi' ? '0-2 वर्ष' : '0-2 years'}</div>
                <div className="stage-content">
                  <h3 className="stage-title">{language === 'hindi' ? 'चंद्र अवधि' : 'Moon Period'}</h3>
                  <p className="stage-description">
                    {language === 'hindi'
                      ? 'भावनात्मक बंधन, सुरक्षा की जरूरतें और प्रारंभिक लगाव पैटर्न पर जोर दिया जाता है।'
                      : 'Emotional bonding, security needs, and early attachment patterns are emphasized.'}
                  </p>
                </div>
              </div>

              <div className="stage-item">
                <div className="stage-age">{language === 'hindi' ? '2-4 वर्ष' : '2-4 years'}</div>
                <div className="stage-content">
                  <h3 className="stage-title">{language === 'hindi' ? 'बुध अवधि' : 'Mercury Period'}</h3>
                  <p className="stage-description">
                    {language === 'hindi'
                      ? 'भाषा विकास, जिज्ञासा और प्रारंभिक सीखने के पैटर्न उभरते हैं।'
                      : 'Language development, curiosity, and early learning patterns emerge.'}
                  </p>
                </div>
              </div>

              <div className="stage-item">
                <div className="stage-age">{language === 'hindi' ? '4-6 वर्ष' : '4-6 years'}</div>
                <div className="stage-content">
                  <h3 className="stage-title">{language === 'hindi' ? 'शुक्र अवधि' : 'Venus Period'}</h3>
                  <p className="stage-description">
                    {language === 'hindi'
                      ? 'सामाजिक कौशल, कलात्मक रुचियां और मूल्य प्रणालियां बनना शुरू होती हैं।'
                      : 'Social skills, artistic interests, and value systems begin to form.'}
                  </p>
                </div>
              </div>

              <div className="stage-item">
                <div className="stage-age">{language === 'hindi' ? '6-12 वर्ष' : '6-12 years'}</div>
                <div className="stage-content">
                  <h3 className="stage-title">{language === 'hindi' ? 'सूर्य अवधि' : 'Sun Period'}</h3>
                  <p className="stage-description">
                    {language === 'hindi'
                      ? 'पहचान निर्माण, आत्मविश्वास और रचनात्मक अभिव्यक्ति विकसित होती है।'
                      : 'Identity formation, self-confidence, and creative expression develop.'}
                  </p>
                </div>
              </div>

              <div className="stage-item">
                <div className="stage-age">{language === 'hindi' ? '12-16 वर्ष' : '12-16 years'}</div>
                <div className="stage-content">
                  <h3 className="stage-title">{language === 'hindi' ? 'मंगल अवधि' : 'Mars Period'}</h3>
                  <p className="stage-description">
                    {language === 'hindi'
                      ? 'स्वतंत्रता, शारीरिक विकास और दृढ़ता सामने आती है।'
                      : 'Independence, physical development, and assertiveness come to the forefront.'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2 className="section-heading">
              <i className="fas fa-star"></i> {language === 'hindi' ? 'बाल ज्योतिष के लाभ' : 'Benefits of Child Astrology'}
            </h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="benefit-title">
                  {language === 'hindi' ? 'व्यक्तिगत पेरेंटिंग दृष्टिकोण' : 'Personalized Parenting Approach'}
                </h3>
                <p className="benefit-description">
                  {language === 'hindi'
                    ? 'अपने बच्चे की अद्वितीय जरूरतों और स्वभाव के अनुरूप अपनी पेरेंटिंग शैली को अनुकूलित करें।'
                    : 'Tailor your parenting style to match your child\'s unique needs and temperament.'}
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="benefit-title">
                  {language === 'hindi' ? 'शैक्षिक मार्गदर्शन' : 'Educational Guidance'}
                </h3>
                <p className="benefit-description">
                  {language === 'hindi'
                    ? 'सीखने की शैली और शैक्षिक वातावरण की खोज करें जो आपके बच्चे के लिए सबसे उपयुक्त है।'
                    : 'Discover the learning style and educational environment that best suits your child.'}
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3 className="benefit-title">
                  {language === 'hindi' ? 'भावनात्मक समझ' : 'Emotional Understanding'}
                </h3>
                <p className="benefit-description">
                  {language === 'hindi'
                    ? 'अपने बच्चे की भावनात्मक जरूरतों और उनके भावनात्मक कल्याण का समर्थन कैसे करें, इसके बारे में अंतर्दृष्टि प्राप्त करें।'
                    : 'Gain insights into your child\'s emotional needs and how to support their emotional well-being.'}
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-compass"></i>
                </div>
                <h3 className="benefit-title">
                  {language === 'hindi' ? 'भविष्य का मार्गदर्शन' : 'Future Guidance'}
                </h3>
                <p className="benefit-description">
                  {language === 'hindi'
                    ? 'ज्योतिषीय समय के साथ आगामी विकासात्मक चरणों और परिवर्तनों के लिए तैयार रहें।'
                    : 'Prepare for upcoming developmental phases and transitions with astrological timing.'}
                </p>
              </div>
            </div>
          </section>

          <section className="services-section">
            <h2 className="section-heading">
              {language === 'hindi' ? 'हमारी बाल ज्योतिष सेवाएँ' : 'Our Child Astrology Services'}
            </h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">👶</div>
                <h3>{language === 'hindi' ? 'बच्चे का नाम चयन' : 'Baby Name Selection'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'ऐसा नाम चुनें जो आपके बच्चे की ब्रह्मांडीय ऊर्जा के अनुरूप हो और सौभाग्य लाए।'
                    : 'Choose a name that aligns with your child\'s cosmic energy and brings good fortune.'}
                </p>
                <Link to="/services/child-astrology/babyname" className="service-link">
                  {language === 'hindi' ? 'अधिक जानें' : 'Learn More'}
                </Link>
              </div>
              <div className="service-card">
                <div className="service-icon">⏰</div>
                <h3>{language === 'hindi' ? 'जन्म समय चयन' : 'Birth Time Selection'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'आपके बच्चे के जीवन में महत्वपूर्ण घटनाओं के लिए शुभ समय की योजना बनाएं।'
                    : 'Plan for auspicious timing for important events in your child\'s life.'}
                </p>
                <Link to="/services/child-astrology/birthtime" className="service-link">
                  {language === 'hindi' ? 'अधिक जानें' : 'Learn More'}
                </Link>
              </div>
              <div className="service-card">
                <div className="service-icon">🔮</div>
                <h3>{language === 'hindi' ? 'बाल ज्योतिष परामर्श' : 'Child Astrology Consultation'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'अपने बच्चे की जन्म कुंडली और भविष्य की क्षमता का व्यापक विश्लेषण प्राप्त करें।'
                    : 'Get a comprehensive analysis of your child\'s birth chart and future potential.'}
                </p>
                <Link to="/services/child-astrology/child-astro" className="service-link">
                  {language === 'hindi' ? 'अधिक जानें' : 'Learn More'}
                </Link>
              </div>
              <div className="service-card">
                <div className="service-icon">📚</div>
                <h3>{language === 'hindi' ? 'बाल शिक्षा' : 'Child Education'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'अपने बच्चे की ज्योतिषीय प्रोफ़ाइल के आधार पर सर्वोत्तम शैक्षिक मार्ग का पता लगाएं।'
                    : 'Discover the best educational path for your child based on their astrological profile.'}
                </p>
                <Link to="/services/child-astrology/child-edu" className="service-link">
                  {language === 'hindi' ? 'अधिक जानें' : 'Learn More'}
                </Link>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2 className="cta-heading">
                {language === 'hindi' ? 'अपने बच्चे की ब्रह्मांडीय क्षमता को अनलॉक करें' : 'Unlock Your Child\'s Cosmic Potential'}
              </h2>
              <p className="cta-description">
                {language === 'hindi'
                  ? 'हमारे विशेषज्ञ ज्योतिषी आपके बच्चे की जन्म कुंडली का विश्लेषण कर सकते हैं और उन्हें उनके अद्वितीय आकाशीय ब्लूप्रिंट के अनुसार फलने-फूलने में मदद करने के लिए व्यक्तिगत मार्गदर्शन प्रदान कर सकते हैं।'
                  : 'Our expert astrologers can analyze your child\'s birth chart and provide personalized guidance to help them thrive according to their unique celestial blueprint.'}
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-button primary">
                  <i className="fas fa-calendar-check"></i> {language === 'hindi' ? 'परामर्श बुक करें' : 'Book a Consultation'}
                </Link>
                <Link to="/services" className="cta-button secondary">
                  <i className="fas fa-info-circle"></i> {language === 'hindi' ? 'अधिक सेवाएँ देखें' : 'Explore More Services'}
                </Link>
              </div>
            </div>
            <div className="cta-decoration child-theme"></div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ChildAstrology;