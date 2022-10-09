import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [TDesignResolver({
        library: 'vue-next'
      })],
    }),
    Components({
      resolvers: [TDesignResolver({
        library: 'vue-next'
      })],
    }),
  ],
  server:{
    host:'0.0.0.0'
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src")
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;
        @import "@/assets/css/global.scss";`
      }
    }
  }
})
