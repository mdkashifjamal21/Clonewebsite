import React, { useState, useEffect } from 'react';
import '../App.css';
import { Home, ChevronDown, Star, Play, ArrowRight } from 'lucide-react';
import { MainFooter } from '../components/Footer';

const HeroStats = () => {
  const [animateStats, setAnimateStats] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // Add state for active tab
   const [currentTestimonial, setCurrentTestimonial] = useState(0); // Add testimonial state
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Add testimonial rotation effect
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 3); // Cycle through 3 pairs (6 testimonials)
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);


  // Enhanced testimonials data
  const testimonials = [
    // Pair 1
    [
      {name: 'David Smith', title: 'CEO & Founder', company: 'TechCorp', img: 'https://randomuser.me/api/portraits/men/32.jpg', review: 'This platform transformed our business operations completely. The user interface is intuitive and the features are exactly what we needed.'},
      {name: 'Sarah Johnson', title: 'Product Manager', company: 'InnovateLab', img: 'https://randomuser.me/api/portraits/women/45.jpg', review: 'Excellent customer support and powerful analytics. Our team productivity has increased by 40% since we started using this tool.'}
    ],
    // Pair 2
    [
      {name: 'Michael Chen', title: 'CTO', company: 'StartupHub', img: 'https://randomuser.me/api/portraits/men/15.jpg', review: 'The integration capabilities are outstanding. We were able to connect all our existing tools seamlessly without any technical issues.'},
      {name: 'Emma Wilson', title: 'Marketing Director', company: 'GrowthCo', img: 'https://randomuser.me/api/portraits/women/28.jpg', review: 'ROI has been incredible. The automation features saved us countless hours and the reporting dashboard is simply amazing.'}
    ],
    // Pair 3
    [
      {name: 'Alex Rodriguez', title: 'Operations Lead', company: 'ScaleTech', img: 'https://randomuser.me/api/portraits/men/67.jpg', review: 'Security and reliability are top-notch. We handle sensitive data and this platform gives us complete peace of mind.'},
      {name: 'Lisa Thompson', title: 'VP of Sales', company: 'Revenue Plus', img: 'https://randomuser.me/api/portraits/women/55.jpg', review: 'Our sales team loves the mobile app. Being able to access everything on-the-go has improved our response time significantly.'}
    ]
  ];

  // Tab content data
  const tabContent = [
    {
      id: 0,
      title: "Clean User Interface",
      heading: "Solid Has Neat & Clean User Interface.",
      description: "Our interface is designed with simplicity and elegance in mind. Every element is carefully crafted to provide the best user experience.",
      additionalText: "Clean design helps users focus on what matters most - getting their work done efficiently and effectively.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=60",
      badgeText: "Interactive UI"
    },
    {
      id: 1,
      title: "Cloud Data Save Options",
      heading: "Secure Cloud Storage & Data Management.",
      description: "Save your data securely in the cloud with automatic backups and real-time synchronization across all your devices.",
      additionalText: "Enterprise-grade security ensures your data is always protected with end-to-end encryption and redundant backups.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60",
      badgeText: "Cloud Sync"
    },
    {
      id: 2,
      title: "Management And Collaboration",
      heading: "Powerful Team Management & Collaboration Tools.",
      description: "Collaborate seamlessly with your team using our advanced management tools and real-time collaboration features.",
      additionalText: "Built-in communication tools, task management, and progress tracking help teams stay aligned and productive.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60",
      badgeText: "Team Work"
    }
  ];
  

  return (<>
    <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 space-y-16 md:space-y-32">


   {/* FEATURES SECTION */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Our Software's Core Features</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            "Crafted for SaaS",
            "High-quality Design",
            "All Essential Sections",
            "Speed Optimized",
            "Fully Customizable",
            "Regular Updates",
          ].map((title, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-sm text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {i === 0 ? '🎯' : i === 1 ? '✨' : i === 2 ? '📦' : i === 3 ? '⚡' : i === 4 ? '🔧' : '🔄'}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">{title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.
              </p>
            </div>
          ))}
        </div>
      </section>








      {/* SECTION 1: Know More About Our Product */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1634990677553-4a2a6b2dcaac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3QlMjBvdmVydmlld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500"
              alt="Product Overview"
              className="rounded-xl shadow-xl w-full max-w-md transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            />
            <div className="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full animate-pulse">
              NEW
            </span>
            <p className="text-xs sm:text-sm font-medium text-gray-600">START TRACKING VISITORS</p>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900 mb-4 animate-fade-in-up">
            Know More About Our <span className="underline decoration-blue-400 decoration-4 hover:decoration-wavy transition-all duration-300">Product.</span>
          </h2>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultricies.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group">
              <div className="text-xl font-semibold text-blue-600 group-hover:scale-110 transition-transform duration-200">01</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Lorem ipsum dolor.</h3>
                <p className="text-sm text-gray-500">Ut ultricies lacus non fermentum ultricies.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group">
              <div className="text-xl font-semibold text-blue-600 group-hover:scale-110 transition-transform duration-200">02</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Fusce consectetur le.</h3>
                <p className="text-sm text-gray-500">consectetur adipiscing elit fermentum ultricies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* SECTION 2: Track Audience Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        <div className="px-4">
          <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">
            Grow your business faster
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900 mb-4">
            Track Your Audience <span className="underline decoration-yellow-400 decoration-4 hover:decoration-wavy transition-all duration-300">Activities</span>
          </h2>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultricies.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center gap-2 group">
            Know More 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src="https://plus.unsplash.com/premium_photo-1720091339077-d0f56397a0c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QW5hbHl0aWNhbCUyMG92ZXJ2aWV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=500"
              alt="Analytics Overview"
              className="rounded-xl shadow-xl w-full max-w-md bg-yellow-50 p-4 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1"
            />
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Live Data!
            </div>
          </div>
        </div>
      </div>









       {/* SECTION 3: Interactive UI Tabs */}
      <div className="text-center space-y-10">
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 px-4">
          {tabContent.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              onMouseEnter={() => setActiveTab(index)}
              className={`bg-white border px-4 sm:px-6 py-3 rounded-lg shadow-sm font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeTab === index
                  ? 'text-blue-600 border-blue-600 border-b-4 shadow-md bg-blue-50'
                  : 'text-gray-600 border-gray-200 hover:text-blue-600 hover:border-blue-200 hover:shadow-md'
              }`}
            >
              <span className="hidden sm:inline">0{index + 1} </span>
              {tab.title}
            </div>
          ))}
        </div>
        
        {/* Dynamic Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 pt-10">
          <div className="text-left px-4 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 transition-all duration-500">
              {tabContent[activeTab].heading}
            </h2>
            <p className="text-gray-500 mb-4 text-sm sm:text-base transition-all duration-500">
              {tabContent[activeTab].description}
            </p>
            <p className="text-gray-500 text-sm sm:text-base transition-all duration-500">
              {tabContent[activeTab].additionalText}
            </p>
            
            {/* Feature highlights */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Real-time updates</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Cross-platform compatibility</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group">
              <img
                src={tabContent[activeTab].image}
                alt={tabContent[activeTab].title}
                className="rounded-xl shadow-xl border border-blue-200 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full max-w-md"
                key={activeTab} // Force re-render for smooth transition
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {tabContent[activeTab].badgeText}
              </div>
              
              {/* Tab indicator on image */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  {tabContent.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeTab === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>









   

      {/* SECTION 4: Trusted by Global Companies - Smaller Version */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 rounded-3xl text-center overflow-hidden min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-purple-200/40 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-20 w-10 h-10 bg-indigo-200/30 rounded-full animate-ping"></div>
        </div>
        
        {/* Floating Character - Smaller */}
        <div className="absolute left-4 sm:left-8 lg:left-12 top-8 sm:top-12 lg:top-16 z-10">
          <div className="w-28 sm:w-36 md:w-40 lg:w-48 xl:w-52 animate-bounce-slow opacity-90 hover:opacity-100 transition-opacity duration-300">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Simple floating character illustration */}
              <circle cx="200" cy="150" r="50" fill="#FFB74D" />
              <circle cx="185" cy="140" r="5" fill="#333" />
              <circle cx="215" cy="140" r="5" fill="#333" />
              <path d="M 180 160 Q 200 175 220 160" stroke="#333" strokeWidth="2" fill="none" />
              
              {/* Body */}
              <rect x="170" y="200" width="60" height="80" rx="30" fill="#42A5F5" />
              
              {/* Arms */}
              <circle cx="150" cy="230" r="15" fill="#FFB74D" />
              <circle cx="250" cy="230" r="15" fill="#FFB74D" />
              
              {/* Legs */}
              <rect x="180" y="280" width="15" height="40" fill="#1976D2" />
              <rect x="205" y="280" width="15" height="40" fill="#1976D2" />
              
              {/* Floating elements */}
              <circle cx="120" cy="100" r="8" fill="#FFC107" opacity="0.7" className="animate-pulse" />
              <circle cx="300" cy="120" r="6" fill="#FF5722" opacity="0.6" className="animate-ping" />
              <circle cx="80" cy="200" r="10" fill="#4CAF50" opacity="0.5" className="animate-bounce" />
            </svg>
          </div>
        </div>
        
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto relative z-20 pt-6 sm:pt-8 lg:pt-12">
          
          {/* Section Badge */}
          <div className="inline-block bg-white/80 backdrop-blur-sm text-blue-600 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full mb-4 sm:mb-6 shadow-lg animate-pulse">
            🌟 TRUSTED WORLDWIDE
          </div>
          
          {/* Main Heading - Reduced Size */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">Global</span> Companies.
          </h2>
          
          {/* Subtitle - Reduced Size */}
          <p className="text-gray-600 mb-8 sm:mb-12 lg:mb-16 text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-8 lg:px-16 max-w-3xl mx-auto leading-relaxed font-medium">
            Join thousands of companies worldwide who trust our platform to scale their business and achieve remarkable growth.
          </p>
          
          {/* Statistics - Smaller Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
            
            {/* Stat 1 */}
            <div className={`transform transition-all duration-700 ${animateStats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} hover:scale-105 group cursor-pointer`}>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  500K+
                </h3>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                  Worldwide Clients
                </p>
                <div className="mt-3 w-full h-1.5 bg-blue-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full w-4/5 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className={`transform transition-all duration-700 delay-200 ${animateStats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} hover:scale-105 group cursor-pointer`}>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  1M+
                </h3>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                  App Downloads
                </p>
                <div className="mt-3 w-full h-1.5 bg-purple-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full w-5/6 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className={`transform transition-all duration-700 delay-400 ${animateStats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} hover:scale-105 group cursor-pointer`}>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  865+
                </h3>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                  Industry Awards
                </p>
                <div className="mt-3 w-full h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full w-3/4 animate-pulse"></div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Additional Trust Indicators */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              Trusted by industry leaders worldwide
            </p>
            <div className="flex justify-center items-center gap-3 sm:gap-6 flex-wrap opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="text-xl sm:text-2xl md:text-3xl">⭐⭐⭐⭐⭐</div>
              <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">4.9/5 Rating</span>
            </div>
          </div>
          
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent"></div>
        
      </div>














     

      {/* SECTION 5: Integrations - Original Brand Colors */}
      <div className="text-center px-4">
        <span className="inline-block bg-gray-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse">
          INTEGRATIONS
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
          Remotely Maintain Your Data, <br className="hidden sm:block" /> From Anywhere, Anytime.
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm sm:text-base px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus.
        </p>
        
        <div className="flex justify-center flex-wrap gap-6 sm:gap-10 px-4">
          
          {/* Slack Icon - Original Colors */}
          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:rotate-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523A2.528 2.528 0 0 1 5.042 10.1h2.52v2.542a2.528 2.528 0 0 1-2.52 2.523z" fill="#e01e5a"/>
                <path d="M6.313 15.165a2.528 2.528 0 0 1 2.521-2.523 2.528 2.528 0 0 1 2.521 2.523v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#e01e5a"/>
                <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#36c5f0"/>
                <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36c5f0"/>
                <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" fill="#2eb67d"/>
                <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.528 2.528 0 0 1-2.52-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2eb67d"/>
                <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.52-2.522v-2.522h2.52z" fill="#ecb22e"/>
                <path d="M15.165 17.688a2.528 2.528 0 0 1-2.52-2.523 2.528 2.528 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ecb22e"/>
              </svg>
            </div>
          </div>

          {/* Discord Icon - Original Colors */}
          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:rotate-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0003 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z" fill="#5865f2"/>
              </svg>
            </div>
          </div>

          {/* Trello Icon - Original Colors */}
          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:rotate-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
                <path d="M21 0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zM10.44 18.18a1.62 1.62 0 0 1-1.62 1.62H5.18a1.62 1.62 0 0 1-1.62-1.62V5.82a1.62 1.62 0 0 1 1.62-1.62h3.64a1.62 1.62 0 0 1 1.62 1.62zM20.44 12.18a1.62 1.62 0 0 1-1.62 1.62H15.18a1.62 1.62 0 0 1-1.62-1.62V5.82a1.62 1.62 0 0 1 1.62-1.62h3.64a1.62 1.62 0 0 1 1.62 1.62z" fill="#0079bf"/>
              </svg>
            </div>
          </div>

          {/* Skype Icon - Original Colors */}
          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:rotate-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
                <path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.427l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.667 4.324m11.084-4.882-.029-.135-.044-.12c.015.045.044.255.073.255M23.002 9.59c0 .157-.015.299-.029.442-.029 2.152-.715 4.749-3.09 6.414-2.078 1.462-4.199 1.462-6.278.029-3.09-2.138-6.278-4.02-9.368-6.159C1.862 8.851.145 6.264.145 3.09 0 .537 2.078-1.462 4.798.537L14.166 6.99c2.078 1.462 4.184 2.138 6.712 1.597 2.528-.541 3.09 2.152 2.124 1.003" fill="#00aff0"/>
              </svg>
            </div>
          </div>

          {/* Stack Overflow Icon - Original Colors */}
          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:rotate-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
                <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.093-10.473-2.201zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" fill="#fe7a16"/>
              </svg>
            </div>
          </div>

          {/* ClickUp Icon - Original Colors */}
          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:rotate-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
                <path d="M2 18.439l3.69-2.644c1.59 2.219 4.207 3.73 7.208 3.73s5.619-1.511 7.208-3.73L24 18.439c-2.336 2.627-5.736 4.284-9.564 4.284S4.336 21.066 2 18.439z" fill="#7b68ee"/>
                <path d="M12.564 1.277c1.022 0 1.85.84 1.85 1.876s-.828 1.876-1.85 1.876-1.85-.84-1.85-1.876.828-1.876 1.85-1.876zM7.67 7.83l3.69-2.644c.957.669 2.118 1.064 3.378 1.064s2.421-.395 3.378-1.064L21.806 7.83c-1.848 1.296-4.088 2.055-6.468 2.055S9.518 9.126 7.67 7.83z" fill="#7b68ee"/>
              </svg>
            </div>
          </div>

        </div>
      </div>










      {/* SECTION 6: CTA Join With Us - Fixed Rocket */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-white rounded-3xl px-6 sm:px-8 py-8 sm:py-12 flex flex-col lg:flex-row justify-between items-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-300/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-6 left-6 w-6 h-6 bg-blue-300/40 rounded-full animate-pulse"></div>
        
        <div className="max-w-2xl relative z-10 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Join With Us Today & Incre- <br className="hidden sm:block" /> ase Your Productivity
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>
        
        <div className="flex-shrink-0 mt-6 lg:mt-0 flex flex-col sm:flex-row items-center gap-6 relative z-10">
          {/* Custom Rocket SVG */}
          <div className="w-32 sm:w-40 lg:w-56 hover:scale-110 transition-transform duration-300 animate-bounce-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Rocket Body */}
              <ellipse cx="100" cy="120" rx="25" ry="60" fill="#4F46E5"/>
              
              {/* Rocket Nose */}
              <path d="M 75 60 Q 100 40 125 60 L 100 80 Z" fill="#6366F1"/>
              
              {/* Windows */}
              <circle cx="100" cy="100" r="12" fill="#E0E7FF"/>
              <circle cx="100" cy="100" r="8" fill="#3B82F6"/>
              
              {/* Fins */}
              <path d="M 75 160 L 60 180 L 75 180 Z" fill="#1E40AF"/>
              <path d="M 125 160 L 140 180 L 125 180 Z" fill="#1E40AF"/>
              
              {/* Fire/Exhaust */}
              <ellipse cx="100" cy="185" rx="15" ry="8" fill="#F59E0B"/>
              <ellipse cx="100" cy="190" rx="12" ry="6" fill="#EF4444"/>
              <ellipse cx="100" cy="195" rx="8" ry="4" fill="#F97316"/>
              
              {/* Stars around rocket */}
              <circle cx="40" cy="50" r="2" fill="#FCD34D" className="animate-pulse"/>
              <circle cx="160" cy="70" r="1.5" fill="#FCD34D" className="animate-ping"/>
              <circle cx="30" cy="120" r="1" fill="#FCD34D" className="animate-bounce"/>
              <circle cx="170" cy="140" r="2" fill="#FCD34D" className="animate-pulse"/>
              
              {/* Motion lines */}
              <path d="M 20 100 L 40 100" stroke="#6B7280" strokeWidth="2" opacity="0.3"/>
              <path d="M 15 120 L 35 120" stroke="#6B7280" strokeWidth="2" opacity="0.3"/>
              <path d="M 25 140 L 45 140" stroke="#6B7280" strokeWidth="2" opacity="0.3"/>
            </svg>
          </div>
          
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300 group">
            Sign up free 
            <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* SECTION 7: FAQ Preview - Enhanced */}
      <div className="text-left space-y-10 px-4 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40 animate-bounce"></div>
        
        <div className="relative z-10">
          <h4 className="text-sm font-bold uppercase text-gray-500 tracking-wider flex items-center gap-2">
            <span className="w-8 h-0.5 bg-yellow-400"></span>
            Our FAQs
          </h4>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-4">
            Frequently Asked <br />
            <span className="underline decoration-yellow-400 decoration-4 hover:decoration-wavy transition-all duration-300 relative">
              Questions
              <span className="absolute -top-2 -right-2 text-yellow-400 text-sm animate-bounce">❓</span>
            </span>
          </h2>
        </div>
        
        <div className="border-t border-b divide-y text-left max-w-3xl relative z-10 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
          {[
            'How secure is our data on your platform?',
            'What integrations do you support?',
            'Can I cancel my subscription anytime?'
          ].map((question, i) => (
            <details key={i} className="py-4 group hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 px-4 rounded-lg transition-all duration-300 cursor-pointer">
              <summary className="flex justify-between cursor-pointer font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 items-center">
                <span className="text-sm sm:text-base flex items-center gap-3">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                    {i + 1}
                  </span>
                  {question}
                </span>
                <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform duration-200 text-blue-600" />
              </summary>
              <p className="text-gray-500 mt-3 ml-9 text-sm sm:text-base animate-fade-in leading-relaxed">
                We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences, and comprehensive solutions.
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 8: Testimonials - Animated with 6 clients */}
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50 text-center px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200/30 rounded-full animate-bounce"></div>
      
      <h4 className="text-blue-500 font-semibold text-sm tracking-wider">TESTIMONIALS</h4>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Client's Testimonials</h2>
      
      {/* Animated testimonials container */}
      <div className="relative max-w-6xl mx-auto h-80">
        {testimonials.map((pair, pairIndex) => (
          <div
            key={pairIndex}
            className={`absolute inset-0 flex justify-center gap-6 sm:gap-10 flex-wrap transition-all duration-1000 ${
              currentTestimonial === pairIndex 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            {pair.map((person, i) => (
              <div key={i} className="bg-white p-6 shadow-lg rounded-xl max-w-sm hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <img src={person.img} alt={person.name} className="w-16 h-16 rounded-full mx-auto border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300 shadow-md" />
                <h3 className="mt-4 font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{person.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{person.title}</p>
                <p className="text-xs text-blue-600 font-medium">@{person.company}</p>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{person.review}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Testimonial indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentTestimonial === index ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>

    {/* SECTION 9: Pricing - Fixed Sizes with Hover Effects */}
    <section className="py-12 sm:py-16 text-center px-4">
      <h4 className="text-blue-500 font-semibold text-sm tracking-wider">PRICING PLANS</h4>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Simple Pricing</h2>
      <div className="mt-10 flex justify-center gap-6 sm:gap-8 flex-wrap max-w-6xl mx-auto">
        {[
          {title:'Small Pack', price:'$10', features: ['300 GB Storage', 'Unlimited Photos', '5 Team Members', '24/7 Support']},
          {title:'Medium Pack', price:'$59', tag:'POPULAR', features: ['1 TB Storage', 'Unlimited Everything', '20 Team Members', 'Priority Support', 'Advanced Analytics']},
          {title:'Large Pack', price:'$189', features: ['Unlimited Storage', 'Custom Integrations', 'Unlimited Team Members', 'Dedicated Manager', 'Enterprise Security']}
        ].map((plan, i) => (
          <div key={i} className={`border rounded-xl w-full max-w-xs h-96 flex flex-col justify-between transition-all duration-300 cursor-pointer group relative ${
            plan.tag 
              ? 'border-blue-500 bg-blue-50 shadow-lg' 
              : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg hover:scale-105'
          }`}>
            {plan.tag && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="text-xs text-white bg-blue-500 rounded-full px-3 py-1 animate-pulse">{plan.tag}</div>
              </div>
            )}
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-blue-600 transition-colors duration-200">
                  {plan.price}<span className="text-sm font-normal text-gray-500"> /month</span>
                </h3>
                <p className="mt-2 font-semibold text-lg text-gray-800">{plan.title}</p>
              </div>
              
              <ul className="text-sm mt-4 text-gray-600 space-y-3 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full py-3 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium transform hover:scale-105">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* SECTION 10: Contact - Enhanced */}
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200/40 to-pink-200/40 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-300/50 rounded-full animate-ping"></div>
      
      <div className="max-w-6xl mx-auto flex flex-wrap gap-8 lg:gap-10 justify-center relative z-10">
        <div className="flex-1 min-w-[300px] max-w-lg bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              💬
            </span>
            Send a message
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80" placeholder="Full name" />
              <input className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80" placeholder="Email address" />
            </div>
            <input className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80" placeholder="Subject" />
            <input className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80" placeholder="Phone number" />
            <textarea className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80" placeholder="Message" rows="4"></textarea>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="flex-1 min-w-[250px] max-w-md bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <h3 className="font-bold mb-6 text-xl text-gray-900 flex items-center gap-3">
            <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              📍
            </span>
            Find us
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer group">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></span>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm">290 Maryam Springs 260, Paris, France</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer group">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></span>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm">yourmail@domainname.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer group">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-200"></span>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm">+009 42333 6343 843</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 11: Blog - Enhanced with Images and Hover Effects */}
    <section className="py-12 sm:py-16 text-center px-4">
      <h4 className="text-blue-500 font-semibold text-sm tracking-wider">NEWS & BLOGS</h4>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Latest News & Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {[
          {
            title: "Free advertising for your online business",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&auto=format",
            category: "Marketing",
            date: "Dec 15, 2024"
          },
          {
            title: "9 simple ways to improve your design skills",
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=200&fit=crop&auto=format",
            category: "Design", 
            date: "Dec 12, 2024"
          },
          {
            title: "Tips to quickly improve your coding speed",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&auto=format",
            category: "Development",
            date: "Dec 10, 2024"
          }
        ].map((post, i) => (
          <div key={i} className="border rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group bg-white">
            <div className="relative overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Category badge */}
              <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {post.category}
              </div>
              
              {/* Date badge */}
              <div className="absolute top-3 right-3 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                {post.date}
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ArrowRight className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2 group/link">
                Read More 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
     </>
  );
};



const HomePage = () => {
  const [isPagesOpen, setPagesOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-block bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-4 animate-bounce">
            🚀 New Release
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Complete Tailwind CSS Template for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> SaaS Website</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Solid is a complete Tailwind CSS template crafted specially for SaaS, Software, Mobile App and Web App Sites.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 group">
              Get Started
              <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">Try for free no credit card required.</p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500"   
              alt="hero"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              Live Demo
            </div>
          </div>
        </div>
      </section>

     {/* ✅ BRANDS BOX SECTION */}
<section className="bg-white py-8 sm:py-10 px-4 sm:px-6 border-t border-b">
  <div className="flex flex-wrap justify-center gap-8 sm:gap-10 items-center max-w-6xl mx-auto">
    {/* Logitech */}
    <span className="h-5 sm:h-6 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transform hover:scale-110 transition-all duration-300 flex items-center">
      <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontSize="25" fill="#999">Logitech</text>
      </svg>
    </span>

    {/* Dropcam */}
    <span className="h-5 sm:h-6 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transform hover:scale-110 transition-all duration-300 flex items-center">
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontSize="25" fill="#999">Dropcam</text>
      </svg>
    </span>

    {/* AMD */}
    <span className="h-5 sm:h-6 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transform hover:scale-110 transition-all duration-300 flex items-center">
      <svg width="75" height="32" viewBox="0 0 75 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" fontFamily="Arial Black, Gadget, sans-serif" fontSize="25" fill="#999">AMD</text>
      </svg>
    </span>

    {/* Nike */}
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" className="h-5 sm:h-6 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transform hover:scale-110 transition-all duration-300" />

    {/* Mandiri */}
    <span className="h-5 sm:h-6 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transform hover:scale-110 transition-all duration-300 flex items-center">
      <svg width="105" height="32" viewBox="0 0 105 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontSize="25" fill="#999">Mandiri</text>
      </svg>
    </span>

    {/* Amazon */}
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-5 sm:h-6 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transform hover:scale-110 transition-all duration-300" />
  </div>
</section>


   
    </div>
  );
};

export default function Homepage() {
  return (
    <div>
      <HomePage />
      <HeroStats />
      <MainFooter />
    </div>
  );
}