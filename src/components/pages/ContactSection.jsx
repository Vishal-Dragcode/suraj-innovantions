import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, Globe, CheckCircle, AlertCircle, RefreshCw, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captchaAnswer: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
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
      captchaAnswer: ''
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
        message: 'Please fill in all required fields.'
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return false;
    }
    
    if (parseInt(formData.captchaAnswer) !== captcha.answer) {
      setCaptchaError(true);
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please answer captcha correctly.'
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
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '', captchaAnswer: '' });
      setFormStatus({ submitted: false, error: false, message: '' });
      generateCaptcha();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Location",
      content: "Ajman Freezone, UAE",
      link: "https://maps.app.goo.gl/QwPVHiQzEKCZLJ2f6",
      color: "indigo"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      title: "WhatsApp",
      content: "+971 54 7291064",
      link: "tel:+971547291064",
      color: "green"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email",
      content: "info@surajinnovations.com",
      link: "mailto:info@surajinnovations.com",
      color: "purple"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: "Working Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: null,
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      indigo: {
        bg: "from-indigo-500 to-indigo-600",
        lightBg: "bg-indigo-50",
        border: "border-indigo-200",
        text: "text-indigo-600",
        hoverBg: "hover:bg-indigo-50",
        gradientBg: "from-indigo-50 to-indigo-100",
        iconBg: "bg-indigo-100",
        iconText: "text-indigo-600",
        cardBg: "bg-gradient-to-br from-indigo-50 to-blue-50",
        cardHoverBg: "bg-gradient-to-br from-indigo-100 to-blue-100",
      },
      green: {
        bg: "from-green-500 to-green-600",
        lightBg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-600",
        hoverBg: "hover:bg-green-50",
        gradientBg: "from-green-50 to-green-100",
        iconBg: "bg-green-100",
        iconText: "text-green-600",
        cardBg: "bg-gradient-to-br from-green-50 to-emerald-50",
        cardHoverBg: "bg-gradient-to-br from-green-100 to-emerald-100",
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        lightBg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        hoverBg: "hover:bg-purple-50",
        gradientBg: "from-purple-50 to-purple-100",
        iconBg: "bg-purple-100",
        iconText: "text-purple-600",
        cardBg: "bg-gradient-to-br from-purple-50 to-pink-50",
        cardHoverBg: "bg-gradient-to-br from-purple-100 to-pink-100",
      },
      blue: {
        bg: "from-blue-500 to-blue-600",
        lightBg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        hoverBg: "hover:bg-blue-50",
        gradientBg: "from-blue-50 to-blue-100",
        iconBg: "bg-blue-100",
        iconText: "text-blue-600",
        cardBg: "bg-gradient-to-br from-blue-50 to-cyan-50",
        cardHoverBg: "bg-gradient-to-br from-blue-100 to-cyan-100",
      },
    };
    return colorMap[color] || colorMap.indigo;
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="py-6 overflow-hidden relative"
      style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f0f9ff 100%)'
      }}
    >
      {/* Background decoration with animation */}
      <div 
        className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full filter blur-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ animation: 'float 6s ease-in-out infinite' }}
      ></div>
      <div 
        className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full filter blur-3xl transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ animation: 'float 8s ease-in-out infinite reverse' }}
      ></div>
      <div 
        className={`absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full filter blur-3xl transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ animation: 'float 7s ease-in-out infinite' }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center bg-white px-3 py-1 rounded-full text-sm font-medium mb-3 shadow-sm">
            <MessageCircle className="w-3 h-3 mr-1 text-indigo-600" />
            Get In Touch
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight text-black">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Connect</span>
          </h2>
          
          <p className="text-gray-700 max-w-xl mx-auto mb-4 text-sm">
            Ready to transform your career or business? Reach out to us today.
          </p>
          
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-md p-5 h-full border border-indigo-100">
                <h3 className="text-lg font-bold text-black mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-2">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  Contact Information
                </h3>
                
                <div className="space-y-3 mb-5">
                  {contactInfo.map((item, index) => {
                    const colorClasses = getColorClasses(item.color);
                    return (
                      <div 
                        key={index} 
                        className={`flex items-start p-3 rounded-lg transition-all duration-300 ${
                          hoveredContact === index ? colorClasses.cardHoverBg : colorClasses.cardBg
                        }`}
                        style={{ 
                          transitionDelay: `${index * 100 + 300}ms`,
                          transform: hoveredContact === index ? 'translateX(5px)' : 'translateX(0)'
                        }}
                        onMouseEnter={() => setHoveredContact(index)}
                        onMouseLeave={() => setHoveredContact(null)}
                      >
                        <div className={`w-10 h-10 ${colorClasses.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mr-3 transition-all duration-300 ${
                          hoveredContact === index ? 'scale-110' : ''
                        }`}>
                          {React.cloneElement(item.icon, { className: `w-5 h-5 ${colorClasses.iconText}` })}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-black mb-1 text-sm">{item.title}</h4>
                          {item.link ? (
                            <a 
                              href={item.link} 
                              target={item.title === "Location" ? "_blank" : "_self"}
                              rel="noopener noreferrer"
                              className={`${colorClasses.text} hover:underline transition-colors flex items-center text-xs`}
                            >
                              {item.content}
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                          ) : (
                            <p className="text-gray-600 text-xs">{item.content}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-3">
                  <a 
                    href="https://maps.app.goo.gl/QwPVHiQzEKCZLJ2f6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 shadow-md"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Find Us
                  </a>
                  <a 
                    href="tel:+971547291064" 
                    className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 shadow-md"
                  >
                    <Phone className="w-3 h-3 mr-1" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md p-5 border border-purple-100">
                <h3 className="text-lg font-bold text-black mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-2">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  Send us a Message
                </h3>
                
                {formStatus.submitted && (
                  <div className={`p-3 rounded-lg mb-4 flex items-start ${
                    formStatus.error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                  }`}>
                    {formStatus.error ? (
                      <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm">{formStatus.message}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        placeholder="Your Name" 
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none transition-all text-sm bg-white/70 backdrop-blur-sm ${
                          isFocused.name ? 'border-indigo-600 shadow-md' : 'border-gray-300'
                        }`}
                      />
                      <div className={`absolute right-2 top-2 transition-opacity ${
                        formData.name ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        placeholder="Your Email" 
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none transition-all text-sm bg-white/70 backdrop-blur-sm ${
                          isFocused.email ? 'border-indigo-600 shadow-md' : 'border-gray-300'
                        }`}
                      />
                      <div className={`absolute right-2 top-2 transition-opacity ${
                        formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={() => handleBlur('phone')}
                      placeholder="Your Phone (Optional)" 
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none transition-all text-sm bg-white/70 backdrop-blur-sm ${
                        isFocused.phone ? 'border-indigo-600 shadow-md' : 'border-gray-300'
                      }`}
                    />
                    <div className={`absolute right-2 top-2 transition-opacity ${
                      formData.phone ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      rows="3" 
                      placeholder="Your Message" 
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none transition-all resize-none text-sm bg-white/70 backdrop-blur-sm ${
                        isFocused.message ? 'border-indigo-600 shadow-md' : 'border-gray-300'
                      }`}
                    ></textarea>
                    <div className={`absolute right-2 bottom-2 transition-opacity ${
                      formData.message ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  
                  {/* Captcha Section */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg border border-indigo-100">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-700">Security Check</span>
                        <button 
                          type="button"
                          onClick={generateCaptcha}
                          className="ml-2 p-1 rounded-full hover:bg-indigo-100 transition-colors"
                          title="Refresh captcha"
                        >
                          <RefreshCw className="w-3 h-3 text-indigo-600" />
                        </button>
                      </div>
                      <div className="flex items-center">
                        <span className="text-lg font-medium text-indigo-600">{captcha.num1} + {captcha.num2} = ?</span>
                      </div>
                    </div>
                    <div className="relative">
                      <input 
                        type="text"
                        name="captchaAnswer"
                        value={formData.captchaAnswer}
                        onChange={handleChange}
                        onFocus={() => handleFocus('captchaAnswer')}
                        onBlur={() => handleBlur('captchaAnswer')}
                        placeholder="Your answer" 
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none transition-all text-sm bg-white/70 backdrop-blur-sm ${
                          isFocused.captchaAnswer || captchaError ? 'border-indigo-600 shadow-md' : 'border-gray-300'
                        } ${captchaError ? 'border-red-500' : ''}`}
                      />
                      <div className={`absolute right-2 top-2 transition-opacity ${
                        formData.captchaAnswer && parseInt(formData.captchaAnswer) === captcha.answer ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      {captchaError && (
                        <div className="absolute right-2 top-2">
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        </div>
                      )}
                    </div>
                    {captchaError && (
                      <p className="text-xs text-red-600 mt-1">Incorrect answer. Please try again.</p>
                    )}
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center text-sm shadow-md"
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
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(5deg); }
          100% { transform: translateY(0px) rotateX(0deg); }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;  