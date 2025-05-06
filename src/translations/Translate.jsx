import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { english, hindi } from './translations';

// Translation component that renders text based on current language
const Translate = ({ textKey }) => {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    // Get the translations for the current language
    const translations = language === 'hindi' ? hindi : english;

    // Set the translated text or the key itself if translation not found
    setTranslatedText(translations[textKey] || textKey);

    console.log(`Translating "${textKey}" to ${language}: "${translations[textKey] || textKey}"`);
  }, [language, textKey]);

  // Return the translated text
  return <>{translatedText}</>;
};

export default Translate;