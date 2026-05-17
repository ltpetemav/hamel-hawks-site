import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hamelhawks.org',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
