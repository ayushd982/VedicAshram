import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import './Muhurat.css';

const Muhurat = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      title: "💍 Muhurat for Marriage in Astrology",
      introduction: {
        heading: "🔶 Introduction",
        text: "In Vedic astrology, Shubh Muhurat refers to an auspicious date and time to begin any significant life event, especially a marriage. Marriage is not merely a union of two individuals but a sacred bond influenced by karmic patterns and planetary alignments. Selecting the correct Muhurat ensures the harmonious convergence of cosmic energies for a successful and happy married life.\n\nChoosing the right time for marriage based on astrological factors minimizes future marital issues and enhances compatibility, peace, fertility, and prosperity. The process involves deep analysis of both horoscopes (Kundlis), planetary transits, lunar days, and many more criteria."
      },
      sections: [
        {
          heading: "📿 Importance of Shubh Muhurat for Marriage",
          content: [
            "Helps synchronize the marriage with divine energies.",
            "Reduces doshas or negative influences in the birth charts.",
            "Improves chances of long-term compatibility and happiness.",
            "Avoids times when planets like Mars or Saturn are malefic in transit.",
            "Prevents occurrence of marital discord caused by inauspicious planetary timing."
          ]
        },
        {
          heading: "🪐 Astrological Factors Considered in Muhurat Selection",
          subsections: [
            {
              title: "1. Panchang Elements:",
              items: [
                "Tithi (Lunar Day): Best tithis are Dvitiya, Tritiya, Panchami, Saptami, Dashami, Dwadashi, Trayodashi.",
                "Vaar (Day): Monday, Wednesday, Thursday, Friday are preferred.",
                "Nakshatra: Favorable stars include Rohini, Mrigashira, Magha, Uttara Phalguni, Hasta, Swati, Anuradha, Moola, Uttara Ashadha, Revati.",
                "Yoga: Beneficial yogas like Siddha, Amrita, and Shubha are selected.",
                "Karana: Bava, Balava, Kaulava, and Taitila are ideal."
              ]
            },
            {
              title: "2. Avoiding Inauspicious Periods:",
              items: [
                "Chaturmas (4 months of Vishnu's sleep – July to October)",
                "Venus and Jupiter combust periods",
                "Pitru Paksha (15-day ancestor period)",
                "Shraaddh days and eclipses"
              ]
            },
            {
              title: "3. Planetary Positions:",
              items: [
                "Venus and Jupiter must be strong and well-placed.",
                "Avoid Rahu-Ketu influence on the 7th house.",
                "Lagna (Ascendant) must not be afflicted by malefics like Mars, Saturn, or Rahu."
              ]
            }
          ]
        },
        {
          heading: "💑 Kundli Matching and Its Role in Muhurat",
          content: [
            "Ashtakoot Guna Milan: Minimum 18 out of 36 gunas must match.",
            "Manglik Dosha Check: Must be addressed before finalizing the Muhurat.",
            "Bhakoot & Nadi Dosha: These doshas, if present, require remedial measures or specific Muhurats.",
            "Dasha Compatibility: Dasha periods of both partners must be favorable."
          ]
        },
        {
          heading: "🗓️ Best Months for Marriage (According to Vedic Calendar)",
          content: [
            "Magha (Jan-Feb) – Auspicious month, linked with divinity.",
            "Phalguna (Feb-Mar) – Fertile and joyful.",
            "Vaishakha (Apr-May) – Sacred period, perfect for spiritual beginnings.",
            "Margashirsha (Nov-Dec) – Blessed with devotion and wisdom."
          ]
        },
        {
          heading: "📆 Best Marriage Muhurat Dates in 2025",
          note: "(Examples - Approximate & generic – always consult a personal astrologer)",
          table: {
            headers: ["Month", "Best Dates"],
            rows: [
              ["February", "10, 12, 19, 23"],
              ["April", "17, 20, 24, 27"],
              ["May", "4, 8, 12, 17"],
              ["November", "13, 17, 19, 25"],
              ["December", "3, 5, 9, 14"]
            ]
          }
        },
        {
          heading: "🧘 Remedies When No Muhurat Is Available",
          content: [
            "Sometimes, urgency or external circumstances don't allow waiting for a Shubh Muhurat. In such cases, astrologers suggest:",
            "Performing Navagraha Shanti Puja before marriage.",
            "Chanting Gauri Shankar Mantra for divine blessings.",
            "Using a customized Lagna chart to select the best time within a given day.",
            "Wearing specific gemstones or yantras for planetary harmony."
          ]
        },
        {
          heading: "📿 Rituals Performed During Marriage Muhurat",
          content: [
            "Ganesh Puja: Starts the process to remove obstacles.",
            "Navagraha Puja: Aligns planetary energies.",
            "Kanyadaan Muhurat: Exact moment chosen for giving away the bride.",
            "Vivah Sanskar: Completion of marriage during the selected Lagna."
          ]
        },
        {
          heading: "🧘 Role of Personal Karma and Free Will",
          content: [
            "While Muhurat selection is powerful, one must remember that ultimate happiness in marriage also depends on conscious effort, communication, understanding, and emotional maturity. Astrology can guide and support, but free will plays a vital role in shaping the future."
          ]
        }
      ]
    },
    hindi: {
      title: "💍 ज्योतिष में विवाह के लिए मुहूर्त",
      introduction: {
        heading: "🔶 परिचय",
        text: "वैदिक ज्योतिष में, शुभ मुहूर्त किसी भी महत्वपूर्ण जीवन घटना, विशेष रूप से विवाह के लिए एक शुभ तिथि और समय को संदर्भित करता है। विवाह केवल दो व्यक्तियों का मिलन नहीं है, बल्कि कार्मिक पैटर्न और ग्रहीय संरेखण से प्रभावित एक पवित्र बंधन है। सही मुहूर्त का चयन सफल और सुखी वैवाहिक जीवन के लिए ब्रह्मांडीय ऊर्जाओं के सामंजस्यपूर्ण अभिसरण को सुनिश्चित करता है।\n\nज्योतिषीय कारकों के आधार पर विवाह के लिए सही समय का चयन भविष्य के वैवाहिक मुद्दों को कम करता है और संगतता, शांति, प्रजनन क्षमता और समृद्धि को बढ़ाता है। इस प्रक्रिया में दोनों जन्मपत्रिकाओं (कुंडलियों), ग्रहीय पारगमन, चंद्र दिनों और कई अन्य मानदंडों का गहन विश्लेषण शामिल है।"
      },
      sections: [
        {
          heading: "📿 विवाह के लिए शुभ मुहूर्त का महत्व",
          content: [
            "विवाह को दिव्य ऊर्जाओं के साथ सिंक्रनाइज़ करने में मदद करता है।",
            "जन्म कुंडली में दोषों या नकारात्मक प्रभावों को कम करता है।",
            "दीर्घकालिक संगतता और खुशी की संभावनाओं में सुधार करता है।",
            "उन समयों से बचता है जब मंगल या शनि जैसे ग्रह पारगमन में अशुभ होते हैं।",
            "अशुभ ग्रहीय समय के कारण होने वाले वैवाहिक मतभेदों को रोकता है।"
          ]
        },
        {
          heading: "🪐 मुहूर्त चयन में विचार किए जाने वाले ज्योतिषीय कारक",
          subsections: [
            {
              title: "1. पंचांग तत्व:",
              items: [
                "तिथि (चंद्र दिन): सर्वोत्तम तिथियां द्वितीया, तृतीया, पंचमी, सप्तमी, दशमी, द्वादशी, त्रयोदशी हैं।",
                "वार (दिन): सोमवार, बुधवार, गुरुवार, शुक्रवार पसंदीदा हैं।",
                "नक्षत्र: अनुकूल नक्षत्रों में रोहिणी, मृगशिरा, मघा, उत्तर फाल्गुनी, हस्त, स्वाति, अनुराधा, मूल, उत्तर आषाढ़, रेवती शामिल हैं।",
                "योग: सिद्ध, अमृत और शुभ जैसे लाभकारी योगों का चयन किया जाता है।",
                "करण: बव, बालव, कौलव और तैतिल आदर्श हैं।"
              ]
            },
            {
              title: "2. अशुभ अवधियों से बचना:",
              items: [
                "चातुर्मास (विष्णु की नींद के 4 महीने - जुलाई से अक्टूबर)",
                "शुक्र और बृहस्पति के अस्त अवधि",
                "पितृ पक्ष (15 दिन की पूर्वज अवधि)",
                "श्राद्ध दिन और ग्रहण"
              ]
            },
            {
              title: "3. ग्रहीय स्थितियां:",
              items: [
                "शुक्र और बृहस्पति मजबूत और अच्छी तरह से स्थित होने चाहिए।",
                "7वें घर पर राहु-केतु के प्रभाव से बचें।",
                "लग्न (अस्सेंडेंट) मंगल, शनि या राहु जैसे अशुभ ग्रहों से पीड़ित नहीं होना चाहिए।"
              ]
            }
          ]
        },
        {
          heading: "💑 कुंडली मिलान और मुहूर्त में इसकी भूमिका",
          content: [
            "अष्टकूट गुण मिलान: 36 में से कम से कम 18 गुण मेल खाने चाहिए।",
            "मंगलिक दोष जांच: मुहूर्त को अंतिम रूप देने से पहले इसका समाधान किया जाना चाहिए।",
            "भकूट और नाड़ी दोष: ये दोष, यदि मौजूद हों, तो उपचारात्मक उपायों या विशिष्ट मुहूर्तों की आवश्यकता होती है।",
            "दशा संगतता: दोनों साझेदारों की दशा अवधि अनुकूल होनी चाहिए।"
          ]
        },
        {
          heading: "🗓️ विवाह के लिए सर्वोत्तम महीने (वैदिक कैलेंडर के अनुसार)",
          content: [
            "माघ (जनवरी-फरवरी) - शुभ महीना, दिव्यता से जुड़ा हुआ।",
            "फाल्गुन (फरवरी-मार्च) - उपजाऊ और आनंददायक।",
            "वैशाख (अप्रैल-मई) - पवित्र अवधि, आध्यात्मिक शुरुआत के लिए एकदम सही।",
            "मार्गशीर्ष (नवंबर-दिसंबर) - भक्ति और ज्ञान से आशीर्वादित।"
          ]
        },
        {
          heading: "📆 2025 में सर्वोत्तम विवाह मुहूर्त तिथियां",
          note: "(उदाहरण - अनुमानित और सामान्य - हमेशा व्यक्तिगत ज्योतिषी से परामर्श करें)",
          table: {
            headers: ["महीना", "सर्वोत्तम तिथियां"],
            rows: [
              ["फरवरी", "10, 12, 19, 23"],
              ["अप्रैल", "17, 20, 24, 27"],
              ["मई", "4, 8, 12, 17"],
              ["नवंबर", "13, 17, 19, 25"],
              ["दिसंबर", "3, 5, 9, 14"]
            ]
          }
        },
        {
          heading: "🧘 जब कोई मुहूर्त उपलब्ध न हो तो उपाय",
          content: [
            "कभी-कभी, तात्कालिकता या बाहरी परिस्थितियां शुभ मुहूर्त की प्रतीक्षा करने की अनुमति नहीं देती हैं। ऐसे मामलों में, ज्योतिषी सुझाव देते हैं:",
            "विवाह से पहले नवग्रह शांति पूजा करना।",
            "दिव्य आशीर्वाद के लिए गौरी शंकर मंत्र का जाप करना।",
            "दिए गए दिन के भीतर सर्वोत्तम समय का चयन करने के लिए अनुकूलित लग्न चार्ट का उपयोग करना।",
            "ग्रहीय सामंजस्य के लिए विशिष्ट रत्न या यंत्र पहनना।"
          ]
        },
        {
          heading: "📿 विवाह मुहूर्त के दौरान किए जाने वाले अनुष्ठान",
          content: [
            "गणेश पूजा: बाधाओं को दूर करने के लिए प्रक्रिया शुरू करता है।",
            "नवग्रह पूजा: ग्रहीय ऊर्जाओं को संरेखित करता है।",
            "कन्यादान मुहूर्त: दुल्हन को देने के लिए चुना गया सटीक क्षण।",
            "विवाह संस्कार: चयनित लग्न के दौरान विवाह का समापन।"
          ]
        },
        {
          heading: "🧘 व्यक्तिगत कर्म और स्वतंत्र इच्छा की भूमिका",
          content: [
            "जबकि मुहूर्त चयन शक्तिशाली है, एक को याद रखना चाहिए कि विवाह में अंतिम खुशी सचेत प्रयास, संचार, समझ और भावनात्मक परिपक्वता पर भी निर्भर करती है। ज्योतिष मार्गदर्शन और समर्थन कर सकता है, लेकिन भविष्य को आकार देने में स्वतंत्र इच्छा महत्वपूर्ण भूमिका निभाती है।"
          ]
        }
      ]
    }
  };

  const selectedContent = content[language];

  return (
    <div className="muhurat-container">
      <Navbar />
      <div className="muhurat-content">
        <div className="muhurat-background">
          <div className="muhurat-overlay">
            <div className="muhurat-text-container">
              <h1 className="muhurat-title">{selectedContent.title}</h1>

              <section className="muhurat-section">
                <h2>{selectedContent.introduction.heading}</h2>
                <p>{selectedContent.introduction.text.split('\n\n').map((paragraph, i) => (
                  <React.Fragment key={i}>
                    {paragraph}
                    {i < selectedContent.introduction.text.split('\n\n').length - 1 && <br />}
                  </React.Fragment>
                ))}</p>
              </section>

              {selectedContent.sections.map((section, index) => (
                <section key={index} className="muhurat-section">
                  <h2>{section.heading}</h2>

                  {section.content && (
                    <ul className="muhurat-list">
                      {section.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx} className="muhurat-subsection">
                      <h3>{subsection.title}</h3>
                      <ul className="muhurat-list">
                        {subsection.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {section.table && (
                    <div className="muhurat-table-container">
                      {section.note && <p className="muhurat-note">{section.note}</p>}
                      <table className="muhurat-table">
                        <thead>
                          <tr>
                            {section.table.headers.map((header, headerIdx) => (
                              <th key={headerIdx}>{header}</th>
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

export default Muhurat;