import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Cards from "./components/Cards/Cards";
import InfoBox from "./components/InfoBox/InfoBox";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Cards />
       <InfoBox /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
