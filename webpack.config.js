const path = require('path') // 引入node内置模块path
module.exports = {
    entry: './src/main.js', // 入口文件，把src下的main.js编译到出口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 出口路径和目录
        filename: 'demo.js' // 编译后的名称
    },
    module: {
        rules: [ // 遍历规则
            {
                test: /\.js$/, // 匹配以.js结尾的文件
                loader: 'babel-loader', // 使用babel-loader变异
                exclude: /node_modules/ // node_module里面的内容不遍历
            }
        ]
    }
}