import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import './ChildAstro.css';

const ChildAstro = () => {
  console.log('ChildAstro component loaded');
  const { language } = useLanguage();

  const content = {
    english: {
      title: "🧒🔮 Child Astrology Consultation – A Complete Guide for Parents",
      introduction: {
        heading: "🌟 Introduction",
        text: "Every child is born with a unique celestial fingerprint, encoded in their Janam Kundli (natal chart). A Child Astrology Consultation helps parents understand their child's potential, emotional needs, learning style, health tendencies, and life path based on planetary positions at birth. This is not about predicting doom or luck—it's about empowering parents with astrological insights to support their child's holistic growth."
      },
      what: {
        heading: "🔍 What Is a Child Astrology Consultation?",
        text: "A Child Astrology Consultation involves detailed analysis of the child's birth chart (Kundli) to:",
        points: [
          "Understand personality traits",
          "Discover hidden talents and weaknesses",
          "Suggest the right career path",
          "Identify karmic patterns or past-life imprints",
          "Provide remedies or guidance for health, education, and emotional development"
        ],
        common: {
          text: "It's commonly sought after during:",
          stages: [
            "Early childhood (0–5 years)",
            "School age (6–14 years)",
            "Teen years (15–18 years)"
          ]
        }
      },
      reveal: {
        heading: "📜 What Does a Child's Kundli Reveal?",
        points: [
          {
            title: "1. Lagna (Ascendant)",
            description: "Defines personality, health, and physical constitution."
          },
          {
            title: "2. Moon Sign (Chandra Rashi)",
            description: "Reveals emotional behavior, habits, and mental development."
          },
          {
            title: "3. 5th House (House of Intelligence)",
            description: "Indicates creativity, learning ability, memory, and cognitive skills."
          },
          {
            title: "4. 9th House",
            description: "Represents destiny, spiritual tendencies, luck, and values passed from parents."
          },
          {
            title: "5. Planetary Strengths & Yogas",
            description: "Identifies powerful combinations like:",
            subpoints: [
              "Buddhi Yoga – sharp intellect",
              "Raja Yoga – success in leadership or authority",
              "Gajakesari Yoga – wisdom and popularity"
            ]
          }
        ]
      },
      sample: {
        heading: "🧾 Sample Child Astrology Consultation (With Answer)",
        details: {
          heading: "👶 Child's Birth Details:",
          points: [
            "Date of Birth: 4th July 2020",
            "Time: 7:25 AM",
            "Place: Pune, Maharashtra"
          ]
        },
        analysis: {
          heading: "🪐 Key Analysis:",
          table: {
            headers: ["Feature", "Observation"],
            rows: [
              ["Lagna", "Cancer Ascendant – emotional, intuitive, nurturing"],
              ["Moon Sign", "Taurus – stable mind, music/artistic talent"],
              ["5th House", "Virgo – analytical mind, sharp memory"],
              ["Yogas", "Budhaditya Yoga, Chandra-Mangal Yoga"],
              ["Karmic Clues", "Past life tendencies toward education and healing"]
            ]
          }
        },
        insights: {
          heading: "🎯 Insights:",
          points: [
            "Child may excel in education, research, or music.",
            "Needs emotional stability and nurturing.",
            "Avoid overly harsh discipline; use positive reinforcement."
          ]
        },
        remedies: {
          heading: "🛡️ Remedies Suggested:",
          points: [
            "Wear silver chain with Moon Yantra (after age 5)",
            "Chant or play \"Om Chandraya Namah\" on Mondays",
            "Create a calm bedtime routine to align Moon energies"
          ]
        }
      },
      learn: {
        heading: "👶 What Can Parents Learn from a Child Astrology Report?",
        table: {
          headers: ["Focus Area", "Guidance Provided"],
          rows: [
            ["Personality", "Temperament, behavior style, leadership vs. introversion"],
            ["Education", "Memory, learning pace, suitable subjects"],
            ["Health", "Immunity, chronic issues, emotional stress triggers"],
            ["Career", "Natural talents and future profession alignment"],
            ["Spiritual Guidance", "Inclination toward spiritual growth or detachment"],
            ["Parental Role", "How to emotionally and karmically support the child"]
          ]
        }
      }
    },
    hindi: {
      title: "🧒🔮 बाल ज्योतिष परामर्श – माता-पिता के लिए एक पूर्ण मार्गदर्शिका",
      introduction: {
        heading: "🌟 परिचय",
        text: "हर बच्चा एक अनूठी आकाशीय फिंगरप्रिंट के साथ पैदा होता है, जो उनकी जन्म कुंडली में एनकोडेड होता है। बाल ज्योतिष परामर्श माता-पिता को जन्म के समय ग्रहों की स्थिति के आधार पर अपने बच्चे की क्षमता, भावनात्मक जरूरतों, सीखने की शैली, स्वास्थ्य प्रवृत्तियों और जीवन पथ को समझने में मदद करता है। यह दुर्भाग्य या भाग्य की भविष्यवाणी के बारे में नहीं है—यह माता-पिता को अपने बच्चे के समग्र विकास का समर्थन करने के लिए ज्योतिषीय अंतर्दृष्टि के साथ सशक्त बनाने के बारे में है।"
      },
      what: {
        heading: "🔍 बाल ज्योतिष परामर्श क्या है?",
        text: "बाल ज्योतिष परामर्श में बच्चे की जन्म कुंडली का विस्तृत विश्लेषण शामिल है:",
        points: [
          "व्यक्तित्व लक्षणों को समझना",
          "छिपी हुई प्रतिभाओं और कमजोरियों की खोज करना",
          "सही करियर पथ का सुझाव देना",
          "कार्मिक पैटर्न या पिछले जन्म के प्रभावों की पहचान करना",
          "स्वास्थ्य, शिक्षा और भावनात्मक विकास के लिए उपाय या मार्गदर्शन प्रदान करना"
        ],
        common: {
          text: "यह आमतौर पर इन अवस्थाओं के दौरान मांगा जाता है:",
          stages: [
            "प्रारंभिक बचपन (0-5 वर्ष)",
            "स्कूली उम्र (6-14 वर्ष)",
            "किशोरावस्था (15-18 वर्ष)"
          ]
        }
      },
      reveal: {
        heading: "📜 बच्चे की कुंडली क्या दर्शाती है?",
        points: [
          {
            title: "1. लग्न (लग्न)",
            description: "व्यक्तित्व, स्वास्थ्य और शारीरिक संविधान को परिभाषित करता है।"
          },
          {
            title: "2. चंद्र राशि (चंद्र राशि)",
            description: "भावनात्मक व्यवहार, आदतों और मानसिक विकास को प्रकट करता है।"
          },
          {
            title: "3. 5वां भाव (बुद्धि का घर)",
            description: "रचनात्मकता, सीखने की क्षमता, स्मृति और संज्ञानात्मक कौशल को इंगित करता है।"
          },
          {
            title: "4. 9वां भाव",
            description: "भाग्य, आध्यात्मिक प्रवृत्तियों, भाग्य और माता-पिता से पारित मूल्यों का प्रतिनिधित्व करता है।"
          },
          {
            title: "5. ग्रहीय शक्तियां और योग",
            description: "शक्तिशाली संयोजनों की पहचान करता है जैसे:",
            subpoints: [
              "बुद्धि योग – तीक्ष्ण बुद्धि",
              "राज योग – नेतृत्व या अधिकार में सफलता",
              "गजकेसरी योग – ज्ञान और लोकप्रियता"
            ]
          }
        ]
      },
      sample: {
        heading: "🧾 नमूना बाल ज्योतिष परामर्श (उत्तर के साथ)",
        details: {
          heading: "👶 बच्चे का जन्म विवरण:",
          points: [
            "जन्म तिथि: 4 जुलाई 2020",
            "समय: सुबह 7:25",
            "स्थान: पुणे, महाराष्ट्र"
          ]
        },
        analysis: {
          heading: "🪐 प्रमुख विश्लेषण:",
          table: {
            headers: ["विशेषता", "अवलोकन"],
            rows: [
              ["लग्न", "कर्क लग्न – भावनात्मक, अंतर्ज्ञानी, पोषण"],
              ["चंद्र राशि", "वृषभ – स्थिर मन, संगीत/कलात्मक प्रतिभा"],
              ["5वां भाव", "कन्या – विश्लेषणात्मक मन, तीक्ष्ण स्मृति"],
              ["योग", "बुधादित्य योग, चंद्र-मंगल योग"],
              ["कार्मिक संकेत", "शिक्षा और चिकित्सा की ओर पिछले जन्म की प्रवृत्तियां"]
            ]
          }
        },
        insights: {
          heading: "🎯 अंतर्दृष्टि:",
          points: [
            "बच्चा शिक्षा, अनुसंधान या संगीत में उत्कृष्ट हो सकता है।",
            "भावनात्मक स्थिरता और पोषण की आवश्यकता है।",
            "अत्यधिक कठोर अनुशासन से बचें; सकारात्मक प्रोत्साहन का उपयोग करें।"
          ]
        },
        remedies: {
          heading: "🛡️ सुझाए गए उपाय:",
          points: [
            "चांदी की चेन पहनें जिसमें चंद्र यंत्र हो (5 साल की उम्र के बाद)",
            "सोमवार को \"ओम चंद्राय नमः\" का जाप करें या बजाएं",
            "चंद्र ऊर्जाओं को संरेखित करने के लिए एक शांत सोने का नियम बनाएं"
          ]
        }
      },
      learn: {
        heading: "👶 माता-पिता बाल ज्योतिष रिपोर्ट से क्या सीख सकते हैं?",
        table: {
          headers: ["फोकस क्षेत्र", "प्रदान किया गया मार्गदर्शन"],
          rows: [
            ["व्यक्तित्व", "स्वभाव, व्यवहार शैली, नेतृत्व बनाम अंतर्मुखता"],
            ["शिक्षा", "स्मृति, सीखने की गति, उपयुक्त विषय"],
            ["स्वास्थ्य", "प्रतिरक्षा, पुरानी समस्याएं, भावनात्मक तनाव ट्रिगर"],
            ["करियर", "प्राकृतिक प्रतिभाएं और भविष्य के पेशे का संरेखण"],
            ["आध्यात्मिक मार्गदर्शन", "आध्यात्मिक विकास या विरक्ति की ओर झुकाव"],
            ["माता-पिता की भूमिका", "बच्चे को भावनात्मक और कार्मिक रूप से कैसे समर्थन दें"]
          ]
        }
      }
    }
  };

  const selectedContent = content[language];

  return (
    <div className="childastro-container">
      <Navbar />
      <div className="childastro-content">
        <div className="childastro-background">
          <div className="childastro-overlay">
            <div className="childastro-text-container">
              <h1 className="childastro-title">{selectedContent.title}</h1>

              <section className="childastro-section">
                <h2>{selectedContent.introduction.heading}</h2>
                <p>{selectedContent.introduction.text}</p>
              </section>

              <section className="childastro-section">
                <h2>{selectedContent.what.heading}</h2>
                <p>{selectedContent.what.text}</p>
                <ul>
                  {selectedContent.what.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p>{selectedContent.what.common.text}</p>
                <ul>
                  {selectedContent.what.common.stages.map((stage, index) => (
                    <li key={index}>{stage}</li>
                  ))}
                </ul>
              </section>

              <section className="childastro-section">
                <h2>{selectedContent.reveal.heading}</h2>
                {selectedContent.reveal.points.map((point, index) => (
                  <div key={index} className="childastro-point">
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                    {point.subpoints && (
                      <ul>
                        {point.subpoints.map((subpoint, idx) => (
                          <li key={idx}>{subpoint}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </section>

              <section className="childastro-section">
                <h2>{selectedContent.sample.heading}</h2>

                <div className="childastro-subsection">
                  <h3>{selectedContent.sample.details.heading}</h3>
                  <ul>
                    {selectedContent.sample.details.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="childastro-subsection">
                  <h3>{selectedContent.sample.analysis.heading}</h3>
                  <div className="childastro-table-container">
                    <table className="childastro-table">
                      <thead>
                        <tr>
                          {selectedContent.sample.analysis.table.headers.map((header, idx) => (
                            <th key={idx}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {selectedContent.sample.analysis.table.rows.map((row, rowIdx) => (
                          <tr key={rowIdx}>
                            {row.map((cell, cellIdx) => (
                              <td key={cellIdx}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="childastro-subsection">
                  <h3>{selectedContent.sample.insights.heading}</h3>
                  <ul>
                    {selectedContent.sample.insights.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="childastro-subsection">
                  <h3>{selectedContent.sample.remedies.heading}</h3>
                  <ul>
                    {selectedContent.sample.remedies.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="childastro-section">
                <h2>{selectedContent.learn.heading}</h2>
                <div className="childastro-table-container">
                  <table className="childastro-table">
                    <thead>
                      <tr>
                        {selectedContent.learn.table.headers.map((header, idx) => (
                          <th key={idx}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {selectedContent.learn.table.rows.map((row, rowIdx) => (
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

export default ChildAstro;