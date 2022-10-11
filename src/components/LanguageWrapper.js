import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet";
const langData = require("./langs.json");

const LanguageWrapper = ( {children} ) => {
    const { contextLanguage, setContextLanguage, DEFAULT_LANGUAGE } = useContext(LanguageContext);
    const { lang } = useParams();

    useEffect(() => {
        lang ? setContextLanguage(lang) : setContextLanguage(DEFAULT_LANGUAGE);
    }, [contextLanguage, lang, setContextLanguage, DEFAULT_LANGUAGE]);

    return (
        <>
            <Helmet>
                <html lang={contextLanguage} />
                <title>{langData["title"][contextLanguage]}</title>
                <meta
                    name="description"
                    content={langData["description"][contextLanguage]}
                />
            </Helmet>
            { children } 
        </>
    )
}

export default LanguageWrapper;