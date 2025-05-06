import React from 'react';

const Fallback = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#6a0dad', marginBottom: '20px' }}>Vedic Ashram</h1>
      <p style={{ fontSize: '18px', maxWidth: '600px', lineHeight: '1.6' }}>
        Welcome to Vedic Ashram. Our website is currently loading or experiencing a temporary issue.
      </p>
      <div style={{ marginTop: '30px' }}>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#6a0dad',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginRight: '10px'
          }}
        >
          Refresh Home
        </a>
        <a
          href="/about"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#f39c12',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          About Us
        </a>
      </div>
    </div>
  );
};

export default Fallback;