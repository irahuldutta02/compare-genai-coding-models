// components/LandingPage.jsx
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-800">
        <div className="text-2xl font-bold">AI Expense Tracker</div>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-gray-400">
            Features
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Take Control of Your Finances
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Powered by AI, our expense tracker helps you manage your spending
          effortlessly and intelligently.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg">
          Try it for Free
        </button>
        <div className="mt-10">
          <Image
            src="/assets/placeholder.png"
            alt="Expense Tracker Preview"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Smart Categorization</h3>
            <p className="text-gray-400">
              Automatically categorize your expenses using AI for better
              insights.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Real-Time Analytics</h3>
            <p className="text-gray-400">
              Get real-time updates and analytics on your spending habits.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Customizable Reports</h3>
            <p className="text-gray-400">
              Generate detailed reports tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-6">
            We are a team of passionate developers and financial experts
            dedicated to making personal finance management simple and
            effective. Our AI-powered expense tracker is designed to help you
            achieve your financial goals with ease.
          </p>
          <Image
            src="/assets/placeholder.png"
            alt="Team Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-3xl mx-auto space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded mt-2"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded mt-2"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded mt-2"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} AI Expense Tracker. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
