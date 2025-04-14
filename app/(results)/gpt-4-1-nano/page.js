// app/components/LandingPage.jsx
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 font-sans">
      {/* Header */}
      <header className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0 text-center md:text-left">
          AI-Powered Expense Tracker
        </h1>
        <a
          href="#get-started"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Get Started
        </a>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-8 md:space-y-0 md:space-x-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Simplify Your Finances with AI
          </h2>
          <p className="text-gray-300 mb-6">
            Track your expenses effortlessly with our intelligent AI assistant.
            Get insights, categorize spending, and stay on top of your
            budget—all in one sleek dark mode interface.
          </p>
          <a
            href="#demo"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Watch Demo
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <Image
              src="/assets/placeholder.png"
              alt="Expense tracker illustration"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="w-full max-w-7xl mt-16 px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Features
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Feature 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-semibold mb-4">Smart Categorization</h4>
            <p className="text-gray-400">
              Automatically categorize your expenses for better insights and
              budgeting.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-semibold mb-4">Real-Time Insights</h4>
            <p className="text-gray-400">
              Get instant feedback on your spending habits and financial health.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-semibold mb-4">Secure & Private</h4>
            <p className="text-gray-400">
              Your data is encrypted and stored securely, respecting your
              privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="get-started"
        className="w-full max-w-7xl mt-16 px-4 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Take Control of Your Finances?
        </h3>
        <a
          href="#signup"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
        >
          Sign Up Now
        </a>
      </section>
    </div>
  );
}
