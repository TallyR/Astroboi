import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://boisterous-lily-68b17a.netlify.app",
  integrations: [preact()]
});