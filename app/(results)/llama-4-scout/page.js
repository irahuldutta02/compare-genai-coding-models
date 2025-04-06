import Image from "next/image";
import Head from "next/head";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>AI-Powered Expense Tracker</title>
      </Head>
      <div className="bg-gray-900 text-gray-100 h-screen">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Expense Tracker</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </nav>

        <main className="container mx-auto p-4 mt-10 flex flex-col items-center justify-center h-[80vh]">
          <h2 className="text-5xl font-bold mb-4">
            Track Your Expenses with AI
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Effortlessly categorize and analyze your expenses with our
            cutting-edge AI technology.
          </p>
          <Image
            src="/assets/placeholder.png"
            alt="Expense Tracker"
            width={400}
            height={200}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
            Sign Up for Free
          </button>
        </main>

        <footer className="bg-gray-800 text-gray-400 p-4 text-center">
          <p>&copy; 2024 Expense Tracker. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
