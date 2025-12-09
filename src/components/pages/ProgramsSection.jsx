import React, { useState, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";

import {
  Calendar,
  Users,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Award,
  BookOpen,
  TrendingUp,
  DollarSign,
  Zap,
  Shield,
  Headphones,
  FileText,
  UserCheck,
  Target,
} from "lucide-react";

const ProgramsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredStatCard, setHoveredStatCard] = useState(null);
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

  // Function to handle navigation to contact section
  const handleScheduleConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculate3DTransform = (depth = 15) => {
    if (!sectionRef.current) return {};
    
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((mousePosition.x - centerX) / centerX) * depth;
    const rotateX = -((mousePosition.y - centerY) / centerY) * depth;
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  const programs = [
    {
      title: "Executive Accountant",
      subtitle: "Fresh Graduates / Entry Level",
      duration: "1 Month",
      fee: "AED 3,000",
      icon: <BookOpen className="w-6 h-6" />,
      color: "indigo",
      features: [
        "Real-world finance simulation",
        "Dedicated training",
        "Corporate exposure",
      ],
    },
    {
      title: "Finance Manager",
      subtitle: "Senior Accountants (5-6 years experience)",
      duration: "2 Weeks",
      fee: "AED 6,000",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "purple",
      features: [
        "Budgets & Forecasting",
        "Business Performance Analysis",
        "Strategic Decision Making",
      ],
    },
    {
      title: "CFO Excellence",
      subtitle: "Finance Leaders (8+ years experience)",
      duration: "1 Week",
      fee: "AED 10,000",
      icon: <Target className="w-6 h-6" />,
      color: "blue",
      features: [
        "Strategic Financial Leadership",
        "Investor Relations & Fundraising",
        "M&A Due Diligence",
      ],
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Graduates",
      icon: <UserCheck className="w-4 h-4" />,
      color: "indigo"
    },
    {
      value: "95%",
      label: "Placement Rate",
      icon: <TrendingUp className="w-4 h-4" />,
      color: "purple"
    },
    {
      value: "4.8/5",
      label: "Average Rating",
      icon: <Star className="w-4 h-4" />,
      color: "blue"
    },
    {
      value: "50+",
      label: "Corporate Partners",
      icon: <Award className="w-4 h-4" />,
      color: "green"
    },
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
        statHoverBg: "from-indigo-50 to-indigo-100",
        cardBg: "bg-gradient-to-br from-indigo-50 to-white",
        cardHoverBg: "bg-gradient-to-br from-indigo-100 to-indigo-50",
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
        statHoverBg: "from-purple-50 to-purple-100",
        cardBg: "bg-gradient-to-br from-purple-50 to-white",
        cardHoverBg: "bg-gradient-to-br from-purple-100 to-purple-50",
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
        statHoverBg: "from-blue-50 to-blue-100",
        cardBg: "bg-gradient-to-br from-blue-50 to-white",
        cardHoverBg: "bg-gradient-to-br from-blue-100 to-blue-50",
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
        statHoverBg: "from-green-50 to-green-100",
        cardBg: "bg-gradient-to-br from-green-50 to-white",
        cardHoverBg: "bg-gradient-to-br from-green-100 to-green-50",
      },
    };
    return colorMap[color] || colorMap.indigo;
  };

  return (
    <section
      ref={sectionRef}
      className="py-6 relative overflow-hidden"
      style={{ 
        backgroundColor: "#e9f2ff",
        perspective: '1000px'
      }}
    >
      {/* Background decoration */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full filter blur-3xl opacity-40"
        style={{
          ...calculate3DTransform(5),
          animation: 'float 6s ease-in-out infinite'
        }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full filter blur-3xl opacity-40"
        style={{
          ...calculate3DTransform(5),
          animation: 'float 8s ease-in-out infinite reverse'
        }}
      ></div>

      <div className="container  mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: isVisible ? 'translateZ(0)' : 'translateZ(-50px)',
            ...calculate3DTransform(5)
          }}
        >
          <div 
            className="inline-flex items-center bg-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-sm"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(20px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease-out'
            }}
          >
            <Award className="w-4 h-4 mr-2 text-indigo-600" />
            Suraj Incubator
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Career
            </span>{" "}
            with Our Programs
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Real-world simulation bringing corporate experience to the training
            institute
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const colorClasses = getColorClasses(stat.color);
              return (
                <div
                  key={index}
                  className={`rounded-xl p-5 shadow-sm transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } ${hoveredStatCard === index ? `bg-gradient-to-br ${colorClasses.statHoverBg}` : 'bg-white'}`}
                  style={{ 
                    transitionDelay: `${index * 100 + 300}ms`,
                    transformStyle: 'preserve-3d',
                    transform: isVisible 
                      ? `translateZ(0) rotateY(${index % 2 === 0 ? 0 : 5}deg)` 
                      : 'translateZ(-50px) rotateY(0)',
                    transition: 'transform 0.3s ease-out, background 0.3s ease-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) rotateY(10deg) rotateX(-10deg) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
                    setHoveredStatCard(index);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translateZ(0) rotateY(${index % 2 === 0 ? 0 : 5}deg) rotateX(0) scale(1)`;
                    e.currentTarget.style.boxShadow = '';
                    setHoveredStatCard(null);
                  }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className={`w-14 h-14 ${colorClasses.iconBg} rounded-full flex items-center justify-center`}
                      style={{
                        transform: 'translateZ(10px)',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                      }}
                    >
                      {React.cloneElement(stat.icon, {
                        className: `w-7 h-7 ${colorClasses.iconText}`,
                      })}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 text-center"
                    style={{ transform: 'translateZ(5px)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 text-center mt-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Program Tabs */}
        <div className="flex justify-center mb-8">
          <div 
            className="bg-white rounded-lg shadow-sm p-1 inline-flex"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(10px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}
          >
            {programs.map((program, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                  activeProgram === index
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
                onClick={() => setActiveProgram(index)}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: activeProgram === index ? 'translateZ(5px)' : 'translateZ(0)',
                  transition: 'transform 0.2s ease-out'
                }}
              >
                {program.title}
              </button>
            ))}
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {programs.map((program, index) => {
            const colorClasses = getColorClasses(program.color);
            return (
              <div
                key={index}
                className={`transition-all duration-1000 h-full ${
                  activeProgram === index
                    ? "opacity-100 scale-100"
                    : "opacity-70 scale-95"
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: activeProgram === index 
                    ? 'translateZ(0)' 
                    : 'translateZ(-30px)',
                  transition: 'transform 0.5s ease-out'
                }}
              >
                <div 
                  className={`rounded-xl shadow-md overflow-hidden transition-all duration-500 h-full flex flex-col ${
                    hoveredCard === index ? 'shadow-2xl' : ''
                  } ${hoveredCard === index ? colorClasses.cardHoverBg : colorClasses.cardBg}`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: hoveredCard === index 
                      ? 'translateZ(30px) rotateY(5deg) rotateX(-5deg) scale(1.03)' 
                      : 'translateZ(0)',
                    transition: 'transform 0.3s ease-out, background 0.3s ease-out',
                    boxShadow: hoveredCard === index 
                      ? '0 25px 50px rgba(0,0,0,0.2)' 
                      : '0 4px 6px rgba(0,0,0,0.1)',
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Program Header */}
                  <div
                    className={`bg-gradient-to-r ${
                      colorClasses.bg
                    } text-white p-5 relative`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: 'translateZ(20px)',
                      boxShadow: hoveredCard === index 
                        ? '0 10px 20px rgba(0,0,0,0.2)' 
                        : 'none'
                    }}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-12 -mt-12"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div 
                        className="bg-white bg-opacity-20 rounded-full p-3 mb-3"
                        style={{
                          transformStyle: 'preserve-3d',
                          transform: 'translateZ(10px) rotateY(10deg)',
                          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                          transition: 'transform 0.3s ease-out'
                        }}
                      >
                        <FaUser size={24} color="#000" />
                      </div>

                      <h3 
                        className="text-xl font-bold mb-1"
                        style={{ transform: 'translateZ(5px)' }}
                      >
                        {program.title}
                      </h3>
                      <p 
                        className="text-white opacity-90 text-sm"
                        style={{ transform: 'translateZ(3px)' }}
                      >
                        {program.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="p-5 flex-grow flex flex-col">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div 
                        className="flex items-center"
                        style={{ transform: 'translateZ(5px)' }}
                      >
                        <Calendar className="w-4 h-4 text-indigo-600 mr-2" />
                        <div>
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="font-semibold text-sm">
                            {program.duration}
                          </p>
                        </div>
                      </div>
                      <div 
                        className="flex items-center"
                        style={{ transform: 'translateZ(5px)' }}
                      >
                        <DollarSign className="w-4 h-4 text-indigo-600 mr-2" />
                        <div>
                          <p className="text-xs text-gray-500">Fee</p>
                          <p className="font-semibold text-sm">{program.fee}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 flex-grow">
                      <h4 
                        className="font-semibold text-gray-900 mb-2 flex items-center text-sm"
                        style={{ transform: 'translateZ(5px)' }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start"
                            style={{ transform: `translateZ(${3 + idx}px)` }}
                          >
                            <div 
                              className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5"
                              style={{
                                transform: 'translateZ(5px)',
                                boxShadow: hoveredCard === index 
                                  ? '0 3px 6px rgba(0,0,0,0.1)' 
                                  : 'none'
                              }}
                            >
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <button
                        className={`w-full py-2 rounded-lg font-medium text-sm transition-all flex items-center justify-center ${
                          colorClasses.lightBg
                        } ${colorClasses.text} ${
                          colorClasses.hoverBg
                        }`}
                        style={{
                          transformStyle: 'preserve-3d',
                          transform: hoveredCard === index ? 'translateZ(10px)' : 'translateZ(0)',
                          boxShadow: hoveredCard === index 
                            ? '0 5px 15px rgba(0,0,0,0.1)' 
                            : 'none',
                          transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out'
                        }}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`w-full transition-all rounded-2xl duration-1000 delay-700 mt-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: isVisible ? 'translateZ(0)' : 'translateZ(-50px)',
            ...calculate3DTransform(5)
          }}
        >
          <div 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 w-full py-12 px-6 text-white rounded-2xl"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(10px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          >
            <div className="container mx-auto text-center">
              <h3 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ transform: 'translateZ(20px)' }}
              >
                Ready to Transform Your Career?
              </h3>
              <p 
                className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto"
                style={{ transform: 'translateZ(10px)' }}
              >
                Get the right skills and experience to accelerate your
                professional growth
              </p>
              <button 
                onClick={handleScheduleConsultation}
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 inline-flex items-center justify-center text-lg shadow-lg cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(15px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                }}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
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

export default ProgramsSection;