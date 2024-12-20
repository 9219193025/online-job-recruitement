// src/pages/HomePage.js
import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(true); // Toggle between Login and Register forms

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Career.com</h1>
        <p className="text-xl">Your dream job is just a click away.</p>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Trusted by Top Companies</h3>
              <p>We partner with leading companies like TCS, Wipro, Infosys, and more.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Easy Application Process</h3>
              <p>Apply for jobs with a few simple steps. No hassle, just opportunities.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Exclusive Job Listings</h3>
              <p>Get access to exclusive job listings from top employers around the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Login / Register Toggle */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Sign Up or Login</h2>
          <div className="flex justify-center gap-4">
            <button
              className={`px-6 py-2 rounded-lg text-white ${showLogin ? 'bg-blue-600' : 'bg-gray-500'}`}
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
            <button
              className={`px-6 py-2 rounded-lg text-white ${!showLogin ? 'bg-blue-600' : 'bg-gray-500'}`}
              onClick={() => setShowLogin(false)}
            >
              Register
            </button>
          </div>

          {/* Conditional rendering for Login/Register */}
          {showLogin ? <Login /> : <Register />}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
