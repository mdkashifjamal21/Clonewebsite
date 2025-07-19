import React, { useState } from "react";
import { FaSearch, FaShareAlt, FaHeart, FaBookmark, FaComment, FaEye, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaCopy, FaCalendarAlt, FaUser, FaTag, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {Footer} from "../components/Footer";

const relatedPosts = [
  {
    title: "Free advertising for your online business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&auto=format&fit=crop&q=60",
    date: "Dec 15, 2024",
    category: "Marketing"
  },
  {
    title: "9 simple ways to improve your design skills",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&auto=format&fit=crop&q=60",
    date: "Dec 12, 2024",
    category: "Design"
  },
  {
    title: "Tips to quickly improve your coding speed",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&auto=format&fit=crop&q=60",
    date: "Dec 10, 2024",
    category: "Development"
  }
];

const contentImages = [
  {
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60",
    caption: "Modern Workspace Design"
  },
  {
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&auto=format&fit=crop&q=60",
    caption: "Creative Environment"
  },
  {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60",
    caption: "Strategic Planning"
  }
];

const BlogSingleContent = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShare = (platform) => {
    console.log(`Sharing on ${platform}`);
    setShareDropdown(false);
  };

  const openImageModal = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6 order-2 lg:order-1">
            
            {/* Search */}
            <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Search Articles</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-full py-3 px-4 pr-12 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                    searchFocused 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
                <button className={`absolute top-1/2 right-4 -translate-y-1/2 transition-all duration-300 ${
                  searchFocused ? 'text-blue-500 scale-110' : 'text-gray-400 hover:text-gray-600'
                }`}>
                  <FaSearch className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Categories</h3>
              <ul className="space-y-3">
                {[
                  { name: "Technology", count: 24 },
                  { name: "Business", count: 18 },
                  { name: "Design", count: 15 },
                  { name: "Marketing", count: 12 },
                  { name: "Development", count: 21 }
                ].map((category, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="flex items-center justify-between py-2 px-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {category.name}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-300">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Posts */}
            <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Related Posts</h3>
              <ul className="space-y-4">
                {relatedPosts.map((post, index) => (
                  <li key={index} className="group cursor-pointer">
                    <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                        <img 
                          src={post.image} 
                          alt="related" 
                          className="w-16 h-16 object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-500">{post.date}</span>
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 order-1 lg:order-2">
            
            {/* Article Content */}
            <article className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
              
              {/* Article Header Actions */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                        isLiked 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                      }`}
                    >
                      <FaHeart className="w-4 h-4" />
                      <span className="text-sm font-medium">{isLiked ? 'Liked' : 'Like'}</span>
                    </button>
                    
                    <button 
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                        isBookmarked 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-500'
                      }`}
                    >
                      <FaBookmark className="w-4 h-4" />
                      <span className="text-sm font-medium">{isBookmarked ? 'Saved' : 'Save'}</span>
                    </button>
                  </div>

                  {/* Share Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={() => setShareDropdown(!shareDropdown)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <FaShareAlt className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    
                    {shareDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                        {[
                          { name: 'Twitter', icon: FaTwitter, color: 'hover:bg-blue-50 hover:text-blue-500' },
                          { name: 'Facebook', icon: FaFacebookF, color: 'hover:bg-blue-50 hover:text-blue-600' },
                          { name: 'LinkedIn', icon: FaLinkedinIn, color: 'hover:bg-blue-50 hover:text-blue-700' },
                          { name: 'Instagram', icon: FaInstagram, color: 'hover:bg-pink-50 hover:text-pink-500' },
                          { name: 'Copy Link', icon: FaCopy, color: 'hover:bg-gray-50 hover:text-gray-700' }
                        ].map((platform, index) => (
                          <button
                            key={index}
                            onClick={() => handleShare(platform.name)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-300 ${platform.color}`}
                          >
                            <platform.icon className="w-4 h-4" />
                            <span className="text-sm">{platform.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Article Body */}
              <div className="p-6 lg:p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-base lg:text-lg mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-base lg:text-lg mb-8">
                    Aenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis posuere. Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar placerat. Nulla fringilla elit sit amet justo feugiat sodales. Morbi eleifend, enim non eleifend laoreet, odio libero lobortis lectus, non porttitor sem urna sit amet metus.
                  </p>

                  {/* Content Images Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-8">
                    {contentImages.map((image, index) => (
                      <div 
                        key={index} 
                        className="group cursor-pointer"
                        onClick={() => openImageModal(image, index)}
                      >
                        <div className="relative overflow-hidden rounded-xl bg-gray-100">
                          <img 
                            src={image.url} 
                            alt={image.caption}
                            className="w-full h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <FaSearch className="w-5 h-5 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center group-hover:text-gray-800 transition-colors duration-300">
                          {image.caption}
                        </p>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-blue-500 pl-6 my-8 bg-blue-50 p-6 rounded-r-xl">
                    <p className="text-lg text-gray-800 italic leading-relaxed">
                      "Innovation distinguishes between a leader and a follower. The key to success is not just following trends, but creating them."
                    </p>
                    <footer className="mt-4 text-sm text-gray-600">
                      — Steve Jobs, Apple Inc.
                    </footer>
                  </blockquote>
                </div>
              </div>

              {/* Article Footer */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 lg:p-8 border-t border-gray-100">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                  The Powerful Force of Humanity
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi.
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['#business', '#technology', '#innovation', '#startup', '#growth'].map((tag, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </article>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 space-y-4 sm:space-y-0">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
                <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Previous Article</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
                <span>Next Article</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.caption}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
            >
              ×
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white text-center">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};


export default BlogSingleContent;
