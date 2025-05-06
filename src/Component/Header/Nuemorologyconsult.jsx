import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import numerologyImage from '../../assets/NumerologyC.jpg';
import './Nuemorologyconsult.css';

const Nuemorologyconsult = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      mainHeading: "Numerology Consultation",
      subHeading: "Discover the hidden patterns in your life through the ancient science of numbers",
      introduction: "A Numerology Consultation is a personalized session where a numerologist interprets your birth date, name, and important numbers to offer insights into your personality, life path, career, and relationships. It's a non-invasive, deeply revealing tool for self-discovery and spiritual alignment.",
      howItWorksTitle: "How Does It Work?",
      howItWorksText: "During a consultation, the numerologist calculates your Core Numbers including Life Path Number (your life's journey), Expression/Destiny Number (your potential), Soul Urge Number (your inner desires), and Personality Number. They also look into timing cycles (Personal Year, Pinnacle) to predict favorable periods and identify karmic debts or master numbers (11, 22, 33). This data is used to offer practical advice on relationships, financial or career decisions, timing of ventures, and spiritual growth. Consultations can be done in person or online, often with detailed reports.",
      coreNumbersTitle: "Core Numbers in Numerology",
      coreNumbersList: [
        "Life Path Number: Derived from your birth date, reveals your life purpose and journey",
        "Destiny Number: Calculated from your full name, shows your potential and talents",
        "Soul Urge Number: Based on vowels in your name, reveals your inner desires and motivations",
        "Personality Number: Based on consonants in your name, shows how others perceive you",
        "Birth Day Number: The day of your birth, indicates specific talents and abilities"
      ],
      benefitsTitle: "Benefits of a Numerology Consultation",
      benefitsList: [
        "Get clarity on confusing life situations and decisions",
        "Discover your true talents, strengths, and life purpose",
        "Understand your relationship patterns and compatibility",
        "Identify favorable timing for major life events and ventures",
        "Gain insights into recurring challenges and how to overcome them",
        "Align your career and personal choices with your numerological blueprint",
        "Complement astrological readings with number-based precision"
      ],
      servicesTitle: "Our Numerology Services",
      servicesList: [
        "Basic Numerology Profile: Core numbers and their interpretation",
        "Comprehensive Life Analysis: Detailed report on all aspects of life",
        "Relationship Compatibility: Analysis of numerological harmony between partners",
        "Business Numerology: Optimal timing and strategies for professional success",
        "Name Analysis & Correction: Suggestions for name adjustments to improve vibration",
        "Annual Forecast: Predictions and guidance for the coming year",
        "Children's Numerology: Understanding your child's potential and needs"
      ],
      whatToExpectTitle: "What to Expect in Your Session",
      whatToExpectText: "Your numerology consultation begins with gathering your birth details and full name. Our expert numerologist will calculate your core numbers and analyze their interactions. During the session, you'll receive insights about your personality traits, strengths, challenges, and life purpose. We'll discuss your current life phase and upcoming cycles, offering practical guidance for navigating them successfully. You'll have the opportunity to ask questions about specific areas of concern. After the session, you'll receive a written report summarizing the findings and recommendations.",
      ctaButton: "Book Your Numerology Consultation"
    },
    hindi: {
      mainHeading: "अंकशास्त्र परामर्श",
      subHeading: "संख्याओं के प्राचीन विज्ञान के माध्यम से अपने जीवन में छिपे पैटर्न की खोज करें",
      introduction: "अंकशास्त्र परामर्श एक व्यक्तिगत सत्र है जहां एक अंकज्योतिषी आपकी जन्म तिथि, नाम और महत्वपूर्ण संख्याओं की व्याख्या करके आपके व्यक्तित्व, जीवन पथ, करियर और रिश्तों के बारे में अंतर्दृष्टि प्रदान करता है। यह आत्म-खोज और आध्यात्मिक संरेखण के लिए एक गैर-आक्रामक, गहराई से प्रकट करने वाला उपकरण है।",
      howItWorksTitle: "यह कैसे काम करता है?",
      howItWorksText: "परामर्श के दौरान, अंकज्योतिषी आपके कोर नंबरों की गणना करता है जिसमें लाइफ पाथ नंबर (आपकी जीवन यात्रा), एक्सप्रेशन/डेस्टिनी नंबर (आपकी क्षमता), सोल अर्ज नंबर (आपकी आंतरिक इच्छाएं), और पर्सनैलिटी नंबर शामिल हैं। वे अनुकूल अवधियों की भविष्यवाणी करने के लिए टाइमिंग चक्रों (पर्सनल ईयर, पिनेकल) और कार्मिक ऋणों या मास्टर नंबरों (11, 22, 33) की पहचान करते हैं। इस डेटा का उपयोग रिश्तों, वित्तीय या करियर निर्णयों, उद्यमों के समय और आध्यात्मिक विकास पर व्यावहारिक सलाह देने के लिए किया जाता है। परामर्श व्यक्तिगत रूप से या ऑनलाइन किया जा सकता है, अक्सर विस्तृत रिपोर्ट के साथ।",
      coreNumbersTitle: "अंकशास्त्र में कोर नंबर",
      coreNumbersList: [
        "लाइफ पाथ नंबर: आपकी जन्म तिथि से प्राप्त, आपके जीवन के उद्देश्य और यात्रा को प्रकट करता है",
        "डेस्टिनी नंबर: आपके पूरे नाम से गणना की जाती है, आपकी क्षमता और प्रतिभा दिखाती है",
        "सोल अर्ज नंबर: आपके नाम के स्वरों पर आधारित, आपकी आंतरिक इच्छाओं और प्रेरणाओं को प्रकट करता है",
        "पर्सनैलिटी नंबर: आपके नाम के व्यंजनों पर आधारित, दिखाता है कि दूसरे आपको कैसे देखते हैं",
        "बर्थ डे नंबर: आपके जन्म का दिन, विशिष्ट प्रतिभाओं और क्षमताओं को इंगित करता है"
      ],
      benefitsTitle: "अंकशास्त्र परामर्श के लाभ",
      benefitsList: [
        "भ्रमित जीवन स्थितियों और निर्णयों पर स्पष्टता प्राप्त करें",
        "अपनी सच्ची प्रतिभाओं, ताकतों और जीवन के उद्देश्य की खोज करें",
        "अपने रिश्ते के पैटर्न और अनुकूलता को समझें",
        "प्रमुख जीवन घटनाओं और उद्यमों के लिए अनुकूल समय की पहचान करें",
        "आवर्ती चुनौतियों और उन्हें कैसे दूर करें, इस पर अंतर्दृष्टि प्राप्त करें",
        "अपने करियर और व्यक्तिगत विकल्पों को अपने अंकशास्त्रीय ब्लूप्रिंट के साथ संरेखित करें",
        "संख्या-आधारित सटीकता के साथ ज्योतिषीय पठन का पूरक"
      ],
      servicesTitle: "हमारी अंकशास्त्र सेवाएं",
      servicesList: [
        "बेसिक अंकशास्त्र प्रोफाइल: कोर नंबर और उनकी व्याख्या",
        "व्यापक जीवन विश्लेषण: जीवन के सभी पहलुओं पर विस्तृत रिपोर्ट",
        "रिलेशनशिप कंपैटिबिलिटी: साथियों के बीच अंकशास्त्रीय सामंजस्य का विश्लेषण",
        "बिजनेस अंकशास्त्र: पेशेवर सफलता के लिए इष्टतम समय और रणनीतियां",
        "नाम विश्लेषण और सुधार: कंपन में सुधार के लिए नाम समायोजन के सुझाव",
        "वार्षिक पूर्वानुमान: आने वाले वर्ष के लिए भविष्यवाणियां और मार्गदर्शन",
        "बच्चों का अंकशास्त्र: अपने बच्चे की क्षमता और जरूरतों को समझना"
      ],
      whatToExpectTitle: "आपके सत्र में क्या उम्मीद करें",
      whatToExpectText: "आपका अंकशास्त्र परामर्श आपके जन्म विवरण और पूरे नाम को इकट्ठा करने से शुरू होता है। हमारे विशेषज्ञ अंकज्योतिषी आपके कोर नंबरों की गणना करेंगे और उनकी परस्पर क्रियाओं का विश्लेषण करेंगे। सत्र के दौरान, आपको अपने व्यक्तित्व लक्षणों, ताकतों, चुनौतियों और जीवन के उद्देश्य के बारे में अंतर्दृष्टि प्राप्त होगी। हम आपके वर्तमान जीवन चरण और आगामी चक्रों पर चर्चा करेंगे, उन्हें सफलतापूर्वक नेविगेट करने के लिए व्यावहारिक मार्गदर्शन प्रदान करेंगे। आपको चिंता के विशिष्ट क्षेत्रों के बारे में प्रश्न पूछने का अवसर मिलेगा। सत्र के बाद, आपको निष्कर्षों और सिफारिशों का सारांश देने वाली एक लिखित रिपोर्ट प्राप्त होगी।",
      ctaButton: "अपना अंकशास्त्र परामर्श बुक करें"
    }
  };

  return (
    <div className="numerology-consult-container">
      <div className="background-image" style={{ backgroundImage: `url(${numerologyImage})` }}></div>
      <Navbar />
      <div className="numerology-consult-content">
        <header className="main-header">
          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="intro-section">
          <p className="intro-text">{content[language].introduction}</p>
        </section>

        <section className="how-it-works-section">
          <h2>{content[language].howItWorksTitle}</h2>
          <p>{content[language].howItWorksText}</p>
        </section>

        <section className="core-numbers-section">
          <h2>{content[language].coreNumbersTitle}</h2>
          <ul className="core-numbers-list">
            {content[language].coreNumbersList.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </section>

        <section className="benefits-section">
          <h2>{content[language].benefitsTitle}</h2>
          <ul className="benefits-list">
            {content[language].benefitsList.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section className="services-section">
          <h2>{content[language].servicesTitle}</h2>
          <ul className="services-list">
            {content[language].servicesList.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="what-to-expect-section">
          <h2>{content[language].whatToExpectTitle}</h2>
          <p>{content[language].whatToExpectText}</p>
        </section>

        <div className="cta-section">
          <button className="cta-button">{content[language].ctaButton}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nuemorologyconsult;