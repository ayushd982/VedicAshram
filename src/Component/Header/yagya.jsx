import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import './yagya.css';
import { useLanguage } from '../../context/LanguageContext';

const Yagya = () => {
  const { language } = useLanguage();
  return (
    <div className="yagya-page">
      {/* Animated fire elements */}
      <div className="fire-elements">
        <div className="flame flame1"></div>
        <div className="flame flame2"></div>
        <div className="flame flame3"></div>
        <div className="flame flame4"></div>
        <div className="flame flame5"></div>
      </div>

      {/* Smoke particles */}
      <div className="smoke-particles">
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
        <div className="smoke-particle"></div>
      </div>

      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with margin after navbar */}
      <div className="yagya-content">
        <div className="container yagya-container">
          <div className="page-header">
            <div className="sacred-decoration left"></div>
            <h1 className="main-heading">
              <i className="fa fa-fire"></i>
              {language === 'hindi' ? 'यज्ञ और हवन' : 'Yagya & Hawan'}
              <span className="heading-subtitle">
                {language === 'hindi' ? 'पवित्र वैदिक अग्नि समारोह' : 'Sacred Vedic Fire Ceremonies'}
              </span>
            </h1>
            <div className="sacred-decoration right"></div>
          </div>

          <div className="intro-section">
            <p className="intro-paragraph">
              {language === 'hindi'
                ? 'यज्ञ (जिसे यज्ञ या हवन के रूप में भी जाना जाता है) अग्नि के माध्यम से देवताओं को प्रसन्न करने के लिए किया जाने वाला एक पवित्र वैदिक अनुष्ठान है। यह हिंदू धर्म में सबसे प्राचीन और शक्तिशाली आध्यात्मिक प्रथाओं में से एक है, जिसे पर्यावरण को शुद्ध करने, नकारात्मक ऊर्जाओं को हटाने और स्वास्थ्य, समृद्धि और आध्यात्मिक विकास के लिए दिव्य आशीर्वाद का आह्वान करने के लिए डिज़ाइन किया गया है।'
                : 'Yagya (also known as Yajna or Hawan) is a sacred Vedic ritual performed to please deities through the medium of fire. It is one of the most ancient and powerful spiritual practices in Hinduism, designed to purify the environment, remove negative energies, and invoke divine blessings for health, prosperity, and spiritual growth.'}
            </p>

            <div className="yagya-illustration">
              <div className="havan-kund">
                <div className="fire-base"></div>
                <div className="fire-glow"></div>
              </div>
              <div className="offerings">
                <div className="offering offering1"></div>
                <div className="offering offering2"></div>
                <div className="offering offering3"></div>
              </div>
            </div>
          </div>

          <div className="benefits-section">
            <h2 className="section-heading">
              <i className="fa fa-star"></i>
              {language === 'hindi' ? 'यज्ञ के लाभ' : 'Benefits of Yagya'}
            </h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-heart"></i>
                </div>
                <h3 className="benefit-title">
                  {language === 'hindi' ? 'आध्यात्मिक शुद्धिकरण' : 'Spiritual Purification'}
                </h3>
                <p className="benefit-description">
                  {language === 'hindi'
                    ? 'आत्मा को शुद्ध करता है और आध्यात्मिक अशुद्धियों को दूर करता है, जिससे आंतरिक शांति और स्पष्टता आती है।'
                    : 'Cleanses the soul and removes spiritual impurities, bringing inner peace and clarity.'}
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-leaf"></i>
                </div>
                <h3 className="benefit-title">
                  {language === 'hindi' ? 'पर्यावरणीय शुद्धिकरण' : 'Environmental Cleansing'}
                </h3>
                <p className="benefit-description">
                  {language === 'hindi'
                    ? 'लाभकारी पदार्थों को छोड़कर वातावरण को शुद्ध करता है जो प्रदूषण को निष्प्रभावित करते हैं।'
                    : 'Purifies the atmosphere by releasing beneficial substances that neutralize pollution.'}
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-shield"></i>
                </div>
                <h3 className="benefit-title">
                  {language === 'hindi' ? 'सुरक्षा' : 'Protection'}
                </h3>
                <p className="benefit-description">
                  {language === 'hindi'
                    ? 'नकारात्मक ऊर्जाओं और हानिकारक प्रभावों के खिलाफ सुरक्षात्मक कवच बनाता है।'
                    : 'Creates a protective shield against negative energies and harmful influences.'}
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-balance-scale"></i>
                </div>
                <h3 className="benefit-title">
                  {language === 'hindi' ? 'कर्मिक संतुलन' : 'Karmic Balance'}
                </h3>
                <p className="benefit-description">
                  {language === 'hindi'
                    ? 'पिछले कर्मों को संतुलित करने और ग्रहीय पीड़ाओं के प्रभावों को कम करने में मदद करता है।'
                    : 'Helps balance past karmas and reduces the effects of planetary afflictions.'}
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-medkit"></i>
                </div>
                <h3 className="benefit-title">
                  {language === 'hindi' ? 'उपचार' : 'Healing'}
                </h3>
                <p className="benefit-description">
                  {language === 'hindi'
                    ? 'उपचार कंपनों के प्रसार के माध्यम से शारीरिक और मानसिक कल्याण को बढ़ावा देता है।'
                    : 'Promotes physical and mental well-being through the release of healing vibrations.'}
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa fa-lightbulb-o"></i>
                </div>
                <h3 className="benefit-title">
                  {language === 'hindi' ? 'आध्यात्मिक जागृति' : 'Spiritual Awakening'}
                </h3>
                <p className="benefit-description">
                  {language === 'hindi'
                    ? 'दिव्य संबंध के माध्यम से आध्यात्मिक विकास को तेज करता है और चेतना को बढ़ाता है।'
                    : 'Accelerates spiritual growth and enhances consciousness through divine connection.'}
                </p>
              </div>
            </div>
          </div>

          <div className="types-section">
            <h2 className="section-heading">
              <i className="fa fa-fire"></i>
              {language === 'hindi' ? 'यज्ञ के प्रकार' : 'Types of Yagya'}
            </h2>
            <div className="types-grid">
              <div className="type-card">
                <div className="type-image kal-sarp-image"></div>
                <h3 className="type-title">
                  {language === 'hindi' ? 'काल सर्प दोष यज्ञ' : 'Kal Sarp Dosh Yagya'}
                </h3>
                <p className="type-description">
                  {language === 'hindi'
                    ? 'काल सर्प योग के नकारात्मक प्रभावों को निष्प्रभावित करने के लिए किया जाता है, जो तब होता है जब सभी ग्रह राहु और केतु के बीच स्थित होते हैं।'
                    : 'Performed to neutralize the negative effects of Kal Sarp Yoga, which occurs when all planets are positioned between Rahu and Ketu.'}
                </p>
                <a href="/yagya/kal-sarp-dosh" className="type-link">
                  {language === 'hindi' ? 'अधिक जानें' : 'Learn More'}
                </a>
              </div>
              <div className="type-card">
                <div className="type-image mahamrityunjaya-image"></div>
                <h3 className="type-title">
                  {language === 'hindi' ? 'महामृत्युंजय यज्ञ' : 'Mahamrityunjaya Yagya'}
                </h3>
                <p className="type-description">
                  {language === 'hindi'
                    ? 'भगवान शिव को समर्पित एक शक्तिशाली अनुष्ठान जो दीर्घायु को बढ़ावा देता है, मृत्यु के भय को दूर करता है और रोगों को ठीक करता है।'
                    : 'A powerful ritual dedicated to Lord Shiva that promotes longevity, removes fear of death, and cures diseases.'}
                </p>
                <a href="/yagya/mahamrityunjaya" className="type-link">
                  {language === 'hindi' ? 'अधिक जानें' : 'Learn More'}
                </a>
              </div>
              <div className="type-card">
                <div className="type-image manglik-image"></div>
                <h3 className="type-title">
                  {language === 'hindi' ? 'मंगलिक दोष निवारण' : 'Manglik Dosh Nivaran'}
                </h3>
                <p className="type-description">
                  {language === 'hindi'
                    ? 'मंगल दोष (मंगल ग्रह की पीड़ा) के नकारात्मक प्रभावों को कम करता है जो विवाह और रिश्तों को प्रभावित कर सकता है।'
                    : 'Alleviates the negative effects of Mangal Dosha (Mars affliction) that can affect marriage and relationships.'}
                </p>
                <a href="/yagya/manglik-dosh" className="type-link">
                  {language === 'hindi' ? 'अधिक जानें' : 'Learn More'}
                </a>
              </div>
              <div className="type-card">
                <div className="type-image pitra-image"></div>
                <h3 className="type-title">
                  {language === 'hindi' ? 'पितृ दोष निवारण' : 'Pitra Dosh Nivaran'}
                </h3>
                <p className="type-description">
                  {language === 'hindi'
                    ? 'पूर्वजों की आत्माओं को शांत करने और असंतुष्ट पूर्वजों के कारण होने वाली बाधाओं को दूर करने के लिए किया जाता है।'
                    : 'Performed to pacify ancestral spirits and remove obstacles caused by unsatisfied ancestors.'}
                </p>
                <a href="/yagya/pitra-dosh" className="type-link">
                  {language === 'hindi' ? 'अधिक जानें' : 'Learn More'}
                </a>
              </div>
            </div>
            <div className="view-all-types">
              <a href="/yagya" className="view-all-button">
                {language === 'hindi' ? 'सभी यज्ञ सेवाएँ देखें' : 'View All Yagya Services'}
              </a>
            </div>
          </div>

          <div className="process-section">
            <h2 className="section-heading">
              <i className="fa fa-cogs"></i>
              The Yagya Process
            </h2>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Sankalpa (Resolution)</h3>
                  <p className="step-description">
                    The ritual begins with a sacred vow stating the purpose of the Yagya and invoking divine blessings.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Agni Sthapana</h3>
                  <p className="step-description">
                    Establishing the sacred fire in the Havan Kund (fire altar) with proper Vedic mantras.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Mantra Chanting</h3>
                  <p className="step-description">
                    Recitation of specific Vedic mantras corresponding to the purpose of the Yagya.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3 className="step-title">Ahuti (Offerings)</h3>
                  <p className="step-description">
                    Offering sacred ingredients like ghee, herbs, and grains into the fire while chanting mantras.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3 className="step-title">Purnahuti</h3>
                  <p className="step-description">
                    The final offering that marks the completion of the Yagya, accompanied by special mantras.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="materials-section">
            <h2 className="section-heading">
              <i className="fa fa-leaf"></i>
              Sacred Materials Used
            </h2>
            <div className="materials-grid">
              <div className="material-item">
                <div className="material-icon samidha"></div>
                <h3 className="material-name">Samidha</h3>
                <p className="material-description">Sacred wood pieces from specific trees like mango or banyan</p>
              </div>
              <div className="material-item">
                <div className="material-icon ghee"></div>
                <h3 className="material-name">Ghee</h3>
                <p className="material-description">Clarified butter that serves as the primary offering</p>
              </div>
              <div className="material-item">
                <div className="material-icon herbs"></div>
                <h3 className="material-name">Herbs</h3>
                <p className="material-description">Various medicinal herbs with specific healing properties</p>
              </div>
              <div className="material-item">
                <div className="material-icon rice"></div>
                <h3 className="material-name">Rice & Grains</h3>
                <p className="material-description">Symbolizing prosperity and abundance</p>
              </div>
              <div className="material-item">
                <div className="material-icon kumkum"></div>
                <h3 className="material-name">Kumkum & Haldi</h3>
                <p className="material-description">Sacred powders representing divine feminine energy</p>
              </div>
              <div className="material-item">
                <div className="material-icon camphor"></div>
                <h3 className="material-name">Camphor</h3>
                <p className="material-description">Purifies the atmosphere and represents enlightenment</p>
              </div>
            </div>
          </div>

          <div className="testimonials-section">
            <h2 className="section-heading">
              <i className="fa fa-quote-left"></i>
              Experiences & Testimonials
            </h2>
            <div className="testimonials-slider">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "After performing the Mahamrityunjaya Yagya, I experienced remarkable improvement in my health condition that had been troubling me for years. The spiritual energy was palpable during the ceremony."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-image"></div>
                    <div className="author-info">
                      <h4 className="author-name">Rajesh Sharma</h4>
                      <p className="author-location">Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "The Kal Sarp Dosh Yagya brought a significant positive change in my career. The obstacles that were hindering my progress for years suddenly cleared away, and new opportunities started flowing."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-image"></div>
                    <div className="author-info">
                      <h4 className="author-name">Priya Patel</h4>
                      <p className="author-location">Mumbai, India</p>
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
                <h3 className="faq-question">What is the significance of Yagya in modern times?</h3>
                <p className="faq-answer">
                  Even in modern times, Yagya remains relevant as it addresses fundamental human needs for spiritual connection, purification, and harmony. The scientific benefits of Yagya, such as air purification and stress reduction, have been recognized by researchers.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">How long does a typical Yagya ceremony last?</h3>
                <p className="faq-answer">
                  The duration varies depending on the type and purpose of the Yagya. Simple Hawans may take 1-2 hours, while elaborate Yagyas for major life events or planetary doshas can last from several hours to multiple days.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Can I perform Yagya at home?</h3>
                <p className="faq-answer">
                  Yes, simple forms of Hawan can be performed at home with proper guidance. However, complex Yagyas for specific doshas should be performed by trained priests who understand the proper mantras and procedures.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">What should I wear during a Yagya ceremony?</h3>
                <p className="faq-answer">
                  Traditional attire is recommended - dhoti or kurta-pajama for men and saree or salwar kameez for women. Light colors, particularly white, yellow, or saffron, are considered auspicious for religious ceremonies.
                </p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <div className="cta-decoration"></div>
            <div className="cta-content">
              <h2 className="cta-heading">Experience the Divine Power of Yagya</h2>
              <p className="cta-description">
                Connect with our expert priests to arrange a personalized Yagya ceremony for your specific needs. Whether you're seeking spiritual growth, healing, or resolution of specific problems, the sacred fire ceremony can help transform your life.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="cta-button primary">
                  <i className="fa fa-fire"></i> Schedule a Yagya
                </a>
                <a href="/consultation" className="cta-button secondary">
                  <i className="fa fa-phone"></i> Get a Consultation
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

export default Yagya;