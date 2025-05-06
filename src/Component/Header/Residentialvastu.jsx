import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import residentialImage from '../../assets/Resendital.jpg';
import './Residentialvastu.css';

const Residentialvastu = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      mainHeading: "Residential Vastu: Create a Harmonious Home",
      subHeading: "Transform your living space into a sanctuary of positive energy and prosperity",
      introduction: "Your home is more than just a structure—it's the foundation of your family's well-being and happiness. Residential Vastu applies ancient architectural principles to create living spaces that enhance positive energy flow, promote health, and attract prosperity. By aligning your home with cosmic energies, you can create a sanctuary that nurtures and protects your family.",
      importanceTitle: "Why Residential Vastu Matters",
      importance: "The design and layout of your home directly impact the energy flow, which in turn affects your family's health, relationships, prosperity, and overall well-being. Vastu-aligned homes create a harmonious environment that supports your goals and aspirations while minimizing obstacles and negative influences.",
      keyAreasTitle: "Key Areas of Focus",
      keyAreasList: [
        "Main Entrance: The gateway for energy to enter your home",
        "Kitchen: The source of nourishment and prosperity",
        "Bedroom: Space for rest, rejuvenation, and relationships",
        "Living Room: Center for family harmony and social connections",
        "Study/Work Area: Environment for focus and productivity",
        "Bathroom & Toilet: Proper placement to prevent energy contamination",
        "Puja Room: Sacred space for spiritual practices"
      ],
      benefitsTitle: "Benefits of Vastu-Compliant Homes",
      benefitsList: [
        "Enhanced family harmony and reduced conflicts",
        "Improved health and mental well-being",
        "Better sleep quality and energy levels",
        "Increased financial stability and prosperity",
        "Protection from negative energies",
        "Support for career growth and academic success",
        "Overall sense of peace and contentment"
      ],
      servicesTitle: "Our Residential Vastu Services",
      servicesList: [
        "Pre-construction Vastu planning and plot selection",
        "Comprehensive home Vastu analysis",
        "Room-by-room Vastu assessment",
        "Practical Vastu remedies and corrections",
        "Vastu consultation for renovations and extensions",
        "Energy balancing for existing homes"
      ],
      ctaButton: "Book a Residential Vastu Consultation"
    },
    hindi: {
      mainHeading: "आवासीय वास्तु: एक सामंजस्यपूर्ण घर बनाएं",
      subHeading: "अपने रहने की जगह को सकारात्मक ऊर्जा और समृद्धि के अभयारण्य में बदलें",
      introduction: "आपका घर सिर्फ एक संरचना से अधिक है—यह आपके परिवार के कल्याण और खुशी की नींव है। आवासीय वास्तु प्राचीन वास्तुकला सिद्धांतों को लागू करके ऐसे रहने वाले स्थान बनाता है जो सकारात्मक ऊर्जा प्रवाह को बढ़ाते हैं, स्वास्थ्य को बढ़ावा देते हैं, और समृद्धि को आकर्षित करते हैं। अपने घर को ब्रह्मांडीय ऊर्जाओं के साथ संरेखित करके, आप एक ऐसा अभयारण्य बना सकते हैं जो आपके परिवार का पोषण और रक्षा करता है।",
      importanceTitle: "आवासीय वास्तु क्यों महत्वपूर्ण है",
      importance: "आपके घर का डिजाइन और लेआउट सीधे ऊर्जा प्रवाह को प्रभावित करता है, जो बदले में आपके परिवार के स्वास्थ्य, रिश्तों, समृद्धि और समग्र कल्याण को प्रभावित करता है। वास्तु-संरेखित घर एक सामंजस्यपूर्ण वातावरण बनाते हैं जो बाधाओं और नकारात्मक प्रभावों को कम करते हुए आपके लक्ष्यों और आकांक्षाओं का समर्थन करता है।",
      keyAreasTitle: "ध्यान देने के प्रमुख क्षेत्र",
      keyAreasList: [
        "मुख्य प्रवेश द्वार: आपके घर में ऊर्जा प्रवेश का द्वार",
        "रसोई: पोषण और समृद्धि का स्रोत",
        "शयनकक्ष: आराम, कायाकल्प और रिश्तों के लिए जगह",
        "लिविंग रूम: पारिवारिक सद्भाव और सामाजिक संबंधों का केंद्र",
        "अध्ययन/कार्य क्षेत्र: फोकस और उत्पादकता के लिए वातावरण",
        "स्नानघर और शौचालय: ऊर्जा संदूषण को रोकने के लिए उचित स्थान",
        "पूजा कक्ष: आध्यात्मिक अभ्यास के लिए पवित्र स्थान"
      ],
      benefitsTitle: "वास्तु-अनुपालन वाले घरों के लाभ",
      benefitsList: [
        "बढ़ा हुआ पारिवारिक सद्भाव और कम संघर्ष",
        "बेहतर स्वास्थ्य और मानसिक कल्याण",
        "बेहतर नींद की गुणवत्ता और ऊर्जा स्तर",
        "बढ़ी हुई वित्तीय स्थिरता और समृद्धि",
        "नकारात्मक ऊर्जाओं से सुरक्षा",
        "करियर विकास और शैक्षिक सफलता के लिए समर्थन",
        "शांति और संतुष्टि की समग्र भावना"
      ],
      servicesTitle: "हमारी आवासीय वास्तु सेवाएं",
      servicesList: [
        "निर्माण-पूर्व वास्तु योजना और प्लॉट चयन",
        "व्यापक घर वास्तु विश्लेषण",
        "कमरे-दर-कमरे वास्तु मूल्यांकन",
        "व्यावहारिक वास्तु उपाय और सुधार",
        "नवीनीकरण और विस्तार के लिए वास्तु परामर्श",
        "मौजूदा घरों के लिए ऊर्जा संतुलन"
      ],
      ctaButton: "आवासीय वास्तु परामर्श बुक करें"
    }
  };

  return (
    <div className="residential-vastu-container">
      <div className="background-image" style={{ backgroundImage: `url(${residentialImage})` }}></div>
      <Navbar />
      <div className="residential-vastu-content">
        <header className="main-header">
          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="intro-section">
          <p className="intro-text">{content[language].introduction}</p>
        </section>

        <section className="importance-section">
          <h2>{content[language].importanceTitle}</h2>
          <p>{content[language].importance}</p>
        </section>

        <section className="key-areas-section">
          <h2>{content[language].keyAreasTitle}</h2>
          <ul className="key-areas-list">
            {content[language].keyAreasList.map((area, index) => (
              <li key={index}>{area}</li>
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

        <div className="cta-section">
          <button className="cta-button">{content[language].ctaButton}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Residentialvastu;