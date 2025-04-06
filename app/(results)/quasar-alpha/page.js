"use client";

import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-3">
          <Image
            src="/assets/placeholder.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">AI Expense</span>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-indigo-400">
            Features
          </a>
          <a href="#pricing" className="hover:text-indigo-400">
            Pricing
          </a>
          <a href="#contact" className="hover:text-indigo-400">
            Contact
          </a>
        </nav>
        <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-md font-semibold">
          Sign Up
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 gap-12">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Smarter Expense Tracking with AI
          </h1>
          <p className="text-lg text-gray-300">
            Effortlessly manage your finances. Let our AI categorize, analyze,
            and optimize your spending so you can focus on what matters.
          </p>
          <div className="space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md font-semibold">
              Get Started
            </button>
            <button className="border border-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-md font-semibold">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/placeholder.png"
            alt="Dashboard Preview"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="px-8 py-20 bg-gray-800 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl">
          <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">AI Categorization</h3>
            <p className="text-gray-300">
              Automatically categorize your expenses with high accuracy using
              our AI engine.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Smart Insights</h3>
            <p className="text-gray-300">
              Get personalized insights and suggestions to optimize your
              spending habits.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Secure Sync</h3>
            <p className="text-gray-300">
              Connect your bank accounts securely and keep your data private and
              encrypted.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="px-8 py-20 flex flex-col items-center bg-gray-900"
      >
        <h2 className="text-3xl font-bold mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          <div className="bg-gray-800 p-8 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Free</h3>
            <p className="text-3xl font-bold mb-4">$0</p>
            <p className="text-gray-300 mb-6">Basic expense tracking</p>
            <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md font-semibold">
              Get Started
            </button>
          </div>
          <div className="bg-indigo-600 p-8 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-4">$9/mo</p>
            <p className="text-gray-200 mb-6">Advanced AI insights</p>
            <button className="bg-white text-indigo-600 hover:bg-gray-200 px-6 py-3 rounded-md font-semibold">
              Upgrade
            </button>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-3xl font-bold mb-4">Custom</p>
            <p className="text-gray-300 mb-6">Tailored solutions</p>
            <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-8 py-20 bg-gray-800 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form className="w-full max-w-2xl space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 bg-gray-900 text-center text-gray-400">
        &copy; {new Date().getFullYear()} AI Expense. All rights reserved.
      </footer>
    </main>
  );
}
