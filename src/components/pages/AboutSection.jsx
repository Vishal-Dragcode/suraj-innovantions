import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, Target, Briefcase, GraduationCap, TrendingUp, Building2, Quote, Calendar, MapPin, Star, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredFounderCard, setHoveredFounderCard] = useState(null);
  const [hoveredStatCard, setHoveredStatCard] = useState(null);

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
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Award, value: '30+', label: 'Years Experience', color: 'indigo' },
    { icon: Users, value: '1000+', label: 'Students Trained', color: 'purple' },
    { icon: Target, value: '100%', label: 'Placement Focus', color: 'blue' },
    { icon: Building2, value: '50+', label: 'Corporate Partners', color: 'green' }
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
        // Using HSLA for more subtle gradient
        statHoverBg: "linear-gradient(135deg, hsla(238, 84%, 67%, 0.9), hsla(262, 83%, 58%, 0.9))",
        // Darker gradient for text contrast
        statHoverBgDark: "linear-gradient(135deg, hsla(238, 84%, 57%, 0.95), hsla(262, 83%, 48%, 0.95))",
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
        // Using HSLA for more subtle gradient
        statHoverBg: "linear-gradient(135deg, hsla(262, 83%, 58%, 0.9), hsla(285, 79%, 60%, 0.9))",
        // Darker gradient for text contrast
        statHoverBgDark: "linear-gradient(135deg, hsla(262, 83%, 48%, 0.95), hsla(285, 79%, 50%, 0.95))",
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
        // Using HSLA for more subtle gradient
        statHoverBg: "linear-gradient(135deg, hsla(211, 98%, 52%, 0.9), hsla(197, 96%, 48%, 0.9))",
        // Darker gradient for text contrast
        statHoverBgDark: "linear-gradient(135deg, hsla(211, 98%, 42%, 0.95), hsla(197, 96%, 38%, 0.95))",
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
        // Using HSLA for more subtle gradient
        statHoverBg: "linear-gradient(135deg, hsla(142, 71%, 45%, 0.9), hsla(158, 64%, 42%, 0.9))",
        // Darker gradient for text contrast
        statHoverBgDark: "linear-gradient(135deg, hsla(142, 71%, 35%, 0.95), hsla(158, 64%, 32%, 0.95))",
      },
    };
    return colorMap[color] || colorMap.indigo;
  };

  const calculate3DTransform = (depth = 25) => {
    if (!sectionRef.current) return {};
    
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((mousePosition.x - centerX) / centerX) * depth;
    const rotateX = -((mousePosition.y - centerY) / centerY) * depth;
    
    return {
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.05s ease-out'
    };
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-6 relative overflow-hidden"
      style={{ 
        perspective: '1200px',
       
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern with enhanced 3D effect and colors */}
      <div 
        className={`absolute top-0 right-0 w-64 h-64  rounded-full filter blur-3xl transition-all duration-500 ${isVisible ? 'opacity-40 scale-100' : 'opacity-0 scale-75'}`}
        style={{
          ...calculate3DTransform(15),
          animation: 'float 4s ease-in-out infinite',
          transition: 'transform 0.05s ease-out'
        }}
      ></div>
      <div 
        className={`absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full filter blur-3xl transition-all duration-500 delay-300 ${isVisible ? 'opacity-40 scale-100' : 'opacity-0 scale-75'}`}
        style={{
          ...calculate3DTransform(10),
          animation: 'float 5s ease-in-out infinite reverse',
          transition: 'transform 0.05s ease-out'
        }}
      ></div>
      <div 
        className={`absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full filter blur-3xl transition-all duration-500 delay-500 ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-75'}`}
        style={{
          ...calculate3DTransform(5),
          animation: 'float 6s ease-in-out infinite',
          transition: 'transform 0.05s ease-out'
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with enhanced 3D effect */}
          <div 
            className={`text-center mb-8 transition-all duration-500 transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
            style={{
              transformStyle: 'preserve-3d',
              transform: isVisible ? 'translateZ(0)' : 'translateZ(-50px)',
              ...calculate3DTransform(5)
            }}
          >
            <div 
              className="inline-flex items-center bg-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-md"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(30px)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                transition: 'transform 0.1s ease-out'
              }}
            >
              <Star className="w-4 h-4 mr-2 text-blue-600" />
              Empowering Future Leaders
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Suraj Innovations</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bridging gap between academic excellence and industry success
            </p>
          </div>

          {/* Stats Section with enhanced 3D cards and hover color effects */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8`}>
            {stats.map((stat, index) => {
              const colorClasses = getColorClasses(stat.color);
              return (
                <div 
                  key={index}
                  className={`rounded-xl shadow-lg p-4 text-center transition-all duration-300 transform-gpu ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transformStyle: 'preserve-3d',
                    transform: isVisible 
                      ? `translateZ(0) rotateY(${index % 2 === 0 ? 0 : 5}deg)` 
                      : 'translateZ(-50px) rotateY(0)',
                    transition: 'transform 0.1s ease-out, box-shadow 0.2s ease-out, background 0.3s ease-out',
                    background: hoveredStatCard === index 
                      ? colorClasses.statHoverBgDark 
                      : '#ffffff'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(40px) rotateY(15deg) rotateX(-15deg) scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(0, 0, 0, 0.3)';
                    setHoveredStatCard(index);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translateZ(0) rotateY(${index % 2 === 0 ? 0 : 5}deg) rotateX(0) scale(1)`;
                    e.currentTarget.style.boxShadow = '';
                    setHoveredStatCard(null);
                  }}
                >
                  <div className={`w-12 h-12 ${colorClasses.iconBg} rounded-xl flex items-center justify-center mx-auto mb-3`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: 'translateZ(25px) rotateY(20deg)',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                      transition: 'transform 0.1s ease-out, background-color 0.3s ease-out',
                      backgroundColor: hoveredStatCard === index ? 'rgba(255, 255, 255, 0.2)' : ''
                    }}
                  >
                    <stat.icon className={`w-6 h-6 ${colorClasses.iconText}`} 
                      style={{ color: hoveredStatCard === index ? '#ffffff' : '' }} 
                    />
                  </div>
                  <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${hoveredStatCard === index ? 'text-white' : 'text-gray-900'}`} style={{ transform: 'translateZ(15px)' }}>{stat.value}</h3>
                  <p className={`text-xs transition-colors duration-300 ${hoveredStatCard === index ? 'text-white' : 'text-gray-600'}`} style={{ transform: 'translateZ(10px)' }}>{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid with enhanced 3D effects */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Mission with enhanced 3D card effect */}
            <div 
              className={`rounded-xl shadow-lg p-6 transition-all duration-500 transform-gpu ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${hoveredCard === 'left' ? 'bg-gradient-to-br from-indigo-500 to-indigo-700 text-white' : 'bg-white text-gray-900'}`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isVisible 
                  ? 'translateZ(0) rotateY(-5deg)' 
                  : 'translateZ(-50px) rotateY(0)',
                transition: 'transform 0.2s ease-out, background 0.3s ease-out, color 0.3s ease-out',
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateZ(40px) rotateY(0deg) rotateX(-15deg) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(0,0,0,0.25)';
                setHoveredCard('left');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateZ(0) rotateY(-5deg) rotateX(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                setHoveredCard(null);
              }}
            >
              <h3 className={`text-xl font-bold mb-4 flex items-center ${hoveredCard === 'left' ? 'text-white' : 'text-gray-900'}`} style={{ transform: 'translateZ(20px)' }}>
                <Target className={`w-5 h-5 mr-2 ${hoveredCard === 'left' ? 'text-blue-300' : 'text-blue-600'}`} />
                Our Mission
              </h3>
              
              <div className="space-y-3">
                {[
                  'Provide practical corporate exposure',
                  'Empower SMEs with big-company systems',
                  'Bridge academia and industry gap'
                ].map((item, index) => (
                  <div key={index} className="flex items-start" style={{ transform: `translateZ(${10 + index * 3}px)` }}>
                    <CheckCircle className={`w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ${hoveredCard === 'left' ? 'text-green-300' : 'text-green-500'}`} />
                    <p className={`text-sm ${hoveredCard === 'left' ? 'text-gray-100' : 'text-gray-700'}`}>{item}</p>
                  </div>
                ))}
              </div>
              
              <button 
                className={`mt-4 font-semibold flex items-center transition-colors text-sm ${hoveredCard === 'left' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'}`}
                style={{ transform: 'translateZ(15px)' }}
              >
                Learn More
                <ArrowRight className="ml-1 w-3 h-3" />
              </button>
            </div>
            
            {/* Quote with enhanced 3D depth effect */}
            <div 
              className={`rounded-xl p-6 text-white relative overflow-hidden transition-all duration-500 transform-gpu ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${hoveredCard === 'middle' ? 'bg-white text-gray-900' : 'bg-gradient-to-br from-purple-500 to-purple-700'}`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isVisible 
                  ? 'translateZ(0)' 
                  : 'translateZ(-50px)',
                transition: 'transform 0.2s ease-out, background 0.3s ease-out, color 0.3s ease-out',
                boxShadow: '0 25px 50px rgba(0,0,0,0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateZ(50px) scale(1.05) rotateY(5deg)';
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(0,0,0,0.35)';
                setHoveredCard('middle');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateZ(0) scale(1) rotateY(0)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.25)';
                setHoveredCard(null);
              }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 ${hoveredCard === 'middle' ? 'bg-blue-100 opacity-10' : 'bg-white opacity-5'}`}></div>
              <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full -ml-12 -mb-12 ${hoveredCard === 'middle' ? 'bg-blue-100 opacity-10' : 'bg-white opacity-5'}`}></div>
              
              <Quote 
                className={`w-8 h-8 mb-3 ${hoveredCard === 'middle' ? 'text-blue-600' : 'text-blue-300'}`}
                style={{
                  transform: 'translateZ(30px) rotateY(20deg)',
                  filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))',
                  transition: 'transform 0.1s ease-out, color 0.3s ease-out'
                }}
              />
              <p className={`text-lg mb-4 leading-relaxed ${hoveredCard === 'middle' ? 'text-gray-900' : 'text-white'}`} style={{ transform: 'translateZ(20px)' }}>
                Our mission remains same: guiding commerce and accounting students to gain better practical hands-on corporate exposure.
              </p>
              <div className="flex items-center" style={{ transform: 'translateZ(15px)' }}>
                <div className={`w-12 h-0.5 mr-3 ${hoveredCard === 'middle' ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
                <span className={`font-medium text-sm ${hoveredCard === 'middle' ? 'text-blue-600' : 'text-blue-300'}`}>- Suraj Innovations</span>
              </div>
            </div>
            
            {/* Timeline with enhanced 3D card effect */}
            <div 
              className={`rounded-xl shadow-lg p-6 transition-all duration-500 transform-gpu ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${hoveredCard === 'right' ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white' : 'bg-white text-gray-900'}`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isVisible 
                  ? 'translateZ(0) rotateY(5deg)' 
                  : 'translateZ(-50px) rotateY(0)',
                transition: 'transform 0.2s ease-out, background 0.3s ease-out, color 0.3s ease-out',
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateZ(40px) rotateY(0deg) rotateX(-15deg) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(0,0,0,0.25)';
                setHoveredCard('right');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateZ(0) rotateY(5deg) rotateX(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                setHoveredCard(null);
              }}
            >
              <h3 className={`text-xl font-bold mb-4 ${hoveredCard === 'right' ? 'text-white' : 'text-gray-900'}`} style={{ transform: 'translateZ(20px)' }}>Our Journey</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div 
                    className={`${hoveredCard === 'right' ? 'bg-blue-800 text-blue-200' : 'bg-blue-100 text-blue-600'} rounded-lg p-2 mr-3`}
                    style={{
                      transform: 'translateZ(20px) rotateY(20deg)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                      transition: 'transform 0.1s ease-out, background 0.3s ease-out, color 0.3s ease-out'
                    }}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div style={{ transform: 'translateZ(10px)' }}>
                    <h4 className={`text-lg font-semibold ${hoveredCard === 'right' ? 'text-white' : 'text-gray-900'}`}>Suraj Academy</h4>
                    <p className={`${hoveredCard === 'right' ? 'text-blue-300' : 'text-blue-600'} font-medium text-sm`}>1995</p>
                    <p className={`${hoveredCard === 'right' ? 'text-gray-200' : 'text-gray-600'} text-xs mt-1`}>Chandrapur, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className={`${hoveredCard === 'right' ? 'bg-purple-800 text-purple-200' : 'bg-purple-100 text-purple-600'} rounded-lg p-2 mr-3`}
                    style={{
                      transform: 'translateZ(20px) rotateY(20deg)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                      transition: 'transform 0.1s ease-out, background 0.3s ease-out, color 0.3s ease-out'
                    }}
                  >
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div style={{ transform: 'translateZ(10px)' }}>
                    <h4 className={`text-lg font-semibold ${hoveredCard === 'right' ? 'text-white' : 'text-gray-900'}`}>Suraj Innovations</h4>
                    <p className={`${hoveredCard === 'right' ? 'text-purple-300' : 'text-purple-600'} font-medium text-sm`}>2025</p>
                    <p className={`${hoveredCard === 'right' ? 'text-gray-200' : 'text-gray-600'} text-xs mt-1`}>Ajman Freezone, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Section with enhanced 3D card effect */}
          <div 
            className={` rounded-2xl p-8 transition-all duration-700 transform-gpu ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transformStyle: 'preserve-3d',
              transform: isVisible 
                ? 'translateZ(0)' 
                : 'translateZ(-50px)',
              transition: 'transform 0.3s ease-out',
              boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateZ(30px) rotateX(-5deg) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 40px 80px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateZ(0) rotateX(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
            }}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="relative">
                  {/* Founder Photo with enhanced 3D effect and frame */}
                  <div 
                    className="w-56 h-56 mx-auto rounded-full overflow-hidden relative shadow-2xl"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: 'translateZ(40px) rotateY(-10deg)',
                      transition: 'transform 0.3s ease-out',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.25)'
                    }}
                  >
                    <div className="absolute inset-0  rounded-full"></div>
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOv0KoGHJx1IiQhd9RzPmbHSYBacjLdmWyw&s"
                      alt="Sachin Birewar - Founder of Suraj Innovations" 
                      className="w-full h-full object-cover rounded-full border-4 border-white"
                    />
                  </div>
                  
                  {/* Name badge with enhanced styling */}
                  <div 
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl px-6 py-3 shadow-xl"
                    style={{
                      transform: 'translateZ(60px)',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                    }}
                  >
                    <p className="text-sm font-bold text-gray-900">Sachin Birewar</p>
                    <p className="text-xs text-indigo-600 font-medium">Founder & CEO</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ transform: 'translateZ(20px)' }}>
                  Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Founder</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Experience Card with Enhanced Hover Effects */}
                  <div 
                    className={`bg-white rounded-xl p-5 shadow-lg border border-gray-100 transition-all duration-300 ${
                      hoveredFounderCard === 'experience' ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white' : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: hoveredFounderCard === 'experience' 
                        ? 'translateZ(30px) rotateY(10deg) rotateX(-5deg) scale(1.05)' 
                        : 'translateZ(20px)',
                      transition: 'transform 0.3s ease-out, background 0.3s ease-out, color 0.3s ease-out',
                      boxShadow: hoveredFounderCard === 'experience' 
                        ? '0 25px 50px rgba(59, 130, 246, 0.25)' 
                        : '0 15px 30px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={() => setHoveredFounderCard('experience')}
                    onMouseLeave={() => setHoveredFounderCard(null)}
                  >
                    <div className="flex items-center mb-3" style={{ transform: 'translateZ(10px)' }}>
                      <div className={`w-10 h-10 ${hoveredFounderCard === 'experience' ? 'bg-white/20' : 'bg-blue-100'} rounded-lg flex items-center justify-center mr-3 transition-colors duration-300`}>
                        <Briefcase className={`w-5 h-5 ${hoveredFounderCard === 'experience' ? 'text-white' : 'text-blue-600'} transition-colors duration-300`} />
                      </div>
                      <h4 className={`text-lg font-semibold ${hoveredFounderCard === 'experience' ? 'text-white' : 'text-gray-900'}`}>Experience</h4>
                    </div>
                    <p className={`text-base font-medium ${hoveredFounderCard === 'experience' ? 'text-white' : 'text-gray-700'}`} style={{ transform: 'translateZ(5px)' }}>30+ Years MNC Finance Leadership</p>
                    <div className="mt-3 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${hoveredFounderCard === 'experience' ? 'bg-white' : 'bg-gradient-to-r from-blue-500 to-blue-600'} rounded-full transition-all duration-500`} style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  {/* Qualifications Card with Enhanced Hover Effects */}
                  <div 
                    className={`bg-white rounded-xl p-5 shadow-lg border border-gray-100 transition-all duration-300 ${
                      hoveredFounderCard === 'qualifications' ? 'bg-gradient-to-br from-purple-500 to-purple-700 text-white' : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: hoveredFounderCard === 'qualifications' 
                        ? 'translateZ(30px) rotateY(10deg) rotateX(-5deg) scale(1.05)' 
                        : 'translateZ(20px)',
                      transition: 'transform 0.3s ease-out, background 0.3s ease-out, color 0.3s ease-out',
                      boxShadow: hoveredFounderCard === 'qualifications' 
                        ? '0 25px 50px rgba(147, 51, 234, 0.25)' 
                        : '0 15px 30px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={() => setHoveredFounderCard('qualifications')}
                    onMouseLeave={() => setHoveredFounderCard(null)}
                  >
                    <div className="flex items-center mb-3" style={{ transform: 'translateZ(10px)' }}>
                      <div className={`w-10 h-10 ${hoveredFounderCard === 'qualifications' ? 'bg-white/20' : 'bg-purple-100'} rounded-lg flex items-center justify-center mr-3 transition-colors duration-300`}>
                        <GraduationCap className={`w-5 h-5 ${hoveredFounderCard === 'qualifications' ? 'text-white' : 'text-purple-600'} transition-colors duration-300`} />
                      </div>
                      <h4 className={`text-lg font-semibold ${hoveredFounderCard === 'qualifications' ? 'text-white' : 'text-gray-900'}`}>Qualifications</h4>
                    </div>
                    <p className={`text-base font-medium ${hoveredFounderCard === 'qualifications' ? 'text-white' : 'text-gray-700'}`} style={{ transform: 'translateZ(5px)' }}>B.Com, CMA (India), MBA (UK)</p>
                    <div className="mt-3 flex gap-2">
                      <span className={`px-2 py-1 ${hoveredFounderCard === 'qualifications' ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700'} text-xs rounded-full font-medium transition-colors duration-300`}>CMA</span>
                      <span className={`px-2 py-1 ${hoveredFounderCard === 'qualifications' ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700'} text-xs rounded-full font-medium transition-colors duration-300`}>MBA</span>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`bg-white rounded-xl p-5 shadow-lg border border-gray-100 transition-all duration-300 ${
                    hoveredFounderCard === 'keyroles' ? 'bg-gradient-to-br from-green-500 to-green-700 text-white' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: hoveredFounderCard === 'keyroles' 
                      ? 'translateZ(30px) rotateY(10deg) rotateX(-5deg) scale(1.03)' 
                      : 'translateZ(20px)',
                    transition: 'transform 0.3s ease-out, background 0.3s ease-out, color 0.3s ease-out',
                    boxShadow: hoveredFounderCard === 'keyroles' 
                      ? '0 25px 50px rgba(16, 185, 129, 0.25)' 
                      : '0 15px 30px rgba(0,0,0,0.15)'
                  }}
                  onMouseEnter={() => setHoveredFounderCard('keyroles')}
                  onMouseLeave={() => setHoveredFounderCard(null)}
                >
                  <div className="flex items-center mb-4" style={{ transform: 'translateZ(10px)' }}>
                    <div className={`w-10 h-10 ${hoveredFounderCard === 'keyroles' ? 'bg-white/20' : 'bg-green-100'} rounded-lg flex items-center justify-center mr-3 transition-colors duration-300`}>
                      <TrendingUp className={`w-5 h-5 ${hoveredFounderCard === 'keyroles' ? 'text-white' : 'text-green-600'} transition-colors duration-300`} />
                    </div>
                    <h4 className={`text-lg font-semibold ${hoveredFounderCard === 'keyroles' ? 'text-white' : 'text-gray-900'}`}>Key Roles</h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className={`${hoveredFounderCard === 'keyroles' ? 'bg-white/20' : 'bg-gray-50'} rounded-lg p-3 transition-colors duration-300`} style={{ transform: 'translateZ(5px)' }}>
                      <p className={`font-semibold text-sm ${hoveredFounderCard === 'keyroles' ? 'text-white' : 'text-gray-900'} mb-1`}>Chief of Finance</p>
                      <p className={`text-xs ${hoveredFounderCard === 'keyroles' ? 'text-gray-200' : 'text-gray-600'}`}>MC Bauchemie, UAE</p>
                    </div>
                    <div className={`${hoveredFounderCard === 'keyroles' ? 'bg-white/20' : 'bg-gray-50'} rounded-lg p-3 transition-colors duration-300`} style={{ transform: 'translateZ(5px)' }}>
                      <p className={`font-semibold text-sm ${hoveredFounderCard === 'keyroles' ? 'text-white' : 'text-gray-900'} mb-1`}>Regional Finance Director</p>
                      <p className={`text-xs ${hoveredFounderCard === 'keyroles' ? 'text-gray-200' : 'text-gray-600'}`}>Univar</p>
                    </div>
                    <div className={`${hoveredFounderCard === 'keyroles' ? 'bg-white/20' : 'bg-gray-50'} rounded-lg p-3 transition-colors duration-300`} style={{ transform: 'translateZ(5px)' }}>
                      <p className={`font-semibold text-sm ${hoveredFounderCard === 'keyroles' ? 'text-white' : 'text-gray-900'} mb-1`}>Finance Manager</p>
                      <p className={`text-xs ${hoveredFounderCard === 'keyroles' ? 'text-gray-200' : 'text-gray-600'}`}>Al Gurg Fosroc, UAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-30px) rotateX(5deg); }
          100% { transform: translateY(0px) rotateX(0deg); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;