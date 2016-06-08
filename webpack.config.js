var webpack = require("webpack");
var rootPath = process.cwd();
var path = require("path");
module.exports = {
	entry: {
		svg : ["./src/js/svg.js"]
	},
	output: {
		path: './public/js/',
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
			{test:/\.scss$/, loader:'style-loader!css-loader!sass-loader'},
			{test:/\.css$/, loader:'style-loader!css-loader'},
		]
	},
	
	
}
