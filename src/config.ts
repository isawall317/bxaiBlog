// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "豆哥AI读书";
export const SITE_DESCRIPTION =
  "欢迎来到豆哥AI读书！";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "豆哥AI读书";
export const KEYWORDS = "超级个体, 一人公司, 读书, AI, ChatGPT, ai, 知识管理, Obsidian, 认知模型, 思维模型, AI思维, AI资源, AI认知, GPT, GPT资源, 提示词工程, 提示词生成, 提示词, 生成式模型, 生成式AI, "

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
