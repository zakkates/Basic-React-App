const HtmlWebpackPlugin = require("html-webpack-plugin");

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
};
