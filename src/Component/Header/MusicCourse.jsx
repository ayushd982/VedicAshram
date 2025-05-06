import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import classicalMusicBg from '../../assets/ClasssicalMusic.jpg';
import './MusicCourse.css';

const MusicCourse = () => {
  const { language } = useLanguage();

  return (
    <div className="music-course-container">
      <Navbar />
      <div className="background-wrapper">
        <img src={classicalMusicBg} alt="" className="background-image" />
      </div>

      <div className="music-course-content">
        {/* Main Header */}
        <header className="main-header">
          <h1>
            {language === 'hindi'
              ? '🎶 शास्त्रीय संगीत पाठ्यक्रम - ज्योतिष और आध्यात्मिक विकास के लिए'
              : '🎶 Classical Music Course - For Astrology & Spiritual Growth'}
          </h1>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <h2>
            {language === 'hindi'
              ? '🪔 परिचय'
              : '🪔 Introduction'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'भारतीय शास्त्रीय संगीत केवल एक कला नहीं है—यह एक आध्यात्मिक यात्रा है जो आंतरिक आत्मा को ब्रह्मांडीय कंपनों के साथ संरेखित करती है। नाद योग (ध्वनि चिकित्सा) में गहराई से जड़ी हुई, भारतीय संगीत के राग और ताल ग्रहीय ऊर्जाओं और चक्र प्रणालियों के साथ मेल खाते हैं, जिससे यह पाठ्यक्रम किसी भी ज्योतिष-केंद्रित प्लेटफॉर्म के लिए एक आदर्श अतिरिक्त बन जाता है।'
              : 'Indian Classical Music is not just an art—it is a spiritual journey that aligns the inner soul with cosmic vibrations. Rooted deeply in Nada Yoga (sound therapy), the ragas and talas of Indian music correspond with planetary energies and chakra systems, making this course an ideal addition to any astrology-focused platform.'}
          </p>
        </section>

        {/* Historical and Spiritual Foundation Section */}
        <section className="history-section">
          <h2>
            {language === 'hindi'
              ? '📜 ऐतिहासिक और आध्यात्मिक आधार'
              : '📜 Historical and Spiritual Foundation'}
          </h2>
          <ul>
            <li>
              {language === 'hindi'
                ? 'सामवेद में उत्पत्ति - यज्ञों और अनुष्ठानों के लिए संगीतमय मंत्र।'
                : 'Origins in Samveda – musical chants for yajnas and rituals.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'नाट्य शास्त्र, भरत मुनि, और संत संगीतकारों के माध्यम से विकास।'
                : 'Evolution through Natya Shastra, Bharata Muni, and saint musicians.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'राग की भावनात्मक और ब्रह्मांडीय शक्ति के रूप में भूमिका।'
                : 'The role of raga as an emotional and cosmic force.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'ज्योतिषीय तत्वों से संगीत का संबंध (जैसे, राग भैरव शनि के लिए, राग यमन बृहस्पति के लिए)।'
                : 'Music\'s connection to astrological elements (e.g., Raag Bhairav for Saturn, Raag Yaman for Jupiter).'}
            </li>
            <li>
              {language === 'hindi'
                ? 'उपचार और संतुलन के लिए प्राचीन ज्योतिष और आयुर्वेद में संगीत का उपयोग।'
                : 'Use of music in ancient astrology and ayurveda for healing and balance.'}
            </li>
          </ul>
        </section>

        {/* Syllabus Overview Section */}
        <section className="syllabus-section">
          <h2>
            {language === 'hindi'
              ? '🎼 पाठ्यक्रम अवलोकन'
              : '🎼 Syllabus Overview'}
          </h2>
          <div className="module-grid">
            {[
              {
                module: '1',
                title: {
                  hindi: 'भारतीय शास्त्रीय संगीत का परिचय',
                  english: 'Introduction to Indian Classical Music'
                }
              },
              {
                module: '2',
                title: {
                  hindi: 'स्वर (सात नोट्स) और श्रुति',
                  english: 'Swaras (Seven Notes) and Shruti'
                }
              },
              {
                module: '3',
                title: {
                  hindi: 'थाट प्रणाली (मूल स्केल)',
                  english: 'Thaat System (Parent Scales)'
                }
              },
              {
                module: '4',
                title: {
                  hindi: 'रागों का समय सिद्धांत',
                  english: 'Time Theory of Ragas'
                }
              },
              {
                module: '5',
                title: {
                  hindi: 'ताल (लय चक्र) और लय',
                  english: 'Tala (Rhythm Cycles) and Laya'
                }
              },
              {
                module: '6',
                title: {
                  hindi: 'राग गहन अध्ययन (जैसे, भैरव, यमन, दरबारी, देश)',
                  english: 'Raga Deep Dives (e.g., Bhairav, Yaman, Darbari, Desh)'
                }
              },
              {
                module: '7',
                title: {
                  hindi: 'ज्योतिष-संगीत संबंध',
                  english: 'Astrology-Music Connection'
                }
              },
              {
                module: '8',
                title: {
                  hindi: 'ध्यान के रूप में संगीत',
                  english: 'Music as Meditation'
                }
              },
              {
                module: '9',
                title: {
                  hindi: 'गायन तकनीक और वाद्य यंत्र',
                  english: 'Vocal Techniques and Instruments'
                }
              },
              {
                module: '10',
                title: {
                  hindi: 'लाइव अभ्यास और मंत्र-आधारित संगीत',
                  english: 'Live Practice & Mantra-Based Music'
                }
              }
            ].map((module, index) => (
              <div key={index} className="module-card">
                <div className="module-number">Module {module.module}</div>
                <h3>{language === 'hindi' ? module.title.hindi : module.title.english}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Training Section */}
        <section className="practical-section">
          <h2>
            {language === 'hindi'
              ? '🎤 व्यावहारिक प्रशिक्षण'
              : '🎤 Practical Training'}
          </h2>
          <ul>
            <li>
              {language === 'hindi'
                ? 'ग्रहीय घंटों (होरा) के आधार पर दैनिक रियाज़ कार्यक्रम।'
                : 'Daily Riyaz schedule based on planetary hours (Hora).'}
            </li>
            <li>
              {language === 'hindi'
                ? 'उनके उपयुक्त समय के दौरान रागों का अभ्यास करें।'
                : 'Practice ragas during their appropriate time windows.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'मूल रचनाएँ: बंदिश, आलाप, तान, और तराना।'
                : 'Basic compositions: Bandish, Alap, Taan, and Tarana.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'स्वर संरेखण के साथ मंत्र जाप का परिचय।'
                : 'Introduction to mantra chanting with swara alignment.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'चक्र संगीत चिकित्सा के साथ एकीकरण।'
                : 'Integration with chakra music therapy.'}
            </li>
          </ul>
        </section>

        {/* Music and Astrology Connection Section */}
        <section className="astrology-section">
          <h2>
            {language === 'hindi'
              ? '🔯 संगीत और ज्योतिष संबंध'
              : '🔯 Music and Astrology Connection'}
          </h2>
          <h3>
            {language === 'hindi'
              ? 'रागों के साथ ग्रहीय संबंध:'
              : 'Planetary association with ragas:'}
          </h3>
          <div className="planet-grid">
            {[
              {
                planet: {
                  hindi: 'सूर्य',
                  english: 'Sun'
                },
                raga: 'Raga Bilawal',
                effect: {
                  hindi: '(आत्मविश्वास, स्पष्टता)',
                  english: '(confidence, clarity)'
                }
              },
              {
                planet: {
                  hindi: 'चंद्रमा',
                  english: 'Moon'
                },
                raga: 'Raga Kafi',
                effect: {
                  hindi: '(भावना, शांति)',
                  english: '(emotion, peace)'
                }
              },
              {
                planet: {
                  hindi: 'मंगल',
                  english: 'Mars'
                },
                raga: 'Raga Bhairav',
                effect: {
                  hindi: '(शक्ति, अनुशासन)',
                  english: '(strength, discipline)'
                }
              },
              {
                planet: {
                  hindi: 'बुध',
                  english: 'Mercury'
                },
                raga: 'Raga Desh',
                effect: {
                  hindi: '(बुद्धि, संचार)',
                  english: '(intellect, communication)'
                }
              }
            ].map((item, index) => (
              <div key={index} className="planet-card">
                <h4>{language === 'hindi' ? item.planet.hindi : item.planet.english}:</h4>
                <p>{item.raga} {language === 'hindi' ? item.effect.hindi : item.effect.english}</p>
              </div>
            ))}
          </div>
          <ul>
            <li>
              {language === 'hindi'
                ? 'संगीत आवृत्तियों के माध्यम से दोष संतुलन।'
                : 'Dosha balancing through musical frequencies.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'कुंडली दोषों के लिए व्यक्तिगत राग उपचार।'
                : 'Personalized Raga remedies for chart doshas.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'नक्षत्र कैसे संगीत क्षमता को प्रभावित करते हैं।'
                : 'How Nakshatras influence musical potential.'}
            </li>
          </ul>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2>
            {language === 'hindi'
              ? '🧘 शास्त्रीय संगीत के लाभ'
              : '🧘 Benefits of Classical Music'}
          </h2>
          <ul>
            <li>
              {language === 'hindi'
                ? 'बाएं और दाएं मस्तिष्क के संतुलन को सक्रिय करता है।'
                : 'Activates left and right brain balance.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'ध्यान की स्थिति और ग्रहीय संरेखण को बढ़ाता है।'
                : 'Enhances meditative state and planetary alignment.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'तनाव, चिंता और कार्मिक ठहराव को दूर करता है।'
                : 'Relieves stress, anxiety, and karmic stagnation.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'ध्यान, स्पष्टता और आध्यात्मिक अनुशासन में सुधार करता है।'
                : 'Improves focus, clarity, and spiritual discipline.'}
            </li>
          </ul>
        </section>

        {/* Instruments Section */}
        <section className="instruments-section">
          <h2>
            {language === 'hindi'
              ? '🪕 वाद्य यंत्र और उनकी ऊर्जाएँ'
              : '🪕 Instruments and Their Energies'}
          </h2>
          <div className="instrument-grid">
            {[
              {
                name: 'Veena',
                description: {
                  hindi: 'सरस्वती का वाद्य यंत्र, बृहस्पति के ज्ञान को बढ़ाता है।',
                  english: 'Saraswati\'s instrument, enhances Jupiterian wisdom.'
                }
              },
              {
                name: 'Bansuri',
                description: {
                  hindi: 'भगवान कृष्ण से जुड़ा, चंद्रमा और शुक्र के लिए अच्छा है।',
                  english: 'Linked with Lord Krishna, good for Moon and Venus.'
                }
              },
              {
                name: 'Tabla/Mridangam',
                description: {
                  hindi: 'लयबद्ध निपुणता; शनि और मंगल के साथ संरेखित करता है।',
                  english: 'Rhythmic mastery; aligns with Saturn and Mars.'
                }
              },
              {
                name: 'Tanpura',
                description: {
                  hindi: 'आधार ध्वनि; शाश्वत ओम (सार्वभौमिक ध्वनि) का प्रतिनिधित्व करता है।',
                  english: 'Base drone; represents eternal OM (universal sound).'
                }
              }
            ].map((instrument, index) => (
              <div key={index} className="instrument-card">
                <h3>{instrument.name}</h3>
                <p>{language === 'hindi' ? instrument.description.hindi : instrument.description.english}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reading Material Section */}
        <section className="reading-section">
          <h2>
            {language === 'hindi'
              ? '📚 पठन सामग्री और संदर्भ'
              : '📚 Reading Material and References'}
          </h2>
          <ul>
            <li>
              {language === 'hindi'
                ? '"संगीत रत्नाकर" शारंगदेव द्वारा'
                : '"Sangeet Ratnakar" by Sharangdeva'}
            </li>
            <li>
              {language === 'hindi'
                ? '"नाद योग: ध्वनि का योग" स्वामी सच्चिदानंद द्वारा'
                : '"Nada Yoga: The Yoga of Sound" by Swami Satchidananda'}
            </li>
            <li>
              {language === 'hindi'
                ? 'वैदिक ज्योतिष चार्ट जो संगीत प्रतिभाओं से मेल खाते हैं।'
                : 'Vedic astrology charts that correspond to musical gifts.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'ज्योतिष में संगीत उपचारों के वास्तविक केस स्टडीज।'
                : 'Real-life case studies of musical remedies in astrology.'}
            </li>
          </ul>
        </section>

        {/* Online Platform Section */}
        <section className="platform-section">
          <h2>
            {language === 'hindi'
              ? '🌍 ऑनलाइन प्लेटफॉर्म सुविधाएँ'
              : '🌍 Online Platform Features'}
          </h2>
          <ul>
            <li>
              {language === 'hindi'
                ? 'उपयोगकर्ता की कुंडली के आधार पर ऑडियो नमूने और राग।'
                : 'Audio samples and ragas based on user\'s horoscope.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'ग्रहीय होरा समय के अनुसार सेट किया गया वर्चुअल रियाज़ टाइमर।'
                : 'Virtual Riyaz timer set to planetary Hora timings.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'अनुकूलित सीखने के मार्ग के लिए ज्योतिष चार्ट के साथ एकीकरण।'
                : 'Integration with astrology chart for customized learning path.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'गुरुओं के साथ साप्ताहिक लाइव सत्र।'
                : 'Weekly live sessions with gurus.'}
            </li>
          </ul>
        </section>

        {/* Certification Section */}
        <section className="certification-section">
          <h2>
            {language === 'hindi'
              ? '📜 प्रमाणन और परिणाम'
              : '📜 Certification and Outcome'}
          </h2>
          <ul>
            <li>
              {language === 'hindi'
                ? '3-महीने, 6-महीने, और 1-वर्ष के स्तर।'
                : '3-month, 6-month, and 1-year levels.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'वैदिक कला संस्थान से पूर्णता का प्रमाण पत्र (ब्रांडेड किया जा सकता है)।'
                : 'Certificate of Completion from Vedic Arts Institute (can be branded).'}
            </li>
            <li>
              {language === 'hindi'
                ? 'उन्नत ध्वनि उपचार कार्यक्रमों के लिए पात्रता।'
                : 'Eligibility for advanced sound healing programs.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'ज्योतिषियों, योगियों और संगीतकारों के लिए आध्यात्मिक और व्यावसायिक लाभ।'
                : 'Spiritual and professional benefits for astrologers, yogis, and musicians.'}
            </li>
          </ul>
        </section>

        {/* Enrollment Section */}
        <section className="enrollment-section">
          <h2>
            {language === 'hindi'
              ? 'आज ही अपनी संगीत यात्रा शुरू करें'
              : 'Begin Your Musical Journey Today'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'प्राचीन वैदिक ज्ञान और आधुनिक संगीत शिक्षा का अनूठा मिश्रण अनुभव करें'
              : 'Experience a unique blend of ancient Vedic wisdom and modern music education'}
          </p>
          <div className="enrollment-buttons">
            <button className="enroll-button">
              {language === 'hindi'
                ? 'अभी नामांकन करें'
                : 'Enroll Now'} 🎵
            </button>
            <button className="demo-button">
              {language === 'hindi'
                ? 'डेमो कक्षा देखें'
                : 'Watch Demo Class'} 🎬
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MusicCourse;