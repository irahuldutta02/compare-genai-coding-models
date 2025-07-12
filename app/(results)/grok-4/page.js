"use client";

import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-gray-800">
        <div className="text-2xl font-bold">AI Expense Tracker</div>
        <nav className="space-x-4">
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center bg-gradient-to-b from-gray-800 to-gray-900">
        <h1 className="text-5xl font-bold mb-4">
          Track Your Expenses with AI Power
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Effortlessly manage your finances with intelligent categorization,
          insights, and predictions. Say goodbye to manual tracking!
        </p>
        <button className="px-6 py-3 bg-blue-600 rounded-lg text-lg hover:bg-blue-700">
          Get Started Free
        </button>
        <div className="mt-10">
          <Image
            src="/assets/placeholder.png"
            alt="App Screenshot"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              AI-Powered Categorization
            </h3>
            <p>
              Automatically sort your expenses using advanced AI algorithms.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Smart Insights</h3>
            <p>Get personalized financial advice and spending predictions.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Secure & Private</h3>
            <p>Your data is encrypted and never shared without permission.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg mb-8">
            We are dedicated to making financial management simple and
            intelligent. Our AI-driven tools help you stay on top of your
            expenses effortlessly.
          </p>
          <Image
            src="/assets/placeholder.png"
            alt="Team"
            width={600}
            height={300}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-b from-gray-900 to-gray-800">
        <h2 className="text-4xl font-bold mb-4">Ready to Take Control?</h2>
        <p className="text-xl mb-8">
          Sign up today and transform your finances.
        </p>
        <button className="px-6 py-3 bg-blue-600 rounded-lg text-lg hover:bg-blue-700">
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-900">
        <p>&copy; 2025 AI Expense Tracker. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="#" className="hover:text-gray-300">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
