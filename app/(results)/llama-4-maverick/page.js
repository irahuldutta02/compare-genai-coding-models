import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-24 2xl:px-32">
        <nav className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">ExpenseTracker</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </nav>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold mb-4">
              Track Your Expenses with AI-Powered Insights
            </h1>
            <p className="text-lg mb-8">
              Get a clear picture of your spending habits and make informed
              financial decisions with our cutting-edge AI technology.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/assets/placeholder.png"
              alt="Expense Tracker Dashboard"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto p-4 md:p-6 lg:px-16 xl:px-24 2xl:px-32 mt-16">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">AI-Powered Insights</h3>
            <p className="text-lg">
              Get personalized recommendations to optimize your expenses.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              Automated Expense Tracking
            </h3>
            <p className="text-lg">
              Effortlessly track your expenses with our automated system.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Customizable Budgeting</h3>
            <p className="text-lg">
              Create a budget that suits your needs and stay on track.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="container mx-auto p-4 md:p-6 lg:px-16 xl:px-24 2xl:px-32 mt-16 mb-16">
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Tracking Your Expenses Today
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 p-4 text-center">
        <p className="text-lg">&copy; 2024 ExpenseTracker</p>
      </footer>
    </div>
  );
};

export default LandingPage;
