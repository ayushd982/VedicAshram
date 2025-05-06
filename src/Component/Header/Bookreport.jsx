import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from './Navbar';
import './BookReport.css';

const BookReport = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    reportType: ''
  });

  const reports = [
    {
      id: 1,
      title: "Complete Life Report",
      description: "Detailed analysis of all life aspects including career, relationships, and health",
      price: "₹2100",
      duration: "7-10 days"
    },
    {
      id: 2,
      title: "Career Report",
      description: "Focused analysis of career prospects and professional life",
      price: "₹1100",
      duration: "3-5 days"
    },
    {
      id: 3,
      title: "Marriage Report",
      description: "Detailed analysis of marriage timing and compatibility",
      price: "₹1500",
      duration: "5-7 days"
    }
    // Add more report types
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Report request submitted successfully! We will contact you shortly.');
    setSelectedReport(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      birthDate: '',
      birthTime: '',
      birthPlace: '',
      reportType: ''
    });
  };

  return (
    <div className="book-report-container">
      <Navbar />
      {/* Spacer to prevent content from being hidden under fixed header */}
      <div style={{ height: '100px' }}></div>

      <div className="report-header">
        <h1>Astrological Reports</h1>
        <p>Get detailed astrological reports personalized for you</p>
      </div>

      <div className="report-main-content">
        {!selectedReport ? (
          <div className="reports-list">
            {reports.map((report) => (
              <div key={report.id} className="report-card">
                <h3>{report.title}</h3>
                <p>{report.description}</p>
                <div className="report-details">
                  <span>Price: {report.price}</span>
                  <span>Duration: {report.duration}</span>
                </div>
                <button
                  onClick={() => setSelectedReport(report)}
                  className="select-report-button"
                >
                  Select Report
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="report-form-container">
            <h2>Book {selectedReport.title}</h2>
            <form onSubmit={handleSubmit} className="report-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Time of Birth</label>
                <input
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Place of Birth</label>
                <input
                  type="text"
                  value={formData.birthPlace}
                  onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="button" onClick={() => setSelectedReport(null)} className="back-button">
                  Back
                </button>
                <button type="submit" className="submit-button">
                  Book Report
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

export default BookReport;
