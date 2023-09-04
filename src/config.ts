// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "别学AI";
export const SITE_DESCRIPTION =
  "欢迎来到别学AI！这里是一个专注于现代Web开发和AI技术的技术博客。我们提供实用的GPT使用技巧、AI实战应用案例、以及最新的Web开发教程。无论您是AI爱好者、Web开发者还是技术行业的专业人士，都能在这里找到有价值的信息和灵感。";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "别学AI";
export const KEYWORDS = "AI, Web, GPT, ChatGPT, 博客, 教程, 实战, 案例, 技巧, 应用, 技术, Web开发, 技术博客, 现代编程, AI实战应用, GPT使用技巧, Web开发教程, AI人物介绍, 提示词工程, 机器学习, 自然语言处理, 前端开发, 后端开发, 数据科学, 中国AI, 国内Web开发"

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
