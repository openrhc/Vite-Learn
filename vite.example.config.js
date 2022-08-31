import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    optimizeDeps: {
        exclude: ['lodash-es'], // 指定数组中的依赖不进行依赖预构建，效果是有非常多的http请求
    },
    // 环境变量前缀，过滤指定前缀
    envPrefix: 'ENV_',
    css: {
        "modules": {
            // css key展示形式
            "localsConvention": "camelCaseOnly",
            // 是否开启模块化
            "scopeBehaviour": "local",
            "generateScopedName": '[name]_[local]_[hash:5]'
        },
        // key + config, key代表预处理器名
        "preprocessorOptions": {
            "less": {
                math: "always",
                globalVars: { // 全局变量
                    mainColor: 'skyblue'
                }
            }
        },
        "devSourcemap": true, // 开启css sourceMap
        // 可单独配置postcss.config.js
        // "postcss": {
        //     plugins: [postcssPresetEnv]
        // }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
        }
    },
    base: './',
    build: {
        rollupOptions: {
            output: {
                assetFileNames: "[name]_[hash].[ext]" // 资源输出格式
            }
        },
        assetsInlineLimit: 4096, // 小于4k打包进js文件
        outDir: "dist",  // 打包输出目录
        assetsDir: "static",  // 静态资源输出目录
    }
})