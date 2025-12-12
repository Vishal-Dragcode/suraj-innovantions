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
  Sparkles,
} from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeReel, setActiveReel] = useState(null);
  const [hoveredStatCard, setHoveredStatCard] = useState(null);
  const [videoStates, setVideoStates] = useState({});
  const [soundEnabled, setSoundEnabled] = useState({});
  const sectionRef = useRef(null);
  const reelsContainerRef = useRef(null);
  const videoRefs = useRef({});

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
      videoSrc: "https://youtu.be/qA69fHFCarI?si=SeZyqEaCJGzejMsn",
      thumbnailSrc: "https://media.istockphoto.com/id/1497817030/photo/business-growth-data-manager-improvement-vertical.jpg?s=612x612&w=0&k=20&c=0BhLsZpjNv3fNE6545__F02i1qEV7eh3ocGF7QCp8P8=",
    },
    {
      id: 2,
      serviceName: "ERP Solutions",
      videoSrc: "https://youtu.be/UDEW2viBydQ?si=jyeFmFOLJR-dFxMZ",
      thumbnailSrc: "https://media.istockphoto.com/id/1483167928/video/motion-graphic-of-blue-money-icon-and-data-matrix-simulation-digital-grid-line-with.jpg?s=640x640&k=20&c=tq2_10TSHZa1rWSDzurP8B0H0vp5UUSV9Xf7B1O52po=",
    },
    {
      id: 3,
      serviceName: "Accounting Services",
      videoSrc: "https://youtu.be/N3dN1UQ9NAc?si=47gNgS_2es_m8ssR",
      thumbnailSrc: "https://thumbs.dreamstime.com/b/financial-growth-arrow-money-coin-stack-d-background-financial-growth-arrow-money-coin-stack-d-background-vertical-304380937.jpg",
    },
    {
      id: 4,
      serviceName: "Digital Transformation",
      videoSrc: "https://youtu.be/te6LQ9U0VcA?si=Kb6lKByhcXzJb8-h",
      thumbnailSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2PvGof9qY1ENi_iCLdoOQOivObfR18CQjg&s",
    },
    {
      id: 5,
      serviceName: "Strategic Consulting",
      videoSrc: "https://youtu.be/CUh3uRStCE8?si=Yd8ikEWfuq8wTUG-",
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

  const handleCardHover = (id, isHovering) => {
    if (isHovering) {
      setActiveReel(id);
      setVideoStates(prev => ({ ...prev, [id]: true }));
      
      // Initialize sound state if not already set
      if (soundEnabled[id] === undefined) {
        setSoundEnabled(prev => ({ ...prev, [id]: false }));
      }
    } else {
      setActiveReel(null);
      setVideoStates(prev => ({ ...prev, [id]: false }));
    }
  };

  const toggleSound = (id, e) => {
    e.stopPropagation(); // Prevent card click
    setSoundEnabled(prev => ({ ...prev, [id]: !prev[id] }));
    
    // Send command to iframe to toggle mute/unmute
    if (videoRefs.current[id]) {
      const iframe = videoRefs.current[id];
      const command = soundEnabled[id] ? 'mute' : 'unMute';
      iframe.contentWindow.postMessage(`{"event":"command","func":"${command}","args":""}`, '*');
    }
  };

  const handleCardClick = (videoSrc) => {
    // Open YouTube video in a new tab
    window.open(videoSrc, '_blank');
  };

  const handleScheduleConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Add the id="career" attribute here to match the navbar button
    <section 
      id="career" 
      ref={sectionRef}
      className="py-12 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Rest of your component remains the same */}
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
              Management Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Consulting</span> Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empowering SMEs with big-company management systems at reasonable prices
            </p>
          </div>

          {/* Services Reels Section */}
          <div className={`mb-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Services in Action</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                Hover to preview or click to watch on YouTube
              </p>
            </div>

            <div className="relative">
              <button onClick={() => scrollReels("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all">
                <ArrowRight className="w-5 h-5 text-blue-600 rotate-180" />
              </button>

              <button onClick={() => scrollReels("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all">
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </button>

              <div ref={reelsContainerRef} className="flex gap-6 overflow-x-auto pb-4 px-16 scrollbar-hide">
                {serviceReels.map((reel) => (
                  <div key={reel.id} className="flex-shrink-0 w-80">
                    <div 
                      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                        activeReel === reel.id ? "shadow-2xl scale-105" : ""
                      }`}
                      onMouseEnter={() => handleCardHover(reel.id, true)}
                      onMouseLeave={() => handleCardHover(reel.id, false)}
                      onClick={() => handleCardClick(reel.videoSrc)}
                    >
                      <div className="relative h-96 bg-gray-900 overflow-hidden">
                        {/* YouTube Embed with thumbnail fallback */}
                        {videoStates[reel.id] ? (
                          <>
                            <iframe
                              ref={el => videoRefs.current[reel.id] = el}
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${getYouTubeId(reel.videoSrc)}?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${getYouTubeId(reel.videoSrc)}&enablejsapi=1`}
                              title={reel.serviceName}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                            
                            {/* Sound toggle button */}
                            <button 
                              className="absolute bottom-4 right-4 bg-white/90 rounded-full p-2 transition-all duration-300 hover:bg-white hover:scale-110"
                              onClick={(e) => toggleSound(reel.id, e)}
                            >
                              {soundEnabled[reel.id] ? (
                                <Volume2 className="w-5 h-5 text-blue-600" />
                              ) : (
                                <VolumeX className="w-5 h-5 text-gray-600" />
                              )}
                            </button>
                            
                            {/* Service name overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <h4 className="font-bold text-lg text-white">{reel.serviceName}</h4>
                              <span className="text-sm text-white/80">Click to watch on YouTube</span>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Thumbnail image */}
                            <img 
                              src={reel.thumbnailSrc} 
                              alt={`${reel.serviceName} thumbnail`} 
                              className="w-full h-full object-cover"
                            />
                            
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                              activeReel === reel.id ? "opacity-100" : "opacity-70"
                            }`}>
                              <div className="text-white">
                                <h4 className="font-bold text-lg">{reel.serviceName}</h4>
                                <span className="text-sm">Click to watch on YouTube</span>
                              </div>
                            </div>
                            
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white/90 rounded-full p-3 transition-transform duration-300 hover:scale-110">
                                <Play className="w-8 h-8 text-blue-600 ml-1" />
                              </div>
                            </div>
                            
                            {/* YouTube indicator */}
                            <div className="absolute top-4 right-4 bg-red-600 rounded-full p-2">
                              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { value: "500+", label: "Setup good business model", Icon: Target, gradient: 'from-blue-500 to-cyan-500' },
              { value: "98%", label: "Begin to SEE your business well", Icon: Star, gradient: 'from-purple-500 to-pink-500' },
              { value: "15+", label: " Manage the business than operate the business", Icon: Award, gradient: 'from-orange-500 to-red-500' },
              { value: "24/7", label: " Get more business hours to get more sales.", Icon: Zap, gradient: 'from-green-500 to-emerald-500' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  transform: hoveredStatCard === index ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
                  transitionDelay: `${index * 50}ms`
                }}
                onMouseEnter={() => setHoveredStatCard(index)}
                onMouseLeave={() => setHoveredStatCard(null)}
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <stat.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">{stat.value}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300 mt-1">{stat.label}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
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
                Ready to Transform Your Business?
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Get the right systems and processes in place to drive sustainable growth
              </h3>
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
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ServicesSection;