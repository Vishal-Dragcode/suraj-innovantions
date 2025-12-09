import React, { useState, useEffect, useRef } from "react";
import {
  Book,
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Briefcase,
  Home,
  User,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Calculator,
  FileText,
  Award,
  Youtube,
} from "lucide-react";
import { BsTiktok } from "react-icons/bs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const dropdownRef = useRef(null);

  // Handle scroll effect and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine which section is currently in view
      const sections = ["home", "about", "courses", "career", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={14} className="mr-1" />
              <span>+971554801133</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-1" />
              <span>info@surajinnovations.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://www.youtube.com/@SurajInnovationsFZE" className="hover:text-blue-400 transition-colors">
              <Youtube size={16} />
            </a>
            {/* <a href="https://www.tiktok.com/@suraj.innovations?_r=1&_t=ZS-91xtRALEwTp" className="hover:text-blue-400 transition-colors">
              < BsTiktok size={16} />
            </a> */}
            <a
              href="https://www.linkedin.com/in/sachinbirewar/"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com/surajinnovations/" className="hover:text-blue-400 transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <header
        className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg py-1" : "shadow-md py-1"
        } ${!isScrolled && "md:top-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center"
              >
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-16 w-auto object-contain"
                />
              </button>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => scrollToSection("home")}
                className={`transition-colors font-medium px-4 py-2 rounded-md flex items-center ${
                  activeSection === "home"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                <Home size={18} className="mr-2" />
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`transition-colors font-medium px-4 py-2 rounded-md flex items-center ${
                  activeSection === "about"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                <User size={18} className="mr-2" />
                About
              </button>

              {/* Courses Dropdown - Compact and Finance Management Related */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`flex items-center transition-colors font-medium px-4 py-2 rounded-md ${
                    activeSection === "courses"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                    scrollToSection("courses");
                  }}
                >
                  <Book size={18} className="mr-2" />
                  Courses
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-100"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="p-4">
                      {/* Executive Accountant */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="bg-blue-100 rounded-full p-2 mr-3">
                            <Calculator size={18} className="text-blue-600" />
                          </div>
                          Executive Accountant
                        </h4>
                        <ul className="space-y-2 text-sm ml-10">
                          <li>
                            <button
                              onClick={() => scrollToSection("exec-accountant")}
                              className="text-gray-600 hover:text-blue-600 block text-left"
                            >
                              Complete Finance Function
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() =>
                                scrollToSection("system-restructuring")
                              }
                              className="text-gray-600 hover:text-blue-600 block text-left"
                            >
                              System Restructuring
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() =>
                                scrollToSection("corporate-exposure")
                              }
                              className="text-gray-600 hover:text-blue-600 block text-left"
                            >
                              Corporate Exposure
                            </button>
                          </li>
                        </ul>
                      </div>

                      {/* Finance Manager */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="bg-green-100 rounded-full p-2 mr-3">
                            <TrendingUp size={18} className="text-green-600" />
                          </div>
                          Finance Manager
                        </h4>
                        <ul className="space-y-2 text-sm ml-10">
                          <li>
                            <button
                              onClick={() => scrollToSection("budgeting")}
                              className="text-gray-600 hover:text-blue-600 block text-left"
                            >
                              Budgets & Forecasting
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => scrollToSection("performance")}
                              className="text-gray-600 hover:text-blue-600 block text-left"
                            >
                              Business Performance Analysis
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => scrollToSection("strategic")}
                              className="text-gray-600 hover:text-blue-600 block text-left"
                            >
                              Strategic Decision Making
                            </button>
                          </li>
                        </ul>
                      </div>

                      {/* CFO Excellence */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="bg-purple-100 rounded-full p-2 mr-3">
                            <Award size={18} className="text-purple-600" />
                          </div>
                          CFO Excellence
                        </h4>
                        <ul className="space-y-2 text-sm ml-10">
                          <li>
                            <button
                              onClick={() =>
                                scrollToSection("strategic-leadership")
                              }
                              className="text-gray-600 hover:text-blue-600 block text-left"
                            >
                              Strategic Financial Leadership
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() =>
                                scrollToSection("investor-relations")
                              }
                              className="text-gray-600 hover:text-blue-600 block text-left"
                            >
                              Investor Relations & Fundraising
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() =>
                                scrollToSection("ma-due-diligence")
                              }
                              className="text-gray-600 hover:text-blue-600 block text-left"
                            >
                              M&A Due Diligence
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Career Tab */}
              <button
                onClick={() => scrollToSection("career")}
                className={`transition-colors font-medium px-4 py-2 rounded-md flex items-center ${
                  activeSection === "career"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                <Briefcase size={18} className="mr-2" />
                Career
              </button>

              {/* Contact Tab */}
              <button
                onClick={() => scrollToSection("contact")}
                className={`transition-colors font-medium px-4 py-2 rounded-md flex items-center ${
                  activeSection === "contact"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                <MessageSquare size={18} className="mr-2" />
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md px-5 py-2 rounded-full transition-colors font-medium"
            >
              Get Started
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className={`flex items-center justify-between transition-colors font-medium py-2 w-full text-left ${
                activeSection === "home"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <span className="flex items-center">
                <Home size={18} className="mr-2" />
                Home
              </span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`flex items-center justify-between transition-colors font-medium py-2 w-full text-left ${
                activeSection === "about"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <span className="flex items-center">
                <User size={18} className="mr-2" />
                About
              </span>
            </button>

            {/* Mobile Courses Dropdown */}
            <div>
              <button
                className={`flex items-center transition-colors font-medium py-2 w-full justify-between ${
                  activeSection === "courses"
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  scrollToSection("courses");
                }}
              >
                <span className="flex items-center">
                  <Book size={18} className="mr-2" />
                  Courses
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="pl-8 py-2 space-y-2 text-sm text-gray-600">
                  <div className="mb-3">
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Calculator size={16} className="mr-2 text-blue-600" />
                      Executive Accountant
                    </h5>
                    <ul className="space-y-1">
                      <li>
                        <button
                          onClick={() => scrollToSection("exec-accountant")}
                          className="hover:text-blue-600 block text-left"
                        >
                          Complete Finance Function
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            scrollToSection("system-restructuring")
                          }
                          className="hover:text-blue-600 block text-left"
                        >
                          System Restructuring
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("corporate-exposure")}
                          className="hover:text-blue-600 block text-left"
                        >
                          Corporate Exposure
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <TrendingUp size={16} className="mr-2 text-green-600" />
                      Finance Manager
                    </h5>
                    <ul className="space-y-1">
                      <li>
                        <button
                          onClick={() => scrollToSection("budgeting")}
                          className="hover:text-blue-600 block text-left"
                        >
                          Budgets & Forecasting
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("performance")}
                          className="hover:text-blue-600 block text-left"
                        >
                          Business Performance Analysis
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("strategic")}
                          className="hover:text-blue-600 block text-left"
                        >
                          Strategic Decision Making
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Award size={16} className="mr-2 text-purple-600" />
                      CFO Excellence
                    </h5>
                    <ul className="space-y-1">
                      <li>
                        <button
                          onClick={() =>
                            scrollToSection("strategic-leadership")
                          }
                          className="hover:text-blue-600 block text-left"
                        >
                          Strategic Financial Leadership
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("investor-relations")}
                          className="hover:text-blue-600 block text-left"
                        >
                          Investor Relations & Fundraising
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("ma-due-diligence")}
                          className="hover:text-blue-600 block text-left"
                        >
                          M&A Due Diligence
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Career Tab */}
            <button
              onClick={() => scrollToSection("career")}
              className={`flex items-center justify-between transition-colors font-medium py-2 w-full text-left ${
                activeSection === "career"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <span className="flex items-center">
                <Briefcase size={18} className="mr-2" />
                Career
              </span>
            </button>

            {/* Contact Tab */}
            <button
              onClick={() => scrollToSection("contact")}
              className={`flex items-center justify-between transition-colors font-medium py-2 w-full text-left ${
                activeSection === "contact"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <span className="flex items-center">
                <MessageSquare size={18} className="mr-2" />
                Contact
              </span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors font-medium w-full mt-4"
            >
              Get Started
            </button>

            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone size={14} className="mr-2" />
                <span>+971 54 7291064</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-2" />
                <span>info@surajinnovations.com</span>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="https://www.youtube.com/@SurajInnovationsFZE"
                  className="hover:text-blue-600 transition-colors"
                >
                  <Youtube size={16} />
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <BsTiktok size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sachinbirewar/"
                  className="hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.instagram.com/surajinnovations/"
                  className="hover:text-blue-600 transition-colors"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`${
          isScrolled ? "h-14" : "h-1 4 md:h-14"
        } transition-all duration-300`}
      ></div>
    </>
  );
};

export default Navbar;
