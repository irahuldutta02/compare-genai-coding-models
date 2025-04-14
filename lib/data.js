let modelData = [
  {
    id: "llama-4-scout",
    name: "Llama 4 Scout",
    description: "Meta's mixture-of-experts language model.",
    link: "/llama-4-scout",
    lastUpdated: new Date("2025-04-06"),
    slug: "llama-4-scout",
    company: "Meta",
    companyLogo: "/logo/meta.png",
  },
  {
    id: "llama-4-maverick",
    name: "Llama 4 Maverick",
    description: "Meta's high-capacity multimodal language model.",
    link: "/llama-4-maverick",
    lastUpdated: new Date("2025-04-06"),
    slug: "llama-4-maverick",
    company: "Meta",
    companyLogo: "/logo/meta.png",
  },
  {
    id: "quasar-alpha",
    name: "Quasar Alpha",
    description: "Cloaked model for community feedback.",
    link: "/quasar-alpha",
    lastUpdated: new Date("2025-04-06"),
    slug: "quasar-alpha",
    company: "Unknown",
    companyLogo: "/logo/unknown.png",
  },
  {
    id: "gemini-2-flash",
    name: "Gemini 2.0 Flash",
    description: "Google's flagship model, known for speed and accuracy.",
    link: "/gemini-2-flash",
    lastUpdated: new Date("2025-04-06"),
    slug: "gemini-2-flash",
    company: "Google",
    companyLogo: "/logo/google.png",
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o-mini",
    description: "Like gpt-4o, but faster.",
    link: "/gpt-4o-mini",
    lastUpdated: new Date("2025-04-06"),
    slug: "gpt-4o-mini",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    description: "OpenAI's flagship non-reasoning model.",
    link: "/gpt-4o",
    lastUpdated: new Date("2025-04-06"),
    slug: "gpt-4o",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  {
    id: "o3-mini",
    name: "o3-mini",
    description: "A small, fast, super smart reasoning model.",
    link: "/o3-mini",
    lastUpdated: new Date("2025-04-06"),
    slug: "o3-mini",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  {
    id: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    description: "Smart model for complex problems.",
    link: "/claude-3-5-sonnet",
    lastUpdated: new Date("2025-04-06"),
    slug: "claude-3-5-sonnet",
    company: "Anthropic",
    companyLogo: "/logo/anthropic.png",
  },
  {
    id: "claude-3-7-sonnet",
    name: "Claude 3.7 Sonnet",
    description: "Smart model for complex problems.",
    link: "/claude-3-7-sonnet",
    lastUpdated: new Date("2025-04-06"),
    slug: "claude-3-7-sonnet",
    company: "Anthropic",
    companyLogo: "/logo/anthropic.png",
  },
  {
    id: "claude-3-7-sonnet-reasoning",
    name: "Claude 3.7 Sonnet (Reasoning)",
    description: "Smart model for complex problems.",
    link: "/claude-3-7-sonnet-reasoning",
    lastUpdated: new Date("2025-04-06"),
    slug: "claude-3-7-sonnet-reasoning",
    company: "Anthropic",
    companyLogo: "/logo/anthropic.png",
  },
  {
    id: "llama-3-3-70b",
    name: "Llama 3.3 70b",
    description: "Industry-leading speed in an open source model.",
    link: "/llama-3-3-70b",
    lastUpdated: new Date("2025-04-06"),
    slug: "llama-3-3-70b",
    company: "Meta",
    companyLogo: "/logo/meta.png",
  },
  {
    id: "gemini-2-flash-lite",
    name: "Gemini 2.0 Flash Lite",
    description: "Similar to 2.0 Flash, but even faster.",
    link: "/gemini-2-flash-lite",
    lastUpdated: new Date("2025-04-06"),
    slug: "gemini-2-flash-lite",
    company: "Google",
    companyLogo: "/logo/google.png",
  },
  {
    id: "gemini-2-5-pro",
    name: "Gemini 2.5 Pro",
    description: "Google's most advanced model.",
    link: "/gemini-2-5-pro",
    lastUpdated: new Date("2025-04-06"),
    slug: "gemini-2-5-pro",
    company: "Google",
    companyLogo: "/logo/google.png",
  },
  {
    id: "deepseek-v3-fireworks",
    name: "DeepSeek v3 (Fireworks)",
    description: "DeepSeek's groundbreaking direct prediction model.",
    link: "/deepseek-v3-fireworks",
    lastUpdated: new Date("2025-04-06"),
    slug: "deepseek-v3-fireworks",
    company: "DeepSeek",
    companyLogo: "/logo/deepseek.png", // Placeholder
  },
  {
    id: "deepseek-v3-0324",
    name: "DeepSeek v3 (0324)",
    description: "DeepSeek's groundbreaking direct prediction model.",
    link: "/deepseek-v3-0324",
    lastUpdated: new Date("2025-04-06"),
    slug: "deepseek-v3-0324",
    company: "DeepSeek",
    companyLogo: "/logo/deepseek.png", // Placeholder
  },
  {
    id: "deepseek-r1-openrouter",
    name: "DeepSeek R1 (OpenRouter)",
    description:
      "The open source reasoning model that shook the whole industry.",
    link: "/deepseek-r1-openrouter",
    lastUpdated: new Date("2025-04-06"),
    slug: "deepseek-r1-openrouter",
    company: "DeepSeek",
    companyLogo: "/logo/deepseek.png", // Placeholder
  },
  {
    id: "deepseek-r1-llama-distilled",
    name: "DeepSeek R1 (Llama Distilled)",
    description: "Like normal R1, but WAY faster and slightly dumber.",
    link: "/deepseek-r1-llama-distilled",
    lastUpdated: new Date("2025-04-06"),
    slug: "deepseek-r1-llama-distilled",
    company: "DeepSeek",
    companyLogo: "/logo/deepseek.png", // Placeholder
  },
  {
    id: "deepseek-r1-qwen-distilled",
    name: "DeepSeek R1 (Qwen Distilled)",
    description:
      "Similar to the Llama distilled model, but distilled on Qwen 32b instead.",
    link: "/deepseek-r1-qwen-distilled",
    lastUpdated: new Date("2025-04-06"),
    slug: "deepseek-r1-qwen-distilled",
    company: "DeepSeek",
    companyLogo: "/logo/deepseek.png", // Placeholder
  },
  {
    id: "qwen-2-5-32b",
    name: "Qwen 2.5 32b",
    description: "The other really good open source model from China.",
    link: "/qwen-2-5-32b",
    lastUpdated: new Date("2025-04-06"),
    slug: "qwen-2-5-32b",
    company: "Qwen", // Or the providing entity
    companyLogo: "/logo/qwen.png", // Placeholder
  },
  {
    id: "qwen-qwq-32b",
    name: "Qwen qwq-32b",
    description:
      "A surprisingly smart reasoning model that punches way above its weight.",
    link: "/qwen-qwq-32b",
    lastUpdated: new Date("2025-04-06"),
    slug: "qwen-qwq-32b",
    company: "Qwen", // Or the providing entity
    companyLogo: "/logo/qwen.png", // Placeholder
  },
  {
    id: "gpt-4-1",
    name: "GPT-4.1",
    description: "OpenAI's latest model",
    link: "/gpt-4-1",
    lastUpdated: new Date("2025-04-06"),
    slug: "gpt-4-1",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  {
    id: "gpt-4-1-mini",
    name: "GPT-4.1 Mini",
    description: "OpenAI's latest model",
    link: "/gpt-4-1-mini",
    lastUpdated: new Date("2025-04-06"),
    slug: "gpt-4-1-mini",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
  },
  {
    id: "gpt-4-1-nano",
    name: "GPT-4.1 Nano",
    description: "OpenAI's latest model",
    link: "/gpt-4-1-nano",
    lastUpdated: new Date("2025-04-06"),
    slug: "gpt-4-1-nano",
    company: "OpenAI",
    companyLogo: "/logo/openai.png",
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
