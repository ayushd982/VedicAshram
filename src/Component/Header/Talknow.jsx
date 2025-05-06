import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from './Navbar';
import './Talknow.css';

const TalkNow = () => {
  const [selectedAstrologer, setSelectedAstrologer] = useState(null);
  const [showCallForm, setShowCallForm] = useState(false);
  const [callFormData, setCallFormData] = useState({
    name: '',
    phone: '',
    time: '',
    query: ''
  });

  const astrologers = [
    {
      id: 1,
      name: "Acharya Vinod",
      expertise: "Vedic Astrology, Vastu",
      experience: "20 years",
      languages: ["English", "Hindi", "Sanskrit"],
      rating: 4.9,
      price: "₹30/min",
      availability: "Available Now",
      image: "https://example.com/astrologer1.jpg" // Replace with actual image
    },
    // Add more astrologers
  ];

  const handleCallFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Call request submitted successfully! We will contact you shortly.');
    setShowCallForm(false);
    setSelectedAstrologer(null);
  };

  return (
    <div className="talk-now-container">
      <Navbar />
      {/* Spacer to prevent content from being hidden under fixed header */}
      <div style={{ height: '100px' }}></div>

      <div className="talk-header">
        <h1>Talk to Astrologers</h1>
        <p>Get instant telephonic consultation with our expert astrologers</p>
      </div>

      <div className="talk-main-content">
        {!showCallForm ? (
          <div className="astrologers-list">
            {astrologers.map((astrologer) => (
              <div key={astrologer.id} className="astrologer-card">
                <div className="astrologer-image">
                  <img src={astrologer.image} alt={astrologer.name} />
                  <span className={`availability ${astrologer.availability === 'Available Now' ? 'available' : 'busy'}`}>
                    {astrologer.availability}
                  </span>
                </div>
                <div className="astrologer-info">
                  <h3>{astrologer.name}</h3>
                  <p>{astrologer.expertise}</p>
                  <p>Experience: {astrologer.experience}</p>
                  <p>Languages: {astrologer.languages.join(', ')}</p>
                  <p>Rating: {astrologer.rating}⭐</p>
                  <p>{astrologer.price}</p>
                  <button
                    onClick={() => {
                      setSelectedAstrologer(astrologer);
                      setShowCallForm(true);
                    }}
                    className="call-button"
                  >
                    Call Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="call-form-container">
            <h2>Schedule Call with {selectedAstrologer.name}</h2>
            <form onSubmit={handleCallFormSubmit} className="call-form">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  value={callFormData.name}
                  onChange={(e) => setCallFormData({ ...callFormData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={callFormData.phone}
                  onChange={(e) => setCallFormData({ ...callFormData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Preferred Time</label>
                <input
                  type="datetime-local"
                  value={callFormData.time}
                  onChange={(e) => setCallFormData({ ...callFormData, time: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Query</label>
                <textarea
                  value={callFormData.query}
                  onChange={(e) => setCallFormData({ ...callFormData, query: e.target.value })}
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="button" onClick={() => setShowCallForm(false)} className="back-button">
                  Back
                </button>
                <button type="submit" className="submit-button">
                  Schedule Call
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TalkNow;
