import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import baliImage from '../../assets/Bali.jpg';
import './Narayanbali.css';

const Narayanbali = () => {
  const { language } = useLanguage();

  return (
    <div className="narayan-container">
      <Navbar />
      <div className="background-wrapper">
        <img src={baliImage} alt="" className="background-image" />
      </div>

      <div className="narayan-content">
        {/* Main Header */}
        <header className="main-header">
          <h1 style={{ color: '#800000' }}>
            {language === 'hindi'
              ? 'नारायण बलि संस्कार – पूर्वजों की शांति के लिए पवित्र वैदिक अनुष्ठान'
              : 'Narayan Bali Sanskar – A Sacred Vedic Ritual for Ancestral Peace'}
          </h1>
        </header>

        {/* Introduction Section */}
        <section className="intro-section">
          <h2 style={{ color: '#800000' }}>
            {language === 'hindi'
              ? 'परिचय'
              : 'Introduction'}
          </h2>
          <p style={{ color: '#4B3621' }}>
            {language === 'hindi'
              ? 'नारायण बलि संस्कार हिंदू परंपरा में एक आवश्यक अनुष्ठान है जो उन पूर्वजों की आत्माओं को मुक्त करने के लिए किया जाता है जिनकी अप्राकृतिक या असामयिक मृत्यु हुई है। यह गरुड़ पुराण में गहराई से निहित है और पितृ दोष को दूर करने और पूर्वजों के क्षेत्र में शांति सुनिश्चित करने के लिए प्रायश्चित का एक पवित्र कार्य माना जाता है। नारायण बलि करने के सामान्य कारणों में दुर्घटना, आत्महत्या, सांप के काटने, हत्या के कारण मृत्यु, या यदि कोई व्यक्ति अपूर्ण इच्छाओं या ऋणों के साथ मर गया हो, शामिल हैं।'
              : 'Narayan Bali Sanskar is an essential ritual in Hindu tradition performed to liberate the souls of ancestors who have met unnatural or untimely deaths. It is deeply rooted in the Garuda Purana and is considered a sacred act of atonement to remove Pitru Dosh and facilitate peace in the ancestral realm. Common reasons to perform Narayan Bali include death due to accidents, suicide, snakebite, murder, or if a person died with unfulfilled desires or debts.'}
          </p>
          <p style={{ color: '#4B3621' }}>
            {language === 'hindi'
              ? 'यह अनुष्ठान वैदिक ज्योतिष में महत्वपूर्ण है, विशेष रूप से जब जन्म कुंडली में पितृ दोष पाए जाते हैं। बार-बार गर्भपात, वित्तीय अवरोध, पुरानी बीमारी, विवाह में देरी, या पारिवारिक विवाद जैसे ज्योतिषीय लक्षण अक्सर अशांत पूर्वजों की आत्माओं से उत्पन्न होते हैं। नारायण बलि करने से आत्मा को उच्च लोकों में शांतिपूर्वक संक्रमण करने में मदद मिलती है, जिससे जीवित वंश को आशीर्वाद और सद्भाव प्राप्त होता है।'
              : 'This ritual is vital in Vedic astrology, especially when ancestral doshas are found in the birth chart. Astrological symptoms like repeated miscarriages, financial blockages, chronic illness, marriage delays, or family disputes often stem from unsettled ancestral souls. Performing the Narayan Bali helps the soul transition peacefully to the higher planes, bringing blessings and harmony to the living lineage.'}
          </p>
        </section>

        {/* Scriptural References Section */}
        <section className="scriptural-section">
          <h2 style={{ color: '#800000' }}>
            {language === 'hindi'
              ? 'शास्त्रीय संदर्भ और महत्व'
              : 'Scriptural References and Significance'}
          </h2>
          <p style={{ color: '#4B3621' }}>
            {language === 'hindi'
              ? 'गरुड़ पुराण और धर्म शास्त्र नारायण बलि के लिए विस्तृत निर्देश देते हैं। यह अनुष्ठान एक हजार गायों के दान (गौ दान) के बराबर पुण्य देता है और पितरों (पूर्वजों) के प्रति अपने कर्तव्य को पूरा करने में मदद करता है। यह सामान्य श्राद्ध समारोह से अलग है। जबकि श्राद्ध उन लोगों के लिए है जिनकी प्राकृतिक मृत्यु हुई है, नारायण बलि विशेष रूप से अप्राकृतिक या अनसुलझी मौतों के लिए है।'
              : 'The Garuda Purana and Dharma Shastras lay out detailed instructions for Narayan Bali. This ritual is equivalent in merit to offering a thousand cows (Gau Daan) and helps to fulfill one\'s duty toward the Pitras (forefathers). It is different from the usual Shraddha ceremony. While Shraddha is for those who died natural deaths, Narayan Bali is specifically for unnatural or unresolved deaths.'}
          </p>
          <p style={{ color: '#4B3621' }}>
            {language === 'hindi'
              ? 'ऐसा माना जाता है कि इस अनुष्ठान को करने से आत्मा को लगाव, दर्द और कार्मिक बोझ को छोड़ने की अनुमति मिलती है, जिससे मोक्ष (मुक्ति) प्राप्त होती है। अनुष्ठान अक्सर परिवार के सदस्यों द्वारा विशिष्ट पवित्र स्थलों पर किया जाता है, मुख्य रूप से त्र्यंबकेश्वर (महाराष्ट्र), गया (बिहार), या रामेश्वरम (तमिलनाडु) में।'
              : 'It is believed that performing this ritual allows the spirit to let go of attachments, pains, and karmic burdens, granting moksha (liberation). The ritual is often performed by family members at specific sacred sites, primarily in Trimbakeshwar (Maharashtra), Gaya (Bihar), or Rameswaram (Tamil Nadu).'}
          </p>
        </section>

        {/* Astrological Causes Section */}
        <section className="astrological-section">
          <h2 style={{ color: '#800000' }}>
            {language === 'hindi'
              ? 'पितृ दोष के ज्योतिषीय कारण'
              : 'Astrological Causes of Pitru Dosh'}
          </h2>
          <p style={{ color: '#4B3621' }}>
            {language === 'hindi'
              ? 'किसी व्यक्ति की जन्मपत्री में, निम्नलिखित ज्योतिषीय स्थिति पितृ दोष का संकेत देती है, जिसके लिए नारायण बलि की आवश्यकता होती है:'
              : 'In a native\'s horoscope, the following astrological placements indicate Pitru Dosh, warranting Narayan Bali:'}
          </p>
          <ul style={{ color: '#4B3621' }}>
            <li>
              {language === 'hindi'
                ? '9वें भाव (पूर्वजों का भाव) में सूर्य, शनि, राहु, या केतु'
                : 'Sun, Saturn, Rahu, or Ketu in the 9th house (house of ancestors)'}
            </li>
            <li>
              {language === 'hindi'
                ? '5वें भाव (संतान, विरासत) पर प्रभाव'
                : 'Affliction to the 5th house (children, legacy)'}
            </li>
            <li>
              {language === 'hindi'
                ? 'कमजोर बृहस्पति और चंद्रमा'
                : 'Weak Jupiter and Moon'}
            </li>
            <li>
              {language === 'hindi'
                ? 'राहु-केतु का सूर्य या 9वें स्वामी के साथ संबंध'
                : 'Connection of Rahu-Ketu with Sun or 9th lord'}
            </li>
          </ul>
          <p style={{ color: '#4B3621' }}>
            {language === 'hindi'
              ? 'जब ये स्थितियां होती हैं, तो इससे संतान में देरी, करियर में असफलता, अस्पष्टीकृत नुकसान, या बार-बार बीमारियां हो सकती हैं। नारायण बलि करना कार्मिक सुधार के रूप में कार्य करता है, जो इन अशुभ ग्रहीय प्रभावों को कम करता है।'
              : 'When these placements occur, it may lead to delay in progeny, career failures, unexplained losses, or frequent illnesses. Performing Narayan Bali acts as a karmic correction, mitigating these malefic planetary effects.'}
          </p>
        </section>

        {/* When and Where Section */}
        <section className="location-section">
          <h2 style={{ color: '#800000' }}>
            {language === 'hindi'
              ? 'नारायण बलि कब और कहां करें'
              : 'When and Where to Perform Narayan Bali'}
          </h2>
          <div style={{ color: '#4B3621' }}>
            <h3 style={{ color: '#CC7722' }}>
              {language === 'hindi'
                ? 'सर्वोत्तम स्थान:'
                : 'Best Locations:'}
            </h3>
            <ul>
              <li>
                <strong>
                  {language === 'hindi'
                    ? 'त्र्यंबकेश्वर (महाराष्ट्र)'
                    : 'Trimbakeshwar (Maharashtra)'}
                </strong>{' '}
                – {language === 'hindi'
                  ? 'नासिक के पास, भगवान शिव द्वारा शासित, नारायण बलि और नाग बलि दोनों के लिए आदर्श।'
                  : 'Near Nashik, governed by Lord Shiva, ideal for both Narayan Bali and Nag Bali.'}
              </li>
              <li>
                <strong>
                  {language === 'hindi'
                    ? 'गया (बिहार)'
                    : 'Gaya (Bihar)'}
                </strong>{' '}
                – {language === 'hindi'
                  ? 'विष्णुपद मंदिर का घर, पूर्वजों के अनुष्ठानों के लिए शक्तिशाली।'
                  : 'Home of the Vishnupad temple, powerful for ancestral rites.'}
              </li>
              <li>
                <strong>
                  {language === 'hindi'
                    ? 'रामेश्वरम (तमिलनाडु)'
                    : 'Rameswaram (Tamil Nadu)'}
                </strong>{' '}
                – {language === 'hindi'
                  ? 'चार धामों में से एक, दिवंगत आत्माओं को मोक्ष प्रदान करता है।'
                  : 'One of the Char Dhams, offering moksha to departed souls.'}
              </li>
            </ul>

            <h3 style={{ color: '#CC7722' }}>
              {language === 'hindi'
                ? 'सर्वोत्तम दिन:'
                : 'Best Days:'}
            </h3>
            <ul>
              <li>{language === 'hindi' ? 'अमावस्या (नई चंद्रमा)' : 'Amavasya (New Moon)'}</li>
              <li>{language === 'hindi' ? 'पितृ पक्ष (श्राद्ध पखवाड़ा)' : 'Pitru Paksha (Shraddha fortnight)'}</li>
              <li>{language === 'hindi' ? 'ग्रहण (विशेष रूप से सूर्य ग्रहण)' : 'Eclipses (especially solar)'}</li>
              <li>{language === 'hindi' ? 'महालय अमावस्या' : 'Mahalaya Amavasya'}</li>
            </ul>

            <p>
              <strong>
                {language === 'hindi'
                  ? 'आदर्श नक्षत्र:'
                  : 'Ideal Nakshatras:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'मघा, भरणी, कृत्तिका'
                : 'Magha, Bharani, Krittika'}
            </p>

            <p>
              {language === 'hindi'
                ? 'अनुष्ठान वैदिक प्रक्रियाओं से परिचित एक योग्य पुरोहित द्वारा किया जाना चाहिए और अधिमानतः ऐसा व्यक्ति जो पारंपरिक वंश से संबंधित हो।'
                : 'The ritual must be performed by a qualified priest familiar with Vedic procedures and preferably one who belongs to a traditional lineage.'}
            </p>
          </div>
        </section>

        {/* Ritual Procedure Section */}
        <section className="procedure-section">
          <h2 style={{ color: '#800000' }}>
            {language === 'hindi'
              ? 'नारायण बलि विधि विधान – अनुष्ठान प्रक्रिया'
              : 'Narayan Bali Vidhi Vidhan – Ritual Procedure'}
          </h2>
          <ol style={{ color: '#4B3621' }}>
            <li>
              <strong>
                {language === 'hindi'
                  ? 'संकल्प (संकल्प):'
                  : 'Sankalp (Resolution):'}
              </strong>{' '}
              {language === 'hindi'
                ? 'भक्त पवित्र अग्नि के सामने अनुष्ठान के उद्देश्य की घोषणा करता है।'
                : 'The devotee declares the purpose of the ritual before sacred fire.'}
            </li>
            <li>
              <strong>
                {language === 'hindi'
                  ? 'पिंड दान:'
                  : 'Pind Daan:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'पूर्वजों को चावल के पिंडों का प्रतीकात्मक अर्पण, जो तिल, घी और शहद से बनाया जाता है।'
                : 'Symbolic offerings of rice balls to ancestors, made with sesame, ghee, and honey.'}
            </li>
            <li>
              <strong>
                {language === 'hindi'
                  ? 'नारायण पूजा:'
                  : 'Narayan Puja:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'दिवंगत आत्मा का मार्गदर्शन और मुक्ति के लिए भगवान नारायण का आह्वान।'
                : 'Invocation of Lord Narayan to guide and liberate the departed soul.'}
            </li>
            <li>
              <strong>
                {language === 'hindi'
                  ? 'कृत्रिम शरीर तैयारी:'
                  : 'Artificial Body Preparation:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'गेहूं के आटे से बना, मानव के आकार का, भटकती आत्मा के लिए माध्यम के रूप में कार्य करने के लिए।'
                : 'Made from wheat flour, shaped like a human, to act as a medium for the wandering soul.'}
            </li>
            <li>
              <strong>
                {language === 'hindi'
                  ? 'वैदिक मंत्र जाप:'
                  : 'Vedic Mantra Chanting:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'पुरोहित गरुड़ पुराण के मंत्रों और विशिष्ट शांति मंत्रों का जाप करते हैं।'
                : 'Priests chant the Garuda Purana mantras and specific Shanti mantras.'}
            </li>
            <li>
              <strong>
                {language === 'hindi'
                  ? 'होम (अग्नि अनुष्ठान):'
                  : 'Homa (Fire Ritual):'}
              </strong>{' '}
              {language === 'hindi'
                ? 'आत्मा के अवशिष्ट कर्मों को शुद्ध करने के लिए अग्नि देव को अर्पण।'
                : 'Offering to Agni Dev to purify the soul\'s residual karmas.'}
            </li>
            <li>
              <strong>
                {language === 'hindi'
                  ? 'तर्पण:'
                  : 'Tarpan:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'पूर्वजों को संतुष्ट करने के लिए तिल के साथ मिश्रित पानी का अर्पण।'
                : 'Offering of water mixed with sesame to satisfy the ancestors.'}
            </li>
            <li>
              <strong>
                {language === 'hindi'
                  ? 'पूर्णाहुति और आरती:'
                  : 'Purnahuti and Aarti:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'अंतिम आहुति और धन्यवाद के साथ अनुष्ठान का समापन।'
                : 'Concluding the ritual with final oblations and thanksgiving.'}
            </li>
          </ol>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2 style={{ color: '#800000' }}>
            {language === 'hindi'
              ? 'आध्यात्मिक और मनोवैज्ञानिक लाभ'
              : 'Spiritual and Psychological Benefits'}
          </h2>
          <div className="benefits-grid">
            {[
              {
                icon: '🕉️',
                title: {
                  hindi: 'पितृ शाप से मुक्ति',
                  english: 'Relief from Ancestral Curses'
                },
                description: {
                  hindi: 'छिपे हुए कार्मिक बोझ को हटाता है',
                  english: 'Removes hidden karmic burdens'
                }
              },
              {
                icon: '✨',
                title: {
                  hindi: 'मानसिक स्पष्टता और शांति',
                  english: 'Mental Clarity and Peace'
                },
                description: {
                  hindi: 'आवर्ती पारिवारिक समस्याओं को समाप्त करता है',
                  english: 'Eliminates recurring family problems'
                }
              },
              {
                icon: '💼',
                title: {
                  hindi: 'करियर और धन प्रवाह',
                  english: 'Career and Wealth Flow'
                },
                description: {
                  hindi: 'प्रचुरता के अवरुद्ध चैनलों को खोलता है',
                  english: 'Opens up blocked channels of abundance'
                }
              },
              {
                icon: '🌱',
                title: {
                  hindi: 'स्वास्थ्य और प्रजनन क्षमता में सुधार',
                  english: 'Health and Fertility Improvements'
                },
                description: {
                  hindi: 'विशेष रूप से संतान संबंधी समस्याओं को दूर करने में सहायक',
                  english: 'Especially helpful in overcoming childbearing issues'
                }
              },
              {
                icon: '🙏',
                title: {
                  hindi: 'भावनात्मक समापन',
                  english: 'Emotional Closure'
                },
                description: {
                  hindi: 'परिवार को आध्यात्मिक समापन और शांति प्राप्त करने में मदद करता है',
                  english: 'Helps the family attain spiritual closure and peace'
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

        {/* Do's and Don'ts Section */}
        <section className="dos-donts-section">
          <h2 style={{ color: '#800000' }}>
            {language === 'hindi'
              ? 'क्या करें और क्या न करें'
              : 'Do\'s and Don\'ts'}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', color: '#4B3621' }}>
            <div style={{ flex: '1 1 300px', backgroundColor: '#F0E68C', padding: '1.5rem', borderRadius: '8px' }}>
              <h3 style={{ color: '#800000', textAlign: 'center' }}>
                {language === 'hindi' ? 'क्या करें:' : 'Do\'s:'}
              </h3>
              <ul>
                <li>
                  {language === 'hindi'
                    ? 'अनुष्ठान से पहले और दौरान ब्रह्मचर्य का पालन करें।'
                    : 'Maintain celibacy before and during the ritual.'}
                </li>
                <li>
                  {language === 'hindi'
                    ? 'पारंपरिक कपड़े पहनें (अधिमानतः पुरुषों के लिए सफेद और महिलाओं के लिए पीला/सौम्य रंग)।'
                    : 'Wear traditional clothes (preferably white for men and yellow/sober shades for women).'}
                </li>
                <li>
                  {language === 'hindi'
                    ? 'अनुष्ठान के दिन उपवास रखें।'
                    : 'Observe fast on the day of the ritual.'}
                </li>
                <li>
                  {language === 'hindi'
                    ? 'पहले और बाद में बड़ों का आशीर्वाद लें।'
                    : 'Seek blessings from elders before and after.'}
                </li>
              </ul>
            </div>
            <div style={{ flex: '1 1 300px', backgroundColor: '#F0E68C', padding: '1.5rem', borderRadius: '8px' }}>
              <h3 style={{ color: '#800000', textAlign: 'center' }}>
                {language === 'hindi' ? 'क्या न करें:' : 'Don\'ts:'}
              </h3>
              <ul>
                <li>
                  {language === 'hindi'
                    ? 'कम से कम एक सप्ताह पहले से मांसाहारी भोजन, लहसुन, प्याज से परहेज करें।'
                    : 'Avoid non-vegetarian food, garlic, onion for at least a week prior.'}
                </li>
                <li>
                  {language === 'hindi'
                    ? 'अनुष्ठान को आकस्मिक रूप से न करें—भावनात्मक ईमानदारी महत्वपूर्ण है।'
                    : 'Do not perform the ritual casually—emotional sincerity is important.'}
                </li>
                <li>
                  {language === 'hindi'
                    ? 'अनुष्ठान को बीच में न छोड़ें।'
                    : 'Don\'t leave the ritual midway.'}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Rituals Section */}
        <section className="related-section">
          <h2 style={{ color: '#800000' }}>
            {language === 'hindi'
              ? 'संबंधित अनुष्ठान'
              : 'Related Rituals'}
          </h2>
          <div style={{ color: '#4B3621' }}>
            <ul>
              <li>
                <strong>
                  {language === 'hindi'
                    ? 'नाग बलि:'
                    : 'Nag Bali:'}
                </strong>{' '}
                {language === 'hindi'
                  ? 'सांपों, विशेष रूप से कोबरा को मारने से संबंधित पापों से मुक्ति के लिए किया जाता है।'
                  : 'Performed to absolve sins related to killing snakes, especially cobra.'}
              </li>
              <li>
                <strong>
                  {language === 'hindi'
                    ? 'त्रिपिंडी श्राद्ध:'
                    : 'Tripindi Shraddha:'}
                </strong>{' '}
                {language === 'hindi'
                  ? 'उन पूर्वजों के लिए किया जाता है जिनका श्राद्ध वर्षों से नहीं किया गया है।'
                  : 'Done for ancestors whose Shraddha was not performed for years.'}
              </li>
              <li>
                <strong>
                  {language === 'hindi'
                    ? 'पितृ दोष निवारण पूजा:'
                    : 'Pitra Dosh Nivaran Puja:'}
                </strong>{' '}
                {language === 'hindi'
                  ? 'कुंडली में पितृ दोष से पीड़ित लोगों के लिए सामान्य पूजा।'
                  : 'General puja for those afflicted by ancestral dosha in the chart.'}
              </li>
            </ul>
            <p>
              {language === 'hindi'
                ? 'अक्सर, अधिकतम लाभ के लिए नारायण बलि नाग बलि और त्रिपिंडी के साथ किया जाता है।'
                : 'Often, Narayan Bali is performed alongside Nag Bali and Tripindi for maximum benefit.'}
            </p>
          </div>
        </section>

        {/* Modern Relevance Section */}
        <section className="modern-section">
          <h2 style={{ color: '#800000' }}>
            {language === 'hindi'
              ? 'आधुनिक प्रासंगिकता और आवश्यकता'
              : 'Modern Relevance and Need'}
          </h2>
          <p style={{ color: '#4B3621' }}>
            {language === 'hindi'
              ? 'तकनीकी प्रगति के बावजूद, अनसुलझे पूर्वजों के मुद्दे व्यक्तियों को प्रभावित करना जारी रखते हैं। अचानक दुर्घटनाओं, बार-बार गर्भपात, या अस्पष्टीकृत विफलताओं के कई मामले आध्यात्मिक असंतुलन की ओर इशारा करते हैं। नारायण बलि संस्कार आध्यात्मिक और भौतिक दुनिया के बीच एक पुल प्रदान करता है। आधुनिक परिवारों में जहां पीढ़ियों से अनुष्ठानों की उपेक्षा की गई है, यह पूजा एक महत्वपूर्ण आध्यात्मिक रीसेट के रूप में कार्य करती है।'
              : 'Despite technological advancements, unresolved ancestral issues continue to impact individuals. Many cases of sudden accidents, repetitive miscarriages, or unexplained failures point toward spiritual imbalances. Narayan Bali Sanskar offers a bridge between the spiritual and material world. In modern families where rituals have been neglected for generations, this puja serves as an important spiritual reset.'}
          </p>
        </section>

        {/* Booking Section */}
        <section className="booking-section">
          <h2 style={{ color: '#FFF5E1' }}>
            {language === 'hindi'
              ? 'नारायण बलि की बुकिंग करें'
              : 'Book Narayan Bali Ritual'}
          </h2>
          <p style={{ color: '#FFF5E1' }}>
            {language === 'hindi'
              ? 'हमारे विशेषज्ञ पंडित जी के मार्गदर्शन में संपूर्ण विधि-विधान से अनुष्ठान करवाएं'
              : 'Perform the ritual with complete procedures under the guidance of our expert priests'}
          </p>
          <button className="book-button">
            {language === 'hindi'
              ? 'अभी बुक करें'
              : 'Book Now'} 🙏
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Narayanbali;
