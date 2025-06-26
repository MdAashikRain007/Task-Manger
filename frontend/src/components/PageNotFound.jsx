import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center px-6 py-10 bg-white rounded-2xl shadow-xl">
        <h1 className="text-6xl font-bold text-red-600 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
