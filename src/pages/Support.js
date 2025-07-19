import React, { useState, useEffect } from 'react';
import '../App.css';
import { Home, ChevronDown, Star, Play, ArrowRight } from 'lucide-react';
import { MainFooter } from '../components/Footer';


const HeroStats = () => {
  return (
<>

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



export default function Support() {
  return (
    <>
      <HeroStats />
      <MainFooter />
    </>
  )
}