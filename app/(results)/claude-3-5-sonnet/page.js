"use client";

import Image from "next/image";
import { useState } from "react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                SmartSpend AI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a
                  href="#features"
                  className="hover:text-purple-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="hover:text-purple-400 transition-colors"
                >
                  Pricing
                </a>
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 p-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="hover:text-purple-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="hover:text-purple-400 transition-colors"
              >
                Pricing
              </a>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}
              Expense Tracking
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Transform your financial management with intelligent expense
              tracking, powered by advanced AI algorithms.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-purple-600 hover:border-purple-500 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
            <Image
              src="/assets/placeholder.png"
              alt="Dashboard Preview"
              width={1200}
              height={675}
              className="rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Intelligent Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Categorization",
                description:
                  "AI automatically categorizes your expenses with high accuracy",
              },
              {
                title: "Predictive Analytics",
                description:
                  "Forecast future expenses based on your spending patterns",
              },
              {
                title: "Real-time Insights",
                description:
                  "Get instant notifications and insights about your spending",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Transform Your Expense Management?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of users who have already simplified their financial
            tracking with SmartSpend AI.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
