// 让编辑器有配置项提示的两种方法：

// 1. 导入defineConfig方法
// import { defineConfig } from 'vite'
// export default defineConfig({})

// 2. 使用注释
// /** @type import('vite').UserConfig */
// export default {}

import { defineConfig, loadEnv } from 'vite'

import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const envResolver = {
  build: () => {
    // console.log('生产环境');
    return Object.assign({}, viteBaseConfig, viteProdConfig)
  },
  serve: () => {
    // console.log('开发环境');
    return Object.assign({}, viteBaseConfig, viteDevConfig)
  },
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  // console.log('env :>> ', env);
  return envResolver[command]()
})
