"use client";

import Image from "next/image";
import { useState } from "react";

export default function ExpenseTrackerLanding() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for signing up! We'll contact you at ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xl font-bold">FinAI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>

          <button className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              AI-Powered Expense Tracking
              <span className="text-indigo-400"> Made Simple</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Let our AI analyze your spending patterns and provide intelligent
              insights to help you save money effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                Start Free Trial
              </button>
              <button className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                See How It Works
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/assets/placeholder.png"
                alt="Expense Tracker Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Expense Categorization",
                description:
                  "Our AI automatically categorizes your transactions with 95% accuracy.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                ),
              },
              {
                title: "Smart Budgeting",
                description:
                  "Get personalized budget recommendations based on your spending habits.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Real-time Insights",
                description:
                  "Instant notifications and reports about your financial health.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-colors"
              >
                <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are saving more money with our
            AI-powered expense tracker.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row max-w-md mx-auto sm:max-w-xl"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg sm:rounded-r-none mb-2 sm:mb-0 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 rounded-lg sm:rounded-l-none hover:bg-indigo-700 transition-colors font-medium"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-bold">FinAI</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} FinAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
