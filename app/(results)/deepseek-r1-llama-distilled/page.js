import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                SmartExpenses
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Features
              </a>
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Track Your Expenses with AI-Powered Insights
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Automatically categorize transactions, set budgets, and receive
              smart financial recommendations powered by AI.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg transition">
              Start Free Trial
            </button>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="bg-gray-800 rounded-2xl p-8">
              <Image
                src="/assets/placeholder.png"
                alt="Expense Tracker Preview"
                width={560}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-20" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Powerful Features for Smart Money Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Auto Categorization
              </h3>
              <p className="text-gray-400">
                AI automatically categorizes your transactions into common
                categories like food, transportation, and shopping.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Budget Recommendations
              </h3>
              <p className="text-gray-400">
                Get personalized budget suggestions based on your spending
                patterns and financial goals.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Insights</h3>
              <p className="text-gray-400">
                Advanced analytics and spending trends to help you make smarter
                financial decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their expenses with
            AI-powered insights.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full transition hover:bg-gray-100">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-lg mb-4 md:mb-0">
              © 2023 SmartExpenses. All rights reserved.
            </div>
            <div className="text-gray-400 text-lg">
              Making expense tracking intelligent and simple.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
