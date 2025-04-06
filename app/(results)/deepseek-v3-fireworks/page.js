import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">ExpenseAI</div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Track Expenses Smarter with AI
        </h1>
        <p className="text-gray-400 text-xl mb-8">
          Automate your expense tracking, gain insights, and save time with our
          AI-powered solution.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
          Try It Free
        </button>
        <div className="mt-12">
          <Image
            src="/assets/placeholder.png"
            alt="Expense Tracker Dashboard"
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Automated Tracking</h3>
              <p className="text-gray-400">
                Let AI categorize and track your expenses automatically.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Insightful Reports</h3>
              <p className="text-gray-400">
                Get detailed reports and visualizations of your spending habits.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Secure & Private</h3>
              <p className="text-gray-400">
                Your data is encrypted and never shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Simplify Your Finances?
        </h2>
        <p className="text-gray-400 text-xl mb-8">
          Join thousands of users who are already saving time and money with
          ExpenseAI.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
          Start Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          &copy; 2023 ExpenseAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
