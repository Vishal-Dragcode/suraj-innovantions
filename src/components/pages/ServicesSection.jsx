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
              Hover to preview or click to watch on YouTube
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
                              <Volume2 className="w-5 h-5 text-indigo-600" />
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
                        </>
                      )}
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
            ].map((stat, i) => (
              <div 
                key={i} 
                className="text-center group relative"
                onMouseEnter={() => setHoveredStatCard(i)}
                onMouseLeave={() => setHoveredStatCard(null)}
              >
                <div className="relative z-10 p-4 rounded-xl transition-all duration-300 bg-white group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-600">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <stat.Icon className="w-8 h-8 text-indigo-600 group-hover:text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1 text-gray-900 group-hover:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-white/90">
                    {stat.label}
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 px-6 text-white rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-base md:text-lg mb-6 opacity-90 max-w-3xl mx-auto">
              Get right systems and processes in place to drive sustainable growth
            </p>
            <button
              onClick={handleScheduleConsultation}
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 inline-flex items-center shadow-lg"
            >
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