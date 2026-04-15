import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://edwards.software",
  output: "server",
  adapter: cloudflare(),
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssMinify: true,
      minify: "terser",
    },
  },
  integrations: [mdx()],
  i18n: {
    locales: ["en", "es", "de"],
    defaultLocale: "en",
    routing: "manual",
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "JetBrains Mono",
      cssVariable: "--mono",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono-Regular.woff2"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
      fallbacks: ["Courier New", "monospace"],
    },
  ],
  devToolbar: {
    enabled: false,
  },
});
