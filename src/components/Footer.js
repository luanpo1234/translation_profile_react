import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import TU from "./TU";

const Footer = () => {
    const { createLanguagePath } = useContext(LanguageContext);
    return (
        <footer className="site-footer">
            <div className="container">
                <ul>
                        <li><Link to={createLanguagePath(`/impressum`)}><TU id="17">Impressum</TU></Link></li>
                        <li><Link to={createLanguagePath(`/datenschutz`)}><TU id="18">Datenschutzerklärung</TU></Link></li>
                        <li><Link to={createLanguagePath(`/`)}>Home</Link></li>
                    </ul>
                <hr />
                <p><TU id="12">Website erstellt von Luan de Paiva Orsini.</TU></p>
            </div>
        </footer>
    )
};

export default Footer;

