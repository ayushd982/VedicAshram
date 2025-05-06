import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import './Babyname.css';

const Babyname = () => {
  // console.log('Babyname component loaded');
  const { language } = useLanguage();

  const content = {
    english: {
      title: "Baby Name Selection in Vedic Astrology",
      introduction: {
        heading: "🌟 Introduction",
        text: "In Vedic astrology, naming a baby is not just a tradition—it's a science that aligns the child's identity with cosmic energies. The baby's name carries vibrations that influence their life path, personality, and destiny. That's why astrologers use the child's birth chart (Janam Kundli) to determine the most auspicious starting syllable or sound for their name."
      },
      namkaran: {
        heading: "📅 What Is Namkaran Sanskar?",
        text: "The Namkaran Sanskar (naming ceremony) is one of the sixteen Hindu Samskaras (rites of passage) described in ancient scriptures. Traditionally, this ritual is conducted on the 11th or 12th day after birth, but it can also be done on an auspicious date later, as per astrological guidance."
      },
      importance: {
        heading: "🧬 Why Is Name Selection Important in Astrology?",
        points: [
          "Sound vibration affects human consciousness.",
          "A name aligned with the Nakshatra (birth star) enhances mental, emotional, and spiritual development.",
          "It helps reduce negative influences of planetary positions (Doshas).",
          "It strengthens benefic planetary energies (Shubha Grahas)."
        ]
      },
      factors: {
        heading: "🗂️ Key Factors Considered in Astrological Baby Name Selection",
        sections: [
          {
            subheading: "1. Birth Details",
            text: "The astrologer needs:",
            points: [
              "Date of Birth",
              "Time of Birth",
              "Place of Birth"
            ],
            additional: "These are used to create the baby's Janam Kundli (Natal Chart), which reveals planetary placements and the Moon's position."
          },
          {
            subheading: "2. Moon Sign (Rashi)",
            text: "The Moon sign (Chandra Rashi) is more important than the Sun sign in Vedic astrology. It represents the mind and emotions. The baby's Rashi determines the general temperament and is crucial for name syllable selection."
          },
          {
            subheading: "3. Nakshatra (Birth Star)",
            text: "There are 27 Nakshatras in Vedic astrology. Each Nakshatra is divided into 4 padas (quarters), and each pada has a corresponding sound or syllable.",
            table: "NakshatraPada 1Pada 2Pada 3Pada 4AshwiniChuCheChoLaBharaniLeeLuLeLoKrittikaAEUEa...............",
            additional: "The first letter of the baby's name should match the sound syllable of their Nakshatra's Pada."
          },
          {
            subheading: "4. Planetary Influences",
            text: "If the birth chart shows any malefic influences (like Mangal Dosha, Shani Dosha, or Kaal Sarp Dosha), a specific name or syllable might be chosen to counteract or neutralize negative effects."
          },
          {
            subheading: "5. Numerology (Optional)",
            text: "Some astrologers also use Chaldean or Vedic numerology to find a name whose numerical value aligns with favorable numbers in the chart, especially the Life Path Number and Destiny Number."
          }
        ]
      },
      example: {
        heading: "📝 Example of Baby Name Selection (With Answer)",
        text: "Let's walk through a real-world example:",
        details: {
          subheading: "🧒 Baby's Birth Details",
          points: [
            "Date of Birth: 10th March 2025",
            "Time: 3:25 AM",
            "Place: Delhi, India"
          ]
        },
        process: {
          subheading: "🧾 Step-by-Step Process",
          steps: [
            {
              step: "1. Generate the Janam Kundli",
              points: [
                "Moon Sign: Mithuna (Gemini)",
                "Nakshatra: Ardra",
                "Pada: 2nd Pada"
              ]
            },
            {
              step: "2. Find the Corresponding Name Syllable",
              text: "From the Nakshatra table:",
              points: [
                "Ardra 2nd Pada corresponds to the syllable \"Ku\""
              ]
            },
            {
              step: "3. Choose Names Starting with \"Ku\"",
              text: "Based on modern and traditional names:",
              points: [
                "Kunal",
                "Kushal",
                "Kuber",
                "Kuhu (for a girl)"
              ]
            }
          ],
          recommendation: {
            subheading: "✅ Final Recommendation:",
            points: [
              "For a boy: Kushal Sharma",
              "For a girl: Kuhu Sharma"
            ],
            text: "These names match the child's Nakshatra and resonate with positive vibrations of Mercury, the ruling planet of Gemini."
          }
        }
      },
      muhurat: {
        heading: "🪔 Auspicious Muhurat for Namkaran",
        avoid: {
          text: "The ideal dates are calculated by avoiding:",
          points: [
            "Tithis like Amavasya (No Moon) or Chaturdashi",
            "Inauspicious Yogas like Rahu Kalam or Gulik Kalam"
          ]
        },
        recommended: {
          text: "Recommended:",
          points: [
            "Choose Monday, Wednesday, Thursday, or Friday",
            "During Shubh Nakshatras like Rohini, Hasta, or Pushya"
          ]
        }
      },
      spiritual: {
        heading: "🧘‍♂️ Spiritual Importance",
        text: "A name aligned with Vedic astrology:",
        points: [
          "Enhances spiritual growth",
          "Balances karmic patterns",
          "Helps fulfill life's purpose (Dharma)"
        ]
      },
      remedies: {
        heading: "🧿 Remedies If Baby Is Already Named Incorrectly",
        text: "If a name was chosen without astrology, remedies include:",
        points: [
          "Using the astrologically correct name during religious rituals",
          "Whispering the correct syllable name in the baby's ear",
          "Adding a middle name based on Nakshatra for energetic correction"
        ]
      },
      modern: {
        heading: "🌈 Modern Integration",
        text: "Today, many parents:",
        points: [
          "Choose trendy names that fit Vedic syllables",
          "Blend astrology with numerology for maximum benefit",
          "Use online baby name tools powered by astrology engines"
        ]
      }
    },
    hindi: {
      title: "वैदिक ज्योतिष में बच्चे का नाम चयन",
      introduction: {
        heading: "🌟 परिचय",
        text: "वैदिक ज्योतिष में, बच्चे का नामकरण केवल एक परंपरा नहीं है—यह एक विज्ञान है जो बच्चे की पहचान को ब्रह्मांडीय ऊर्जाओं के साथ संरेखित करता है। बच्चे का नाम कंपन ले जाता है जो उनके जीवन पथ, व्यक्तित्व और भाग्य को प्रभावित करता है। इसलिए ज्योतिषी बच्चे के जन्म कुंडली (जन्म कुंडली) का उपयोग उनके नाम के लिए सबसे शुभ प्रारंभिक अक्षर या ध्वनि निर्धारित करने के लिए करते हैं।"
      },
      namkaran: {
        heading: "📅 नामकरण संस्कार क्या है?",
        text: "नामकरण संस्कार (नामकरण समारोह) प्राचीन शास्त्रों में वर्णित सोलह हिंदू संस्कारों (जीवन के अनुष्ठान) में से एक है। परंपरागत रूप से, यह अनुष्ठान जन्म के 11वें या 12वें दिन किया जाता है, लेकिन ज्योतिषीय मार्गदर्शन के अनुसार, यह बाद में एक शुभ तिथि पर भी किया जा सकता है।"
      },
      importance: {
        heading: "🧬 ज्योतिष में नाम चयन क्यों महत्वपूर्ण है?",
        points: [
          "ध्वनि कंपन मानव चेतना को प्रभावित करता है।",
          "नक्षत्र (जन्म तारा) के साथ संरेखित नाम मानसिक, भावनात्मक और आध्यात्मिक विकास को बढ़ाता है।",
          "यह ग्रहों की स्थिति (दोष) के नकारात्मक प्रभावों को कम करने में मदद करता है।",
          "यह शुभ ग्रहीय ऊर्जाओं (शुभ ग्रह) को मजबूत करता है।"
        ]
      },
      factors: {
        heading: "🗂️ ज्योतिषीय बच्चे के नाम चयन में विचार किए जाने वाले प्रमुख कारक",
        sections: [
          {
            subheading: "1. जन्म विवरण",
            text: "ज्योतिषी को आवश्यकता है:",
            points: [
              "जन्म तिथि",
              "जन्म का समय",
              "जन्म स्थान"
            ],
            additional: "इनका उपयोग बच्चे की जन्म कुंडली (जन्म कुंडली) बनाने के लिए किया जाता है, जो ग्रहों की स्थिति और चंद्रमा की स्थिति को प्रकट करता है।"
          },
          {
            subheading: "2. चंद्र राशि (राशि)",
            text: "वैदिक ज्योतिष में चंद्र राशि (चंद्र राशि) सूर्य राशि से अधिक महत्वपूर्ण है। यह मन और भावनाओं का प्रतिनिधित्व करता है। बच्चे की राशि सामान्य स्वभाव निर्धारित करती है और नाम अक्षर चयन के लिए महत्वपूर्ण है।"
          },
          {
            subheading: "3. नक्षत्र (जन्म तारा)",
            text: "वैदिक ज्योतिष में 27 नक्षत्र हैं। प्रत्येक नक्षत्र को 4 पदों (चौथाई) में विभाजित किया गया है, और प्रत्येक पद का एक संबंधित ध्वनि या अक्षर है।",
            table: "नक्षत्रपद 1पद 2पद 3पद 4अश्विनीचुचेचोलाभरणीलीलूलेलोकृत्तिकाएईऊए...............",
            additional: "बच्चे के नाम का पहला अक्षर उनके नक्षत्र के पद के ध्वनि अक्षर से मेल खाना चाहिए।"
          },
          {
            subheading: "4. ग्रहीय प्रभाव",
            text: "यदि जन्म कुंडली में कोई अशुभ प्रभाव (जैसे मंगल दोष, शनि दोष, या काल सर्प दोष) दिखाई देता है, तो नकारात्मक प्रभावों का मुकाबला करने या उन्हें निष्प्रभावित करने के लिए एक विशिष्ट नाम या अक्षर चुना जा सकता है।"
          },
          {
            subheading: "5. अंकशास्त्र (वैकल्पिक)",
            text: "कुछ ज्योतिषी कैल्डियन या वैदिक अंकशास्त्र का भी उपयोग करते हैं ताकि ऐसा नाम मिल सके जिसका संख्यात्मक मूल्य कुंडली में अनुकूल संख्याओं के साथ संरेखित हो, विशेष रूप से जीवन पथ संख्या और भाग्य संख्या।"
          }
        ]
      },
      example: {
        heading: "📝 बच्चे के नाम चयन का उदाहरण (उत्तर के साथ)",
        text: "आइए एक वास्तविक उदाहरण के माध्यम से चलें:",
        details: {
          subheading: "🧒 बच्चे का जन्म विवरण",
          points: [
            "जन्म तिथि: 10 मार्च 2025",
            "समय: 3:25 AM",
            "स्थान: दिल्ली, भारत"
          ]
        },
        process: {
          subheading: "🧾 चरण-दर-चरण प्रक्रिया",
          steps: [
            {
              step: "1. जन्म कुंडली उत्पन्न करें",
              points: [
                "चंद्र राशि: मिथुन (जेमिनी)",
                "नक्षत्र: आर्द्रा",
                "पद: 2रा पद"
              ]
            },
            {
              step: "2. संबंधित नाम अक्षर खोजें",
              text: "नक्षत्र तालिका से:",
              points: [
                "आर्द्रा 2रा पद अक्षर \"कु\" से संबंधित है"
              ]
            },
            {
              step: "3. \"कु\" से शुरू होने वाले नाम चुनें",
              text: "आधुनिक और पारंपरिक नामों के आधार पर:",
              points: [
                "कुणाल",
                "कुशल",
                "कुबेर",
                "कुहू (लड़की के लिए)"
              ]
            }
          ],
          recommendation: {
            subheading: "✅ अंतिम अनुशंसा:",
            points: [
              "लड़के के लिए: कुशल शर्मा",
              "लड़की के लिए: कुहू शर्मा"
            ],
            text: "ये नाम बच्चे के नक्षत्र से मेल खाते हैं और मिथुन के शासक ग्रह बुध के सकारात्मक कंपनों के साथ प्रतिध्वनित होते हैं।"
          }
        }
      },
      muhurat: {
        heading: "🪔 नामकरण के लिए शुभ मुहूर्त",
        avoid: {
          text: "आदर्श तिथियां इनसे बचकर गणना की जाती हैं:",
          points: [
            "अमावस्या (नो मून) या चतुर्दशी जैसी तिथियां",
            "राहु काल या गुलिक काल जैसे अशुभ योग"
          ]
        },
        recommended: {
          text: "अनुशंसित:",
          points: [
            "सोमवार, बुधवार, गुरुवार या शुक्रवार चुनें",
            "रोहिणी, हस्त या पुष्य जैसे शुभ नक्षत्रों के दौरान"
          ]
        }
      },
      spiritual: {
        heading: "🧘‍♂️ आध्यात्मिक महत्व",
        text: "वैदिक ज्योतिष के साथ संरेखित नाम:",
        points: [
          "आध्यात्मिक विकास को बढ़ाता है",
          "कार्मिक पैटर्न को संतुलित करता है",
          "जीवन के उद्देश्य (धर्म) को पूरा करने में मदद करता है"
        ]
      },
      remedies: {
        heading: "🧿 उपाय यदि बच्चे का नाम पहले से ही गलत रखा गया है",
        text: "यदि ज्योतिष के बिना नाम चुना गया था, तो उपायों में शामिल हैं:",
        points: [
          "धार्मिक अनुष्ठानों के दौरान ज्योतिषीय रूप से सही नाम का उपयोग करना",
          "बच्चे के कान में सही अक्षर नाम फुसफुसाना",
          "ऊर्जावान सुधार के लिए नक्षत्र के आधार पर मध्य नाम जोड़ना"
        ]
      },
      modern: {
        heading: "🌈 आधुनिक एकीकरण",
        text: "आज, कई माता-पिता:",
        points: [
          "वैदिक अक्षरों के अनुरूप ट्रेंडी नाम चुनते हैं",
          "अधिकतम लाभ के लिए ज्योतिष के साथ अंकशास्त्र को मिलाते हैं",
          "ज्योतिष इंजन द्वारा संचालित ऑनलाइन बेबी नेम टूल का उपयोग करते हैं"
        ]
      }
    }
  };

  const selectedContent = content[language];

  return (
    <div className="babyname-container">
      <Navbar />
      <div className="babyname-content">
        <div className="babyname-background">
          <div className="babyname-overlay">
            <div className="babyname-text-container">
              <h1 className="babyname-title">{selectedContent.title}</h1>

              <section className="babyname-section">
                <h2>{selectedContent.introduction.heading}</h2>
                <p>{selectedContent.introduction.text}</p>
              </section>

              <section className="babyname-section">
                <h2>{selectedContent.namkaran.heading}</h2>
                <p>{selectedContent.namkaran.text}</p>
              </section>

              <section className="babyname-section">
                <h2>{selectedContent.importance.heading}</h2>
                <ul>
                  {selectedContent.importance.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </section>

              <section className="babyname-section">
                <h2>{selectedContent.factors.heading}</h2>
                {selectedContent.factors.sections.map((section, index) => (
                  <div key={index} className="babyname-subsection">
                    <h3>{section.subheading}</h3>
                    {section.text && <p>{section.text}</p>}
                    {section.points && (
                      <ul>
                        {section.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                    {section.table && (
                      <div className="babyname-table">
                        <pre>{section.table}</pre>
                      </div>
                    )}
                    {section.additional && <p>{section.additional}</p>}
                  </div>
                ))}
              </section>

              <section className="babyname-section">
                <h2>{selectedContent.example.heading}</h2>
                <p>{selectedContent.example.text}</p>

                <div className="babyname-subsection">
                  <h3>{selectedContent.example.details.subheading}</h3>
                  <ul>
                    {selectedContent.example.details.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="babyname-subsection">
                  <h3>{selectedContent.example.process.subheading}</h3>
                  {selectedContent.example.process.steps.map((step, index) => (
                    <div key={index} className="babyname-step">
                      <h4>{step.step}</h4>
                      {step.text && <p>{step.text}</p>}
                      <ul>
                        {step.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="babyname-recommendation">
                    <h4>{selectedContent.example.process.recommendation.subheading}</h4>
                    <ul>
                      {selectedContent.example.process.recommendation.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <p>{selectedContent.example.process.recommendation.text}</p>
                  </div>
                </div>
              </section>

              <section className="babyname-section">
                <h2>{selectedContent.muhurat.heading}</h2>
                <div className="babyname-subsection">
                  <p>{selectedContent.muhurat.avoid.text}</p>
                  <ul>
                    {selectedContent.muhurat.avoid.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="babyname-subsection">
                  <p>{selectedContent.muhurat.recommended.text}</p>
                  <ul>
                    {selectedContent.muhurat.recommended.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="babyname-section">
                <h2>{selectedContent.spiritual.heading}</h2>
                <p>{selectedContent.spiritual.text}</p>
                <ul>
                  {selectedContent.spiritual.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </section>

              <section className="babyname-section">
                <h2>{selectedContent.remedies.heading}</h2>
                <p>{selectedContent.remedies.text}</p>
                <ul>
                  {selectedContent.remedies.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </section>

              <section className="babyname-section">
                <h2>{selectedContent.modern.heading}</h2>
                <p>{selectedContent.modern.text}</p>
                <ul>
                  {selectedContent.modern.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Babyname;
