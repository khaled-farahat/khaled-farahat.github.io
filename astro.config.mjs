import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import node from '@astrojs/node';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  server: {port: 3000},
  output: "static",
  // adapter: node({
  //   mode: 'standalone'
  // }),
  build: {
    assets: 'astro'
  },
  site: 'https://khaled-farahat.github.io',
  // base: '/',
});
