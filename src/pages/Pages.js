import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaArrowRight,
  FaCalendar,
  FaUser,
  FaHeart,
  FaShare,
  FaBookmark,
} from "react-icons/fa";
import { MainFooter } from "../components/Footer";
import BlogSingleContent from "./BlogSingleContent";

const blogPosts = [
  {
    title: "Free advertising for your online business",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
    description:
      "Discover powerful strategies to promote your business online without spending a fortune on advertising.",
    category: "Marketing",
    date: "Dec 15, 2024",
    author: "John Smith",
    readTime: "5 min read",
  },
  {
    title: "9 simple ways to improve your design skills",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&auto=format&fit=crop&q=60",
    description:
      "Learn practical design techniques that will instantly improve your creative work and portfolio.",
    category: "Design",
    date: "Dec 12, 2024",
    author: "Sarah Wilson",
    readTime: "7 min read",
  },
  {
    title: "Tips to quickly improve your coding speed",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60",
    description:
      "Boost your productivity with these proven techniques used by professional developers.",
    category: "Development",
    date: "Dec 10, 2024",
    author: "Mike Johnson",
    readTime: "6 min read",
  },
  {
    title: "The future of artificial intelligence in business",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60",
    description:
      "Explore how AI is transforming industries and what it means for your business strategy.",
    category: "Technology",
    date: "Dec 8, 2024",
    author: "Emily Chen",
    readTime: "8 min read",
  },
  {
    title: "Building a successful remote team culture",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60",
    description:
      "Create an engaging and productive work environment for your distributed team members.",
    category: "Management",
    date: "Dec 5, 2024",
    author: "David Brown",
    readTime: "4 min read",
  },
  {
    title: "Sustainable business practices for 2025",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60",
    description:
      "Implement eco-friendly strategies that benefit both your business and the environment.",
    category: "Business",
    date: "Dec 2, 2024",
    author: "Lisa Green",
    readTime: "6 min read",
  },
];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="flex justify-center mt-12 space-x-2">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
      >
        &lt;
      </button>
      {[1, 2, 3, 4].map((n) => (
        <button
          key={n}
          onClick={() => setCurrentPage(n)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-300 transform hover:scale-105 ${
            n === currentPage
              ? "bg-blue-600 text-white border-blue-600 shadow-lg"
              : "border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
          }`}
        >
          {n}
        </button>
      ))}
      <span className="px-3 py-2 text-gray-400">...</span>
      <button
        onClick={() => setCurrentPage(12)}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
      >
        12
      </button>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(12, prev + 1))}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
      >
        &gt;
      </button>
    </div>
  );
};

const BlogCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {post.category}
        </div>
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isLiked ? "bg-red-500 text-white" : "bg-white/90 text-gray-600 hover:text-red-500"
            }`}
          >
            <FaHeart className="w-3 h-3" />
          </button>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isBookmarked ? "bg-blue-500 text-white" : "bg-white/90 text-gray-600 hover:text-blue-500"
            }`}
          >
            <FaBookmark className="w-3 h-3" />
          </button>
          <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-green-500 transition-colors duration-300">
            <FaShare className="w-3 h-3" />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-white transition-all duration-300 flex items-center space-x-2">
            <span>Read More</span>
            <FaArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaCalendar className="w-3 h-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaUser className="w-3 h-3" />
              <span>{post.author}</span>
            </div>
          </div>
          <span className="bg-gray-100 px-2 py-1 rounded-full">{post.readTime}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {post.description}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center space-x-2 group/btn">
            <span>Continue Reading</span>
            <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogGrid = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest insights, tutorials, and industry trends that matter to you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
        <Pagination />
      </main>
      <MainFooter />
      <BlogSingleContent />
    </div>
  );
};

export default BlogGrid;