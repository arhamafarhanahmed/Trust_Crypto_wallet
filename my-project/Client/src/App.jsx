import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import PlatformFeatures from "./Components/PlateformFeautures";
import CryptoSection from "./Components/CryptoSection";
import SecuritySection from "./Components/SecuritySection";
import WalletSection from "./Components/WalletSection";
import ExperiencedSection from "./Components/ExperiencedSection";
import BuildingTrust from "./Components/BuildingTrust";
import EndSection from "./Components/EndSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PlatformFeatures />
      <CryptoSection />
      <SecuritySection />
      <WalletSection />
      <ExperiencedSection/>
      <BuildingTrust/>
      <EndSection/>

      <Routes>
      <Route path="/" element={<Home />} />
      <Routes/>

      
    </div>
  );
};

export default App;
