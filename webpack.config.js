const path = require('path');
const pkg = require('./package.json');
// is DEV
const DEV = process.env.NODE_ENV !== 'production';

const settings = {
	lib: "Randi",
	target: 'umd',
	name: 'randi'
};

module.exports = {
	mode: process.env.NODE_ENV,
	entry: path.join(__dirname, pkg.main),
	devtool: DEV ? 'source-map' : '',
	resolve: {
		extensions: ['.js']
	},
	output: {
		filename: DEV ? settings.name + '.js' : settings.name + '.min.js',
		library: settings.lib,
		libraryTarget: settings.target,
		path: DEV ? path.join(__dirname, 'dev') : path.join(__dirname, 'dist', settings.target)
	}
};
