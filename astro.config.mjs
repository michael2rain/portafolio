import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  site: 'https://michaelbarrera.dev/',
  build: {
    assets: '_[hash]'
  },
  output: "server",
  adapter: cloudflare()
});