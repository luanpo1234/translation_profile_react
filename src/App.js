import { Routes, Route } from "react-router-dom";
import LanguageWrapper from "./components/LanguageWrapper";
import Header from "./components/Header";
import Home from "./components/Home";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LanguageWrapper><Home /></LanguageWrapper>} />
            <Route path=":lang/" element={<LanguageWrapper><Home /></LanguageWrapper>} />
            <Route path="impressum" element={<LanguageWrapper><Impressum /></LanguageWrapper>} />
            <Route path=":lang/impressum" element={<LanguageWrapper><Impressum /></LanguageWrapper>} />
            <Route path="datenschutz" element={<LanguageWrapper><Datenschutz /></LanguageWrapper>} />
            <Route path=":lang/datenschutz" element={<LanguageWrapper><Datenschutz /></LanguageWrapper>} />
          </Routes> 
        </main>
        <Footer />
    </div>
  </>
  );
}

export default App;