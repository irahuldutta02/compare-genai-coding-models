/* ExpenseTrackerLanding.tsx
 *
 * A single, client-side Next.js page component for the landing page of an
 * AI-powered expense tracker. Uses Tailwind CSS for a modern dark-mode look.
 */

"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ExpenseTrackerLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <Head>
        <title>ExpensAI – AI-Powered Expense Tracker</title>
        <meta
          name="description"
          content="Track, predict, and control your spending with the power of AI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Root container */}
      <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
        {/* ---------- Navbar ---------- */}
        <header className="border-b border-gray-800">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between
                       px-4 py-4 md:px-6 lg:px-8"
            aria-label="Primary"
          >
            {/* Brand */}
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight
                         text-transparent bg-clip-text
                         bg-gradient-to-r from-cyan-400 to-fuchsia-500"
            >
              ExpensAI
            </Link>

            {/* Desktop links */}
            <ul className="hidden gap-8 text-sm md:flex">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="transition-colors hover:text-cyan-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="hidden md:block">
              <a
                href="/auth/signup"
                className="rounded-md bg-cyan-500 px-4 py-2 text-sm
                           font-semibold text-gray-900 transition hover:bg-cyan-400"
              >
                Get started – It’s free
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="block md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6 text-gray-100"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="border-t border-gray-800 md:hidden">
              <ul className="space-y-4 px-4 py-6 text-sm">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block transition-colors hover:text-cyan-400"
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/auth/signup"
                    className="block rounded-md bg-cyan-500 px-4 py-2
                               font-semibold text-gray-900 transition
                               hover:bg-cyan-400"
                  >
                    Get started – It’s free
                  </a>
                </li>
              </ul>
            </div>
          )}
        </header>

        {/* ---------- Hero ---------- */}
        <section
          className="mx-auto grid max-w-7xl grid-cols-1 items-center
                     gap-12 px-4 py-24 md:grid-cols-2 md:px-6 lg:px-8"
        >
          {/* Text */}
          <div>
            <h1
              className="mb-6 text-4xl font-extrabold leading-tight
                           tracking-tight sm:text-5xl"
            >
              Track your expenses
              <span
                className="text-transparent bg-clip-text
                           bg-gradient-to-r from-cyan-400 to-fuchsia-500"
              >
                smarter
              </span>
              .
            </h1>

            <p className="mb-10 max-w-md text-lg text-gray-400">
              ExpensAI uses real-time AI to categorize transactions, predict
              cash-flow, and surface insights that help you save more.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/auth/signup"
                className="rounded-md bg-cyan-500 px-6 py-3 font-semibold
                           text-gray-900 transition hover:bg-cyan-400"
              >
                Start tracking – Free
              </a>
              <a
                href="#features"
                className="rounded-md border border-gray-700 px-6 py-3
                           font-semibold text-gray-200 transition
                           hover:border-gray-500 hover:text-white"
              >
                See features
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative mx-auto w-full max-w-md">
            <Image
              src="/assets/placeholder.png"
              alt="Dashboard preview"
              width={640}
              height={640}
              className="rounded-lg border border-gray-800
                         shadow-xl shadow-fuchsia-500/20"
            />
          </div>
        </section>

        {/* ---------- Features ---------- */}
        <section
          id="features"
          className="mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8"
        >
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Why you’ll love ExpensAI
          </h2>

          <div
            className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3
                       lg:gap-16"
          >
            {/* Feature 1 */}
            <div>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center
                           rounded-md bg-cyan-600/20 text-cyan-400"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10
                       10-4.48 10-10 10z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Automatic categorization
              </h3>
              <p className="text-gray-400">
                Our model learns from your habits and neatly sorts every
                transaction without rules or manual tags.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center
                           rounded-md bg-fuchsia-600/20 text-fuchsia-400"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5h10M5 12h16M7 19h12"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Real-time insights</h3>
              <p className="text-gray-400">
                See spending trends, detect anomalies, and receive timely nudges
                before overspending happens.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center
                           rounded-md bg-emerald-600/20 text-emerald-400"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-2.21 0-4 1.79-4 4v5h8v-5c0-2.21-1.79-4-4-4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 8c0-3.31 2.69-6 6-6s6 2.69 6 6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Smart budgeting</h3>
              <p className="text-gray-400">
                Personalized budgets adapt as your income and goals change,
                keeping you on track effortlessly.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Pricing ---------- */}
        <section
          id="pricing"
          className="mx-auto max-w-5xl px-4 py-24 md:px-6 lg:px-8"
        >
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Simple, transparent pricing
          </h2>

          <div
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3
                       lg:gap-12"
          >
            {/* Free */}
            <div
              className="flex flex-col rounded-lg border border-gray-800
                         bg-gray-800/30 p-8 shadow-md"
            >
              <h3 className="mb-4 text-xl font-semibold">Free</h3>
              <p className="mb-6 text-4xl font-extrabold">$0</p>
              <ul className="mb-8 space-y-3 text-sm text-gray-400">
                <li>- 3 connected accounts</li>
                <li>- 30-day history</li>
                <li>- Basic insights</li>
              </ul>
              <a
                href="/auth/signup"
                className="mt-auto rounded-md bg-gray-700
                           px-4 py-2 text-center text-sm font-semibold
                           transition hover:bg-gray-600"
              >
                Get started
              </a>
            </div>

            {/* Pro */}
            <div
              className="relative flex flex-col rounded-lg border-2
                         border-fuchsia-500 bg-gray-800/30 p-8 shadow-xl"
            >
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2
                           rounded-md bg-fuchsia-500 px-3 py-1 text-xs
                           font-bold uppercase text-gray-900"
              >
                Popular
              </span>
              <h3 className="mb-4 text-xl font-semibold">Pro</h3>
              <p className="mb-6 text-4xl font-extrabold">$6</p>
              <ul className="mb-8 space-y-3 text-sm text-gray-400">
                <li>- Unlimited accounts</li>
                <li>- Unlimited history</li>
                <li>- AI budgeting & forecasts</li>
                <li>- Priority support</li>
              </ul>
              <a
                href="/auth/signup"
                className="mt-auto rounded-md bg-fuchsia-500
                           px-4 py-2 text-center text-sm font-semibold
                           text-gray-900 transition hover:bg-fuchsia-400"
              >
                Start free trial
              </a>
            </div>

            {/* Enterprise */}
            <div
              className="flex flex-col rounded-lg border border-gray-800
                         bg-gray-800/30 p-8 shadow-md"
            >
              <h3 className="mb-4 text-xl font-semibold">Enterprise</h3>
              <p className="mb-6 text-4xl font-extrabold">Custom</p>
              <ul className="mb-8 space-y-3 text-sm text-gray-400">
                <li>- Dedicated workspace</li>
                <li>- Custom integrations</li>
                <li>- Onboarding & training</li>
                <li>- 24×7 support</li>
              </ul>
              <a
                href="/contact"
                className="mt-auto rounded-md bg-gray-700
                           px-4 py-2 text-center text-sm font-semibold
                           transition hover:bg-gray-600"
              >
                Contact sales
              </a>
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section
          id="faq"
          className="mx-auto max-w-4xl px-4 py-24 md:px-6 lg:px-8"
        >
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-12 space-y-8">
            <details className="rounded-md border border-gray-800 p-6">
              <summary className="cursor-pointer text-lg font-medium">
                Is my financial data secure?
              </summary>
              <p className="mt-4 text-gray-400">
                Yes. We use bank-grade encryption, never store credentials, and
                are SOC 2 compliant.
              </p>
            </details>

            <details className="rounded-md border border-gray-800 p-6">
              <summary className="cursor-pointer text-lg font-medium">
                What banks and cards do you support?
              </summary>
              <p className="mt-4 text-gray-400">
                Thousands worldwide. If yours is missing, let us know and we’ll
                add it within days.
              </p>
            </details>

            <details className="rounded-md border border-gray-800 p-6">
              <summary className="cursor-pointer text-lg font-medium">
                Can I cancel anytime?
              </summary>
              <p className="mt-4 text-gray-400">
                Absolutely. Cancel with a single click; your data stays safe and
                exportable.
              </p>
            </details>
          </div>
        </section>

        {/* ---------- Call-to-action ---------- */}
        <section className="mx-auto max-w-5xl px-4 pb-24 md:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-2xl
                       bg-gradient-to-br from-fuchsia-600 to-cyan-600
                       p-12 text-center shadow-xl shadow-fuchsia-600/30"
          >
            <h2 className="mb-4 text-3xl font-extrabold leading-tight">
              Ready to control your money?
            </h2>
            <p className="mb-8 text-lg text-fuchsia-100">
              Join thousands who trust ExpensAI for effortless budgeting.
            </p>
            <a
              href="/auth/signup"
              className="rounded-md bg-gray-900/80 px-8 py-3 font-semibold
                         text-gray-100 transition hover:bg-gray-900/60"
            >
              Create your free account
            </a>

            {/* Background decoration */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10
                         bg-[radial-gradient(at_top_left,_var(--tw-gradient-stops))]
                         from-pink-500/20 via-purple-500/10 to-transparent"
            />
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="border-t border-gray-800">
          <div
            className="mx-auto flex max-w-7xl flex-col items-center
                       justify-between gap-6 px-4 py-10 text-sm
                       md:flex-row md:px-6 lg:px-8"
          >
            <span className="text-gray-400">
              © {new Date().getFullYear()} ExpensAI, Inc.
            </span>

            <ul className="flex gap-6">
              <li>
                <a
                  href="/privacy"
                  className="transition-colors hover:text-gray-50"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="transition-colors hover:text-gray-50"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@expensai.app"
                  className="transition-colors hover:text-gray-50"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
