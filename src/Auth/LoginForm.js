import React from "react";
import { Footer } from "../components/Footer";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#f0f4ff] to-white flex items-center justify-center px-4">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            Login to Your Account
          </h2>

          {/* Form Grid */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Username or email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Checkbox and Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-500">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-blue-600" />
                <span>Keep me signed in</span>
              </label>
              <button
                type="button"
                onClick={() => alert("Password reset feature not implemented")}
                className="hover:text-blue-600 mt-2 sm:mt-0"
              >
                Forgot Password?
              </button>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition duration-300"
              >
                Create Account →
              </button>
            </div>
          </form>

          {/* Sign up link */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginForm;
