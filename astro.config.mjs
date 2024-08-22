import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  server: {port: 3000},
  output: "server",
  site: 'https://khaled-farahat.github.io',
  // base: 'my-repo',
});
