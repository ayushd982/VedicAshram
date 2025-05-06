import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import correctionImage from '../../assets/Correction.jpg';
import './Vastucorrection.css';

const Vastucorrection = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      mainHeading: "Vastu Correction: Harmonize Without Reconstruction",
      subHeading: "Transform your space with non-invasive remedies and practical adjustments",
      introduction: "Vastu Correction offers solutions to harmonize your living or working space without major structural changes. Our approach focuses on practical, cost-effective remedies that neutralize negative energies and enhance positive vibrations in your property. Whether you're facing specific challenges or simply want to optimize your environment, our Vastu correction services can help restore balance and harmony.",
      challengesTitle: "Common Vastu Challenges",
      challengesList: [
        "Persistent financial difficulties despite hard work",
        "Recurring health issues among family members",
        "Relationship conflicts and communication problems",
        "Sleep disturbances and mental stress",
        "Career obstacles and professional setbacks",
        "Feeling of heaviness or negativity in specific areas"
      ],
      approachTitle: "Our Non-Invasive Approach",
      approach: "We understand that major structural changes are often impractical or impossible. Our Vastu correction methodology focuses on remedies that work within your existing structure. Through careful analysis of your space's energy patterns, we identify imbalances and recommend targeted interventions that require minimal disruption to your daily life.",
      remediesTitle: "Effective Vastu Remedies",
      remediesList: [
        "Strategic placement of elements (fire, water, earth, air, space)",
        "Color corrections to balance elemental energies",
        "Proper positioning of furniture and appliances",
        "Use of Vastu yantra and sacred symbols",
        "Sound therapy and mantras for energy purification",
        "Light adjustments to enhance positive vibrations",
        "Plant placement for energy harmonization"
      ],
      processTitle: "Our Correction Process",
      processList: [
        "Comprehensive Vastu assessment of your property",
        "Identification of specific Vastu doshas (defects)",
        "Customized correction plan based on your priorities",
        "Implementation guidance for recommended remedies",
        "Follow-up consultation to evaluate results"
      ],
      ctaButton: "Book a Vastu Correction Consultation"
    },
    hindi: {
      mainHeading: "वास्तु सुधार: पुनर्निर्माण के बिना सामंजस्य स्थापित करें",
      subHeading: "गैर-आक्रामक उपायों और व्यावहारिक समायोजन के साथ अपने स्थान को बदलें",
      introduction: "वास्तु सुधार आपके रहने या काम करने के स्थान को बड़े संरचनात्मक परिवर्तनों के बिना सामंजस्यपूर्ण बनाने के लिए समाधान प्रदान करता है। हमारा दृष्टिकोण व्यावहारिक, किफायती उपायों पर केंद्रित है जो नकारात्मक ऊर्जाओं को निष्प्रभावित करते हैं और आपकी संपत्ति में सकारात्मक कंपन बढ़ाते हैं। चाहे आप विशिष्ट चुनौतियों का सामना कर रहे हों या बस अपने वातावरण को अनुकूलित करना चाहते हों, हमारी वास्तु सुधार सेवाएं संतुलन और सद्भाव को बहाल करने में मदद कर सकती हैं।",
      challengesTitle: "सामान्य वास्तु चुनौतियां",
      challengesList: [
        "कड़ी मेहनत के बावजूद लगातार वित्तीय कठिनाइयां",
        "परिवार के सदस्यों के बीच बार-बार होने वाली स्वास्थ्य समस्याएं",
        "रिश्तों में संघर्ष और संचार समस्याएं",
        "नींद में गड़बड़ी और मानसिक तनाव",
        "करियर में बाधाएं और पेशेवर झटके",
        "विशिष्ट क्षेत्रों में भारीपन या नकारात्मकता की अनुभूति"
      ],
      approachTitle: "हमारा गैर-आक्रामक दृष्टिकोण",
      approach: "हम समझते हैं कि बड़े संरचनात्मक परिवर्तन अक्सर अव्यावहारिक या असंभव होते हैं। हमारी वास्तु सुधार पद्धति ऐसे उपायों पर केंद्रित है जो आपकी मौजूदा संरचना के भीतर काम करते हैं। आपके स्थान के ऊर्जा पैटर्न के सावधानीपूर्वक विश्लेषण के माध्यम से, हम असंतुलन की पहचान करते हैं और लक्षित हस्तक्षेप की सिफारिश करते हैं जिनके लिए आपके दैनिक जीवन में न्यूनतम व्यवधान की आवश्यकता होती है।",
      remediesTitle: "प्रभावी वास्तु उपाय",
      remediesList: [
        "तत्वों का रणनीतिक स्थापन (अग्नि, जल, पृथ्वी, वायु, आकाश)",
        "तत्व ऊर्जाओं को संतुलित करने के लिए रंग सुधार",
        "फर्नीचर और उपकरणों की उचित स्थिति",
        "वास्तु यंत्र और पवित्र प्रतीकों का उपयोग",
        "ऊर्जा शुद्धिकरण के लिए ध्वनि चिकित्सा और मंत्र",
        "सकारात्मक कंपन बढ़ाने के लिए प्रकाश समायोजन",
        "ऊर्जा सामंजस्य के लिए पौधों का स्थापन"
      ],
      processTitle: "हमारी सुधार प्रक्रिया",
      processList: [
        "आपकी संपत्ति का व्यापक वास्तु मूल्यांकन",
        "विशिष्ट वास्तु दोषों की पहचान",
        "आपकी प्राथमिकताओं के आधार पर अनुकूलित सुधार योजना",
        "अनुशंसित उपायों के लिए कार्यान्वयन मार्गदर्शन",
        "परिणामों का मूल्यांकन करने के लिए फॉलो-अप परामर्श"
      ],
      ctaButton: "वास्तु सुधार परामर्श बुक करें"
    }
  };

  return (
    <div className="vastu-correction-container">
      <div className="background-image" style={{ backgroundImage: `url(${correctionImage})` }}></div>
      <Navbar />
      <div className="vastu-correction-content">
        <header className="main-header">
          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="intro-section">
          <p className="intro-text">{content[language].introduction}</p>
        </section>

        <section className="challenges-section">
          <h2>{content[language].challengesTitle}</h2>
          <ul className="challenges-list">
            {content[language].challengesList.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </section>

        <section className="approach-section">
          <h2>{content[language].approachTitle}</h2>
          <p>{content[language].approach}</p>
        </section>

        <section className="remedies-section">
          <h2>{content[language].remediesTitle}</h2>
          <ul className="remedies-list">
            {content[language].remediesList.map((remedy, index) => (
              <li key={index}>{remedy}</li>
            ))}
          </ul>
        </section>

        <section className="process-section">
          <h2>{content[language].processTitle}</h2>
          <ul className="process-list">
            {content[language].processList.map((process, index) => (
              <li key={index}>{process}</li>
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

export default Vastucorrection;