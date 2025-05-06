import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import './mahamritunjya_new.css';
import { useLanguage } from '../../context/LanguageContext';

const Mahamritunjya = () => {
  const { language } = useLanguage();

  return (
    <div className="mahamritunjya-page">
      {/* Mystical elements */}
      <div className="mystical-elements">
        <div className="trishul trishul-1"></div>
        <div className="trishul trishul-2"></div>
        <div className="damru damru-1"></div>
        <div className="damru damru-2"></div>
        <div className="smoke"></div>
      </div>

      <Navbar />
      <div className="mahamritunjya-content">
        <div className="container mahamritunjya-container">
          {/* Title Section */}
          <h1 className="mahamritunjya-title">
            {language === 'hindi' ? 'महामृत्युंजय मंत्र' : 'Mahamrityunjaya Mantra'}
          </h1>
          <h2 className="mahamritunjya-subtitle">
            {language === 'hindi'
              ? 'आरोग्य, सुरक्षा और दीर्घायु के लिए मंत्र'
              : 'The Mantra for Healing, Protection, and Longevity'}
          </h2>
          <p className="mahamritunjya-subtitle">
            {language === 'hindi'
              ? 'शिव के अनादि कंपन का जाप करें और भय, रोग और बाधाओं पर विजय प्राप्त करें।'
              : 'Chant the timeless vibrations of Shiva and overcome fear, disease, and obstacles.'}
          </p>

          {/* Introduction Section */}
          <div className="mahamritunjya-intro">
            <h2>{language === 'hindi' ? 'महामृत्युंजय मंत्र क्या है?' : 'What is the Mahamrityunjaya Mantra?'}</h2>
            <p>
              {language === 'hindi'
                ? 'यज्ञ प्राचीन वैदिक परंपरा में गहरा महत्व रखता है, जिसमें जीवन के विभिन्न पहलुओं को सुधारने के लिए विभिन्न प्रथाएं शामिल हैं। यह स्वास्थ्य समस्याओं, वित्तीय कठिनाइयों और अधिक जैसी चुनौतियों का समाधान करने के लिए एक शक्तिशाली उपकरण के रूप में कार्य करता है, जो जीवन में सकारात्मक परिवर्तन लाने के लिए ब्रह्मांडीय ऊर्जाओं का उपयोग करता है।'
                : 'Yagya holds profound significance in the ancient Vedic tradition, encompassing a variety of practices aimed at rectifying various aspects of life. It serves as a potent tool for addressing challenges such as health issues, financial difficulties, and more by harnessing the cosmic energies to bring about positive changes in one\'s life.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'विभिन्न यज्ञों में, महामृत्युंजय यज्ञ भारत में एक व्यापक रूप से पूजित अनुष्ठान के रूप में उभरता है। यह पवित्र समारोह भगवान शिव की पूजा के लिए समर्पित है, जो भक्त को शांति, दीर्घायु और दुर्भाग्य से सुरक्षा प्रदान करने के लिए प्रसिद्ध है।'
                : 'Among the myriad yagyas performed, the Mahamrityunjaya Yagya stands out as a widely revered ritual in India. This sacred ceremony is dedicated to the worship of Lord Shiva, renowned for bestowing peace, longevity, and protection from misfortune upon the devotee.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'महामृत्युंजय यज्ञ विधि में प्राचीन शास्त्रों में निर्धारित विशेष जड़ी-बूटियों और सामग्रियों, जैसे घास और अमृत का उपयोग शामिल है। ये तत्व सावधानीपूर्वक उनके शुभ गुणों के लिए चुने जाते हैं, जिनसे यज्ञ की प्रभावशीलता बढ़ती है और प्रतिभागी के लिए दिव्य आशीर्वाद का आह्वान होता है।'
                : 'The Mahamrityunjaya Yagya Vidhi involves the use of special herbs and ingredients, such as grass and amrita, as prescribed in the ancient scriptures. These elements are carefully selected for their auspicious properties, believed to enhance the efficacy of the yagya and invoke divine blessings for the participant.'}
            </p>
          </div>

          {/* Origin Section */}
          <div className="origin-section">
            <h3>{language === 'hindi' ? 'उत्पत्ति: भगवान शिव को समर्पित प्राचीन वैदिक स्तोत्र' : 'Origin: Ancient Vedic hymn dedicated to Lord Shiva'}</h3>
            <p>
              {language === 'hindi'
                ? 'शिव तांडव स्तोत्रम 1008 श्लोकों वाला एक संस्कृत स्तोत्र है। यह भगवान शिव के प्रति गहरी भक्ति दिखाता है। इसे एक पौराणिक व्यक्ति, रावण द्वारा लिखा गया था, और यह सदियों से हिंदू पौराणिक कथाओं में महत्वपूर्ण रहा है।'
                : 'The Shiva Tandava Stotram is a Sanskrit hymn with 1008 verses. It shows deep devotion to Lord Shiva. It was written by Ravana, a legendary figure, and has been important in Hindu mythology for centuries.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'यह पाठ सिर्फ कविता से अधिक है। यह रावण और भगवान शिव के बीच मजबूत बंधन दिखाता है। अपनी शक्ति के लिए जाने जाने वाले रावण ने 14 दिनों तक मंत्रों का जाप करके महान भक्ति दिखाई। इस भक्ति ने कैलाश पर्वत पर एक बैठक की ओर ले गई, जहां रावण के स्तोत्रों ने भगवान शिव को चकित कर दिया, जिससे क्षमा मिली।'
                : 'This text is more than just poetry. It shows the strong bond between Ravana and Lord Shiva. Ravana, known for his power, showed great devotion by chanting mantras for 14 days. This devotion led to a meeting at Mount Kailash, where Ravana\'s hymns amazed Lord Shiva, earning forgiveness.'}
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="key-takeaways">
            <h3>{language === 'hindi' ? 'मुख्य बिंदु' : 'Key Takeaways'}</h3>
            <ul>
              <li>
                {language === 'hindi'
                  ? 'शिव तांडव स्तोत्रम रावण, लंका के पौराणिक राक्षस राजा द्वारा रचित एक प्रसिद्ध संस्कृत स्तोत्र है।'
                  : 'The Shiva Tandava Stotram is a renowned Sanskrit hymn composed by Ravana, the legendary demon king of Lanka.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'स्तोत्र में 1008 श्लोक हैं, जो भगवान शिव के प्रति भक्ति और श्रद्धा की गहराई को दर्शाते हैं।'
                  : 'The stotram consists of 1008 verses, showcasing the depth of devotion and reverence towards Lord Shiva.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'रामायण में उनके नकारात्मक चित्रण के बावजूद, भगवान शिव के प्रति रावण की अटूट भक्ति शिव तांडव स्तोत्रम का एक केंद्रीय विषय है।'
                  : 'Ravana\'s unwavering devotion to Lord Shiva, despite his negative portrayal in the Ramayana, is a central theme of the Shiva Tandava Stotram.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'स्तोत्र की उत्पत्ति रावण और भगवान शिव के बीच कैलाश पर्वत पर एक पौराणिक मुलाकात में है, जहां रावण के मोहक श्लोकों ने दिव्य क्षमा की ओर ले गए।'
                  : 'The hymn\'s origins lie in a legendary encounter between Ravana and Lord Shiva at Mount Kailash, where Ravana\'s captivating verses led to divine forgiveness.'}
              </li>
              <li>
                {language === 'hindi'
                  ? 'शिव तांडव स्तोत्रम हिंदू पौराणिक कथाओं और परंपराओं में अत्यधिक धार्मिक, सांस्कृतिक और साहित्यिक महत्व रखता है।'
                  : 'The Shiva Tandava Stotram holds immense religious, cultural, and literary significance in Hindu mythology and traditions.'}
              </li>
            </ul>
          </div>

          {/* Purpose Section */}
          <div className="origin-section">
            <h3>{language === 'hindi' ? 'उद्देश्य' : 'Purpose'}</h3>
            <p>
              {language === 'hindi'
                ? 'आरोग्य, आंतरिक शक्ति, असामयिक मृत्यु पर विजय, और आध्यात्मिक जागरण।'
                : 'Healing, inner strength, overcoming untimely death, and spiritual awakening.'}
            </p>
            <p>
              {language === 'hindi'
                ? 'महामृत्युंजय मंत्र, जिसे "मृत्यु-विजयी मंत्र" के रूप में भी जाना जाता है, भगवान शिव को समर्पित सबसे शक्तिशाली वैदिक जापों में से एक है। इस मंत्र का जाप आत्मा के चारों ओर दिव्य सुरक्षा का एक कवच बनाता है, जो जीवन की सबसे बड़ी चुनौतियों के दौरान भी स्वास्थ्य, शांति और साहस को बहाल करता है।'
                : 'The Mahamrityunjaya Mantra, also known as the "Death-Conquering Mantra," is one of the most potent Vedic chants dedicated to Lord Shiva. Chanting this mantra creates a shield of divine protection around the soul, restoring health, peace, and courage even during life\'s greatest challenges.'}
            </p>
          </div>

          {/* Mantra Section */}
          <div className="mantra-section">
            <h2>{language === 'hindi' ? 'मंत्र का अर्थ' : 'Meaning of the Mantra'}</h2>
            <div className="mantra-text">
              {language === 'hindi'
                ? 'ॐ त्र्यंबकं यजामहे सुगंधिं पुष्टिवर्धनम्। उर्वारुकमिव बंधनान्मृत्योर्मुक्षीय माऽमृतात्॥'
                : 'ॐ त्र्यंबकं यजामहे सुगंधिं पुष्टिवर्धनम्। उर्वारुकमिव बंधनान्मृत्योर्मुक्षीय माऽमृतात्॥'}
            </div>
            <div className="mantra-meaning">
              {language === 'hindi'
                ? '"हम त्रिनेत्र (भगवान शिव) का ध्यान करते हैं, जो मीठी सुगंध की तरह सर्वव्यापी हैं और सभी को पोषित करते हैं। वह हमें सांसारिक बंधनों और मृत्यु से मुक्त करें, और अमरता का अमृत प्रदान करें।"'
                : '"We meditate on the three-eyed One (Lord Shiva), who permeates and nourishes all like a sweet fragrance. May He liberate us from the bondage of worldly attachments and death, bestowing the nectar of immortality."'}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <h2>{language === 'hindi' ? 'लाभ' : 'Benefits'}</h2>
            <ul className="benefits-list">
              <li className="benefit-item">
                <div className="benefit-icon">🌿</div>
                <div className="benefit-text">
                  {language === 'hindi'
                    ? 'शारीरिक, मानसिक और भावनात्मक बीमारियों से आरोग्य'
                    : 'Healing from physical, mental, and emotional ailments'}
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">🛡️</div>
                <div className="benefit-text">
                  {language === 'hindi'
                    ? 'दुर्घटनाओं और बुरी शक्तियों से सुरक्षा'
                    : 'Protection from accidents and evil forces'}
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">🧘‍♂️</div>
                <div className="benefit-text">
                  {language === 'hindi'
                    ? 'आध्यात्मिक विकास और आंतरिक जागरण'
                    : 'Spiritual growth and inner awakening'}
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">✨</div>
                <div className="benefit-text">
                  {language === 'hindi'
                    ? 'शांत मन और निडर हृदय'
                    : 'Peaceful mind and fearless heart'}
                </div>
              </li>
            </ul>
          </div>

          {/* How to Perform Section */}
          <div className="how-to-section">
            <h2>{language === 'hindi' ? 'महामृत्युंजय जाप कैसे करें' : 'How to Perform Mahamrityunjaya Jaap'}</h2>
            <ul className="how-to-list">
              <li className="how-to-item">
                {language === 'hindi'
                  ? '<strong>आदर्श समय:</strong> प्रातः काल (ब्रह्म मुहूर्त) या संध्या काल'
                  : '<strong>Ideal timings:</strong> Early morning (Brahma Muhurta) or evening'}
              </li>
              <li className="how-to-item">
                {language === 'hindi'
                  ? '<strong>अनुशंसित जाप संख्या:</strong> 108, 1008'
                  : '<strong>Recommended number of chants:</strong> 108, 1008'}
              </li>
              <li className="how-to-item">
                {language === 'hindi'
                  ? '<strong>बैठने की मुद्रा:</strong> पूर्व दिशा की ओर मुख करके पद्मासन (कमल मुद्रा)'
                  : '<strong>Sitting posture:</strong> Padmasana (lotus posture) facing East'}
              </li>
              <li className="how-to-item">
                {language === 'hindi'
                  ? '<strong>अर्पण:</strong> जल, बेल पत्र (बिल्व पत्ते), धूप, और दीया जलाएं'
                  : '<strong>Offerings:</strong> Water, Bel Patra (Bilva leaves), incense, and light a diya'}
              </li>
            </ul>
          </div>

          {/* Book Yagya Section */}
          <div className="book-yagya">
            <h2>
              {language === 'hindi'
                ? 'विशेष महामृत्युंजय यज्ञ सेवा'
                : 'Special Mahamrityunjaya Yagya Service'}
            </h2>
            <p>
              {language === 'hindi'
                ? 'बढ़े हुए दिव्य आशीर्वाद के लिए महामृत्युंजय यज्ञ में भाग लें। अपना व्यक्तिगत अनुष्ठान अभी बुक करें! 🙏🏼'
                : 'Participate in a Mahamrityunjaya Yagya for enhanced divine blessings. Book your personalized ritual now! 🙏🏼'}
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

export default Mahamritunjya;