import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './JobBusinessAnalysis.css';

const JobBusinessAnalysis = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      mainHeading: "Job vs Business Analysis",
      subHeading: "Discover your astrological inclination towards employment or entrepreneurship",
      whatIsTitle: "What Is Job vs. Business Analysis in Astrology?",
      whatIsText: "This analysis helps determine whether an individual is better suited for employment or entrepreneurship based on their astrological chart. It assesses planetary positions and house strengths to guide career decisions.",
      planetaryJobTitle: "Planetary Combinations for Jobs (Government/Private Sector)",
      planetaryJobPoints: [
        "Sun + Saturn: Government jobs (IAS, IPS, administrative roles).",
        "Mercury + Jupiter: Corporate jobs (IT, finance, consulting).",
        "Moon + Venus: Creative jobs (media, arts, hospitality)."
      ],
      planetaryBusinessTitle: "Planetary Combinations for Business",
      planetaryBusinessPoints: [
        "Mars + Rahu: Aggressive entrepreneurship (startups, tech).",
        "Jupiter + Ketu: Spiritual or unconventional business (astrology, healing).",
        "Mercury + Venus: Trade, commerce, and retail businesses."
      ],
      comparativeTitle: "Comparative Analysis: Job vs. Business",
      comparativeTable: [
        { factor: "Stability", job: "High (fixed income)", business: "Variable (risk-reward)" },
        { factor: "Planetary Influence", job: "Saturn (discipline)", business: "Mars (initiative)" },
        { factor: "Best for Zodiac Signs", job: "Taurus, Virgo, Capricorn", business: "Aries, Leo, Sagittarius" },
        { factor: "Growth Potential", job: "Structured, predictable", business: "Unlimited, unpredictable" },
        { factor: "Work-Life Balance", job: "Generally better defined", business: "Often blurred boundaries" }
      ],
      howItWorksTitle: "How Does It Work?",
      howItWorksText: "Key factors considered include:",
      keyFactors: [
        "6th House: Strong emphasis suggests a propensity for employment and structured work environments.",
        "7th House: Dominance indicates potential success in partnerships and business ventures.",
        "10th House: Central to career; its connections with the 6th or 7th house provide further insights.",
        "Planetary Influences: Mercury favors business acumen; Saturn indicates discipline suitable for jobs."
      ],
      howItWorksConclusion: "Astrologers analyze these aspects to recommend the most favorable career path.",
      whyImportantTitle: "Why Is It Important?",
      whyImportantText: "Choosing the right career path aligned with one's astrological profile can lead to:",
      whyImportantPoints: [
        "Greater job satisfaction.",
        "Enhanced success and stability.",
        "Reduced professional conflicts and setbacks."
      ],
      personalizedTitle: "Personalized Analysis",
      personalizedText: "Our expert astrologers provide detailed analysis of your birth chart to determine whether you're naturally inclined toward employment or entrepreneurship. This analysis includes:",
      personalizedPoints: [
        "Detailed examination of your 6th, 7th, and 10th houses",
        "Analysis of planetary positions and aspects",
        "Evaluation of your zodiac sign's natural tendencies",
        "Assessment of current planetary transits affecting career decisions",
        "Practical recommendations based on your unique chart"
      ],
      ctaButton: "Get Your Job vs Business Analysis"
    },
    hindi: {
      mainHeading: "नौकरी बनाम व्यापार विश्लेषण",
      subHeading: "रोजगार या उद्यमिता के प्रति अपने ज्योतिषीय झुकाव की खोज करें",
      whatIsTitle: "ज्योतिष में नौकरी बनाम व्यापार विश्लेषण क्या है?",
      whatIsText: "यह विश्लेषण यह निर्धारित करने में मदद करता है कि कोई व्यक्ति अपने ज्योतिषीय चार्ट के आधार पर रोजगार या उद्यमिता के लिए बेहतर उपयुक्त है। यह करियर निर्णयों का मार्गदर्शन करने के लिए ग्रहों की स्थिति और भाव की ताकत का आकलन करता है।",
      planetaryJobTitle: "नौकरियों के लिए ग्रहीय संयोजन (सरकारी/निजी क्षेत्र)",
      planetaryJobPoints: [
        "सूर्य + शनि: सरकारी नौकरियां (आईएएस, आईपीएस, प्रशासनिक भूमिकाएं)।",
        "बुध + बृहस्पति: कॉर्पोरेट नौकरियां (आईटी, वित्त, परामर्श)।",
        "चंद्रमा + शुक्र: रचनात्मक नौकरियां (मीडिया, कला, आतिथ्य)।"
      ],
      planetaryBusinessTitle: "व्यापार के लिए ग्रहीय संयोजन",
      planetaryBusinessPoints: [
        "मंगल + राहु: आक्रामक उद्यमिता (स्टार्टअप, तकनीक)।",
        "बृहस्पति + केतु: आध्यात्मिक या अपरंपरागत व्यवसाय (ज्योतिष, चिकित्सा)।",
        "बुध + शुक्र: व्यापार, वाणिज्य और खुदरा व्यवसाय।"
      ],
      comparativeTitle: "तुलनात्मक विश्लेषण: नौकरी बनाम व्यापार",
      comparativeTable: [
        { factor: "स्थिरता", job: "उच्च (निश्चित आय)", business: "परिवर्तनशील (जोखिम-इनाम)" },
        { factor: "ग्रहीय प्रभाव", job: "शनि (अनुशासन)", business: "मंगल (पहल)" },
        { factor: "राशियों के लिए सर्वोत्तम", job: "वृषभ, कन्या, मकर", business: "मेष, सिंह, धनु" },
        { factor: "विकास क्षमता", job: "संरचित, अनुमानित", business: "असीमित, अप्रत्याशित" },
        { factor: "कार्य-जीवन संतुलन", job: "आमतौर पर बेहतर परिभाषित", business: "अक्सर धुंधली सीमाएं" }
      ],
      howItWorksTitle: "यह कैसे काम करता है?",
      howItWorksText: "विचार किए गए प्रमुख कारकों में शामिल हैं:",
      keyFactors: [
        "6ठा भाव: मजबूत जोर रोजगार और संरचित कार्य वातावरण के लिए प्रवृत्ति का सुझाव देता है।",
        "7वां भाव: प्रभुत्व साझेदारी और व्यापारिक उद्यमों में संभावित सफलता का संकेत देता है।",
        "10वां भाव: करियर के लिए केंद्रीय; 6ठे या 7वें भाव के साथ इसके संबंध आगे की अंतर्दृष्टि प्रदान करते हैं।",
        "ग्रहीय प्रभाव: बुध व्यापारिक समझ का पक्ष लेता है; शनि अनुशासन का संकेत देता है जो नौकरियों के लिए उपयुक्त है।"
      ],
      howItWorksConclusion: "ज्योतिषी सबसे अनुकूल करियर पथ की सिफारिश करने के लिए इन पहलुओं का विश्लेषण करते हैं।",
      whyImportantTitle: "यह क्यों महत्वपूर्ण है?",
      whyImportantText: "किसी के ज्योतिषीय प्रोफाइल के अनुरूप सही करियर पथ चुनने से:",
      whyImportantPoints: [
        "अधिक नौकरी संतुष्टि।",
        "बढ़ी हुई सफलता और स्थिरता।",
        "पेशेवर संघर्षों और झटकों में कमी।"
      ],
      personalizedTitle: "व्यक्तिगत विश्लेषण",
      personalizedText: "हमारे विशेषज्ञ ज्योतिषी आपकी जन्म कुंडली का विस्तृत विश्लेषण प्रदान करते हैं यह निर्धारित करने के लिए कि क्या आप स्वाभाविक रूप से रोजगार या उद्यमिता की ओर झुके हुए हैं। इस विश्लेषण में शामिल हैं:",
      personalizedPoints: [
        "आपके 6ठे, 7वें और 10वें भावों की विस्तृत जांच",
        "ग्रहों की स्थिति और पहलुओं का विश्लेषण",
        "आपकी राशि की प्राकृतिक प्रवृत्तियों का मूल्यांकन",
        "करियर निर्णयों को प्रभावित करने वाले वर्तमान ग्रहीय गोचर का आकलन",
        "आपके अद्वितीय चार्ट के आधार पर व्यावहारिक सिफारिशें"
      ],
      ctaButton: "अपना नौकरी बनाम व्यापार विश्लेषण प्राप्त करें"
    }
  };

  return (
    <div className="job-analysis-container">
      <Navbar />
      <div className="job-analysis-content">
        <header className="main-header">
          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="what-is-section">
          <h2>{content[language].whatIsTitle}</h2>
          <p>{content[language].whatIsText}</p>
        </section>

        <div className="two-column-section">
          <section className="planetary-job-section">
            <h2>{content[language].planetaryJobTitle}</h2>
            <ul className="planetary-list">
              {content[language].planetaryJobPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="planetary-business-section">
            <h2>{content[language].planetaryBusinessTitle}</h2>
            <ul className="planetary-list">
              {content[language].planetaryBusinessPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="comparative-section">
          <h2>{content[language].comparativeTitle}</h2>
          <div className="comparative-table">
            <div className="table-header">
              <div className="table-cell">Factor</div>
              <div className="table-cell">Job</div>
              <div className="table-cell">Business</div>
            </div>
            {content[language].comparativeTable.map((row, index) => (
              <div className="table-row" key={index}>
                <div className="table-cell">{row.factor}</div>
                <div className="table-cell">{row.job}</div>
                <div className="table-cell">{row.business}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="how-it-works-section">
          <h2>{content[language].howItWorksTitle}</h2>
          <p>{content[language].howItWorksText}</p>
          <ul className="key-factors-list">
            {content[language].keyFactors.map((factor, index) => (
              <li key={index}>{factor}</li>
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

export default JobBusinessAnalysis;