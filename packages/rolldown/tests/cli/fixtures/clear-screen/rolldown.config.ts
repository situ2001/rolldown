import { defineConfig } from 'rolldown';

export default defineConfig({
  input: 'index.ts',
  output: {
    dir: 'dist',
  },
  watch: {
    clearScreen: true, // Enable clear screen in watch mode
  },
});
