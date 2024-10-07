
import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  base: '/landing-page-pietroscorza/',
    build: {
        rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          softskills: resolve(__dirname, 'softskills/index.html'),
          quiz: resolve(__dirname, 'quiz/index.html'),

        },
      },
    },
})