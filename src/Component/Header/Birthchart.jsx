import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './Birthchart.css';

const Birthchart = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    english: {
      pageTitle: "Janam Kundli: Your Cosmic Blueprint",
      mainHeading: "Janam Kundli (Birth Chart): The Blueprint of Your Life",
      subHeading: "Explore your life path, karmic patterns, and future through your personalized Vedic birth chart.",
      mainContent: "A Janam Kundli, or birth chart, is a map of the heavens at the exact moment you were born. It reveals the planetary positions that shape your personality, life events, strengths, and challenges. It's the foundation for all Vedic astrology predictions.",
      whatYouGetTitle: "What you'll get:",
      whatYouGetList: [
        "Complete Lagna Kundli (Ascendant Chart)",
        "Planetary Placements (Navgraha) in 12 houses",
        "Dasha Periods (Mahadasha/Antardasha)",
        "Yoga formations (e.g., Gajakesari, Rajyoga)",
        "House-wise predictions for health, career, relationships, education, etc.",
        "Doshas (if any) like Manglik, Pitra, Kaal Sarp, and remedies",
        "Year-wise Prediction (Varshphal)"
      ],
      addon: "Add-on: Matching Horoscope, Kundli Milan for marriage",
      ctaButton: "Get Your Janam Kundli Analysis Now"
    },
    hindi: {
      pageTitle: "जन्म कुंडली: आपका ब्रह्मांडीय ब्लूप्रिंट",
      mainHeading: "जन्म कुंडली: आपके जीवन का ब्लूप्रिंट",
      subHeading: "अपने व्यक्तिगत वैदिक जन्म चार्ट के माध्यम से अपने जीवन पथ, कार्मिक पैटर्न और भविष्य का पता लगाएं।",
      mainContent: "जन्म कुंडली, या जन्म चार्ट, आपके जन्म के सटीक क्षण पर आकाश का एक मानचित्र है। यह ग्रहों की स्थिति को प्रकट करता है जो आपके व्यक्तित्व, जीवन की घटनाओं, ताकतों और चुनौतियों को आकार देता है। यह सभी वैदिक ज्योतिष भविष्यवाणियों की नींव है।",
      whatYouGetTitle: "आप क्या प्राप्त करेंगे:",
      whatYouGetList: [
        "पूर्ण लग्न कुंडली (अस्सेंडेंट चार्ट)",
        "12 भावों में ग्रह स्थिति (नवग्रह)",
        "दशा अवधि (महादशा/अंतर्दशा)",
        "योग निर्माण (जैसे, गजकेसरी, राजयोग)",
        "स्वास्थ्य, करियर, रिश्ते, शिक्षा आदि के लिए भाव-वार भविष्यवाणियां",
        "दोष (यदि कोई हो) जैसे मांगलिक, पितृ, काल सर्प, और उपाय",
        "वर्ष-वार भविष्यवाणी (वर्षफल)"
      ],
      addon: "ऐड-ऑन: विवाह के लिए मैचिंग होरोस्कोप, कुंडली मिलान",
      ctaButton: "अभी अपना जन्म कुंडली विश्लेषण प्राप्त करें"
    }
  };

  return (
    <div className="birthchart-container">
      <Navbar />
      <div className="birthchart-content">

        <header className="main-header">
          <h1 className="page-title">{content[language].pageTitle}</h1>
          <h2 className="main-heading">{content[language].mainHeading}</h2>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="content-section">
          <p className="main-content">{content[language].mainContent}</p>

          <div className="what-you-get-section">
            <h3>{content[language].whatYouGetTitle}</h3>
            <ul className="what-you-get-list">
              {content[language].whatYouGetList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="addon-text">{content[language].addon}</p>
        </section>

        <div className="cta-section">
          <button className="cta-button">{content[language].ctaButton}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Birthchart;