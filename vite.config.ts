import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
import { VITE_BASE_PATH } from './config/constant'

// https://vitejs.dev/config/
export default defineConfig({
  base: VITE_BASE_PATH,
  plugins: [
    // react(),
    reactRefresh()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname,'src')
    }
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,'')
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
})

