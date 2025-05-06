import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import './Birthtime.css';

const Birthtime = () => {
  console.log('Birthtime component loaded');
  const { language } = useLanguage();

  const content = {
    english: {
      title: "Birth Time Selection in Vedic Astrology (Shubh Muhurat)",
      subtitle: "Complete Guide",
      introduction: {
        heading: "🌟 Introduction",
        text: "In Vedic astrology, selecting the right birth time (Shubh Muhurat) for a child through Cesarean birth (C-section) or medical planning is a sacred process. This isn't just about choosing a convenient time—it's about creating a cosmic blueprint that aligns the child's destiny with the most auspicious planetary influences. Just like a farmer waits for the perfect season to sow seeds, birth time selection ensures the soul enters life when the planetary energies are most supportive of happiness, health, intelligence, and spiritual growth."
      },
      what: {
        heading: "🔍 What Is Birth Time Selection?",
        text: "Birth Time Selection, also known as Janma Muhurat, involves choosing an exact date and time for birth that will result in a favorable Janam Kundli (natal chart). This is especially used in planned deliveries, such as C-sections or induced labor."
      },
      why: {
        heading: "🧿 Why Is It Done?",
        points: [
          "To avoid malefic doshas (Mangal Dosha, Kaal Sarp, Pitra Dosha, etc.)",
          "To ensure a strong Ascendant (Lagna) and benefic planetary placements",
          "To support life goals like success, health, career, marriage, and spiritual fulfillment",
          "To give the child a head start with favorable yogas (planetary combinations)"
        ]
      },
      principles: {
        heading: "📜 Astrological Principles Behind Birth Time Selection",
        sections: [
          {
            subheading: "1. Lagna (Ascendant) and Lagna Lord",
            text: "The Lagna is the rising sign at the moment of birth. It defines physical health, personality, and life direction. A strong Lagna and well-placed Lagna Lord are critical.",
            example: "Example: A Leo Lagna with Sun (Lagna lord) in the 10th house gives a powerful leadership potential."
          },
          {
            subheading: "2. Moon Sign and Nakshatra",
            text: "The Moon governs mind, emotions, and overall wellbeing. The Moon should be in a benefic sign, free from affliction.",
            points: [
              "Auspicious Nakshatras include: Rohini, Anuradha, Hasta, Pushya, Shravana, Revati"
            ]
          },
          {
            subheading: "3. Avoidance of Malefic Doshas",
            points: [
              "No Kaal Sarp Yoga (All planets between Rahu and Ketu)",
              "No Gandanta (when Moon is at the junction of water and fire signs)",
              "No Shani-Chandra Vish Yoga (Saturn-Moon conjunction)",
              "Avoid retrograde or combust benefic planets"
            ]
          },
          {
            subheading: "4. Planetary Yogas to Look For",
            table: {
              headers: ["Yoga Name", "Benefit"],
              rows: [
                ["Budhaditya Yoga", "Intelligence and leadership"],
                ["Gajakesari Yoga", "Wealth, wisdom, good fortune"],
                ["Raja Yoga", "Authority, power, success"],
                ["Dharma-Karma Adhipati Yoga", "Career and purpose alignment"]
              ]
            }
          },
          {
            subheading: "5. Day and Tithi Selection",
            points: [
              "Prefer Monday, Wednesday, Thursday, or Friday",
              "Choose Shukla Paksha (waxing moon phase)",
              "Avoid Amavasya, Chaturdashi, and Ashtami"
            ]
          }
        ]
      },
      example: {
        heading: "🧾 Sample Birth Time Selection Example (With Answer)",
        text: "Let's go through a real scenario:",
        details: {
          subheading: "👶 Baby is to be delivered in:",
          points: [
            "City: Mumbai, India",
            "Date Window: 10th to 14th May 2025"
          ]
        },
        analysis: {
          subheading: "🔍 After analyzing Panchang & Planetary Positions:",
          result: {
            subheading: "✅ Ideal Muhurat:",
            points: [
              "Date: 12th May 2025",
              "Time: 10:22 AM IST",
              "Lagna: Virgo Ascendant",
              "Moon: In Rohini Nakshatra, Taurus sign (exalted)",
              "Planetary Yogas Present: Gajakesari Yoga, Budhaditya Yoga",
              "No Malefic Dosha Present"
            ]
          },
          benefits: {
            subheading: "📜 Resulting Chart Benefits:",
            points: [
              "Sharp intellect, financial stability, spiritual inclination",
              "Strong potential in education or administration",
              "Emotional balance and strong immunity"
            ]
          }
        }
      },
      avoid: {
        heading: "❌ What to Avoid in Birth Time Selection",
        table: {
          headers: ["Factor", "Why Avoid It"],
          rows: [
            ["Rahu Kaal", "Brings confusion, illusion"],
            ["Shani-Moon Conjunction", "Causes depression, delays"],
            ["Kaal Sarp Yoga", "Creates struggles and karmic hurdles"],
            ["Combust Lagna Lord", "Weakens the overall life chart"],
            ["Retrograde Jupiter", "Limits wisdom and spiritual growth"]
          ]
        }
      }
    },
    hindi: {
      title: "वैदिक ज्योतिष में जन्म समय चयन (शुभ मुहूर्त)",
      subtitle: "संपूर्ण मार्गदर्शिका",
      introduction: {
        heading: "🌟 परिचय",
        text: "वैदिक ज्योतिष में, सिजेरियन जन्म (सी-सेक्शन) या चिकित्सा योजना के माध्यम से बच्चे के लिए सही जन्म समय (शुभ मुहूर्त) का चयन एक पवित्र प्रक्रिया है। यह केवल एक सुविधाजनक समय चुनने के बारे में नहीं है—यह एक ब्रह्मांडीय ब्लूप्रिंट बनाने के बारे में है जो बच्चे के भाग्य को सबसे शुभ ग्रहीय प्रभावों के साथ संरेखित करता है। जैसे किसान बीज बोने के लिए सही मौसम का इंतजार करता है, जन्म समय चयन यह सुनिश्चित करता है कि आत्मा जीवन में तब प्रवेश करे जब ग्रहीय ऊर्जाएँ खुशी, स्वास्थ्य, बुद्धि और आध्यात्मिक विकास के लिए सबसे अधिक सहायक हों।"
      },
      what: {
        heading: "🔍 जन्म समय चयन क्या है?",
        text: "जन्म समय चयन, जिसे जन्म मुहूर्त के रूप में भी जाना जाता है, जन्म के लिए एक सटीक तिथि और समय चुनने की प्रक्रिया है जिससे अनुकूल जन्म कुंडली (जन्म कुंडली) बनेगी। इसका उपयोग विशेष रूप से नियोजित प्रसव, जैसे सी-सेक्शन या प्रेरित प्रसव में किया जाता है।"
      },
      why: {
        heading: "🧿 यह क्यों किया जाता है?",
        points: [
          "अशुभ दोषों से बचने के लिए (मंगल दोष, काल सर्प, पितृ दोष, आदि)",
          "मजबूत लग्न (लग्न) और शुभ ग्रहीय स्थिति सुनिश्चित करने के लिए",
          "सफलता, स्वास्थ्य, करियर, विवाह और आध्यात्मिक पूर्णता जैसे जीवन लक्ष्यों का समर्थन करने के लिए",
          "अनुकूल योगों (ग्रहीय संयोजनों) के साथ बच्चे को एक अच्छी शुरुआत देने के लिए"
        ]
      },
      principles: {
        heading: "📜 जन्म समय चयन के पीछे ज्योतिषीय सिद्धांत",
        sections: [
          {
            subheading: "1. लग्न (लग्न) और लग्न स्वामी",
            text: "लग्न जन्म के समय उदय होने वाली राशि है। यह शारीरिक स्वास्थ्य, व्यक्तित्व और जीवन दिशा को परिभाषित करता है। एक मजबूत लग्न और अच्छी तरह से स्थित लग्न स्वामी महत्वपूर्ण हैं।",
            example: "उदाहरण: 10वें भाव में सूर्य (लग्न स्वामी) के साथ सिंह लग्न एक शक्तिशाली नेतृत्व क्षमता देता है।"
          },
          {
            subheading: "2. चंद्र राशि और नक्षत्र",
            text: "चंद्रमा मन, भावनाओं और समग्र कल्याण को नियंत्रित करता है। चंद्रमा को एक शुभ राशि में होना चाहिए, पीड़ा से मुक्त।",
            points: [
              "शुभ नक्षत्रों में शामिल हैं: रोहिणी, अनुराधा, हस्त, पुष्य, श्रवण, रेवती"
            ]
          },
          {
            subheading: "3. अशुभ दोषों से बचाव",
            points: [
              "कोई काल सर्प योग नहीं (राहु और केतु के बीच सभी ग्रह)",
              "कोई गंडांत नहीं (जब चंद्रमा जल और अग्नि राशियों के संधि पर हो)",
              "कोई शनि-चंद्र विष योग नहीं (शनि-चंद्र संयोग)",
              "प्रतिगामी या अस्त शुभ ग्रहों से बचें"
            ]
          },
          {
            subheading: "4. देखने के लिए ग्रहीय योग",
            table: {
              headers: ["योग का नाम", "लाभ"],
              rows: [
                ["बुधादित्य योग", "बुद्धि और नेतृत्व"],
                ["गजकेसरी योग", "धन, ज्ञान, सौभाग्य"],
                ["राज योग", "अधिकार, शक्ति, सफलता"],
                ["धर्म-कर्म अधिपति योग", "करियर और उद्देश्य संरेखण"]
              ]
            }
          },
          {
            subheading: "5. दिन और तिथि चयन",
            points: [
              "सोमवार, बुधवार, गुरुवार या शुक्रवार को प्राथमिकता दें",
              "शुक्ल पक्ष (बढ़ते चंद्रमा का चरण) चुनें",
              "अमावस्या, चतुर्दशी और अष्टमी से बचें"
            ]
          }
        ]
      },
      example: {
        heading: "🧾 जन्म समय चयन का नमूना उदाहरण (उत्तर के साथ)",
        text: "आइए एक वास्तविक परिदृश्य पर चलते हैं:",
        details: {
          subheading: "👶 बच्चे को प्रसव किया जाना है:",
          points: [
            "शहर: मुंबई, भारत",
            "तिथि विंडो: 10 से 14 मई 2025"
          ]
        },
        analysis: {
          subheading: "🔍 पंचांग और ग्रहीय स्थितियों का विश्लेषण करने के बाद:",
          result: {
            subheading: "✅ आदर्श मुहूर्त:",
            points: [
              "तिथि: 12 मई 2025",
              "समय: सुबह 10:22 IST",
              "लग्न: कन्या लग्न",
              "चंद्रमा: रोहिणी नक्षत्र, वृषभ राशि (उच्च) में",
              "मौजूद ग्रहीय योग: गजकेसरी योग, बुधादित्य योग",
              "कोई अशुभ दोष मौजूद नहीं"
            ]
          },
          benefits: {
            subheading: "📜 परिणामी कुंडली के लाभ:",
            points: [
              "तीक्ष्ण बुद्धि, वित्तीय स्थिरता, आध्यात्मिक झुकाव",
              "शिक्षा या प्रशासन में मजबूत क्षमता",
              "भावनात्मक संतुलन और मजबूत प्रतिरक्षा"
            ]
          }
        }
      },
      avoid: {
        heading: "❌ जन्म समय चयन में क्या न करें",
        table: {
          headers: ["कारक", "इससे क्यों बचें"],
          rows: [
            ["राहु काल", "भ्रम, भ्रांति लाता है"],
            ["शनि-चंद्र संयोग", "अवसाद, देरी का कारण बनता है"],
            ["काल सर्प योग", "संघर्ष और कार्मिक बाधाएं पैदा करता है"],
            ["अस्त लग्न स्वामी", "समग्र जीवन कुंडली को कमजोर करता है"],
            ["प्रतिगामी बृहस्पति", "ज्ञान और आध्यात्मिक विकास को सीमित करता है"]
          ]
        }
      }
    }
  };

  const selectedContent = content[language];

  return (
    <div className="birthtime-container">
      <Navbar />
      <div className="birthtime-content">
        <div className="birthtime-background">
          <div className="birthtime-overlay">
            <div className="birthtime-text-container">
              <h1 className="birthtime-title">
                {selectedContent.title}
                <span className="birthtime-subtitle"> – {selectedContent.subtitle}</span>
              </h1>

              <section className="birthtime-section">
                <h2>{selectedContent.introduction.heading}</h2>
                <p>{selectedContent.introduction.text}</p>
              </section>

              <section className="birthtime-section">
                <h2>{selectedContent.what.heading}</h2>
                <p>{selectedContent.what.text}</p>
              </section>

              <section className="birthtime-section">
                <h2>{selectedContent.why.heading}</h2>
                <ul>
                  {selectedContent.why.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </section>

              <section className="birthtime-section">
                <h2>{selectedContent.principles.heading}</h2>
                {selectedContent.principles.sections.map((section, index) => (
                  <div key={index} className="birthtime-subsection">
                    <h3>{section.subheading}</h3>
                    {section.text && <p>{section.text}</p>}
                    {section.example && <p className="birthtime-example">{section.example}</p>}
                    {section.points && (
                      <ul>
                        {section.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                    {section.table && (
                      <div className="birthtime-table-container">
                        <table className="birthtime-table">
                          <thead>
                            <tr>
                              {section.table.headers.map((header, idx) => (
                                <th key={idx}>{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rowIdx) => (
                              <tr key={rowIdx}>
                                {row.map((cell, cellIdx) => (
                                  <td key={cellIdx}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </section>

              <section className="birthtime-section">
                <h2>{selectedContent.example.heading}</h2>
                <p>{selectedContent.example.text}</p>

                <div className="birthtime-subsection">
                  <h3>{selectedContent.example.details.subheading}</h3>
                  <ul>
                    {selectedContent.example.details.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="birthtime-subsection">
                  <h3>{selectedContent.example.analysis.subheading}</h3>

                  <div className="birthtime-result">
                    <h4>{selectedContent.example.analysis.result.subheading}</h4>
                    <ul>
                      {selectedContent.example.analysis.result.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="birthtime-benefits">
                    <h4>{selectedContent.example.analysis.benefits.subheading}</h4>
                    <ul>
                      {selectedContent.example.analysis.benefits.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="birthtime-section">
                <h2>{selectedContent.avoid.heading}</h2>
                <div className="birthtime-table-container">
                  <table className="birthtime-table">
                    <thead>
                      <tr>
                        {selectedContent.avoid.table.headers.map((header, idx) => (
                          <th key={idx}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {selectedContent.avoid.table.rows.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Birthtime;