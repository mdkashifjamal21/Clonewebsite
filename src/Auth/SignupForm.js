import React from "react";
import { Footer } from "../components/Footer";

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#f0f4ff] to-white flex items-center justify-center px-4">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            Create an Account
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Input grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1 md:col-span-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1 md:col-span-2"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start text-sm text-gray-600">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 mr-2 text-blue-600"
              />
              <label htmlFor="terms">
                By clicking Checkbox, you agree to use our “Form” terms and
                consent cookie usage in browser.
              </label>
            </div>

            {/* Submit button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition duration-300"
              >
                Create Account →
              </button>
            </div>
          </form>

          {/* Already have an account */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Sign In
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignupForm;
