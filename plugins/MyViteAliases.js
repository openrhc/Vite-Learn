const fs = require('fs')
const path = require('path')

function getSrcDirAliases(basePath = '') {
    const result = fs.readdirSync(path.resolve(__dirname, basePath))
    const aliasesObj = {
        '@': path.resolve(__dirname, basePath)
    }
    result.filter(name => {
        const file = path.resolve(__dirname, basePath + '/' + name)
        const stat = fs.statSync(file)
        return stat.isDirectory()
    }).forEach(dirName => {
        const key = `@${dirName}`
        const absPath = path.resolve(__dirname, basePath + '/' + dirName)
        aliasesObj[key] = absPath
    })
    return aliasesObj
}

module.exports = function () {
    return {
        // 生命周期，在vite.config.js执行前被调用
        config(config, env) {
            const aliases = getSrcDirAliases('../src')
            return {
                resolve: {
                    alias: aliases
                }
            }
        }
    }
}