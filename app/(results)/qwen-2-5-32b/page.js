"use client";

import Image from "next/image";

export default function ExpenseTrackerLandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">ExpenseAI Tracker</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#features"
                className="hover:text-gray-300 transition duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-gray-300 transition duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-300 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-4">
          AI-Powered Expense Tracking
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Simplify your financial management with smart automation and
          actionable insights.
        </p>
        <button className="bg-indigo-600 px-8 py-3 rounded-md text-white font-semibold hover:bg-indigo-500 transition duration-300">
          Get Started
        </button>
        <div className="mt-12 flex justify-center">
          <Image
            src="/assets/placeholder.png"
            alt="Expense tracker demo"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <Image
              src="/assets/placeholder.png"
              alt="Automated Reports"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h4 className="text-2xl font-semibold mb-2">Automated Reports</h4>
            <p className="text-gray-400">
              Generate smart reports that help you track your expenses and
              savings automatically.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Image
              src="/assets/placeholder.png"
              alt="Real-Time Analysis"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h4 className="text-2xl font-semibold mb-2">Real-Time Analysis</h4>
            <p className="text-gray-400">
              Get up-to-date insights on your spending habits powered by AI.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Image
              src="/assets/placeholder.png"
              alt="Secure Data"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h4 className="text-2xl font-semibold mb-2">Secure Data</h4>
            <p className="text-gray-400">
              Your financial data is encrypted and securely stored.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-12">Pricing Plans</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {["Basic", "Pro", "Enterprise"].map((plan) => (
              <div
                key={plan}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700"
              >
                <h4 className="text-2xl font-semibold mb-4">{plan}</h4>
                <p className="text-gray-400 mb-6">
                  Plan details for the {plan} package.
                </p>
                <p className="text-3xl font-bold mb-6">$29/mo</p>
                <button className="w-full bg-indigo-600 px-6 py-3 rounded-md text-xl font-semibold hover:bg-indigo-500 transition duration-300">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">Get in Touch</h3>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xl font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xl font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xl font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 px-6 py-3 rounded-md text-xl font-semibold hover:bg-indigo-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ExpenseAI Tracker. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
