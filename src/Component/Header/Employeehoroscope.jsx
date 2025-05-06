import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import { FaUsers, FaChartLine, FaHandshake, FaUserTie, FaBuilding } from 'react-icons/fa';
import './Employeehoroscope.css';

const Employeehoroscope = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    english: {
      mainHeading: "Employee Horoscope Reading: Unlock Potential and Productivity",
      subHeading: "Align employee energies with your organizational goals through personalized astrological insights.",
      introduction: "In today's competitive environment, the success of a company depends not only on skillsets but also on the right cosmic timing and compatibility. Employee Horoscope Reading helps employers identify hidden talents, motivational triggers, leadership qualities, and challenges in their teams. By understanding each employee's astrological blueprint, businesses can place the right person in the right role, enhance team synergy, and boost overall productivity.",
      keyBenefitsTitle: "Key Benefits",
      keyBenefits: [
        "Identify natural leadership, creativity, and analytical strengths",
        "Recognize stress points and remedial actions",
        "Improve team harmony and communication",
        "Assist in recruitment and talent management",
        "Strategic role assignments and promotions based on planetary strengths"
      ],
      whatWeAnalyzeTitle: "What We Analyze",
      whatWeAnalyze: [
        "Sun Sign and Moon Sign Influence",
        "Ascendant and Career House (10th House)",
        "Strength of Mercury, Jupiter, Mars (Career Planets)",
        "Dasha (Period) Analysis for current opportunities",
        "Compatibility Reports among teams"
      ],
      bestForTitle: "Best for",
      bestFor: [
        "HR Departments for recruitment",
        "Managers for team structuring",
        "Startups wanting optimal team alignment",
        "Leadership Development Programs"
      ],
      ctaButton: "Book Employee Horoscope Consultation Now"
    },
    hindi: {
      mainHeading: "कर्मचारी राशिफल रीडिंग: क्षमता और उत्पादकता को अनलॉक करें",
      subHeading: "व्यक्तिगत ज्योतिषीय अंतर्दृष्टि के माध्यम से कर्मचारी ऊर्जाओं को अपने संगठनात्मक लक्ष्यों के साथ संरेखित करें।",
      introduction: "आज के प्रतिस्पर्धी वातावरण में, एक कंपनी की सफलता न केवल कौशल पर बल्कि सही ब्रह्मांडीय समय और संगतता पर भी निर्भर करती है। कर्मचारी राशिफल रीडिंग नियोक्ताओं को अपनी टीमों में छिपी प्रतिभाओं, प्रेरक ट्रिगर्स, नेतृत्व गुणों और चुनौतियों की पहचान करने में मदद करती है। प्रत्येक कर्मचारी के ज्योतिषीय ब्लूप्रिंट को समझकर, व्यवसाय सही व्यक्ति को सही भूमिका में रख सकते हैं, टीम सहक्रिया को बढ़ा सकते हैं, और समग्र उत्पादकता को बढ़ावा दे सकते हैं।",
      keyBenefitsTitle: "प्रमुख लाभ",
      keyBenefits: [
        "प्राकृतिक नेतृत्व, रचनात्मकता और विश्लेषणात्मक ताकतों की पहचान करें",
        "तनाव बिंदुओं और उपचारात्मक कार्यों को पहचानें",
        "टीम सद्भाव और संचार में सुधार करें",
        "भर्ती और प्रतिभा प्रबंधन में सहायता करें",
        "ग्रहीय शक्तियों के आधार पर रणनीतिक भूमिका असाइनमेंट और पदोन्नति"
      ],
      whatWeAnalyzeTitle: "हम क्या विश्लेषण करते हैं",
      whatWeAnalyze: [
        "सूर्य राशि और चंद्र राशि का प्रभाव",
        "लग्न और करियर भाव (10वां भाव)",
        "बुध, बृहस्पति, मंगल (करियर ग्रह) की शक्ति",
        "वर्तमान अवसरों के लिए दशा (अवधि) विश्लेषण",
        "टीमों के बीच संगतता रिपोर्ट"
      ],
      bestForTitle: "इनके लिए सर्वोत्तम",
      bestFor: [
        "भर्ती के लिए एचआर विभाग",
        "टीम संरचना के लिए प्रबंधक",
        "इष्टतम टीम संरेखण चाहने वाले स्टार्टअप",
        "नेतृत्व विकास कार्यक्रम"
      ],
      ctaButton: "अभी कर्मचारी राशिफल परामर्श बुक करें"
    }
  };

  return (
    <div className="employee-horoscope-container">
      <Navbar />
      <div className="employee-horoscope-content">

        <header className="main-header">
          <h1>{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="section">
          <p>{content[language].introduction}</p>
        </section>

        <section className="section">
          <h2>{content[language].keyBenefitsTitle}</h2>
          <div className="benefits-grid">
            {content[language].keyBenefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                {index === 0 && <FaUserTie className="benefit-icon" />}
                {index === 1 && <FaChartLine className="benefit-icon" />}
                {index === 2 && <FaHandshake className="benefit-icon" />}
                {index === 3 && <FaUsers className="benefit-icon" />}
                {index === 4 && <FaBuilding className="benefit-icon" />}
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="analysis-section">
          <h3>{content[language].whatWeAnalyzeTitle}</h3>
          <ul className="analysis-list">
            {content[language].whatWeAnalyze.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="best-for-section">
          <h3>{content[language].bestForTitle}</h3>
          <ul className="best-for-list">
            {content[language].bestFor.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <button className="cta-button">
          {content[language].ctaButton}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Employeehoroscope;