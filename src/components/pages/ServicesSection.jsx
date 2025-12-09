import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  ArrowRight,
  Target,
  Star,
  Zap,
  Play,
  Volume2,
  VolumeX,
  ExternalLink,
} from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeReel, setActiveReel] = useState(null);
  const [hoveredStatCard, setHoveredStatCard] = useState(null);
  const sectionRef = useRef(null);
  const reelsContainerRef = useRef(null);

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

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const serviceReels = [
    {
      id: 1,
      serviceName: "Business Model",
      videoSrc: "https://www.youtube.com/shorts/CUh3uRStCE8",
      thumbnailSrc: "https://media.istockphoto.com/id/1497817030/photo/business-growth-data-manager-improvement-vertical.jpg?s=612x612&w=0&k=20&c=0BhLsZpjNv3fNE6545__F02i1qEV7eh3ocGF7QCp8P8=",
    },
    {
      id: 2,
      serviceName: "ERP Solutions",
      videoSrc: "https://www.youtube.com/shorts/CUh3uRStCE8",
      thumbnailSrc: "https://media.istockphoto.com/id/1483167928/video/motion-graphic-of-blue-money-icon-and-data-matrix-simulation-digital-grid-line-with.jpg?s=640x640&k=20&c=tq2_10TSHZa1rWSDzurP8B0H0vp5UUSV9Xf7B1O52po=",
    },
    {
      id: 3,
      serviceName: "Accounting Services",
      videoSrc: "https://www.youtube.com/shorts/CUh3uRStCE8",
      thumbnailSrc: "https://thumbs.dreamstime.com/b/financial-growth-arrow-money-coin-stack-d-background-financial-growth-arrow-money-coin-stack-d-background-vertical-304380937.jpg",
    },
    {
      id: 4,
      serviceName: "Digital Transformation",
      videoSrc: "https://www.youtube.com/shorts/CUh3uRStCE8",
      thumbnailSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2PvGof9qY1ENi_iCLdoOQOivObfR18CQjg&s",
    },
    {
      id: 5,
      serviceName: "Strategic Consulting",
      videoSrc: "https://www.youtube.com/shorts/CUh3uRStCE8",
      thumbnailSrc: "https://img.freepik.com/premium-photo/visual-representation-business-stock-market-performance-time-vertical-mobile-wallpaper_892776-13465.jpg",
    },
  ];

  const scrollReels = (direction) => {
    if (reelsContainerRef.current) {
      const scrollAmount = 350;
      if (direction === "left") {
        reelsContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        reelsContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  const handleCardClick = (videoSrc) => {
    // Open YouTube video in a new tab
    window.open(videoSrc, '_blank');
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gray-50 py-4">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full filter blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-md">
            <Award className="w-4 h-4 mr-2 text-indigo-600" />
            Professional Services
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Consulting</span> Services
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-4 text-sm">
            Empowering SMEs with big-company operational systems at affordable prices
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        <div className={`mb-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Services in Action</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Click on any service to watch on YouTube
            </p>
          </div>

          <div className="relative">
            <button onClick={() => scrollReels("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all">
              <ArrowRight className="w-5 h-5 text-indigo-600 rotate-180" />
            </button>

            <button onClick={() => scrollReels("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all">
              <ArrowRight className="w-5 h-5 text-indigo-600" />
            </button>

            <div ref={reelsContainerRef} className="flex gap-6 overflow-x-auto pb-4 px-16 scrollbar-hide">
              {serviceReels.map((reel) => (
                <div key={reel.id} className="flex-shrink-0 w-80">
                  <div 
                    className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${activeReel === reel.id ? "shadow-2xl scale-105" : ""}`}
                    onMouseEnter={() => setActiveReel(reel.id)}
                    onMouseLeave={() => setActiveReel(null)}
                    onClick={() => handleCardClick(reel.videoSrc)}
                  >
                    <div className="relative h-96 bg-gray-900 overflow-hidden">
                      {/* Thumbnail image */}
                      <img 
                        src={reel.thumbnailSrc} 
                        // alt={`${reel.serviceName} thumbnail`} 
                        className="w-full h-full object-cover"
                      />
                      
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 transition-opacity duration-300 ${activeReel === reel.id ? "opacity-100" : "opacity-70"}`}>
                        <div className="text-white">
                          <h4 className="font-bold text-lg">{reel.serviceName}</h4>
                          <span className="text-sm">Click to watch on YouTube</span>
                        </div>
                      </div>
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3 transition-transform duration-300 hover:scale-110">
                          <Play className="w-8 h-8 text-indigo-600 ml-1" />
                        </div>
                      </div>
                      
                      {/* YouTube indicator */}
                      <div className="absolute top-4 right-4 bg-red-600 rounded-full p-2">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "SMEs Transformed", Icon: Target, color: "indigo" },
              { value: "98%", label: "Client Satisfaction", Icon: Star, color: "purple" },
              { value: "15+", label: "Years Experience", Icon: Award, color: "blue" },
              { value: "24/7", label: "Support", Icon: Zap, color: "green" },
            ].map((stat, i) => {
              const colorClasses = getColorClasses(stat.color);
              return (
                <div 
                  key={i} 
                  className="text-center group relative"
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) rotateY(5deg) rotateX(-5deg) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                    setHoveredStatCard(i);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(0) rotateY(0) rotateX(0) scale(1)';
                    e.currentTarget.style.boxShadow = '';
                    setHoveredStatCard(null);
                  }}
                >
                  <div className="relative z-10 p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: hoveredStatCard === i 
                        ? colorClasses.statHoverBgDark 
                        : 'transparent',
                      transition: 'background 0.3s ease-out'
                    }}
                  >
                    <div 
                      className={`w-16 h-16 ${colorClasses.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110`}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: 'translateZ(15px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease-out, background-color 0.3s ease-out',
                        backgroundColor: hoveredStatCard === i ? 'rgba(255, 255, 255, 0.2)' : ''
                      }}
                    >
                      <stat.Icon 
                        className={`w-8 h-8 ${colorClasses.iconText} transition-colors duration-300`}
                        style={{ color: hoveredStatCard === i ? '#ffffff' : '' }}
                      />
                    </div>
                    <div 
                      className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                        hoveredStatCard === i ? 'text-white' : 'text-gray-900'
                      }`}
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className={`text-sm transition-colors duration-300 ${
                        hoveredStatCard === i ? 'text-white' : 'text-gray-600'
                      }`}
                      style={{ transform: 'translateZ(5px)' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div 
                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${colorClasses.bg}`}
                    style={{ zIndex: -1 }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 px-6 text-white rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-base md:text-lg mb-6 opacity-90 max-w-3xl mx-auto">
              Get right systems and processes in place to drive sustainable growth
            </p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 inline-flex items-center shadow-lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ServicesSection;