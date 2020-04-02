const path = require('path')

module.exports = function (environment = {}) {
	const isDev = !!environment.development

	return {
		mode: isDev ? 'development' : 'production',
		// devtool: 'eval',
		devtool: false,
		output: {
			filename: '[name].js',
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
		}
	}
}
