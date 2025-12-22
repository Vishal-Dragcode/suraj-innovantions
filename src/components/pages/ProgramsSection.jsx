import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle, Award, Users, Target, Calendar, DollarSign, 
  ArrowRight, Sparkles, BookOpen, TrendingUp, UserCheck, 
  Star, Zap, Shield, Clock
} from 'lucide-react';


const ProgramsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [activeProgram, setActiveProgram] = useState(0);
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

  const handleScheduleConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: UserCheck,  label: 'Learn In real company environment', gradient: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, label: 'Learn Basic Roles in Accounting Department', gradient: 'from-purple-500 to-pink-500' },
    { icon: Star,  label: 'Mentored by Industry Experts', gradient: 'from-orange-500 to-red-500' },
    { icon: Award,  label: 'Get benefit of Sachin Birewar\'s corporate network.', gradient: 'from-green-500 to-emerald-500' }
  ];

  const programs = [
    {
      title: "Executive Accountant",
      subtitle: "Fresh Graduates / Entry Level",
      duration: "1 Month",
      fee: "AED 3,000",
      icon: BookOpen,
      gradient: 'from-blue-600 to-cyan-600',
      features: [
        'Real-World Finance Simulation',
        'Dedicated Training Sessions',
        'Corporate Exposure Programs',
        'Hands-On Practical Training'
      ]
    },
    {
      title: "Finance Manager",
      subtitle: "Senior Accountants (5-6 years)",
      duration: "2 Weeks",
      fee: "AED 6,000",
      icon: TrendingUp,
      gradient: 'from-purple-600 to-pink-600',
      features: [
        'Budgets & Forecasting',
        'Business Performance Analysis',
        'Strategic Decision Making',
        'Leadership Development'
      ]
    },
    {
      title: "Own Business Accounting",
      subtitle: "Finance Leaders (8+ years)",
      duration: "1 Month",
      fee: "AED 3000",
      icon: Target,
      gradient: 'from-indigo-600 to-blue-600',
      features: [
        'Setup Your Business Model',
        'Learn Business Accounting',
        'Create Performance Reports',
        'Get Control On Your Numbers'
      ]
    }
  ];


  return (
    <section 
      id="programs"
      ref={sectionRef}
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
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >

    

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Sparkles className="w-4 h-4" />
              Suraj Incubator Programs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Career</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-world simulation bringing corporate experience to make you Job-Ready
            </p>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  transform: hoveredStat === index ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
                  transitionDelay: `${index * 50}ms`
                }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">{stat.value}</h3>
                  <p className="text-sm text-gray-1000 text-center group-hover:text-white/90 transition-colors duration-300 mt-1">{stat.label}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
              </div>
            ))}
          </div>

          {/* Program Tabs */}
          <div className={`flex justify-center mb-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white rounded-xl shadow-lg p-1.5 inline-flex gap-1 flex-wrap justify-center">
              {programs.map((program, index) => (
                <button
                  key={index}
                  className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    activeProgram === index
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setActiveProgram(index)}
                >
                  {program.title}
                </button>
              ))}
            </div>
          </div>

          {/* Programs Grid */}
          <div className={`grid lg:grid-cols-3 gap-6 mb-10 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {programs.map((program, index) => (
              <div 
                key={index}
                id={`program-${index}`}
                className={`group relative rounded-2xl shadow-lg transition-all duration-500 overflow-hidden cursor-pointer w-full ${
                  activeProgram === index 
                    ? 'shadow-xl transform scale-105' 
                    : 'hover:shadow-xl transform scale-100'
                }`}
                style={{
                  transform: activeProgram === index 
                    ? 'translateY(-5px) scale(1.02)' 
                    : hoveredCard === index 
                      ? 'translateY(-3px)' 
                      : 'translateY(0)',
                  transition: 'all 0.3s ease-out'
                }}
                onClick={() => setActiveProgram(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative bg-white rounded-2xl h-full">
                  {/* Header with Gradient */}
                  <div className={`relative bg-gradient-to-r ${program.gradient} text-white p-4 overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${
                        activeProgram === index ? 'scale-110 rotate-12' : 'scale-100'
                      }`}>
                        <program.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-base font-bold mb-1">{program.title}</h3>
                      <p className="text-white/90 text-xs">{program.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Duration and Fee */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="font-semibold text-sm text-gray-900">{program.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                         <img src="https://aiadvocate.s3.ap-south-1.amazonaws.com/DirhamIcon.png" alt="Dirham" className="w-4 h-4 color-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Fee</p>
                          <p className="font-semibold text-sm text-gray-900">{program.fee}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-sm text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeProgram === index
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-md'
                    }`}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

         

          {/* CTA Section */}
          <div className={`bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 shadow-2xl transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Zap className="w-4 h-4" />
                Start Your Journey Today
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Career & Business?</span>
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Get the right skills and experience to accelerate your  <span className='  font-bold'>Career & Business</span> growth
              </p>
              <button 
                onClick={handleScheduleConsultation}
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg cursor-pointer"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
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

export default ProgramsSection;