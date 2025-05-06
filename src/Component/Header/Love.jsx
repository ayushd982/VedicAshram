import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import './Love.css';
import { useLanguage } from '../../context/LanguageContext';

const Love = () => {
  const { language } = useLanguage();
  return (
    <div className="love-page">
      {/* Floating elements */}
      <div className="floating-elements">
        <div className="floating-heart heart1"></div>
        <div className="floating-heart heart2"></div>
        <div className="floating-heart heart3"></div>
        <div className="floating-heart heart4"></div>
        <div className="floating-heart heart5"></div>
        <div className="floating-lotus lotus1"></div>
        <div className="floating-lotus lotus2"></div>
        <div className="floating-lotus lotus3"></div>
      </div>

      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with margin after navbar */}
      <div className="love-content">
        <div className="container love-container">
          <div className="page-header">
            <div className="sacred-symbol left"></div>
            <h1 className="main-heading">
              <i className="fa fa-heart"></i>
              {language === 'hindi' ? 'प्रेम और रिश्ते' : 'Love & Relationships'}
              <span className="heading-subtitle">
                {language === 'hindi'
                  ? 'सामंजस्यपूर्ण संबंधों के लिए वैदिक मार्गदर्शन'
                  : 'Vedic Guidance for Harmonious Unions'}
              </span>
            </h1>
            <div className="sacred-symbol right"></div>
          </div>

          <div className="intro-section">
            <p className="intro-paragraph">
              {language === 'hindi'
                ? 'प्रेम और रिश्ते जीवन के सबसे गहरे अनुभवों में से हैं, जो खुशी, विकास और संतुष्टि लाते हैं। वैदिक ज्योतिष रिश्तों की गतिशीलता, अनुकूलता और विवाह के समय को समझने के लिए अमर ज्ञान प्रदान करता है। हमारे विशेषज्ञ ज्योतिषी प्रेमपूर्ण संबंधों को पोषित करने, चुनौतियों को दूर करने और ब्रह्मांडीय ऊर्जाओं से आशीर्वादित सामंजस्यपूर्ण संबंध बनाने के लिए मार्गदर्शन प्रदान करते हैं।'
                : 'Love and relationships are among life\'s most profound experiences, bringing joy, growth, and fulfillment. Vedic astrology offers timeless wisdom to understand relationship dynamics, compatibility, and timing for marriage. Our expert astrologers provide guidance to nurture loving connections, overcome challenges, and create harmonious unions blessed by cosmic energies.'}
            </p>

            <div className="love-illustration">
              <div className="couple-silhouette"></div>
              <div className="cosmic-connection"></div>
            </div>
          </div>

          <div className="services-section">
            <h2 className="section-heading">
              <i className="fa fa-star"></i>
              {language === 'hindi' ? 'हमारी रिश्ते संबंधी सेवाएँ' : 'Our Relationship Services'}
            </h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fa fa-heart-o"></i>
                </div>
                <h3 className="service-title">
                  {language === 'hindi' ? 'अनुकूलता विश्लेषण' : 'Compatibility Analysis'}
                </h3>
                <p className="service-description">
                  {language === 'hindi'
                    ? 'जन्म कुंडलियों के आधार पर रिश्ते की क्षमता का व्यापक मूल्यांकन, जो ताकतों और चुनौतियों को उजागर करता है।'
                    : 'Comprehensive assessment of relationship potential based on birth charts, revealing strengths and challenges.'}
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fa fa-calendar"></i>
                </div>
                <h3 className="service-title">
                  {language === 'hindi' ? 'विवाह का समय' : 'Marriage Timing'}
                </h3>
                <p className="service-description">
                  {language === 'hindi'
                    ? 'विवाह और रिश्ते के महत्वपूर्ण पड़ावों के लिए अनुकूल अवधियों के बारे में सटीक भविष्यवाणियां।'
                    : 'Precise predictions about favorable periods for marriage and relationship milestones.'}
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fa fa-balance-scale"></i>
                </div>
                <h3 className="service-title">
                  {language === 'hindi' ? 'रिश्ते का उपचार' : 'Relationship Healing'}
                </h3>
                <p className="service-description">
                  {language === 'hindi'
                    ? 'वैदिक उपायों के माध्यम से रिश्ते की चुनौतियों, संघर्षों और संचार समस्याओं के लिए समाधान।'
                    : 'Solutions for relationship challenges, conflicts, and communication issues through Vedic remedies.'}
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fa fa-diamond"></i>
                </div>
                <h3 className="service-title">
                  {language === 'hindi' ? 'विवाह मुहूर्त' : 'Marriage Muhurta'}
                </h3>
                <p className="service-description">
                  {language === 'hindi'
                    ? 'स्थायी सद्भाव सुनिश्चित करने के लिए विवाह समारोहों के लिए शुभ तिथियों और समय का चयन।'
                    : 'Selection of auspicious dates and times for wedding ceremonies to ensure lasting harmony.'}
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fa fa-users"></i>
                </div>
                <h3 className="service-title">
                  {language === 'hindi' ? 'पारिवारिक गतिशीलता' : 'Family Dynamics'}
                </h3>
                <p className="service-description">
                  {language === 'hindi'
                    ? 'पारिवारिक संबंधों में अंतर्दृष्टि और सामंजस्यपूर्ण पारिवारिक वातावरण बनाने के लिए मार्गदर्शन।'
                    : 'Insights into family relationships and guidance for creating harmonious family environments.'}
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fa fa-search"></i>
                </div>
                <h3 className="service-title">
                  {language === 'hindi' ? 'साथी की भविष्यवाणी' : 'Partner Prediction'}
                </h3>
                <p className="service-description">
                  {language === 'hindi'
                    ? 'आपके भविष्य के जीवनसाथी की विशेषताओं, पेशे और प्रकृति के बारे में ज्योतिषीय अंतर्दृष्टि।'
                    : 'Astrological insights about your future spouse\'s characteristics, profession, and nature.'}
                </p>
              </div>
            </div>
          </div>

          <div className="compatibility-section">
            <h2 className="section-heading">
              <i className="fa fa-puzzle-piece"></i>
              {language === 'hindi' ? 'वैदिक अनुकूलता कारक' : 'Vedic Compatibility Factors'}
            </h2>
            <div className="compatibility-container">
              <div className="compatibility-image"></div>
              <div className="compatibility-content">
                <div className="compatibility-factor">
                  <h3 className="factor-title">
                    {language === 'hindi' ? 'गुण मिलान (अष्टकूट)' : 'Guna Milan (Ashtakoot)'}
                  </h3>
                  <p className="factor-description">
                    {language === 'hindi'
                      ? 'पारंपरिक 36-अंक अनुकूलता प्रणाली जो रिश्ते के सामंजस्य के आठ अलग-अलग पहलुओं का मूल्यांकन करती है, जिसमें स्वभाव, मानसिक अनुकूलता और दीर्घायु शामिल हैं।'
                      : 'The traditional 36-point compatibility system that evaluates eight different aspects of relationship harmony, including temperament, mental compatibility, and longevity.'}
                  </p>
                </div>
                <div className="compatibility-factor">
                  <h3 className="factor-title">
                    {language === 'hindi' ? 'मंगल दोष विचार' : 'Mangal Dosha Consideration'}
                  </h3>
                  <p className="factor-description">
                    {language === 'hindi'
                      ? 'सामंजस्यपूर्ण ऊर्जा प्रवाह सुनिश्चित करने और संभावित संघर्षों को रोकने के लिए दोनों कुंडलियों में मंगल की स्थिति का विश्लेषण।'
                      : 'Analysis of Mars placement in both charts to ensure harmonious energy flow and prevent potential conflicts.'}
                  </p>
                </div>
                <div className="compatibility-factor">
                  <h3 className="factor-title">
                    {language === 'hindi' ? 'नाड़ी अनुकूलता' : 'Nadi Compatibility'}
                  </h3>
                  <p className="factor-description">
                    {language === 'hindi'
                      ? 'आनुवंशिक अनुकूलता और स्वस्थ संतान सुनिश्चित करने के लिए सूक्ष्म ऊर्जा चैनलों का मूल्यांकन।'
                      : 'Evaluation of the subtle energy channels to ensure genetic compatibility and healthy progeny.'}
                  </p>
                </div>
                <div className="compatibility-factor">
                  <h3 className="factor-title">
                    {language === 'hindi' ? 'ग्रहों की स्थिति' : 'Planetary Positions'}
                  </h3>
                  <p className="factor-description">
                    {language === 'hindi'
                      ? '7वें भाव (साझेदारी का भाव) और शुक्र/बृहस्पति की स्थिति रिश्ते की गुणवत्ता को कैसे प्रभावित करती है, इसका विस्तृत विश्लेषण।'
                      : 'Detailed analysis of how the 7th house (house of partnership) and Venus/Jupiter placements influence relationship quality.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="remedies-section">
            <h2 className="section-heading">
              <i className="fa fa-magic"></i>
              {language === 'hindi' ? 'रिश्ते के सामंजस्य के लिए वैदिक उपाय' : 'Vedic Remedies for Relationship Harmony'}
            </h2>
            <div className="remedies-grid">
              <div className="remedy-card">
                <div className="remedy-image gemstones"></div>
                <h3 className="remedy-title">
                  {language === 'hindi' ? 'रत्न' : 'Gemstones'}
                </h3>
                <p className="remedy-description">
                  {language === 'hindi'
                    ? 'रिश्ते के ग्रहों को मजबूत करने के लिए पीला नीलम (बृहस्पति) या हीरा (शुक्र) जैसे विशिष्ट रत्न पहनना।'
                    : 'Wearing specific gemstones like Yellow Sapphire (Jupiter) or Diamond (Venus) to strengthen relationship planets.'}
                </p>
              </div>
              <div className="remedy-card">
                <div className="remedy-image mantras"></div>
                <h3 className="remedy-title">
                  {language === 'hindi' ? 'पवित्र मंत्र' : 'Sacred Mantras'}
                </h3>
                <p className="remedy-description">
                  {language === 'hindi'
                    ? 'प्रेम और सद्भाव बढ़ाने के लिए शुक्र, बृहस्पति और चंद्रमा को समर्पित विशिष्ट मंत्रों का जाप।'
                    : 'Recitation of specific mantras dedicated to Venus, Jupiter, and Moon to enhance love and harmony.'}
                </p>
              </div>
              <div className="remedy-card">
                <div className="remedy-image rituals"></div>
                <h3 className="remedy-title">
                  {language === 'hindi' ? 'अनुष्ठान और पूजा' : 'Rituals & Pujas'}
                </h3>
                <p className="remedy-description">
                  {language === 'hindi'
                    ? 'रिश्तों में बाधाओं को दूर करने के लिए महा मृत्युंजय पूजा या शुक्र ग्रह शांति जैसे विशेष समारोह।'
                    : 'Special ceremonies like Maha Mrityunjaya Puja or Venus Graha Shanti to remove obstacles in relationships.'}
                </p>
              </div>
              <div className="remedy-card">
                <div className="remedy-image yantra"></div>
                <h3 className="remedy-title">
                  {language === 'hindi' ? 'यंत्र' : 'Yantras'}
                </h3>
                <p className="remedy-description">
                  {language === 'hindi'
                    ? 'पवित्र ज्यामितीय पैटर्न की स्थापना जो सामंजस्यपूर्ण रिश्ते की ऊर्जाओं को आकर्षित करती है।'
                    : 'Installation of sacred geometric patterns that attract harmonious relationship energies.'}
                </p>
              </div>
            </div>
          </div>

          <div className="success-stories-section">
            <h2 className="section-heading">
              <i className="fa fa-heart"></i>
              {language === 'hindi' ? 'सफलता की कहानियां' : 'Success Stories'}
            </h2>
            <div className="stories-slider">
              <div className="story-card">
                <div className="story-content">
                  <p className="story-text">
                    {language === 'hindi'
                      ? '"असफल रिश्तों के वर्षों के बाद, मैंने यहां के ज्योतिषियों से परामर्श किया, जिन्होंने देरी का कारण बनने वाले शुक्र-शनि पहलू की पहचान की। उनके उपायों का पालन करने के बाद, मैं 6 महीने के भीतर अपने सच्चे साथी से मिला और अब हम खुशी से विवाहित हैं!"'
                      : '"After years of failed relationships, I consulted with the astrologers here who identified a Venus-Saturn aspect causing delays. Following their remedies, I met my soulmate within 6 months and we\'re now happily married!"'}
                  </p>
                  <div className="story-author">
                    <div className="author-image"></div>
                    <div className="author-info">
                      <h4 className="author-name">प्रिया और राहुल</h4>
                      <p className="author-location">
                        {language === 'hindi' ? 'मुंबई, भारत' : 'Mumbai, India'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-card">
                <div className="story-content">
                  <p className="story-text">
                    "Our marriage was going through a difficult phase with constant arguments. The relationship healing program identified the astrological causes and provided simple remedies. The transformation in our relationship has been nothing short of miraculous."
                  </p>
                  <div className="story-author">
                    <div className="author-image"></div>
                    <div className="author-info">
                      <h4 className="author-name">Ananya & Vikram</h4>
                      <p className="author-location">Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-section">
            <h2 className="section-heading">
              <i className="fa fa-question-circle"></i>
              Frequently Asked Questions
            </h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">How accurate is Vedic compatibility analysis?</h3>
                <p className="faq-answer">
                  Vedic compatibility analysis has been refined over thousands of years and provides remarkably accurate insights into relationship dynamics. It examines multiple factors beyond just sun signs, including moon signs, ascendants, and planetary positions, offering a comprehensive view of compatibility.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Can astrology fix a troubled relationship?</h3>
                <p className="faq-answer">
                  While astrology cannot magically fix relationships, it can identify the root causes of challenges and provide targeted remedies to address them. The effectiveness depends on both partners' willingness to understand the cosmic influences and implement the suggested remedies.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">What if we have low compatibility scores?</h3>
                <p className="faq-answer">
                  Low compatibility scores don't necessarily doom a relationship. They simply highlight areas that may require more attention and understanding. Our astrologers provide specific remedies to strengthen challenging aspects and enhance harmony in relationships with lower initial compatibility.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">How long does it take for relationship remedies to work?</h3>
                <p className="faq-answer">
                  The timeframe varies depending on the severity of the issues and the consistency in performing the remedies. Some couples notice improvements within weeks, while deeper issues may take several months to resolve. Patience and consistent effort are key to seeing positive results.
                </p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <div className="cta-decoration"></div>
            <div className="cta-content">
              <h2 className="cta-heading">Begin Your Journey to Relationship Bliss</h2>
              <p className="cta-description">
                Whether you're seeking your soulmate, planning to get married, or working to strengthen your current relationship, our expert astrologers can provide the guidance you need. Discover the cosmic blueprint of your relationships and unlock the path to lasting love and harmony.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="cta-button primary">
                  <i className="fa fa-heart"></i> Get Relationship Guidance
                </a>
                <a href="/consultation" className="cta-button secondary">
                  <i className="fa fa-phone"></i> Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Love;