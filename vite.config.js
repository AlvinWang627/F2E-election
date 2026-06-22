import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/style/variable.scss" as *;'
      }
    }
  },
  build: {
    rollupOptions: {
      // Silence Rolldown's INVALID_ANNOTATION warnings caused by misplaced
      // /* #__PURE__ */ comments in dependencies (e.g. @vueuse/core via element-plus).
      onLog(level, log, handler) {
        if (log.code === 'INVALID_ANNOTATION') return
        handler(level, log)
      }
    }
  }
})
