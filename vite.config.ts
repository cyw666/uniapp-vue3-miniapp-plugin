import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy';
import { fileURLToPath, URL } from 'node:url'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { UnocssToUni } from 'vite-plugin-unocss-to-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Unocss(),

    UnocssToUni(),

    AutoImport({
      imports: [
        'vue',
        // 'pinia',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    copy({
      copyOnce: process.env.NODE_ENV !== 'production', // 开发环境只复制一次
      targets: [
        {
          src: `src/susceptor/${process.env.UNI_PLATFORM}`,
          dest: `dist/${
            process.env.NODE_ENV === 'production' ? 'build' : 'dev'
          }`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '#': fileURLToPath(new URL('./types', import.meta.url)),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_infinity: true,
        // drop_console: false,
        // pure_funcs: ['console.log'],
      },
    },
    // Turning off brotliSize display can slightly reduce packaging time
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000,
  },
})



