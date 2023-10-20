import { createContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('english'); // Default language is English
  
    const toggleLanguage = () => {
      setLanguage(language === 'english' ? 'bangla' : 'english');
    };
  
    return (
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  }