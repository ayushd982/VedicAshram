import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './navratripujan_new.css';

const Navratripujan = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      title: "🌺 Navratri Puja Vidhi-Vidhan",
      sections: [
        {
          heading: "🪔 Introduction to Navratri and Its Significance",
          content: "Meaning of \"Navratri\" (Nine Nights) – dedicated to the worship of Goddess Durga in her nine divine forms (Navadurga). Celebrated four times a year (Chaitra, Sharad, Magha, and Ashadha), with Sharad Navratri being the most prominent. Spiritual significance: victory of dharma over adharma, divine feminine energy (Shakti), and inner purification. Connection with planetary alignments and astrological importance during Navratri."
        },
        {
          heading: "🕉️ Astrological Relevance of Navratri",
          content: "Alignment of the Moon and its relation to Navratri. Importance of worshipping Devi during waxing moon phase (Shukla Paksha). Influence of planetary transits during Navratri and their effect on health, relationships, and wealth. Specific days for certain remedies based on individual horoscopes."
        },
        {
          heading: "🌼 Nine Forms of Goddess Durga (Navadurga) and Their Day-Wise Puja",
          content: "Each day of Navratri is dedicated to a specific form of the Divine Mother, with unique symbolism, colors, and spiritual significance.",
          subsections: [
            {
              title: "Day 1: Shailputri",
              description: "Symbolism: Root Chakra, Earth element",
              color: "Red",
              details: "The daughter of the mountains, Shailputri represents the beginning of spiritual journey. She rides a bull and holds a trident and lotus. Worshipping her brings stability and grounding."
            },
            {
              title: "Day 2: Brahmacharini",
              description: "Symbolism: Discipline, Meditation",
              color: "White",
              details: "The goddess of penance and austerity. She walks barefoot holding a rosary and kamandalu. Her worship brings discipline, knowledge, and spiritual growth."
            },
            {
              title: "Day 3: Chandraghanta",
              description: "Symbolism: Courage, Peace",
              color: "Yellow",
              details: "Named after the half-moon bell on her forehead. She rides a tiger and has ten arms holding various weapons. Her worship removes obstacles and brings peace."
            },
            {
              title: "Day 4: Kushmanda",
              description: "Symbolism: Creation, Solar Power",
              color: "Green",
              details: "The creator of the universe who resides in the Sun. She rides a lion and has eight arms. Her worship brings health, vitality, and creative energy."
            },
            {
              title: "Day 5: Skandamata",
              description: "Symbolism: Motherhood, Compassion",
              color: "Grey",
              details: "Mother of Skanda (Kartikeya), she holds her son in her lap while riding a lion. Her worship brings wisdom, prosperity, and salvation."
            },
            {
              title: "Day 6: Katyayani",
              description: "Symbolism: Warrior Goddess, Justice",
              color: "Orange",
              details: "The warrior form born to destroy the demon Mahishasura. She has three eyes and four arms. Her worship fulfills wishes and brings courage."
            },
            {
              title: "Day 7: Kalaratri",
              description: "Symbolism: Destruction of Negativity",
              color: "Blue",
              details: "The fiercest form with dark complexion, disheveled hair, and a necklace of lightning. She rides a donkey. Her worship removes fear and darkness."
            },
            {
              title: "Day 8: Mahagauri",
              description: "Symbolism: Purity, Forgiveness",
              color: "Pink",
              details: "Extremely fair with four arms, riding a white bull. She represents purity and cleansing. Her worship removes sins and brings beauty."
            },
            {
              title: "Day 9: Siddhidatri",
              description: "Symbolism: Supernatural Powers",
              color: "Purple",
              details: "The bestower of all siddhis (supernatural powers). She sits on a lotus and has four arms. Her worship brings fulfillment and spiritual perfection."
            }
          ]
        },
        {
          heading: "🔥 Complete Navratri Puja Vidhi (Daily Ritual Steps)",
          subsections: [
            {
              title: "Morning Rituals:",
              items: [
                "Ghatasthapana (Kalash Sthapana)",
                "Sankalp (intention)",
                "Invocation of Navadurga",
                "Offering flowers, akshat, roli, kumkum",
                "Lighting diya and incense",
                "Reciting Durga Saptashati or Devi Mahatmya",
                "Aarti and bhajan"
              ]
            },
            {
              title: "Evening Rituals:",
              items: [
                "Deep daan",
                "Special bhog (food offerings)",
                "Kumari pujan (esp. on 8th/9th day)",
                "Navami havan"
              ]
            }
          ],
          note: "Daily checklist of what to offer, what mantra to chant, and when."
        },
        {
          heading: "🪶 Kalash Sthapana / Ghatasthapana Vidhi",
          content: "Choosing the right Muhurat (time) based on Panchang. Sacred pot preparation: copper kalash, coconut, mango leaves, holy water. Ritual placement and purification. Invoking Ganga, Vishnu, and Durga in the Kalash. Vastu alignment of the altar. Includes Sankalp Mantra and Kalash Sthapana Shloka."
        },
        {
          heading: "🌿 Navratri Fasting Rules and Dietary Guidance",
          content: "Who should fast and how (full vs partial fasts). Satvik food: sabudana, fruits, rock salt, buckwheat, water chestnut flour. Ayurvedic view: body detoxification and spiritual purification. Astrological benefit of fasting on Navratri days."
        },
        {
          heading: "🙏 Durga Saptashati and Other Powerful Mantras",
          content: "Importance of reciting Durga Saptashati (700 verses from Markandeya Purana). Segment-wise reading across 9 days.",
          subsections: [
            {
              title: "Additional powerful mantras:",
              items: [
                "Durga Beej Mantra: \"ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे\"",
                "Kshama Prarthana",
                "Devi Kavacham",
                "Benefits of mantra chanting: aura cleansing, chakra activation"
              ]
            }
          ]
        },
        {
          heading: "🧘‍♀️ Spiritual Practices During Navratri",
          items: [
            "Meditation on Divine Mother (Devi)",
            "Candle or diya gazing (Trataka)",
            "Chakra meditation corresponding to each goddess",
            "Journaling sankalpa and self-introspection"
          ]
        },
        {
          heading: "🌾 Kanya Puja / Kumari Puja & Havan Vidhi",
          content: "Performed on Ashtami or Navami. Inviting 9 girls (age 2 to 10) symbolizing Navadurga. Ritual foot washing, tilak, and bhog. Havan (Fire Ceremony): items, mantras, benefits."
        },
        {
          heading: "💫 Benefits of Navratri Puja",
          items: [
            "Enhanced divine protection and inner strength",
            "Destruction of negative planetary effects",
            "Family prosperity, health, and spiritual growth",
            "Moksha (liberation) path advancement"
          ]
        },
        {
          heading: "📚 Scriptural Sources and Stories",
          content: "Markandeya Purana, Devi Bhagavatam, and Kalika Purana. Mythological stories of Mahishasura Mardini. Story of King Suratha and Samadhi Vaishya and how Durga Saptashati originated."
        }
      ]
    },
    hindi: {
      title: "🌺 नवरात्रि पूजा विधि-विधान",
      sections: [
        {
          heading: "🪔 नवरात्रि का परिचय और महत्व",
          content: "\"नवरात्रि\" का अर्थ (नौ रातें) - देवी दुर्गा के नौ दिव्य रूपों (नवदुर्गा) की पूजा के लिए समर्पित। वर्ष में चार बार मनाया जाता है (चैत्र, शारद, माघ और आषाढ़), जिसमें शारदीय नवरात्रि सबसे प्रमुख है। आध्यात्मिक महत्व: अधर्म पर धर्म की विजय, दिव्य स्त्री ऊर्जा (शक्ति), और आंतरिक शुद्धिकरण। नवरात्रि के दौरान ग्रहीय संरेखण और ज्योतिषीय महत्व का संबंध।"
        },
        {
          heading: "🕉️ नवरात्रि का ज्योतिषीय महत्व",
          content: "चंद्रमा का संरेखण और नवरात्रि से इसका संबंध। शुक्ल पक्ष (बढ़ते चंद्रमा) के दौरान देवी की पूजा का महत्व। नवरात्रि के दौरान ग्रहीय संक्रमण का प्रभाव और स्वास्थ्य, रिश्तों और धन पर उनका प्रभाव। व्यक्तिगत जन्मपत्री के आधार पर कुछ उपायों के लिए विशिष्ट दिन।"
        },
        {
          heading: "🌼 देवी दुर्गा के नौ रूप (नवदुर्गा) और उनकी दिन-वार पूजा",
          content: "नवरात्रि का प्रत्येक दिन दिव्य माता के एक विशिष्ट रूप को समर्पित है, जिसमें अनूठी प्रतीकात्मकता, रंग और आध्यात्मिक महत्व है।",
          subsections: [
            {
              title: "दिन 1: शैलपुत्री",
              description: "प्रतीकात्मकता: मूलाधार चक्र, पृथ्वी तत्व",
              color: "लाल",
              details: "पर्वतों की पुत्री, शैलपुत्री आध्यात्मिक यात्रा की शुरुआत का प्रतिनिधित्व करती हैं। वह एक बैल पर सवार होती हैं और त्रिशूल और कमल धारण करती हैं। उनकी पूजा स्थिरता और जमीन से जुड़ाव लाती है।"
            },
            {
              title: "दिन 2: ब्रह्मचारिणी",
              description: "प्रतीकात्मकता: अनुशासन, ध्यान",
              color: "सफेद",
              details: "तपस्या और कठोरता की देवी। वह नंगे पांव चलती हैं और माला और कमंडलु धारण करती हैं। उनकी पूजा अनुशासन, ज्ञान और आध्यात्मिक विकास लाती है।"
            },
            {
              title: "दिन 3: चंद्रघंटा",
              description: "प्रतीकात्मकता: साहस, शांति",
              color: "पीला",
              details: "उनके माथे पर अर्धचंद्र घंटी के नाम से जानी जाती हैं। वह एक बाघ पर सवार होती हैं और उनके दस हाथों में विभिन्न हथियार होते हैं। उनकी पूजा बाधाओं को दूर करती है और शांति लाती है।"
            },
            {
              title: "दिन 4: कुष्मांडा",
              description: "प्रतीकात्मकता: सृष्टि, सौर शक्ति",
              color: "हरा",
              details: "ब्रह्मांड की निर्माता जो सूर्य में निवास करती हैं। वह एक शेर पर सवार होती हैं और उनके आठ हाथ हैं। उनकी पूजा स्वास्थ्य, जीवन शक्ति और रचनात्मक ऊर्जा लाती है।"
            },
            {
              title: "दिन 5: स्कंदमाता",
              description: "प्रतीकात्मकता: मातृत्व, करुणा",
              color: "ग्रे",
              details: "स्कंद (कार्तिकेय) की माता, वह शेर पर सवार होकर अपने पुत्र को गोद में रखती हैं। उनकी पूजा ज्ञान, समृद्धि और मोक्ष लाती है।"
            },
            {
              title: "दिन 6: कात्यायनी",
              description: "प्रतीकात्मकता: योद्धा देवी, न्याय",
              color: "नारंगी",
              details: "महिषासुर राक्षस को नष्ट करने के लिए जन्मी योद्धा रूप। उनके तीन नेत्र और चार भुजाएँ हैं। उनकी पूजा इच्छाओं को पूरा करती है और साहस लाती है।"
            },
            {
              title: "दिन 7: कालरात्रि",
              description: "प्रतीकात्मकता: नकारात्मकता का विनाश",
              color: "नीला",
              details: "काले रंग की त्वचा, बिखरे बाल और बिजली की माला के साथ सबसे भयानक रूप। वह एक गधे पर सवार होती हैं। उनकी पूजा भय और अंधकार को दूर करती है।"
            },
            {
              title: "दिन 8: महागौरी",
              description: "प्रतीकात्मकता: शुद्धता, क्षमा",
              color: "गुलाबी",
              details: "अत्यंत गोरी त्वचा के साथ चार भुजाओं वाली, सफेद बैल पर सवार। वह शुद्धता और शुद्धिकरण का प्रतिनिधित्व करती हैं। उनकी पूजा पापों को दूर करती है और सौंदर्य लाती है।"
            },
            {
              title: "दिन 9: सिद्धिदात्री",
              description: "प्रतीकात्मकता: अलौकिक शक्तियां",
              color: "बैंगनी",
              details: "सभी सिद्धियों (अलौकिक शक्तियों) की प्रदाता। वह कमल पर बैठती हैं और उनके चार हाथ हैं। उनकी पूजा पूर्णता और आध्यात्मिक पूर्णता लाती है।"
            }
          ]
        },
        {
          heading: "🔥 संपूर्ण नवरात्रि पूजा विधि (दैनिक अनुष्ठान चरण)",
          subsections: [
            {
              title: "प्रातः अनुष्ठान:",
              items: [
                "घटस्थापना (कलश स्थापना)",
                "संकल्प (इरादा)",
                "नवदुर्गा का आह्वान",
                "फूल, अक्षत, रोली, कुमकुम अर्पण",
                "दीया और धूप जलाना",
                "दुर्गा सप्तशती या देवी माहात्म्य का पाठ",
                "आरती और भजन"
              ]
            },
            {
              title: "सायं अनुष्ठान:",
              items: [
                "दीप दान",
                "विशेष भोग (खाद्य अर्पण)",
                "कुमारी पूजन (विशेषकर 8वें/9वें दिन)",
                "नवमी हवन"
              ]
            }
          ],
          note: "क्या अर्पित करें, कौन सा मंत्र जपें, और कब - इसकी दैनिक चेकलिस्ट।"
        },
        {
          heading: "🪶 कलश स्थापना / घटस्थापना विधि",
          content: "पंचांग के आधार पर सही मुहूर्त (समय) का चयन। पवित्र कलश तैयारी: तांबे का कलश, नारियल, आम के पत्ते, पवित्र जल। अनुष्ठानिक स्थापना और शुद्धिकरण। कलश में गंगा, विष्णु और दुर्गा का आह्वान। वेदी का वास्तु संरेखण। संकल्प मंत्र और कलश स्थापना श्लोक शामिल है।"
        },
        {
          heading: "🌿 नवरात्रि उपवास नियम और आहार मार्गदर्शन",
          content: "किसे और कैसे उपवास करना चाहिए (पूर्ण बनाम आंशिक उपवास)। सात्विक भोजन: साबूदाना, फल, सेंधा नमक, कुट्टू, सिंघाड़े का आटा। आयुर्वेदिक दृष्टिकोण: शरीर का विषहरण और आध्यात्मिक शुद्धिकरण। नवरात्रि के दिनों में उपवास का ज्योतिषीय लाभ।"
        },
        {
          heading: "🙏 दुर्गा सप्तशती और अन्य शक्तिशाली मंत्र",
          content: "दुर्गा सप्तशती (मार्कण्डेय पुराण के 700 श्लोक) का पाठ करने का महत्व। 9 दिनों में खंड-वार पठन।",
          subsections: [
            {
              title: "अतिरिक्त शक्तिशाली मंत्र:",
              items: [
                "दुर्गा बीज मंत्र: \"ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे\"",
                "क्षमा प्रार्थना",
                "देवी कवचम्",
                "मंत्र जाप के लाभ: ऊर्जा क्षेत्र की सफाई, चक्र सक्रियण"
              ]
            }
          ]
        },
        {
          heading: "🧘‍♀️ नवरात्रि के दौरान आध्यात्मिक अभ्यास",
          items: [
            "दिव्य माता (देवी) पर ध्यान",
            "मोमबत्ती या दीया देखना (त्राटक)",
            "प्रत्येक देवी के अनुरूप चक्र ध्यान",
            "संकल्प और आत्म-निरीक्षण का लेखन"
          ]
        },
        {
          heading: "🌾 कन्या पूजा / कुमारी पूजा और हवन विधि",
          content: "अष्टमी या नवमी पर किया जाता है। नवदुर्गा का प्रतीक 9 लड़कियों (2 से 10 वर्ष की आयु) को आमंत्रित करना। अनुष्ठानिक पैर धोना, तिलक और भोग। हवन (अग्नि समारोह): सामग्री, मंत्र, लाभ।"
        },
        {
          heading: "💫 नवरात्रि पूजा के लाभ",
          items: [
            "बढ़ी हुई दैवीय सुरक्षा और आंतरिक शक्ति",
            "नकारात्मक ग्रहीय प्रभावों का विनाश",
            "पारिवारिक समृद्धि, स्वास्थ्य और आध्यात्मिक विकास",
            "मोक्ष (मुक्ति) मार्ग की प्रगति"
          ]
        },
        {
          heading: "📚 शास्त्रीय स्रोत और कथाएँ",
          content: "मार्कण्डेय पुराण, देवी भागवतम् और कालिका पुराण। महिषासुर मर्दिनी की पौराणिक कथाएँ। राजा सुरथ और समाधि वैश्य की कथा और दुर्गा सप्तशती की उत्पत्ति।"
        }
      ]
    }
  };

  const selectedContent = content[language];

  return (
    <div className="navratri-page">
      <Navbar />
      <div className="navratri-content">
        <div className="container navratri-container">
          <h1 className="navratri-title">
            {selectedContent.title}
          </h1>

          <div className="navratri-intro">
            <div className="navratri-image">
              <img src="../../assets/Navratri.jpg" alt="Goddess Durga" className="goddess-image" />
            </div>
            <div className="navratri-description">
              <h2>{language === 'hindi' ? 'नवरात्रि का महत्व' : 'Significance of Navratri'}</h2>
              <p>
                {selectedContent.sections[0].content}
              </p>
            </div>
          </div>

          {selectedContent.sections.map((section, index) => (
            index > 0 && (
              <div key={index} className="navratri-details">
                <h2>{section.heading}</h2>

                {section.content && (
                  <div className="procedure-step">
                    <p>{section.content}</p>
                  </div>
                )}

                {section.items && (
                  <ul className="navratri-list">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="navratri-list-item">{item}</li>
                    ))}
                  </ul>
                )}

                {section.subsections && section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="procedure-step">
                    <h3>{subsection.title}</h3>

                    {subsection.description && (
                      <p><strong>{subsection.description}</strong>{subsection.color && ` - ${subsection.color}`}</p>
                    )}

                    {subsection.details && (
                      <p>{subsection.details}</p>
                    )}

                    {subsection.items && (
                      <ul className="navratri-list">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.note && (
                  <div className="navratri-note">
                    <p><em>{section.note}</em></p>
                  </div>
                )}
              </div>
            )
          ))}

          <div className="book-yagya">
            <h2>{language === 'hindi' ? 'नवरात्रि पूजन के लिए बुकिंग करें' : 'Book for Navratri Pujan'}</h2>
            <p>
              {language === 'hindi'
                ? 'विधिवत नवरात्रि पूजन के लिए हमारे विशेषज्ञ पंडितों द्वारा संपन्न करवाने हेतु संपर्क करें।'
                : 'Contact us to have the Navratri Pujan performed by our expert pandits with proper rituals.'}
            </p>
            <button className="book-button">
              {language === 'hindi' ? 'अभी बुक करें' : 'Book Now'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Navratripujan;