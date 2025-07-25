let modelData = [
  // unknown models
  {
    id: "quasar-alpha",
    name: "Quasar Alpha",
    link: "/quasar-alpha",
    lastUpdated: new Date("2025-04-06"),
    slug: "quasar-alpha",
    company: "Unknown",
    companyLogo: "/logo/unknown.png",
  },
  // openai models
  {
    id: "gpt-4o-mini",
    name: "GPT-4o-mini",
    link: "/gpt-4o-mini",
    lastUpdated: new Date("2025-04-06"),
    slug: "gpt-4o-mini",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    link: "/gpt-4o",
    lastUpdated: new Date("2025-04-06"),
    slug: "gpt-4o",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  {
    id: "o3",
    name: "o3",
    link: "/o3",
    lastUpdated: new Date("2025-06-12"),
    slug: "o3",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  {
    id: "o3-mini",
    name: "o3-mini",
    link: "/o3-mini",
    lastUpdated: new Date("2025-04-06"),
    slug: "o3-mini",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  {
    id: "gpt-4-1",
    name: "GPT-4.1",
    link: "/gpt-4-1",
    lastUpdated: new Date("2025-04-14"),
    slug: "gpt-4-1",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  {
    id: "gpt-4-1-mini",
    name: "GPT-4.1 Mini",
    link: "/gpt-4-1-mini",
    lastUpdated: new Date("2025-04-14"),
    slug: "gpt-4-1-mini",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  {
    id: "gpt-4-1-nano",
    name: "GPT-4.1 Nano",
    link: "/gpt-4-1-nano",
    lastUpdated: new Date("2025-04-14"),
    slug: "gpt-4-1-nano",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  // anthropic models
  {
    id: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    link: "/claude-3-5-sonnet",
    lastUpdated: new Date("2025-04-06"),
    slug: "claude-3-5-sonnet",
    company: "Anthropic",
    companyLogo: "/logo/anthropic.png",
  },
  {
    id: "claude-3-7-sonnet",
    name: "Claude 3.7 Sonnet",
    link: "/claude-3-7-sonnet",
    lastUpdated: new Date("2025-04-06"),
    slug: "claude-3-7-sonnet",
    company: "Anthropic",
    companyLogo: "/logo/anthropic.png",
  },
  {
    id: "claude-3-7-sonnet-reasoning",
    name: "Claude 3.7 Sonnet (Reasoning)",
    link: "/claude-3-7-sonnet-reasoning",
    lastUpdated: new Date("2025-04-06"),
    slug: "claude-3-7-sonnet-reasoning",
    company: "Anthropic",
    companyLogo: "/logo/anthropic.png",
  },
  {
    id: "claude-4-sonnet",
    name: "Claude 4 Sonnet",
    link: "/claude-4-sonnet",
    lastUpdated: new Date("2025-05-25"),
    slug: "claude-4-sonnet",
    company: "Anthropic",
    companyLogo: "/logo/anthropic.png",
  },
  {
    id: "claude-4-sonnet-reasoning",
    name: "Claude 4 Sonnet (Reasoning)",
    link: "/claude-4-sonnet-reasoning",
    lastUpdated: new Date("2025-05-25"),
    slug: "claude-4-sonnet-reasoning",
    company: "Anthropic",
    companyLogo: "/logo/anthropic.png",
  },
  // meta models
  {
    id: "llama-4-scout",
    name: "Llama 4 Scout",
    link: "/llama-4-scout",
    lastUpdated: new Date("2025-04-06"),
    slug: "llama-4-scout",
    company: "Meta",
    companyLogo: "/logo/meta.png",
  },
  {
    id: "llama-4-maverick",
    name: "Llama 4 Maverick",
    link: "/llama-4-maverick",
    lastUpdated: new Date("2025-04-06"),
    slug: "llama-4-maverick",
    company: "Meta",
    companyLogo: "/logo/meta.png",
  },
  {
    id: "llama-3-3-70b",
    name: "Llama 3.3 70b",
    link: "/llama-3-3-70b",
    lastUpdated: new Date("2025-04-06"),
    slug: "llama-3-3-70b",
    company: "Meta",
    companyLogo: "/logo/meta.png",
  },
  // gemini models
  {
    id: "gemini-2-flash",
    name: "Gemini 2.0 Flash",
    link: "/gemini-2-flash",
    lastUpdated: new Date("2025-04-06"),
    slug: "gemini-2-flash",
    company: "Google",
    companyLogo: "/logo/google.png",
  },
  {
    id: "gemini-2-flash-lite",
    name: "Gemini 2.0 Flash Lite",
    link: "/gemini-2-flash-lite",
    lastUpdated: new Date("2025-04-06"),
    slug: "gemini-2-flash-lite",
    company: "Google",
    companyLogo: "/logo/google.png",
  },
  {
    id: "gemini-2-5-pro",
    name: "Gemini 2.5 Pro",
    link: "/gemini-2-5-pro",
    lastUpdated: new Date("2025-04-06"),
    slug: "gemini-2-5-pro",
    company: "Google",
    companyLogo: "/logo/google.png",
  },
  // deepseek models
  {
    id: "deepseek-v3-fireworks",
    name: "DeepSeek v3 (Fireworks)",
    link: "/deepseek-v3-fireworks",
    lastUpdated: new Date("2025-04-06"),
    slug: "deepseek-v3-fireworks",
    company: "DeepSeek",
    companyLogo: "/logo/deepseek.png",
  },
  {
    id: "deepseek-v3-0324",
    name: "DeepSeek v3 (0324)",
    link: "/deepseek-v3-0324",
    lastUpdated: new Date("2025-04-06"),
    slug: "deepseek-v3-0324",
    company: "DeepSeek",
    companyLogo: "/logo/deepseek.png",
  },
  {
    id: "deepseek-r1-openrouter",
    name: "DeepSeek R1 (OpenRouter)",
    link: "/deepseek-r1-openrouter",
    lastUpdated: new Date("2025-04-06"),
    slug: "deepseek-r1-openrouter",
    company: "DeepSeek",
    companyLogo: "/logo/deepseek.png",
  },
  {
    id: "deepseek-r1-llama-distilled",
    name: "DeepSeek R1 (Llama Distilled)",
    link: "/deepseek-r1-llama-distilled",
    lastUpdated: new Date("2025-04-06"),
    slug: "deepseek-r1-llama-distilled",
    company: "DeepSeek",
    companyLogo: "/logo/deepseek.png",
  },
  {
    id: "deepseek-r1-qwen-distilled",
    name: "DeepSeek R1 (Qwen Distilled)",
    link: "/deepseek-r1-qwen-distilled",
    lastUpdated: new Date("2025-04-06"),
    slug: "deepseek-r1-qwen-distilled",
    company: "DeepSeek",
    companyLogo: "/logo/deepseek.png",
  },
  // qwen models
  {
    id: "qwen-2-5-32b",
    name: "Qwen 2.5 32b",
    link: "/qwen-2-5-32b",
    lastUpdated: new Date("2025-04-06"),
    slug: "qwen-2-5-32b",
    company: "Qwen",
    companyLogo: "/logo/qwen.png",
  },
  {
    id: "qwen-qwq-32b",
    name: "Qwen qwq-32b",
    link: "/qwen-qwq-32b",
    lastUpdated: new Date("2025-04-06"),
    slug: "qwen-qwq-32b",
    company: "Qwen",
    companyLogo: "/logo/qwen.png",
  },
  // xai models
  {
    id: "grok-4",
    name: "Grok 4",
    link: "/grok-4",
    lastUpdated: new Date("2025-07-12"),
    slug: "grok-4",
    company: "XAI",
    companyLogo: "/logo/xai.png",
  },
  // Moonshot models
  {
    id: "kimi-k2",
    name: "Kimi K2",
    link: "/kimi-k2",
    lastUpdated: new Date("2025-07-12"),
    slug: "kimi-k2",
    company: "Moonshot",
    companyLogo: "/logo/moonshot.jpeg",
  },
];

// short model data by company name
modelData = modelData.sort((a, b) => {
  if (a.company < b.company) return -1;
  if (a.company > b.company) return 1;
  return 0;
});

// Utility function to find model by slug
const getModelBySlug = (slug) => {
  return modelData.find((model) => model.slug === slug);
};

export { modelData, getModelBySlug };
