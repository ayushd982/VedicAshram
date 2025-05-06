import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import './Marital.css';

const Marital = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      title: "Marital Problem Solution in Astrology",
      introduction: {
        heading: "Introduction",
        text: "Marriage is a sacred union in Vedic astrology, symbolized not just by social or emotional connection, but by karmic ties and planetary alignments. When marital discord arises, astrology offers deep insight into its root causes—be it emotional mismatch, financial stress, lack of compatibility, or external influences. Vedic astrology treats marriage as a spiritual bond governed by the 7th house in the natal chart and influenced by multiple planetary combinations. This document explores astrological causes and remedies for marital problems in detail."
      },
      sections: [
        {
          heading: "1. Key Astrological Houses Affecting Marriage",
          content: [
            "7th House: Primary house of marriage, partner, and sexual compatibility.",
            "4th House: Domestic peace, emotional bonding, home environment.",
            "2nd House: Family life and overall stability.",
            "12th House: Intimacy, detachment, and spiritual connection."
          ],
          conclusion: "A detailed analysis of these houses helps in identifying the areas of marital discord."
        },
        {
          heading: "2. Role of Planets in Marriage Problems",
          content: [
            "Venus: Significator of love, romance, and harmony. Affliction leads to lack of affection.",
            "Mars (Manglik Dosh): Aggression, ego, conflict, physical incompatibility.",
            "Saturn: Delays, coldness, and karmic debts.",
            "Rahu and Ketu: Illusions, misunderstandings, secret affairs, emotional withdrawal.",
            "Moon: Mental compatibility and emotional stability."
          ],
          conclusion: "Planetary aspects and conjunctions that often lead to misunderstandings or separation."
        },
        {
          heading: "3. Compatibility Issues (Guna Milan and Mangal Dosha)",
          content: [
            "Guna Milan (Ashtakoot Matching): Points-based system measuring 36 qualities.",
            "Mangal Dosha: Present when Mars is in certain houses. Remedies include Kumbh Vivah and fasting.",
            "Bhakoot Dosha and Nadi Dosha: Major doshas leading to incompatibility, infertility, or divorce if not resolved."
          ]
        },
        {
          heading: "4. Common Types of Marital Problems and Their Astrological Indicators",
          content: [
            "Lack of Communication: Mercury in affliction.",
            "Financial Stress: 2nd and 11th house issues.",
            "Infidelity or Emotional Distance: Rahu-Ketu afflictions.",
            "Power Struggles: Sun and Mars dominance.",
            "Interference by In-laws: 4th and 8th house issues."
          ],
          conclusion: "Each scenario is discussed with case-study-style astrological interpretations."
        },
        {
          heading: "5. Remedies for Marital Problems in Vedic Astrology",
          content: [
            "Mantras: Chanting of Shukra (Venus), Shiva-Parvati, and Gauri Shankar mantras.",
            "Pujas and Yagnas: Mangal Dosh Nivaran Puja, Navagraha Shanti.",
            "Fasting and Vrats: On Fridays (for Venus), Mondays (for Moon).",
            "Gemstones: Diamond (Venus), Pearl (Moon), Emerald (Mercury) — only after proper consultation.",
            "Astrological Counseling: Involving both partners, supported by planetary guidance."
          ]
        },
        {
          heading: "6. Transits and Dasha Impacts",
          content: [
            "Saturn Return: Testing period for relationships.",
            "Venus and Moon Mahadasha: Favorable for resolving love issues.",
            "Ketu Dasha: May trigger spiritual disconnect.",
            "Timing of planetary transits that impact relationship dynamics."
          ]
        },
        {
          heading: "7. Spiritual and Psychological Integration",
          content: [
            "Combining astrology with modern relationship counseling.",
            "Role of meditation, self-awareness, and spiritual practices.",
            "Karma and soul-level connections: why some marriages go through long difficult phases."
          ]
        }
      ]
    },
    hindi: {
      title: "ज्योतिष में वैवाहिक समस्या समाधान",
      introduction: {
        heading: "परिचय",
        text: "वैदिक ज्योतिष में विवाह एक पवित्र बंधन है, जो केवल सामाजिक या भावनात्मक संबंध से ही नहीं, बल्कि कार्मिक संबंधों और ग्रहीय संरेखण से भी प्रतीकात्मक है। जब वैवाहिक अशांति उत्पन्न होती है, तो ज्योतिष इसके मूल कारणों में गहरी अंतर्दृष्टि प्रदान करता है - चाहे वह भावनात्मक बेमेल हो, वित्तीय तनाव हो, संगतता की कमी हो, या बाहरी प्रभाव हो। वैदिक ज्योतिष विवाह को एक आध्यात्मिक बंधन के रूप में मानता है जो जन्म कुंडली में 7वें घर द्वारा शासित होता है और कई ग्रहीय संयोजनों से प्रभावित होता है। यह दस्तावेज़ वैवाहिक समस्याओं के ज्योतिषीय कारणों और उपायों का विस्तार से पता लगाता है।"
      },
      sections: [
        {
          heading: "1. विवाह को प्रभावित करने वाले प्रमुख ज्योतिषीय भाव",
          content: [
            "7वां भाव: विवाह, साथी और यौन संगतता का प्राथमिक भाव।",
            "4था भाव: घरेलू शांति, भावनात्मक बंधन, घर का वातावरण।",
            "2रा भाव: पारिवारिक जीवन और समग्र स्थिरता।",
            "12वां भाव: अंतरंगता, विरक्ति और आध्यात्मिक संबंध।"
          ],
          conclusion: "इन भावों का विस्तृत विश्लेषण वैवाहिक अशांति के क्षेत्रों की पहचान करने में मदद करता है।"
        },
        {
          heading: "2. विवाह समस्याओं में ग्रहों की भूमिका",
          content: [
            "शुक्र: प्रेम, रोमांस और सद्भाव का प्रतीक। पीड़ा से स्नेह की कमी होती है।",
            "मंगल (मंगलिक दोष): आक्रामकता, अहंकार, संघर्ष, शारीरिक असंगतता।",
            "शनि: देरी, ठंडापन और कार्मिक ऋण।",
            "राहु और केतु: भ्रम, गलतफहमी, गुप्त संबंध, भावनात्मक वापसी।",
            "चंद्रमा: मानसिक संगतता और भावनात्मक स्थिरता।"
          ],
          conclusion: "ग्रहीय पहलू और संयोजन जो अक्सर गलतफहमी या अलगाव का कारण बनते हैं।"
        },
        {
          heading: "3. संगतता के मुद्दे (गुण मिलान और मंगल दोष)",
          content: [
            "गुण मिलान (अष्टकूट मिलान): 36 गुणों को मापने वाली अंक-आधारित प्रणाली।",
            "मंगल दोष: जब मंगल कुछ घरों में होता है। उपायों में कुंभ विवाह और उपवास शामिल हैं।",
            "भकूट दोष और नाड़ी दोष: प्रमुख दोष जो असंगतता, बांझपन या तलाक का कारण बनते हैं यदि हल नहीं किया जाता।"
          ]
        },
        {
          heading: "4. वैवाहिक समस्याओं के सामान्य प्रकार और उनके ज्योतिषीय संकेतक",
          content: [
            "संचार की कमी: बुध की पीड़ा।",
            "वित्तीय तनाव: 2रे और 11वें घर के मुद्दे।",
            "बेवफाई या भावनात्मक दूरी: राहु-केतु की पीड़ा।",
            "शक्ति संघर्ष: सूर्य और मंगल का प्रभुत्व।",
            "सास-ससुर द्वारा हस्तक्षेप: 4थे और 8वें घर के मुद्दे।"
          ],
          conclusion: "प्रत्येक परिदृश्य की चर्चा केस-स्टडी-शैली की ज्योतिषीय व्याख्याओं के साथ की जाती है।"
        },
        {
          heading: "5. वैदिक ज्योतिष में वैवाहिक समस्याओं के उपाय",
          content: [
            "मंत्र: शुक्र (वीनस), शिव-पार्वती और गौरी शंकर मंत्रों का जाप।",
            "पूजा और यज्ञ: मंगल दोष निवारण पूजा, नवग्रह शांति।",
            "उपवास और व्रत: शुक्रवार (शुक्र के लिए), सोमवार (चंद्रमा के लिए)।",
            "रत्न: हीरा (शुक्र), मोती (चंद्रमा), पन्ना (बुध) — केवल उचित परामर्श के बाद।",
            "ज्योतिषीय परामर्श: दोनों साझेदारों को शामिल करना, ग्रहीय मार्गदर्शन द्वारा समर्थित।"
          ]
        },
        {
          heading: "6. ट्रांजिट और दशा प्रभाव",
          content: [
            "शनि रिटर्न: रिश्तों के लिए परीक्षण अवधि।",
            "शुक्र और चंद्र महादशा: प्रेम के मुद्दों को हल करने के लिए अनुकूल।",
            "केतु दशा: आध्यात्मिक विच्छेद को ट्रिगर कर सकता है।",
            "ग्रहीय ट्रांजिट का समय जो रिश्ते की गतिशीलता को प्रभावित करता है।"
          ]
        },
        {
          heading: "7. आध्यात्मिक और मनोवैज्ञानिक एकीकरण",
          content: [
            "आधुनिक रिश्ते परामर्श के साथ ज्योतिष को जोड़ना।",
            "ध्यान, आत्म-जागरूकता और आध्यात्मिक अभ्यास की भूमिका।",
            "कर्म और आत्मा-स्तर के संबंध: कुछ विवाह लंबे समय तक कठिन चरणों से क्यों गुजरते हैं।"
          ]
        }
      ]
    }
  };

  const selectedContent = content[language];

  return (
    <div className="marital-container">
      <Navbar />
      <div className="marital-content">
        <div className="marital-background">
          <div className="marital-overlay">
            <div className="marital-text-container">
              <h1 className="marital-title">{selectedContent.title}</h1>

              <section className="marital-section">
                <h2>{selectedContent.introduction.heading}</h2>
                <p>{selectedContent.introduction.text}</p>
              </section>

              {selectedContent.sections.map((section, index) => (
                <section key={index} className="marital-section">
                  <h2>{section.heading}</h2>
                  <ul>
                    {section.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  {section.conclusion && <p className="conclusion">{section.conclusion}</p>}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Marital;