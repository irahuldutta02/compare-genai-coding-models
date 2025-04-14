"use client";

import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl font-bold tracking-wide">AI Expense Tracker</h1>
        <div className="space-x-6">
          <a
            href="#features"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            How It Works
          </a>
          <a
            href="#download"
            className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 px-4 py-2 rounded-md font-semibold"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-8 py-20 gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Track Your Expenses <br /> Smarter with AI
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg">
            Automate your budgeting and gain insights with our AI-powered
            expense tracker. Stay on top of your finances effortlessly.
          </p>
          <a
            href="#download"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 px-8 py-3 rounded-md font-semibold"
          >
            Try It Free
          </a>
        </div>
        <div className="flex-1 max-w-md w-full">
          <Image
            src="/assets/placeholder.png"
            alt="AI Expense Tracker Illustration"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-gray-800 py-20 px-8 max-w-7xl mx-auto rounded-lg mb-20"
      >
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <FeatureCard
            title="AI Categorization"
            description="Automatically categorize your expenses with smart AI algorithms."
            icon={
              <svg
                className="w-12 h-12 text-indigo-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z"
                ></path>
              </svg>
            }
          />
          <FeatureCard
            title="Real-time Insights"
            description="Get instant analytics and reports on your spending habits."
            icon={
              <svg
                className="w-12 h-12 text-indigo-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17a4 4 0 100-8 4 4 0 000 8zm-7 4a9 9 0 1118 0H4z"
                ></path>
              </svg>
            }
          />
          <FeatureCard
            title="Secure & Private"
            description="Your data is encrypted and never shared without your consent."
            icon={
              <svg
                className="w-12 h-12 text-indigo-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2v2h4v-2zm6 2v-2a6 6 0 10-12 0v2a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2z"
                ></path>
              </svg>
            }
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-8 mb-20">
        <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
        <div className="space-y-12 max-w-4xl mx-auto text-gray-300">
          <Step
            number={1}
            title="Connect Your Accounts"
            description="Securely link your bank and credit accounts to import expenses automatically."
          />
          <Step
            number={2}
            title="AI Analyzes Your Spending"
            description="Our AI categorizes and analyzes your transactions to provide clear insights."
          />
          <Step
            number={3}
            title="Manage & Save"
            description="Set budgets, track goals, and get personalized tips to save more."
          />
        </div>
      </section>

      {/* Call to Action / Download Section */}
      <section
        id="download"
        className="bg-indigo-700 py-20 px-8 text-center rounded-lg max-w-4xl mx-auto mb-20"
      >
        <h3 className="text-4xl font-extrabold mb-6">
          Ready to Take Control of Your Finances?
        </h3>
        <p className="mb-8 text-indigo-200 max-w-xl mx-auto">
          Download the AI Expense Tracker today and start your journey to
          smarter spending.
        </p>
        <a
          href="#"
          className="inline-block bg-gray-900 text-indigo-400 hover:text-indigo-300 px-10 py-4 rounded-md font-semibold transition-colors duration-300"
        >
          Download Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AI Expense Tracker. All rights
        reserved.
      </footer>
    </main>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      <div>
        <h5 className="text-xl font-semibold mb-1">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
