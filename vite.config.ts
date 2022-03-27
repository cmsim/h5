import { defineConfig } from 'vite'
import path from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [uni(), Unocss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    },
    build: {
      terserOptions: {
        /**
         * command 用来判断环境
         */
        compress: {
          drop_console: command !== 'serve',
          // 默认是true
          drop_debugger: command !== 'serve'
        }
      }
    }
  }
})
