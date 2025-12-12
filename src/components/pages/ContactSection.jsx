import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, Globe, CheckCircle, AlertCircle, RefreshCw, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Sparkles } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    captchaAnswer: ""
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
    captchaAnswer: false
  });
  const [captcha, setCaptcha] = useState({
    num1: 0,
    num2: 0,
    answer: 0
  });
  const [captchaError, setCaptchaError] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);
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

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({
      num1,
      num2,
      answer: num1 + num2
    });
    setFormData({
      ...formData,
      captchaAnswer: ""
    });
    setCaptchaError(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setIsFocused({
      ...isFocused,
      [field]: true
    });
  };

  const handleBlur = (field) => {
    setIsFocused({
      ...isFocused,
      [field]: false
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please fill in all required fields."
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please enter a valid email address."
      });
      return false;
    }
    
    if (parseInt(formData.captchaAnswer) !== captcha.answer) {
      setCaptchaError(true);
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please answer captcha correctly."
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We will get back to you soon."
    });
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "", captchaAnswer: "" });
      setFormStatus({ submitted: false, error: false, message: "" });
      generateCaptcha();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Location",
      content: "Barsha Heights, Dubai / Ajman Freezone, Ajman UAE",
      link: "https://maps.app.goo.gl/QwPVHiQzEKCZLJ2f6",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      title: "WhatsApp",
      content: "+971 54 279 1064",
      link: "tel:+9715542791064",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email",
      content: "info@surajinnovations.com",
      link: "mailto:info@surajinnovations.com",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: "Working Hours",
      content: "Mon - Fri: 9 am to 5 pm",
      link: null,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="py-12 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Sparkles className="w-4 h-4" />
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Connect</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to transform your career or business? Reach out to us today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div 
                className={`transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    {contactInfo.map((item, index) => (
                      <div 
                        key={index} 
                        className="group relative bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
                        style={{
                          transform: hoveredContact === index ? "translateY(-5px)" : "translateY(0)",
                          transitionDelay: `${index * 50}ms`
                        }}
                        onMouseEnter={() => setHoveredContact(index)}
                        onMouseLeave={() => setHoveredContact(null)}
                      >
                        <div 
                          className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        ></div>
                        
                        <div className="relative z-10 flex items-start">
                          <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 mr-3 transition-all duration-300 group-hover:scale-110`}>
                            {React.cloneElement(item.icon, { className: "w-5 h-5 text-white" })}
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                            {item.link ? (
                              <a 
                                href={item.link} 
                                target={item.title === "Location" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center text-sm"
                              >
                                {item.content}
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </a>
                            ) : (
                              <p className="text-gray-600 text-sm">{item.content}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href="https://maps.app.goo.gl/QwPVHiQzEKCZLJ2f6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all transform hover:scale-105 shadow-md"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      Find Us
                    </a>
                    <a 
                      href="tel:+9715542791064" 
                      className="flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all transform hover:scale-105 shadow-md"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div 
                className={`transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-3">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    Send us a Message
                  </h3>
                  
                  {formStatus.submitted && (
                    <div className={`p-3 rounded-xl mb-4 flex items-start ${
                      formStatus.error ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
                    }`}>
                      {formStatus.error ? (
                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm">{formStatus.message}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <input 
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus("name")}
                          onBlur={() => handleBlur("name")}
                          placeholder="Your Name" 
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all text-sm ${
                            isFocused.name ? "border-blue-600 shadow-md bg-white" : "border-gray-200 bg-gray-50"
                          }`}
                        />
                        <div className={`absolute right-3 top-3 transition-opacity ${
                          formData.name ? "opacity-100" : "opacity-0"
                        }`}>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <input 
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus("email")}
                          onBlur={() => handleBlur("email")}
                          placeholder="Your Email" 
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all text-sm ${
                            isFocused.email ? "border-blue-600 shadow-md bg-white" : "border-gray-200 bg-gray-50"
                          }`}
                        />
                        <div className={`absolute right-3 top-3 transition-opacity ${
                          formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "opacity-100" : "opacity-0"
                        }`}>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus("phone")}
                        onBlur={() => handleBlur("phone")}
                        placeholder="Your Phone (Optional)" 
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all text-sm ${
                          isFocused.phone ? "border-blue-600 shadow-md bg-white" : "border-gray-200 bg-gray-50"
                        }`}
                      />
                      <div className={`absolute right-3 top-3 transition-opacity ${
                          formData.phone ? "opacity-100" : "opacity-0"
                        }`}>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                    </div>
                    
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus("message")}
                        onBlur={() => handleBlur("message")}
                        rows="4" 
                        placeholder="Your Message" 
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all resize-none text-sm ${
                          isFocused.message ? "border-blue-600 shadow-md bg-white" : "border-gray-200 bg-gray-50"
                        }`}
                      ></textarea>
                      <div className={`absolute right-3 top-3 transition-opacity ${
                          formData.message ? "opacity-100" : "opacity-0"
                        }`}>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                    </div>
                    
                    {/* Captcha Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Security Check</span>
                        <button 
                          type="button"
                          onClick={generateCaptcha}
                          className="ml-2 p-1 rounded-full hover:bg-blue-100 transition-colors"
                          title="Refresh captcha"
                        >
                          <RefreshCw className="w-4 h-4 text-blue-600" />
                        </button>
                      </div>
                      <div className="flex items-center">
                        <span className="text-lg font-medium text-blue-600">{captcha.num1} + {captcha.num2} = ?</span>
                      </div>
                      <div className="relative">
                        <input 
                          type="text"
                          name="captchaAnswer"
                          value={formData.captchaAnswer}
                          onChange={handleChange}
                          onFocus={() => handleFocus("captchaAnswer")}
                          onBlur={() => handleBlur("captchaAnswer")}
                          placeholder="Your answer" 
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all text-sm ${
                            isFocused.captchaAnswer || captchaError ? "border-blue-600 shadow-md bg-white" : "border-gray-200 bg-gray-50"
                          } ${captchaError ? "border-red-500" : ""}`}
                        />
                        <div className={`absolute right-3 top-3 transition-opacity ${
                          formData.captchaAnswer && parseInt(formData.captchaAnswer) === captcha.answer ? "opacity-100" : "opacity-0"
                        }`}>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                        {captchaError && (
                          <div className="absolute right-3 top-3">
                            <AlertCircle className="w-5 h-5 text-red-500" />
                          </div>
                        )}
                      </div>
                      {captchaError && (
                        <p className="text-xs text-red-600 mt-1">Incorrect answer. Please try again.</p>
                      )}
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center text-sm shadow-md"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;