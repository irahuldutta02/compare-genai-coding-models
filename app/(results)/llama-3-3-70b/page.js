import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="h-screen bg-gray-900 text-gray-100 flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold mb-4">AI-Powered Expense Tracker</h1>
      <p className="text-xl mb-8">
        Take control of your finances with our cutting-edge expense tracking
        solution.
      </p>
      <div className="flex justify-center mb-8">
        <Image
          src="/assets/placeholder.png"
          alt="Expense Tracker Image"
          width={400}
          height={250}
          className="rounded-lg"
        />
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
      <p className="text-gray-500 text-sm mt-8">
        &copy; 2024 AI-Powered Expense Tracker. All rights reserved.
      </p>
    </div>
  );
};

export default LandingPage;
