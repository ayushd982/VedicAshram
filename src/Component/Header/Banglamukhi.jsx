import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import mukhiImage from '../../assets/mukhi.jpg';
import './Banglamukhi.css';

const Bangalamukhi = () => {
  const { language } = useLanguage();

  return (
    <div className="banglamukhi-container">
      <Navbar />
      <div className="background-wrapper">
        <img src={mukhiImage} alt="" className="background-image" />
      </div>

      <div className="banglamukhi-content">
        {/* Main Header */}
        <header className="main-header">
          <h1 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'बगलामुखी यज्ञ: शत्रुओं को हराने और बाधाओं को दूर करने के लिए दिव्य अनुष्ठान'
              : 'Baglamukhi Yagya – Divine Ritual to Defeat Enemies and Overcome Obstacles'}
          </h1>
        </header>

        {/* Introduction to Goddess Baglamukhi */}
        <section className="intro-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'देवी बगलामुखी का परिचय'
              : 'Introduction to Goddess Baglamukhi'}
          </h2>
          <p style={{ color: '#3B2F2F' }}>
            {language === 'hindi'
              ? 'बगलामुखी, जिन्हें पीताम्बरा देवी के नाम से भी जाना जाता है, हिंदू तंत्र में दस महाविद्याओं में से एक हैं। वह देवी के रूप में पूजी जाती हैं जो नकारात्मक शक्तियों की वाणी, मन और कार्यों को स्तब्ध करने की शक्ति रखती हैं। पीले वस्त्र पहने एक तेजस्वी आकृति के रूप में चित्रित, बगलामुखी स्थिरता, मौन और विरोधियों पर प्रभुत्व की शक्ति का प्रतीक हैं। उनकी पूजा अक्सर कानूनी विवादों, दुश्मनों के खतरों, काले जादू के प्रभावों और संकट के समय में की जाती है। वैदिक ज्योतिष में, उनकी ऊर्जा का आह्वान अशुभ ग्रहीय प्रभावों को निष्प्रभावी करने के लिए किया जाता है, विशेष रूप से मंगल, बुध, शनि और राहु के कारण होने वाले प्रभावों को।'
              : 'Baglamukhi, also known as Pitambara Devi, is one of the ten Mahavidyas in Hindu Tantra. She is revered as the goddess who wields the power to paralyze the speech, mind, and actions of negative forces. Depicted as a radiant figure dressed in yellow, Baglamukhi symbolizes the power of stillness, silence, and dominance over adversaries. Her worship is often sought during legal disputes, enemy threats, black magic influences, and times of crisis. In Vedic astrology, her energy is invoked to neutralize malefic planetary influences, especially those caused by Mars, Mercury, Saturn, and Rahu.'}
          </p>
        </section>

        {/* Mythological Background & Legends */}
        <section className="mythology-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'पौराणिक पृष्ठभूमि और किंवदंतियाँ'
              : 'Mythological Background & Legends'}
          </h2>
          <p style={{ color: '#3B2F2F' }}>
            {language === 'hindi'
              ? 'प्राचीन शास्त्रों के अनुसार, ब्रह्मांडीय असंतुलन और अराजकता के समय में, देवी बगलामुखी व्यवस्था बहाल करने के लिए प्रकट हुईं। किंवदंती के अनुसार, एक भयानक तूफान ब्रह्मांड को नष्ट कर रहा था, और देवताओं ने दिव्य माता की मदद मांगी। सौराष्ट्र में हरिद्रा सरोवर (हल्दी झील) से बगलामुखी प्रकट हुईं, जिन्होंने अपनी दिव्य शक्ति से तूफान को शांत किया। एक अन्य प्रसिद्ध कहानी में उन्हें एक राक्षस को वश में करते हुए बताया गया है जिसने अजेयता का वरदान प्राप्त किया था। बगलामुखी ने युद्ध के बीच में उसकी वाणी को मौन कर दिया और उसके कार्यों को स्तब्ध कर दिया, जो उनकी अद्वितीय शक्ति का प्रतीक है।'
              : 'According to the ancient scriptures, during a time of cosmic imbalance and chaos, Goddess Baglamukhi emerged to restore order. As per the legend, a terrible storm was destroying the universe, and the gods sought the help of the Divine Mother. From the Haridra Sarovar (turmeric lake) in Saurashtra emerged Baglamukhi, who calmed the storm with her divine power. Another famous story describes her subduing a demon who had acquired a boon of invincibility. Baglamukhi silenced his speech and paralyzed his actions mid-battle, signifying her unparalleled might.'}
          </p>
        </section>

        {/* Spiritual and Astrological Significance */}
        <section className="significance-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'आध्यात्मिक और ज्योतिषीय महत्व'
              : 'Spiritual and Astrological Significance'}
          </h2>
          <p style={{ color: '#3B2F2F' }}>
            {language === 'hindi'
              ? 'बगलामुखी यज्ञ ग्रहीय पीड़ा और ज्योतिषीय चुनौतियों से गहराई से जुड़ा हुआ है। राहु, केतु या नीच बुध के कारण समस्याओं का अनुभव करने वाले व्यक्ति अक्सर बदनामी, कानूनी लड़ाइयों और मौखिक हमलों का सामना करते हैं। जब मंगल किसी व्यक्ति की कुंडली में संघर्ष या हिंसा का कारण बनता है, तो बगलामुखी की ऊर्जा आक्रामकता को शांत कर सकती है। अनुष्ठान इन ग्रहों से जुड़े महादशाओं और अंतर्दशाओं के दौरान अनुशंसित है। बगलामुखी मानसिक स्पष्टता और वाणी नियंत्रण भी लाती हैं, जिससे उनकी पूजा राजनेताओं, नेताओं, कानूनी पेशेवरों और सार्वजनिक जांच के अधीन लोगों के लिए आवश्यक हो जाती है।'
              : 'Baglamukhi Yagya is deeply connected with planetary afflictions and astrological challenges. Individuals experiencing issues due to Rahu, Ketu, or debilitated Mercury often face defamation, legal battles, and verbal attacks. When Mars causes conflict or violence in a person\'s chart, Baglamukhi\'s energy can pacify aggression. The ritual is recommended during Mahadashas and Antardashas involving these planets. Baglamukhi also brings mental clarity and speech control, making her worship essential for politicians, leaders, legal professionals, and those under public scrutiny.'}
          </p>
        </section>

        {/* Types of Baglamukhi Yagya */}
        <section className="types-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'बगलामुखी यज्ञ के प्रकार'
              : 'Types of Baglamukhi Yagya'}
          </h2>
          <p style={{ color: '#3B2F2F' }}>
            {language === 'hindi'
              ? 'बगलामुखी यज्ञ को तीव्रता और उद्देश्य के आधार पर वर्गीकृत किया जा सकता है:'
              : 'Baglamukhi Yagya can be categorized based on intensity and purpose:'}
          </p>
          <ul style={{ color: '#3B2F2F' }}>
            <li>
              <strong>
                {language === 'hindi' ? 'मूल हवन:' : 'Basic Havan:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'सरल पूजा के साथ घर पर आयोजित, शांति और सामान्य सुरक्षा के लिए आदर्श।'
                : 'Conducted at home with simple puja, ideal for peace and general protection.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'दशांश होम:' : 'Dashansh Homa:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'मंत्र जप की गिनती का 1/10वां हिस्सा शामिल है, महत्वपूर्ण लेकिन प्रबंधनीय बाधाओं के लिए उपयुक्त।'
                : 'Involves 1/10th of the mantra japa count, suitable for significant but manageable obstacles.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'महा यज्ञ:' : 'Maha Yagya:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'पांच या अधिक पंडितों द्वारा किया जाता है, इसमें 1.25 लाख जप और पूर्ण पैमाने पर हवन शामिल है।'
                : 'Performed by five or more pandits, includes 1.25 lakh japa and full-scale havan.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'सिद्ध अनुष्ठान:' : 'Siddha Anushthan:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'पुरानी समस्याओं या गंभीर विरोध को निष्प्रभावी करने के लिए डिज़ाइन किया गया सात से ग्यारह दिन का गहन अनुष्ठान।'
                : 'A seven to eleven-day intensive ritual designed to neutralize chronic problems or severe opposition.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'तांत्रिक यज्ञ:' : 'Tantrik Yagya:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'तांत्रिक प्रक्रियाओं के साथ गुप्त रूप से किए जाने वाले उन्नत अनुष्ठान, आमतौर पर कामाख्या जैसे शक्तिशाली आध्यात्मिक केंद्रों पर।'
                : 'Advanced rituals performed secretly with tantric procedures, usually at powerful spiritual centers like Kamakhya.'}
            </li>
          </ul>
        </section>

        {/* Mantras and Their Power */}
        <section className="mantras-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'मंत्र और उनकी शक्ति'
              : 'Mantras and Their Power'}
          </h2>
          <p style={{ color: '#3B2F2F' }}>
            {language === 'hindi'
              ? 'बगलामुखी यज्ञ का आधार उनके बीज मंत्र का जाप है:'
              : 'The cornerstone of the Baglamukhi Yagya is the chanting of her beej mantra:'}
          </p>
          <p style={{ fontStyle: 'italic', textAlign: 'center', color: '#3B2F2F' }}>
            "ॐ ह्लीं बगलामुखी सर्व दुष्टानां वाचं मुखं पदं स्तम्भय जिव्हां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा"
          </p>
          <p style={{ fontStyle: 'italic', textAlign: 'center', color: '#3B2F2F' }}>
            "Om Hleem Baglamukhi Sarva Dushtanam Vacham Mukham Padam Stambhaya Jivham Keelaya Budhim Vinashaya Hleem Om Swaha"
          </p>
          <p style={{ color: '#3B2F2F' }}>
            {language === 'hindi'
              ? 'यह मंत्र भक्त के खिलाफ काम करने वाली बुरी शक्तियों को स्तब्ध करता है। अन्य मंत्रों में शामिल हैं:'
              : 'This mantra paralyzes the evil forces working against the devotee. Other mantras include:'}
          </p>
          <ul style={{ color: '#3B2F2F' }}>
            <li>
              <strong>
                {language === 'hindi' ? 'बगलामुखी कवच' : 'Baglamukhi Kavach'}
              </strong>{' '}
              – {language === 'hindi' ? 'एक सुरक्षात्मक कवच' : 'a protective shield'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'स्तोत्र पाठ' : 'Stotra Path'}
              </strong>{' '}
              – {language === 'hindi' ? 'दिव्य रूप की प्रशंसा' : 'praises the divine form'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'अर्गला स्तोत्र' : 'Argala Stotra'}
              </strong>{' '}
              – {language === 'hindi' ? 'छिपे आशीर्वाद को अनलॉक करता है' : 'unlocks hidden blessings'}
            </li>
          </ul>
          <p style={{ color: '#3B2F2F' }}>
            {language === 'hindi'
              ? 'इन मंत्रों की कंपन आवृत्ति मानसिक अवरोधों को साफ करती है, वाणी से संबंधित समस्याओं को ठीक करती है, और निर्णायक विजय प्रदान करती है।'
              : 'The vibrational frequency of these mantras cleanses mental blocks, heals speech-related issues, and grants decisive victory.'}
          </p>
        </section>

        {/* Vidhi Vidhan (Step-by-Step Yagya Procedure) */}
        <section className="procedure-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'विधि विधान (चरण-दर-चरण यज्ञ प्रक्रिया)'
              : 'Vidhi Vidhan (Step-by-Step Yagya Procedure)'}
          </h2>
          <ol style={{ color: '#3B2F2F' }}>
            <li>
              <strong>
                {language === 'hindi' ? 'संकल्प (संकल्प):' : 'Sankalp (Resolution):'}
              </strong>{' '}
              {language === 'hindi'
                ? 'यज्ञ के उद्देश्य को परिभाषित करने के लिए भक्त या पुरोहित द्वारा लिया गया।'
                : 'Taken by the devotee or priest to define the purpose of the Yagya.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'कलश स्थापना:' : 'Kalash Sthapana:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'गंगा जल, हल्दी और आम के पत्तों के साथ पवित्र कलश की स्थापना।'
                : 'Establishing the sacred pot with Ganga water, turmeric, and mango leaves.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'देवी बगलामुखी का आह्वान (आवाहन)' : 'Invocation (Avahan) of Devi Baglamukhi'}
              </strong>
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'जप:' : 'Japa:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'हल्दी माला के साथ मंत्र का जाप और पीले फूलों का अर्पण।'
                : 'Repeating the mantra with turmeric mala and offering yellow flowers.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'होम:' : 'Homa:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'घी, सरसों के बीज, हल्दी और सूखे नारियल का उपयोग करके अग्नि अर्पण।'
                : 'Fire offerings using ghee, mustard seeds, turmeric, and dry coconut.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'नैवेद्य (भोग):' : 'Offerings (Naivedya):'}
              </strong>{' '}
              {language === 'hindi'
                ? 'पीले मिठाई जैसे बेसन लड्डू, केला और केसर दूध।'
                : 'Yellow sweets like besan laddoo, banana, and kesar milk.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'आरती:' : 'Aarti:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'धूप, दीप और घंटी के साथ प्रशंसा गीत गाना।'
                : 'Singing praise songs with incense, lamp, and bell.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'पूर्णाहुति और दक्षिणा:' : 'Purnahuti and Dakshina:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'यज्ञ का समापन और दान के माध्यम से कृतज्ञता का प्रदर्शन।'
                : 'Concluding the yagya and offering gratitude through charity.'}
            </li>
          </ol>
        </section>

        {/* Best Timing and Locations for Baglamukhi Yagya */}
        <section className="timing-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'बगलामुखी यज्ञ के लिए सर्वोत्तम समय और स्थान'
              : 'Best Timing and Locations for Baglamukhi Yagya'}
          </h2>
          <div style={{ color: '#3B2F2F' }}>
            <p>
              <strong>
                {language === 'hindi' ? 'शुभ दिन:' : 'Auspicious Days:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'गुरुवार, अमावस्या, नवमी तिथि और बगलामुखी जयंती के दौरान।'
                : 'Thursdays, Amavasya, Navami Tithi, and during Baglamukhi Jayanti.'}
            </p>
            <p>
              <strong>
                {language === 'hindi' ? 'ज्योतिषीय स्थितियां:' : 'Astrological Conditions:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'राहु-केतु दशा, मंगल-शनि युति, बुध पीड़ा।'
                : 'Rahu-Ketu Dasha, Mars-Saturn conjunctions, Mercury afflictions.'}
            </p>
            <p>
              <strong>
                {language === 'hindi' ? 'शक्तिशाली स्थान:' : 'Powerful Locations:'}
              </strong>
            </p>
            <ul>
              <li>{language === 'hindi' ? 'दतिया (मध्य प्रदेश)' : 'Datia (Madhya Pradesh)'}</li>
              <li>{language === 'hindi' ? 'कांगड़ा (हिमाचल प्रदेश)' : 'Kangra (Himachal Pradesh)'}</li>
              <li>{language === 'hindi' ? 'कामाख्या मंदिर (असम)' : 'Kamakhya Temple (Assam)'}</li>
              <li>{language === 'hindi' ? 'उज्जैन और हरिद्वार - सार्वजनिक अनुष्ठानों के लिए उपयुक्त' : 'Ujjain and Haridwar – suitable for public anushthans'}</li>
            </ul>
          </div>
        </section>

        {/* Materials Used and Their Symbolism */}
        <section className="materials-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'उपयोग की जाने वाली सामग्री और उनका प्रतीकवाद'
              : 'Materials Used and Their Symbolism'}
          </h2>
          <div style={{ color: '#3B2F2F', overflow: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                    {language === 'hindi' ? 'सामग्री' : 'Material'}
                  </th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                    {language === 'hindi' ? 'प्रतीकवाद' : 'Symbolism'}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'हल्दी' : 'Turmeric'}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'शुद्धता, देवी की स्तब्ध करने की शक्ति' : 'Purity, paralysis power of the goddess'}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'सरसों के बीज' : 'Mustard Seeds'}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'नकारात्मकता, दुश्मन के इरादों को जलाता है' : 'Burns negativity, enemy intentions'}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'पीला कपड़ा' : 'Yellow Cloth'}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'दिव्य शक्ति को आकर्षित करता है' : 'Attracts divine shakti'}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'घी' : 'Ghee'}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'पवित्र अग्नि के लिए ईंधन, शुद्धता' : 'Fuel for sacred fire, purity'}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'गोबर के उपले' : 'Cow Dung Cakes'}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'आध्यात्मिक ऊर्जा के लिए पारंपरिक ईंधन' : 'Traditional fuel for spiritual energy'}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'चमेली का तेल' : 'Chameli Oil'}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {language === 'hindi' ? 'तांत्रिक देवताओं के लिए सुगंधित अर्पण' : 'Scented offering for tantric deities'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Benefits of Baglamukhi Yagya */}
        <section className="benefits-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'बगलामुखी यज्ञ के लाभ'
              : 'Benefits of Baglamukhi Yagya'}
          </h2>
          <ul style={{ color: '#3B2F2F' }}>
            <li>
              <strong>
                {language === 'hindi' ? 'शत्रुओं से सुरक्षा:' : 'Protection from Enemies:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'विरोधियों के कार्यों को निष्प्रभावी करता है।'
                : 'Neutralizes adversaries\' actions.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'कानूनी मामलों में विजय:' : 'Victory in Legal Matters:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'मुकदमों और मुकदमेबाजी में सफलता प्रदान करता है।'
                : 'Grants success in lawsuits and litigation.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'मानसिक शांति और स्पष्टता:' : 'Mental Peace and Clarity:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'भय, चिंता और आंतरिक भ्रम को दूर करता है।'
                : 'Removes fear, anxiety, and inner confusion.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'व्यापार स्थिरता:' : 'Business Stability:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'षड्यंत्रों और नुकसान से बचाता है।'
                : 'Protects against conspiracies and loss.'}
            </li>
            <li>
              <strong>
                {language === 'hindi' ? 'आध्यात्मिक विकास:' : 'Spiritual Growth:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'इच्छाशक्ति, नियंत्रण और मानसिक शक्ति को बढ़ाता है।'
                : 'Enhances willpower, control, and psychic strength.'}
            </li>
          </ul>
        </section>

        {/* Precautions and Rules for Devotees */}
        <section className="precautions-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'भक्तों के लिए सावधानियां और नियम'
              : 'Precautions and Rules for Devotees'}
          </h2>
          <ul style={{ color: '#3B2F2F' }}>
            <li>
              {language === 'hindi'
                ? 'यज्ञ अवधि के दौरान ब्रह्मचर्य का पालन करें।'
                : 'Maintain Brahmacharya during the Yagya period.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'तामसिक भोजन (प्याज, लहसुन, नॉन-वेज, शराब) से बचें।'
                : 'Avoid tamasic food (onion, garlic, non-veg, alcohol).'}
            </li>
            <li>
              {language === 'hindi'
                ? 'पूजा के दौरान पीले कपड़े पहनें।'
                : 'Wear yellow clothes during the puja.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'आध्यात्मिक ऊर्जा बनाए रखने के लिए चटाई या फर्श पर सोएं।'
                : 'Sleep on a mat or floor to retain spiritual energy.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'केवल हल्दी माला के साथ जाप करें।'
                : 'Chant only with a turmeric mala.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'शुद्ध और निःस्वार्थ हृदय से अनुष्ठान करें।'
                : 'Approach the ritual with a pure and unselfish heart.'}
            </li>
          </ul>
        </section>

        {/* Baglamukhi Yantra and Its Use */}
        <section className="yantra-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'बगलामुखी यंत्र और उसका उपयोग'
              : 'Baglamukhi Yantra and Its Use'}
          </h2>
          <ul style={{ color: '#3B2F2F' }}>
            <li>
              {language === 'hindi'
                ? 'घर/कार्यालय की वेदी में ऊर्जावान यंत्र स्थापित करें।'
                : 'Install an energized yantra in home/office altar.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'पूर्व या उत्तर की ओर मुख करके प्रतिदिन 108 बार जाप करें।'
                : 'Chant daily 108 times facing East or North.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'दिव्य ऊर्जा को सक्रिय करने के लिए यंत्र पर ध्यान केंद्रित करके ध्यान करें।'
                : 'Meditate with focus on the yantra to activate divine energy.'}
            </li>
            <li>
              {language === 'hindi'
                ? 'अतिरिक्त सुरक्षा के लिए अपने बटुए या कानूनी दस्तावेजों के पास एक छोटा यंत्र रखें।'
                : 'Keep a small yantra in your wallet or near legal documents for added protection.'}
            </li>
          </ul>
        </section>

        {/* Booking Section */}
        <section className="booking-section">
          <h2 style={{ color: '#FF4500' }}>
            {language === 'hindi'
              ? 'अपना व्यक्तिगत बगलामुखी यज्ञ बुक करें'
              : 'Book Your Personalized Baglamukhi Yagya'}
          </h2>
          <p style={{ color: '#3B2F2F' }}>
            {language === 'hindi'
              ? 'हमारी अनुभवी पुरोहित टीम आपकी कुंडली के अनुसार सटीक वैदिक विधि से शक्तिशाली बगलामुखी यज्ञ का आयोजन करती है।'
              : 'Our team of experienced priests conducts powerful Baglamukhi Yagyas with precise Vedic rituals, tailored according to your horoscope.'}
          </p>
          <button className="book-button">
            {language === 'hindi'
              ? 'यज्ञ बुक करें'
              : 'Book Baglamukhi Yagya Now'} 🔱
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Bangalamukhi;
