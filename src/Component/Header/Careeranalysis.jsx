import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './Careeranalysis.css';

const Careeranalysis = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      mainHeading: "Career Timing Analysis",
      subHeading: "Discover the optimal astrological periods for career moves and advancements",
      whatIsTitle: "What Is Career Timing Analysis?",
      whatIsText: "Career timing analysis involves predicting favorable periods for career advancements, job changes, or business ventures based on astrological transits and planetary periods (dashas).",
      dashaTitle: "Dasha & Antardasha System",
      dashaPoints: [
        "Mahadasha (Major Period): Jupiter Dasha (16 years): Growth in education, law, finance.",
        "Mahadasha (Major Period): Rahu Dasha (18 years): Sudden career shifts (IT, media).",
        "Antardasha (Sub-Period): Saturn in Mercury Antardasha: Job changes, delays."
      ],
      transitsTitle: "Transits (Gochar) & Career Changes",
      transitsPoints: [
        "Jupiter in 10H: Promotions, recognition.",
        "Saturn in 6H: Hard work leads to success.",
        "Rahu/Ketu in Career Houses: Unexpected job switches."
      ],
      saturnTitle: "Saturn's Role in Career Growth",
      saturnPoints: [
        "Sade Sati (7.5 Years): Challenges but eventual success.",
        "Saturn in 10H: Late but stable career growth (e.g., doctors, engineers)."
      ],
      howItWorksTitle: "How Does It Work?",
      howItWorksText: "Astrologers examine:",
      howItWorksList: [
        "Planetary Transits: Movements of planets like Jupiter and Saturn that influence career opportunities.",
        "Dashas: Planetary periods that indicate specific life themes and events.",
        "Progressions: Secondary movements that reflect internal developments affecting career decisions."
      ],
      howItWorksConclusion: "By analyzing these factors, astrologers can forecast optimal times for professional actions.",
      whyImportantTitle: "Why Is It Important?",
      whyImportantText: "Timing is crucial in career development. Astrological insights can:",
      whyImportantPoints: [
        "Help in planning job changes or business launches.",
        "Avoid periods of potential setbacks.",
        "Maximize opportunities during favorable planetary alignments."
      ],
      timingExamplesTitle: "Examples of Timing Indicators",
      timingExamples: [
        {
          scenario: "Job Change",
          favorable: "Jupiter transiting 10th house, Saturn-Mercury period",
          unfavorable: "Saturn retrograde in 10th house, Rahu-Ketu axis across 6/12 houses"
        },
        {
          scenario: "Business Launch",
          favorable: "Jupiter-Venus period, Mercury direct in 10th house",
          unfavorable: "Mercury retrograde, Saturn-Mars period"
        },
        {
          scenario: "Promotion",
          favorable: "Sun-Jupiter period, Jupiter transiting 1st or 10th house",
          unfavorable: "Saturn-Rahu period, eclipses in career houses"
        }
      ],
      personalizedTitle: "Personalized Career Timing Analysis",
      personalizedText: "Our expert astrologers provide detailed analysis of your birth chart to identify the most favorable periods for career moves. This analysis includes:",
      personalizedPoints: [
        "Current and upcoming planetary periods (Dashas and Antardashas)",
        "Significant planetary transits affecting your career houses",
        "Timing of Sade Sati and other Saturn influences",
        "Personalized timeline of favorable and challenging periods",
        "Strategic recommendations for optimal career timing"
      ],
      ctaButton: "Get Your Career Timing Analysis"
    },
    hindi: {
      mainHeading: "करियर समय विश्लेषण",
      subHeading: "करियर में बदलाव और उन्नति के लिए इष्टतम ज्योतिषीय अवधियों की खोज करें",
      whatIsTitle: "करियर समय विश्लेषण क्या है?",
      whatIsText: "करियर समय विश्लेषण में ज्योतिषीय गोचर और ग्रहीय अवधियों (दशाओं) के आधार पर करियर में उन्नति, नौकरी में बदलाव, या व्यापारिक उद्यमों के लिए अनुकूल अवधियों की भविष्यवाणी शामिल है।",
      dashaTitle: "दशा और अंतर्दशा प्रणाली",
      dashaPoints: [
        "महादशा (प्रमुख अवधि): बृहस्पति दशा (16 वर्ष): शिक्षा, कानून, वित्त में वृद्धि।",
        "महादशा (प्रमुख अवधि): राहु दशा (18 वर्ष): अचानक करियर में बदलाव (आईटी, मीडिया)।",
        "अंतर्दशा (उप-अवधि): बुध में शनि अंतर्दशा: नौकरी में बदलाव, देरी।"
      ],
      transitsTitle: "गोचर और करियर में बदलाव",
      transitsPoints: [
        "10वें भाव में बृहस्पति: पदोन्नति, मान्यता।",
        "6ठे भाव में शनि: कड़ी मेहनत सफलता की ओर ले जाती है।",
        "करियर भावों में राहु/केतु: अप्रत्याशित नौकरी बदलाव।"
      ],
      saturnTitle: "करियर विकास में शनि की भूमिका",
      saturnPoints: [
        "साढ़े साती (7.5 वर्ष): चुनौतियां लेकिन अंततः सफलता।",
        "10वें भाव में शनि: देर से लेकिन स्थिर करियर विकास (जैसे, डॉक्टर, इंजीनियर)।"
      ],
      howItWorksTitle: "यह कैसे काम करता है?",
      howItWorksText: "ज्योतिषी इनकी जांच करते हैं:",
      howItWorksList: [
        "ग्रहीय गोचर: बृहस्पति और शनि जैसे ग्रहों की गतिविधियां जो करियर के अवसरों को प्रभावित करती हैं।",
        "दशाएं: ग्रहीय अवधियां जो विशिष्ट जीवन विषयों और घटनाओं को इंगित करती हैं।",
        "प्रगति: द्वितीयक गतिविधियां जो करियर निर्णयों को प्रभावित करने वाले आंतरिक विकास को दर्शाती हैं।"
      ],
      howItWorksConclusion: "इन कारकों का विश्लेषण करके, ज्योतिषी पेशेवर कार्यों के लिए इष्टतम समय का पूर्वानुमान लगा सकते हैं।",
      whyImportantTitle: "यह क्यों महत्वपूर्ण है?",
      whyImportantText: "करियर विकास में समय महत्वपूर्ण है। ज्योतिषीय अंतर्दृष्टि:",
      whyImportantPoints: [
        "नौकरी में बदलाव या व्यापार शुरू करने की योजना बनाने में मदद कर सकती है।",
        "संभावित झटकों की अवधि से बच सकती है।",
        "अनुकूल ग्रहीय संरेखण के दौरान अवसरों को अधिकतम कर सकती है।"
      ],
      timingExamplesTitle: "समय संकेतकों के उदाहरण",
      timingExamples: [
        {
          scenario: "नौकरी में बदलाव",
          favorable: "10वें भाव में बृहस्पति का गोचर, शनि-बुध अवधि",
          unfavorable: "10वें भाव में शनि वक्री, 6/12 भावों में राहु-केतु अक्ष"
        },
        {
          scenario: "व्यापार शुरू करना",
          favorable: "बृहस्पति-शुक्र अवधि, 10वें भाव में बुध मार्गी",
          unfavorable: "बुध वक्री, शनि-मंगल अवधि"
        },
        {
          scenario: "पदोन्नति",
          favorable: "सूर्य-बृहस्पति अवधि, 1ले या 10वें भाव में बृहस्पति का गोचर",
          unfavorable: "शनि-राहु अवधि, करियर भावों में ग्रहण"
        }
      ],
      personalizedTitle: "व्यक्तिगत करियर समय विश्लेषण",
      personalizedText: "हमारे विशेषज्ञ ज्योतिषी करियर में बदलाव के लिए सबसे अनुकूल अवधियों की पहचान करने के लिए आपकी जन्म कुंडली का विस्तृत विश्लेषण प्रदान करते हैं। इस विश्लेषण में शामिल हैं:",
      personalizedPoints: [
        "वर्तमान और आगामी ग्रहीय अवधियां (दशाएं और अंतर्दशाएं)",
        "आपके करियर भावों को प्रभावित करने वाले महत्वपूर्ण ग्रहीय गोचर",
        "साढ़े साती और अन्य शनि प्रभावों का समय",
        "अनुकूल और चुनौतीपूर्ण अवधियों की व्यक्तिगत समयरेखा",
        "इष्टतम करियर समय के लिए रणनीतिक सिफारिशें"
      ],
      ctaButton: "अपना करियर समय विश्लेषण प्राप्त करें"
    }
  };

  return (
    <div className="career-timing-container">
      <Navbar />
      <div className="career-timing-content">
        <header className="main-header">
          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="what-is-section">
          <h2>{content[language].whatIsTitle}</h2>
          <p>{content[language].whatIsText}</p>
        </section>

        <div className="three-column-section">
          <section className="dasha-section">
            <h2>{content[language].dashaTitle}</h2>
            <ul className="dasha-list">
              {content[language].dashaPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="transits-section">
            <h2>{content[language].transitsTitle}</h2>
            <ul className="transits-list">
              {content[language].transitsPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="saturn-section">
            <h2>{content[language].saturnTitle}</h2>
            <ul className="saturn-list">
              {content[language].saturnPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="how-it-works-section">
          <h2>{content[language].howItWorksTitle}</h2>
          <p>{content[language].howItWorksText}</p>
          <ul className="how-it-works-list">
            {content[language].howItWorksList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{content[language].howItWorksConclusion}</p>
        </section>

        <section className="why-important-section">
          <h2>{content[language].whyImportantTitle}</h2>
          <p>{content[language].whyImportantText}</p>
          <ul className="why-important-list">
            {content[language].whyImportantPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="timing-examples-section">
          <h2>{content[language].timingExamplesTitle}</h2>
          <div className="timing-examples-table">
            <div className="table-header">
              <div className="table-cell">Scenario</div>
              <div className="table-cell">Favorable Timing</div>
              <div className="table-cell">Unfavorable Timing</div>
            </div>
            {content[language].timingExamples.map((example, index) => (
              <div className="table-row" key={index}>
                <div className="table-cell">{example.scenario}</div>
                <div className="table-cell favorable">{example.favorable}</div>
                <div className="table-cell unfavorable">{example.unfavorable}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="personalized-section">
          <h2>{content[language].personalizedTitle}</h2>
          <p>{content[language].personalizedText}</p>
          <ul className="personalized-list">
            {content[language].personalizedPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>

        <div className="cta-section">
          <button className="cta-button">{content[language].ctaButton}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careeranalysis;