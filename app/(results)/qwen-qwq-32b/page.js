"use client";

import Image from "next/image";
import { FaLightbulb, FaChartLine, FaMobile } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Column */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Track Your Expenses Smarter with AI
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Automatically categorize transactions, generate insights, and save
              time with our AI-powered expense tracker.
            </p>
            <div className="space-x-3">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-medium hover:opacity-80 transition">
                Get Started Free
              </button>
              <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-full hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src="/assets/placeholder.png"
              alt="Expense Tracker"
              width={600}
              height={600}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full mb-4">
                <FaLightbulb className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-medium mb-2">AI Categorization</h3>
              <p className="text-gray-400 text-sm">
                Automatically categorize transactions with 98% accuracy
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-full mb-4">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-medium mb-2">Smart Insights</h3>
              <p className="text-gray-400 text-sm">
                Get monthly spending reports and trend analysis
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-pink-600 rounded-full mb-4">
                <FaMobile className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-medium mb-2">Mobile Access</h3>
              <p className="text-gray-400 text-sm">
                Track expenses on the go with our mobile app
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {/* Step 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl text-blue-500 mb-4">1</div>
              <h3 className="text-lg font-medium mb-2">Connect Accounts</h3>
              <p className="text-gray-400 text-sm">
                Link your bank accounts in seconds
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl text-green-500 mb-4">2</div>
              <h3 className="text-lg font-medium mb-2">AI Analysis</h3>
              <p className="text-gray-400 text-sm">
                AI categorizes and analyzes your spending patterns
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl text-pink-500 mb-4">3</div>
              <h3 className="text-lg font-medium mb-2">Get Insights</h3>
              <p className="text-gray-400 text-sm">
                Receive actionable recommendations to save money
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AI Expense Tracker. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
