"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/placeholder.png"
            alt="AI Expense Tracker Logo"
            width={40}
            height={40}
            className="rounded"
            priority
          />
          <span className="text-2xl font-bold tracking-tight">
            Expensely<span className="text-blue-500">AI</span>
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#how" className="hover:text-white transition">
            How it works
          </a>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
        </nav>
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-semibold shadow"
        >
          Get Started
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Smarter Expense Tracking <br />
            <span className="text-blue-500">Powered by AI</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Take control of your finances with intelligent, automated insights.
            ExpenselyAI categorizes, analyzes, and helps you save—effortlessly.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold shadow text-lg"
            >
              Try Free
            </a>
            <a
              href="#features"
              className="border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition px-6 py-3 rounded-lg font-semibold text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/placeholder.png"
            alt="Expense Tracker Dashboard"
            width={480}
            height={360}
            className="rounded-2xl shadow-2xl border border-gray-800"
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-16 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Why Choose <span className="text-blue-500">ExpenselyAI</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-800 rounded-xl p-8 flex flex-col items-center shadow-lg">
            <Image
              src="/assets/placeholder.png"
              alt="AI Categorization"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">AI Categorization</h3>
            <p className="text-gray-400 text-center">
              Automatically sorts your expenses with advanced AI, so you never
              have to tag a receipt again.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 flex flex-col items-center shadow-lg">
            <Image
              src="/assets/placeholder.png"
              alt="Smart Insights"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
            <p className="text-gray-400 text-center">
              Get actionable tips and monthly reports to help you save more and
              spend smarter.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 flex flex-col items-center shadow-lg">
            <Image
              src="/assets/placeholder.png"
              alt="Privacy First"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-400 text-center">
              Your data is encrypted and never sold. You’re always in control of
              your financial information.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section
        id="how"
        className="py-16 px-6 md:px-20 bg-gray-900 border-t border-gray-800"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                1
              </span>
              <div>
                <h4 className="font-semibold text-lg">Connect Your Accounts</h4>
                <p className="text-gray-400">
                  Securely link your bank and credit cards in seconds.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                2
              </span>
              <div>
                <h4 className="font-semibold text-lg">Track & Categorize</h4>
                <p className="text-gray-400">
                  Expenses are auto-categorized and visualized in real time.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                3
              </span>
              <div>
                <h4 className="font-semibold text-lg">Get AI Insights</h4>
                <p className="text-gray-400">
                  Receive personalized tips and monthly summaries to optimize
                  your spending.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/placeholder.png"
              alt="How it works illustration"
              width={320}
              height={320}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-16 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Is my financial data safe?
            </h4>
            <p className="text-gray-400">
              Absolutely. We use bank-level encryption and never share your data
              with third parties.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              How much does ExpenselyAI cost?
            </h4>
            <p className="text-gray-400">
              Start free! Premium features are available with a subscription,
              but core tracking is always free.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Which banks are supported?
            </h4>
            <p className="text-gray-400">
              We support all major banks and credit cards. If yours isn’t
              listed, let us know!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-6 md:px-20 bg-gray-900 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-500">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image
            src="/assets/placeholder.png"
            alt="ExpenselyAI Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="font-semibold">ExpenselyAI</span>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} ExpenselyAI. All rights reserved.
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition"
            aria-label="Contact"
          >
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
