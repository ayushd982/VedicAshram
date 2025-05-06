import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import darkSkyBackground from '../../assets/dark_sky.avif';

const AskQuestion = () => {
  const [formData, setState] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    question: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Your question has been submitted. Our astrologers will respond shortly.');
  };

  return (
    <div className="askques-container" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Navbar />

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div style={{ height: '100px' }}></div>

      <div className="askques-hero" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${darkSkyBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Ask Your Question to Our Vedic Astrologers
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
          Get personalized answers based on ancient Vedic wisdom
        </p>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#6a0dad', marginBottom: '20px', textAlign: 'center' }}>
            How It Works
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              paddingLeft: '70px'
            }}>
              <div style={{
                position: 'absolute',
                left: '20px',
                top: '20px',
                width: '40px',
                height: '40px',
                backgroundColor: '#6a0dad',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>1</div>
              <h3 style={{ marginBottom: '10px', color: '#6a0dad' }}>Submit Your Question</h3>
              <p>Fill out the form with your personal details and your specific question</p>
            </div>
            <div style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              paddingLeft: '70px'
            }}>
              <div style={{
                position: 'absolute',
                left: '20px',
                top: '20px',
                width: '40px',
                height: '40px',
                backgroundColor: '#6a0dad',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>2</div>
              <h3 style={{ marginBottom: '10px', color: '#6a0dad' }}>Astrologer Analysis</h3>
              <p>Our expert astrologers will analyze your birth details and question</p>
            </div>
            <div style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              paddingLeft: '70px'
            }}>
              <div style={{
                position: 'absolute',
                left: '20px',
                top: '20px',
                width: '40px',
                height: '40px',
                backgroundColor: '#6a0dad',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>3</div>
              <h3 style={{ marginBottom: '10px', color: '#6a0dad' }}>Receive Your Answer</h3>
              <p>Get a detailed response based on Vedic astrological principles</p>
            </div>
          </div>
        </div>

        <div style={{
          flex: '1 1 500px',
          backgroundColor: '#f5f5f5',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ fontSize: '1.8rem', color: '#6a0dad', marginBottom: '20px', textAlign: 'center' }}>
            Ask Your Question
          </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '5px', fontWeight: 'bold' }} htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '5px', fontWeight: 'bold' }} htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '5px', fontWeight: 'bold' }} htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '5px', fontWeight: 'bold' }} htmlFor="birthDate">Date of Birth</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '5px', fontWeight: 'bold' }} htmlFor="birthTime">Time of Birth</label>
              <input
                type="time"
                id="birthTime"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '5px', fontWeight: 'bold' }} htmlFor="birthPlace">Place of Birth</label>
              <input
                type="text"
                id="birthPlace"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '5px', fontWeight: 'bold' }} htmlFor="question">Your Question</label>
              <textarea
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                rows="5"
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  resize: 'vertical',
                  minHeight: '100px'
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#6a0dad',
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '5px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                marginTop: '10px'
              }}
            >
              Submit Question
            </button>
          </form>
        </div>
      </div>

      <div style={{
        backgroundColor: '#f0f0f0',
        padding: '60px 20px',
        marginTop: '40px'
      }}>
        <h2 style={{ fontSize: '1.8rem', color: '#6a0dad', marginBottom: '30px', textAlign: 'center' }}>
          What Our Clients Say
        </h2>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            flex: '1 1 300px',
            maxWidth: '400px'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '15px', lineHeight: '1.6' }}>
              "The insights I received were incredibly accurate and helped me make an important life decision."
            </p>
            <div style={{ fontWeight: 'bold', color: '#6a0dad', textAlign: 'right' }}>- Rahul S.</div>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            flex: '1 1 300px',
            maxWidth: '400px'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '15px', lineHeight: '1.6' }}>
              "I was skeptical at first, but the astrologer's answer to my question was so precise that I'm now a believer."
            </p>
            <div style={{ fontWeight: 'bold', color: '#6a0dad', textAlign: 'right' }}>- Priya M.</div>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            flex: '1 1 300px',
            maxWidth: '400px'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '15px', lineHeight: '1.6' }}>
              "The guidance I received helped me navigate a difficult period in my career. Highly recommended!"
            </p>
            <div style={{ fontWeight: 'bold', color: '#6a0dad', textAlign: 'right' }}>- Amit K.</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AskQuestion;