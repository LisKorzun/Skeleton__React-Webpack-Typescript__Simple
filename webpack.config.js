const path = require('path'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'none',
	entry: {
		skeleton: ['./src/index.tsx']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader'
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'index.html')}),
	]
};
