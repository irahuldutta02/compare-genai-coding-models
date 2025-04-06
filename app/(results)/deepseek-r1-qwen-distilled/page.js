"use client";

import { useState } from "react";
import Image from "next/image";

export default function LandingPage() {
  const [isDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">ExpenseAI</div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="hover:text-gray-300">
              Features
            </a>
            <a href="#pricing" className="hover:text-gray-300">
              Pricing
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            AI-Powered Expense Tracking
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Automatically categorize, analyze, and optimize your expenses with
            machine learning.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg">
              Try It Free
            </button>
            <button className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-lg text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Categorization",
                description:
                  "Automatic classification of expenses using machine learning.",
              },
              {
                title: "Real-time Insights",
                description:
                  "Get instant insights into your spending patterns and trends.",
              },
              {
                title: "Smart Budgeting",
                description:
                  "AI-powered budget recommendations based on your spending habits.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src="/assets/placeholder.png"
                      alt={feature.title}
                      className="rounded-full"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Managing Your Expenses Today
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of users who have transformed their financial
            management.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
