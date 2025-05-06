import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './zodiac-section.css';
import './testimonials-section.css';
import './blog-section.css';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import starBackground from '../../assets/Star.jpg';
import kundaliBackground from '../../assets/Kundali.jpg';
import meditationBackground from '../../assets/Meditation.jpg';
import energyBackground from '../../assets/Energy.jpg';
import powerBackground from '../../assets/power.jpg';
import darkSkyBackground from '../../assets/MImage.jpg';
import pitraVideo from '../../assets/Pitra.mp4';
import panditjeeImage from '../../assets/Panditjee.png';
import { useLanguage } from '../../context/LanguageContext';
import Translate from '../../translations/Translate';

const Home = () => {
  // Get language from context
  const { language } = useLanguage();

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeZodiacTab, setActiveZodiacTab] = useState('daily');
  const [selectedSign, setSelectedSign] = useState('aries');
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [popupFormData, setPopupFormData] = useState({
    name: '',
    birthdate: '',
    birthtime: '',
    birthplace: ''
  });

  // Check if screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Show popup when page loads and set timer to close after 45 seconds
  useEffect(() => {
    setShowPopup(true);

    // Auto close popup after 45 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 45000); // 45 seconds

    // Clear timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Handle popup form input changes
  const handlePopupInputChange = (e) => {
    const { name, value } = e.target;
    setPopupFormData({
      ...popupFormData,
      [name]: value
    });
  };

  // Handle popup form submission
  const handlePopupSubmit = (e) => {
    e.preventDefault();
    console.log('Popup form submitted:', popupFormData);
    setShowPopup(false);
  };

  // Close popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Function to handle slider navigation
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  // Function to handle zodiac tab changes
  const changeZodiacTab = (tab) => {
    setActiveZodiacTab(tab);
  };

  // Function to handle sign selection
  const changeSign = (sign) => {
    setSelectedSign(sign);
  };

  return (
    <div className="home-container" style={{ position: 'relative' }}>
      {/* Welcome Popup */}
      {showPopup && (
        <div className="welcome-popup-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div className="welcome-popup" style={{
            backgroundColor: 'green',
            borderRadius: '10px',
            padding: '25px',
            maxWidth: '400px', // Medium size
            width: '90%',
            position: 'relative',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}>
            <button
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: 'white'
              }}
            >
              ×
            </button>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2 style={{ color: 'white', marginBottom: '20px', fontSize: '22px' }}>
                <Translate textKey="welcomeToVedicAshram" />
              </h2>
            </div>

            <form onSubmit={handlePopupSubmit}>
              <p style={{ fontWeight: 'bold', marginBottom: '15px', color: 'white' }}>
                <Translate textKey="enterBirthDetails" />
              </p>

              <div style={{ marginBottom: '15px' }}>
                <input
                  type="text"
                  name="name"
                  placeholder={language === 'hindi' ? "नाम" : "Name"}
                  value={popupFormData.name}
                  onChange={handlePopupInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginBottom: '10px'
                  }}
                />

                <input
                  type="date"
                  name="birthdate"
                  placeholder={language === 'hindi' ? "जन्म तिथि" : "Birth Date"}
                  value={popupFormData.birthdate}
                  onChange={handlePopupInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginBottom: '10px'
                  }}
                />

                <input
                  type="time"
                  name="birthtime"
                  placeholder={language === 'hindi' ? "जन्म का समय" : "Time of Birth"}
                  value={popupFormData.birthtime}
                  onChange={handlePopupInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginBottom: '10px'
                  }}
                />

                <input
                  type="text"
                  name="birthplace"
                  placeholder={language === 'hindi' ? "जन्म स्थान" : "Place of Birth"}
                  value={popupFormData.birthplace}
                  onChange={handlePopupInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginBottom: '10px'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'white',
                  color: 'green',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                <Translate textKey="loginSignup" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Navbar */}
      <Navbar />

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div style={{ height: '100px' }}></div>

      {/* Acharya Deepak Upadhyay Section */}
      <div className="acharya-section">
        <div className="acharya-container">
          <div className="acharya-image">
            <img src={panditjeeImage} alt="Acharya Deepak Upadhyay" />
          </div>
          <div className="acharya-content">
            <h2><Translate textKey="acharyaTitle" /></h2>
            <p>
              <Translate textKey="acharyaPara1" />
            </p>
            <p>
              <Translate textKey="acharyaPara2" />
            </p>
            <p>
              <Translate textKey="acharyaPara3" />
            </p>
          </div>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="main-container" style={{
        padding: '30px 20px',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4)), url(${darkSkyBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)',
        marginTop: '20px'
      }}>
        <div className="hero-container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          // alignItems: 'center',
          gap: '30px'
        }}>
          {/* Left Side - Hero Slider */}
          <div className="hero-slider-container" style={{
            flex: '1 1 550px',
            minHeight: '450px',
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            <div className="hero-slider" style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              backgroundImage: `url(${meditationBackground})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}>
              <div
                className={`slide ${activeSlide === 0 ? 'active' : ''}`}
                id="slide1"
                style={{
                  backgroundColor: 'rgba(255, 235, 59, 0.85)', /* Bright yellow background */
                  height: '450px',
                  display: activeSlide === 0 ? 'block' : 'none',
                  padding: '40px',
                  textAlign: 'center'
                }}
              >
                <div className="slide-content" style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <h1 style={{ fontSize: '32px', marginBottom: '15px', color: '#6a0dad', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                    <Translate textKey="vedicAstrologyConsultation" />
                  </h1>
                  <p style={{ fontSize: '16px', marginBottom: '20px', maxWidth: '80%', lineHeight: '1.6', color: '#333', fontWeight: '500' }}>
                    <Translate textKey="vedicAstrologyDesc" />
                  </p>
                  <Link to="/consultation" className="primary-btn" style={{
                    display: 'inline-block',
                    padding: '12px 25px',
                    backgroundColor: '#6a0dad',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}>
                    <Translate textKey="bookConsultation" />
                  </Link>
                </div>
              </div>

              <div
                className={`slide ${activeSlide === 1 ? 'active' : ''}`}
                id="slide2"
                style={{
                  backgroundColor: 'rgba(255, 235, 59, 0.85)', /* Bright yellow background */
                  height: '450px',
                  display: activeSlide === 1 ? 'block' : 'none',
                  padding: '40px',
                  textAlign: 'center'
                }}
              >
                <div className="slide-content" style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <h1 style={{ fontSize: '32px', marginBottom: '15px', color: '#6a0dad', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                    <Translate textKey="planetaryRemedies" />
                  </h1>
                  <p style={{ fontSize: '16px', marginBottom: '20px', maxWidth: '80%', lineHeight: '1.6', color: '#333', fontWeight: '500' }}>
                    <Translate textKey="planetaryRemediesDesc" />
                  </p>
                  <Link to="/services" className="primary-btn" style={{
                    display: 'inline-block',
                    padding: '12px 25px',
                    backgroundColor: '#6a0dad',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}>
                    <Translate textKey="exploreRemedies" />
                  </Link>
                </div>
              </div>

              <div
                className={`slide ${activeSlide === 2 ? 'active' : ''}`}
                id="slide3"
                style={{
                  backgroundColor: 'rgba(255, 235, 59, 0.85)', /* Bright yellow background */
                  height: '450px',
                  display: activeSlide === 2 ? 'block' : 'none',
                  padding: '40px',
                  textAlign: 'center'
                }}
              >
                <div className="slide-content" style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <h1 style={{ fontSize: '32px', marginBottom: '15px', color: '#6a0dad', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                    <Translate textKey="learnVedicAstrology" />
                  </h1>
                  <p style={{ fontSize: '16px', marginBottom: '20px', maxWidth: '80%', lineHeight: '1.6', color: '#333', fontWeight: '500' }}>
                    <Translate textKey="learnVedicAstrologyDesc" />
                  </p>
                  <Link to="/training" className="primary-btn" style={{
                    display: 'inline-block',
                    padding: '12px 25px',
                    backgroundColor: '#6a0dad',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}>
                    <Translate textKey="getStarted" />
                  </Link>
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 15px',
                pointerEvents: 'none',
                zIndex: 10
              }}>
                <button
                  className="slider-nav prev"
                  onClick={prevSlide}
                  style={{
                    backgroundColor: 'rgba(106, 13, 173, 0.7)',
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    pointerEvents: 'auto'
                  }}
                >
                  <i className="fas fa-chevron-left" style={{ fontSize: '18px' }}></i>
                </button>
                <button
                  className="slider-nav next"
                  onClick={nextSlide}
                  style={{
                    backgroundColor: 'rgba(106, 13, 173, 0.7)',
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    pointerEvents: 'auto'
                  }}
                >
                  <i className="fas fa-chevron-right" style={{ fontSize: '18px' }}></i>
                </button>
              </div>

              <div className="slider-dots" style={{
                position: 'absolute',
                bottom: '15px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px',
                zIndex: 2
              }}>
                <span
                  className={activeSlide === 0 ? 'active' : ''}
                  onClick={() => setActiveSlide(0)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: activeSlide === 0 ? '#6a0dad' : 'rgba(106, 13, 173, 0.3)',
                    cursor: 'pointer'
                  }}
                ></span>
                <span
                  className={activeSlide === 1 ? 'active' : ''}
                  onClick={() => setActiveSlide(1)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: activeSlide === 1 ? '#6a0dad' : 'rgba(106, 13, 173, 0.3)',
                    cursor: 'pointer'
                  }}
                ></span>
                <span
                  className={activeSlide === 2 ? 'active' : ''}
                  onClick={() => setActiveSlide(2)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: activeSlide === 2 ? '#6a0dad' : 'rgba(106, 13, 173, 0.3)',
                    cursor: 'pointer'
                  }}
                ></span>
              </div>
            </div>
          </div>

          {/* Right Side - Service Boxes */}
          <div className="service-boxes" style={{
            flex: '1 1 450px',
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
            height: '450px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#f9f5ff' /* Light purple background - more suitable for astrology */
          }}>
            {/* Row 1, Column 1 */}
            <div className="service-box" style={{
              padding: '20px',
              textAlign: 'center',
              borderRight: '1px solid #eee',
              borderBottom: '1px solid #eee',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%'
            }}>
              <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#6a0dad' }}>
                {language === 'hindi' ? 'ज्योतिषी से बात करें' : 'Talk with Astrologer'}
              </h2>
              <h5 style={{ fontSize: '14px', fontWeight: 'normal', marginBottom: '15px', color: '#666' }}>
                {language === 'hindi' ? 'वेदिक आश्रम के साथ विशेषज्ञ परामर्श' : 'Expert Consultation with VedicAshram'}
              </h5>
              <Link to="/talknow" style={{
                backgroundColor: '#8A2BE2', /* Deep purple - more suitable for astrology */
                color: 'white',
                padding: '12px 15px', /* Reduced horizontal padding to fit text better */
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'flex',
                width: '150px',
                height: '45px',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 'auto',
                boxSizing: 'border-box'
              }}>
                {language === 'hindi' ? 'अभी बात करें' : 'Talk Now'}
              </Link>
            </div>

            {/* Row 1, Column 2 */}
            <div className="service-box" style={{
              padding: '20px',
              textAlign: 'center',
              borderBottom: '1px solid #eee',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%'
            }}>
              <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#6a0dad' }}>
                {language === 'hindi' ? 'प्रश्न पूछें' : 'Ask Question'}
              </h2>
              <h5 style={{ fontSize: '14px', fontWeight: 'normal', marginBottom: '15px', color: '#666' }}>
                {language === 'hindi' ? 'सर्वोत्तम ज्योतिषीय भविष्यवाणी प्राप्त करें' : 'Get the best astrological prediction'}
              </h5>
              <Link to="/askques" style={{
                backgroundColor: '#8A2BE2', /* Deep purple - more suitable for astrology */
                color: 'white',
                padding: '12px 15px', /* Reduced horizontal padding to fit text better */
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'flex',
                width: '150px',
                height: '45px',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 'auto',
                boxSizing: 'border-box'
              }}>
                {language === 'hindi' ? 'प्रश्न पूछें' : 'Ask Question'}
              </Link>
            </div>

            {/* Row 2, Column 1 */}
            <div className="service-box" style={{
              padding: '20px',
              textAlign: 'center',
              borderRight: '1px solid #eee',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%'
            }}>
              <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#6a0dad' }}>
                {language === 'hindi' ? 'ज्योतिषी से चैट करें' : 'Chat with Astrologer'}
              </h2>
              <h5 style={{ fontSize: '14px', fontWeight: 'normal', marginBottom: '15px', color: '#666' }}>
                {language === 'hindi' ? 'वेदिक आश्रम के साथ विशेषज्ञ परामर्श' : 'Expert Consultation with VedicAshram'}
              </h5>
              <Link to="/chatnow" style={{
                backgroundColor: '#8A2BE2', /* Deep purple - more suitable for astrology */
                color: 'white',
                padding: '12px 15px', /* Reduced horizontal padding to fit text better */
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'flex',
                width: '150px',
                height: '45px',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 'auto',
                boxSizing: 'border-box'
              }}>
                {language === 'hindi' ? 'अभी चैट करें' : 'Chat Now'}
              </Link>
            </div>

            {/* Row 2, Column 2 */}
            <div className="service-box" style={{
              padding: '20px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%'
            }}>
              <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#6a0dad' }}>
                {language === 'hindi' ? 'ज्योतिषीय रिपोर्ट' : 'Astrological Report'}
              </h2>
              <h5 style={{ fontSize: '14px', fontWeight: 'normal', marginBottom: '15px', color: '#666' }}>
                {language === 'hindi' ? 'अपनी ज्योतिषीय रिपोर्ट प्राप्त करें' : 'Get your Astrological Report'}
              </h5>
              <Link to="/bookreport" style={{
                backgroundColor: '#8A2BE2', /* Deep purple - more suitable for astrology */
                color: 'white',
                padding: '12px 15px', /* Reduced horizontal padding to fit text better */
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'flex',
                width: '150px',
                height: '45px',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 'auto',
                boxSizing: 'border-box'
              }}>
                {language === 'hindi' ? 'रिपोर्ट बुक करें' : 'Book Report'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section-separator"></div>

      {/* Video and Expert Consultation Section */}
      <section className="video-expert-section">
        <div className="cosmic-orbit"></div>
        <div className="cosmic-orbit orbit-2"></div>
        <div className="container">
          <div className="video-expert-container">
            {/* Video Box */}
            <div className="video-box">
              <div className="video-wrapper">
                <video
                  title="Introduction to Vedic Astrology"
                  controls
                  preload="auto"
                  playsInline
                  muted
                  autoPlay
                  loop
                >
                  <source src={pitraVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                  <h3>{language === 'hindi' ? 'वैदिक ज्योतिष की खोज करें' : 'Discover Vedic Astrology'}</h3>
                  <p>{language === 'hindi' ? 'तारों के प्राचीन ज्ञान का परिचय देखें' : 'Watch our introduction to the ancient wisdom of the stars'}</p>
                </div>
              </div>
            </div>

            {/* Ask Expert Box */}
            <div className="ask-expert-box">
              <h3>{language === 'hindi' ? 'विशेषज्ञ से पूछें' : 'Ask an Expert'}</h3>
              <p>{language === 'hindi'
                ? 'क्या आपके पास अपने ज्योतिषीय चार्ट या जीवन पथ के बारे में कोई विशिष्ट प्रश्न है? हमारे विशेषज्ञ आपकी मदद के लिए यहां हैं।'
                : 'Have a specific question about your astrological chart or life path? Our experts are here to help.'}</p>

              <div className="expert-form-container">
                <form className="expert-form">
                  <div className="form-group">
                    <textarea
                      placeholder={language === 'hindi'
                        ? "अपने प्रश्न या चिंता का वर्णन करें (अधिकतम 100 शब्द)"
                        : "Describe your question or concern (max 100 words)"}
                      maxLength="500"
                      rows="5"
                    ></textarea>
                    <div className="word-count">
                      <small>{language === 'hindi' ? 'अधिकतम 100 शब्द' : 'Max 100 words'}</small>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      placeholder={language === 'hindi' ? "आपका ईमेल पता" : "Your email address"}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="ask-now-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      const form = e.target.closest('form');
                      if (form.checkValidity()) {
                        alert(language === 'hindi'
                          ? 'आपका प्रश्न जमा कर दिया गया है! हमारे विशेषज्ञ जल्द ही आपसे संपर्क करेंगे।'
                          : 'Your question has been submitted! Our expert will contact you soon.');
                        form.reset();
                      } else {
                        alert(language === 'hindi'
                          ? 'कृपया सभी आवश्यक फ़ील्ड भरें।'
                          : 'Please fill in all required fields.');
                      }
                    }}
                  >
                    {language === 'hindi' ? 'अभी पूछें' : 'Ask Now'}
                  </button>
                </form>
              </div>

              <div className="expert-credentials">
                <div className="expert-avatar">
                  <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Astrology Expert" />
                </div>
                <div className="expert-info">
                  <h4>Pandit Sharma</h4>
                  <p>30+ years of experience in Vedic Astrology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kundali Forms Section */}
      <section className="kundali-forms-section" style={{
        backgroundImage: `linear-gradient(135deg, rgba(135, 206, 250, 0.85) 0%, rgba(0, 0, 0, 0.8) 100%), url(${kundaliBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <div className="section-header kundali-section-header">
            <h2>Vedic Astrology Services</h2>
            <p>Discover your cosmic blueprint and celestial connections</p>
          </div>
          <div className="kundali-forms-container">
            {/* Birth Chart Form */}
            <div className="kundali-form-box">
              <h3>Kundali/Birth Chart</h3>
              <hr />
              <b className="form-subtitle">Enter Birth Details</b>

              <form className="kundali-form" id="birthChartForm">
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Enter your name" required />
                  </div>

                  <div className="form-group">
                    <select name="gender" required>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="form-row date-time-row">
                  <div className="form-group date-group">
                    <label>Birth Date</label>
                    <div className="date-inputs">
                      <select name="day" required>
                        <option value="">Day</option>
                        {[...Array(31)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>

                      <select name="month" required>
                        <option value="">Month</option>
                        {['January', 'February', 'March', 'April', 'May', 'June', 'July',
                          'August', 'September', 'October', 'November', 'December'].map((month, i) => (
                            <option key={i} value={i + 1}>{month}</option>
                          ))}
                      </select>

                      <select name="year" required>
                        <option value="">Year</option>
                        {[...Array(100)].map((_, i) => {
                          const year = new Date().getFullYear() - i;
                          return <option key={year} value={year}>{year}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-row date-time-row">
                  <div className="form-group time-group">
                    <label>Birth Time</label>
                    <div className="time-inputs">
                      <select name="hour" required>
                        <option value="">Hour</option>
                        {[...Array(24)].map((_, i) => (
                          <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                        ))}
                      </select>

                      <select name="minute" required>
                        <option value="">Minute</option>
                        {[...Array(60)].map((_, i) => (
                          <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                        ))}
                      </select>

                      <select name="second" required>
                        <option value="">Second</option>
                        {[...Array(60)].map((_, i) => (
                          <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input type="text" name="birthplace" placeholder="Birth place" required />
                  </div>
                </div>

                <div className="form-row">
                  <button
                    type="submit"
                    className="kundali-submit-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      const form = document.getElementById('birthChartForm');
                      if (form.checkValidity()) {
                        alert('Your Kundali request has been submitted!');
                      } else {
                        alert('Please fill all the required fields');
                      }
                    }}
                  >
                    Get Kundali
                  </button>
                </div>
              </form>
            </div>

            {/* Kundali Matching Form */}
            <div className="kundali-form-box">
              <h3>Kundali Matching</h3>
              <hr />

              <div id="boyDetailsForm" style={{ display: 'block' }}>
                <b className="form-subtitle">Enter Boy's Detail</b>

                <form className="kundali-form">
                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" name="boyName" id="boyName" placeholder="Enter boy's name" required />
                    </div>
                  </div>

                  <div className="form-row date-time-row">
                    <div className="form-group date-group">
                      <label>Birth Date</label>
                      <div className="date-inputs">
                        <select name="boyDay" id="boyDay" required>
                          <option value="">Day</option>
                          {[...Array(31)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                          ))}
                        </select>

                        <select name="boyMonth" id="boyMonth" required>
                          <option value="">Month</option>
                          {['January', 'February', 'March', 'April', 'May', 'June', 'July',
                            'August', 'September', 'October', 'November', 'December'].map((month, i) => (
                              <option key={i} value={i + 1}>{month}</option>
                            ))}
                        </select>

                        <select name="boyYear" id="boyYear" required>
                          <option value="">Year</option>
                          {[...Array(100)].map((_, i) => {
                            const year = new Date().getFullYear() - i;
                            return <option key={year} value={year}>{year}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-row date-time-row">
                    <div className="form-group time-group">
                      <label>Birth Time</label>
                      <div className="time-inputs">
                        <select name="boyHour" id="boyHour" required>
                          <option value="">Hour</option>
                          {[...Array(24)].map((_, i) => (
                            <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                          ))}
                        </select>

                        <select name="boyMinute" id="boyMinute" required>
                          <option value="">Minute</option>
                          {[...Array(60)].map((_, i) => (
                            <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                          ))}
                        </select>

                        <select name="boySecond" id="boySecond" required>
                          <option value="">Second</option>
                          {[...Array(60)].map((_, i) => (
                            <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" name="boyBirthplace" id="boyBirthplace" placeholder="Birth place" required />
                    </div>
                  </div>

                  <b style={{ color: 'black', display: 'block', margin: '15px 0' }}>Enter Girl's Detail on Next page</b>

                  <div className="form-row">
                    <button
                      type="button"
                      className="kundali-submit-btn"
                      onClick={() => {
                        const boyName = document.getElementById('boyName').value;
                        const boyDay = document.getElementById('boyDay').value;
                        const boyMonth = document.getElementById('boyMonth').value;
                        const boyYear = document.getElementById('boyYear').value;
                        const boyHour = document.getElementById('boyHour').value;
                        const boyMinute = document.getElementById('boyMinute').value;
                        const boySecond = document.getElementById('boySecond').value;
                        const boyBirthplace = document.getElementById('boyBirthplace').value;

                        if (boyName && boyDay && boyMonth && boyYear && boyHour && boyMinute && boySecond && boyBirthplace) {
                          document.getElementById('boyDetailsForm').style.display = 'none';
                          document.getElementById('girlDetailsForm').style.display = 'block';
                        } else {
                          alert('Please fill all the required fields');
                        }
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>

              <div id="girlDetailsForm" style={{ display: 'none' }}>
                <b style={{ color: 'black', display: 'block', margin: '15px 0' }}>Enter Girl's Detail</b>

                <form className="kundali-form">
                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" name="girlName" placeholder="Enter girl's name" required />
                    </div>
                  </div>

                  <div className="form-row date-time-row">
                    <div className="form-group date-group">
                      <label>Birth Date</label>
                      <div className="date-inputs">
                        <select name="girlDay" required>
                          <option value="">Day</option>
                          {[...Array(31)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                          ))}
                        </select>

                        <select name="girlMonth" required>
                          <option value="">Month</option>
                          {['January', 'February', 'March', 'April', 'May', 'June', 'July',
                            'August', 'September', 'October', 'November', 'December'].map((month, i) => (
                              <option key={i} value={i + 1}>{month}</option>
                            ))}
                        </select>

                        <select name="girlYear" required>
                          <option value="">Year</option>
                          {[...Array(100)].map((_, i) => {
                            const year = new Date().getFullYear() - i;
                            return <option key={year} value={year}>{year}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-row date-time-row">
                    <div className="form-group time-group">
                      <label>Birth Time</label>
                      <div className="time-inputs">
                        <select name="girlHour" required>
                          <option value="">Hour</option>
                          {[...Array(24)].map((_, i) => (
                            <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                          ))}
                        </select>

                        <select name="girlMinute" required>
                          <option value="">Minute</option>
                          {[...Array(60)].map((_, i) => (
                            <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                          ))}
                        </select>

                        <select name="girlSecond" required>
                          <option value="">Second</option>
                          {[...Array(60)].map((_, i) => (
                            <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" name="girlBirthplace" placeholder="Birth place" required />
                    </div>
                  </div>

                  <div className="form-row match-horoscope">
                    <b style={{ color: 'black' }}>Match Your Horoscope</b>
                    <button
                      type="button"
                      className="kundali-submit-btn"
                      onClick={() => {
                        const form = document.querySelector('#girlDetailsForm form');
                        const isValid = Array.from(form.elements).every(element => {
                          if (element.hasAttribute('required')) {
                            return element.value.trim() !== '';
                          }
                          return true;
                        });

                        if (isValid) {
                          alert('Your Kundali Matching request has been submitted!');
                          // Reset forms and show boy's form again
                          document.getElementById('boyDetailsForm').style.display = 'block';
                          document.getElementById('girlDetailsForm').style.display = 'none';
                          document.getElementById('boyDetailsForm').querySelector('form').reset();
                        } else {
                          alert('Please fill all the required fields');
                        }
                      }}
                    >
                      Match
                    </button>
                  </div>

                  <div className="form-row">
                    <button
                      type="button"
                      className="back-btn"
                      onClick={() => {
                        document.getElementById('boyDetailsForm').style.display = 'block';
                        document.getElementById('girlDetailsForm').style.display = 'none';
                      }}
                    >
                      Back to Boy's Details
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="featured-services">
        <div className="container">
          <div className="section-header">
            <h2>Our Astrological Services</h2>
            <p>Personalized guidance based on ancient Vedic principles</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h3>Birth Chart Analysis</h3>
              <p>Discover your unique cosmic blueprint and understand your life's purpose, strengths, and challenges.</p>
              <Link to="/services/birth-chart" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="service-card featured">
              <div className="featured-badge">Popular</div>
              <div className="service-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Relationship Compatibility</h3>
              <p>Explore the celestial dynamics between you and your partner to enhance harmony and understanding.</p>
              <Link to="/services/compatibility" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Career Guidance</h3>
              <p>Align your professional path with your cosmic potential to achieve fulfillment and success.</p>
              <Link to="/services/career" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>Muhurta (Electional Astrology)</h3>
              <p>Select auspicious times for important life events to maximize positive outcomes.</p>
              <Link to="/services/muhurta" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>

          <div className="view-all-services">
            <Link to="/services" className="secondary-btn">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Zodiac Section with Tabs */}
      <section className="zodiac-section">
        <div className="cosmic-orbit zodiac-orbit-1"></div>
        <div className="cosmic-orbit zodiac-orbit-2"></div>
        <div className="container">
          <div className="section-header">
            <h2>Explore Zodiac Signs</h2>
            <p>Discover the unique characteristics and cosmic influences of each zodiac sign</p>
          </div>

          <div className="zodiac-tabs">
            <button
              className={activeZodiacTab === 'daily' ? 'active' : ''}
              onClick={() => changeZodiacTab('daily')}
            >
              Daily Horoscope
            </button>
            <button
              className={activeZodiacTab === 'characteristics' ? 'active' : ''}
              onClick={() => changeZodiacTab('characteristics')}
            >
              Sign Characteristics
            </button>
            <button
              className={activeZodiacTab === 'compatibility' ? 'active' : ''}
              onClick={() => changeZodiacTab('compatibility')}
            >
              Compatibility
            </button>
          </div>

          <div className="zodiac-content">
            {/* Daily Horoscope Tab */}
            <div className={`tab-content ${activeZodiacTab === 'daily' ? 'active' : ''}`}>
              <div className="sign-selector">
                <div className="sign-grid">
                  {['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
                    'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'].map((sign) => (
                      <div
                        key={sign}
                        className={`sign-item ${selectedSign === sign ? 'active' : ''}`}
                        onClick={() => changeSign(sign)}
                      >
                        <div className="sign-icon">
                          <i className={`fas fa-${sign === 'aries' ? 'fire' :
                            sign === 'taurus' ? 'leaf' :
                              sign === 'gemini' ? 'user-friends' :
                                sign === 'cancer' ? 'water' :
                                  sign === 'leo' ? 'crown' :
                                    sign === 'virgo' ? 'seedling' :
                                      sign === 'libra' ? 'balance-scale' :
                                        sign === 'scorpio' ? 'bolt' :
                                          sign === 'sagittarius' ? 'horse' :
                                            sign === 'capricorn' ? 'mountain' :
                                              sign === 'aquarius' ? 'wind' : 'fish'}`}></i>
                        </div>
                        <span>{sign.charAt(0).toUpperCase() + sign.slice(1)}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="horoscope-display">
                <div className="horoscope-header">
                  <h3>{selectedSign.charAt(0).toUpperCase() + selectedSign.slice(1)} Daily Horoscope</h3>
                  <span className="date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>

                <div className="horoscope-body">
                  <p>Today brings a powerful alignment of planets that enhances your natural {selectedSign === 'aries' || selectedSign === 'leo' || selectedSign === 'sagittarius' ? 'fiery' :
                    selectedSign === 'taurus' || selectedSign === 'virgo' || selectedSign === 'capricorn' ? 'grounded' :
                      selectedSign === 'gemini' || selectedSign === 'libra' || selectedSign === 'aquarius' ? 'intellectual' : 'intuitive'} qualities. You may find yourself drawn to new opportunities that align with your deepest values.</p>

                  <p>In relationships, communication flows more easily, allowing for deeper connections. Career matters benefit from your focused attention, especially in areas requiring creativity and innovation.</p>

                  <div className="horoscope-aspects">
                    <div className="aspect">
                      <span className="aspect-label">Lucky Color:</span>
                      <span className="aspect-value">{
                        selectedSign === 'aries' ? 'Red' :
                          selectedSign === 'taurus' ? 'Green' :
                            selectedSign === 'gemini' ? 'Yellow' :
                              selectedSign === 'cancer' ? 'Silver' :
                                selectedSign === 'leo' ? 'Gold' :
                                  selectedSign === 'virgo' ? 'Navy Blue' :
                                    selectedSign === 'libra' ? 'Pink' :
                                      selectedSign === 'scorpio' ? 'Deep Red' :
                                        selectedSign === 'sagittarius' ? 'Purple' :
                                          selectedSign === 'capricorn' ? 'Brown' :
                                            selectedSign === 'aquarius' ? 'Electric Blue' : 'Sea Green'
                      }</span>
                    </div>
                    <div className="aspect">
                      <span className="aspect-label">Lucky Number:</span>
                      <span className="aspect-value">{
                        selectedSign === 'aries' ? '9' :
                          selectedSign === 'taurus' ? '6' :
                            selectedSign === 'gemini' ? '5' :
                              selectedSign === 'cancer' ? '2' :
                                selectedSign === 'leo' ? '1' :
                                  selectedSign === 'virgo' ? '5' :
                                    selectedSign === 'libra' ? '6' :
                                      selectedSign === 'scorpio' ? '8' :
                                        selectedSign === 'sagittarius' ? '3' :
                                          selectedSign === 'capricorn' ? '8' :
                                            selectedSign === 'aquarius' ? '7' : '3'
                      }</span>
                    </div>
                  </div>
                </div>

                <Link to="/horoscope" className="read-more">Read Full Horoscope <i className="fas fa-long-arrow-alt-right"></i></Link>
              </div>
            </div>

            {/* Characteristics Tab */}
            <div className={`tab-content ${activeZodiacTab === 'characteristics' ? 'active' : ''}`}>
              <div className="zodiac-characteristics">
                <div className="zodiac-grid">
                  <div className="zodiac-card">
                    <div className="zodiac-icon fire">
                      <i className="fas fa-fire"></i>
                    </div>
                    <h3>Aries (Mesha)</h3>
                    <p className="date-range">March 21 - April 19</p>
                    <div className="traits">
                      <span>Courageous</span>
                      <span>Determined</span>
                      <span>Passionate</span>
                    </div>
                    <p className="element">Fire Element</p>
                    <Link to="/zodiac/aries" className="learn-more">Learn More</Link>
                  </div>

                  <div className="zodiac-card">
                    <div className="zodiac-icon earth">
                      <i className="fas fa-leaf"></i>
                    </div>
                    <h3>Taurus (Vrishabha)</h3>
                    <p className="date-range">April 20 - May 20</p>
                    <div className="traits">
                      <span>Reliable</span>
                      <span>Patient</span>
                      <span>Practical</span>
                    </div>
                    <p className="element">Earth Element</p>
                    <Link to="/zodiac/taurus" className="learn-more">Learn More</Link>
                  </div>

                  <div className="zodiac-card">
                    <div className="zodiac-icon air">
                      <i className="fas fa-user-friends"></i>
                    </div>
                    <h3>Gemini (Mithuna)</h3>
                    <p className="date-range">May 21 - June 20</p>
                    <div className="traits">
                      <span>Adaptable</span>
                      <span>Curious</span>
                      <span>Expressive</span>
                    </div>
                    <p className="element">Air Element</p>
                    <Link to="/zodiac/gemini" className="learn-more">Learn More</Link>
                  </div>

                  <div className="zodiac-card">
                    <div className="zodiac-icon water">
                      <i className="fas fa-water"></i>
                    </div>
                    <h3>Cancer (Karka)</h3>
                    <p className="date-range">June 21 - July 22</p>
                    <div className="traits">
                      <span>Intuitive</span>
                      <span>Emotional</span>
                      <span>Protective</span>
                    </div>
                    <p className="element">Water Element</p>
                    <Link to="/zodiac/cancer" className="learn-more">Learn More</Link>
                  </div>
                </div>

                <div className="view-all-signs">
                  <Link to="/zodiac" className="secondary-btn">View All Signs</Link>
                </div>
              </div>
            </div>

            {/* Compatibility Tab */}
            <div className={`tab-content ${activeZodiacTab === 'compatibility' ? 'active' : ''}`}>
              <div className="compatibility-content">
                <div className="compatibility-intro">
                  <h3>Discover Your Cosmic Connections</h3>
                  <p>Explore how different zodiac signs interact with each other in relationships, friendships, and work environments. Vedic astrology provides deep insights into the dynamics between signs based on elemental affinities and planetary influences.</p>
                </div>

                <div className="compatibility-highlights">
                  <div className="compatibility-card">
                    <h4>Most Compatible Pairs</h4>
                    <ul>
                      <li><span>Aries</span> + <span>Leo</span></li>
                      <li><span>Taurus</span> + <span>Virgo</span></li>
                      <li><span>Gemini</span> + <span>Libra</span></li>
                      <li><span>Cancer</span> + <span>Pisces</span></li>
                    </ul>
                  </div>

                  <div className="compatibility-card">
                    <h4>Challenging Pairs</h4>
                    <ul>
                      <li><span>Aries</span> + <span>Cancer</span></li>
                      <li><span>Taurus</span> + <span>Aquarius</span></li>
                      <li><span>Gemini</span> + <span>Scorpio</span></li>
                      <li><span>Leo</span> + <span>Capricorn</span></li>
                    </ul>
                  </div>
                </div>

                <div className="compatibility-cta">
                  <Link to="/compatibility" className="primary-btn">Check Your Compatibility</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="youtube-videos-section">
        <div className="container">
          <div className="section-header">
            <h2><Translate textKey="youtubeVideosTitle" defaultText="Our Latest Videos" /></h2>
            <p><Translate textKey="youtubeVideosSubtitle" defaultText="Watch our informative videos on Vedic astrology and spiritual practices" /></p>
          </div>

          <div className="youtube-videos-grid">
            {/* Video 1 */}
            <div className="youtube-video-card">
              <div className="youtube-video-container">
                <iframe
                  src="https://www.youtube.com/embed/1ymfOUASsYg"
                  title="YouTube video player 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              <h3><Translate textKey="videoTitle1" defaultText="Understanding Vedic Astrology" /></h3>
            </div>

            {/* Video 2 */}
            <div className="youtube-video-card">
              <div className="youtube-video-container">
                <iframe
                  src="https://www.youtube.com/embed/zhYy5unMfpE"
                  title="YouTube video player 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              <h3><Translate textKey="videoTitle2" defaultText="Planetary Influences on Your Life" /></h3>
            </div>

            {/* Video 3 */}
            <div className="youtube-video-card">
              <div className="youtube-video-container">
                <iframe
                  src="https://www.youtube.com/embed/HPsCUkDCVvY"
                  title="YouTube video player 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              <h3><Translate textKey="videoTitle3" defaultText="Meditation Techniques for Spiritual Growth" /></h3>
            </div>

            {/* Video 4 */}
            <div className="youtube-video-card">
              <div className="youtube-video-container">
                <iframe
                  src="https://www.youtube.com/embed/Dmc0fP2PDKs"
                  title="YouTube video player 4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              <h3><Translate textKey="videoTitle4" defaultText="Remedies for Planetary Doshas" /></h3>
            </div>

            {/* Video 5 */}
            <div className="youtube-video-card">
              <div className="youtube-video-container">
                <iframe
                  src="https://www.youtube.com/embed/t5ZF8bik4B0"
                  title="YouTube video player 5"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              <h3><Translate textKey="videoTitle5" defaultText="Understanding Your Birth Chart" /></h3>
            </div>

            {/* Video 6 */}
            <div className="youtube-video-card">
              <div className="youtube-video-container">
                <iframe
                  src="https://www.youtube.com/embed/erBbhCTK93o"
                  title="YouTube video player 6"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              <h3><Translate textKey="videoTitle6" defaultText="Mantras for Peace and Prosperity" /></h3>
            </div>
          </div>

          <div className="view-all-videos">
            <a href="https://www.youtube.com/@VedicAashram/videos" target="_blank" rel="noopener noreferrer" className="secondary-btn">
              <Translate textKey="viewAllVideos" defaultText="View All Videos" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="cosmic-orbit testimonial-orbit-1"></div>
        <div className="cosmic-orbit testimonial-orbit-2"></div>
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>What our clients say about their astrological consultations</p>
          </div>

          <div className="testimonials-carousel">
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>The birth chart reading was incredibly accurate and provided me with clarity during a challenging time. I gained valuable insights that helped me make important life decisions.</p>
                <div className="client">
                  <div className="client-image">
                    <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Priya Sharma" />
                  </div>
                  <div className="client-info">
                    <h4>Priya Sharma</h4>
                    <p>Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>I was skeptical at first, but the career guidance I received was spot-on. The remedies suggested have made a significant positive impact on my professional life.</p>
                <div className="client">
                  <div className="client-image">
                    <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Rajesh Patel" />
                  </div>
                  <div className="client-info">
                    <h4>Rajesh Patel</h4>
                    <p>Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>The relationship compatibility analysis helped my partner and I understand each other better. We now have tools to navigate our differences with compassion and awareness.</p>
                <div className="client">
                  <div className="client-image">
                    <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Ananya" />
                  </div>
                  <div className="client-info">
                    <h4>Ananya & Vikram</h4>
                    <p>Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="cosmic-orbit blog-orbit-1"></div>
        <div className="cosmic-orbit blog-orbit-2"></div>
        <div className="container">
          <div className="section-header">
            <h2>Astrological Insights</h2>
            <p>Latest articles and guides from our expert astrologers</p>
          </div>

          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Planetary Transits" />
              </div>
              <div className="blog-content">
                <div className="blog-category">Planetary Movements</div>
                <h3>How Jupiter's Transit Will Affect Your Sign in 2024</h3>
                <p>Jupiter, the planet of expansion and abundance, is moving through the zodiac. Learn how this transit will impact your specific sign...</p>
                <Link to="/blog/jupiter-transit-2024" className="read-more">Read More</Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Meditation Practices" />
              </div>
              <div className="blog-content">
                <div className="blog-category">Spiritual Practices</div>
                <h3>5 Meditation Techniques Based on Your Moon Sign</h3>
                <p>Your moon sign reveals your emotional nature and inner self. Discover meditation practices tailored to your specific lunar energy...</p>
                <Link to="/blog/moon-sign-meditation" className="read-more">Read More</Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1515894203077-9cd36032142f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Gemstones" />
              </div>
              <div className="blog-content">
                <div className="blog-category">Remedies</div>
                <h3>The Power of Gemstones: Choosing the Right Stone for Planetary Balance</h3>
                <p>Gemstones have been used for centuries as astrological remedies. Learn how to select the perfect stone to balance challenging planetary influences...</p>
                <Link to="/blog/gemstone-remedies" className="read-more">Read More</Link>
              </div>
            </div>
          </div>

          <div className="view-all-posts">
            <Link to="/blog" className="secondary-btn">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" style={{
        padding: '100px 0',
        background: 'linear-gradient(rgba(25, 25, 112, 0.85), rgba(75, 0, 130, 0.9)), url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="cta-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              color: '#FFD700', /* Gold color */
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
            }}>
              {language === 'hindi' ? 'आज ही अपनी ब्रह्मांडीय यात्रा शुरू करें' : 'Begin Your Cosmic Journey Today'}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '30px',
              color: '#F5F5F5',
              lineHeight: '1.6'
            }}>
              {language === 'hindi'
                ? 'जानें कैसे वैदिक ज्योतिष का प्राचीन ज्ञान आपके मार्ग को प्रकाशित कर सकता है और आपके जीवन को बदल सकता है'
                : 'Discover how the ancient wisdom of Vedic Astrology can illuminate your path and transform your life'}
            </p>
            <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <Link to="/consultation" style={{
                backgroundColor: '#FFD700', /* Gold */
                color: '#191970', /* Midnight Blue */
                padding: '15px 30px',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                {language === 'hindi' ? 'परामर्श बुक करें' : 'Book a Consultation'}
              </Link>
              <Link to="/services" style={{
                backgroundColor: 'transparent',
                color: '#FFD700', /* Gold */
                padding: '14px 28px',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                border: '2px solid #FFD700',
                transition: 'all 0.3s ease'
              }}>
                {language === 'hindi' ? 'सेवाएं देखें' : 'Explore Services'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;