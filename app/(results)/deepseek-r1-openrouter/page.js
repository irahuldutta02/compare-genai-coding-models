"use client";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <span className="text-xl font-bold">ExpenseAI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="hover:text-indigo-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-indigo-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Smart Expense Tracking
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Automatically categorize expenses, predict budgets, and gain
              financial insights with our intelligent expense management system.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-colors">
              Get Started Free
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-96">
              <Image
                src="/assets/placeholder.png"
                alt="Dashboard Preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Auto-Categorization",
                description:
                  "AI-powered expense categorization with 95% accuracy",
                icon: "📊",
              },
              {
                title: "Real-Time Insights",
                description: "Instant spending analysis and budget predictions",
                icon: "⚡",
              },
              {
                title: "Multi-Device Sync",
                description: "Access your data anywhere, anytime",
                icon: "🔒",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-700 p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Simple Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                tier: "Starter",
                price: "0",
                features: ["Basic Tracking", "5GB Storage", "Weekly Reports"],
              },
              {
                tier: "Pro",
                price: "9",
                features: [
                  "Advanced AI",
                  "Unlimited Storage",
                  "Real-Time Alerts",
                  "Priority Support",
                ],
                featured: true,
              },
              {
                tier: "Enterprise",
                price: "29",
                features: [
                  "Team Management",
                  "Custom Reports",
                  "Dedicated Support",
                  "SLA",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-8 rounded-xl border ${
                  plan.featured
                    ? "border-indigo-500 scale-105"
                    : "border-gray-700"
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.tier}</h3>
                <div className="text-4xl font-bold mb-6">
                  ${plan.price}
                  <span className="text-gray-400 text-lg">/mo</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 py-3 rounded-lg font-medium bg-indigo-600 hover:bg-indigo-700 transition-colors">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 ExpenseAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
