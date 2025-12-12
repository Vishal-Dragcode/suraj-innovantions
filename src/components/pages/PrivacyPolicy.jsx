import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Eye, Lock, UserCheck, FileText, Mail, Phone, ChevronRight,
  CheckCircle, AlertCircle, Info, Globe, Cookie, Database, Share2
} from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('overview');
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setActiveSection(sectionId);
  };

  const sections = [
    { id: 'overview', title: 'Overview', icon: Info },
    { id: 'collection', title: 'Information We Collect', icon: Database },
    { id: 'usage', title: 'How We Use Your Information', icon: Eye },
    { id: 'sharing', title: 'Information Sharing', icon: Share2 },
    { id: 'security', title: 'Data Security', icon: Lock },
    { id: 'rights', title: 'Your Rights', icon: UserCheck },
    { id: 'cookies', title: 'Cookies & Tracking', icon: Cookie },
    { id: 'changes', title: 'Policy Changes', icon: FileText },
    { id: 'contact', title: 'Contact Us', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-5 h-5" />
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Privacy Matters to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Suraj Innovations</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 bg-white rounded-xl shadow-lg p-4">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Quick Navigation
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                        activeSection === section.id
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4" ref={sectionRef}>
              {/* Overview Section */}
              <section id="overview" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Info className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                </div>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    At Suraj Innovations, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in other ways.
                  </p>
                  <p>
                    By using our website and services, you agree to the collection and use of information in accordance with this policy. If you disagree with any part of this policy, please do not use our website or services.
                  </p>
                </div>
              </section>

              {/* Information We Collect Section */}
              <section id="collection" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    We may collect several types of information from and about users of our website, including:
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-blue-600" />
                      Personal Information
                    </h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Name, email address, phone number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Professional background and qualifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Payment information (processed securely through third-party payment processors)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-600" />
                      Technical Information
                    </h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>IP address and browser type</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Device information and operating system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Pages visited and time spent on our website</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information Section */}
              <section id="usage" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-2">Service Provision</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• To provide our training programs</li>
                        <li>• To process registrations and payments</li>
                        <li>• To communicate with you about your account</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h3 className="font-semibold text-purple-900 mb-2">Communication</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• To respond to your inquiries</li>
                        <li>• To send you updates about our programs</li>
                        <li>• To share relevant educational content</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-semibold text-green-900 mb-2">Improvement</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• To analyze website usage patterns</li>
                        <li>• To improve our programs and services</li>
                        <li>• To enhance user experience</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h3 className="font-semibold text-orange-900 mb-2">Legal Compliance</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• To comply with legal obligations</li>
                        <li>• To protect our rights and interests</li>
                        <li>• To prevent fraudulent activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Information Sharing Section */}
              <section id="sharing" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Share2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
                </div>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    We may share your information in the following circumstances:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Service Providers</h3>
                        <p className="text-sm">We may share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and email delivery.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Legal Requirements</h3>
                        <p className="text-sm">We may disclose your information if required to do so by law or in a good faith belief that such action is necessary to comply with legal obligations.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Business Transfers</h3>
                        <p className="text-sm">In the event of a merger, acquisition, or sale of all or a portion of our assets, user information may be transferred as part of the transaction.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                    <p className="text-sm">
                      <strong>Important:</strong> We do not sell, rent, or otherwise provide your personal information to third parties for their marketing purposes without your explicit consent.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Security Section */}
              <section id="security" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                </div>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Technical Safeguards</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• SSL/TLS encryption for data transmission</li>
                        <li>• Secure password storage</li>
                        <li>• Regular security audits</li>
                        <li>• Firewall protection</li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Organizational Measures</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Employee training on data protection</li>
                        <li>• Restricted access to personal information</li>
                        <li>• Confidentiality agreements</li>
                        <li>• Incident response procedures</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-sm">
                    While we strive to protect your personal information, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
                  </p>
                </div>
              </section>

              {/* Your Rights Section */}
              <section id="rights" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
                </div>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Access</h3>
                        <p className="text-sm">Request access to your personal information and obtain information about how we use it.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Correction</h3>
                        <p className="text-sm">Request correction of inaccurate or incomplete personal information.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Deletion</h3>
                        <p className="text-sm">Request deletion of your personal information, subject to certain legal obligations.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Portability</h3>
                        <p className="text-sm">Request a copy of your personal information in a structured, machine-readable format.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Objection</h3>
                        <p className="text-sm">Object to the processing of your personal information in certain circumstances.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mt-4">
                    <p className="text-sm">
                      To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies Section */}
              <section id="cookies" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Cookies & Tracking Technologies</h2>
                </div>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Types of Cookies We Use</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Essential Cookies:</strong> Required for the website to function</li>
                        <li>• <strong>Performance Cookies:</strong> Collect information on how visitors use our website</li>
                        <li>• <strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
                        <li>• <strong>Targeting Cookies:</strong> Used to deliver content relevant to you</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Managing Your Preferences</h3>
                      <p className="text-sm mb-2">
                        You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                      </p>
                      <p className="text-sm">
                        However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionality may not work.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Policy Changes Section */}
              <section id="changes" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Policy Changes</h2>
                </div>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by:
                  </p>
                  
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Posting the new policy on this page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Updating the "Last updated" date at the top of this policy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Sending you an email notification for significant changes</span>
                    </li>
                  </ul>
                  
                  <p className="mt-4">
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                </div>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
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
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;