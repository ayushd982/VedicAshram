import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import lifePathImage from '../../assets/Life.jpg';
import './Lifepath.css';

const Lifepath = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      mainHeading: "Life Path Number Analysis",
      subHeading: "Discover your core purpose and life journey through numerology",
      introduction: "The Life Path Number is the core of your numerological profile, derived from your complete date of birth. It reveals your purpose, personality, destiny, and the lessons you're meant to learn in this lifetime. It is the numerology equivalent of the Sun Sign in astrology.",
      calculationTitle: "How to Calculate Your Life Path Number",
      calculationText: "Add all digits of your birth date (dd/mm/yyyy) together until you get a single digit (1–9) or Master Number (11, 22, 33). Example: Birth Date: 24-03-1990 → 2 + 4 + 0 + 3 + 1 + 9 + 9 + 0 = 28 → 2 + 8 = 10 → 1 + 0 = 1 → Life Path Number = 1",
      lifePathMeaningsTitle: "What Each Life Path Number Represents",
      lifePathMeanings: [
        {
          number: "1",
          title: "The Leader",
          traits: "Independent, pioneering, ambitious, determined",
          strengths: "Natural leadership, innovation, self-reliance",
          challenges: "Stubbornness, impatience, excessive independence",
          career: "Entrepreneur, executive, inventor, athlete"
        },
        {
          number: "2",
          title: "The Diplomat",
          traits: "Cooperative, sensitive, diplomatic, balanced",
          strengths: "Mediation, intuition, harmony, partnership",
          challenges: "Oversensitivity, indecision, fear of conflict",
          career: "Counselor, diplomat, team member, artist"
        },
        {
          number: "3",
          title: "The Expressive Creator",
          traits: "Creative, communicative, social, optimistic",
          strengths: "Self-expression, joy, inspiration, artistic talent",
          challenges: "Scattered energy, superficiality, lack of focus",
          career: "Writer, artist, entertainer, teacher"
        },
        {
          number: "4",
          title: "The Builder",
          traits: "Practical, organized, reliable, disciplined",
          strengths: "Hard work, stability, attention to detail, loyalty",
          challenges: "Rigidity, stubbornness, resistance to change",
          career: "Engineer, accountant, manager, craftsperson"
        },
        {
          number: "5",
          title: "The Freedom Seeker",
          traits: "Adaptable, versatile, adventurous, progressive",
          strengths: "Versatility, resourcefulness, communication, adventure",
          challenges: "Restlessness, inconsistency, overindulgence",
          career: "Journalist, travel agent, marketer, entrepreneur"
        },
        {
          number: "6",
          title: "The Nurturer",
          traits: "Responsible, caring, harmonious, supportive",
          strengths: "Nurturing, service, balance, healing",
          challenges: "Self-sacrifice, perfectionism, interference",
          career: "Teacher, counselor, healthcare provider, artist"
        },
        {
          number: "7",
          title: "The Seeker",
          traits: "Analytical, introspective, spiritual, wise",
          strengths: "Analysis, research, wisdom, technical skill",
          challenges: "Isolation, overthinking, skepticism",
          career: "Researcher, scientist, philosopher, analyst"
        },
        {
          number: "8",
          title: "The Achiever",
          traits: "Ambitious, authoritative, successful, material",
          strengths: "Leadership, organization, practicality, financial acumen",
          challenges: "Workaholic tendencies, materialism, control issues",
          career: "Executive, financial advisor, entrepreneur, manager"
        },
        {
          number: "9",
          title: "The Humanitarian",
          traits: "Compassionate, selfless, global, artistic",
          strengths: "Compassion, generosity, creativity, wisdom",
          challenges: "Martyrdom, aloofness, emotional distance",
          career: "Humanitarian, artist, healer, counselor"
        },
        {
          number: "11",
          title: "The Intuitive",
          traits: "Intuitive, inspirational, idealistic, visionary",
          strengths: "Spiritual insight, inspiration, idealism, intuition",
          challenges: "Nervous tension, impracticality, high sensitivity",
          career: "Spiritual teacher, counselor, artist, healer"
        },
        {
          number: "22",
          title: "The Master Builder",
          traits: "Practical visionary, powerful, ambitious, disciplined",
          strengths: "Manifestation, leadership, practicality, vision",
          challenges: "Overwhelming responsibility, perfectionism, burnout",
          career: "Architect, entrepreneur, leader, visionary"
        },
        {
          number: "33",
          title: "The Master Teacher",
          traits: "Compassionate, nurturing, selfless, inspiring",
          strengths: "Healing, teaching, nurturing, spiritual wisdom",
          challenges: "Self-sacrifice, unrealistic expectations, martyrdom",
          career: "Teacher, healer, counselor, spiritual guide"
        }
      ],
      whyItMattersTitle: "Why Your Life Path Number Matters",
      whyItMattersList: [
        "Helps you understand your natural strengths and blind spots",
        "Guides ideal career paths, partners, and spiritual direction",
        "Provides insights into recurring life patterns and challenges",
        "Assists in setting realistic and soul-aligned goals",
        "Reveals your unique contribution to the world",
        "Helps you navigate life transitions with greater awareness"
      ],
      ctaButton: "Discover Your Life Path Number"
    },
    hindi: {
      mainHeading: "जीवन पथ संख्या विश्लेषण",
      subHeading: "अंकशास्त्र के माध्यम से अपने मूल उद्देश्य और जीवन यात्रा की खोज करें",
      introduction: "जीवन पथ संख्या आपकी पूरी जन्म तिथि से प्राप्त आपके अंकशास्त्रीय प्रोफाइल का मूल है। यह आपके उद्देश्य, व्यक्तित्व, नियति और उन पाठों को प्रकट करता है जिन्हें आपको इस जीवनकाल में सीखना है। यह ज्योतिष में सूर्य राशि के अंकशास्त्र के समकक्ष है।",
      calculationTitle: "अपनी जीवन पथ संख्या की गणना कैसे करें",
      calculationText: "अपनी जन्म तिथि (दिन/महीना/वर्ष) के सभी अंकों को तब तक जोड़ें जब तक आपको एक अंक (1-9) या मास्टर नंबर (11, 22, 33) न मिल जाए। उदाहरण: जन्म तिथि: 24-03-1990 → 2 + 4 + 0 + 3 + 1 + 9 + 9 + 0 = 28 → 2 + 8 = 10 → 1 + 0 = 1 → जीवन पथ संख्या = 1",
      lifePathMeaningsTitle: "प्रत्येक जीवन पथ संख्या क्या दर्शाती है",
      lifePathMeanings: [
        {
          number: "1",
          title: "नेता",
          traits: "स्वतंत्र, अग्रणी, महत्वाकांक्षी, दृढ़",
          strengths: "प्राकृतिक नेतृत्व, नवाचार, आत्मनिर्भरता",
          challenges: "हठधर्मिता, अधीरता, अत्यधिक स्वतंत्रता",
          career: "उद्यमी, कार्यकारी, आविष्कारक, एथलीट"
        },
        {
          number: "2",
          title: "राजनयिक",
          traits: "सहकारी, संवेदनशील, कूटनीतिक, संतुलित",
          strengths: "मध्यस्थता, अंतर्ज्ञान, सद्भाव, साझेदारी",
          challenges: "अतिसंवेदनशीलता, अनिर्णय, संघर्ष का भय",
          career: "परामर्शदाता, राजनयिक, टीम सदस्य, कलाकार"
        },
        {
          number: "3",
          title: "अभिव्यक्त निर्माता",
          traits: "रचनात्मक, संचारी, सामाजिक, आशावादी",
          strengths: "आत्म-अभिव्यक्ति, आनंद, प्रेरणा, कलात्मक प्रतिभा",
          challenges: "बिखरी ऊर्जा, सतहीपन, ध्यान की कमी",
          career: "लेखक, कलाकार, मनोरंजनकर्ता, शिक्षक"
        },
        {
          number: "4",
          title: "निर्माता",
          traits: "व्यावहारिक, संगठित, विश्वसनीय, अनुशासित",
          strengths: "कड़ी मेहनत, स्थिरता, विवरण पर ध्यान, वफादारी",
          challenges: "कठोरता, हठधर्मिता, परिवर्तन का विरोध",
          career: "इंजीनियर, लेखाकार, प्रबंधक, शिल्पकार"
        },
        {
          number: "5",
          title: "स्वतंत्रता खोजी",
          traits: "अनुकूलनीय, बहुमुखी, साहसिक, प्रगतिशील",
          strengths: "बहुमुखी प्रतिभा, संसाधनशीलता, संचार, साहस",
          challenges: "बेचैनी, असंगति, अति-आनंद",
          career: "पत्रकार, यात्रा एजेंट, विपणक, उद्यमी"
        },
        {
          number: "6",
          title: "पोषक",
          traits: "जिम्मेदार, देखभाल करने वाला, सामंजस्यपूर्ण, सहायक",
          strengths: "पोषण, सेवा, संतुलन, चिकित्सा",
          challenges: "आत्म-बलिदान, पूर्णतावाद, हस्तक्षेप",
          career: "शिक्षक, परामर्शदाता, स्वास्थ्य सेवा प्रदाता, कलाकार"
        },
        {
          number: "7",
          title: "खोजकर्ता",
          traits: "विश्लेषणात्मक, आत्मनिरीक्षण, आध्यात्मिक, बुद्धिमान",
          strengths: "विश्लेषण, अनुसंधान, ज्ञान, तकनीकी कौशल",
          challenges: "अलगाव, अति-सोच, संशयवाद",
          career: "शोधकर्ता, वैज्ञानिक, दार्शनिक, विश्लेषक"
        },
        {
          number: "8",
          title: "उपलब्धिकर्ता",
          traits: "महत्वाकांक्षी, अधिकारपूर्ण, सफल, भौतिक",
          strengths: "नेतृत्व, संगठन, व्यावहारिकता, वित्तीय कुशलता",
          challenges: "कार्यशील प्रवृत्तियां, भौतिकवाद, नियंत्रण मुद्दे",
          career: "कार्यकारी, वित्तीय सलाहकार, उद्यमी, प्रबंधक"
        },
        {
          number: "9",
          title: "मानवतावादी",
          traits: "करुणामय, निःस्वार्थ, वैश्विक, कलात्मक",
          strengths: "करुणा, उदारता, रचनात्मकता, ज्ञान",
          challenges: "शहीदी, अलगाव, भावनात्मक दूरी",
          career: "मानवतावादी, कलाकार, चिकित्सक, परामर्शदाता"
        },
        {
          number: "11",
          title: "अंतर्ज्ञानी",
          traits: "अंतर्ज्ञानी, प्रेरणादायक, आदर्शवादी, दूरदर्शी",
          strengths: "आध्यात्मिक अंतर्दृष्टि, प्रेरणा, आदर्शवाद, अंतर्ज्ञान",
          challenges: "तंत्रिका तनाव, अव्यावहारिकता, उच्च संवेदनशीलता",
          career: "आध्यात्मिक शिक्षक, परामर्शदाता, कलाकार, चिकित्सक"
        },
        {
          number: "22",
          title: "मास्टर बिल्डर",
          traits: "व्यावहारिक दूरदर्शी, शक्तिशाली, महत्वाकांक्षी, अनुशासित",
          strengths: "अभिव्यक्ति, नेतृत्व, व्यावहारिकता, दृष्टि",
          challenges: "अभिभूत जिम्मेदारी, पूर्णतावाद, थकावट",
          career: "वास्तुकार, उद्यमी, नेता, दूरदर्शी"
        },
        {
          number: "33",
          title: "मास्टर टीचर",
          traits: "करुणामय, पोषक, निःस्वार्थ, प्रेरणादायक",
          strengths: "चिकित्सा, शिक्षण, पोषण, आध्यात्मिक ज्ञान",
          challenges: "आत्म-बलिदान, अवास्तविक अपेक्षाएं, शहीदी",
          career: "शिक्षक, चिकित्सक, परामर्शदाता, आध्यात्मिक मार्गदर्शक"
        }
      ],
      whyItMattersTitle: "आपकी जीवन पथ संख्या क्यों महत्वपूर्ण है",
      whyItMattersList: [
        "आपकी प्राकृतिक ताकतों और अंधे धब्बों को समझने में मदद करता है",
        "आदर्श करियर पथ, साथियों और आध्यात्मिक दिशा का मार्गदर्शन करता है",
        "आवर्ती जीवन पैटर्न और चुनौतियों में अंतर्दृष्टि प्रदान करता है",
        "यथार्थवादी और आत्मा-संरेखित लक्ष्य निर्धारित करने में सहायता करता है",
        "दुनिया में आपके अद्वितीय योगदान को प्रकट करता है",
        "अधिक जागरूकता के साथ जीवन परिवर्तनों को नेविगेट करने में मदद करता है"
      ],
      ctaButton: "अपनी जीवन पथ संख्या की खोज करें"
    }
  };

  return (
    <div className="life-path-container">
      <div className="background-image" style={{ backgroundImage: `url(${lifePathImage})` }}></div>
      <Navbar />
      <div className="life-path-content">
        <header className="main-header">
          <h1 className="main-heading">{content[language].mainHeading}</h1>
          <p className="subheading">{content[language].subHeading}</p>
        </header>

        <section className="intro-section">
          <p className="intro-text">{content[language].introduction}</p>
        </section>

        <section className="calculation-section">
          <h2>{content[language].calculationTitle}</h2>
          <p>{content[language].calculationText}</p>
          <div className="calculation-example">
            <div className="calculation-step">
              <span className="step-number">1</span>
              <span className="step-text">24-03-1990</span>
            </div>
            <div className="calculation-arrow">→</div>
            <div className="calculation-step">
              <span className="step-number">2</span>
              <span className="step-text">2+4+0+3+1+9+9+0=28</span>
            </div>
            <div className="calculation-arrow">→</div>
            <div className="calculation-step">
              <span className="step-number">3</span>
              <span className="step-text">2+8=10</span>
            </div>
            <div className="calculation-arrow">→</div>
            <div className="calculation-step">
              <span className="step-number">4</span>
              <span className="step-text">1+0=1</span>
            </div>
          </div>
        </section>

        <section className="life-path-meanings-section">
          <h2>{content[language].lifePathMeaningsTitle}</h2>
          <div className="life-path-cards">
            {content[language].lifePathMeanings.map((path, index) => (
              <div className="life-path-card" key={index}>
                <div className="card-header">
                  <span className="path-number">{path.number}</span>
                  <h3 className="path-title">{path.title}</h3>
                </div>
                <div className="card-content">
                  <p><strong>Traits:</strong> {path.traits}</p>
                  <p><strong>Strengths:</strong> {path.strengths}</p>
                  <p><strong>Challenges:</strong> {path.challenges}</p>
                  <p><strong>Career:</strong> {path.career}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="why-it-matters-section">
          <h2>{content[language].whyItMattersTitle}</h2>
          <ul className="why-it-matters-list">
            {content[language].whyItMattersList.map((item, index) => (
              <li key={index}>{item}</li>
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

export default Lifepath;