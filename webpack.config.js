let HtmlWebpackPlugin = require('html-webpack-plugin')
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
                loader: 'babel-loader', // 使用babel-loader编译
                exclude: /node_modules/ // node_module里面的内容不遍历
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 解析样式
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //解析样式
            { test: /\.(jpg|png|gif)$/, use: 'url-loader?limit=8192' }, // 解析图片
            // limit表示转化base64只在8192字节以下转化，其他情况输出图片 
            { test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'} // 解析图片
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ //自动插入到dist目录中
            template: './index.html', //使用模板
            filename: 'login.html'   //产出名称(一般不写)
        })
    ]
}