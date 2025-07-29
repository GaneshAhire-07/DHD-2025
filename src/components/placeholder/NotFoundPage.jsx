import React from "react";
import { Link } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle"; // Assuming you have this hook

// NotFoundPage Component: Displays a 404 error message when a page is not found.
// It provides a clear message and a link back to the home page.
function NotFoundPage() {
  // Set the page title dynamically using the custom hook
  usePageTitle("404 - Page Not Found");

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-light-gray p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
        {/* Large, prominent 404 heading */}
        <h1 className="text-9xl font-extrabold text-oxford-blue mb-4 animate-bounce">
          404
        </h1>
        {/* Main message for the user */}
        <h2 className="text-3xl font-bold text-dark-charcoal mb-4">
          Page Not Found
        </h2>
        {/* Descriptive text */}
        <p className="text-medium-gray text-lg mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        {/* Link back to the home page */}
        <Link
          to="/"
          className="inline-block bg-oxford-blue text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition duration-300 ease-in-out shadow-md"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
