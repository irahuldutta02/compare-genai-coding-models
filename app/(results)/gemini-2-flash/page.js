"use client";

import Image from "next/image";

export default function ExpenseTrackerLandingPage() {
  return (
    <div className="bg-gray-900 text-white font-sans antialiased">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            AI Expense Tracker
          </a>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">
              Track Your Expenses Effortlessly with AI
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              Let our AI do the work. Get insights, budget smarter, and save
              more.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md text-xl transition duration-300">
              Start Tracking Now
            </button>
          </div>
          <div>
            <Image
              src="/assets/placeholder.png"
              alt="AI Expense Tracker Dashboard"
              width={768}
              height={512}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                AI-Powered Categorization
              </h3>
              <p className="text-gray-400">
                Automatically categorize your expenses for clear insights.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Smart Budgeting</h3>
              <p className="text-gray-400">
                Set budgets and receive alerts to stay on track.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Insightful Reports</h3>
              <p className="text-gray-400">
                Visualize your spending habits with detailed reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; 2024 AI Expense Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}
