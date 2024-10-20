import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import compress from "@playform/compress";
import AutoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
  site: "https://blogsmithfree.cosmicthemes.com",
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
  integrations: [
    // example auto import component into blog post mdx files
    AutoImport({
      imports: [
        // https://github.com/delucis/astro-auto-import
        "@components/Admonition/Admonition.astro",
      ],
    }),
    mdx(),
    tailwind(),
    sitemap(),
    compress(),
  ],
});
