import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  // ... other config
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
})