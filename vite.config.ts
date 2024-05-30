import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // 将所有带短横线的标签名都视为自定义元素
        isCustomElement: (tag) => tag.includes('.ce'),
      }
    }
  })],
  build: {
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // external: ['vue', '@vaadin/vaadin', '@vaadin/vaadin-lumo-styles'],
      output: {

        //entryFileNames: 'my-bundle.js', // 指定构建后的文件名为固定值
        manualChunks(id) {
          if (id.includes('node_modules')) {
              return 'vendor';
          }
        }
      }
    }
  }
})


