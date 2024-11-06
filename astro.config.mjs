import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react({experimentalReactChildren: true}), tailwind()],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  }
});