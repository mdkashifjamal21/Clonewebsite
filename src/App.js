// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import Pages from "./pages/Pages";
import Support from "./pages/Support";
import BlogSingleContent from "./pages/BlogSingleContent";
import LoginForm from "./Auth/LoginForm";
import SignupForm from "./Auth/SignupForm";
import Error404 from "./Auth/404";
import Loader from "./Auth/Loader";

const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/pages/blog-single" element={<BlogSingleContent />} />
        <Route path="/auth/signin" element={<LoginForm />} />
        <Route path="/auth/signup" element={<SignupForm />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;