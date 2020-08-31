const proxy = require('http-proxy-middleware');
module.exports = function(app) {
	app.use(proxy('/apis', {
		logLevel: 'debug',
		//ip address or domain goes here
		target: "uss-hopper.site:8080",
		changeOrigin: true,
		secure: true, }));
};