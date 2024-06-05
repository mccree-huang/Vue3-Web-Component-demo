import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // 将vaadin-开头的标签作为自定义元素，避免控制台告警
        isCustomElement: (tag) => tag.includes('vaadin-')
      }
    }
  }), cssInjectedByJsPlugin()],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: undefined,
  //     },
  //   },
  // },
})


