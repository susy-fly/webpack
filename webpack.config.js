//建立对插件html-webpack-plugin的引用
var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	//指定一个入口文件
	//entry:'./src/script/index.js',
	//指定多个入口文件
	//entry:["./src/script/index.js","./src/script/a.js"],
	entry:{
		main:'./src/script/index.js',
		a:'./src/script/a.js',
		b:'./src/script/b.js',
		c:'./src/script/c.js'
	},
	output:{
		//需要制定绝对路径，这个路径是所有的打包文件存放的路径
		path:require("path").resolve(__dirname,'dist'),
		//当入口文件只有一个的时候可以用这种文件名写死的方法
		//filename:'bundle.js'

		//当入口文件不止一个的时候，不能再写死了，不然他们的打包文件会覆盖到同一个文件里面，而且会报错，需要用[name] [hash] [chunkhash]间组合的形式规定打包后的文件名
		//filename:'[name]-[hash].js'

		//这个文件是只有js文件打包的路径
		filename:'js/[name]-[chunkhash].js',
		//每次通过hash值随机生成的文件名，在html页面中引入的时候都需要修改很麻烦，借用webpack插件解决
		//安装html-webpack-plugin

		//上线，绝对地址以这个开头
		publicPath:'http://cdn.com/'
	},
	plugins:[
		//实例化，注意末尾不加分号
		//dist js文件中就自动生成了一个index.html文件，此文件中的引用就是打包后的文件的正确路径，但与根目录下的index.html文件不一致

		//但打包后的文件都在js中，不符合现实，插件的输出也指向了js
		new htmlWebpackPlugin({
			//指定生成的名称
			filename:'index.html',
			// filename:'index-[hash].html',

			//模板，根目录下的index.html
			template:'index.html',

			//指定script引用文件在html文件中的位置，默认在body中
			//inject:'head',

			//看不见自动插入的模板中的代码
			inject:false,
			//参数被html文件获取
			title:'hello world!',
			date:new Date(),

			//对当前生成的html文件进行压缩
			minify:{
				removeComments:true,
				//删除空格
				collapseWhitespace:true
			}
		}),
		new htmlWebpackPlugin({
			filename:'a.html',
			template:'index.html',
			inject:false,
			title:'hello a!',
			excludeChunks:['b','c']
		}),
		new htmlWebpackPlugin({
			filename:'b.html',
			template:'index.html',
			inject:false,
			title:'hello b!',
			excludeChunks:['a','c']
		}),
		new htmlWebpackPlugin({
			filename:'c.html',
			template:'index.html',
			inject:false,
			title:'hello c!',
			excludeChunks:['b','a']
		})
	]
}