const webpack = require('webpack'),
	config = require('./webpack.config.js'),
	compiler = webpack(config);

const express = require('express');
const app = express();
const server = require('http').createServer(app);

const PORT = process.env.PORT || 9000;

/* If there is a need of backend,
add custom backend-specific middleware here */

const middleware = require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	index: 'index.html',
	/* Custom options of bundle information
	 * See more: https://webpack.js.org/configuration/stats */
	stats: {
		all: false,
		modules: true,
		assets: true,
		maxModules: 0,
		errors: true,
		warnings: true,
		moduleTrace: true,
		errorDetails: true,
		colors: true,
	},
});

app.use(middleware);
app.use('*', middleware);

/* Start server */
server.listen(PORT, 'localhost', () => {
	const host = server.address().address;
	const port = server.address().port;
	console.log('\x1b[35m%s\x1b[0m', `Listening at: http://${host}:${port}`);
});
