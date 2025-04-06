// src/components/LandingPage.jsx
"use client"; // Mark this as a Client Component

import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">ExpenseAI</div>
        <div>
          {/* Example Button - could link to login/signup */}
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-md transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Effortless Expense Tracking with AI
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Stop guessing, start knowing. Let our AI automatically categorize your
          spending, find savings opportunities, and simplify your financial
          life.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out mb-12 shadow-lg">
          Try ExpenseAI Free
        </button>

        {/* Placeholder Image Area */}
        <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
          <Image
            src="/assets/placeholder.png" // Your placeholder image path
            alt="AI Expense Tracker Dashboard Preview"
            layout="fill" // Fills the parent container
            objectFit="cover" // Adjusts how the image covers the area
            priority // Helps load the hero image faster
          />
          {/* Optional: Add a subtle overlay */}
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Features That Simplify Your Life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">
                Smart Categorization
              </h3>
              <p className="text-gray-300">
                Our AI automatically sorts your expenses into relevant
                categories, saving you hours of manual work.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">
                Insightful Reports
              </h3>
              <p className="text-gray-300">
                Visualize your spending habits with easy-to-understand charts
                and summaries generated automatically.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">
                Savings Finder
              </h3>
              <p className="text-gray-300">
                Identify potential savings opportunities, duplicate charges, and
                forgotten subscriptions with AI analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Sign up today for a free trial and experience the future of
            effortless expense management. No credit card required.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out shadow-lg">
            Start Your Free Trial Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ExpenseAI. All rights reserved.
          </p>
          <div className="mt-2">
            {/* Replace # with actual links */}
            <a href="#" className="hover:text-indigo-400 mx-2 text-sm">
              Privacy Policy
            </a>
            <span className="mx-1">|</span>
            <a href="#" className="hover:text-indigo-400 mx-2 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
