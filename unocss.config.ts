import { defineConfig, presetAttributify, presetMini, transformerDirectives, transformerVariantGroup } from 'unocss';

import { unocssToUniProcess } from 'vite-plugin-unocss-to-uni';

export default defineConfig({
    shortcuts: [
        [
            'btn',
            'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
        ],
        [
            'btn-plain',
            'px-4 py-1 rounded inline-block bg-primary-50 text-primary-600 cursor-pointer hover:bg-primary-400 disabled:cursor-default disabled:bg-primary-200 disabled:opacity-50',
        ],
        [
            'icon-btn',
            'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
        ],
    ],

    theme: {
        colors: {
            primary: {
                50: '#e3f2ff',
                100: '#bcdeff',
                200: '#90caff',
                300: '#63b6ff',
                400: '#41a5ff',
                500: '#2296ff',
                600: '#2489f2', // 品牌色
                700: '#2375de',
                800: '#2264cc',
                900: '#1f45ad',
            },
            success: {
                50: '#e6f6ea',
                100: '#c3e8cb',
                200: '#9dd8aa',
                300: '#73ca87',
                400: '#52bf6e',
                500: '#2bb353', // Primary
                600: '#22a44a',
                700: '#14923f',
                800: '#038034',
                900: '#006120',
            },
            error: {
                50: '#fae9e7',
                100: '#fcccbc',
                200: '#fbab91',
                300: '#fa8a65',
                400: '#f97043',
                500: '#f85823',
                600: '#ed531f', // Primary
                700: '#df4c1a',
                800: '#d14517',
                900: '#b8390f',
            },
            warning: {
                50: '#fefce6',
                100: '#fdf6c3',
                200: '#fcf09b',
                300: '#faea74',
                400: '#f8e556',
                500: '#f6df39',
                600: '#f6cf36',
                700: '#f3b72f',
                800: '#f0a028', // Primary
                900: '#ea781c',
            },

            typography: {
                50: '#e2e6eb', // 占位文字颜色 / 提示性内容颜色
                100: '#b6c0ce', // 次级文本
                200: '#8897ad',
                300: '#5d708c',
                400: '#3c5477', // 正文辅助/图标
                500: '#153a65',
                600: '#0e345d',
                700: '#052b53',
                800: '#002347',
                900: '#001330', // 正文/标题色
            },
            main: {
                50: '#383838', // 标题-黑色系
                75: '#999', // 内容-灰色系
                100: '#ececec', // 灰色系
                125: '#d9d9d9', // 灰色系
                150: '#00a0e9', // 主色调-蓝色系
                175: '#001330', // 标题黑色系
                200: '#f5f5f5', // 背景-灰色系
                225: '#e6e6e6', // 边框-灰色系
                250: '#00cc99', // 字体颜色
            },
        },
        fontFamily: {
            pingfang: ['PingFangSC-Medium'],
        },
        boxShadow: {
            style1: '0px -1px 0px 0px #e6e6e6',
            style2: '0 0 10px 0 rgba(0,0,0,0.10)',
            style3: '0 1px 4px 0 rgba(0, 0, 0, 0.1)',
            style4: '0 2px 8px rgba(0, 0, 0, 0.33)',
        },

        // font: {
        //     fontSize: Object.fromEntries(Array.from({ length: 32 }, (_, i) => [`${( i+ 1) * 4}rpx`, [`${( i+ 1) * 4}rpx`, `${(i + 1) * 2}px`]])),
        // },
    },

    presets: [presetMini(), presetAttributify()],

    transformers: [transformerDirectives(), transformerVariantGroup()],

    postprocess: t => {
        t.selector = unocssToUniProcess(t.selector);
        return t;
    },
});
