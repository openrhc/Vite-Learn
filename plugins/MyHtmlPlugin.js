module.exports = (options) => {
    return {
        transformIndexHtml: {
            enforce: "pre",
            transform: (html, ctx) => {
                const reg = /<%=\s*\S*\s*%>/g
                const s = html.match(reg)
                s.forEach(k => {
                    const key = k.replace(/<%=\s*/i, '').replace(/\s*%>/i, '')
                    html = html.replace(k, options.inject.data[key] || `${key} is not defined`)
                })
                return html
            }
        }
    }
}