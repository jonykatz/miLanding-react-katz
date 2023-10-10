import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // If you're using SCSS, make sure this is set correctly
        additionalData: '@import "path/to/your/bootstrap.scss";',
      },
    },
  },
})
