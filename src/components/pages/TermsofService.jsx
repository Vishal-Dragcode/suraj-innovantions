import React, { useState, useEffect, useRef } from 'react';
import { FileText, ArrowLeft, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <button 
              onClick={goBack}
              className="flex items-center gap-2 text-white mb-4 hover:text-blue-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-4">
              <FileText className="w-5 h-5" />
              Terms of Service
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Service</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8" ref={sectionRef}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                Welcome to Suraj Innovations. These Terms of Service ("Terms") govern your use of our website, programs, and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
              <p className="mb-6">
                Suraj Innovations provides professional training programs including Executive Accountant, Finance Manager, and Own Business Accounting courses. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
              <p className="mb-6">
                When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <p className="mb-6">
                Payment for our programs must be made in full before the commencement of the course. All fees are non-refundable unless otherwise specified. We reserve the right to change our fees at any time.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation & Refund Policy</h2>
              <p className="mb-6">
                Cancellations must be made at least 7 days before the start of the program to be eligible for a refund. Refunds will be processed within 14 business days of approval.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="mb-6">
                All content, materials, and intellectual property provided through our services are owned by Suraj Innovations and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Conduct</h2>
              <p className="mb-6">
                You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair the service. You must not attempt to gain unauthorized access to our systems.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="mb-6">
                Suraj Innovations shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of our services.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="mb-6">
                These Terms shall be governed by and construed in accordance with the laws of United Arab Emirates, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="mb-6">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified Terms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>info@surajinnovations.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>+971 54 279 1064</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-sm">
                    Suraj Innovations FZE<br />
                    United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;