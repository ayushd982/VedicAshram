import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the language context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Initialize language state from localStorage or default to 'english'
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to 'english'
    return localStorage.getItem('selectedLanguage') || 'english';
  });

  // Function to change the language
  const changeLanguage = (lang) => {
    setLanguage(lang);
    // Store language preference in localStorage for persistence
    localStorage.setItem('selectedLanguage', lang);
    console.log('Language changed in context to:', lang);
  };

  // Listen for language change events
  useEffect(() => {
    const handleLanguageChanged = () => {
      console.log('Language change event detected, current language:', language);
    };

    window.addEventListener('languageChanged', handleLanguageChanged);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChanged);
    };
  }, [language]);

  // Provide the language context to children components
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};