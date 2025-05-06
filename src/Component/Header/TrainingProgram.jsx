import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import './TrainingProgram.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const TrainingProgram = () => {
  // Get language from context
  const { language } = useLanguage();
  return (
    <div className="training-page">
      {/* Celestial elements */}
      <div className="celestial-elements">
        <div className="celestial-body star1"></div>
        <div className="celestial-body star2"></div>
        <div className="celestial-body star3"></div>
        <div className="celestial-body planet1"></div>
        <div className="celestial-body planet2"></div>
        <div className="celestial-body moon"></div>
        <div className="celestial-body sun"></div>
        <div className="constellation constellation1"></div>
        <div className="constellation constellation2"></div>
        <div className="constellation constellation3"></div>
      </div>

      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with margin after navbar */}
      <div className="training-content">
        <div className="container training-container">
          <div className="page-header">
            <div className="zodiac-symbol left"></div>
            <h1 className="main-heading">
              <i className="fa fa-graduation-cap"></i>
              {language === 'hindi' ? 'वैदिक ज्योतिष प्रशिक्षण कार्यक्रम' : 'Vedic Astrology Training Programs'}
              <span className="heading-subtitle">
                {language === 'hindi' ? 'ज्योतिष के प्राचीन विज्ञान में महारत हासिल करें' : 'Master the Ancient Science of Jyotish'}
              </span>
            </h1>
            <div className="zodiac-symbol right"></div>
          </div>

          <div className="intro-section">
            <p className="intro-paragraph">
              {language === 'hindi'
                ? 'हमारे व्यापक वैदिक ज्योतिष प्रशिक्षण कार्यक्रमों में आपका स्वागत है, जहां प्राचीन ज्ञान आधुनिक शिक्षण विधियों से मिलता है। हमारे पाठ्यक्रम सभी स्तरों के लिए डिज़ाइन किए गए हैं, जिज्ञासु शुरुआती से लेकर अभ्यास करने वाले ज्योतिषियों तक जो अपने ज्ञान को गहरा करना चाहते हैं। अनुभवी ज्योतिष मास्टर्स से सीखें जो आपको उस गहन ब्रह्मांडीय विज्ञान के माध्यम से मार्गदर्शन करेंगे जिसने हजारों वर्षों से मार्गों को प्रकाशित किया है।'
                : 'Welcome to our comprehensive Vedic Astrology training programs, where ancient wisdom meets modern teaching methods. Our courses are designed for all levels, from curious beginners to practicing astrologers seeking to deepen their knowledge. Learn from experienced Jyotish masters who will guide you through the profound cosmic science that has illuminated paths for thousands of years.'}
            </p>

            <div className="training-illustration">
              <div className="guru-silhouette"></div>
              <div className="student-silhouette"></div>
              <div className="knowledge-transfer"></div>
            </div>
          </div>

          <div className="courses-section">
            <h2 className="section-heading">
              <i className="fa fa-book"></i>
              {language === 'hindi' ? 'हमारे प्रशिक्षण पाठ्यक्रम' : 'Our Training Courses'}
            </h2>
            <div className="courses-grid">
              <div className="course-card beginner">
                <div className="course-level">{language === 'hindi' ? 'शुरुआती' : 'Beginner'}</div>
                <h3 className="course-title">{language === 'hindi' ? 'वैदिक ज्योतिष की नींव' : 'Foundations of Vedic Astrology'}</h3>
                <div className="course-duration">
                  <i className="fa fa-clock-o"></i> {language === 'hindi' ? '3 महीने' : '3 Months'}
                </div>
                <p className="course-description">
                  {language === 'hindi'
                    ? 'नए लोगों के लिए एकदम सही, यह पाठ्यक्रम वैदिक ज्योतिष के मौलिक सिद्धांतों का परिचय देता है, जिसमें ग्रह, भाव, राशियां और बुनियादी कुंडली पठन शामिल हैं।'
                    : 'Perfect for newcomers, this course introduces the fundamental principles of Vedic astrology, including planets, houses, signs, and basic chart reading.'}
                </p>
                <ul className="course-highlights">
                  <li>{language === 'hindi' ? 'वैदिक कुंडली संरचना को समझना' : 'Understanding the Vedic horoscope structure'}</li>
                  <li>{language === 'hindi' ? 'ग्रहीय विशेषताओं और प्रभावों को सीखना' : 'Learning planetary characteristics and influences'}</li>
                  <li>{language === 'hindi' ? 'बुनियादी भविष्यवाणी तकनीकें' : 'Basic prediction techniques'}</li>
                  <li>{language === 'hindi' ? 'उपचारात्मक उपायों का परिचय' : 'Introduction to remedial measures'}</li>
                </ul>
                <div className="course-footer">
                  <span className="course-price">₹15,000</span>
                  <a href="/contact" className="enroll-button">{language === 'hindi' ? 'अभी दाखिला लें' : 'Enroll Now'}</a>
                </div>
              </div>

              <div className="course-card intermediate">
                <div className="course-level">{language === 'hindi' ? 'मध्यवर्ती' : 'Intermediate'}</div>
                <h3 className="course-title">{language === 'hindi' ? 'उन्नत कुंडली विश्लेषण' : 'Advanced Chart Analysis'}</h3>
                <div className="course-duration">
                  <i className="fa fa-clock-o"></i> {language === 'hindi' ? '6 महीने' : '6 Months'}
                </div>
                <p className="course-description">
                  {language === 'hindi'
                    ? 'योग, दशा और विशेष भविष्यवाणी विधियों सहित कुंडली व्याख्या के लिए उन्नत तकनीकों के साथ अपने ज्ञान को गहरा करें।'
                    : 'Deepen your knowledge with advanced techniques for chart interpretation, including yogas, dashas, and specialized predictive methods.'}
                </p>
                <ul className="course-highlights">
                  <li>{language === 'hindi' ? 'ग्रहीय संयोजनों का व्यापक अध्ययन' : 'Comprehensive study of planetary combinations'}</li>
                  <li>{language === 'hindi' ? 'दशा विश्लेषण और घटनाओं का समय' : 'Dasha analysis and timing of events'}</li>
                  <li>{language === 'hindi' ? 'रिश्ते की अनुकूलता का आकलन' : 'Relationship compatibility assessment'}</li>
                  <li>{language === 'hindi' ? 'करियर और वित्तीय भविष्यवाणियां' : 'Career and financial predictions'}</li>
                </ul>
                <div className="course-footer">
                  <span className="course-price">₹25,000</span>
                  <a href="/contact" className="enroll-button">{language === 'hindi' ? 'अभी दाखिला लें' : 'Enroll Now'}</a>
                </div>
              </div>

              <div className="course-card advanced">
                <div className="course-level">{language === 'hindi' ? 'उन्नत' : 'Advanced'}</div>
                <h3 className="course-title">{language === 'hindi' ? 'ज्योतिष आचार्य कार्यक्रम' : 'Jyotish Acharya Program'}</h3>
                <div className="course-duration">
                  <i className="fa fa-clock-o"></i> {language === 'hindi' ? '12 महीने' : '12 Months'}
                </div>
                <p className="course-description">
                  {language === 'hindi'
                    ? 'वैदिक ज्योतिष में महारत हासिल करने वालों के लिए हमारा सबसे व्यापक कार्यक्रम, जिसमें उन्नत भविष्यवाणी तकनीकें और विशेष शाखाएँ शामिल हैं।'
                    : 'Our most comprehensive program for those seeking mastery in Vedic astrology, covering advanced predictive techniques and specialized branches.'}
                </p>
                <ul className="course-highlights">
                  <li>{language === 'hindi' ? 'नाड़ी ज्योतिष और उन्नत समय तकनीकें' : 'Nadi astrology and advanced timing techniques'}</li>
                  <li>{language === 'hindi' ? 'चिकित्सा और सांसारिक ज्योतिष' : 'Medical and Mundane astrology'}</li>
                  <li>{language === 'hindi' ? 'जैमिनी और पराशरी प्रणालियों का एकीकरण' : 'Jaimini and Parashari systems integration'}</li>
                  <li>{language === 'hindi' ? 'पेशेवर परामर्श कौशल' : 'Professional consultation skills'}</li>
                </ul>
                <div className="course-footer">
                  <span className="course-price">₹45,000</span>
                  <a href="/contact" className="enroll-button">{language === 'hindi' ? 'अभी दाखिला लें' : 'Enroll Now'}</a>
                </div>
              </div>

              <div className="course-card specialized">
                <div className="course-level">{language === 'hindi' ? 'विशेषज्ञ' : 'Specialized'}</div>
                <h3 className="course-title">{language === 'hindi' ? 'मुहूर्त (इलेक्शनल ज्योतिष)' : 'Muhurta (Electional Astrology)'}</h3>
                <div className="course-duration">
                  <i className="fa fa-clock-o"></i> {language === 'hindi' ? '2 महीने' : '2 Months'}
                </div>
                <p className="course-description">
                  {language === 'hindi'
                    ? 'आकाशीय विन्यास के आधार पर महत्वपूर्ण गतिविधियों और समारोहों के लिए शुभ समय चुनने की कला सीखें।'
                    : 'Learn the art of selecting auspicious times for important activities and ceremonies based on celestial configurations.'}
                </p>
                <ul className="course-highlights">
                  <li>{language === 'hindi' ? 'इलेक्शनल ज्योतिष के सिद्धांत' : 'Principles of electional astrology'}</li>
                  <li>{language === 'hindi' ? 'व्यापार, विवाह और यात्रा के लिए समय' : 'Timing for business, marriage, and travel'}</li>
                  <li>{language === 'hindi' ? 'पंचांग विश्लेषण' : 'Panchanga analysis'}</li>
                  <li>{language === 'hindi' ? 'व्यावहारिक मुहूर्त चयन अभ्यास' : 'Practical muhurta selection exercises'}</li>
                </ul>
                <div className="course-footer">
                  <span className="course-price">₹12,000</span>
                  <a href="/contact" className="enroll-button">{language === 'hindi' ? 'अभी दाखिला लें' : 'Enroll Now'}</a>
                </div>
              </div>

              <div className="course-card specialized">
                <div className="course-level">{language === 'hindi' ? 'विशेषज्ञ' : 'Specialized'}</div>
                <h3 className="course-title">{language === 'hindi' ? 'प्रश्न (होरेरी ज्योतिष)' : 'Prashna (Horary Astrology)'}</h3>
                <div className="course-duration">
                  <i className="fa fa-clock-o"></i> {language === 'hindi' ? '2 महीने' : '2 Months'}
                </div>
                <p className="course-description">
                  {language === 'hindi'
                    ? 'प्रश्न पूछे जाने के क्षण के ज्योतिषीय विश्लेषण के माध्यम से विशिष्ट प्रश्नों का उत्तर देने की तकनीक में महारत हासिल करें।'
                    : 'Master the technique of answering specific questions through astrological analysis of the moment the question is asked.'}
                </p>
                <ul className="course-highlights">
                  <li>{language === 'hindi' ? 'होरेरी कुंडली व्याख्या के सिद्धांत' : 'Principles of horary chart interpretation'}</li>
                  <li>{language === 'hindi' ? 'हां/नहीं प्रश्नों का उत्तर देना' : 'Answering yes/no questions'}</li>
                  <li>{language === 'hindi' ? 'खोई हुई वस्तुओं को खोजना' : 'Finding lost objects'}</li>
                  <li>{language === 'hindi' ? 'प्रश्न के माध्यम से घटनाओं का समय निर्धारण' : 'Timing events through Prashna'}</li>
                </ul>
                <div className="course-footer">
                  <span className="course-price">₹12,000</span>
                  <a href="/contact" className="enroll-button">{language === 'hindi' ? 'अभी दाखिला लें' : 'Enroll Now'}</a>
                </div>
              </div>

              <div className="course-card specialized">
                <div className="course-level">{language === 'hindi' ? 'विशेषज्ञ' : 'Specialized'}</div>
                <h3 className="course-title">{language === 'hindi' ? 'वास्तु शास्त्र' : 'Vastu Shastra'}</h3>
                <div className="course-duration">
                  <i className="fa fa-clock-o"></i> {language === 'hindi' ? '3 महीने' : '3 Months'}
                </div>
                <p className="course-description">
                  {language === 'hindi'
                    ? 'वास्तुकला और डिजाइन की प्राचीन भारतीय प्रणाली का अध्ययन करें जो भौतिक स्थान को ब्रह्मांडीय ऊर्जाओं के साथ एकीकृत करती है।'
                    : 'Study the ancient Indian system of architecture and design that integrates physical space with cosmic energies.'}
                </p>
                <ul className="course-highlights">
                  <li>{language === 'hindi' ? 'वास्तु के मौलिक सिद्धांत' : 'Fundamental principles of Vastu'}</li>
                  <li>Directional influences and elements</li>
                  <li>Residential and commercial Vastu</li>
                  <li>Vastu corrections and remedies</li>
                </ul>
                <div className="course-footer">
                  <span className="course-price">₹18,000</span>
                  <a href="/contact" className="enroll-button">Enroll Now</a>
                </div>
              </div>

              <div className="course-card specialized">
                <div className="course-level">Specialized</div>
                <h3 className="course-title">
                  {language === 'hindi' ? 'शास्त्रीय संगीत पाठ्यक्रम' : 'Classical Music Course'}
                </h3>
                <div className="course-duration">
                  <i className="fa fa-clock-o"></i> 6 Months
                </div>
                <p className="course-description">
                  {language === 'hindi'
                    ? 'ज्योतिष और आध्यात्मिक विकास के लिए भारतीय शास्त्रीय संगीत का गहन अध्ययन, जो नाद योग और ग्रहीय ऊर्जाओं से जुड़ा है।'
                    : 'An in-depth study of Indian Classical Music for astrology and spiritual growth, connected with Nada Yoga and planetary energies.'}
                </p>
                <ul className="course-highlights">
                  <li>{language === 'hindi' ? 'राग और ग्रहीय संबंध' : 'Ragas and planetary connections'}</li>
                  <li>{language === 'hindi' ? 'नाद योग और ध्वनि चिकित्सा' : 'Nada Yoga and sound therapy'}</li>
                  <li>{language === 'hindi' ? 'मंत्र गायन और स्वर संरेखण' : 'Mantra chanting and swara alignment'}</li>
                  <li>{language === 'hindi' ? 'ज्योतिषीय दोष निवारण के लिए संगीत' : 'Music for astrological remedies'}</li>
                </ul>
                <div className="course-footer">
                  <span className="course-price">₹22,000</span>
                  <Link to="/training-program/Classical-Music-Course" className="enroll-button">{language === 'hindi' ? 'अधिक जानें' : 'Learn More'}</Link>
                </div>
              </div>

              <div className="course-card specialized">
                <div className="course-level">Specialized</div>
                <h3 className="course-title">
                  {language === 'hindi' ? 'मंत्रोच्चारण प्रशिक्षण' : 'Mantrocharan Training'}
                </h3>
                <div className="course-duration">
                  <i className="fa fa-clock-o"></i> 4 Months
                </div>
                <p className="course-description">
                  {language === 'hindi'
                    ? 'मंत्र जाप की पवित्र कला का गहन अध्ययन, जिसमें सही उच्चारण, स्वर और लय के साथ मंत्रों का जाप सिखाया जाता है।'
                    : 'The sacred art of mantra chanting with correct pronunciation, intonation and rhythm for spiritual growth and ritual mastery.'}
                </p>
                <ul className="course-highlights">
                  <li>{language === 'hindi' ? 'वैदिक और तांत्रिक मंत्र' : 'Vedic and Tantric mantras'}</li>
                  <li>{language === 'hindi' ? 'उच्चारण और ध्वनि विज्ञान' : 'Pronunciation and phonetics'}</li>
                  <li>{language === 'hindi' ? 'अनुष्ठान उपयोग के लिए मंत्र' : 'Mantras for ritual use'}</li>
                  <li>{language === 'hindi' ? 'उपचार और निवारण मंत्र' : 'Healing and remedial mantras'}</li>
                </ul>
                <div className="course-footer">
                  <span className="course-price">₹18,000</span>
                  <Link to="/training-program/mantrocharan" className="enroll-button">{language === 'hindi' ? 'अधिक जानें' : 'Learn More'}</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="learning-methods-section">
            <h2 className="section-heading">
              <i className="fa fa-laptop"></i>
              Learning Methods
            </h2>
            <div className="methods-container">
              <div className="method-card">
                <div className="method-icon">
                  <i className="fa fa-users"></i>
                </div>
                <h3 className="method-title">Classroom Learning</h3>
                <p className="method-description">
                  Traditional face-to-face classes at our center with direct interaction with teachers and fellow students. Perfect for those who prefer personal guidance.
                </p>
                <div className="method-features">
                  <span className="feature"><i className="fa fa-check"></i> Direct teacher interaction</span>
                  <span className="feature"><i className="fa fa-check"></i> Peer learning environment</span>
                  <span className="feature"><i className="fa fa-check"></i> Practical demonstrations</span>
                </div>
              </div>

              <div className="method-card">
                <div className="method-icon">
                  <i className="fa fa-wifi"></i>
                </div>
                <h3 className="method-title">Online Live Classes</h3>
                <p className="method-description">
                  Interactive virtual classrooms with real-time instruction and Q&A sessions. Ideal for remote students who want the classroom experience.
                </p>
                <div className="method-features">
                  <span className="feature"><i className="fa fa-check"></i> Attend from anywhere</span>
                  <span className="feature"><i className="fa fa-check"></i> Real-time interaction</span>
                  <span className="feature"><i className="fa fa-check"></i> Recorded sessions for review</span>
                </div>
              </div>

              <div className="method-card">
                <div className="method-icon">
                  <i className="fa fa-play-circle"></i>
                </div>
                <h3 className="method-title">Self-Paced Learning</h3>
                <p className="method-description">
                  Pre-recorded comprehensive video courses with supporting materials that you can study at your own pace and schedule.
                </p>
                <div className="method-features">
                  <span className="feature"><i className="fa fa-check"></i> Flexible timing</span>
                  <span className="feature"><i className="fa fa-check"></i> Lifetime access</span>
                  <span className="feature"><i className="fa fa-check"></i> Regular updates</span>
                </div>
              </div>

              <div className="method-card">
                <div className="method-icon">
                  <i className="fa fa-user"></i>
                </div>
                <h3 className="method-title">One-on-One Mentoring</h3>
                <p className="method-description">
                  Personalized instruction tailored to your specific learning needs and interests with dedicated attention from an expert.
                </p>
                <div className="method-features">
                  <span className="feature"><i className="fa fa-check"></i> Customized curriculum</span>
                  <span className="feature"><i className="fa fa-check"></i> Focused attention</span>
                  <span className="feature"><i className="fa fa-check"></i> Accelerated learning</span>
                </div>
              </div>
            </div>
          </div>

          <div className="faculty-section">
            <h2 className="section-heading">
              <i className="fa fa-users"></i>
              Our Expert Faculty
            </h2>
            <div className="faculty-grid">
              <div className="faculty-card">
                <div className="faculty-image"></div>
                <h3 className="faculty-name">Pandit Rajesh Sharma</h3>
                <p className="faculty-title">Senior Jyotish Acharya</p>
                <p className="faculty-description">
                  With over 30 years of experience, Pandit Rajesh is a renowned authority in Vedic astrology and has trained hundreds of professional astrologers.
                </p>
                <div className="faculty-specialties">
                  <span className="specialty">Predictive Astrology</span>
                  <span className="specialty">Muhurta</span>
                  <span className="specialty">Remedial Measures</span>
                </div>
              </div>

              <div className="faculty-card">
                <div className="faculty-image"></div>
                <h3 className="faculty-name">Dr. Meena Kapoor</h3>
                <p className="faculty-title">Research Scholar & Practitioner</p>
                <p className="faculty-description">
                  Dr. Kapoor combines traditional Jyotish knowledge with modern research methodologies, specializing in the correlation between astrology and psychology.
                </p>
                <div className="faculty-specialties">
                  <span className="specialty">Psychological Astrology</span>
                  <span className="specialty">Research Methods</span>
                  <span className="specialty">Nadi Astrology</span>
                </div>
              </div>

              <div className="faculty-card">
                <div className="faculty-image"></div>
                <h3 className="faculty-name">Acharya Vikram Shastri</h3>
                <p className="faculty-title">Vastu & Jyotish Expert</p>
                <p className="faculty-description">
                  A master of both Vastu Shastra and Vedic astrology, Acharya Vikram provides integrated knowledge of these complementary ancient sciences.
                </p>
                <div className="faculty-specialties">
                  <span className="specialty">Vastu Shastra</span>
                  <span className="specialty">Planetary Remedies</span>
                  <span className="specialty">Business Astrology</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-section">
            <h2 className="section-heading">
              <i className="fa fa-quote-left"></i>
              Student Testimonials
            </h2>
            <div className="testimonials-slider">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "The Advanced Chart Analysis course transformed my understanding of Vedic astrology. The faculty's depth of knowledge and their ability to explain complex concepts in simple terms is remarkable. I now confidently provide consultations to clients."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-image"></div>
                    <div className="author-info">
                      <h4 className="author-name">Ananya Desai</h4>
                      <p className="author-location">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "As someone with no prior knowledge of astrology, I was amazed at how accessible the Foundations course made this ancient science. The online format was convenient, and the interactive sessions ensured all my questions were answered. Highly recommended!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-image"></div>
                    <div className="author-info">
                      <h4 className="author-name">Rahul Mehta</h4>
                      <p className="author-location">Bangalore, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-section">
            <h2 className="section-heading">
              <i className="fa fa-question-circle"></i>
              Frequently Asked Questions
            </h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">Do I need any prior knowledge to start learning Vedic astrology?</h3>
                <p className="faq-answer">
                  No prior knowledge is required for our beginner courses. We start from the very basics and gradually build your understanding. A genuine interest in astrology and a willingness to learn are all you need to begin your journey.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">How much time should I dedicate to studying each week?</h3>
                <p className="faq-answer">
                  For optimal learning, we recommend dedicating at least 5-7 hours per week for studying and practicing. This includes attending classes, reviewing materials, and completing assignments. Self-paced courses offer more flexibility in scheduling.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Will I receive certification after completing a course?</h3>
                <p className="faq-answer">
                  Yes, all our courses come with certification upon successful completion of the curriculum and passing the final assessment. Our certificates are recognized in the astrological community and can help establish your credibility as a practitioner.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Can I make a career in Vedic astrology after these courses?</h3>
                <p className="faq-answer">
                  Absolutely! Many of our graduates have established successful careers as professional astrologers. Our advanced and specialized courses are specifically designed to prepare you for professional practice, and we also provide guidance on setting up your consultation practice.
                </p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <div className="cta-decoration"></div>
            <div className="cta-content">
              <h2 className="cta-heading">Begin Your Journey in Vedic Astrology</h2>
              <p className="cta-description">
                Whether you're seeking personal enlightenment or aiming to become a professional astrologer, our comprehensive training programs provide the knowledge, skills, and guidance you need. Join our community of astrology students and practitioners today.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="cta-button primary">
                  <i className="fa fa-paper-plane"></i> Enroll in a Course
                </a>
                <a href="/consultation" className="cta-button secondary">
                  <i className="fa fa-phone"></i> Speak to an Advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TrainingProgram;