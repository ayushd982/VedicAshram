import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar.jsx';
import Footer from '../Footer/Footer';

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
    maritalStatus: '',
    birthDate: '',
    birthPlace: '',
    birthHour: '',
    birthMinute: '',
    birthSecond: '',
    concern: ''
  });

  // State for map zoom level
  const [zoom, setZoom] = useState(15);

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
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  // Handle map zoom in
  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 1, 20));
  };

  // Handle map zoom out
  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 1, 10));
  };

  return (
    <div className="contact-page">
      <div className="contact-navbar">
        <Navbar />
      </div>
      {/* Spacer to prevent content from being hidden under fixed header */}
      <div style={{ height: '100px' }}></div>
      <div className="contact-hero">
        <div className="contact-container">
          <div className="map-section">
            <h2>Our Location</h2>
            <div className="map-container">
              <div className="map-iframe-container">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5384622395476!2d77.38881!3d28.535499999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621f7d5151d9c297!2sUrbtech%20Trade%20Centre%2C%20Sector%20132%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin&z=${zoom}`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="zoom-controls">
                <button onClick={handleZoomIn} className="zoom-btn">+</button>
                <button onClick={handleZoomOut} className="zoom-btn">-</button>
              </div>
              <div className="address-box">
                <p><strong>Address:</strong> Noida sec-132, Urbtech Centre, Tower-A near DPS School</p>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-container">
              <h2>Get Free Guidance</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Marital Status</option>
                      <option value="Married">Married</option>
                      <option value="Unmarried">Unmarried</option>
                      <option value="Widow/Widower">Widow/Widower</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Live In">Live In</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="birthPlace"
                      value={formData.birthPlace}
                      onChange={handleInputChange}
                      placeholder="Birth Place"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="number"
                      name="birthHour"
                      value={formData.birthHour}
                      onChange={handleInputChange}
                      placeholder="Birth Hour"
                      min="0"
                      max="23"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="birthMinute"
                      value={formData.birthMinute}
                      onChange={handleInputChange}
                      placeholder="Birth Minute"
                      min="0"
                      max="59"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="birthSecond"
                      value={formData.birthSecond}
                      onChange={handleInputChange}
                      placeholder="Birth Second"
                      min="0"
                      max="59"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="concern"
                    value={formData.concern}
                    onChange={handleInputChange}
                    placeholder="Ask Your Concern (max 100 words)"
                    maxLength="500"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <button type="submit" className="submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;