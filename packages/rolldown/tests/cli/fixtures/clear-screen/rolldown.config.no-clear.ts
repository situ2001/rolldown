import { defineConfig } from 'rolldown';

export default defineConfig({
  input: 'index.ts',
  output: {
    dir: 'dist',
  },
  watch: {
    clearScreen: false, // Disable clear screen in watch mode
  },
});
