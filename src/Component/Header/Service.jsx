import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import './Service.css';

const Service = () => {
  console.log('Service component rendered');

  // Service data for each row with icons
  const servicesRow1 = [
    {
      title: 'VEDIC YAGYAS',
      link: '/services/vedic-yagyas',
      icon: '🔥' // Fire for yagyas
    },
    {
      title: 'VEDIC MUHURATA',
      link: '/services/vedic-muhurata',
      icon: '⏰' // Clock for timing/muhurata
    },
    {
      title: 'VEDIC ASTROLOGY',
      link: '/services/vedic-astrology',
      icon: '✨' // Stars for astrology
    },
    {
      title: 'VASTU AND FENGSHUI',
      link: '/services/vastu-fengshui',
      icon: '🏠' // House for vastu
    }
  ];

  const servicesRow2 = [
    {
      title: 'RUDRAKASH THERAPY',
      link: '/services/rudrakash-therapy',
      icon: '📿' // Prayer beads for rudrakash
    },
    {
      title: 'NUMEROLOGY',
      link: '/services/numerology',
      icon: '🔢' // Numbers for numerology
    },
    {
      title: 'LOVE AND RELATIONSHIP',
      link: '/services/love-relationship',
      icon: '❤️' // Heart for love
    },
    {
      title: 'CHILD ASTROLOGY',
      link: '/services/child-astrology',
      icon: '👶' // Baby for child astrology
    }
  ];

  const servicesRow3 = [
    {
      title: 'CAREER ASTROLOGY',
      link: '/services/career-astrology',
      icon: '💼' // Briefcase for career
    },
    {
      title: 'ASTROLOGY REPORTS',
      link: '/services/astrology-reports',
      icon: '📊' // Chart for reports
    },
    {
      title: 'TAROT',
      link: '/services/tarot',
      icon: '🃏' // Cards for tarot
    },
    {
      title: 'COUNSELLING',
      link: '/services/counselling',
      icon: '🧠' // Brain for counselling
    }
  ];

  // Function to render a row of service boxes
  const renderServiceRow = (services) => {
    return (
      <div className="service-row">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <Link to={service.link}>
              <div className="service-image-container">
                <div className="service-text-image">
                  <div className="service-icon">{service.icon}</div>
                  {service.title}
                </div>
              </div>
              <h3 className="service-box-title">{service.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="service-page">
      {/* Navbar at the top */}
      <Navbar />

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div style={{ height: '100px' }}></div>

      {/* Main content with gap after navbar */}
      <div className="service-content">
        <div className="container">
          <h1 className="service-title">Our Services</h1>
          <p className="service-description">
            Explore our comprehensive range of Vedic and astrological services designed to provide guidance and clarity in various aspects of life.
          </p>

          {/* Render all three rows of services */}
          {renderServiceRow(servicesRow1)}
          {renderServiceRow(servicesRow2)}
          {renderServiceRow(servicesRow3)}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Service;