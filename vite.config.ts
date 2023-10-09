import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy';
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Inspect from 'vite-plugin-inspect';
import { UnocssToUni } from 'vite-plugin-unocss-to-uni';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        uni(),

        Unocss(),

        UnocssToUni(),

        AutoImport({
            imports: [
                'vue',
                // 'vue/macros',
                // 'pinia',
                // '@vueuse/core',
            ],
            dts: 'src/auto-imports.d.ts',
        }),

        copy({
            copyOnce: process.env.NODE_ENV !== 'production', // 开发环境只复制一次
            targets: [
                {
                    src: `src/susceptor/${process.env.UNI_PLATFORM}`,
                    dest: `dist/${process.env.NODE_ENV === 'production' ? 'build' : 'dev'}`,
                },
            ],
        }),

        Inspect(),
    ],
})
