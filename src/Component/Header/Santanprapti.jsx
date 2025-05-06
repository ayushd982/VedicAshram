import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import santaanImage from '../../assets/Santaan.jpg';
import './Santanprapti.css';

const Santanprapti = () => {
  const { language } = useLanguage();

  return (
    <div className="santan-container">
      <div className="background-wrapper">
        <img src={santaanImage} alt="" className="background-image" style={{ backgroundRepeat: 'no-repeat' }} />
      </div>
      <Navbar />

      <div className="santan-content">
        {/* Main Header */}
        <header className="main-header">
          <h1>
            {language === 'hindi'
              ? 'संतान प्राप्ति यज्ञ: दिव्य आशीर्वाद के लिए'
              : 'Shantaan Prapti Yagya: Divine Blessings for Parenthood'}
          </h1>
          <p className="subheading">
            {language === 'hindi'
              ? 'पवित्र वैदिक अनुष्ठानों के माध्यम से दिव्य कृपा और ज्योतिषीय आशीर्वाद प्राप्त करें'
              : 'Invoke divine grace and astrological blessings for a healthy, joyful progeny through sacred Vedic rituals.'}
          </p>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <p>
            {language === 'hindi'
              ? 'पवित्र वैदिक परंपरा में, संतान प्राप्ति को जीवन का सबसे बड़ा आशीर्वाद माना जाता है, जो भौतिक और आध्यात्मिक दोनों लक्ष्यों (धर्म, अर्थ, काम, मोक्ष) को पूरा करता है।'
              : 'In the sacred Vedic tradition, having a child is considered one of life\'s greatest blessings, fulfilling both material and spiritual goals (Dharma, Artha, Kama, Moksha).'}
          </p>
          <p>
            {language === 'hindi'
              ? 'संतान प्राप्ति यज्ञ एक अत्यंत सम्मानित अनुष्ठान है जिसे गर्भधारण से संबंधित बाधाओं को दूर करने, सुरक्षित गर्भावस्था सुनिश्चित करने और दंपति को स्वस्थ और सद्गुणी संतान का आशीर्वाद देने के लिए किया जाता है।'
              : 'Shantaan Prapti Yagya is a highly revered ritual performed to remove obstacles related to conception, ensure a safe pregnancy, and bless the couple with healthy and virtuous children.'}
          </p>
          <p>
            {language === 'hindi'
              ? 'प्राचीन ज्योतिष द्वारा निर्देशित और विद्वान वैदिक पुरोहितों द्वारा किया जाने वाला यह यज्ञ ग्रहीय प्रभावों को सामंजस्यपूर्ण बनाता है और संतान के लिए जिम्मेदार दिव्य शक्तियों को प्रसन्न करता है।'
              : 'Guided by ancient astrology and performed by learned Vedic priests, this Yagya harmonizes planetary influences and pleases divine energies responsible for progeny.'}
          </p>
        </section>

        {/* Why Perform Section */}
        <section className="benefits-section">
          <h2>
            {language === 'hindi'
              ? 'संतान प्राप्ति यज्ञ क्यों करें?'
              : 'Why Perform Shantaan Prapti Yagya?'}
          </h2>
          <div className="benefits-grid">
            {[
              {
                icon: '👣',
                title: {
                  hindi: 'प्रजनन दोष निवारण',
                  english: 'Remove Fertility Doshas'
                },
                description: {
                  hindi: 'प्रजनन और बच्चे के जन्म को प्रभावित करने वाले दोषों को दूर करने के लिए (जैसे पुत्र दोष, पितृ दोष, नाड़ी दोष)',
                  english: 'To remove doshas affecting fertility and childbirth (like Putra Dosha, Pitra Dosha, Nadi Dosha)'
                }
              },
              {
                icon: '🕉️',
                title: {
                  hindi: 'देवताओं का आशीर्वाद',
                  english: 'Divine Blessings'
                },
                description: {
                  hindi: 'भगवान शिव, माँ पार्वती, भगवान विष्णु और संतान लक्ष्मी जैसे देवताओं से आशीर्वाद प्राप्त करने के लिए',
                  english: 'To seek blessings from deities like Lord Shiva, Maa Parvati, Lord Vishnu, and Santana Lakshmi'
                }
              },
              {
                icon: '⭐',
                title: {
                  hindi: 'अनुकूल ग्रहों को मजबूत करना',
                  english: 'Strengthen Favorable Planets'
                },
                description: {
                  hindi: 'अनुकूल ग्रहों को मजबूत करने के लिए (जैसे बृहस्पति — गुरु, बच्चों का कारक)',
                  english: 'To strengthen favorable planets (like Jupiter — Guru, the significator of children)'
                }
              },
              {
                icon: '🌿',
                title: {
                  hindi: 'स्वास्थ्य और कल्याण',
                  english: 'Health and Well-being'
                },
                description: {
                  hindi: 'माता और भविष्य के बच्चे के स्वास्थ्य और कल्याण को सुनिश्चित करने के लिए',
                  english: 'To ensure the health and well-being of the mother and future child'
                }
              },
              {
                icon: '✨',
                title: {
                  hindi: 'कार्मिक बाधाओं का निवारण',
                  english: 'Remove Karmic Obstacles'
                },
                description: {
                  hindi: 'वंशानुगत कार्मिक बाधाओं और आध्यात्मिक अवरोधों को दूर करने के लिए',
                  english: 'To eliminate ancestral karmic obstacles and spiritual blockages'
                }
              }
            ].map((benefit, index) => (
              <div key={index} className="benefit-card">
                <span className="benefit-icon">{benefit.icon}</span>
                <h3>{language === 'hindi' ? benefit.title.hindi : benefit.title.english}</h3>
                <p>{language === 'hindi' ? benefit.description.hindi : benefit.description.english}</p>
              </div>
            ))}
          </div>
        </section>

        {/* When to Perform Section */}
        <section className="when-section">
          <h2>
            {language === 'hindi'
              ? 'संतान प्राप्ति यज्ञ कब करें?'
              : 'When to Perform Shantaan Prapti Yagya?'}
          </h2>
          <ul className="when-list">
            <li>
              {language === 'hindi'
                ? 'चिकित्सकीय प्रयासों के बावजूद गर्भधारण में कठिनाइयों का सामना करने पर'
                : 'When facing difficulties in conception despite medical efforts'}
            </li>
            <li>
              {language === 'hindi'
                ? 'गर्भपात या गर्भावस्था के दौरान जटिलताओं से बचाव के लिए'
                : 'To protect against miscarriages or complications during pregnancy'}
            </li>
            <li>
              {language === 'hindi'
                ? 'ज्योतिषीय विश्लेषण से ग्रहीय असंतुलन का पता चलने पर'
                : 'After astrological analysis shows planetary imbalances'}
            </li>
            <li>
              {language === 'hindi'
                ? 'पूर्णिमा, संक्रांति या बृहस्पति (गुरुवार) द्वारा शासित दिनों जैसे विशिष्ट शुभ समय पर'
                : 'During specific auspicious timings like Purnima, Sankranti, or days ruled by Jupiter (Thursday)'}
            </li>
          </ul>
        </section>

        {/* Rituals Section */}
        <section className="rituals-section">
          <h2>
            {language === 'hindi'
              ? 'यज्ञ में शामिल मुख्य अनुष्ठान'
              : 'Main Rituals Included in the Yagya'}
          </h2>
          <div className="process-steps">
            {[
              {
                step: '1',
                title: {
                  hindi: 'गणेश पूजा',
                  english: 'Ganesh Puja'
                },
                description: {
                  hindi: 'बाधाओं के निवारण के लिए',
                  english: 'For removal of obstacles'
                }
              },
              {
                step: '2',
                title: {
                  hindi: 'ग्रह शांति',
                  english: 'Graha Shanti'
                },
                description: {
                  hindi: 'अशुभ ग्रहों को शांत करना',
                  english: 'Pacifying malefic planets'
                }
              },
              {
                step: '3',
                title: {
                  hindi: 'विशेष मंत्र जाप',
                  english: 'Special Mantra Chanting'
                },
                description: {
                  hindi: 'संतान गोपाल (कृष्ण के बाल रूप) के लिए',
                  english: 'For Santana Gopala (child form of Krishna)'
                }
              },
              {
                step: '4',
                title: {
                  hindi: 'हवन',
                  english: 'Havan'
                },
                description: {
                  hindi: 'विशिष्ट जड़ी-बूटियों और घी के साथ अग्नि में आहुति',
                  english: 'Fire offerings with specific herbs and ghee'
                }
              },
              {
                step: '5',
                title: {
                  hindi: 'संतान गोपाल मंत्र जाप और होमम',
                  english: 'Santaan Gopal Mantra Jaap and Homam'
                },
                description: {
                  hindi: 'विशेष मंत्रों का जाप और होम',
                  english: 'Chanting of special mantras and fire ritual'
                }
              },
              {
                step: '6',
                title: {
                  hindi: 'पवित्र वस्तुओं का अर्पण',
                  english: 'Sacred Offerings'
                },
                description: {
                  hindi: 'नारियल, फल और मिठाई जैसी पवित्र वस्तुओं का अर्पण',
                  english: 'Offering sacred items like coconut, fruits, and sweets'
                }
              }
            ].map((step, index) => (
              <div key={index} className="process-card">
                <div className="step-number">{step.step}</div>
                <h3>{language === 'hindi' ? step.title.hindi : step.title.english}</h3>
                <p>{language === 'hindi' ? step.description.hindi : step.description.english}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Astrological Remedies Section */}
        <section className="remedies-section">
          <h2>
            {language === 'hindi'
              ? 'यज्ञ के साथ ज्योतिषीय उपाय'
              : 'Astrological Remedies Along with Yagya'}
          </h2>
          <div className="remedies-list">
            <div className="remedy-item">
              <div className="remedy-icon">💎</div>
              <div className="remedy-content">
                <h3>
                  {language === 'hindi'
                    ? 'उपयुक्त रत्न धारण करना'
                    : 'Wearing Appropriate Gemstones'}
                </h3>
                <p>
                  {language === 'hindi'
                    ? 'बृहस्पति के लिए पीला नीलम (पुखराज) जैसे उपयुक्त रत्न धारण करना'
                    : 'Wearing appropriate gemstones (like Yellow Sapphire for Jupiter)'}
                </p>
              </div>
            </div>
            <div className="remedy-item">
              <div className="remedy-icon">🙏</div>
              <div className="remedy-content">
                <h3>
                  {language === 'hindi'
                    ? 'व्रत रखना'
                    : 'Observing Fasts'}
                </h3>
                <p>
                  {language === 'hindi'
                    ? 'संतान सप्तमी व्रत रखना'
                    : 'Observing fasts (Santaan Saptami Vrat)'}
                </p>
              </div>
            </div>
            <div className="remedy-item">
              <div className="remedy-icon">🪙</div>
              <div className="remedy-content">
                <h3>
                  {language === 'hindi'
                    ? 'दान'
                    : 'Donations'}
                </h3>
                <p>
                  {language === 'hindi'
                    ? 'ब्राह्मणों और मंदिरों को दान (दान)'
                    : 'Donations to Brahmins and temples (daan)'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="booking-section">
          <h2>
            {language === 'hindi'
              ? 'अपना व्यक्तिगत संतान प्राप्ति यज्ञ बुक करें'
              : 'Book Your Personalized Shantaan Prapti Yagya'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'दशकों के अनुभव के साथ, हमारे वैदिक पुरोहित आपकी जन्म कुंडली के अनुसार अत्यधिक अनुकूलित संतान प्राप्ति यज्ञ करते हैं। अपने जीवन में एक छोटे से आनंद के बंडल का स्वागत करने के लिए आशा, विश्वास और दिव्य कृपा को पुनः प्राप्त करें।'
              : 'With decades of experience, our Vedic priests perform highly customized Shantaan Prapti Yagyas as per your birth chart. Reclaim hope, faith, and divine grace to welcome a little bundle of joy into your life.'}
          </p>
          <button className="book-button">
            {language === 'hindi'
              ? 'अभी संतान प्राप्ति यज्ञ बुक करें'
              : 'Book Shantaan Prapti Yagya Now'} 🙏✨
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Santanprapti;
