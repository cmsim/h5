import { defineConfig } from 'vite'
import path from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), Unocss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
