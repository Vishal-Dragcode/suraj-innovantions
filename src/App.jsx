import { useState } from "react";
import "./App.css";
import Navbar from "./components/static/Navbar.jsx";
import Footer from "./components/static/Footer.jsx";
import HeroSection from "./components/pages/HeroSection.jsx";
import AboutSection from "./components/pages/about.jsx";
import ProgramsSection from "./components/pages/ProgramsSection.jsx";
import ServicesSection from "./components/pages/ServicesSection.jsx";
import ContactSection from "./components/pages/ContactSection.jsx";
import WhatsAppButton from "./components/pages/WhatsAppButton.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> 
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ServicesSection />
        <ContactSection />
      </main>
       <WhatsAppButton phoneNumber="+971547291064" message="Hello, I'm interested in your services" />
      <Footer />
    </div>
  );
}

export default App;