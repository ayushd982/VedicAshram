import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import './Pitradosh.css';
import { useLanguage } from '../../context/LanguageContext';

const PitraDosh = () => {
  const { language } = useLanguage();

  const content = {
    english: {
      title: "🕯️ Pitra Dosh Nivaran Yagya",
      sections: [
        {
          heading: "🔮 Introduction to Pitra Dosh",
          content: "Pitra Dosh is a karmic debt owed to one's ancestors (Pitras) due to unfulfilled duties or negative ancestral karma. In Vedic astrology, it occurs when certain planetary placements in the birth chart signify unrest or dissatisfaction of forefathers, especially in the 9th house (house of dharma and ancestors), with afflictions from Rahu, Ketu, or Sun.",
          subsections: [
            {
              title: "Symptoms:",
              items: [
                "Repeated family troubles",
                "Unexplained health issues",
                "Obstacles in career or marriage",
                "Childlessness or frequent miscarriages"
              ]
            }
          ]
        },
        {
          heading: "📜 Astrological Causes of Pitra Dosh",
          content: "Key chart indicators include:",
          items: [
            "Rahu/Ketu in the 9th or 1st house",
            "Sun (significator of father) conjunct malefics",
            "Weak 9th lord or Saturn placed in the 1st/8th",
            "Rahu in 2nd, 5th, or 9th house"
          ],
          subsections: [
            {
              title: "Combination of:",
              items: [
                "Dasha (planetary period) activating ancestral karma",
                "Karmic retrograde planets from past lives",
                "Saturn's involvement often indicates duties left unfulfilled to elders"
              ]
            }
          ]
        },
        {
          heading: "🔥 What is Pitra Dosh Nivaran Yagya?",
          content: "A sacred fire ritual performed by qualified Brahmins to:",
          items: [
            "Appease unhappy ancestors",
            "Liberate stuck souls",
            "Remove karmic blockages causing suffering in the family"
          ],
          subsections: [
            {
              title: "It is typically performed during:",
              items: [
                "Amavasya (New Moon)",
                "Pitru Paksha (Shraddha period)",
                "Gaya Shraddha rituals",
                "Mahalaya Amavasya"
              ]
            },
            {
              title: "Components of the Yagya:",
              items: [
                "Invocation of ancestors",
                "Offerings of sesame seeds, ghee, barley",
                "Chanting of Pitra Shanti Mantras (Rigveda & Garuda Purana)",
                "Pind Daan and Tarpan"
              ]
            }
          ]
        },
        {
          heading: "🧬 Spiritual and Psychological Effects",
          items: [
            "Releases mental heaviness, fear, and grief",
            "Creates a sense of forgiveness across generations",
            "Helps individual feel unstuck in life",
            "Restores emotional flow in family systems",
            "Often results in career breakthroughs, improved family harmony, and better mental health"
          ]
        },
        {
          heading: "🔍 When to Perform Pitra Dosh Nivaran Yagya?",
          subsections: [
            {
              title: "Ideal conditions:",
              items: [
                "Amavasya or Pitru Paksha days",
                "During specific Nakshatras like Bharani, Magha, or Poorva Phalguni (ruled by ancestors)",
                "If multiple family members face the same issue (health/finance/childbirth)"
              ]
            },
            {
              title: "Consult an astrologer if:",
              items: [
                "Repeated bad dreams of ancestors",
                "Frequent loss of wealth or children",
                "Strong Rahu/Saturn influence in natal chart",
                "Grahan yoga involving Sun or Moon"
              ]
            }
          ]
        },
        {
          heading: "🧘 Mantras & Rituals for Home Practice",
          subsections: [
            {
              title: "Daily mantras:",
              items: [
                "Om Namo Bhagavate Vasudevaya - general purification",
                "Om Pitra Devaya Namah",
                "Pitru Tarpanam -water libation with black sesame",
                "Mahamrityunjaya Mantra – for peace to departed souls"
              ]
            },
            {
              title: "Simple home rituals:",
              items: [
                "Offer water to Peepal tree on Saturdays",
                "Feed crows, cows, and Brahmins",
                "Donate on behalf of ancestors (food, clothing, education)"
              ]
            }
          ]
        },
        {
          heading: "🏡 Remedies Apart from Yagya",
          items: [
            "Pind Daan at Gaya, Haridwar, or Prayag",
            "Kashi Shraddha: Moksha-focused rituals",
            "Charity in memory of ancestors: Cows, books, or land donations",
            "Graha Shanti pujas for afflicted planets"
          ],
          subsections: [
            {
              title: "Suggested gemstones:",
              items: [
                "Hessonite (Gomed) – Rahu",
                "Ruby – if Sun is weak",
                "Cat's Eye – Ketu (To be worn only with proper astrological guidance)"
              ]
            }
          ]
        },
        {
          heading: "🪔 Real-Life Impacts and Testimonials",
          content: "Stories of:",
          items: [
            "Marriages materializing post-yagya",
            "Couples conceiving after years of infertility",
            "Legal problems resolving",
            "Family businesses prospering again"
          ]
        },
        {
          heading: "✍️ Vedic and Puranic References",
          content: "Scriptural sources:",
          items: [
            "Garuda Purana: Describes ancestral realms and remedies",
            "Shraddha Kalpa: Ritual guidelines for pacifying Pitras",
            "Manusmriti & Rigveda: Importance of ancestor worship"
          ]
        }
      ]
    },
    hindi: {
      title: "🕯️ पितृ दोष निवारण यज्ञ",
      sections: [
        {
          heading: "🔮 पितृ दोष का परिचय",
          content: "पितृ दोष अपने पूर्वजों (पितरों) के प्रति अपूर्ण कर्तव्यों या नकारात्मक पैतृक कर्म के कारण एक कार्मिक ऋण है। वैदिक ज्योतिष में, यह तब होता है जब जन्म कुंडली में कुछ ग्रहीय स्थिति पूर्वजों की अशांति या असंतोष का संकेत देती है, विशेष रूप से 9वें भाव (धर्म और पूर्वजों का भाव) में, राहु, केतु, या सूर्य से पीड़ित होने पर।",
          subsections: [
            {
              title: "लक्षण:",
              items: [
                "बार-बार पारिवारिक परेशानियां",
                "अस्पष्टीकृत स्वास्थ्य समस्याएं",
                "करियर या विवाह में बाधाएं",
                "संतानहीनता या बार-बार गर्भपात"
              ]
            }
          ]
        },
        {
          heading: "📜 पितृ दोष के ज्योतिषीय कारण",
          content: "प्रमुख चार्ट संकेतकों में शामिल हैं:",
          items: [
            "9वें या 1ले भाव में राहु/केतु",
            "सूर्य (पिता का कारक) पापी ग्रहों के साथ युति में",
            "कमजोर 9वां स्वामी या 1ले/8वें में स्थित शनि",
            "2रे, 5वें, या 9वें भाव में राहु"
          ],
          subsections: [
            {
              title: "संयोजन:",
              items: [
                "दशा (ग्रहीय अवधि) पैतृक कर्म को सक्रिय करना",
                "पिछले जन्मों से कार्मिक वक्री ग्रह",
                "शनि की भागीदारी अक्सर बड़ों के प्रति अपूर्ण कर्तव्यों का संकेत देती है"
              ]
            }
          ]
        },
        {
          heading: "🔥 पितृ दोष निवारण यज्ञ क्या है?",
          content: "योग्य ब्राह्मणों द्वारा किया जाने वाला एक पवित्र अग्नि अनुष्ठान:",
          items: [
            "असंतुष्ट पूर्वजों को शांत करना",
            "फंसी हुई आत्माओं को मुक्त करना",
            "परिवार में पीड़ा का कारण बनने वाले कार्मिक अवरोधों को हटाना"
          ],
          subsections: [
            {
              title: "यह आमतौर पर इस दौरान किया जाता है:",
              items: [
                "अमावस्या (नई चंद्रमा)",
                "पितृ पक्ष (श्राद्ध अवधि)",
                "गया श्राद्ध अनुष्ठान",
                "महालय अमावस्या"
              ]
            },
            {
              title: "यज्ञ के घटक:",
              items: [
                "पूर्वजों का आह्वान",
                "तिल, घी, जौ की आहुति",
                "पितृ शांति मंत्रों का जाप (ऋग्वेद और गरुड़ पुराण)",
                "पिंड दान और तर्पण"
              ]
            }
          ]
        },
        {
          heading: "🧬 आध्यात्मिक और मनोवैज्ञानिक प्रभाव",
          items: [
            "मानसिक भारीपन, भय और दुःख को मुक्त करता है",
            "पीढ़ियों में क्षमा की भावना पैदा करता है",
            "व्यक्ति को जीवन में 'अटके हुए' महसूस करने से मदद करता है",
            "पारिवारिक प्रणालियों में भावनात्मक प्रवाह को बहाल करता है",
            "अक्सर करियर में सफलता, बेहतर पारिवारिक सद्भाव और बेहतर मानसिक स्वास्थ्य का परिणाम देता है"
          ]
        },
        {
          heading: "🔍 पितृ दोष निवारण यज्ञ कब करें?",
          subsections: [
            {
              title: "आदर्श स्थितियां:",
              items: [
                "अमावस्या या पितृ पक्ष के दिन",
                "विशिष्ट नक्षत्रों के दौरान जैसे भरणी, मघा, या पूर्व फाल्गुनी (पूर्वजों द्वारा शासित)",
                "यदि कई परिवार के सदस्य एक ही समस्या का सामना करते हैं (स्वास्थ्य/वित्त/संतान जन्म)"
              ]
            },
            {
              title: "ज्योतिषी से परामर्श करें यदि:",
              items: [
                "पूर्वजों के बार-बार बुरे सपने आते हैं",
                "धन या बच्चों की लगातार हानि",
                "जन्म कुंडली में मजबूत राहु/शनि का प्रभाव",
                "सूर्य या चंद्रमा से जुड़ा ग्रहण योग"
              ]
            }
          ]
        },
        {
          heading: "🧘 घर पर अभ्यास के लिए मंत्र और अनुष्ठान",
          subsections: [
            {
              title: "दैनिक मंत्र:",
              items: [
                "ॐ नमो भगवते वासुदेवाय - सामान्य शुद्धिकरण",
                "ॐ पितृ देवाय नमः",
                "पितृ तर्पणम्  - काले तिल के साथ जल अर्पण",
                "महामृत्युंजय मंत्र – दिवंगत आत्माओं की शांति के लिए"
              ]
            },
            {
              title: "सरल घरेलू अनुष्ठान:",
              items: [
                "शनिवार को पीपल के पेड़ को जल चढ़ाएं",
                "कौवों, गायों और ब्राह्मणों को खिलाएं",
                "पूर्वजों की ओर से दान करें (भोजन, कपड़े, शिक्षा)"
              ]
            }
          ]
        },
        {
          heading: "🏡 यज्ञ के अलावा उपाय",
          items: [
            "गया, हरिद्वार, या प्रयाग में पिंड दान",
            "काशी श्राद्ध: मोक्ष-केंद्रित अनुष्ठान",
            "पूर्वजों की याद में दान: गाय, पुस्तकें, या भूमि दान",
            "पीड़ित ग्रहों के लिए ग्रह शांति पूजा"
          ],
          subsections: [
            {
              title: "सुझाए गए रत्न:",
              items: [
                "हेसोनाइट (गोमेद) – राहु",
                "माणिक्य – यदि सूर्य कमजोर है",
                "लहसुनिया – केतु (केवल उचित ज्योतिषीय मार्गदर्शन के साथ पहनें)"
              ]
            }
          ]
        },
        {
          heading: "🪔 वास्तविक जीवन प्रभाव और प्रशंसापत्र",
          content: "कहानियां:",
          items: [
            "यज्ञ के बाद विवाह का साकार होना",
            "वर्षों की बांझपन के बाद जोड़ों का गर्भधारण करना",
            "कानूनी समस्याओं का हल होना",
            "पारिवारिक व्यवसायों का फिर से समृद्ध होना"
          ]
        },
        {
          heading: "✍️ वैदिक और पौराणिक संदर्भ",
          content: "शास्त्रीय स्रोत:",
          items: [
            "गरुड़ पुराण: पैतृक क्षेत्रों और उपायों का वर्णन करता है",
            "श्राद्ध कल्प: पितरों को शांत करने के लिए अनुष्ठान दिशानिर्देश",
            "मनुस्मृति और ऋग्वेद: पूर्वज पूजा का महत्व"
          ]
        }
      ]
    }
  };

  const selectedContent = content[language];

  return (
    <div className="pitradosh-container">
      <Navbar />
      <div className="pitradosh-content">
        <div className="pitradosh-background">
          <div className="pitradosh-overlay">
            <div className="pitradosh-text-container">
              <h1 className="pitradosh-title">{selectedContent.title}</h1>

              {selectedContent.sections.map((section, index) => (
                <section key={index} className="pitradosh-section">
                  <h2>{section.heading}</h2>

                  {section.content && <p className="pitradosh-intro">{section.content}</p>}

                  {section.items && (
                    <ul className="pitradosh-list">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx} className="pitradosh-subsection">
                      <h3>{subsection.title}</h3>
                      <ul className="pitradosh-list">
                        {subsection.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>
              ))}

              <div className="book-yagya">
                <h2>
                  {language === 'english'
                    ? 'Book Your Personalized Pitra Dosh Nivaran Yagya'
                    : 'अपना व्यक्तिगत पितृ दोष निवारण यज्ञ बुक करें'}
                </h2>
                <p>
                  {language === 'english'
                    ? 'Performed by expert Vedic priests according to your Gotra and family traditions.'
                    : 'आपके गोत्र और पारिवारिक परंपराओं के अनुसार विशेषज्ञ वैदिक पुरोहितों द्वारा किया जाता है।'}
                </p>
                <button className="book-button">
                  {language === 'english' ? 'Book Yagya Now 🙏🏼' : 'अभी यज्ञ बुक करें 🙏🏼'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PitraDosh;