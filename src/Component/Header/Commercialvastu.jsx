import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import commercialImage from '../../assets/Commercial.jpg';
import './Commercialvastu.css';

const Commercialvastu = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      mainHeading: "Commercial Vastu: Optimize Your Business Space",
      subHeading: "Enhance productivity, prosperity, and success through ancient architectural wisdom",
      introduction: "The physical environment of your business directly impacts productivity, employee satisfaction, and ultimately, your bottom line. Commercial Vastu applies ancient architectural principles to modern business spaces, creating environments that attract prosperity, enhance efficiency, and support growth. Whether you're setting up a new office, retail store, factory, or renovating an existing space, Vastu principles can give you a competitive edge.",
      importanceTitle: "Why Commercial Vastu Matters",
      importance: "In today's competitive business landscape, every advantage counts. Commercial Vastu creates a harmonious energy flow that can improve decision-making, enhance team dynamics, attract customers, and create a positive impression on clients and partners. By aligning your business space with cosmic energies, you create an environment that supports your business goals and minimizes obstacles to success.",
      businessTypesTitle: "Vastu for Different Business Types",
      businessTypesList: [
        "Office Spaces: Enhancing productivity, creativity, and team harmony",
        "Retail Stores: Attracting customers and increasing sales",
        "Factories & Warehouses: Optimizing workflow and safety",
        "Hotels & Restaurants: Creating welcoming environments that encourage return visits",
        "Educational Institutions: Supporting learning and knowledge retention",
        "Healthcare Facilities: Promoting healing and well-being"
      ],
      keyAreasTitle: "Key Areas of Focus",
      keyAreasList: [
        "Main Entrance: The gateway for prosperity and opportunities",
        "Reception Area: Creating positive first impressions",
        "Executive Cabins: Positioning for authority and decision-making",
        "Meeting Rooms: Facilitating productive discussions",
        "Workstations: Optimizing employee productivity and satisfaction",
        "Cash Counter/Treasury: Enhancing financial prosperity",
        "Storage Areas: Proper organization of resources"
      ],
      benefitsTitle: "Benefits of Vastu-Compliant Business Spaces",
      benefitsList: [
        "Increased revenue and profitability",
        "Enhanced employee productivity and reduced absenteeism",
        "Improved client relationships and business reputation",
        "Better decision-making and reduced conflicts",
        "Stronger team cohesion and communication",
        "Sustainable business growth and stability"
      ],
      ctaButton: "Book a Commercial Vastu Consultation"
    },
    hindi: {
      mainHeading: "वाणिज्यिक वास्तु: अपने व्यापार स्थान को अनुकूलित करें",
      subHeading: "प्राचीन वास्तुकला ज्ञान के माध्यम से उत्पादकता, समृद्धि और सफलता बढ़ाएं",
      introduction: "आपके व्यवसाय का भौतिक वातावरण सीधे उत्पादकता, कर्मचारी संतुष्टि और अंततः आपके मुनाफे को प्रभावित करता है। वाणिज्यिक वास्तु प्राचीन वास्तुकला सिद्धांतों को आधुनिक व्यापार स्थानों पर लागू करता है, ऐसे वातावरण बनाता है जो समृद्धि को आकर्षित करते हैं, दक्षता बढ़ाते हैं और विकास का समर्थन करते हैं। चाहे आप एक नया कार्यालय, रिटेल स्टोर, फैक्ट्री स्थापित कर रहे हों या मौजूदा स्थान का नवीनीकरण कर रहे हों, वास्तु सिद्धांत आपको प्रतिस्पर्धात्मक बढ़त दे सकते हैं।",
      importanceTitle: "वाणिज्यिक वास्तु क्यों महत्वपूर्ण है",
      importance: "आज के प्रतिस्पर्धी व्यापार परिदृश्य में, हर लाभ मायने रखता है। वाणिज्यिक वास्तु एक सामंजस्यपूर्ण ऊर्जा प्रवाह बनाता है जो निर्णय लेने में सुधार कर सकता है, टीम गतिशीलता को बढ़ा सकता है, ग्राहकों को आकर्षित कर सकता है, और ग्राहकों और भागीदारों पर एक सकारात्मक छाप छोड़ सकता है। अपने व्यापार स्थान को ब्रह्मांडीय ऊर्जाओं के साथ संरेखित करके, आप एक ऐसा वातावरण बनाते हैं जो आपके व्यापार लक्ष्यों का समर्थन करता है और सफलता में बाधाओं को कम करता है।",
      businessTypesTitle: "विभिन्न व्यापार प्रकारों के लिए वास्तु",
      businessTypesList: [
        "कार्यालय स्थान: उत्पादकता, रचनात्मकता और टीम सद्भाव को बढ़ाना",
        "रिटेल स्टोर: ग्राहकों को आकर्षित करना और बिक्री बढ़ाना",
        "फैक्ट्रियां और गोदाम: कार्यप्रवाह और सुरक्षा का अनुकूलन",
        "होटल और रेस्तरां: स्वागत योग्य वातावरण बनाना जो वापसी यात्राओं को प्रोत्साहित करता है",
        "शैक्षिक संस्थान: सीखने और ज्ञान प्रतिधारण का समर्थन करना",
        "स्वास्थ्य सुविधाएं: उपचार और कल्याण को बढ़ावा देना"
      ],
      keyAreasTitle: "ध्यान देने के प्रमुख क्षेत्र",
      keyAreasList: [
        "मुख्य प्रवेश द्वार: समृद्धि और अवसरों का प्रवेश द्वार",
        "स्वागत क्षेत्र: सकारात्मक पहली छाप बनाना",
        "कार्यकारी केबिन: अधिकार और निर्णय लेने के लिए स्थिति",
        "बैठक कक्ष: उत्पादक चर्चाओं की सुविधा",
        "कार्यस्थल: कर्मचारी उत्पादकता और संतुष्टि का अनुकूलन",
        "कैश काउंटर/कोषागार: वित्तीय समृद्धि बढ़ाना",
        "भंडारण क्षेत्र: संसाधनों का उचित संगठन"
      ],
      benefitsTitle: "वास्तु-अनुपालन वाले व्यापार स्थानों के लाभ",
      benefitsList: [
        "बढ़ा हुआ राजस्व और लाभप्रदता",
        "बढ़ी हुई कर्मचारी उत्पादकता और कम अनुपस्थिति",
        "बेहतर ग्राहक संबंध और व्यापार प्रतिष्ठा",
        "बेहतर निर्णय लेना और कम संघर्ष",
        "मजबूत टीम एकजुटता और संचार",
        "स्थायी व्यापार विकास और स्थिरता"
      ],
      ctaButton: "वाणिज्यिक वास्तु परामर्श बुक करें"
    }
  };

  return (
    <div className="commercial-vastu-container">
      <div className="background-image" style={{ backgroundImage: `url(${commercialImage})` }}></div>
      <Navbar />
      <div className="commercial-vastu-content">
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

        <section className="business-types-section">
          <h2>{content[language].businessTypesTitle}</h2>
          <ul className="business-types-list">
            {content[language].businessTypesList.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
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

        <div className="cta-section">
          <button className="cta-button">{content[language].ctaButton}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Commercialvastu;