import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import loveImage from '../../assets/Love.jpg';
import './Lovemarriage.css';

const Lovemarriage = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    english: {
      mainHeading: "Love & Marriage Horoscope: Aligning Hearts with the Cosmos",
      subHeading: "Know your romantic destiny and unlock compatibility through sacred astrological guidance.",
      mainContent: "In matters of love, astrology reveals karmic bonds, emotional alignment, and long-term compatibility. A Love & Marriage Horoscope offers deep insights into your relationship journey, ideal partner traits, marriage timing, and challenges in love life.",
      whatYouDiscoverTitle: "What You'll Discover:",
      whatYouDiscoverList: [
        "Nature of your 7th house (marriage/relationships)",
        "Venus, Mars, and Moon alignment for romance",
        "Ideal partner's qualities & emotional compatibility",
        "Love marriage vs arranged marriage possibility",
        "Marriage timing (favorable yogas and dashas)",
        "Remedies for delay or heartbreaks",
        "Kundli Milan & Mangal Dosh check"
      ],
      bestForTitle: "Best For:",
      bestForList: [
        "Singles seeking life partners",
        "Those in relationships or facing delays",
        "Newlyweds wanting harmony",
        "Love-marriage guidance seekers"
      ],
      ctaButton: "Get Love & Marriage Horoscope"
    },
    hindi: {
      mainHeading: "प्रेम और विवाह राशिफल: ब्रह्मांड के साथ दिलों का संरेखण",
      subHeading: "पवित्र ज्योतिषीय मार्गदर्शन के माध्यम से अपनी रोमांटिक नियति जानें और संगतता को अनलॉक करें।",
      mainContent: "प्रेम के मामलों में, ज्योतिष कार्मिक बंधन, भावनात्मक संरेखण और दीर्घकालिक संगतता को प्रकट करता है। प्रेम और विवाह राशिफल आपकी रिश्ते की यात्रा, आदर्श साथी के गुण, विवाह का समय और प्रेम जीवन में चुनौतियों के बारे में गहरी अंतर्दृष्टि प्रदान करता है।",
      whatYouDiscoverTitle: "आप क्या जानेंगे:",
      whatYouDiscoverList: [
        "आपके 7वें भाव (विवाह/संबंध) की प्रकृति",
        "रोमांस के लिए शुक्र, मंगल और चंद्रमा का संरेखण",
        "आदर्श साथी के गुण और भावनात्मक संगतता",
        "प्रेम विवाह बनाम व्यवस्थित विवाह की संभावना",
        "विवाह का समय (अनुकूल योग और दशाएं)",
        "देरी या दिल टूटने के लिए उपाय",
        "कुंडली मिलान और मंगल दोष जांच"
      ],
      bestForTitle: "इनके लिए सर्वोत्तम:",
      bestForList: [
        "जीवन साथी खोजने वाले एकल व्यक्ति",
        "रिश्ते में या देरी का सामना करने वाले",
        "सद्भाव चाहने वाले नवविवाहित",
        "प्रेम-विवाह मार्गदर्शन चाहने वाले"
      ],
      ctaButton: "प्रेम और विवाह राशिफल प्राप्त करें"
    }
  };

  return (
    <div className="love-marriage-container">
      <div className="background-image" style={{ backgroundImage: `url(${loveImage})` }}></div>
      <Navbar />
      <div className="love-marriage-content">


        <header className="main-header">
          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="content-section">
          <p className="main-content">{content[language].mainContent}</p>

          <div className="discover-section">
            <h3>{content[language].whatYouDiscoverTitle}</h3>
            <ul className="discover-list">
              {content[language].whatYouDiscoverList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="best-for-section">
            <h3>{content[language].bestForTitle}</h3>
            <ul className="best-for-list">
              {content[language].bestForList.map((item, index) => (
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

export default Lovemarriage;