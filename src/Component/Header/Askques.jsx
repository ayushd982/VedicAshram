import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';
import Translate from '../../translations/Translate';

const Askques = () => {
  const { language } = useLanguage();

  return (
    <div className="askques-page">
      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with margin after navbar */}
      <div className="askques-content">
        <div className="container">
          <h1 className="main-heading">
            <Translate text="Ask a Question" />
          </h1>

          <div className="askques-form-container">
            <p className="intro-text">
              <Translate text="Have a specific question about your life, career, relationships, or spiritual journey? Our expert astrologers are here to provide personalized guidance based on Vedic wisdom." />
            </p>

            <form className="askques-form">
              <div className="form-group">
                <label htmlFor="name">
                  <Translate text="Your Name" />
                </label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <Translate text="Email Address" />
                </label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  <Translate text="Phone Number" />
                </label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div className="form-group">
                <label htmlFor="dob">
                  <Translate text="Date of Birth" />
                </label>
                <input type="date" id="dob" name="dob" required />
              </div>

              <div className="form-group">
                <label htmlFor="time">
                  <Translate text="Time of Birth (if known)" />
                </label>
                <input type="time" id="time" name="time" />
              </div>

              <div className="form-group">
                <label htmlFor="place">
                  <Translate text="Place of Birth" />
                </label>
                <input type="text" id="place" name="place" />
              </div>

              <div className="form-group full-width">
                <label htmlFor="question">
                  <Translate text="Your Question" />
                </label>
                <textarea id="question" name="question" rows="5" required></textarea>
              </div>

              <div className="form-group full-width">
                <button type="submit" className="submit-button">
                  <Translate text="Submit Question" />
                </button>
              </div>
            </form>

            <div className="askques-info">
              <h3>
                <Translate text="How it works" />
              </h3>
              <ol>
                <li>
                  <Translate text="Submit your question with your birth details" />
                </li>
                <li>
                  <Translate text="Our expert astrologers will analyze your birth chart" />
                </li>
                <li>
                  <Translate text="Receive a personalized response within 48 hours" />
                </li>
                <li>
                  <Translate text="Follow-up consultation available if needed" />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Askques;
