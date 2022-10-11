import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import TU from "./TU";

const profileImg = require("../img/photo_new.jpg")

const Home = () => {
    const { contextLanguage } = useContext(LanguageContext);
    return (
        <>
            <div id="top-section" className="flex">
                <div className="content-left flex">
                    <div className="section-title">
                        <h2>Luan Orsini</h2>
                    </div>
                    <div id="img-skills" className="flex">
                        <div id="profile-image">
                            <img src={profileImg} id="profile" alt="Luan Orsini" />
                        </div>
                        <div id="list-skills">
                            <ul>
                                <li>
                                    <TU id="1">Staatlich geprüfter und beeidigter Übersetzer mit</TU> <strong><TU id="2">über 10 Jahren Erfahrung</TU></strong> <TU id="3">in den Bereichen</TU> <strong><TU id="19">Technik, Recht und Finanzen</TU></strong> <TU id="20">u.a.</TU>
                                </li>
                                <li>
                                    <TU id="4">Zusammenarbeit mit zahlreichen Übersetzungsagenturen.</TU>
                                </li>
                                <li>
                                    <TU id="5">Beglaubigte Übersetzung von</TU> <strong><TU id="6">Urkunden, Verträgen</TU></strong> <TU id="7">u.a.</TU>
                                </li>
                                <li>
                                    <TU id="8">Schnell und zuverlässig mit Sitz in</TU> <strong>Leipzig-Lindenau</strong>.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                                
                <div className="content-right">
                    <hr className="toggle-hr" />
                    <h2 id="contact" className="section-title contact"><TU id="11">Anfrage</TU></h2>
                    <div className="container">
                        <form
                        action="https://formspree.io/f/moqrbdbj"
                        method="POST"
                        >
                            <label id="name">
                                <TU id="13">Name:</TU>
                            </label>
                            <input type="name" name="name" />
                            <label id="email">
                                <TU id="14">E-Mail:</TU>
                            </label>
                            <input type="email" name="email" />
                            <label id="message">
                                <TU id="15">Nachricht:</TU>
                            </label>
                            <textarea name="message" />      
                            <button type="submit" id="submit"><TU id="16">Absenden</TU></button>
                        </form>
                    </div> 
                </div>
            </div>
            {
            contextLanguage === "de" &&
            <div id="secondary-content"> 
                <hr />
                <h2>Mehr über mich</h2>
                <ul>
                    <li>Brasilianischer Muttersprachler</li>
                    <li>Staatlich geprüfter Übersetzer für Portugiesisch (Hessische Lehrkräfteakademie) seit 2015</li>
                    <li>Öffentlich bestellt und allgemein beeidigt vom Oberlandesgericht Dresden</li>
                    <li>Master in Interkultureller Kommunikation an der Europa-Universität Viadrina</li>
                    <li>Post-Graduate Certificate in Translation an der University of Portsmouth</li>
                </ul>
            </div>
            }
        </>
    )
};

export default Home;