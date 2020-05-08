const path = require('path') // 引入node内置模块path
module.exports = {
    entry: './src/main.js', // 入口文件，把src下的main.js编译到出口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 出口路径和目录
        filename: 'demo.js' // 编译后的名称
    }
}