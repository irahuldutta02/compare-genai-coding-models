// components/LandingPage.js
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Expense Tracker
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Effortlessly track your expenses and gain insights with our
              AI-driven expense tracker. Make informed financial decisions and
              save money.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
              Get Started
            </button>
          </div>
          <div>
            <Image
              src="/assets/placeholder.png"
              alt="Expense Tracker"
              width={600}
              height={400}
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">AI-Driven Insights</h3>
            <p className="text-gray-300">
              Get personalized insights and recommendations based on your
              spending habits.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-800 rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              Automated Categorization
            </h3>
            <p className="text-gray-300">
              Automatically categorize your expenses for easy tracking.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-800 rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">Budgeting Tools</h3>
            <p className="text-gray-300">
              Set budgets and track your progress to stay on top of your
              finances.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-800 rounded-md p-6">
            <p className="text-gray-300 italic mb-4">
              &quot;This expense tracker has completely transformed how I manage
              my finances. The AI insights are invaluable!&quot;
            </p>
            <p className="font-semibold">- John Doe</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-gray-800 rounded-md p-6">
            <p className="text-gray-300 italic mb-4">
              &quot;I love how easy it is to track my expenses and see where my
              money is going. Highly recommend!&quot;
            </p>
            <p className="font-semibold">- Jane Smith</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} AI Expense Tracker. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
