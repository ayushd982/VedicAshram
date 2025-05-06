import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import vastuImage from '../../assets/Vastu.jpg';
import './Vastushastra.css';

const Vastushastra = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      mainHeading: "Vastu Shastra: Ancient Science of Architecture & Harmony",
      subHeading: "Align your spaces with cosmic energies for prosperity, health, and happiness",
      introduction: "Vastu Shastra is a traditional Hindu system of architecture originating in India. Literally translated as the 'science of architecture,' it integrates architecture with nature, the relative functions of various parts of the structure, and ancient beliefs utilizing geometric patterns, symmetry, and directional alignments.",
      whatIsVastuTitle: "What is Vastu Shastra?",
      whatIsVastu: "Vastu Shastra combines the five elements of nature—earth, water, air, fire, and space—to create harmony between the built environment and the natural world. It's based on the principle that the earth has magnetic fields and energy flows that affect our lives. By aligning our living and working spaces with these cosmic energies, we can enhance prosperity, health, and overall well-being.",
      benefitsTitle: "Benefits of Vastu Compliance",
      benefitsList: [
        "Enhanced positive energy flow throughout the space",
        "Improved mental peace and reduced stress",
        "Better health and well-being for occupants",
        "Increased prosperity and financial stability",
        "Harmonious relationships among family members or colleagues",
        "Protection from negative energies and influences"
      ],
      principlesTitle: "Key Principles of Vastu Shastra",
      principlesList: [
        "Directional Alignment: Each direction is governed by specific deities and elements",
        "Proper Placement: Strategic positioning of rooms, doors, windows, and furniture",
        "Balance of Five Elements: Harmonizing earth, water, fire, air, and space",
        "Center (Brahmasthan): Keeping the center of any structure open and uncluttered",
        "Geometric Harmony: Using proper proportions and measurements"
      ],
      servicesTitle: "Our Vastu Services",
      servicesList: [
        "Residential Vastu Consultation",
        "Commercial Vastu Analysis",
        "Vastu Corrections and Remedies",
        "Pre-construction Vastu Planning",
        "Plot and Land Evaluation"
      ],
      ctaButton: "Book a Vastu Consultation"
    },
    hindi: {
      mainHeading: "वास्तु शास्त्र: स्थापत्य और सद्भाव का प्राचीन विज्ञान",
      subHeading: "समृद्धि, स्वास्थ्य और खुशी के लिए अपने स्थानों को ब्रह्मांडीय ऊर्जाओं के साथ संरेखित करें",
      introduction: "वास्तु शास्त्र भारत में उत्पन्न होने वाली वास्तुकला की एक पारंपरिक हिंदू प्रणाली है। शाब्दिक रूप से 'वास्तुकला का विज्ञान' के रूप में अनुवादित, यह प्रकृति के साथ वास्तुकला, संरचना के विभिन्न भागों के सापेक्ष कार्यों और ज्यामितीय पैटर्न, सममिति और दिशात्मक संरेखण का उपयोग करके प्राचीन मान्यताओं को एकीकृत करता है।",
      whatIsVastuTitle: "वास्तु शास्त्र क्या है?",
      whatIsVastu: "वास्तु शास्त्र निर्मित पर्यावरण और प्राकृतिक दुनिया के बीच सद्भाव बनाने के लिए प्रकृति के पांच तत्वों—पृथ्वी, जल, वायु, अग्नि और आकाश—को जोड़ता है। यह इस सिद्धांत पर आधारित है कि पृथ्वी में चुंबकीय क्षेत्र और ऊर्जा प्रवाह हैं जो हमारे जीवन को प्रभावित करते हैं। अपने रहने और काम करने के स्थानों को इन ब्रह्मांडीय ऊर्जाओं के साथ संरेखित करके, हम समृद्धि, स्वास्थ्य और समग्र कल्याण को बढ़ा सकते हैं।",
      benefitsTitle: "वास्तु अनुपालन के लाभ",
      benefitsList: [
        "पूरे स्थान में सकारात्मक ऊर्जा प्रवाह में वृद्धि",
        "बेहतर मानसिक शांति और तनाव में कमी",
        "निवासियों के लिए बेहतर स्वास्थ्य और कल्याण",
        "बढ़ी हुई समृद्धि और वित्तीय स्थिरता",
        "परिवार के सदस्यों या सहकर्मियों के बीच सामंजस्यपूर्ण संबंध",
        "नकारात्मक ऊर्जाओं और प्रभावों से सुरक्षा"
      ],
      principlesTitle: "वास्तु शास्त्र के प्रमुख सिद्धांत",
      principlesList: [
        "दिशात्मक संरेखण: प्रत्येक दिशा विशिष्ट देवताओं और तत्वों द्वारा शासित होती है",
        "उचित स्थापना: कमरों, दरवाजों, खिड़कियों और फर्नीचर की रणनीतिक स्थिति",
        "पांच तत्वों का संतुलन: पृथ्वी, जल, अग्नि, वायु और आकाश का सामंजस्य",
        "केंद्र (ब्रह्मस्थान): किसी भी संरचना के केंद्र को खुला और अव्यवस्थित रखना",
        "ज्यामितीय सद्भाव: उचित अनुपात और माप का उपयोग करना"
      ],
      servicesTitle: "हमारी वास्तु सेवाएं",
      servicesList: [
        "आवासीय वास्तु परामर्श",
        "वाणिज्यिक वास्तु विश्लेषण",
        "वास्तु सुधार और उपाय",
        "निर्माण-पूर्व वास्तु योजना",
        "प्लॉट और भूमि मूल्यांकन"
      ],
      ctaButton: "वास्तु परामर्श बुक करें"
    }
  };

  return (
    <div className="vastu-shastra-container">
      <div className="background-image" style={{ backgroundImage: `url(${vastuImage})` }}></div>
      <Navbar />
      <div className="vastu-shastra-content">
        <header className="main-header">
          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="intro-section">
          <p className="intro-text">{content[language].introduction}</p>
        </section>

        <section className="what-is-section">
          <h2>{content[language].whatIsVastuTitle}</h2>
          <p>{content[language].whatIsVastu}</p>
        </section>

        <section className="benefits-section">
          <h2>{content[language].benefitsTitle}</h2>
          <ul className="benefits-list">
            {content[language].benefitsList.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section className="principles-section">
          <h2>{content[language].principlesTitle}</h2>
          <ul className="principles-list">
            {content[language].principlesList.map((principle, index) => (
              <li key={index}>{principle}</li>
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

export default Vastushastra;