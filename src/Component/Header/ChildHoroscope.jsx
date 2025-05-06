import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import childImage from '../../assets/Child.jpg';
import './ChildHoroscope.css';

const ChildHoroscope = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    english: {
      mainHeading: "Child Horoscope Reading: Nurturing Potential from the Stars",
      subHeading: "Unveil your child's innate strengths, talents, and future path through personalized Vedic insights.",
      mainContent: "Every child is born with a unique karmic code. Child Horoscope Reading helps parents understand their child's personality, emotional needs, academic tendencies, and spiritual inclinations through Vedic astrology. This early guidance can support better parenting decisions and help unlock the child's true potential.",
      whatWeAnalyzeTitle: "What We Analyze:",
      whatWeAnalyzeList: [
        "Child's Lagna (Ascendant) and Moon sign",
        "Education & Intelligence House (2nd & 5th)",
        "Speech, behavior, and learning styles",
        "Health and immunity patterns",
        "Spiritual and creative inclinations",
        "Future profession indicators"
      ],
      benefitsTitle: "Benefits:",
      benefitsList: [
        "Know suitable learning methods & strengths",
        "Predict and prevent health vulnerabilities",
        "Understand behavioral issues and remedies",
        "Choose favorable name letters (Namkaran)",
        "Plan right schooling or career direction"
      ],
      ctaButton: "Get Child Horoscope Reading"
    },
    hindi: {
      mainHeading: "बाल ज्योतिष रीडिंग: तारों से क्षमता का पोषण",
      subHeading: "व्यक्तिगत वैदिक अंतर्दृष्टि के माध्यम से अपने बच्चे की जन्मजात ताकत, प्रतिभा और भविष्य के मार्ग का अनावरण करें।",
      mainContent: "हर बच्चा एक अनूठे कार्मिक कोड के साथ पैदा होता है। बाल ज्योतिष रीडिंग माता-पिता को वैदिक ज्योतिष के माध्यम से अपने बच्चे के व्यक्तित्व, भावनात्मक जरूरतों, शैक्षिक प्रवृत्तियों और आध्यात्मिक झुकावों को समझने में मदद करता है। यह प्रारंभिक मार्गदर्शन बेहतर पेरेंटिंग निर्णयों का समर्थन कर सकता है और बच्चे की वास्तविक क्षमता को अनलॉक करने में मदद कर सकता है।",
      whatWeAnalyzeTitle: "हम क्या विश्लेषण करते हैं:",
      whatWeAnalyzeList: [
        "बच्चे का लग्न (अस्सेंडेंट) और चंद्र राशि",
        "शिक्षा और बुद्धि भाव (2रा और 5वां)",
        "वाणी, व्यवहार और सीखने की शैली",
        "स्वास्थ्य और प्रतिरक्षा पैटर्न",
        "आध्यात्मिक और रचनात्मक झुकाव",
        "भविष्य के पेशे के संकेतक"
      ],
      benefitsTitle: "लाभ:",
      benefitsList: [
        "उपयुक्त सीखने के तरीके और ताकत जानें",
        "स्वास्थ्य कमजोरियों की भविष्यवाणी करें और रोकें",
        "व्यवहार संबंधी मुद्दों और उपायों को समझें",
        "अनुकूल नाम अक्षर (नामकरण) चुनें",
        "सही स्कूली शिक्षा या करियर दिशा की योजना बनाएं"
      ],
      ctaButton: "बाल ज्योतिष रीडिंग प्राप्त करें"
    }
  };

  return (
    <div className="child-horoscope-container">
      <div className="background-image" style={{ backgroundImage: `url(${childImage})` }}></div>
      <Navbar />
      <div className="child-horoscope-content">


        <header className="main-header">
          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="content-section">
          <p className="main-content">{content[language].mainContent}</p>

          <div className="analysis-section">
            <h3>{content[language].whatWeAnalyzeTitle}</h3>
            <ul className="analysis-list">
              {content[language].whatWeAnalyzeList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="benefits-section">
            <h3>{content[language].benefitsTitle}</h3>
            <ul className="benefits-list">
              {content[language].benefitsList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="cta-section">
          <button className="cta-button">{content[language].ctaButton}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChildHoroscope;