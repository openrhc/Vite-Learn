import { defineConfig } from 'vite'
import path from 'path'
// import { ViteAliases } from 'vite-aliases'
// import { createHtmlPlugin } from 'vite-plugin-html'
// import { viteMockServe } from 'vite-plugin-mock'
import MyViteAliases from './plugins/MyViteAliases'
import MyHtmlPlugin from './plugins/MyHtmlPlugin'
import MyMockPlugin from './plugins/MyMockPlugin'

export default defineConfig({
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
  base: './',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[name]_[hash].[ext]"
      }
    },
    assetsInlineLimit: 4096, // 小于4k打包进js文件
    // outDir: "testDir",  // 打包输出目录
    assetsDir: "static",  // 静态资源输出目录
  },
  plugins: [
    // ViteAliases(),
    // viteMockServe(),
    // createHtmlPlugin({
    //   inject: {
    //     data: {
    //       title: "大首页"
    //     }
    //   }
    // }),
    MyViteAliases(),
    MyHtmlPlugin({
      inject: {
        data: {
          title: "首页",
          subtitle: "副标题"
        }
      }
    }),
    MyMockPlugin(),
    {
      configResolved(options) {
        console.log('options :>> ', options);
      }
    },
    {
      options(rollupOptions) {
        console.log('rollupOptions :>> ', rollupOptions);
      }
    }
  ]
})
