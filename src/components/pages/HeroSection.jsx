import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, BookOpen, Users, Award, Star, CheckCircle, TrendingUp, Clock, Globe, Volume2, VolumeX } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [mentorsCount, setMentorsCount] = useState(0);
  const [rating, setRating] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const studentsTarget = 50000;
    const coursesTarget = 45;
    const mentorsTarget = 29;
    const ratingTarget = 4.9;
    
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let studentsStep = 0;
    let coursesStep = 0;
    let mentorsStep = 0;
    let ratingStep = 0;
    
    const counter = setInterval(() => {
      studentsStep += 1;
      coursesStep += 1;
      mentorsStep += 1;
      ratingStep += 0.1;
      
      if (studentsStep <= steps) {
        setStudentsCount(Math.floor((studentsStep / steps) * studentsTarget));
      }
      
      if (coursesStep <= steps) {
        setCoursesCount(Math.floor((coursesStep / steps) * coursesTarget));
      }
      
      if (mentorsStep <= steps) {
        setMentorsCount(Math.floor((mentorsStep / steps) * mentorsTarget));
      }
      
      if (ratingStep <= ratingTarget) {
        setRating(Math.min(ratingStep, ratingTarget).toFixed(1));
      }
      
      if (studentsStep > steps && coursesStep > steps && mentorsStep > steps && ratingStep >= ratingTarget) {
        clearInterval(counter);
      }
    }, interval);
    
    return () => {
      clearInterval(counter);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const features = [
    { icon: <CheckCircle className="w-5 h-5" />, title: "Expert Trainers", description: "Learn from industry professionals", gradient: "from-blue-500 to-cyan-500" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Career Growth", description: "Advance your career", gradient: "from-purple-500 to-pink-500" },
    { icon: <Clock className="w-5 h-5" />, title: "Business Modelling", description: "Stand & Sustain in business", gradient: "from-green-500 to-emerald-500" },
    { icon: <Globe className="w-5 h-5" />, title: "Business Accounting", description: "Manage your business not operate it", gradient: "from-orange-500 to-red-500" }
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative py-8 md:py-10 min-h-screen flex items-center"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://aiadvocate.s3.ap-south-1.amazonaws.com/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-purple-900/80"></div>      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Content */}
          <div className={`flex-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              🎓 Master real World Accounting
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
              <span>Empowering Students,</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Empowering Small Business
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl">with Suraj Innovations</span>
            </h1>
            
            {/* <p className="text-lg md:text-xl mb-6 text-white/90 max-w-lg">
              Learn at your own pace with <span className="font-semibold text-cyan-300">expert video lessons</span>. Join thousands of learners advancing their careers.
            </p>
             */}
            <br/>
            <br/>
            <br/>
            <br/>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { count: coursesCount, label: "Courses", gradient: "from-blue-500 to-cyan-500", suffix: "+" },
                { count: mentorsCount, label: "Mentors", gradient: "from-purple-500 to-pink-500", suffix: "+" },
                { count: studentsCount > 999 ? `${(studentsCount/1000).toFixed(0)}K` : studentsCount, label: "Learners", gradient: "from-green-500 to-emerald-500", suffix: "+" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                    {stat.count}{stat.suffix}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Original Card Design */}
          <div className={`flex-1 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 relative overflow-hidden border border-white/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white mb-4">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">Suraj Innovations</h3>
                  
                  {/* Rating */}
                  <div className="flex justify-center items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-white/30'}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-bold text-white">{rating}</span>
                  </div>
                  
                  <p className="text-white/80 mb-6">
                    Transform your career with our comprehensive courses taught by industry experts.
                  </p>
                  
                  <div className="flex justify-center">
                    <a 
                      href="#contact" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features - Horizontal Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 text-center hover:bg-white/20 transition-all"
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className={`bg-gradient-to-br ${feature.gradient} p-2 rounded-lg text-white mb-2 mx-auto w-fit`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;