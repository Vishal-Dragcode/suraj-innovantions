import { useState } from "react";
import "./App.css";
import Navbar from "./components/static/Navbar.jsx";
import Footer from "./components/static/Footer.jsx";
import HeroSection from "./components/pages/HeroSection.jsx";
import AboutSection from "./components/pages/AboutSection.jsx";
import ProgramsSection from "./components/pages/ProgramsSection.jsx";
import ServicesSection from "./components/pages/ServicesSection.jsx";
import ContactSection from "./components/pages/ContactSection.jsx";
import WhatsAppButton from "./components/pages/WhatsAppButton.jsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.jsx";

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handleNavigation = (path) => {
    if (path === '/privacy-policy') {
      setShowPrivacyPolicy(true);
    } else {
      setShowPrivacyPolicy(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigation} /> 
      <main className="flex-grow">
        {showPrivacyPolicy ? (
          <PrivacyPolicy />
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            <ProgramsSection />
            <ServicesSection />
            <ContactSection />
          </>
        )}
      </main>
      <WhatsAppButton phoneNumber="+971547291064" message="Hello, I'm interested in your services" />
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;