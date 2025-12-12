import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, Target, Briefcase, GraduationCap, TrendingUp, Building2, Quote, ArrowRight, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

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

  const stats = [
    { icon: Award, value: '30+', label: 'Years', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Users, value: '1000+', label: 'Students', gradient: 'from-purple-500 to-pink-500' },
    { icon: Target, value: '15+', label: 'Businesses', gradient: 'from-orange-500 to-red-500' },
    { icon: Building2, value: '5+', label: 'Partners', gradient: 'from-green-500 to-emerald-500' }
  ];

  return (
    <section 
      id="about" 
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
              Empowering Students & Empowering Small Business
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Suraj Innovations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bridging the gap between academic excellence and industry success
            </p>
          </div>

          {/* Stats Grid - Compact & Attractive */}
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
                {/* Gradient Background on Hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">{stat.value}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300 mt-1">{stat.label}</p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
              </div>
            ))}
          </div>

          {/* Main Content - 3 Cards Horizontal */}
          <div className={`grid lg:grid-cols-3 gap-5 mb-10 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Mission Card */}
            <div 
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{
                transform: hoveredCard === 'mission' ? 'translateY(-5px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredCard('mission')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-blue-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <Target className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">Our Mission</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    'Provide students practical exposure',
                    'Empower SME with sound business model',
                    // 'Bridge academia-industry gap'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 group-hover:text-green-300 flex-shrink-0 mt-0.5 transition-colors duration-300" />
                      <p className="text-sm text-gray-700 group-hover:text-white/90 transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>

                <button className="mt-5 flex items-center gap-2 text-blue-600 group-hover:text-white font-semibold text-sm group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Quote Card */}
            <div 
              className="group relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-white overflow-hidden"
              style={{
                transform: hoveredCard === 'quote' ? 'translateY(-5px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredCard('quote')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -mr-14 -mt-14"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>
              
              <div className="relative z-10">
                <Quote className="w-10 h-10 text-white/80 mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                <p className="text-base leading-relaxed mb-4 font-medium">
                  "Our mission is to empower accounting students and SME to STAND & SUSTAIN."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-white/40"></div>
                  <span className="text-sm text-white/90 font-semibold">Suraj Innovations</span>
                </div>
              </div>
            </div>

            {/* Journey Card */}
            <div 
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{
                transform: hoveredCard === 'journey' ? 'translateY(-5px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredCard('journey')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-4">Our Journey</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 group-hover:text-white transition-colors duration-300">Suraj Academy</h4>
                      <p className="text-blue-600 group-hover:text-blue-300 font-semibold text-xs transition-colors duration-300">1995</p>
                      <p className="text-gray-600 group-hover:text-white/80 text-xs transition-colors duration-300">Chandrapur, India</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 group-hover:text-white transition-colors duration-300">Suraj Innovations</h4>
                      <p className="text-purple-600 group-hover:text-purple-300 font-semibold text-xs transition-colors duration-300">2025</p>
                      <p className="text-gray-600 group-hover:text-white/80 text-xs transition-colors duration-300">Ajman, UAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Section - Compact & Modern */}
          <div className={`bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 shadow-2xl transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Founder Image */}
              <div className="md:w-1/3">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative w-40 h-40 mx-auto">
                    <img 
                      src="https://aiadvocate.s3.ap-south-1.amazonaws.com/founder.jpg"
                      alt="Sachin Birewar" 
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl px-5 py-2 shadow-xl whitespace-nowrap">
                    <p className="text-sm font-bold text-gray-900">Sachin Birewar</p>
                    <p className="text-xs text-purple-600 font-semibold">Founder & CEO</p>
                  </div>
                </div>
              </div>
              
              {/* Founder Info */}
              <div className="md:w-2/3 text-white">
                <h3 className="text-2xl font-bold mb-5">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Founder</span></h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 bg-blue-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm">Experience</h4>
                    </div>
                    <p className="text-sm text-white/90">30+ Years MNC Finance Leadership</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 bg-purple-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm">Qualifications</h4>
                    </div>
                    <p className="text-sm text-white/90">B.Com, CMA (India), MBA (UK)</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-green-500/30 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm">Key Roles</h4>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <p className="text-xs text-white/90">Chief of Finance - MC Bauchemie, UAE</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <p className="text-xs text-white/90">Regional Finance Director - Univar</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                      <p className="text-xs text-white/90">Finance Manager - Al Gurg Fosroc, UAE</p>
                    </div>
                  </div>
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

export default AboutSection;