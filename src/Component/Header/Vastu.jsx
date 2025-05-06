import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from '../../Component/Footer/Footer';
import './Vastu.css';
import { useLanguage } from '../../context/LanguageContext';

const Vastu = () => {
  const { language } = useLanguage();

  // Array of Vastu services with their titles and descriptions in both English and Hindi
  const vastuServices = [
    // Row 1
    [
      {
        title: language === 'hindi' ? "आवासीय वास्तु" : "Residential Vastu",
        description: language === 'hindi'
          ? "प्राचीन वास्तु सिद्धांतों के साथ अपने घर को सामंजस्यपूर्ण बनाएं। हमारे विशेषज्ञ सभी परिवार के सदस्यों के लिए सकारात्मक ऊर्जा प्रवाह, समृद्धि और कल्याण को बढ़ाने के लिए आपके आवासीय स्थान का विश्लेषण करते हैं।"
          : "Harmonize your home with ancient Vastu principles. Our experts analyze your residential space to enhance positive energy flow, prosperity, and well-being for all family members.",
        image: "residential-vastu.jpg"
      },
      {
        title: language === 'hindi' ? "वाणिज्यिक वास्तु" : "Commercial Vastu",
        description: language === 'hindi'
          ? "सफलता और विकास के लिए अपने व्यापार स्थान को अनुकूलित करें। हमारे वास्तु सलाहकार एक ऐसा कार्यस्थान बनाने के लिए मार्गदर्शन प्रदान करते हैं जो समृद्धि को आकर्षित करता है, उत्पादकता बढ़ाता है और व्यापार लक्ष्यों का समर्थन करता है।"
          : "Optimize your business space for success and growth. Our Vastu consultants provide guidance to create a workspace that attracts prosperity, enhances productivity, and supports business goals.",
        image: "commercial-vastu.jpg"
      },
      {
        title: language === 'hindi' ? "निर्माण-पूर्व वास्तु" : "Pre-Construction Vastu",
        description: language === 'hindi'
          ? "शुरू से ही वास्तु ज्ञान के साथ अपनी सपनों की संपत्ति की योजना बनाएं। निर्माण शुरू होने से पहले प्लॉट चयन, भवन अभिविन्यास, कमरे के स्थान और वास्तुकला तत्वों पर विशेषज्ञ मार्गदर्शन प्राप्त करें।"
          : "Plan your dream property with Vastu wisdom from the ground up. Get expert guidance on plot selection, building orientation, room placement, and architectural elements before construction begins.",
        image: "pre-construction-vastu.jpg"
      }
    ],
    // Row 2
    [
      {
        title: language === 'hindi' ? "वास्तु सुधार" : "Vastu Correction",
        description: language === 'hindi'
          ? "बड़े नवीनीकरण के बिना मौजूदा स्थानों को बदलें। हमारे विशेषज्ञ आपकी संपत्ति में नकारात्मक ऊर्जाओं को निष्प्रभावित करने और सकारात्मक कंपन बढ़ाने के लिए व्यावहारिक समायोजन और उपचार की सिफारिश करते हैं।"
          : "Transform existing spaces without major renovations. Our specialists recommend practical adjustments and remedies to neutralize negative energies and enhance positive vibrations in your property.",
        image: "vastu-correction.jpg"
      },
      {
        title: language === 'hindi' ? "धन के लिए वास्तु" : "Vastu for Wealth",
        description: language === 'hindi'
          ? "वास्तु सिद्धांतों के माध्यम से प्रचुरता और वित्तीय स्थिरता को आकर्षित करें। अपने घर या कार्यालय के लिए विशिष्ट संशोधनों को जानें ताकि एक ऐसा स्थान बनाया जा सके जो धन उत्पादन और प्रतिधारण का समर्थन करता है।"
          : "Attract abundance and financial stability through Vastu principles. Learn specific modifications for your home or office to create a space that supports wealth generation and retention.",
        image: "vastu-wealth.jpg"
      },
      {
        title: language === 'hindi' ? "स्वास्थ्य के लिए वास्तु" : "Vastu for Health",
        description: language === 'hindi'
          ? "वास्तु सिद्धांतों के साथ एक उपचार वातावरण बनाएं। जानें कि आपके रहने की जगह की व्यवस्था शारीरिक और मानसिक कल्याण को कैसे प्रभावित करती है, और बेहतर स्वास्थ्य के लिए परिवर्तन लागू करें।"
          : "Create a healing environment with Vastu principles. Discover how the arrangement of your living space affects physical and mental well-being, and implement changes for better health.",
        image: "vastu-health.jpg"
      }
    ],
    // Row 3
    [
      {
        title: language === 'hindi' ? "रिश्तों के लिए वास्तु" : "Vastu for Relationships",
        description: language === 'hindi'
          ? "वास्तु के माध्यम से सद्भाव बढ़ाएं और बंधनों को मजबूत करें। हमारे विशेषज्ञ आपको ऐसे स्थान बनाने में मार्गदर्शन करते हैं जो सकारात्मक संबंधों को पोषित करते हैं, संघर्षों को कम करते हैं और भावनात्मक कल्याण को बढ़ावा देते हैं।"
          : "Enhance harmony and strengthen bonds through Vastu. Our experts guide you in creating spaces that nurture positive relationships, reduce conflicts, and promote emotional well-being.",
        image: "vastu-relationships.jpg"
      },
      {
        title: language === 'hindi' ? "औद्योगिक वास्तु" : "Industrial Vastu",
        description: language === 'hindi'
          ? "विशेष वास्तु सिद्धांतों के साथ विनिर्माण और औद्योगिक स्थानों को अनुकूलित करें। औद्योगिक सेटिंग्स में उचित लेआउट और ऊर्जा प्रवाह के माध्यम से उत्पादकता, सुरक्षा और लाभप्रदता बढ़ाएं।"
          : "Optimize manufacturing and industrial spaces with specialized Vastu principles. Enhance productivity, safety, and profitability through proper layout and energy flow in industrial settings.",
        image: "industrial-vastu.jpg"
      },
      {
        title: language === 'hindi' ? "वास्तु परामर्श" : "Vastu Consultation",
        description: language === 'hindi'
          ? "आपकी विशिष्ट आवश्यकताओं के लिए व्यक्तिगत वास्तु विश्लेषण। हमारे व्यापक परामर्श में विस्तृत मूल्यांकन, व्यावहारिक सिफारिशें और वास्तु सिद्धांतों को लागू करने के लिए निरंतर समर्थन शामिल है।"
          : "Personalized Vastu analysis for your specific needs. Our comprehensive consultation includes detailed assessment, practical recommendations, and ongoing support for implementing Vastu principles.",
        image: "vastu-consultation.jpg"
      }
    ],
    // Row 4
    [
      {
        title: language === 'hindi' ? "बगीचों के लिए वास्तु" : "Vastu for Gardens",
        description: language === 'hindi'
          ? "ऐसे बाहरी स्थान डिजाइन करें जो आपके घर की ऊर्जा के पूरक हों। जानें कि वास्तु सिद्धांतों के अनुसार अपनी संपत्ति के समग्र सामंजस्य को बढ़ाने के लिए बगीचों, जल सुविधाओं और पौधों की व्यवस्था कैसे करें।"
          : "Design outdoor spaces that complement your home's energy. Learn how to arrange gardens, water features, and plants according to Vastu principles to enhance the overall harmony of your property.",
        image: "vastu-gardens.jpg"
      },
      {
        title: language === 'hindi' ? "करियर के लिए वास्तु" : "Vastu for Career",
        description: language === 'hindi'
          ? "पेशेवर सफलता के लिए एक सहायक वातावरण बनाएं। जानें कि फोकस, रचनात्मकता और करियर उन्नति के अवसरों को बढ़ाने के लिए अपने कार्यस्थान और होम ऑफिस की व्यवस्था कैसे करें।"
          : "Create a supportive environment for professional success. Discover how to arrange your workspace and home office to enhance focus, creativity, and career advancement opportunities.",
        image: "vastu-career.jpg"
      },
      {
        title: language === 'hindi' ? "वास्तु शास्त्र कार्यशालाएँ" : "Vastu Shastra Workshops",
        description: language === 'hindi'
          ? "हमारे शैक्षिक कार्यक्रमों के माध्यम से वास्तु शास्त्र के मूल सिद्धांतों को सीखें। हमारी कार्यशालाएँ आधुनिक रहने और काम करने के स्थानों में प्राचीन वास्तु ज्ञान को लागू करने के लिए व्यावहारिक ज्ञान प्रदान करती हैं।"
          : "Learn the fundamentals of Vastu Shastra through our educational programs. Our workshops provide practical knowledge for applying ancient Vastu wisdom in modern living and working spaces.",
        image: "vastu-workshops.jpg"
      }
    ]
  ];

  return (
    <div className="vastu-page">
      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with margin after navbar */}
      <div className="vastu-content">
        <div className="container vastu-container">
          <h1 className="page-title">
            {language === 'hindi' ? 'वास्तु शास्त्र सेवाएँ' : 'Vastu Shastra Services'}
          </h1>
          <p className="page-description">
            {language === 'hindi'
              ? 'वास्तु शास्त्र के प्राचीन विज्ञान को जानें, जो संतुलित रहने और काम करने के स्थान बनाने के लिए प्रकृति के पांच तत्वों को सामंजस्यपूर्ण बनाता है। हमारे विशेषज्ञ सलाहकार आपके वातावरण में सकारात्मक ऊर्जा प्रवाह, समृद्धि और कल्याण को बढ़ाने के लिए मार्गदर्शन प्रदान करते हैं।'
              : 'Discover the ancient science of Vastu Shastra, which harmonizes the five elements of nature to create balanced living and working spaces. Our expert consultants provide guidance to enhance positive energy flow, prosperity, and well-being in your environment.'}
          </p>

          {/* Services Grid */}
          <div className="vastu-services-grid">
            {vastuServices.map((row, rowIndex) => (
              <div className="service-row" key={`row-${rowIndex}`}>
                {row.map((service, colIndex) => (
                  <div
                    className="service-card"
                    key={`service-${rowIndex}-${colIndex}`}
                    style={{
                      animationDelay: `${(rowIndex * 3 + colIndex) * 0.1}s`,
                      animation: 'fadeInUp 0.8s ease-out forwards'
                    }}
                  >
                    <div className="service-image">
                      <img
                        src={`/images/vastu/${service.image}`}
                        alt={service.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://source.unsplash.com/300x200/?vastu,architecture,${service.title.replace(/ /g, ',')}`;
                        }}
                      />
                    </div>
                    <div className="service-info">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                      <Link
                        to={`/services/vastu/${service.title.toLowerCase().replace(/ /g, '-')}`}
                        className="service-link"
                      >
                        {language === 'hindi' ? 'अधिक जानें' : 'Learn More'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Vastu;