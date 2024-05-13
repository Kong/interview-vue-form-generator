import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: [/@kong\/kongponents/, /node_modules/],
    },
  },
  define: {
    'process.env.development': JSON.stringify('development'),
    'process.env.production': JSON.stringify('production'),
  },
  plugins: [vue()],
})
