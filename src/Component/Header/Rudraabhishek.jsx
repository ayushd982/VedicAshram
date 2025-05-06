import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './rudraabhishek_new.css';

const Rudraabhishek = () => {
  const { language } = useLanguage();

  return (
    <div className="rudra-page">
      <Navbar />
      <div className="background-wrapper">
        <img src="/images/Rudra.jpg" alt="Rudra Background" className="background-image" />
      </div>
      <div className="rudra-content">
        <div className="container rudra-container">
          <h1 className="rudra-title">
            {language === 'hindi'
              ? 'रुद्राभिषेक: भगवान शिव का सर्वोच्च वैदिक अनुष्ठान'
              : 'Rudrabhishek: The Supreme Vedic Ritual of Lord Shiva'}
          </h1>

          <section className="rudra-intro">
            <div className="rudra-description">
              <h2>{language === 'hindi' ? 'परिचय' : 'Introduction'}</h2>
              <p>
                {language === 'hindi'
                  ? 'रुद्राभिषेक एक अत्यंत शक्तिशाली और सम्मानित वैदिक अनुष्ठान है जिसे भगवान शिव की रुद्र रूप में पूजा के लिए किया जाता है। इस पवित्र अनुष्ठान में यजुर्वेद से "रुद्रम्" के शक्तिशाली मंत्रों का जाप करते हुए शिवलिंग पर विभिन्न चढ़ावों से अभिषेक किया जाता है। यह माना जाता है कि यह अनुष्ठान अपार आध्यात्मिक लाभ प्रदान करता है, नकारात्मक कर्म को नष्ट करता है, और स्वास्थ्य, धन, शांति और समृद्धि लाता है।'
                  : 'Rudrabhishek is a highly powerful and revered Vedic ritual performed to worship Lord Shiva in his Rudra form. This sacred ritual involves the ceremonial bathing of the Shiva Lingam with various offerings while chanting the potent hymns of the "Rudram" from the Yajurveda. It is believed to bestow immense spiritual benefits, destroy negative karma, and bring health, wealth, peace, and prosperity.'}
              </p>
              <p>
                {language === 'hindi'
                  ? 'रुद्राभिषेक हजारों वर्षों से किया जाता रहा है और शैव परंपरा में इसका महत्वपूर्ण स्थान है। यह अनुष्ठान भक्त के शरीर, मन और आत्मा को शुद्ध करता है और मोक्ष (मुक्ति) की ओर एक मार्ग के रूप में कार्य करता है। इसे विशेष रूप से महत्वपूर्ण जीवन परिवर्तनों, ज्योतिषीय बाधाओं के दौरान, या जब स्वास्थ्य, सद्भाव, या अशुभ ग्रहीय प्रभावों से सुरक्षा के लिए दिव्य हस्तक्षेप की आवश्यकता होती है, तब करने की सलाह दी जाती है।'
                  : 'Rudrabhishek has been practiced for thousands of years and holds a significant place in the Shaivite tradition. This ritual purifies the devotee\'s body, mind, and soul and serves as a path toward liberation (moksha). It is especially recommended during important life transitions, astrological afflictions, or when seeking divine intervention for health, harmony, or protection from malefic planetary influences.'}
              </p>
            </div>
          </section>

          <section className="rudra-scriptural">
            <h2>{language === 'hindi' ? 'शास्त्रीय उत्पत्ति और महत्व' : 'Scriptural Origin and Significance'}</h2>
            <p>
              {language === 'hindi'
                ? 'रुद्राभिषेक की उत्पत्ति यजुर्वेद में निहित है, जहां श्री रुद्रम और चमकम मंत्रों को रुद्र—भगवान शिव के उग्र रूप की पूजा के लिए निर्धारित किया गया है। पुराणों के अनुसार, भगवान राम ने भी रावण के साथ युद्ध से पहले रामेश्वरम में भगवान शिव का आशीर्वाद प्राप्त करने के लिए रुद्राभिषेक किया था।'
                : 'The origin of Rudrabhishek is rooted in the Yajurveda, where the Sri Rudram and Chamakam hymns are prescribed for worshipping Rudra—the fierce form of Lord Shiva. As per the Puranas, even Lord Rama performed Rudrabhishek at Rameswaram to seek Lord Shiva\'s blessings before his battle with Ravana.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'श्री रुद्रम भगवान शिव को विभिन्न अभिव्यक्तियों में वर्णित करता है, और प्रत्येक श्लोक (अनुवाक) के बारे में माना जाता है कि वह ऊर्जा का एक विशिष्ट रूप आमंत्रित करता है। यह पवित्र मंत्र, जब अभिषेकम (अनुष्ठानिक स्नान) के साथ मिलाया जाता है, तो एक तीव्र कंपन क्षेत्र बनाता है जो आसपास के वातावरण को शुद्ध करता है और आत्मा को पवित्र करता है। चमकम भाग, जो रुद्रम के बाद आता है, इच्छाओं की दिव्य पूर्ति के लिए एक प्रार्थना है।'
                : 'Sri Rudram describes Lord Shiva in various manifestations, and each verse (Anuvaka) is believed to invoke a specific form of energy. This sacred chant, when combined with abhishekam (ritualistic bathing), creates an intense vibrational field that cleanses the surroundings and purifies the soul. The Chamakam portion, which follows the Rudram, is a prayer requesting divine fulfillment of desires.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'शिव पुराण, स्कंद पुराण और लिंगम पुराण में रुद्राभिषेक के लाभों का व्यापक रूप से उल्लेख किया गया है। इसे सैकड़ों यज्ञों के बराबर माना जाता है और यह दिव्य कृपा और पिछले कुकर्मों के लिए क्षमा लाता है।'
                : 'The Shiv Purana, Skanda Purana, and Lingam Purana extensively mention the benefits of Rudrabhishek. It is considered equivalent to performing hundreds of Yagnas and brings divine grace and forgiveness for past misdeeds.'}
            </p>
          </section>

          <section className="rudra-types">
            <h2>{language === 'hindi' ? 'रुद्राभिषेक के प्रकार और उनके लाभ' : 'Types of Rudrabhishek and Their Benefits'}</h2>
            <div className="types-grid">
              <div className="type-card">
                <h3>{language === 'hindi' ? 'जलाभिषेक' : 'Jalabhishek'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'शुद्ध जल से अभिषेक शांति और स्पष्टता लाता है।'
                    : 'Pure water abhishek brings peace and clarity.'}
                </p>
              </div>
              <div className="type-card">
                <h3>{language === 'hindi' ? 'दूध अभिषेक' : 'Dudh (Milk) Abhishek'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'दीर्घायु और स्वास्थ्य के लिए।'
                    : 'For longevity and health.'}
                </p>
              </div>
              <div className="type-card">
                <h3>{language === 'hindi' ? 'दही अभिषेक' : 'Dahi (Curd) Abhishek'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'संतान और पारिवारिक खुशी के लिए।'
                    : 'For progeny and family happiness.'}
                </p>
              </div>
              <div className="type-card">
                <h3>{language === 'hindi' ? 'शहद अभिषेक' : 'Honey Abhishek'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'रिश्तों में कड़वाहट को दूर करने और मिठास आकर्षित करने के लिए।'
                    : 'To remove bitterness in relationships and attract sweetness.'}
                </p>
              </div>
              <div className="type-card">
                <h3>{language === 'hindi' ? 'घी अभिषेक' : 'Ghee Abhishek'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'शारीरिक और मानसिक रोगों को दूर करता है।'
                    : 'Removes physical and mental ailments.'}
                </p>
              </div>
              <div className="type-card">
                <h3>{language === 'hindi' ? 'गन्ने के रस का अभिषेक' : 'Sugarcane Juice Abhishek'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'धन और समृद्धि के लिए।'
                    : 'For wealth and prosperity.'}
                </p>
              </div>
              <div className="type-card">
                <h3>{language === 'hindi' ? 'नारियल पानी अभिषेक' : 'Coconut Water Abhishek'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'दिव्य कंपन आकर्षित करने और कर्म को शुद्ध करने के लिए।'
                    : 'To attract divine vibrations and purify karma.'}
                </p>
              </div>
              <div className="type-card">
                <h3>{language === 'hindi' ? 'भस्म अभिषेक' : 'Bhasma Abhishek'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'गहन शुद्धिकरण और आध्यात्मिक उत्थान के लिए।'
                    : 'For intense purification and spiritual upliftment.'}
                </p>
              </div>
              <div className="type-card">
                <h3>{language === 'hindi' ? 'पंचामृत अभिषेक' : 'Panchamrit Abhishek'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'दूध, दही, घी, शहद और शक्कर का संयोजन। समग्र कल्याण प्रदान करता है।'
                    : 'Combination of milk, curd, ghee, honey, and sugar. Bestows overall well-being.'}
                </p>
              </div>
            </div>
            <p className="note">
              {language === 'hindi'
                ? 'प्रत्येक प्रकार का अभिषेक एक विशिष्ट ग्रहीय प्रभाव के साथ अनुनाद करता है। उदाहरण के लिए, दूध चंद्रमा को शांत करता है, शहद शुक्र को संतुलित करता है, घी बृहस्पति को सामंजस्य देता है, और इसी तरह।'
                : 'Each type of Abhishek resonates with a specific planetary influence. For instance, milk pacifies Moon, honey balances Venus, ghee harmonizes Jupiter, and so on.'}
            </p>
          </section>

          <section className="rudra-astro">
            <h2>{language === 'hindi' ? 'रुद्राभिषेक का ज्योतिषीय महत्व' : 'Astrological Importance of Rudrabhishek'}</h2>
            <p>
              {language === 'hindi'
                ? 'रुद्राभिषेक वैदिक ज्योतिष के संदर्भ में विशेष रूप से महत्वपूर्ण है। इसकी अनुशंसा निम्नलिखित स्थितियों में की जाती है:'
                : 'Rudrabhishek is especially significant in the context of Vedic astrology. It is recommended in the following conditions:'}
            </p>
            <ul className="astro-list">
              <li>
                {language === 'hindi'
                  ? 'साढ़े साती या शनि महादशा के दौरान'
                  : 'During Sade Sati or Saturn Mahadasha'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'राहु या केतु की पीड़ा'
                  : 'Rahu or Ketu afflictions'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'काल सर्प दोष'
                  : 'Kala Sarpa Dosha'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'मंगलिक दोष'
                  : 'Manglik Dosha'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'पितृ दोष'
                  : 'Pitru Dosha'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'नीच चंद्रमा, जो मानसिक तनाव का संकेत देता है'
                  : 'Debilitated Moon, indicating mental stress'}
              </li>
            </ul>
            <p>
              {language === 'hindi'
                ? 'रुद्राभिषेक कई ज्योतिषीय समस्याओं के लिए एक उपाय (शांति) के रूप में कार्य करता है। यह ग्रहीय कंपनों को संरेखित करता है, गोचरों के अशुभ प्रभाव को कम करता है, और अनुकूल ग्रहों की शक्ति को बढ़ाता है। अनुष्ठान अक्सर ज्योतिषियों द्वारा किसी व्यक्ति की जन्म कुंडली (जन्म चार्ट) पढ़ने के बाद निर्धारित किया जाता है।'
                : 'Rudrabhishek acts as a remedy (Shanti) for many astrological problems. It aligns planetary vibrations, reduces the malefic impact of transits, and enhances the power of favorable planets. The ritual is often prescribed by astrologers after reading a person\'s Janma Kundali (natal chart).'}
            </p>
          </section>

          <section className="rudra-procedure">
            <h2>{language === 'hindi' ? 'रुद्राभिषेक की प्रक्रिया – विधि विधान' : 'Procedure of Rudrabhishek – Vidhi Vidhan'}</h2>
            <div className="procedure-steps">
              <div className="procedure-step">
                <h3>{language === 'hindi' ? 'संकल्प (इरादा निर्धारण)' : 'Sankalp (Intention Setting)'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'भक्त अनुष्ठान के उद्देश्य की घोषणा करता है।'
                    : 'The devotee declares the purpose of the ritual.'}
                </p>
              </div>
              <div className="procedure-step">
                <h3>{language === 'hindi' ? 'शुद्धिकरण' : 'Purification'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'भक्त और स्थान दोनों को पवित्र जल से शुद्ध किया जाता है।'
                    : 'Both devotee and place are purified with holy water.'}
                </p>
              </div>
              <div className="procedure-step">
                <h3>{language === 'hindi' ? 'आवाहन' : 'Invocation (Avahanam)'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'लिंगम में भगवान शिव का आह्वान करना।'
                    : 'Invoking Lord Shiva in the Lingam.'}
                </p>
              </div>
              <div className="procedure-step">
                <h3>{language === 'hindi' ? 'अभिषेक प्रक्रिया' : 'Abhishek Process'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'निम्न चढ़ावे अर्पित करते हुए रुद्रम का जाप:'
                    : 'Chanting of Rudram while offering:'}
                </p>
                <ul>
                  <li>{language === 'hindi' ? 'जल (पानी)' : 'Jal (water)'}</li>
                  <li>{language === 'hindi' ? 'दूध' : 'Milk'}</li>
                  <li>{language === 'hindi' ? 'दही' : 'Curd'}</li>
                  <li>{language === 'hindi' ? 'शहद' : 'Honey'}</li>
                  <li>{language === 'hindi' ? 'घी' : 'Ghee'}</li>
                  <li>{language === 'hindi' ? 'पंचामृत' : 'Panchamrit'}</li>
                  <li>{language === 'hindi' ? 'विभूति (राख)' : 'Vibhuti (ash)'}</li>
                  <li>{language === 'hindi' ? 'बिल्व पत्र, फूल और चंदन' : 'Bilva leaves, flowers, and sandalwood'}</li>
                </ul>
              </div>
              <div className="procedure-step">
                <h3>{language === 'hindi' ? 'अर्चना' : 'Archana'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'भगवान शिव के 108 या 1008 नामों का पाठ।'
                    : 'Recitation of 108 or 1008 names of Lord Shiva.'}
                </p>
              </div>
              <div className="procedure-step">
                <h3>{language === 'hindi' ? 'चमकम जाप' : 'Chamakam Chanting'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'इच्छा पूर्ति प्रार्थना।'
                    : 'Desire fulfillment prayer.'}
                </p>
              </div>
              <div className="procedure-step">
                <h3>{language === 'hindi' ? 'आरती और प्रसाद वितरण' : 'Aarti and Prasad Distribution'}</h3>
              </div>
              <div className="procedure-step">
                <h3>{language === 'hindi' ? 'होम (वैकल्पिक)' : 'Homa (optional)'}</h3>
                <p>
                  {language === 'hindi'
                    ? 'तीव्र परिणामों के लिए अग्नि अर्पण।'
                    : 'Fire offering for intensified results.'}
                </p>
              </div>
            </div>
            <p className="note">
              {language === 'hindi'
                ? 'अनुष्ठान व्यक्तियों या परिवारों द्वारा किया जा सकता है। आदर्श रूप से, रुद्री पाठ में पारंगत एक प्रशिक्षित पुजारी को समारोह का नेतृत्व करना चाहिए।'
                : 'The ritual can be performed by individuals or families. Ideally, a trained priest well-versed in Rudri patha should lead the ceremony.'}
            </p>
          </section>

          <section className="rudra-benefits">
            <h2>{language === 'hindi' ? 'आध्यात्मिक और मनोवैज्ञानिक लाभ' : 'Spiritual and Psychological Benefits'}</h2>
            <ul>
              <li>
                {language === 'hindi'
                  ? 'तंत्रिका तंत्र को शांत करता है और भावनात्मक आघातों को ठीक करता है।'
                  : 'Calms the nervous system and heals emotional traumas.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'कार्मिक अवरोधों और पिछले जन्म के बोझ को साफ करता है।'
                  : 'Clears karmic blocks and past-life burdens.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'चक्रों और ऊर्जा क्षेत्रों को संतुलित करता है।'
                  : 'Balances chakras and energy fields.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'मन की शांति, फोकस और स्पष्टता को बढ़ावा देता है।'
                  : 'Promotes peace of mind, focus, and clarity.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'परम के साथ एक दिव्य संबंध स्थापित करता है।'
                  : 'Establishes a divine connection with the Supreme.'}
              </li>
            </ul>
            <p>
              {language === 'hindi'
                ? 'आध्यात्मिक साधकों के लिए, रुद्राभिषेक उच्च चेतना में प्रवेश करने और आंतरिक शिव को जगाने का एक आदर्श मार्ग है।'
                : 'For spiritual seekers, Rudrabhishek is an ideal path to tap into higher consciousness and awaken inner Shiva.'}
            </p>
          </section>

          <section className="rudra-days">
            <h2>{language === 'hindi' ? 'रुद्राभिषेक के लिए सर्वोत्तम दिन और मुहूर्त' : 'Best Days and Muhurta for Rudrabhishek'}</h2>
            <ul>
              <li>
                {language === 'hindi'
                  ? 'सोमवार: सबसे शुभ क्योंकि वे चंद्रमा द्वारा शासित होते हैं, जो भगवान शिव से जुड़े हैं।'
                  : 'Mondays: Most auspicious as they are ruled by Moon, connected to Lord Shiva.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'महा शिवरात्रि: रुद्राभिषेक करने का सर्वोच्च दिन।'
                  : 'Maha Shivratri: Supreme day to perform Rudrabhishek.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'प्रदोष दिवस: दोनों पक्षों का 13वां चंद्र दिवस।'
                  : 'Pradosha Day: 13th lunar day of both Pakshas.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'श्रावण मास: अत्यंत पवित्र और आध्यात्मिक रूप से आवेशित।'
                  : 'Shravan Month: Highly sacred and spiritually charged.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'अमावस्या (नई चंद्रमा): आध्यात्मिक शुद्धिकरण के लिए।'
                  : 'Amavasya (New Moon): For spiritual cleansing.'}
              </li>
            </ul>
            <p>
              {language === 'hindi'
                ? 'सुबह के समय (ब्रह्म मुहूर्त) आदर्श हैं। सटीक मुहूर्त के लिए एक योग्य ज्योतिषी या पुजारी से परामर्श करें।'
                : 'Morning hours (Brahma Muhurta) are ideal. Consult a qualified astrologer or priest for exact Muhurta.'}
            </p>
          </section>

          <section className="rudra-dos-donts">
            <h2>{language === 'hindi' ? 'रुद्राभिषेक के दौरान क्या करें और क्या न करें' : 'Dos and Don\'ts During Rudrabhishek'}</h2>
            <div className="dos-donts-container">
              <div className="dos">
                <h3>{language === 'hindi' ? 'करें:' : 'Do\'s:'}</h3>
                <ul>
                  <li>
                    {language === 'hindi'
                      ? 'शरीर और मन की शुद्धता बनाए रखें।'
                      : 'Maintain purity of body and mind.'}
                  </li>
                  <li>
                    {language === 'hindi'
                      ? 'पारंपरिक कपड़े पहनें, अधिमानतः सफेद या केसरिया।'
                      : 'Wear traditional clothes, preferably white or saffron.'}
                  </li>
                  <li>
                    {language === 'hindi'
                      ? 'केवल साफ, प्राकृतिक चढ़ावे का उपयोग करें।'
                      : 'Use clean, natural offerings only.'}
                  </li>
                  <li>
                    {language === 'hindi'
                      ? 'ईमानदारी और ध्यान के साथ मंत्र जाप करें।'
                      : 'Chant with sincerity and focus.'}
                  </li>
                </ul>
              </div>
              <div className="donts">
                <h3>{language === 'hindi' ? 'न करें:' : 'Don\'ts:'}</h3>
                <ul>
                  <li>
                    {language === 'hindi'
                      ? 'मांस, शराब या तामसिक खाद्य पदार्थों से बचें।'
                      : 'Avoid meat, alcohol, or tamasic foods.'}
                  </li>
                  <li>
                    {language === 'hindi'
                      ? 'अनुष्ठान को बीच में न छोड़ें।'
                      : 'Don\'t leave the ritual midway.'}
                  </li>
                  <li>
                    {language === 'hindi'
                      ? 'भौतिक लालच के लिए प्रदर्शन न करें।'
                      : 'Do not perform for material greed.'}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rudra-modern">
            <h2>{language === 'hindi' ? 'आधुनिक समय में प्रासंगिकता' : 'Relevance in Modern Times'}</h2>
            <p>
              {language === 'hindi'
                ? 'आज के उच्च तनाव, प्रौद्योगिकी-संचालित जीवन में, रुद्राभिषेक एक शक्तिशाली आध्यात्मिक डिटॉक्स प्रदान करता है। यह न केवल अदृश्य कार्मिक प्रभावों को निष्प्रभावित करता है बल्कि आत्मा को सार्वभौमिक चेतना से फिर से जोड़ता है। कई पेशेवर, व्यापार मालिक, छात्र, और यहां तक कि वैश्विक आध्यात्मिक साधक भी जीवन में एक पवित्र आधार के रूप में रुद्राभिषेक की ओर रुख कर रहे हैं।'
                : 'In today\'s high-stress, technology-driven lives, Rudrabhishek provides a powerful spiritual detox. It not only neutralizes unseen karmic influences but also reconnects the soul to universal consciousness. Many professionals, business owners, students, and even global spiritual seekers are turning to Rudrabhishek as a sacred anchor in life.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'कॉर्पोरेट अब अपनी टीमों के लिए नकारात्मकता को दूर करने और टीम सद्भाव लाने के लिए रुद्राभिषेक को प्रायोजित करते हैं। परिवार इसे पीढ़ीगत शांति के लिए करते हैं। इसे तेजी से मानसिक, भावनात्मक और आध्यात्मिक कल्याण के लिए एक समग्र समाधान के रूप में देखा जा रहा है।'
                : 'Corporates now sponsor Rudrabhisheks for their teams to remove negativity and bring team harmony. Families perform it for generational peace. It\'s increasingly viewed as a holistic solution for mental, emotional, and spiritual wellness.'}
            </p>
          </section>

          <section className="rudra-conclusion">
            <h2>{language === 'hindi' ? 'निष्कर्ष' : 'Conclusion'}</h2>
            <p>
              {language === 'hindi'
                ? 'रुद्राभिषेक केवल एक अनुष्ठान नहीं है; यह एक परिवर्तनकारी आध्यात्मिक अनुभव है जो भक्त को दिव्य चेतना के क्षेत्र में उठाता है। यह भक्ति, समर्पण और शुद्धिकरण की एक यात्रा है। चाहे आप स्वास्थ्य, धन, सद्भाव या मुक्ति की तलाश कर रहे हों, रुद्राभिषेक दिव्य कृपा के द्वार खोलता है।'
                : 'Rudrabhishek is not merely a ritual; it is a transformative spiritual experience that elevates the devotee to the realm of divine consciousness. It is a journey of devotion, surrender, and purification. Whether you seek health, wealth, harmony, or liberation, Rudrabhishek opens the doors to divine grace.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'रुद्रम के पवित्र ध्वनि और प्रकृति के चढ़ावों के माध्यम से ब्रह्मांडीय कंपनों के साथ संरेखित करके, यह अनुष्ठान भक्तों को निराकार सत्य—शिव के साथ विलय करने की अनुमति देता है। यह एक वैदिक कृति है, जो वैज्ञानिक रूप से संरचित और आध्यात्मिक रूप से गहन दोनों है।'
                : 'By aligning with cosmic vibrations through the sacred sound of Rudram and the offerings of nature, this ritual allows devotees to merge with the formless truth—Shiva. It is a Vedic masterpiece, both scientifically structured and spiritually profound.'}
            </p>
          </section>

          <div className="book-yagya">
            <h2>{language === 'hindi' ? 'रुद्राभिषेक के लिए बुकिंग करें' : 'Book for Rudraabhishek'}</h2>
            <p>
              {language === 'hindi'
                ? 'विधिवत रुद्राभिषेक के लिए हमारे विशेषज्ञ पंडितों द्वारा संपन्न करवाने हेतु संपर्क करें।'
                : 'Contact us to have the Rudraabhishek performed by our expert pandits with proper rituals.'}
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

export default Rudraabhishek;