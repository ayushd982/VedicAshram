import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import nameImage from '../../assets/Name.jpg';
import './Namechange.css';

const Namechange = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      mainHeading: "Name Change by Numerology",
      subHeading: "Harmonize your name's vibration with your life path for success and fulfillment",
      introduction: "Name Change by Numerology is the process of altering or slightly modifying your name spelling to bring it into vibrational harmony with your date of birth and life path number. It is based on the principle that every letter carries a unique frequency, and your full name holds a numerological signature that deeply influences your luck, career, relationships, and health.",
      howItWorksTitle: "How Does It Work?",
      howItWorksList: [
        "A numerologist assigns numerical values to each letter using systems like Chaldean or Pythagorean numerology.",
        "Your current name is analyzed alongside your birth date.",
        "If there's a mismatch or conflicting vibration, you may experience repeated failures, delays in personal or professional life, health issues, or relationship blocks.",
        "A corrected name is proposed by changing spellings (e.g., Rahul → Raahul), adding/removing letters or initials, or ensuring the name number supports your life path or destiny number."
      ],
      whyDoItTitle: "Why Change Your Name?",
      whyDoItText: "Aligning your name with your karmic vibration can remove energy blocks caused by name-number conflicts and enhance visibility, confidence, and personal magnetism. Name changes are often used by business owners for brand naming, celebrities for stage names, and individuals facing repeated life obstacles.",
      benefitsTitle: "Benefits of Numerological Name Correction",
      benefitsList: [
        "Improved career prospects and financial stability",
        "Enhanced relationships and social connections",
        "Better health and mental well-being",
        "Increased confidence and self-expression",
        "Removal of persistent obstacles and negative patterns",
        "Alignment with your true life purpose and potential"
      ],
      processTitle: "Our Name Change Process",
      processList: [
        "Comprehensive birth chart and name analysis",
        "Identification of numerological conflicts and imbalances",
        "Customized name suggestions that maintain your identity while improving vibration",
        "Guidance on legal name change procedures (if desired)",
        "Implementation timeline based on auspicious dates",
        "Follow-up support to ensure positive results"
      ],
      successStoriesTitle: "Success Stories",
      successStoriesList: [
        "A struggling entrepreneur who saw business growth within months after a minor spelling change",
        "A job seeker who received multiple offers after adjusting their professional name",
        "A couple who resolved relationship conflicts by harmonizing their name vibrations",
        "An artist who gained recognition after adopting a numerologically aligned stage name"
      ],
      ctaButton: "Book a Name Change Consultation"
    },
    hindi: {
      mainHeading: "अंकशास्त्र द्वारा नाम परिवर्तन",
      subHeading: "सफलता और पूर्णता के लिए अपने नाम के कंपन को अपने जीवन पथ के साथ सामंजस्य बनाएं",
      introduction: "अंकशास्त्र द्वारा नाम परिवर्तन आपके नाम की वर्तनी को बदलने या थोड़ा संशोधित करने की प्रक्रिया है ताकि इसे आपकी जन्म तिथि और जीवन पथ संख्या के साथ कंपन सामंजस्य में लाया जा सके। यह इस सिद्धांत पर आधारित है कि हर अक्षर एक अनूठी आवृत्ति रखता है, और आपका पूरा नाम एक अंकीय हस्ताक्षर रखता है जो आपकी किस्मत, करियर, रिश्तों और स्वास्थ्य को गहराई से प्रभावित करता है।",
      howItWorksTitle: "यह कैसे काम करता है?",
      howItWorksList: [
        "एक अंकज्योतिषी कैल्डियन या पाइथागोरस अंकशास्त्र जैसी प्रणालियों का उपयोग करके प्रत्येक अक्षर को संख्यात्मक मान देता है।",
        "आपके वर्तमान नाम का विश्लेषण आपकी जन्म तिथि के साथ किया जाता है।",
        "यदि कोई बेमेल या विरोधी कंपन है, तो आप बार-बार विफलताओं, व्यक्तिगत या पेशेवर जीवन में देरी, स्वास्थ्य समस्याओं, या रिश्ते की बाधाओं का अनुभव कर सकते हैं।",
        "एक सही नाम वर्तनी बदलकर (जैसे, राहुल → राहुल), अक्षर या प्रारंभिक अक्षर जोड़कर/हटाकर, या यह सुनिश्चित करके कि नाम संख्या आपके जीवन पथ या नियति संख्या का समर्थन करती है, प्रस्तावित किया जाता है।"
      ],
      whyDoItTitle: "अपना नाम क्यों बदलें?",
      whyDoItText: "अपने नाम को अपने कार्मिक कंपन के साथ संरेखित करने से नाम-संख्या संघर्षों के कारण ऊर्जा अवरोधों को हटाया जा सकता है और दृश्यता, आत्मविश्वास और व्यक्तिगत आकर्षण को बढ़ाया जा सकता है। नाम परिवर्तन अक्सर ब्रांड नामकरण के लिए व्यापार मालिकों, स्टेज नामों के लिए सेलिब्रिटीज, और बार-बार जीवन की बाधाओं का सामना करने वाले व्यक्तियों द्वारा उपयोग किए जाते हैं।",
      benefitsTitle: "अंकशास्त्रीय नाम सुधार के लाभ",
      benefitsList: [
        "बेहतर करियर संभावनाएं और वित्तीय स्थिरता",
        "बढ़े हुए संबंध और सामाजिक संपर्क",
        "बेहतर स्वास्थ्य और मानसिक कल्याण",
        "बढ़ा हुआ आत्मविश्वास और आत्म-अभिव्यक्ति",
        "लगातार बाधाओं और नकारात्मक पैटर्न का निवारण",
        "आपके वास्तविक जीवन उद्देश्य और क्षमता के साथ संरेखण"
      ],
      processTitle: "हमारी नाम परिवर्तन प्रक्रिया",
      processList: [
        "व्यापक जन्म कुंडली और नाम विश्लेषण",
        "अंकशास्त्रीय संघर्षों और असंतुलन की पहचान",
        "अनुकूलित नाम सुझाव जो आपकी पहचान को बनाए रखते हुए कंपन में सुधार करते हैं",
        "कानूनी नाम परिवर्तन प्रक्रियाओं पर मार्गदर्शन (यदि वांछित हो)",
        "शुभ तिथियों के आधार पर कार्यान्वयन समयरेखा",
        "सकारात्मक परिणाम सुनिश्चित करने के लिए फॉलो-अप समर्थन"
      ],
      successStoriesTitle: "सफलता की कहानियां",
      successStoriesList: [
        "एक संघर्षरत उद्यमी जिसने मामूली वर्तनी परिवर्तन के बाद महीनों के भीतर व्यापार वृद्धि देखी",
        "एक नौकरी खोजने वाला जिसे अपने पेशेवर नाम को समायोजित करने के बाद कई प्रस्ताव मिले",
        "एक जोड़ा जिसने अपने नाम के कंपनों को सामंजस्य बनाकर रिश्ते के संघर्षों को हल किया",
        "एक कलाकार जिसने अंकशास्त्रीय रूप से संरेखित स्टेज नाम अपनाने के बाद मान्यता प्राप्त की"
      ],
      ctaButton: "नाम परिवर्तन परामर्श बुक करें"
    }
  };

  return (
    <div className="name-change-container">
      <div className="background-image" style={{ backgroundImage: `url(${nameImage})` }}></div>
      <Navbar />
      <div className="name-change-content">
        <header className="main-header">
          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="intro-section">
          <p className="intro-text">{content[language].introduction}</p>
        </section>

        <section className="how-it-works-section">
          <h2>{content[language].howItWorksTitle}</h2>
          <ul className="how-it-works-list">
            {content[language].howItWorksList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="why-do-it-section">
          <h2>{content[language].whyDoItTitle}</h2>
          <p>{content[language].whyDoItText}</p>
        </section>

        <section className="benefits-section">
          <h2>{content[language].benefitsTitle}</h2>
          <ul className="benefits-list">
            {content[language].benefitsList.map((benefit, index) => (
              <li key={index}>{benefit}</li>
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

        <section className="success-stories-section">
          <h2>{content[language].successStoriesTitle}</h2>
          <ul className="success-stories-list">
            {content[language].successStoriesList.map((story, index) => (
              <li key={index}>{story}</li>
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

export default Namechange;