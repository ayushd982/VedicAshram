import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import './Vedic.css';

const Vedic = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      title: "💑 Vedic Matching in Astrology (Ashtakoot Guna Milan)",
      introduction: {
        heading: "🔮 Introduction",
        text: "Vedic Matching, also known as Kundli Milan or Ashtakoot Guna Milan, is an ancient and crucial process in Vedic astrology used to assess compatibility between two individuals planning to get married. It is a systematic approach rooted in the belief that marital harmony depends not just on emotional or physical attraction, but also on karmic, mental, and planetary alignment.\n\nAshtakoot Milan evaluates eight distinct aspects of compatibility, giving a score out of 36. A minimum of 18 points is considered acceptable for marriage. However, beyond numbers, astrologers interpret planetary positions, doshas (flaws), and remedies for a holistic understanding."
      },
      sections: [
        {
          heading: "🧮 The 8 Koots (Ashta-Koota) – Guna Matching System",
          intro: "Each koot (category) represents a key aspect of life and marriage:",
          koots: [
            {
              name: "Varna (1 point)",
              description: [
                "Compares the spiritual compatibility and ego levels.",
                "Caste-based symbolic hierarchy: Brahmin > Kshatriya > Vaishya > Shudra.",
                "Same or higher varna in the boy's chart is preferred."
              ]
            },
            {
              name: "Vashya (2 points)",
              description: [
                "Indicates mutual control, dominance, and attraction.",
                "Five types: Human, Wild, Water, Insect, and Quadruped."
              ]
            },
            {
              name: "Tara (3 points)",
              description: [
                "Checks star compatibility and destiny matching (Janma Nakshatras).",
                "Avoids health issues and misfortunes."
              ]
            },
            {
              name: "Yoni (4 points)",
              description: [
                "Sexual compatibility and biological urges.",
                "Based on Nakshatra-associated animal types.",
                "Opposing yonis (natural enemies) reduce score."
              ]
            },
            {
              name: "Graha Maitri (5 points)",
              description: [
                "Planetary friendship between lords of the Moon signs.",
                "A strong indicator of mental and emotional rapport."
              ]
            },
            {
              name: "Gana (6 points)",
              description: [
                "Temperament matching (Deva, Manushya, Rakshasa).",
                "Represents nature and behavior.",
                "Deva-Rakshasa combinations are problematic."
              ]
            },
            {
              name: "Bhakoot (7 points)",
              description: [
                "Determines emotional bonding and family compatibility.",
                "Certain rashi combinations are strictly avoided due to Doshas (6-8, 5-9, 2-12)."
              ]
            },
            {
              name: "Nadi (8 points)",
              description: [
                "Most crucial: represents health, genetics, and procreative ability.",
                "Matching Nadi results in Nadi Dosha, which can affect childbirth and cause marital disturbances."
              ]
            }
          ]
        },
        {
          heading: "❌ Understanding Doshas in Matching",
          subsections: [
            {
              title: "Major Doshas:",
              items: [
                "Nadi Dosha: Can cause problems in childbirth or couple's health.",
                "Bhakoot Dosha: Emotional detachment, separation potential.",
                "Gana Dosha: Behavioral conflicts."
              ]
            },
            {
              title: "💡 Remedies for Doshas:",
              items: [
                "Nadi Dosha: Chanting Maha Mrityunjaya mantra, Nadi Dosha Nivaran puja.",
                "Bhakoot Dosha: Specific Graha Shanti puja and matching planetary strengths.",
                "Gana Dosha: Worship of Lord Shiva or reciting Gauri Shankar Mantra."
              ]
            }
          ]
        },
        {
          heading: "📜 Beyond Numbers: Horoscope Matching Essentials",
          intro: "While Ashtakoot scoring provides a good base, astrologers also examine:",
          content: [
            "Manglik Dosha (Mars affliction): Causes aggression and marital delay.",
            "Dasha Sandhi: Check for overlapping or clashing planetary periods.",
            "7th House and Venus: Indicators of marital bliss and romantic capacity.",
            "Moon and Lagna Charts: Emotional compatibility and mental harmony.",
            "Navamsa Chart (D-9): Core chart for marriage; checks spiritual, karmic depth of the bond."
          ]
        },
        {
          heading: "❤️ Psychological and Spiritual Significance",
          content: [
            "Vedic matching is not just astrology—it's a path to energetic resonance.",
            "Helps prevent karmic clashes that may carry over from past lives.",
            "Encourages spiritual union based on Dharma, not just physical attraction.",
            "Matching nurtures empathy, emotional maturity, and shared growth."
          ]
        },
        {
          heading: "🧘 Modern Adaptation of Vedic Matching",
          intro: "Today's world sees Vedic matching blended with psychological and relational counseling:",
          content: [
            "Astro-psychology is used to decode personalities based on Moon and Ascendant.",
            "Helps guide couples toward communication styles, emotional expectations, and conflict resolution.",
            "Aids love marriages where Guna Milan may be less than ideal, but other factors are strong."
          ]
        }
      ]
    },
    hindi: {
      title: "💑 ज्योतिष में वैदिक मिलान (अष्टकूट गुण मिलान)",
      introduction: {
        heading: "🔮 परिचय",
        text: "वैदिक मिलान, जिसे कुंडली मिलान या अष्टकूट गुण मिलान के नाम से भी जाना जाता है, वैदिक ज्योतिष में एक प्राचीन और महत्वपूर्ण प्रक्रिया है जिसका उपयोग विवाह की योजना बनाने वाले दो व्यक्तियों के बीच संगतता का आकलन करने के लिए किया जाता है। यह एक व्यवस्थित दृष्टिकोण है जो इस विश्वास पर आधारित है कि वैवाहिक सद्भाव केवल भावनात्मक या शारीरिक आकर्षण पर नहीं, बल्कि कार्मिक, मानसिक और ग्रहीय संरेखण पर भी निर्भर करता है।\n\nअष्टकूट मिलान संगतता के आठ अलग-अलग पहलुओं का मूल्यांकन करता है, जिसमें 36 में से एक स्कोर दिया जाता है। विवाह के लिए न्यूनतम 18 अंक स्वीकार्य माने जाते हैं। हालांकि, संख्याओं से परे, ज्योतिषी ग्रहों की स्थिति, दोषों (खामियों) और समग्र समझ के लिए उपायों की व्याख्या करते हैं।"
      },
      sections: [
        {
          heading: "🧮 8 कूट (अष्ट-कूट) - गुण मिलान प्रणाली",
          intro: "प्रत्येक कूट (श्रेणी) जीवन और विवाह के एक प्रमुख पहलू का प्रतिनिधित्व करता है:",
          koots: [
            {
              name: "वर्ण (1 अंक)",
              description: [
                "आध्यात्मिक संगतता और अहंकार के स्तरों की तुलना करता है।",
                "जाति-आधारित प्रतीकात्मक पदानुक्रम: ब्राह्मण > क्षत्रिय > वैश्य > शूद्र।",
                "लड़के के चार्ट में समान या उच्च वर्ण को प्राथमिकता दी जाती है।"
              ]
            },
            {
              name: "वश्य (2 अंक)",
              description: [
                "पारस्परिक नियंत्रण, प्रभुत्व और आकर्षण को दर्शाता है।",
                "पांच प्रकार: मानव, जंगली, जल, कीट और चतुष्पद।"
              ]
            },
            {
              name: "तारा (3 अंक)",
              description: [
                "तारा संगतता और नियति मिलान (जन्म नक्षत्र) की जांच करता है।",
                "स्वास्थ्य समस्याओं और दुर्भाग्य से बचाता है।"
              ]
            },
            {
              name: "योनि (4 अंक)",
              description: [
                "यौन संगतता और जैविक इच्छाएं।",
                "नक्षत्र से जुड़े पशु प्रकारों पर आधारित।",
                "विरोधी योनि (प्राकृतिक दुश्मन) स्कोर कम करते हैं।"
              ]
            },
            {
              name: "ग्रह मैत्री (5 अंक)",
              description: [
                "चंद्र राशियों के स्वामियों के बीच ग्रहीय मित्रता।",
                "मानसिक और भावनात्मक सामंजस्य का एक मजबूत संकेतक।"
              ]
            },
            {
              name: "गण (6 अंक)",
              description: [
                "स्वभाव मिलान (देव, मनुष्य, राक्षस)।",
                "प्रकृति और व्यवहार का प्रतिनिधित्व करता है।",
                "देव-राक्षस संयोजन समस्याग्रस्त हैं।"
              ]
            },
            {
              name: "भकूट (7 अंक)",
              description: [
                "भावनात्मक बंधन और पारिवारिक संगतता निर्धारित करता है।",
                "दोषों के कारण कुछ राशि संयोजनों से सख्ती से बचा जाता है (6-8, 5-9, 2-12)।"
              ]
            },
            {
              name: "नाड़ी (8 अंक)",
              description: [
                "सबसे महत्वपूर्ण: स्वास्थ्य, आनुवंशिकी और प्रजनन क्षमता का प्रतिनिधित्व करता है।",
                "मिलान नाड़ी नाड़ी दोष का परिणाम है, जो बच्चे के जन्म को प्रभावित कर सकता है और वैवाहिक गड़बड़ी का कारण बन सकता है।"
              ]
            }
          ]
        },
        {
          heading: "❌ मिलान में दोषों को समझना",
          subsections: [
            {
              title: "प्रमुख दोष:",
              items: [
                "नाड़ी दोष: बच्चे के जन्म या जोड़े के स्वास्थ्य में समस्याएं पैदा कर सकता है।",
                "भकूट दोष: भावनात्मक अलगाव, अलगाव की संभावना।",
                "गण दोष: व्यवहारिक संघर्ष।"
              ]
            },
            {
              title: "💡 दोषों के उपाय:",
              items: [
                "नाड़ी दोष: महा मृत्युंजय मंत्र का जाप, नाड़ी दोष निवारण पूजा।",
                "भकूट दोष: विशिष्ट ग्रह शांति पूजा और मिलान ग्रहीय शक्तियां।",
                "गण दोष: भगवान शिव की पूजा या गौरी शंकर मंत्र का पाठ।"
              ]
            }
          ]
        },
        {
          heading: "📜 संख्याओं से परे: जन्मपत्री मिलान के आवश्यक तत्व",
          intro: "जबकि अष्टकूट स्कोरिंग एक अच्छा आधार प्रदान करती है, ज्योतिषी इनकी भी जांच करते हैं:",
          content: [
            "मंगलिक दोष (मंगल पीड़ा): आक्रामकता और वैवाहिक देरी का कारण बनता है।",
            "दशा संधि: ओवरलैपिंग या टकराव वाली ग्रहीय अवधियों की जांच करें।",
            "7वां घर और शुक्र: वैवाहिक आनंद और रोमांटिक क्षमता के संकेतक।",
            "चंद्र और लग्न चार्ट: भावनात्मक संगतता और मानसिक सद्भाव।",
            "नवमांश चार्ट (D-9): विवाह के लिए मुख्य चार्ट; बंधन की आध्यात्मिक, कार्मिक गहराई की जांच करता है।"
          ]
        },
        {
          heading: "❤️ मनोवैज्ञानिक और आध्यात्मिक महत्व",
          content: [
            "वैदिक मिलान सिर्फ ज्योतिष नहीं है - यह ऊर्जावान अनुनाद का मार्ग है।",
            "पिछले जन्मों से चले आ रहे कार्मिक टकरावों को रोकने में मदद करता है।",
            "केवल शारीरिक आकर्षण नहीं, बल्कि धर्म पर आधारित आध्यात्मिक मिलन को प्रोत्साहित करता है।",
            "मिलान सहानुभूति, भावनात्मक परिपक्वता और साझा विकास को बढ़ावा देता है।"
          ]
        },
        {
          heading: "🧘 वैदिक मिलान का आधुनिक अनुकूलन",
          intro: "आज की दुनिया में वैदिक मिलान को मनोवैज्ञानिक और संबंधपरक परामर्श के साथ मिश्रित देखा जाता है:",
          content: [
            "चंद्रमा और लग्न के आधार पर व्यक्तित्व को डिकोड करने के लिए एस्ट्रो-साइकोलॉजी का उपयोग किया जाता है।",
            "जोड़ों को संचार शैलियों, भावनात्मक अपेक्षाओं और संघर्ष समाधान की ओर मार्गदर्शन करने में मदद करता है।",
            "प्रेम विवाहों में सहायता करता है जहां गुण मिलान आदर्श से कम हो सकता है, लेकिन अन्य कारक मजबूत हों।"
          ]
        }
      ]
    }
  };

  const selectedContent = content[language];

  return (
    <div className="vedic-container">
      <Navbar />
      <div className="vedic-content">
        <div className="vedic-background">
          <div className="vedic-overlay">
            <div className="vedic-text-container">
              <h1 className="vedic-title">{selectedContent.title}</h1>

              <section className="vedic-section">
                <h2>{selectedContent.introduction.heading}</h2>
                <p>{selectedContent.introduction.text.split('\n\n').map((paragraph, i) => (
                  <React.Fragment key={i}>
                    {paragraph}
                    {i < selectedContent.introduction.text.split('\n\n').length - 1 && <br />}
                  </React.Fragment>
                ))}</p>
              </section>

              {selectedContent.sections.map((section, index) => (
                <section key={index} className="vedic-section">
                  <h2>{section.heading}</h2>

                  {section.intro && <p className="vedic-intro">{section.intro}</p>}

                  {section.koots && (
                    <div className="koots-container">
                      {section.koots.map((koot, kootIndex) => (
                        <div key={kootIndex} className="koot-card">
                          <h3>{koot.name}</h3>
                          <ul>
                            {koot.description.map((desc, descIndex) => (
                              <li key={descIndex}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.subsections && section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx} className="vedic-subsection">
                      <h3>{subsection.title}</h3>
                      <ul className="vedic-list">
                        {subsection.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {section.content && (
                    <ul className="vedic-list">
                      {section.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
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

export default Vedic;