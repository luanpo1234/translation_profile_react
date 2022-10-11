import { useState, createContext } from "react";

const DEFAULT_LANGUAGE = "de";

const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
    const [contextLanguage, setContextLanguage] = useState(DEFAULT_LANGUAGE);
    
    const createLanguagePath = (path) => (
        contextLanguage === DEFAULT_LANGUAGE ? path : `/${contextLanguage}${path}`  
    )

    return (
        <LanguageContext.Provider value={ 
            { contextLanguage, setContextLanguage, createLanguagePath, DEFAULT_LANGUAGE } 
        }>
            {children}
        </LanguageContext.Provider>
    )
};

export {LanguageContextProvider, LanguageContext};