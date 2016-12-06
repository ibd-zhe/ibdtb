var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var NODE_DIR = path.resolve(__dirname, 'node_modules');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
	path: BUILD_DIR,
	filename: 'bundle.js'
    },
    module : {
	    loaders : [
            {
                test: /\.jsx?/,
                include: APP_DIR,
	            loader: 'babel'
	    },
{ test: /\.json$/,
  include: NODE_DIR,
  loader: 'json'
            }
        ]
    },
    node: {
    console: true,
	fs: 'empty',
	net: 'empty',
	tls: 'empty'
	}
};

module.exports = config;
