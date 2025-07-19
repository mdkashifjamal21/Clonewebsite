import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaGithub, FaArrowRight, FaCalendar, FaUser, FaHeart, FaShare, FaBookmark } from "react-icons/fa";






export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black mt-20 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solid
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building innovative solutions for tomorrow's digital world. Join us on our journey to excellence.
            </p>
            <div className="space-y-2">
              <p className="text-xs uppercase text-gray-400 font-semibold tracking-wider">Contact</p>
              <a href="mailto:hello@solid.com" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
                hello@solid.com
              </a>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: FaFacebookF, color: "hover:text-blue-500" },
                { icon: FaTwitter, color: "hover:text-blue-400" },
                { icon: FaLinkedinIn, color: "hover:text-blue-600" },
                { icon: FaInstagram, color: "hover:text-pink-500" },
                { icon: FaYoutube, color: "hover:text-red-500" },
                { icon: FaGithub, color: "hover:text-gray-400" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-gray-700`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Portfolio", "Careers", "Contact"].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-3">
              {["Help Center", "Documentation", "API Reference", "Community", "Status Page", "Bug Reports"].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to receive the latest news and updates from our team.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <button 
                type="submit"
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isSubscribed 
                    ? "bg-green-600 text-white" 
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                }`}
              >
                {isSubscribed ? "✓ Subscribed!" : "Subscribe Now"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Sitemap</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Solid. All rights reserved. Made with ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};


export const MainFooter = () => (
  <footer className="bg-gray-100 text-center py-10 text-sm px-4">
    <div className="flex justify-around flex-wrap gap-8 max-w-6xl mx-auto">
      <div className="min-w-[200px] text-left">
        <h3 className="font-bold text-lg mb-2">Solid</h3>
        <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">hello@solid.com</p>
      </div>
      <div className="min-w-[150px] text-left">
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Product</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Careers</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Pricing</li>
        </ul>
      </div>
      <div className="min-w-[150px] text-left">
        <h4 className="font-semibold mb-3">Support</h4>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Company</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Press media</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Our Blog</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Contact Us</li>
        </ul>
      </div>
      <div className="min-w-[200px] text-left">
        <h4 className="font-semibold mb-3">Newsletter</h4>
        <div className="flex">
          <input className="flex-1 p-2 border rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" placeholder="Email address" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <p className="mt-10 text-gray-500 border-t pt-6">© 2025 Solid. All rights reserved</p>
  </footer>
);