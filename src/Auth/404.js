import React from "react";
import { Footer } from "../components/Footer";

const Error404 = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
        <div className="text-center">
          <h1 className="text-[120px] sm:text-[160px] font-bold text-blue-600 tracking-wide">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-2">
            This Page Does Not Exist
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            The page you were looking for appears to have been moved, deleted, or does not exist.
          </p>

          <button
            onClick={() => (window.location.href = "/")}
            className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition duration-300"
          >
            Return to Home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
