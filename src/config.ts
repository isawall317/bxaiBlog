// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "豆哥AI职场";
export const SITE_DESCRIPTION =
  "欢迎来到豆哥AI职场！这里专注于AI赋能职场的话题，在这里你可以通过了解AI、学习AI和精通AI，实现职场发展，在未来开启超级个体、一人公司的新职场道路。";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "豆哥AI职场";
export const KEYWORDS = "超级个体,一人公司,职场,AI,ChatGPT,ai,认知模型, 思维模型, AI思维, AI资源, AI认知, GPT, GPT资源, 提示词工程, 提示词生成, 提示词, 生成式模型, 生成式AI, 生成式AI模型, 生成式AI应用, 生成式AI技巧, 生成式AI案例, 生成式AI实战,"

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
