var webpack = require("webpack");
var rootPath = process.cwd();
module.exports = {
	entry: {
		svg : ["./src/js/svg.js"]
	},
	output: {
		path: './js/',
		filename: '[name].js',		
		chunkFilename: "svg.[id].[chunkhash:8].min.js"
	},
	externals : {
		"jquery" : "$",
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude : /node_modules/,
				loader: 'babel',
				query: {
				  presets: ['es2015']
				}
			},
			{test:/\.tpl/, loader: "ejs-loader?variable=data"},
		]
	}
}
