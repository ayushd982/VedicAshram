import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from '../../Component/Footer/Footer';
import './Numerology.css';
import { useLanguage } from '../../context/LanguageContext';

const Numerology = () => {
  const { language } = useLanguage();
  return (
    <div className="numerology-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', marginBottom: 0, paddingBottom: 0 }}>
      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with margin after navbar */}
      <div className="numerology-content" style={{ paddingBottom: 0, marginBottom: 0 }}>
        <div className="container numerology-container" style={{ marginBottom: 0, paddingBottom: 0 }}>
          <h1 className="main-heading"><i className="fas fa-calculator"></i>
            {language === 'hindi'
              ? 'अंक ज्योतिष: संख्याओं का विज्ञान और उनका प्रभाव'
              : 'Numerology: The Science of Numbers and Their Influence'}
          </h1>

          <p className="intro-paragraph">
            <i className="fas fa-star-of-life"></i>
            {language === 'hindi'
              ? 'अंक ज्योतिष एक प्राचीन अध्यात्मिक विज्ञान है जो संख्याओं के रहस्यमय महत्व और मानव जीवन पर उनके प्रभाव का अध्ययन करता है। यह इस विश्वास पर आधारित है कि संख्याओं में कंपन होते हैं और वे व्यक्ति के व्यक्तित्व, भाग्य और जीवन पथ को प्रभावित करते हैं। अंक ज्योतिष का उपयोग व्यक्तिगत विकास, रिश्तों की अनुकूलता, करियर विकल्पों और यहां तक कि व्यापारिक सफलता के लिए भी व्यापक रूप से किया जाता है।'
              : 'Numerology is an ancient metaphysical science that studies the mystical significance of numbers and their impact on human life. It is based on the belief that numbers have vibrations and influence a person\'s personality, destiny, and life path. Numerology is widely used for personal growth, relationship compatibility, career choices, and even business success.'}
          </p>

          <hr className="section-divider" />

          <h1 className="section-heading">
            {language === 'hindi' ? 'अंक ज्योतिष की मूल अवधारणाएँ' : 'Core Concepts of Numerology'}
          </h1>

          <div className="concept-section">
            <h2 className="concept-title">
              {language === 'hindi'
                ? '1. अंक ज्योतिष में संख्याओं का महत्व'
                : '1. The Importance of Numbers in Numerology'}
            </h2>
            <p className="concept-description">
              {language === 'hindi'
                ? 'अंक ज्योतिष संख्याओं (1 से 9) और मास्टर संख्याओं (11, 22, और 33) को अर्थ प्रदान करता है। प्रत्येक संख्या अद्वितीय विशेषताओं, ताकतों और कमजोरियों को धारण करती है।'
                : 'Numerology assigns meanings to numbers (1 to 9) and master numbers (11, 22, and 33). Each number carries unique characteristics, strengths, and weaknesses.'}
            </p>
          </div>

          <div className="concept-section">
            <h2 className="concept-title">
              {language === 'hindi'
                ? '2. अंक ज्योतिष प्रणालियों के विभिन्न प्रकार'
                : '2. Different Types of Numerology Systems'}
            </h2>
            <ul className="concept-list">
              <li>
                {language === 'hindi'
                  ? 'पाइथागोरस अंक ज्योतिष: सबसे व्यापक रूप से उपयोग की जाने वाली प्रणाली, ग्रीक दार्शनिक पाइथागोरस द्वारा विकसित।'
                  : 'Pythagorean Numerology: Most widely used system, developed by the Greek philosopher Pythagoras.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'कैल्डियन अंक ज्योतिष: प्राचीन बेबीलोन से उत्पन्न एक पुरानी प्रणाली, जो नामों के कंपन पर केंद्रित है।'
                  : 'Chaldean Numerology: An older system originating from ancient Babylon, which focuses on vibrations of names.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'कब्बाला अंक ज्योतिष: यहूदी रहस्यवाद में निहित, नाम विश्लेषण पर जोर देता है।'
                  : 'Kabbalah Numerology: Rooted in Jewish mysticism, emphasizing name analysis.'}
              </li>
            </ul>
          </div>

          <div className="concept-section">
            <h2 className="concept-title">
              {language === 'hindi'
                ? '3. अंक ज्योतिष में महत्वपूर्ण संख्याएँ'
                : '3. Important Numbers in Numerology'}
            </h2>

            <div className="number-type">
              <h3 className="number-title">
                {language === 'hindi'
                  ? 'A. जीवन पथ संख्या (सबसे महत्वपूर्ण संख्या)'
                  : 'A. Life Path Number (Most Important Number)'}
              </h3>
              <p className="number-description">
                {language === 'hindi'
                  ? 'जीवन पथ संख्या आपके व्यक्तित्व, ताकतों, चुनौतियों और जीवन के उद्देश्य को प्रकट करती है। इसकी गणना आपकी जन्म तिथि से की जाती है।'
                  : 'The Life Path Number reveals your personality, strengths, challenges, and purpose in life. It is calculated from your birth date.'}
              </p>
              <div className="example-box">
                <p className="example-title">
                  {language === 'hindi' ? 'उदाहरण गणना:' : 'Example Calculation:'}
                </p>
                <p className="example-content">
                  {language === 'hindi'
                    ? 'यदि आपकी जन्म तिथि 15 जुलाई 1990 है, तो गणना इस प्रकार करें:<br />1 + 5 + 7 + 1 + 9 + 9 + 0 = 32 → 3 + 2 = 5<br />इसलिए, जीवन पथ संख्या 5 है (स्वतंत्रता, साहसिक और अनुकूलनशीलता का प्रतिनिधित्व करती है)।'
                    : 'If your birthdate is 15th July 1990, calculate as:<br />1 + 5 + 7 + 1 + 9 + 9 + 0 = 32 → 3 + 2 = 5<br />So, the Life Path Number is 5 (Represents freedom, adventure, and adaptability).'}
                </p>
              </div>
            </div>

            <div className="number-type">
              <h3 className="number-title">
                {language === 'hindi'
                  ? 'B. भाग्य संख्या (अभिव्यक्ति संख्या)'
                  : 'B. Destiny Number (Expression Number)'}
              </h3>
              <p className="number-description">
                {language === 'hindi'
                  ? 'जन्म के समय पूरे नाम से प्राप्त, यह संख्या प्राकृतिक प्रतिभाओं और करियर झुकावों को प्रकट करती है।'
                  : 'Derived from the full name at birth, this number reveals natural talents and career inclinations.'}
              </p>
            </div>

            <div className="number-type">
              <h3 className="number-title">
                {language === 'hindi'
                  ? 'C. आत्मा की इच्छा संख्या (हृदय की इच्छा संख्या)'
                  : 'C. Soul Urge Number (Heart\'s Desire Number)'}
              </h3>
              <p className="number-description">
                {language === 'hindi'
                  ? 'आपके पूरे नाम में स्वरों का उपयोग करके गणना की जाती है, यह आंतरिक इच्छाओं और प्रेरणाओं का प्रतिनिधित्व करती है।'
                  : 'Calculated using the vowels in your full name, it represents inner desires and motivations.'}
              </p>
            </div>

            <div className="number-type">
              <h3 className="number-title">
                {language === 'hindi'
                  ? 'D. व्यक्तित्व संख्या'
                  : 'D. Personality Number'}
              </h3>
              <p className="number-description">
                {language === 'hindi'
                  ? 'पूरे नाम में व्यंजनों का उपयोग करके गणना की जाती है, यह दर्शाती है कि दूसरे आपको कैसे देखते हैं।'
                  : 'Calculated using consonants in the full name, it represents how others perceive you.'}
              </p>
            </div>

            <div className="number-type">
              <h3 className="number-title">
                {language === 'hindi'
                  ? 'E. जन्म दिन संख्या'
                  : 'E. Birth Day Number'}
              </h3>
              <p className="number-description">
                {language === 'hindi'
                  ? 'आपके जन्म के दिन (1-31) के आधार पर, यह संख्या व्यक्तिगत लक्षणों में अतिरिक्त अंतर्दृष्टि प्रदान करती है।'
                  : 'Based on the day you were born (1-31), this number provides additional insights into personal traits.'}
              </p>
            </div>
          </div>

          <hr className="section-divider" />

          <h1 className="section-heading">
            {language === 'hindi' ? 'अंक ज्योतिष में संख्याओं का अर्थ' : 'Meaning of Numbers in Numerology'}
          </h1>

          <div className="numbers-table">
            <div className="table-header">
              <div className="number-column">
                {language === 'hindi' ? 'संख्या' : 'Number'}
              </div>
              <div className="characteristics-column">
                {language === 'hindi' ? 'विशेषताएँ' : 'Characteristics'}
              </div>
            </div>

            <div className="table-row">
              <div className="number-cell">1</div>
              <div className="characteristics-cell">
                {language === 'hindi' ? 'नेतृत्व, स्वतंत्रता, महत्वाकांक्षा' : 'Leadership, independence, ambition'}
              </div>
            </div>
            <hr className="row-divider" />

            <div className="table-row">
              <div className="number-cell">2</div>
              <div className="characteristics-cell">
                {language === 'hindi' ? 'कूटनीति, संवेदनशीलता, साझेदारी' : 'Diplomacy, sensitivity, partnership'}
              </div>
            </div>
            <hr className="row-divider" />

            <div className="table-row">
              <div className="number-cell">3</div>
              <div className="characteristics-cell">
                {language === 'hindi' ? 'रचनात्मकता, संचार, आशावाद' : 'Creativity, communication, optimism'}
              </div>
            </div>
            <hr className="row-divider" />

            <div className="table-row">
              <div className="number-cell">4</div>
              <div className="characteristics-cell">
                {language === 'hindi' ? 'स्थिरता, अनुशासन, कड़ी मेहनत' : 'Stability, discipline, hard work'}
              </div>
            </div>
            <hr className="row-divider" />

            <div className="table-row">
              <div className="number-cell">5</div>
              <div className="characteristics-cell">
                {language === 'hindi' ? 'स्वतंत्रता, साहसिक, बहुमुखी प्रतिभा' : 'Freedom, adventure, versatility'}
              </div>
            </div>
            <hr className="row-divider" />

            <div className="table-row">
              <div className="number-cell">6</div>
              <div className="characteristics-cell">
                {language === 'hindi' ? 'जिम्मेदारी, प्रेम, पोषण' : 'Responsibility, love, nurturing'}
              </div>
            </div>
            <hr className="row-divider" />

            <div className="table-row">
              <div className="number-cell">7</div>
              <div className="characteristics-cell">
                {language === 'hindi' ? 'आध्यात्मिकता, ज्ञान, अंतर्ज्ञान' : 'Spirituality, wisdom, intuition'}
              </div>
            </div>
            <hr className="row-divider" />

            <div className="table-row">
              <div className="number-cell">8</div>
              <div className="characteristics-cell">
                {language === 'hindi' ? 'शक्ति, सफलता, वित्तीय निपुणता' : 'Power, success, financial mastery'}
              </div>
            </div>
            <hr className="row-divider" />

            <div className="table-row">
              <div className="number-cell">9</div>
              <div className="characteristics-cell">
                {language === 'hindi' ? 'मानवतावाद, करुणा, पूर्णता' : 'Humanitarianism, compassion, completion'}
              </div>
            </div>
          </div>

          <hr className="section-divider" />

          <h1 className="section-heading">
            {language === 'hindi' ? 'अंक ज्योतिष के व्यावहारिक उदाहरण' : 'Examples of Numerology in Action'}
          </h1>

          <div className="example-section">
            <h2 className="example-heading">
              {language === 'hindi'
                ? 'उदाहरण 1: जीवन पथ संख्या के आधार पर करियर मार्गदर्शन'
                : 'Example 1: Career Guidance Based on Life Path Number'}
            </h2>
            <ul className="example-list">
              <li>
                {language === 'hindi'
                  ? 'जीवन पथ 1: नेतृत्व भूमिकाओं, व्यापार या राजनीति के लिए सबसे उपयुक्त'
                  : 'Life Path 1: Best suited for leadership roles, business, or politics'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'जीवन पथ 3: अभिनय, लेखन या डिजाइन जैसे रचनात्मक क्षेत्रों के लिए आदर्श'
                  : 'Life Path 3: Ideal for creative fields like acting, writing, or design'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'जीवन पथ 8: वित्त, प्रबंधन या उद्यमिता में मजबूत'
                  : 'Life Path 8: Strong in finance, management, or entrepreneurship'}
              </li>
            </ul>
          </div>

          <div className="example-section">
            <h2 className="example-heading">
              {language === 'hindi'
                ? 'उदाहरण 2: सफलता के लिए नाम सुधार'
                : 'Example 2: Name Correction for Success'}
            </h2>
            <p className="example-description">
              {language === 'hindi'
                ? 'कई प्रसिद्ध हस्तियां अनुकूल अंक ज्योतिष संख्याओं के साथ संरेखित होने के लिए अपने नामों को बदलती हैं। उदाहरण के लिए, "जॉन स्मिथ" नामक व्यक्ति अंक ज्योतिष गणनाओं के आधार पर सफलता बढ़ाने के लिए वर्तनी को "जहोन स्मिथ" में बदल सकता है।'
                : 'Many celebrities alter their names to align with favorable numerology numbers. For instance, a person named "John Smith" might change the spelling to "Jhon Smyth" to enhance success based on numerology calculations.'}
            </p>
          </div>

          <div className="example-section">
            <h2 className="example-heading">
              {language === 'hindi'
                ? 'उदाहरण 3: रिश्ते की अनुकूलता'
                : 'Example 3: Relationship Compatibility'}
            </h2>
            <p className="example-description">
              {language === 'hindi'
                ? 'दो व्यक्तियों के जीवन पथ संख्याओं की तुलना करके, अंक ज्योतिषी रिश्ते की अनुकूलता निर्धारित करते हैं:'
                : 'By comparing the Life Path Numbers of two individuals, numerologists determine relationship compatibility:'}
            </p>
            <ul className="example-list">
              <li>
                {language === 'hindi'
                  ? 'जीवन पथ 1 (स्वतंत्र) को जीवन पथ 6 (पोषण) के साथ अलग-अलग प्राथमिकताओं के कारण संघर्ष हो सकता है'
                  : 'A Life Path 1 (Independent) may struggle with a Life Path 6 (Nurturing) due to different priorities'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'जीवन पथ 5 (साहसिक) जीवन पथ 7 (आध्यात्मिक) के साथ अच्छी तरह से मेल खाता है, क्योंकि वे एक-दूसरे को संतुलित करते हैं'
                  : 'A Life Path 5 (Adventurous) matches well with a Life Path 7 (Spiritual), as they balance each other'}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginBottom: 0, paddingBottom: 0 }}>
        <Footer />
      </div>
    </div>
  );
};

export default Numerology;