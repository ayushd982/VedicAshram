import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from './Navbar';
import './ChatNow.css';

const ChatNow = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedAstrologer, setSelectedAstrologer] = useState(null);

  const astrologers = [
    {
      id: 1,
      name: "Pandit Sharma",
      expertise: "Vedic Astrology",
      experience: "15 years",
      rating: 4.8,
      price: "₹20/min",
      image: "https://example.com/astrologer1.jpg" // Replace with actual image URL
    },
    {
      id: 2,
      name: "Dr. Gupta",
      expertise: "Numerology",
      experience: "12 years",
      rating: 4.7,
      price: "₹18/min",
      image: "https://example.com/astrologer2.jpg" // Replace with actual image URL
    },
    // Add more astrologers as needed
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-now-container">
      <Navbar />
      {/* Spacer to prevent content from being hidden under fixed header */}
      <div style={{ height: '100px' }}></div>

      <div className="chat-header">
        <h1>Chat with Astrologers</h1>
        <p>Get instant guidance from our experienced astrologers</p>
      </div>

      <div className="chat-main-content">
        {!selectedAstrologer ? (
          <div className="astrologers-list">
            {astrologers.map((astrologer) => (
              <div key={astrologer.id} className="astrologer-card">
                <div className="astrologer-image">
                  <img src={astrologer.image} alt={astrologer.name} />
                </div>
                <div className="astrologer-info">
                  <h3>{astrologer.name}</h3>
                  <p>{astrologer.expertise}</p>
                  <p>Experience: {astrologer.experience}</p>
                  <p>Rating: {astrologer.rating}⭐</p>
                  <p>{astrologer.price}</p>
                  <button
                    onClick={() => setSelectedAstrologer(astrologer)}
                    className="chat-button"
                  >
                    Start Chat
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="chat-interface">
            <div className="chat-header-selected">
              <button
                onClick={() => setSelectedAstrologer(null)}
                className="back-button"
              >
                ← Back
              </button>
              <h2>Chat with {selectedAstrologer.name}</h2>
            </div>
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="chat-input-form">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="chat-input"
              />
              <button type="submit" className="send-button">Send</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ChatNow;
