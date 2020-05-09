const path = require('path') // 引入node内置模块path
const VueLoaderPlugin = require('vue-loader/lib/plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/main.js', // 入口文件，把src下的main.js编译到出口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 出口路径和目录
        filename: 'demo.js' // 编译后的名称
    },
    resolve: {
        extensions: ['.js', '.vue'], // js和vue文件在import倒入的时候不需要带扩展
        alias: {
            'vue$': 'vue/dist/vue.esm.js',  //vue官方指定写法，如果不写这个，则运行的时候会提示
            '@': path.resolve(__dirname, 'src')  //给src目录起个别名@ ，引用src目录的时候，可用@替代
        }
    },
    module: {
        rules: [ // 遍历规则
            {
                test: /\.js$/, // 匹配以.js结尾的文件
                use: ['babel-loader'], // 使用babel-loader编译
                exclude: /node_modules/ // node_module里面的内容不遍历
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 解析样式
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //解析样式
            { test: /\.(jpg|png|gif)$/, use: 'url-loader?limit=8192' }, // 解析图片
            // limit表示转化base64只在8192字节以下转化，其他情况输出图片 
            { test: /\.(eot|svg|woff|woff2|wtf)$/, use:'url-loader'}, // 解析图片
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ //自动插入到dist目录中
            template: './index.html', //使用模板
            filename: 'login.html'   //产出名称(一般不写)
        }),
        new VueLoaderPlugin()
    ]
}