import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import TU from "./TU";

const homeIcon = require("../img/home_icon.png")

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { contextLanguage } = useContext(LanguageContext);

    return (
        <header className="header flex">  
            <ul className="links-top">
                <li> 
                    <Link to="/">
                        <img src={homeIcon} alt="Home" className="home-icon" />
                    </Link>
                </li>
                {/* Substitui esses métodos por uma função capaz de suportar várias línguas, tb mudar se tiver "en", etc.*/}
                {
                contextLanguage === "pt" ?
                    <li className="lang-link" onClick={() => navigate(location.pathname.replace("/pt/", "/"))}>Auf Deutsch</li>
                    :
                    <li className="lang-link" onClick={() => !location.pathname.includes("/pt/") && navigate("pt" + location.pathname)}>Página em português</li>
                }
            </ul>

            <div id="title-section">
                <h1><TU id="9">Beglaubigte Übersetzungen</TU></h1>
                <h2><TU id="10">Deutsch - Portugiesisch in Leipzig</TU></h2>
            </div>
        </header>
    )
}

export default Header;