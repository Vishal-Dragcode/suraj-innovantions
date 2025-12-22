import React, { useState, useEffect, useRef } from 'react';
import { Target, Users, BookOpen, TrendingUp, Shield } from 'lucide-react';

const OfferingsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredOffering, setHoveredOffering] = useState(null);
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

  const offerings = [
    {
      title: "Real-world Simulation",
      description: "We replicate a complete finance & accounting function from scratch, mirroring the structure we've implemented in actual companies.",
      icon: Target,
      gradient: 'from-blue-600 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50'
    },
    {
      title: "Student-staffed System",
      description: "Rather than employees, students manage operations themselves under close supervision, gaining practical experience in real-time financial workflows.",
      icon: Users,
      gradient: 'from-green-600 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      title: "Dedicated Training",
      description: "Unlike traditional internships, trainers are not distracted by corporate deadlines; their sole focus is student development.",
      icon: BookOpen,
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      title: "High-volume Practical Experience",
      description: "Students gain hands-on exposure to business processes and high-volume work, developing a genuine understanding of job requirements.",
      icon: TrendingUp,
      gradient: 'from-indigo-600 to-blue-600',
      bgGradient: 'from-indigo-50 to-blue-50'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3">
              <Shield className="w-4 h-4" />
              Our Offerings
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Suraj Incubator</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience real-world business accounting designed to make you job-ready
            </p>
          </div>
            
          {/* Offerings Grid */}
          <div 
            className={`grid md:grid-cols-2 gap-5 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {offerings.map((offering, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-br ${offering.bgGradient} rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-200`}
                style={{
                  transform: hoveredOffering === index ? 'translateY(-4px)' : 'translateY(0)',
                  transitionDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredOffering(index)}
                onMouseLeave={() => setHoveredOffering(null)}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div 
                    className={`w-12 h-12 bg-gradient-to-br ${offering.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 ${
                      hoveredOffering === index ? 'rotate-6 scale-110' : 'rotate-0 scale-100'
                    }`}
                  >
                    <offering.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;