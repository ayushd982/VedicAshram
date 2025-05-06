import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import mantroBackground from '../../assets/Mantro.jpg';
import './Mantrocharan.css';

const Mantrocharan = () => {
  const { language } = useLanguage();

  return (
    <div className="mantrocharan-container">
      <Navbar />
      <div className="background-wrapper">
        <img src={mantroBackground} alt="" className="background-image" />
      </div>

      <div className="mantrocharan-content">
        {/* Main Header */}
        <header className="main-header">
          <h1>
            {language === 'hindi'
              ? '🔱 मंत्रोच्चारण पाठ्यक्रम – मंत्र जाप की पवित्र कला'
              : '🔱 Mantrocharan Course – The Sacred Art of Mantra Chanting'}
          </h1>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <h2>
            {language === 'hindi'
              ? '🕉️ परिचय: ध्वनि का पवित्र विज्ञान'
              : '🕉️ Introduction: The Sacred Science of Sound'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'मंत्रोच्चारण, संस्कृत शब्दों "मंत्र" (पवित्र ध्वनि) और "उच्चारण" (उच्चारण) से व्युत्पन्न, पवित्र कंपन का आध्यात्मिक विज्ञान है। वैदिक परंपरा में, हर अक्षर ऊर्जा वहन करता है। सही ढंग से उच्चारित होने पर, मंत्र उच्च चेतना को जगाते हैं, कर्म को शुद्ध करते हैं, और आपको ब्रह्मांडीय शक्तियों के साथ संरेखित करते हैं।'
              : 'Mantrocharan, derived from the Sanskrit words "Mantra" (sacred sound) and "Ucharan" (pronunciation), is the spiritual science of sacred vibration. In Vedic tradition, every syllable carries energy. When properly pronounced, mantras awaken higher consciousness, purify karma, and align you with cosmic forces.'}
          </p>
          <p>
            {language === 'hindi'
              ? 'यह पाठ्यक्रम भक्तों, आध्यात्मिक साधकों, पुजारियों और योग अभ्यासियों के लिए डिज़ाइन किया गया है जो मंत्र उच्चारण में महारत हासिल करना, इसके अर्थ को समझना और इसे दैनिक जीवन और अनुष्ठानों में एकीकृत करना चाहते हैं।'
              : 'This course is designed for devotees, spiritual seekers, priests, and yoga practitioners who wish to master mantra pronunciation, understand its meaning, and integrate it into daily life and rituals.'}
          </p>
        </section>

        {/* What Is Mantrocharan Section */}
        <section className="what-is-section">
          <h2>
            {language === 'hindi'
              ? '📚 मंत्रोच्चारण क्या है?'
              : '📚 What Is Mantrocharan?'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'मंत्रोच्चारण मंत्रों के जाप का अनुशासित अभ्यास है जिसमें शामिल है:'
              : 'Mantrocharan is the disciplined practice of chanting mantras with:'}
          </p>
          <ul>
            <li>
              {language === 'hindi'
                ? 'सही स्वर (स्वर)'
                : 'Correct intonation (swara)'}
            </li>
            <li>
              {language === 'hindi'
                ? 'उचित लय (छंद)'
                : 'Proper rhythm (chhanda)'}
            </li>
            <li>
              {language === 'hindi'
                ? 'सटीक उच्चारण (उच्चारण)'
                : 'Precise pronunciation (ucharan)'}
            </li>
            <li>
              {language === 'hindi'
                ? 'सटीक कंपन संरेखण (शक्ति)'
                : 'Accurate vibrational alignment (shakti)'}
            </li>
          </ul>
          <p>
            {language === 'hindi'
              ? 'इस पाठ्यक्रम में निम्न पर ध्यान केंद्रित किया गया है:'
              : 'This course focuses on:'}
          </p>
          <ul>
            <li>
              {language === 'hindi'
                ? 'वैदिक मंत्र'
                : 'Vedic mantras'}
            </li>
            <li>
              {language === 'hindi'
                ? 'पौराणिक मंत्र'
                : 'Puranic mantras'}
            </li>
            <li>
              {language === 'hindi'
                ? 'बीज मंत्र'
                : 'Beej mantras'}
            </li>
            <li>
              {language === 'hindi'
                ? 'तांत्रिक मंत्र'
                : 'Tantric mantras'}
            </li>
            <li>
              {language === 'hindi'
                ? 'व्यक्तिगत जप और उपचारात्मक मंत्र'
                : 'Personalized japas and remedial chants'}
            </li>
          </ul>
        </section>

        {/* Why Learn Mantrocharan Section */}
        <section className="why-learn-section">
          <h2>
            {language === 'hindi'
              ? '🔍 मंत्रोच्चारण क्यों सीखें?'
              : '🔍 Why Learn Mantrocharan?'}
          </h2>
          <div className="benefits-table">
            <div className="benefit-row">
              <div className="benefit-icon">🧠</div>
              <div className="benefit-title">
                {language === 'hindi' ? 'मानसिक शांति' : 'Mental Peace'}
              </div>
              <div className="benefit-description">
                {language === 'hindi'
                  ? 'सकारात्मक कंपनों के साथ मस्तिष्क को पुनर्वायर करता है'
                  : 'Rewires the brain with positive vibrations'}
              </div>
            </div>
            <div className="benefit-row">
              <div className="benefit-icon">🧘</div>
              <div className="benefit-title">
                {language === 'hindi' ? 'आध्यात्मिक उन्नति' : 'Spiritual Elevation'}
              </div>
              <div className="benefit-description">
                {language === 'hindi'
                  ? 'चक्रों को खोलता है और चेतना को बढ़ाता है'
                  : 'Unlocks chakras and raises consciousness'}
              </div>
            </div>
            <div className="benefit-row">
              <div className="benefit-icon">📿</div>
              <div className="benefit-title">
                {language === 'hindi' ? 'पूजा और अनुष्ठान में महारत' : 'Puja & Ritual Mastery'}
              </div>
              <div className="benefit-description">
                {language === 'hindi'
                  ? 'पुजारियों और गृहस्थों के लिए पूजा, यज्ञ और होम के लिए आवश्यक'
                  : 'Essential for priests and grihasthas for pujas, yagnas, and homas'}
              </div>
            </div>
            <div className="benefit-row">
              <div className="benefit-icon">💫</div>
              <div className="benefit-title">
                {language === 'hindi' ? 'कार्मिक उपचार' : 'Karmic Healing'}
              </div>
              <div className="benefit-description">
                {language === 'hindi'
                  ? 'वंशानुगत कर्म और नकारात्मक संस्कारों को साफ करता है'
                  : 'Clears ancestral karma and negative samskaras'}
              </div>
            </div>
            <div className="benefit-row">
              <div className="benefit-icon">💼</div>
              <div className="benefit-title">
                {language === 'hindi' ? 'करियर विस्तार' : 'Career Expansion'}
              </div>
              <div className="benefit-description">
                {language === 'hindi'
                  ? 'ज्योतिषियों, योग शिक्षकों और आध्यात्मिक परामर्शदाताओं के लिए मूल्य जोड़ता है'
                  : 'Adds value for astrologers, yoga teachers, and spiritual counselors'}
              </div>
            </div>
          </div>
        </section>

        {/* Course Structure Section */}
        <section className="course-structure-section">
          <h2>
            {language === 'hindi'
              ? '📖 पाठ्यक्रम संरचना अवलोकन (मॉड्यूलर - 7 स्तर)'
              : '📖 Course Structure Overview (Modular – 7 Levels)'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'प्रत्येक मॉड्यूल सिद्धांत, अभ्यास और निर्देशित रिकॉर्डिंग के साथ प्रगतिशील रूप से निर्मित होता है।'
              : 'Each module builds progressively with theory, practice, and guided recordings.'}
          </p>

          {/* Module 1 */}
          <div className="module-card">
            <h3>
              {language === 'hindi'
                ? '🔹 मॉड्यूल 1: मंत्र विद्या की नींव'
                : '🔹 Module 1: Foundations of Mantra Vidya'}
            </h3>
            <div className="module-duration">
              {language === 'hindi' ? 'अवधि: 2 सप्ताह' : 'Duration: 2 weeks'}
            </div>
            <ul>
              <li>
                {language === 'hindi'
                  ? 'मंत्रों की उत्पत्ति: वेद, तंत्र, पुराण'
                  : 'Origin of mantras: Veda, Tantra, Puranas'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'ऋषि, छंद, देवता की भूमिका'
                  : 'Role of Rishi, Chhanda, Devata'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'मंत्रों के प्रकार: वैदिक, बीज, स्तोत्र, कवच'
                  : 'Types of mantras: Vedic, Beej, Stotra, Kavach'}
              </li>
              <li>
                {language === 'hindi'
                  ? '"नाद ब्रह्म" की अवधारणा - ध्वनि ईश्वर है'
                  : 'Concept of "Naad Brahma" – Sound is God'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'श्वास और ध्वनि अनुशासन का महत्व'
                  : 'Importance of breath and sound discipline'}
              </li>
            </ul>
            <div className="practical-exercise">
              <strong>
                {language === 'hindi' ? 'व्यावहारिक अभ्यास:' : 'Practical Exercise:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'सही श्वास नियंत्रण के साथ बुनियादी श्लोकों का पाठ करना।'
                : 'Reciting basic shlokas with correct breath control.'}
            </div>
          </div>

          {/* Module 2 */}
          <div className="module-card">
            <h3>
              {language === 'hindi'
                ? '🔹 मॉड्यूल 2: उच्चारण और ध्वनि विज्ञान'
                : '🔹 Module 2: Pronunciation and Phonetics'}
            </h3>
            <div className="module-duration">
              {language === 'hindi' ? 'अवधि: 2 सप्ताह' : 'Duration: 2 weeks'}
            </div>
            <ul>
              <li>
                {language === 'hindi'
                  ? 'संस्कृत स्वर और वर्ण'
                  : 'Sanskrit swaras and varnas'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'उच्चारण की 6 प्रकार की त्रुटियां'
                  : '6 types of pronunciation errors'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'संधि नियम और अनुस्वार/नासिकीकरण'
                  : 'Sandhi rules and anuswar/nasalization'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'गायत्री, महामृत्युंजय, गणपति मंत्र के साथ अभ्यास'
                  : 'Practice with Gayatri, Mahamrityunjaya, Ganapati mantra'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'उपकरण: ऑडियो गाइड, विजुअल स्वर मार्कर'
                  : 'Tools: Audio guides, visual swara markers'}
              </li>
            </ul>
          </div>

          {/* Module 3 */}
          <div className="module-card">
            <h3>
              {language === 'hindi'
                ? '🔹 मॉड्यूल 3: दैनिक जप और साधना'
                : '🔹 Module 3: Daily Japa and Sadhana'}
            </h3>
            <div className="module-duration">
              {language === 'hindi' ? 'अवधि: 3 सप्ताह' : 'Duration: 3 weeks'}
            </div>
            <ul>
              <li>
                {language === 'hindi'
                  ? 'माला, संकल्प, आसन और मुद्रा के नियम'
                  : 'Rules for mala, sankalpa, asana, and posture'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'आदर्श समय (ब्रह्म मुहूर्त, राहु काल से बचाव)'
                  : 'Ideal timings (Brahma Muhurat, Rahu Kaal avoidance)'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'मंत्र सिद्धि और जप गिनती (11x, 108x, 1008x)'
                  : 'Mantra siddhi and japa counts (11x, 108x, 1008x)'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'दैनिक अभ्यास के साथ मंत्र को ऊर्जावान कैसे करें'
                  : 'How to energize a mantra with daily practice'}
              </li>
            </ul>
            <div className="practical-exercise">
              <strong>
                {language === 'hindi' ? 'असाइनमेंट:' : 'Assignments:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'एक साधना जर्नल रखें, जप आवृत्ति रिकॉर्ड करें।'
                : 'Keep a sadhana journal, record japa frequency.'}
            </div>
          </div>

          {/* Module 4 */}
          <div className="module-card">
            <h3>
              {language === 'hindi'
                ? '🔹 मॉड्यूल 4: अनुष्ठान उपयोग के लिए वैदिक मंत्र'
                : '🔹 Module 4: Vedic Mantras for Ritual Use'}
            </h3>
            <div className="module-duration">
              {language === 'hindi' ? 'अवधि: 4 सप्ताह' : 'Duration: 4 weeks'}
            </div>
            <ul>
              <li>
                {language === 'hindi'
                  ? 'अग्नि सूक्त, पुरुष सूक्त, रुद्रम्, चमकम्'
                  : 'Agni Sukta, Purusha Sukta, Rudram, Chamakam'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'नवग्रहों, तर्पण और समिधा दान के लिए मंत्र'
                  : 'Mantras for Navagrahas, Tarpan, and Samidha daan'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'अग्नि अनुष्ठान उच्चारण (होम मंत्र)'
                  : 'Fire ritual pronunciation (Homa mantras)'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'समूह लय और नेतृत्व के साथ जाप'
                  : 'Chanting with group rhythm and lead'}
              </li>
            </ul>
            <div className="practical-exercise">
              <strong>
                {language === 'hindi' ? 'अभ्यास:' : 'Practice:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'निर्देशित हवन मंत्र प्रशिक्षण'
                : 'Guided Havan mantra training'}
            </div>
          </div>

          {/* Module 5 */}
          <div className="module-card">
            <h3>
              {language === 'hindi'
                ? '🔹 मॉड्यूल 5: उपचार और निवारण मंत्र'
                : '🔹 Module 5: Healing and Remedial Mantras'}
            </h3>
            <div className="module-duration">
              {language === 'hindi' ? 'अवधि: 3 सप्ताह' : 'Duration: 3 weeks'}
            </div>
            <ul>
              <li>
                {language === 'hindi'
                  ? 'ग्रहों के लिए मंत्र (नवग्रह बीज मंत्र)'
                  : 'Mantras for planets (Navagraha Beej Mantras)'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'दोष निवारण मंत्र: काल सर्प, पितृ दोष, मांगलिक'
                  : 'Dosha Nivaran mantras: Kaal Sarp, Pitra Dosha, Manglik'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'स्वास्थ्य मंत्र: धन्वंतरि, महा मृत्युंजय, हनुमान'
                  : 'Health mantras: Dhanvantri, Maha Mrityunjaya, Hanuman'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'कुंडली के माध्यम से व्यक्तिगत मंत्र चयन'
                  : 'Personalized mantra selection via Kundli'}
              </li>
            </ul>
            <div className="practical-exercise">
              <strong>
                {language === 'hindi' ? 'डाउनलोड:' : 'Downloadable PDF:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'राशि अनुसार उपचारात्मक मंत्र'
                : 'Remedial mantras by zodiac sign'}
            </div>
          </div>

          {/* Module 6 */}
          <div className="module-card">
            <h3>
              {language === 'hindi'
                ? '🔹 मॉड्यूल 6: उन्नत तांत्रिक मंत्र'
                : '🔹 Module 6: Advanced Tantric Mantras'}
            </h3>
            <div className="module-duration">
              {language === 'hindi' ? 'अवधि: 4 सप्ताह' : 'Duration: 4 weeks'}
            </div>
            <ul>
              <li>
                {language === 'hindi'
                  ? 'पंचाक्षरी, अष्टाक्षरी, षोडशाक्षरी, महाविद्या मंत्र'
                  : 'Panchakshari, Ashtakshari, Shodashakshari, Mahavidya mantras'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'बीज मंत्र और यंत्र-साधना'
                  : 'Beej mantras and yantra-sadhana'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'मंत्र के माध्यम से चक्र सक्रियण'
                  : 'Chakra activation via mantra'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'श्री विद्या संरेखण के साथ शक्ति मंत्र'
                  : 'Shakti mantras with Shree Vidya alignment'}
              </li>
            </ul>
            <div className="practical-exercise">
              <strong>
                {language === 'hindi' ? 'चेतावनी:' : 'Warning:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'कुछ मंत्रों के लिए दीक्षा आवश्यक है; गोपनीयता और शुद्धता का सम्मान करें।'
                : 'Initiation required for some mantras; respect secrecy and purity.'}
            </div>
          </div>

          {/* Module 7 */}
          <div className="module-card">
            <h3>
              {language === 'hindi'
                ? '🔹 मॉड्यूल 7: शिक्षण और प्रसारण'
                : '🔹 Module 7: Teaching & Transmission'}
            </h3>
            <div className="module-duration">
              {language === 'hindi' ? 'अवधि: 2 सप्ताह' : 'Duration: 2 weeks'}
            </div>
            <ul>
              <li>
                {language === 'hindi'
                  ? 'दूसरों को दीक्षित कैसे करें'
                  : 'How to initiate others'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'मंत्र मंडल आयोजित करना (कीर्तन, सत्संग)'
                  : 'Holding mantra circles (Kirtan, satsang)'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'आध्यात्मिक ध्वनि अभ्यास की नैतिकता'
                  : 'Ethics of spiritual sound practice'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'साझा करने के लिए अपने स्वयं के मंत्रों की रिकॉर्डिंग'
                  : 'Recording your own chants for sharing'}
              </li>
            </ul>
            <div className="practical-exercise">
              <strong>
                {language === 'hindi' ? 'प्रोजेक्ट:' : 'Project:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'स्वच्छ ऑडियो के साथ एक पूर्ण मंत्र जप सत्र रिकॉर्ड करें।'
                : 'Record a full mantra japa session with clean audio.'}
            </div>
          </div>
        </section>

        {/* Who Should Enroll Section */}
        <section className="who-should-enroll-section">
          <h2>
            {language === 'hindi'
              ? '🎓 किसे नामांकन करना चाहिए?'
              : '🎓 Who Should Enroll?'}
          </h2>
          <ul>
            <li>
              {language === 'hindi'
                ? 'आकांक्षी पुरोहित (वैदिक पुजारी)'
                : 'Aspiring Purohits (Vedic priests)'}
            </li>
            <li>
              {language === 'hindi'
                ? 'ज्योतिषी जो मंत्र उपचार देना चाहते हैं'
                : 'Astrologers who want to give mantra remedies'}
            </li>
            <li>
              {language === 'hindi'
                ? 'योग शिक्षक जो अपनी कक्षाओं को संस्कृत मंत्रों से समृद्ध कर रहे हैं'
                : 'Yoga teachers enhancing their classes with Sanskrit chants'}
            </li>
            <li>
              {language === 'hindi'
                ? 'भक्त जो अपनी दैनिक साधना को गहरा करना चाहते हैं'
                : 'Devotees wanting to deepen their daily sadhana'}
            </li>
            <li>
              {language === 'hindi'
                ? 'माता-पिता जो बच्चों को आध्यात्मिक आधार में मार्गदर्शन कर रहे हैं'
                : 'Parents guiding children in spiritual grounding'}
            </li>
          </ul>
        </section>

        {/* Student Testimonials Section */}
        <section className="testimonials-section">
          <h2>
            {language === 'hindi'
              ? '🌟 छात्र प्रशंसापत्र'
              : '🌟 Student Testimonials'}
          </h2>
          <div className="testimonial-card">
            <div className="testimonial-text">
              <p>
                {language === 'hindi'
                  ? '"इस पाठ्यक्रम को पूरा करने के बाद, मेरा मंत्र अभ्यास गहराई से जीवंत हो गया। मेरी आवाज अब इरादा वहन करती है।"'
                  : '"After completing this course, my mantra practice became deeply alive. My voice now carries intention."'}
              </p>
            </div>
            <div className="testimonial-author">
              {language === 'hindi' ? '- रवि शर्मा, योग शिक्षक' : '- Ravi Sharma, Yoga Teacher'}
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              <p>
                {language === 'hindi'
                  ? '"मैं हमेशा जोर से जाप करने में हिचकिचाता था। इस पाठ्यक्रम ने मुझे आत्मविश्वासी और जुड़ा हुआ बना दिया।"'
                  : '"I was always hesitant to chant out loud. This course made me confident and connected."'}
              </p>
            </div>
            <div className="testimonial-author">
              {language === 'hindi'
                ? '- सुनीता अय्यर, आध्यात्मिक परामर्शदाता'
                : '- Sunita Iyer, Spiritual Counselor'}
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="certification-section">
          <h2>
            {language === 'hindi'
              ? '📜 प्रमाणन और पाठ्यक्रम वितरण'
              : '📜 Certification & Course Delivery'}
          </h2>
          <ul>
            <li>
              <strong>{language === 'hindi' ? 'प्रारूप:' : 'Format:'}</strong>{' '}
              {language === 'hindi'
                ? 'वीडियो व्याख्यान, लाइव ज़ूम कक्षाएं, डाउनलोड करने योग्य पीडीएफ, एमपी3'
                : 'Video lectures, live Zoom classes, downloadable PDFs, mp3s'}
            </li>
            <li>
              <strong>{language === 'hindi' ? 'अवधि:' : 'Duration:'}</strong>{' '}
              {language === 'hindi' ? '4 महीने (लचीला)' : '4 months (Flexible)'}
            </li>
            <li>
              <strong>{language === 'hindi' ? 'भाषा:' : 'Language:'}</strong>{' '}
              {language === 'hindi'
                ? 'हिंदी, अंग्रेजी, संस्कृत उच्चारण'
                : 'Hindi, English, Sanskrit Pronunciation'}
            </li>
            <li>
              <strong>{language === 'hindi' ? 'प्रमाणपत्र:' : 'Certificate:'}</strong>{' '}
              {language === 'hindi'
                ? 'अंतिम मंत्र रिकॉर्डिंग मूल्यांकन के बाद जारी किया गया।'
                : 'Issued upon final mantra recording evaluation.'}
            </li>
          </ul>
        </section>

        {/* Mantras You Will Master Section */}
        <section className="mantras-section">
          <h2>
            {language === 'hindi'
              ? '🧘‍♂️ मंत्र जिन्हें आप महारत हासिल करेंगे'
              : '🧘‍♂️ Mantras You Will Master'}
          </h2>
          <div className="mantras-table">
            <div className="mantra-row">
              <div className="mantra-name">
                {language === 'hindi' ? 'गायत्री मंत्र' : 'Gayatri Mantra'}
              </div>
              <div className="mantra-use">
                {language === 'hindi'
                  ? 'ज्ञान, ऊर्जा, जागरण'
                  : 'Wisdom, energy, awakening'}
              </div>
            </div>
            <div className="mantra-row">
              <div className="mantra-name">
                {language === 'hindi' ? 'महामृत्युंजय मंत्र' : 'Mahamrityunjaya Mantra'}
              </div>
              <div className="mantra-use">
                {language === 'hindi'
                  ? 'उपचार, असामयिक मृत्यु से सुरक्षा'
                  : 'Healing, protection from untimely death'}
              </div>
            </div>
            <div className="mantra-row">
              <div className="mantra-name">
                {language === 'hindi' ? 'गणपति मंत्र' : 'Ganapati Mantra'}
              </div>
              <div className="mantra-use">
                {language === 'hindi'
                  ? 'बाधाओं को दूर करता है, सभी अनुष्ठानों की शुरुआत करता है'
                  : 'Removes obstacles, initiates all rituals'}
              </div>
            </div>
            <div className="mantra-row">
              <div className="mantra-name">
                {language === 'hindi' ? 'नवग्रह मंत्र' : 'Navagraha Mantras'}
              </div>
              <div className="mantra-use">
                {language === 'hindi'
                  ? 'ग्रहीय शांति, ज्योतिषीय उपचार'
                  : 'Planetary peace, astrological remedies'}
              </div>
            </div>
            <div className="mantra-row">
              <div className="mantra-name">
                {language === 'hindi' ? 'दुर्गा और हनुमान चालीसा' : 'Durga & Hanuman Chalisas'}
              </div>
              <div className="mantra-use">
                {language === 'hindi'
                  ? 'भक्ति और दैनिक सुरक्षा'
                  : 'Devotion and daily protection'}
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Section */}
        <section className="enrollment-section">
          <h2>
            {language === 'hindi'
              ? 'आज ही अपनी मंत्र यात्रा शुरू करें'
              : 'Begin Your Mantra Journey Today'}
          </h2>
          <p>
            {language === 'hindi'
              ? 'प्राचीन वैदिक ज्ञान और आधुनिक शिक्षण पद्धतियों का अनूठा मिश्रण अनुभव करें'
              : 'Experience a unique blend of ancient Vedic wisdom and modern teaching methods'}
          </p>
          <div className="enrollment-buttons">
            <button className="enroll-button">
              {language === 'hindi'
                ? 'अभी नामांकन करें'
                : 'Enroll Now'} 🕉️
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

export default Mantrocharan;