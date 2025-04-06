// components/LandingPage.js

import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">Expense Tracker AI</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="hover:text-gray-400">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-4xl font-semibold mb-4">
          Track Your Expenses Effortlessly
        </h2>
        <p className="mb-6">
          Our AI-powered expense tracker helps you manage your finances with
          ease. Get insights, set budgets, and save money!
        </p>
        <Image
          src="/assets/placeholder.png"
          alt="Expense Tracker"
          width={500}
          height={300}
          className="rounded-lg shadow-lg mb-6"
        />
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Get Started
        </a>
      </main>
      <footer className="bg-gray-800 p-4 text-center">
        <p>&copy; 2023 Expense Tracker AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
