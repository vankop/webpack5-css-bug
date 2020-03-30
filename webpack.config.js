const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function (environment) {
	const isDev = !!environment.development

	return {
		mode: isDev ? 'development' : 'production',
		devtool: false,
		output: {
			filename: '[name].js',
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				{
					test: /\.css$/,
					use: [
						{
							loader: 'css-loader'
						},
					]
				},
			],
		},
		cache: false,
		resolve: {
			alias: {
				'~': path.resolve(__dirname, 'src'),
				'@': path.resolve(__dirname),
			},
			extensions: ['.vue', '.ts', '.js', '.tsx'],
		},
		optimization: {
			minimize: false
		},
		plugins: [
			new VueLoaderPlugin(),
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css',
				ignoreOrder: false,
			}),
		]
	}
}
