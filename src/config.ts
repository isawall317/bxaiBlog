// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "豆哥 AI思维";
export const SITE_DESCRIPTION =
  "欢迎来到豆哥AI思维！这里是一个专注于AI思维的网站，在这里你可以学习到AI思维，以及如何使用AI思维来解决实际问题。";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "豆哥 AI思维";
export const KEYWORDS = "认知模型, 思维模型, AI思维, AI, AI资源, AI认知, GPT, GPT资源, ChatGPT, 提示词工程, 提示词生成, 提示词, 生成式模型, 生成式AI, 生成式AI模型, 生成式AI应用, 生成式AI技巧, 生成式AI案例, 生成式AI实战,"

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
