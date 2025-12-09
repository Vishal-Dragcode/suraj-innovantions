import React from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppButton = ({ phoneNumber = " +971554801133", message = "Hello, I'm interested in your services" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    // Open WhatsApp with the phone number and pre-filled message
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={24} />
          
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-sm rounded py-2 px-3 whitespace-nowrap">
              Chat with us on WhatsApp
              <div className="absolute top-full right-2 w-0 h-0 border-l-8 border-l-gray-800 border-t-8 border-r-transparent border-b-transparent transform rotate-45"></div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Floating Button */}
      <button
        onClick={handleClick}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={20} />
      </button>
    </>
  );
};

export default WhatsAppButton;