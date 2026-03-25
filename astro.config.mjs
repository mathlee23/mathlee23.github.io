// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    site: "https://mathlee23.github.io",

  integrations: [
      mdx(),
      sitemap({
          customPages: [
              "https://mathlee23.github.io",
              "https://mathlee23.github.io/ko/",
          ],
          changefreq: "monthly",
          priority: 0.7,
          lastmod: new Date(),
      }),
      svelte(),
  ],

  vite: {
      plugins: [tailwindcss()],
  },
});