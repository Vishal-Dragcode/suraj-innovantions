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
import TermsOfService from "./components/pages/TermsofService.jsx";
import OfferingsSection from "./components/pages/OfferingsSection.jsx";


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (path) => {
    console.log("Navigating to:", path);
    if (path === '/privacy-policy') {
      setCurrentPage('privacy-policy');
      window.scrollTo(0, 0);
    } else if (path === '/terms-of-service') {
      setCurrentPage('terms-of-service');
      window.scrollTo(0, 0);
    }else {
      setCurrentPage('home');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} /> 
      <main className="flex-grow">
        {currentPage === 'privacy-policy' ? (
          <PrivacyPolicy />
        ) : currentPage === 'terms-of-service' ? (
          <TermsOfService />
        ): (
          <>
            <HeroSection />
            <AboutSection />
            <OfferingsSection />
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