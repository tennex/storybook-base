import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[local]-[hash:base64:5]',
    },
  },
});
