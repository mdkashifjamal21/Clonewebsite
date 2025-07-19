import React from 'react';
import '../App.css';
import { ArrowRight } from 'lucide-react';
import { MainFooter } from '../components/Footer';

const HeroStats = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200/40 to-pink-200/40 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-300/50 rounded-full animate-ping"></div>

        <div className="max-w-6xl mx-auto flex flex-wrap gap-8 lg:gap-10 justify-center relative z-10">
          {/* Contact Form */}
          <div className="flex-1 min-w-[300px] max-w-lg bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">💬</span>
              Send a message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="input" placeholder="Full name" />
                <input className="input" placeholder="Email address" />
              </div>
              <input className="input" placeholder="Subject" />
              <input className="input" placeholder="Phone number" />
              <textarea className="input" placeholder="Message" rows="4"></textarea>
              <button className="btn-primary w-full sm:w-auto">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[250px] max-w-md bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="font-bold mb-6 text-xl text-gray-900 flex items-center gap-3">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">📍</span>
              Find us
            </h3>
            <div className="space-y-4">
              {[
                { label: "Address", value: "290 Maryam Springs 260, Paris, France" },
                { label: "Email", value: "yourmail@domainname.com" },
                { label: "Phone", value: "+009 42333 6343 843" }
              ].map((item, idx) => (
                <div key={idx} className="contact-item">
                  <span className="dot"></span>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
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
            <div key={i} className="blog-card group">
              <div className="relative overflow-hidden">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-overlay"></div>
                <div className="badge category">{post.category}</div>
                <div className="badge date">{post.date}</div>
                <div className="play-button">
                  <div className="play-circle">
                    <ArrowRight className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="blog-title">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...
                </p>
                <a href="#" className="read-more group/link">
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
  );
}
