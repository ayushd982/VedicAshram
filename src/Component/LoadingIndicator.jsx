import React from 'react';

const LoadingIndicator = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      backgroundColor: 'transparent',
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      <div
        style={{
          height: '100%',
          width: '50%',
          backgroundColor: '#6a0dad',
          animation: 'loading 1s infinite ease-in-out'
        }}
      />
      <style jsx="true">{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingIndicator;