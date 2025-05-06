import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import './navbar-topbar.css';
import './language-dropdown.css';
import './mobile-language.css'; // Import the mobile language CSS
import { useLanguage } from '../../context/LanguageContext';
import Translate from '../../translations/Translate';
import mystical from '../../assets/Mystical.png';

const Navbar = () => {
  // Get current location to determine if we're on the home page
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  // Get language from context
  const { language, changeLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(window.innerWidth <= 768);

  // State for services dropdown
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  // State for mythology dropdown
  const [showMythologyMenu, setShowMythologyMenu] = useState(false);

  // State for consult dropdown
  const [showConsultMenu, setShowConsultMenu] = useState(false);

  // State for vedic astrology dropdown
  const [showVedicAstrologyMenu, setShowVedicAstrologyMenu] = useState(false);

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State to track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // State for vastu dropdown
  const [showVastuMenu, setShowVastuMenu] = useState(false);

  // State for numerology dropdown
  const [showNumerologyMenu, setShowNumerologyMenu] = useState(false);

  // State for career dropdown
  const [showCareerMenu, setShowCareerMenu] = useState(false);

  // State for yagya dropdown
  const [showYagyaMenu, setShowYagyaMenu] = useState(false);

  // State for child astrology dropdown
  const [showChildMenu, setShowChildMenu] = useState(false);

  // State for love relationship dropdown
  const [showLoveMenu, setShowLoveMenu] = useState(false);

  // State for training program dropdown
  const [showTrainingMenu, setShowTrainingMenu] = useState(false);

  // State for auth modal
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Functions to show/hide dropdown menus on hover
  const showLanguageDropdown = () => {
    setShowLanguageMenu(true);
    console.log('Language menu shown');
  };

  const hideLanguageDropdown = () => {
    // On mobile, don't hide the dropdown
    if (window.innerWidth <= 768 && mobileMenuOpen) {
      return;
    }

    // Use setTimeout to allow clicking on menu items
    setTimeout(() => {
      setShowLanguageMenu(false);
    }, 500); // Increased timeout to give more time to click
  };

  const showServicesDropdown = () => {
    setShowServicesMenu(true);
  };

  const hideServicesDropdown = () => {
    // On mobile, don't hide the dropdown
    if (window.innerWidth <= 768 && mobileMenuOpen) {
      return;
    }
    setShowServicesMenu(false);
  };

  // Functions to show/hide mythology dropdown menu on hover
  const showMythologyDropdown = () => {
    setShowMythologyMenu(true);
    // Close other menus when this one opens
    setShowConsultMenu(false);
  };

  const hideMythologyDropdown = () => {
    // Use setTimeout to allow clicking on menu items
    setTimeout(() => {
      setShowMythologyMenu(false);
    }, 500);
  };

  // Functions to show/hide consult dropdown menu on hover
  const showConsultDropdown = () => {
    setShowConsultMenu(true);
    // Close other menus when this one opens
    setShowMythologyMenu(false);
  };

  const hideConsultDropdown = () => {
    // Use setTimeout to allow clicking on menu items
    setTimeout(() => {
      setShowConsultMenu(false);
    }, 500);
  };

  // Functions to show/hide vedic astrology dropdown menu on hover
  const showVedicAstrologyDropdown = () => {
    setShowVedicAstrologyMenu(true);
  };

  const hideVedicAstrologyDropdown = () => {
    setShowVedicAstrologyMenu(false);
  };

  // Functions to show/hide vastu dropdown menu on hover
  const showVastuDropdown = () => {
    setShowVastuMenu(true);
  };

  const hideVastuDropdown = () => {
    setShowVastuMenu(false);
  };

  // Functions to show/hide numerology dropdown menu on hover
  const showNumerologyDropdown = () => {
    setShowNumerologyMenu(true);
  };

  const hideNumerologyDropdown = () => {
    setShowNumerologyMenu(false);
  };

  // Functions to show/hide career dropdown menu on hover
  const showCareerDropdown = () => {
    setShowCareerMenu(true);
  };

  const hideCareerDropdown = () => {
    setShowCareerMenu(false);
  };

  // Functions to show/hide yagya dropdown menu on hover
  const showYagyaDropdown = () => {
    setShowYagyaMenu(true);
  };

  const hideYagyaDropdown = () => {
    setShowYagyaMenu(false);
  };

  // Functions to show/hide child astrology dropdown menu on hover
  const showChildDropdown = () => {
    setShowChildMenu(true);
  };

  const hideChildDropdown = () => {
    setShowChildMenu(false);
  };

  // Functions to show/hide training program dropdown menu on hover
  const showTrainingDropdown = () => {
    setShowTrainingMenu(true);
  };

  const hideTrainingDropdown = () => {
    setShowTrainingMenu(false);
  };

  // Functions to show/hide love relationship dropdown menu on hover
  const showLoveDropdown = () => {
    setShowLoveMenu(true);
  };

  const hideLoveDropdown = () => {
    setShowLoveMenu(false);
  };

  // Function to change the selected language
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);

    // On mobile, keep the dropdown open to make it easier to switch back
    if (window.innerWidth <= 768) {
      // Keep the mobile menu open
      setShowLanguageMenu(true);
    } else {
      // On desktop, close the dropdown after selection
      setShowLanguageMenu(false);
      setMobileMenuOpen(false); // Close mobile menu after selection only on desktop
    }

    console.log('Language changed to:', lang); // Debug log

    // Force a re-render to update all translated components
    setTimeout(() => {
      window.dispatchEvent(new Event('languageChanged'));
    }, 100);
  };

  // Effect to handle language changes
  useEffect(() => {
    console.log('Current language in Navbar:', language);
  }, [language]);

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      } else {
        // Always show language menu on mobile
        setShowLanguageMenu(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initialize language menu state on component mount
    if (window.innerWidth <= 768) {
      setShowLanguageMenu(true);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);

    // Close all dropdown menus when toggling mobile menu
    if (mobileMenuOpen) {
      // If we're closing the menu, close all dropdowns
      setShowServicesMenu(false);
      setShowMythologyMenu(false);
      setShowConsultMenu(false);
      setShowVedicAstrologyMenu(false);
      setShowVastuMenu(false);
      setShowNumerologyMenu(false);
      setShowCareerMenu(false);
      setShowYagyaMenu(false);
      setShowChildMenu(false);
      setShowLoveMenu(false);
      setShowTrainingMenu(false);
      // Don't close language menu when on mobile
      if (window.innerWidth > 768) {
        setShowLanguageMenu(false);
      }
    } else {
      // If we're opening the menu, ensure language menu is open on mobile
      if (window.innerWidth <= 768) {
        setShowLanguageMenu(true);
      }
    }
  };

  // Function to toggle auth modal
  const toggleAuthModal = () => {
    setShowAuthModal(!showAuthModal);
  };

  // Function to switch between sign in and sign up modes
  const switchAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically handle authentication logic
    // For now, we'll just log the form data and close the modal
    console.log('Form submitted:', formData);
    console.log('Auth mode:', authMode);

    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setShowAuthModal(false);
  };


  return (
    <>
      {/* Main Header - Sticky with yellow background and green text */}
      <header className="navbar-header" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#0D1B2A', /* Midnight Blue */
        color: '#FFD700', /* Golden Yellow */
        margin: 0,
        padding: '10px 0'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 30px',
          boxSizing: 'border-box'
        }}>
          <div className="navbar" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '10px 0'
          }}>
            <div className="logo-container" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}>
              <div className="logo" style={{
                flexShrink: 0
              }}>
                {/* Logo image */}
                <img src={mystical} alt="Vedic Ashram Logo" style={{ width: '160px', height: '50px', objectFit: 'contain' }} />
              </div>

              {/* Mobile menu toggle button - Hamburger icon */}
              <button
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#FFD700',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '10px',
                  position: 'absolute',
                  right: '15px',
                  top: '15px',
                  zIndex: 1010,
                  display: 'none' /* Hide by default, show in media query */
                }}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>

            <nav className={`nav-links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              <ul style={{
                color: '#FFD700', /* Golden Yellow */
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                width: '100%'
              }}>
                <li><Link to="/" className="nav-link"><Translate textKey="home" /></Link></li>
                <li><Link to="/about" className="nav-link"><Translate textKey="about" /></Link></li>
                <li
                  className="services-selector"
                  onMouseEnter={windowWidth > 768 ? showServicesDropdown : null}
                  onMouseLeave={windowWidth > 768 ? hideServicesDropdown : null}
                >
                  <Link
                    to="/services"
                    className='nav-link'
                    onClick={(e) => {
                      if (windowWidth <= 768) {
                        e.preventDefault();
                        setShowServicesMenu(!showServicesMenu);
                        // Close other top-level menus
                        setShowTrainingMenu(false);
                        setShowLanguageMenu(false);
                      }
                    }}
                  >
                    <Translate textKey="services" />
                    <span className={`dropdown-arrow ${showServicesMenu ? 'rotate-down' : ''}`}>
                      {windowWidth <= 768 ? '▶' : '▼'}
                    </span>
                  </Link>
                  {
                    showServicesMenu && (
                      <div className="services-dropdown" style={{ display: 'block', opacity: 1, visibility: 'visible', maxHeight: 'none', overflow: 'visible' }}>
                        <div
                          className="vedic-astrology-item"
                          onMouseEnter={windowWidth > 768 ? showVedicAstrologyDropdown : null}
                          onMouseLeave={windowWidth > 768 ? hideVedicAstrologyDropdown : null}
                        >
                          <Link
                            to="/services/vedic-astrology"
                            className="service-with-arrow"
                            onClick={(e) => {
                              if (windowWidth <= 768) {
                                e.preventDefault();
                                setShowVedicAstrologyMenu(!showVedicAstrologyMenu);
                              }
                            }}
                          >
                            <span>Vedic Astrology</span>
                            <span className={`submenu-arrow ${showVedicAstrologyMenu ? 'open' : ''}`}>▶</span>
                          </Link>
                          {showVedicAstrologyMenu && (
                            <div className="vedic-astrology-submenu" style={{ display: 'block', opacity: 1, visibility: 'visible', maxHeight: 'none', overflow: 'visible', marginTop: '5px', marginBottom: '5px' }}>
                              {/* <Link to="/services/vedic-astrology/hast-rekha">Hast Rekha Jyotish</Link> */}
                              <Link to="/services/vedic-astrology/number-jyotish">Number Jyotish</Link>
                              <Link to="/services/vedic-astrology/employee-horoscope">Employee Horoscope Reading</Link>
                              <Link to="/services/vedic-astrology/birth-personal">Birth and Personal Astrology</Link>
                              <Link to="/services/vedic-astrology/birth-chart">Birth Chart</Link>
                              <Link to="/services/vedic-astrology/child-horoscope">Child Horoscope Reading</Link>

                              <Link to="/services/vedic-astrology/love-marriage">Love Marriage Horoscope</Link>

                            </div>
                          )}
                        </div>
                        <div
                          className="vastu-item"
                          onMouseEnter={showVastuDropdown}
                          onMouseLeave={hideVastuDropdown}
                        >
                          <Link to="/services/vastu" className="service-with-arrow">
                            <span>Vastu</span>
                            <span className="submenu-arrow">▶</span>
                          </Link>
                          {showVastuMenu && (
                            <div className="vastu-submenu">
                              <Link to="/services/vastu/vastu-shastra">Vastu Shastra</Link>
                              <Link to="/services/vastu/residential-vastu">Residential Vastu</Link>
                              <Link to="/services/vastu/commercial-vastu">Commercial Vastu</Link>
                              <Link to="/services/vastu/vastu-correction">Vastu Correction</Link>
                            </div>
                          )}
                        </div>
                        <div
                          className="numerology-item"
                          onMouseEnter={showNumerologyDropdown}
                          onMouseLeave={hideNumerologyDropdown}
                        >
                          <Link to="/services/numerology" className="service-with-arrow">
                            <span>Numerology</span>
                            <span className="submenu-arrow">▶</span>
                          </Link>
                          {showNumerologyMenu && (
                            <div className="numerology-submenu">
                              <Link to="/services/numerology/name-change">Name Change By Numerology</Link>
                              <Link to="/services/numerology/consultation">Numerology Consultation</Link>
                              <Link to="/services/numerology/life-path">Life Path Analysis</Link>
                              <Link to="/services/numerology/compatibility">Relationship Compatibility</Link>
                            </div>
                          )}
                        </div>
                        <div
                          className="career-item"
                          onMouseEnter={showCareerDropdown}
                          onMouseLeave={hideCareerDropdown}
                        >
                          <Link to="/services/career-astrology" className="service-with-arrow">
                            <span>Career Astrology</span>
                            <span className="submenu-arrow">▶</span>
                          </Link>
                          {showCareerMenu && (
                            <div className="career-submenu">
                              {/* <Link to="/services/career-astrology">Career Astrology Overview</Link> */}
                              <Link to="/services/career-astrology/job-business">Job vs. Business Analysis</Link>
                              <Link to="/services/career-astrology/timing">Career Timing Analysis</Link>
                              <Link to="/services/career-astrology/planetary-influence">Planetary Influence on Career</Link>
                            </div>
                          )}
                        </div>
                        <div
                          className="child-item"
                          onMouseEnter={showChildDropdown}
                          onMouseLeave={hideChildDropdown}
                        >
                          <Link to="/services/child-astrology" className="service-with-arrow">
                            <span>Child Astrology</span>
                            <span className="submenu-arrow">▶</span>
                          </Link>
                          {showChildMenu && (
                            <div className="child-submenu">
                              <Link to="/services/child-astrology/Baby-Name-Selection">Baby Name Selection</Link>
                              <Link to="/services/child-astrology/birth-time">Birth Time Selection</Link>
                              <Link to="/services/child-astrology/consultation">Child Astrology Consultation</Link>
                              <Link to="/services/child-astrology/education">Child Education</Link>
                            </div>
                          )}
                        </div>
                        <div
                          className="yagya-item"
                          onMouseEnter={showYagyaDropdown}
                          onMouseLeave={hideYagyaDropdown}
                        >
                          <Link to="/yagya" className="service-with-arrow">
                            <span>Yagya/Hawan</span>
                            <span className="submenu-arrow">▶</span>
                          </Link>
                          {showYagyaMenu && (
                            <div className="yagya-submenu">
                              <Link to="/yagya/kal-sarp-dosh">Kal Sarp Dosh Yagya</Link>
                              <Link to="/yagya/mahamrityunjaya">Mahamrityunjaya Yagya</Link>
                              <Link to="/yagya/manglik-dosh">Manglik Dosh Nivaran Yagya</Link>
                              <Link to="/yagya/pitra-dosh">Pitra Dosh Nivaran Yagya</Link>
                              <Link to="/yagya/Navratri-Pooja-Vidhi-Vidhan">Navratri Pooja Vidhi Vidhan</Link>
                              <Link to="/yagya/Rudrabhishek">Rudrabhishek</Link>
                              <Link to="/yagya/mool-shanti">Mool Shanti Yagya</Link>
                              <Link to="/yagya/banglamukhi">Banglamukhi Yagya</Link>
                              <Link to="/yagya/narayan-bali">Narayan Bali Sanskar</Link>
                              <Link to="/yagya/santaan-prapti">Santaan Prapti Mahayagya</Link>
                              <Link to="/yagya/vivah-sanskar">Vivah Sanskar</Link>
                              <Link to="/yagya/grah-pravesh">Grah Pravesh</Link>
                              <Link to="/yagya/bhoomi-poojan">Bhoomi Poojan</Link>
                            </div>
                          )}
                        </div>
                        <div
                          className="love-item"
                          onMouseEnter={showLoveDropdown}
                          onMouseLeave={hideLoveDropdown}
                        >
                          <Link to="/services/love-relationship" className="service-with-arrow">
                            <span>Love Relationship</span>
                            <span className="submenu-arrow">▶</span>
                          </Link>
                          {showLoveMenu && (
                            <div className="love-submenu">
                              <Link to="/services/love-relationship/marital-problem">Marital Problem Solution</Link>
                              <Link to="/services/love-relationship/mahurata">Mahurata For Marriage</Link>
                              <Link to="/services/love-relationship/matchmaking">Vedic Matchmaking</Link>
                              {/* <Link to="/services/love-relationship/delay-remedy">Remedy Astrology For Delay In Marriage</Link>
                              <Link to="/services/love-relationship/spouse-horoscope">Know your Spouse from your Horoscope</Link> */}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  }
                </li>
                <li
                  className="dropdown-menu-item"
                  onMouseEnter={windowWidth > 768 ? showTrainingDropdown : null}
                  onMouseLeave={windowWidth > 768 ? hideTrainingDropdown : null}
                >
                  <Link
                    to="/training-program"
                    className="nav-link"
                    onClick={(e) => {
                      if (windowWidth <= 768) {
                        e.preventDefault();
                        setShowTrainingMenu(!showTrainingMenu);
                        // Close other top-level menus
                        setShowServicesMenu(false);
                        setShowLanguageMenu(false);
                      }
                    }}
                  >
                    <Translate textKey="trainingProgram" />
                    <span className={`dropdown-arrow ${showTrainingMenu ? 'rotate-down' : ''}`}>
                      {windowWidth <= 768 ? '▶' : '▼'}
                    </span>
                  </Link>
                  {showTrainingMenu && (
                    <div className="dropdown-menu" style={{ display: 'block', opacity: 1, visibility: 'visible' }}>
                      <Link to="/training-program/Classical-Music-Course"><Translate textKey="classicalMusic" /></Link>
                      <Link to="/training-program/mantrocharan"><Translate textKey="mantrocharan" /></Link>
                      <Link to="/training-program/vedic-jyotish"><Translate textKey="vedicJyotish" /></Link>
                    </div>
                  )}
                </li>
                <li><Link to="/contact" className="nav-link"><Translate textKey="contact" /></Link></li>
                <li
                  className="dropdown-menu-item language-menu-item"
                  onMouseEnter={windowWidth > 768 ? showLanguageDropdown : null}
                  onMouseLeave={windowWidth > 768 ? hideLanguageDropdown : null}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    textAlign: 'center'
                  }}
                  data-always-visible="true"
                >
                  <Link
                    to="#"
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowLanguageMenu(!showLanguageMenu);
                      // Close other top-level menus on mobile
                      if (windowWidth <= 768) {
                        setShowServicesMenu(false);
                        setShowTrainingMenu(false);
                      }
                    }}
                  >
                    {language === 'english' ? 'English' : 'हिंदी'}
                    <span className={`dropdown-arrow ${showLanguageMenu ? 'rotate-down' : ''}`}>
                      {windowWidth <= 768 ? '▶' : '▼'}
                    </span>
                  </Link>
                  <div className="dropdown-menu always-visible-mobile" style={{
                    display: windowWidth <= 768 || showLanguageMenu ? 'block' : 'none',
                    opacity: 1,
                    visibility: 'visible',
                    maxHeight: 'none',
                    overflow: 'visible',
                    position: windowWidth <= 768 ? 'relative' : 'absolute',
                    width: windowWidth <= 768 ? '100%' : 'auto',
                    flexDirection: 'column' // Ensure vertical display for PC
                  }}>
                    <button
                      className={language === 'english' ? 'active' : ''}
                      onClick={() => handleLanguageChange('english')}
                    >
                      English
                    </button>
                    <button
                      className={language === 'hindi' ? 'active' : ''}
                      onClick={() => handleLanguageChange('hindi')}
                    >
                      हिंदी
                    </button>
                  </div>
                </li>
                <li className="auth-option" style={{ whiteSpace: 'nowrap', padding: '0 5px' }}>
                  <button onClick={toggleAuthModal} className="auth-btn" style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    backgroundColor: '#FFD700', /* Golden Yellow */
                    color: '#0D1B2A', /* Midnight Blue */
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '15px'
                  }}>
                    <Translate textKey="signIn" />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Auth Modal */}
        {
          showAuthModal && (

            <div className="auth-modal-overlay" onClick={toggleAuthModal}>
              <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={toggleAuthModal}>×</button>

                <h2>{authMode === 'signin' ? 'Sign In' : 'Sign Up'}</h2>

                <form onSubmit={handleSubmit}>
                  {authMode === 'signup' && (
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required={authMode === 'signup'}
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {authMode === 'signup' && (
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required={authMode === 'signup'}
                      />
                    </div>
                  )}

                  <button type="submit" className="submit-btn">
                    {authMode === 'signin' ? 'Sign In' : 'Sign Up'}
                  </button>
                </form>

                <div className="auth-switch">
                  {authMode === 'signin' ? (
                    <p>Don't have an account? <button onClick={switchAuthMode}>Sign Up</button></p>
                  ) : (
                    <p>Already have an account? <button onClick={switchAuthMode}>Sign In</button></p>
                  )}
                </div>
              </div>
            </div>
          )}
      </header>
    </>

  )
};

export default Navbar;
