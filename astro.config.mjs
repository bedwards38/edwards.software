import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://edwards.software",
  output: "server",
  adapter: cloudflare(),
  server: {
    headers: {
      "Cache-Control": "no-store",
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    define: {
      "import.meta.env.BUILD_DATE": JSON.stringify(
        new Date().toISOString().split("T")[0]
      ),
    },
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
