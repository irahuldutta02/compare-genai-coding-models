"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-animate");
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-fadeIn");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/assets/placeholder.png"
                  alt="ExpenseAI Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  ExpenseAI
                </span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a
                  href="#features"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white"
                >
                  How It Works
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Testimonials
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white">
                Log in
              </button>
              <button className="ml-4 px-4 py-2 text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Sign up
              </button>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-800">
              <div className="flex items-center px-4">
                <button className="block text-base font-medium text-gray-300 hover:text-white">
                  Log in
                </button>
                <button className="ml-4 px-4 py-2 text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div
        className={`relative pt-24 pb-16 overflow-hidden transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                <span className="block">Manage Expenses</span>
                <span className="block bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Powered by AI
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                ExpenseAI automatically categorizes your expenses, identifies
                saving opportunities, and provides personalized financial
                insights—all in real-time.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <form className="mt-3 sm:flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:flex-1"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0"
                  >
                    Get Started Free
                  </button>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  Start your 14-day free trial. No credit card required.
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="/assets/placeholder.png"
                    alt="ExpenseAI Dashboard"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Smart Expense Management
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Our AI-powered platform makes expense tracking effortless and
              insightful.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="scroll-animate opacity-0 flex flex-col bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
                  <div className="h-12 w-12 bg-white rounded-md flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
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
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-medium text-white">
                    Automatic Categorization
                  </h3>
                  <p className="mt-3 text-base text-gray-400">
                    Our AI automatically categorizes your expenses, saving you
                    time and ensuring accurate financial tracking.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="scroll-animate opacity-0 flex flex-col bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
                  <div className="h-12 w-12 bg-white rounded-md flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-medium text-white">
                    Spending Insights
                  </h3>
                  <p className="mt-3 text-base text-gray-400">
                    Get personalized insights about your spending habits and
                    discover opportunities to save money.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="scroll-animate opacity-0 flex flex-col bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
                  <div className="h-12 w-12 bg-white rounded-md flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-medium text-white">
                    Real-time Tracking
                  </h3>
                  <p className="mt-3 text-base text-gray-400">
                    Track your expenses in real-time across all your accounts
                    and get instant notifications for unusual spending.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">
              How It Works
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Simple, Powerful, Intelligent
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              ExpenseAI makes financial management effortless with just a few
              simple steps.
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              {/* Step 1 */}
              <div className="scroll-animate opacity-0 mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-white">
                    Connect Your Accounts
                  </h3>
                  <p className="mt-2 text-base text-gray-400">
                    Securely connect your bank accounts, credit cards, and other
                    financial services to get a complete view of your finances.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="scroll-animate opacity-0 mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-white">
                    Let AI Do the Work
                  </h3>
                  <p className="mt-2 text-base text-gray-400">
                    Our AI automatically categorizes transactions, identifies
                    patterns, and generates insights based on your spending
                    habits.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="scroll-animate opacity-0 mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-white">
                    Make Smarter Financial Decisions
                  </h3>
                  <p className="mt-2 text-base text-gray-400">
                    Use the personalized recommendations and insights to
                    optimize your spending, save more, and achieve your
                    financial goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">
              Pricing
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Plans for Every Need
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Choose the perfect plan for your financial management needs.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {/* Free Plan */}
            <div className="scroll-animate opacity-0 rounded-lg shadow-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="px-6 py-8 bg-gray-900 sm:p-10 sm:pb-6">
                <div>
                  <h3
                    className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-800 text-blue-400"
                    id="tier-standard"
                  >
                    Free
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold text-white">
                  $0
                  <span className="ml-1 text-2xl font-medium text-gray-400">
                    /mo
                  </span>
                </div>
                <p className="mt-5 text-lg text-gray-400">
                  Perfect for individuals just starting to track expenses.
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-900 sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-400">
                      Connect up to 2 accounts
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-400">
                      Basic expense categorization
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-400">
                      Monthly spending reports
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full bg-gray-800 border border-gray-700 rounded-md py-3 text-sm font-semibold text-white text-center hover:bg-gray-700"
                  >
                    Start for Free
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="scroll-animate opacity-0 rounded-lg shadow-lg overflow-hidden border border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="px-6 py-8 bg-gray-900 sm:p-10 sm:pb-6">
                <div>
                  <h3
                    className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-900 text-blue-400"
                    id="tier-standard"
                  >
                    Premium
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold text-white">
                  $9.99
                  <span className="ml-1 text-2xl font-medium text-gray-400">
                    /mo
                  </span>
                </div>
                <p className="mt-5 text-lg text-gray-400">
                  For individuals who want advanced financial insights.
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-900 sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-400">
                      Connect unlimited accounts
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-400">
                      Advanced AI categorization
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-400">
                      Personalized saving recommendations
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-400">
                      Budget planning tools
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full bg-gradient-to-r from-purple-500 to-blue-600 rounded-md py-3 text-sm font-semibold text-white text-center hover:from-purple-600 hover:to-blue-700"
                  >
                    Get Premium
                  </a>
                </div>
              </div>
            </div>

            {/* Business Plan */}
            <div className="scroll-animate opacity-0 rounded-lg shadow-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="px-6 py-8 bg-gray-900 sm:p-10 sm:pb-6">
                <div>
                  <h3
                    className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-800 text-blue-400"
                    id="tier-standard"
                  >
                    Business
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold text-white">
                  $24.99
                  <span className="ml-1 text-2xl font-medium text-gray-400">
                    /mo
                  </span>
                </div>
                <p className="mt-5 text-lg text-gray-400">
                  For small businesses and teams managing expenses.
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-900 sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-400">
                      Everything in Premium
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-400">
                      Multi-user access (up to 5 users)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-400">
                      Receipt scanning & processing
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-400">
                      Tax preparation reports
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full bg-gray-800 border border-gray-700 rounded-md py-3 text-sm font-semibold text-white text-center hover:bg-gray-700"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              What Our Users Say
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Discover how ExpenseAI has transformed financial management for
              thousands of users.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="scroll-animate opacity-0 bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    className="h-12 w-12 rounded-full"
                    src="/assets/placeholder.png"
                    alt="User"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">
                    Sarah Johnson
                  </h4>
                  <p className="text-blue-400">Freelance Designer</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-400">
                  &ldquo;ExpenseAI has completely changed how I manage my
                  finances. The automatic categorization saves me hours each
                  month, and the insights have helped me save an extra $200
                  monthly!&rdquo;
                </p>
              </div>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="scroll-animate opacity-0 bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    className="h-12 w-12 rounded-full"
                    src="/assets/placeholder.png"
                    alt="User"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">
                    Michael Rodriguez
                  </h4>
                  <p className="text-blue-400">Small Business Owner</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-400">
                  &ldquo;As a business owner, keeping track of expenses was
                  always a headache. ExpenseAI&apos;s business plan has
                  streamlined our financial management and made tax season so
                  much easier!&rdquo;
                </p>
              </div>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="scroll-animate opacity-0 bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    className="h-12 w-12 rounded-full"
                    src="/assets/placeholder.png"
                    alt="User"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">Emily Chen</h4>
                  <p className="text-blue-400">Graduate Student</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-400">
                  &ldquo;On a tight student budget, ExpenseAI has been a
                  lifesaver. The free plan gives me everything I need to track
                  my spending and stay within my budget. Highly
                  recommend!&rdquo;
                </p>
              </div>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Transform Your Financial Management?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Join thousands of users who have already simplified their expense
              tracking with ExpenseAI.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                >
                  Get Started Free
                </a>
              </div>
              <div className="ml-3 inline-flex">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    API Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-white"
                  >
                    Data Processing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="/assets/placeholder.png"
                  alt="ExpenseAI Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  ExpenseAI
                </span>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-base text-gray-500">
                &copy; 2023 ExpenseAI, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
