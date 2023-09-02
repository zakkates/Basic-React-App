const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development", // Or 'production'
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html", // Update this path
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			// other rules...
		],
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "main.js",
	},
};
