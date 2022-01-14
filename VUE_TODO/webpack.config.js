//导入path模块
const path = require('path')

//引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: 'development', //production
	//打包入口
	entry: './src/main.js',
	//打包出口
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist')
	},
	//打包规则
	module: {
		rules: [{
			//表示遇到以.vue结尾的文件要用vue-loader去打包
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			//找到对应的资源文件，改名后复制到dist目录下，并返回文件名，保存在APP.vue引用此位置的变量上
			test: /\.(jpg|jpeg|png|svg)$/,
			loader: 'file-loader'
		}]
	},
	//插件
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
			//在main.js中导入vue的时候，要导入vue.js,而不是默认的vue.common.js
			'vue': 'vue/dist/vue.js'
		}
	}
}