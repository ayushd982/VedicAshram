import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import './CareerAstrology.css';
import { useLanguage } from '../../context/LanguageContext';

const CareerAstrology = () => {
  const { language } = useLanguage();
  return (
    <div className="career-astrology-page">
      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with margin after navbar */}
      <div className="career-astrology-content">
        <div className="container career-astrology-container">
          <div className="page-header">
            <div className="cosmic-decoration left"></div>
            <h1 className="main-heading">
              <i className="fas fa-briefcase"></i> {language === 'hindi' ? 'करियर ज्योतिष' : 'Career Astrology'}
              <span className="heading-subtitle">
                {language === 'hindi'
                  ? 'तारों के माध्यम से आपके पेशेवर मार्ग का मार्गदर्शन'
                  : 'Guiding Your Professional Path Through the Stars'}
              </span>
            </h1>
            <div className="cosmic-decoration right"></div>
          </div>

          <section className="intro-section">
            <h2 className="section-heading">
              <i className="fas fa-question-circle"></i> {language === 'hindi' ? 'करियर ज्योतिष क्या है?' : 'What is Career Astrology?'}
            </h2>
            <p className="intro-paragraph">
              {language === 'hindi'
                ? 'करियर ज्योतिष वैदिक और पश्चिमी ज्योतिष की एक शाखा है जो सबसे उपयुक्त करियर पथों को निर्धारित करने के लिए किसी व्यक्ति की जन्म कुंडली (होरोस्कोप) में ग्रहों की स्थिति का विश्लेषण करती है। यह व्यक्तियों को उनकी राशि, ग्रहीय प्रभावों और ज्योतिषीय भावों के आधार पर उनकी ताकतों, कमजोरियों और पेशेवर झुकावों को समझने में मदद करता है।'
                : 'Career Astrology is a branch of Vedic and Western astrology that analyzes planetary positions in a person\'s birth chart (horoscope) to determine the most suitable career paths. It helps individuals understand their strengths, weaknesses, and professional inclinations based on their zodiac sign, planetary influences, and astrological houses.'}
            </p>
            <div className="cosmic-illustration">
              <div className="planets-orbit">
                <div className="planet sun"></div>
                <div className="planet mercury"></div>
                <div className="planet venus"></div>
                <div className="planet earth"></div>
                <div className="planet mars"></div>
                <div className="planet jupiter"></div>
                <div className="planet saturn"></div>
              </div>
            </div>
          </section>

          <section className="key-elements-section">
            <h2 className="section-heading">
              <i className="fas fa-key"></i> Key Elements of Career Astrology
            </h2>

            <div className="element-card houses-card">
              <h3 className="element-title">
                <span className="element-number">1</span> The Role of Houses in Career Astrology
              </h3>
              <p className="element-description">
                In Vedic astrology, certain houses in the horoscope influence career growth and success:
              </p>
              <ul className="houses-list">
                <li>
                  <span className="house-number">10th House</span>
                  <span className="house-name">(Karma Bhava)</span> – The house of career, profession, and reputation.
                </li>
                <li>
                  <span className="house-number">6th House</span>
                  <span className="house-name">(Service & Competition)</span> – Indicates job-related challenges and work ethics.
                </li>
                <li>
                  <span className="house-number">2nd House</span>
                  <span className="house-name">(Wealth & Speech)</span> – Governs financial stability and communication skills.
                </li>
                <li>
                  <span className="house-number">11th House</span>
                  <span className="house-name">(Gains & Ambitions)</span> – Represents success, networking, and career achievements.
                </li>
              </ul>
              <div className="houses-illustration"></div>
            </div>

            <div className="element-card planets-card">
              <h3 className="element-title">
                <span className="element-number">2</span> Influence of Planets in Career
              </h3>
              <div className="planets-grid">
                <div className="planet-item">
                  <div className="planet-icon sun-icon"></div>
                  <h4 className="planet-name">Sun</h4>
                  <p className="planet-careers">Authority, government jobs, leadership roles.</p>
                </div>
                <div className="planet-item">
                  <div className="planet-icon moon-icon"></div>
                  <h4 className="planet-name">Moon</h4>
                  <p className="planet-careers">Creativity, nursing, hospitality, and psychology.</p>
                </div>
                <div className="planet-item">
                  <div className="planet-icon mars-icon"></div>
                  <h4 className="planet-name">Mars</h4>
                  <p className="planet-careers">Engineering, military, police, and sports.</p>
                </div>
                <div className="planet-item">
                  <div className="planet-icon mercury-icon"></div>
                  <h4 className="planet-name">Mercury</h4>
                  <p className="planet-careers">Business, media, marketing, and communication.</p>
                </div>
                <div className="planet-item">
                  <div className="planet-icon jupiter-icon"></div>
                  <h4 className="planet-name">Jupiter</h4>
                  <p className="planet-careers">Education, teaching, law, and spirituality.</p>
                </div>
                <div className="planet-item">
                  <div className="planet-icon venus-icon"></div>
                  <h4 className="planet-name">Venus</h4>
                  <p className="planet-careers">Arts, fashion, film, and luxury-related careers.</p>
                </div>
                <div className="planet-item">
                  <div className="planet-icon saturn-icon"></div>
                  <h4 className="planet-name">Saturn</h4>
                  <p className="planet-careers">Stability, administration, labor-intensive jobs, and research.</p>
                </div>
              </div>
            </div>

            <div className="element-card zodiac-card">
              <h3 className="element-title">
                <span className="element-number">3</span> Zodiac Signs & Career Inclination
              </h3>
              <div className="zodiac-table-container">
                <table className="zodiac-table">
                  <thead>
                    <tr>
                      <th>Zodiac Sign</th>
                      <th>Best Career Fields</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="zodiac-icon aries"></span> Aries (♈)</td>
                      <td>Leadership, military, sports, startups</td>
                    </tr>
                    <tr>
                      <td><span className="zodiac-icon taurus"></span> Taurus (♉)</td>
                      <td>Banking, luxury goods, real estate</td>
                    </tr>
                    <tr>
                      <td><span className="zodiac-icon gemini"></span> Gemini (♊)</td>
                      <td>Writing, media, sales, communication</td>
                    </tr>
                    <tr>
                      <td><span className="zodiac-icon cancer"></span> Cancer (♋)</td>
                      <td>Healthcare, hospitality, psychology</td>
                    </tr>
                    <tr>
                      <td><span className="zodiac-icon leo"></span> Leo (♌)</td>
                      <td>Acting, politics, leadership, event management</td>
                    </tr>
                    <tr>
                      <td><span className="zodiac-icon virgo"></span> Virgo (♍)</td>
                      <td>Data analysis, medicine, accounting</td>
                    </tr>
                    <tr>
                      <td><span className="zodiac-icon libra"></span> Libra (♎)</td>
                      <td>Law, diplomacy, fashion, entertainment</td>
                    </tr>
                    <tr>
                      <td><span className="zodiac-icon scorpio"></span> Scorpio (♏)</td>
                      <td>Research, defense, medicine, astrology</td>
                    </tr>
                    <tr>
                      <td><span className="zodiac-icon sagittarius"></span> Sagittarius (♐)</td>
                      <td>Teaching, travel, philosophy, spirituality</td>
                    </tr>
                    <tr>
                      <td><span className="zodiac-icon capricorn"></span> Capricorn (♑)</td>
                      <td>Business, administration, engineering</td>
                    </tr>
                    <tr>
                      <td><span className="zodiac-icon aquarius"></span> Aquarius (♒)</td>
                      <td>IT, innovation, social work, aviation</td>
                    </tr>
                    <tr>
                      <td><span className="zodiac-icon pisces"></span> Pisces (♓)</td>
                      <td>Arts, music, healing, psychology</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2 className="section-heading">
              <i className="fas fa-star"></i> How Career Astrology Helps
            </h2>
            <div className="benefits-grid">
              <Link to="/services/career-astrology/overview" className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-compass"></i>
                </div>
                <h3 className="benefit-title">Career Astrology Overview</h3>
                <p className="benefit-description">Discover how the stars influence your professional journey.</p>
              </Link>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-mountain"></i>
                </div>
                <h3 className="benefit-title">Understanding Challenges</h3>
                <p className="benefit-description">Identify and overcome career obstacles.</p>
              </div>
              <Link to="/services/career-astrology/job-analysis" className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h3 className="benefit-title">Job vs. Business Decisions</h3>
                <p className="benefit-description">Analyze if you are suited for a corporate job or entrepreneurship.</p>
              </Link>
              <Link to="/services/career-astrology/timing-analysis" className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-hourglass-half"></i>
                </div>
                <h3 className="benefit-title">Timing Career Growth</h3>
                <p className="benefit-description">Use planetary transits and dasha (periods) to know when to expect promotions or job changes.</p>
              </Link>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2 className="cta-heading">Ready to Discover Your Cosmic Career Path?</h2>
              <p className="cta-description">
                Our expert astrologers can analyze your birth chart and provide personalized career guidance based on your unique planetary positions.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-button primary">
                  <i className="fas fa-calendar-check"></i> Book a Consultation
                </Link>
                <Link to="/services" className="cta-button secondary">
                  <i className="fas fa-info-circle"></i> Explore More Services
                </Link>
              </div>
            </div>
            <div className="cta-decoration"></div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareerAstrology;