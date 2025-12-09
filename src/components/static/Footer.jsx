import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Youtube } from 'lucide-react';
import { BsTiktok } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Suraj Innovations</h2>
            </div>
           <p className="text-gray-300 text-sm leading-relaxed mb-6">
  Your trusted partner in making <span className="text-white font-semibold">international education dreams</span> come true. 
  Join our community of successful students studying at world-renowned institutions.
</p>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@SurajInnovationsFZE" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/surajinnovations/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full text-gray-300 hover:text-white hover:bg-pink-600 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/suraj-innovations-fze/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full text-gray-300 hover:text-white hover:bg-blue-500 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a 
                href="https://www.tiktok.com/@suraj.innovations?_r=1&_t=ZS-91xtRALEwTp" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full text-gray-300 hover:text-white hover:bg-sky-500 transition-all duration-300"
              >
                < BsTiktok className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/QwPVHiQzEKCZLJ2f6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  123 Education Plaza, Mumbai, India
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+971547291064" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +971554801133
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a href="mailto:info@surajinnovations.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@surajinnovations.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Centered Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Suraj Innovations. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;