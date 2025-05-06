import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './Carreroverview.css';

const Carreroverview = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      mainHeading: "Career Astrology Overview",
      subHeading: "Discover how the stars influence your professional journey",
      whatIsTitle: "What Is Career Astrology?",
      whatIsText: "Career astrology is a specialized branch of astrology that analyzes an individual's birth chart to provide insights into their professional life. By examining the positions of planets, houses, and zodiac signs at the time of birth, astrologers can identify innate talents, suitable career paths, and potential challenges in one's professional journey. It is a specialized branch of Vedic astrology that analyzes planetary positions to predict professional success, job stability, business growth, and career transitions. It helps individuals choose the right profession, understand career obstacles, and identify favorable periods for growth.",
      howItWorksTitle: "How Does It Work?",
      howItWorksText: "Key components analyzed in career astrology include:",
      keyComponents: [
        "10th House (House of Career): Represents profession, status, and public life.",
        "6th House: Indicates daily work, service, and employment.",
        "2nd House: Relates to personal finances and earning capacity.",
        "Planetary Influences: Planets like Saturn, Mercury, Jupiter, and Mars play significant roles in determining career inclinations and success."
      ],
      howItWorksConclusion: "Astrologers interpret these elements to suggest careers that align with an individual's strengths and life purpose.",
      historicalTitle: "Historical Background",
      historicalPoints: [
        "Ancient Roots: References in Brihat Parashara Hora Shastra and Jataka Parijata discuss career indications.",
        "Role of Karma & Destiny: Astrology believes career success is influenced by past karma (10th house) and planetary blessings."
      ],
      connectionTitle: "Connection Between Astrology & Career",
      connectionPoints: [
        "10th House (Karma Bhava): Represents profession, reputation, and authority.",
        "6th House (Service & Competition): Indicates job stability, daily work, and competition.",
        "2nd & 11th Houses: Wealth (2H) and gains (11H) from career."
      ],
      keyFactorsTitle: "Key Astrological Factors for Career",
      keyFactorsTable: [
        { factor: "Strong 10th Lord", influence: "Career success, leadership" },
        { factor: "Saturn in 10H", influence: "Delayed but stable growth" },
        { factor: "Mars in 6H", influence: "Competitive jobs (military, police, engineering)" },
        { factor: "Jupiter in 10H", influence: "Teaching, law, advisory roles" }
      ],
      whyImportantTitle: "Why Is It Important?",
      whyImportantText: "Understanding one's astrological makeup can:",
      whyImportantPoints: [
        "Provide clarity on suitable career choices.",
        "Highlight periods of professional growth or challenges.",
        "Offer guidance on maximizing potential and achieving career satisfaction."
      ],
      ctaButton: "Get Your Career Astrology Reading"
    },
    hindi: {
      mainHeading: "करियर ज्योतिष अवलोकन",
      subHeading: "जानिए कैसे तारे आपकी पेशेवर यात्रा को प्रभावित करते हैं",
      whatIsTitle: "करियर ज्योतिष क्या है?",
      whatIsText: "करियर ज्योतिष ज्योतिष की एक विशेष शाखा है जो व्यक्ति के जन्म कुंडली का विश्लेषण करके उनके पेशेवर जीवन के बारे में अंतर्दृष्टि प्रदान करती है। जन्म के समय ग्रहों, भावों और राशियों की स्थिति की जांच करके, ज्योतिषी जन्मजात प्रतिभाओं, उपयुक्त करियर पथों और किसी के पेशेवर यात्रा में संभावित चुनौतियों की पहचान कर सकते हैं। यह वैदिक ज्योतिष की एक विशेष शाखा है जो पेशेवर सफलता, नौकरी स्थिरता, व्यापार वृद्धि और करियर परिवर्तन की भविष्यवाणी करने के लिए ग्रहों की स्थिति का विश्लेषण करती है। यह व्यक्तियों को सही पेशा चुनने, करियर की बाधाओं को समझने और विकास के लिए अनुकूल अवधि की पहचान करने में मदद करता है।",
      howItWorksTitle: "यह कैसे काम करता है?",
      howItWorksText: "करियर ज्योतिष में विश्लेषण किए गए प्रमुख घटकों में शामिल हैं:",
      keyComponents: [
        "10वां भाव (करियर का भाव): पेशा, स्थिति और सार्वजनिक जीवन का प्रतिनिधित्व करता है।",
        "6ठा भाव: दैनिक कार्य, सेवा और रोजगार को दर्शाता है।",
        "2रा भाव: व्यक्तिगत वित्त और कमाई क्षमता से संबंधित है।",
        "ग्रहीय प्रभाव: शनि, बुध, बृहस्पति और मंगल जैसे ग्रह करियर झुकाव और सफलता निर्धारित करने में महत्वपूर्ण भूमिका निभाते हैं।"
      ],
      howItWorksConclusion: "ज्योतिषी इन तत्वों की व्याख्या करके ऐसे करियर का सुझाव देते हैं जो व्यक्ति की ताकत और जीवन के उद्देश्य के अनुरूप हों।",
      historicalTitle: "ऐतिहासिक पृष्ठभूमि",
      historicalPoints: [
        "प्राचीन जड़ें: बृहत पराशर होरा शास्त्र और जातक पारिजात में संदर्भ करियर संकेतों पर चर्चा करते हैं।",
        "कर्म और नियति की भूमिका: ज्योतिष का मानना है कि करियर की सफलता पिछले कर्म (10वें भाव) और ग्रहीय आशीर्वाद से प्रभावित होती है।"
      ],
      connectionTitle: "ज्योतिष और करियर के बीच संबंध",
      connectionPoints: [
        "10वां भाव (कर्म भाव): पेशा, प्रतिष्ठा और अधिकार का प्रतिनिधित्व करता है।",
        "6ठा भाव (सेवा और प्रतिस्पर्धा): नौकरी स्थिरता, दैनिक कार्य और प्रतिस्पर्धा को दर्शाता है।",
        "2रा और 11वां भाव: करियर से धन (2H) और लाभ (11H)।"
      ],
      keyFactorsTitle: "करियर के लिए प्रमुख ज्योतिषीय कारक",
      keyFactorsTable: [
        { factor: "मजबूत 10वें भाव का स्वामी", influence: "करियर सफलता, नेतृत्व" },
        { factor: "10वें भाव में शनि", influence: "देरी से लेकिन स्थिर विकास" },
        { factor: "6ठे भाव में मंगल", influence: "प्रतिस्पर्धी नौकरियां (सैन्य, पुलिस, इंजीनियरिंग)" },
        { factor: "10वें भाव में बृहस्पति", influence: "शिक्षण, कानून, सलाहकार भूमिकाएं" }
      ],
      whyImportantTitle: "यह क्यों महत्वपूर्ण है?",
      whyImportantText: "किसी के ज्योतिषीय संरचना को समझने से:",
      whyImportantPoints: [
        "उपयुक्त करियर विकल्पों पर स्पष्टता प्रदान करें।",
        "पेशेवर विकास या चुनौतियों की अवधि को उजागर करें।",
        "क्षमता को अधिकतम करने और करियर संतुष्टि प्राप्त करने पर मार्गदर्शन प्रदान करें।"
      ],
      ctaButton: "अपना करियर ज्योतिष पाठ प्राप्त करें"
    }
  };

  return (
    <div className="career-overview-container">
      <Navbar />
      <div className="career-overview-content">
        <header className="main-header">
          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="what-is-section">
          <h2>{content[language].whatIsTitle}</h2>
          <p>{content[language].whatIsText}</p>
        </section>

        <section className="how-it-works-section">
          <h2>{content[language].howItWorksTitle}</h2>
          <p>{content[language].howItWorksText}</p>
          <ul className="key-components-list">
            {content[language].keyComponents.map((component, index) => (
              <li key={index}>{component}</li>
            ))}
          </ul>
          <p>{content[language].howItWorksConclusion}</p>
        </section>

        <section className="historical-section">
          <h2>{content[language].historicalTitle}</h2>
          <ul className="historical-list">
            {content[language].historicalPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="connection-section">
          <h2>{content[language].connectionTitle}</h2>
          <ul className="connection-list">
            {content[language].connectionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="key-factors-section">
          <h2>{content[language].keyFactorsTitle}</h2>
          <div className="factors-table">
            <div className="table-header">
              <div className="table-cell">Factor</div>
              <div className="table-cell">Influence</div>
            </div>
            {content[language].keyFactorsTable.map((row, index) => (
              <div className="table-row" key={index}>
                <div className="table-cell">{row.factor}</div>
                <div className="table-cell">{row.influence}</div>
              </div>
            ))}
          </div>
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

        <div className="cta-section">
          <button className="cta-button">{content[language].ctaButton}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Carreroverview;