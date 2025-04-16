import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import PlatformFeatures from "./Components/PlateformFeautures";
import CryptoSection from "./Components/CryptoSection";
import SecuritySection from "./Components/SecuritySection";
import WalletSection from "./Components/WalletSection";
import ExperiencedSection from "./Components/ExperiencedSection";
import BuildingTrust from "./Components/BuildingTrust";
import EndSection from "./Components/EndSection";
import Dashboard from "./Components/Dashboard";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/dashboard" && <Navbar />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <PlatformFeatures />
                <CryptoSection />
                <SecuritySection />
                <WalletSection />
                <ExperiencedSection />
                <BuildingTrust />
                <EndSection />
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

