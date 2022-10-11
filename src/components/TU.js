// Regex para dar o split e pegar texto fora das tags: <\/?[^>]+>
// Fonte: https://gist.github.com/pseudosavant/0187ea97d5fd87ce78bb
import PropTypes from "prop-types";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
const langData = require("./langs.json");

// Stands for TranslationUnit
const TU = ({ children, id }) => {
    const { contextLanguage, DEFAULT_LANGUAGE } = useContext(LanguageContext)
    const getLanguageData = () => {
        if (!langData[id]) {
            console.warn(`Warning: Element with id ${id} not found in dictionary.`);
            return children;
        } else if (langData[id][DEFAULT_LANGUAGE] !== children) {
            console.warn(`Warning: Text in language JSON id ${id} for default language differs from text in DOM.`);
            if (contextLanguage === DEFAULT_LANGUAGE) {
                return children;
            }
        }
        return langData[id][contextLanguage];
    }

    return (
        <>
            {getLanguageData()}
        </>
    )
}

TU.propTypes = {
    children: PropTypes.string
}

export default TU;