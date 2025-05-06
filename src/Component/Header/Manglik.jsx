import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import './yagya.css';
import { useLanguage } from '../../context/LanguageContext';
import Translate from '../../translations/Translate';

const Manglik = () => {
  const { language } = useLanguage();

  // Content for English and Hindi versions
  const content = {
    english: {
      title: "Manglik Dosh Nivaran Yagya",
      subtitle: "Sacred Ritual to Neutralize Mars Affliction",
      intro: "Manglik Dosha (Mars affliction) occurs when Mars is positioned in certain houses of the birth chart, potentially causing challenges in marriage and relationships. This specialized Vedic fire ceremony is designed to pacify the negative influences of Mars and harmonize its energy to bring balance and happiness to your relationships.",
      purpose: {
        title: "Purpose",
        description: "To neutralize the negative effects of Manglik Dosha (Mars affliction) that can impact marriage and relationships."
      },
      benefits: {
        title: "Benefits",
        items: [
          {
            title: "Relationship Harmony",
            description: "Reduces conflicts and promotes understanding between partners."
          },
          {
            title: "Marriage Prospects",
            description: "Removes obstacles to marriage for those affected by Manglik Dosha."
          },
          {
            title: "Energy Balance",
            description: "Harmonizes the aggressive energy of Mars to create stability in relationships."
          },
          {
            title: "Stress Reduction",
            description: "Alleviates anxiety and stress related to relationship concerns."
          },
          {
            title: "Positive Transformation",
            description: "Converts the challenging aspects of Mars into strength and courage."
          }
        ]
      },
      procedure: {
        title: "Ritual Procedure",
        steps: [
          {
            title: "Sankalpa (Sacred Resolution)",
            description: "The ceremony begins with stating the purpose and invoking divine blessings."
          },
          {
            title: "Mars Deity Invocation",
            description: "Special mantras are chanted to invoke Lord Mangal (Mars) in his benevolent form."
          },
          {
            title: "Sacred Fire Establishment",
            description: "The ritual fire is kindled using traditional methods and sanctified."
          },
          {
            title: "Mangal Mantra Recitation",
            description: "Powerful Vedic mantras specific to Mars are chanted to pacify its influence."
          },
          {
            title: "Offerings",
            description: "Special herbs, red flowers, and other sacred materials are offered to the fire while reciting mantras."
          },
          {
            title: "Final Oblation",
            description: "The ceremony concludes with a final offering and prayers for the complete removal of Manglik Dosha."
          }
        ]
      },
      materials: {
        title: "Sacred Materials Used",
        items: [
          {
            name: "Red Flowers",
            description: "Symbolize Mars energy and help in its pacification"
          },
          {
            name: "Red Sandalwood",
            description: "Sacred wood with properties that balance Mars energy"
          },
          {
            name: "Coral",
            description: "The gemstone associated with Mars, used to harmonize its influence"
          },
          {
            name: "Special Herbs",
            description: "Medicinal herbs with properties that counteract the negative effects of Mars"
          },
          {
            name: "Ghee",
            description: "Clarified butter that serves as the primary offering"
          }
        ]
      },
      recommendations: {
        title: "Who Should Perform This Yagya",
        description: "This Yagya is especially beneficial for individuals who:",
        items: [
          "Have Mars positioned in the 1st, 4th, 7th, 8th, or 12th house in their birth chart",
          "Are experiencing delays or obstacles in finding a suitable marriage partner",
          "Are facing conflicts and misunderstandings in their marriage or relationship",
          "Are planning to marry someone who is Manglik (when one partner is Manglik and the other is not)",
          "Want to strengthen their relationship and create harmony with their partner"
        ]
      },
      consultation: {
        title: "Personal Consultation",
        description: "Before performing this Yagya, we recommend a detailed astrological consultation to confirm the presence and specific nature of Manglik Dosha in your birth chart. Our expert astrologers can analyze your unique situation and recommend the most effective remedial measures."
      },
      cta: "Schedule Your Manglik Dosh Nivaran Yagya"
    },
    hindi: {
      title: "मंगलिक दोष निवारण यज्ञ",
      subtitle: "मंगल ग्रह के प्रभाव को निष्प्रभावी करने के लिए पवित्र अनुष्ठान",
      intro: "मंगलिक दोष (मंगल ग्रह का प्रभाव) तब होता है जब मंगल जन्म कुंडली के कुछ विशेष भावों में स्थित होता है, जिससे विवाह और रिश्तों में चुनौतियां आ सकती हैं। यह विशेष वैदिक अग्नि समारोह मंगल के नकारात्मक प्रभावों को शांत करने और उसकी ऊर्जा को सामंजस्यपूर्ण बनाने के लिए डिज़ाइन किया गया है ताकि आपके रिश्तों में संतुलन और खुशी आ सके।",
      purpose: {
        title: "उद्देश्य",
        description: "मंगलिक दोष (मंगल ग्रह के प्रभाव) के नकारात्मक प्रभावों को निष्प्रभावी करना जो विवाह और रिश्तों को प्रभावित कर सकते हैं।"
      },
      benefits: {
        title: "लाभ",
        items: [
          {
            title: "रिश्तों में सामंजस्य",
            description: "साथियों के बीच संघर्ष को कम करता है और समझ को बढ़ावा देता है।"
          },
          {
            title: "विवाह की संभावनाएं",
            description: "मंगलिक दोष से प्रभावित लोगों के लिए विवाह में आने वाली बाधाओं को दूर करता है।"
          },
          {
            title: "ऊर्जा संतुलन",
            description: "रिश्तों में स्थिरता बनाने के लिए मंगल की आक्रामक ऊर्जा को सामंजस्यपूर्ण बनाता है।"
          },
          {
            title: "तनाव में कमी",
            description: "रिश्तों से संबंधित चिंता और तनाव को कम करता है।"
          },
          {
            title: "सकारात्मक परिवर्तन",
            description: "मंगल के चुनौतीपूर्ण पहलुओं को शक्ति और साहस में बदलता है।"
          }
        ]
      },
      procedure: {
        title: "अनुष्ठान प्रक्रिया",
        steps: [
          {
            title: "संकल्प (पवित्र संकल्प)",
            description: "समारोह उद्देश्य बताने और दिव्य आशीर्वाद का आह्वान करने के साथ शुरू होता है।"
          },
          {
            title: "मंगल देवता आह्वान",
            description: "भगवान मंगल (मंगल ग्रह) को उनके दयालु रूप में आमंत्रित करने के लिए विशेष मंत्रों का जाप किया जाता है।"
          },
          {
            title: "पवित्र अग्नि स्थापना",
            description: "पारंपरिक विधियों का उपयोग करके अनुष्ठान अग्नि को प्रज्वलित किया जाता है और पवित्र किया जाता है।"
          },
          {
            title: "मंगल मंत्र पाठ",
            description: "मंगल के प्रभाव को शांत करने के लिए मंगल से संबंधित शक्तिशाली वैदिक मंत्रों का जाप किया जाता है।"
          },
          {
            title: "आहुतियां",
            description: "मंत्रों का जाप करते हुए विशेष जड़ी-बूटियां, लाल फूल और अन्य पवित्र सामग्री अग्नि को अर्पित की जाती है।"
          },
          {
            title: "अंतिम आहुति",
            description: "समारोह मंगलिक दोष के पूर्ण निवारण के लिए अंतिम आहुति और प्रार्थनाओं के साथ समाप्त होता है।"
          }
        ]
      },
      materials: {
        title: "प्रयुक्त पवित्र सामग्री",
        items: [
          {
            name: "लाल फूल",
            description: "मंगल ऊर्जा का प्रतीक हैं और इसके शमन में मदद करते हैं"
          },
          {
            name: "लाल चंदन",
            description: "पवित्र लकड़ी जिसमें मंगल ऊर्जा को संतुलित करने के गुण हैं"
          },
          {
            name: "मूंगा",
            description: "मंगल से जुड़ा रत्न, इसके प्रभाव को सामंजस्यपूर्ण बनाने के लिए उपयोग किया जाता है"
          },
          {
            name: "विशेष जड़ी-बूटियां",
            description: "औषधीय जड़ी-बूटियां जिनमें मंगल के नकारात्मक प्रभावों का मुकाबला करने के गुण हैं"
          },
          {
            name: "घी",
            description: "शुद्ध घी जो प्राथमिक आहुति के रूप में काम करता है"
          }
        ]
      },
      recommendations: {
        title: "इस यज्ञ को किसे करना चाहिए",
        description: "यह यज्ञ विशेष रूप से उन व्यक्तियों के लिए लाभदायक है जो:",
        items: [
          "जिनकी जन्म कुंडली में मंगल 1, 4, 7, 8, या 12वें भाव में स्थित है",
          "उपयुक्त विवाह साथी खोजने में देरी या बाधाओं का अनुभव कर रहे हैं",
          "अपने विवाह या रिश्ते में संघर्ष और गलतफहमियों का सामना कर रहे हैं",
          "किसी ऐसे व्यक्ति से विवाह करने की योजना बना रहे हैं जो मंगलिक है (जब एक साथी मंगलिक है और दूसरा नहीं)",
          "अपने रिश्ते को मजबूत करना और अपने साथी के साथ सामंजस्य बनाना चाहते हैं"
        ]
      },
      consultation: {
        title: "व्यक्तिगत परामर्श",
        description: "इस यज्ञ को करने से पहले, हम आपकी जन्म कुंडली में मंगलिक दोष की उपस्थिति और विशिष्ट प्रकृति की पुष्टि के लिए एक विस्तृत ज्योतिषीय परामर्श की सलाह देते हैं। हमारे विशेषज्ञ ज्योतिषी आपकी अद्वितीय स्थिति का विश्लेषण कर सकते हैं और सबसे प्रभावी उपचारात्मक उपाय सुझा सकते हैं।"
      },
      cta: "अपना मंगलिक दोष निवारण यज्ञ शेड्यूल करें"
    }
  };

  // Select content based on current language
  const currentContent = language === 'hindi' ? content.hindi : content.english;

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
              {currentContent.title}
              <span className="heading-subtitle">{currentContent.subtitle}</span>
            </h1>
            <div className="sacred-decoration right"></div>
          </div>

          <div className="intro-section">
            <p className="intro-paragraph">
              {currentContent.intro}
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

          <div className="purpose-section">
            <h2 className="section-heading">
              <i className="fa fa-bullseye"></i>
              {currentContent.purpose.title}
            </h2>
            <div className="purpose-content">
              <p className="purpose-description">
                {currentContent.purpose.description}
              </p>
            </div>
          </div>

          <div className="benefits-section">
            <h2 className="section-heading">
              <i className="fa fa-star"></i>
              {currentContent.benefits.title}
            </h2>
            <div className="benefits-grid">
              {currentContent.benefits.items.map((benefit, index) => (
                <div className="benefit-card" key={index}>
                  <div className="benefit-icon">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="procedure-section">
            <h2 className="section-heading">
              <i className="fa fa-cogs"></i>
              {currentContent.procedure.title}
            </h2>
            <div className="process-timeline">
              {currentContent.procedure.steps.map((step, index) => (
                <div className="process-step" key={index}>
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="materials-section">
            <h2 className="section-heading">
              <i className="fa fa-leaf"></i>
              {currentContent.materials.title}
            </h2>
            <div className="materials-grid">
              {currentContent.materials.items.map((material, index) => (
                <div className="material-item" key={index}>
                  <div className={`material-icon material-${index + 1}`}></div>
                  <h3 className="material-name">{material.name}</h3>
                  <p className="material-description">{material.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="recommendations-section">
            <h2 className="section-heading">
              <i className="fa fa-users"></i>
              {currentContent.recommendations.title}
            </h2>
            <p className="recommendation-intro">
              {currentContent.recommendations.description}
            </p>
            <ul className="recommendations-list">
              {currentContent.recommendations.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="consultation-section">
            <h2 className="section-heading">
              <i className="fa fa-comments"></i>
              {currentContent.consultation.title}
            </h2>
            <p className="consultation-description">
              {currentContent.consultation.description}
            </p>
            <div className="consultation-cta">
              <a href="/contact" className="cta-button">
                {currentContent.cta}
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

export default Manglik;