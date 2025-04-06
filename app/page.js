"use client";

import { modelData } from "@/lib/data";
import { format } from "date-fns";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { animate, inView, stagger } from "motion";
import Image from "next/image";

const standardPrompt = `Create a landing page for an AI-powered expense tracker using a modern dark mode design. Return the full page in a single Next.js client-side component, utilizing Tailwind CSS and JSX. Where an image is needed, use Next.js Image component with src="/assets/placeholder.png".`;

export default function Home() {
  const tableRef = useRef(null);
  const headerRef = useRef(null);
  const promptRef = useRef(null);

  useEffect(() => {
    // Apply dark mode class to body
    document.documentElement.classList.add("dark");

    // Header animation
    if (headerRef.current) {
      animate(
        headerRef.current,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, easing: [0.25, 0.1, 0.25, 1] }
      );
    }

    // Table animation
    if (tableRef.current) {
      inView(tableRef.current, () => {
        animate(
          ".table-row",
          { opacity: [0, 1], y: [20, 0] },
          {
            duration: 0.4,
            delay: stagger(0.1),
            easing: [0.25, 0.1, 0.25, 1],
          }
        );
      });
    }

    // Prompt section animation
    if (promptRef.current) {
      inView(promptRef.current, () => {
        animate(
          promptRef.current,
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.6, easing: [0.25, 0.1, 0.25, 1] }
        );
      });
    }
  }, []);

  const togglePrompt = () => {
    setIsPromptExpanded(!isPromptExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="opacity-0">
          <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            AI Model Comparison
          </h1>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Compare different AI models and their capabilities in generating
            modern web applications
          </p>
        </div>

        <div
          ref={promptRef}
          className="mt-12 bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700 opacity-0"
        >
          <div
            className="flex items-center justify-between mb-6 cursor-pointer"
            onClick={togglePrompt}
          >
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                P
              </div>
              <h2 className="text-2xl font-semibold text-white">Prompt</h2>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out max-h-[1000px] opacity-100`}
          >
            <div className="bg-gray-700 rounded-xl p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                {standardPrompt}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(standardPrompt);
                  const button = document.getElementById("copyButton");
                  button.textContent = "Copied!";
                  setTimeout(() => {
                    button.textContent = "Copy Prompt";
                  }, 2000);
                }}
                id="copyButton"
                className="mt-4 px-4 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500 transition-all duration-200 flex items-center space-x-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                <span>Copy Prompt</span>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={tableRef}
          className="bg-gray-800 rounded-2xl shadow-xl mt-10 overflow-hidden border border-gray-700"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider"
                  >
                    Model
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider"
                  >
                    Owned by
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider"
                  >
                    Result
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider"
                  >
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {modelData.map((model) => (
                  <tr
                    key={model.id}
                    className="table-row opacity-0 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 bg-white rounded-lg flex items-center justify-center font-bold">
                          <Image
                            width={40}
                            height={40}
                            alt="logo"
                            src={model.companyLogo || "/logo/openai.png"}
                            className="h-8 w-8 rounded-full"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">
                            {model.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">
                            {model.company}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-gray-400">
                      <div className="flex justify-center space-x-4">
                        <Link
                          href={`/${model.slug}`}
                          className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-lg hover:bg-purple-800/40 transition-all duration-200 hover:scale-105"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </Link>

                        {/* <span
                          className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-lg hover:bg-purple-800/40 transition-all duration-200 hover:scale-105 cursor-pointer"
                          onClick={() => {
                            navigator.clipboard.writeText(model.slug);
                          }}
                        >
                          {model?.slug}
                        </span> */}
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-center text-sm text-gray-400">
                      {/* dd-yy-mm  */}
                      {format(new Date(model.lastUpdated), "dd-MM-yyyy")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
