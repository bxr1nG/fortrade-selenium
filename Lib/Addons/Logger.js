const { getLogger, configure } = require('log4js');

configure({
	appenders: {
		app: { type: 'file', filename: 'Logs/app.log' },
		out: { type: 'stdout' },
		multi: {
			type: 'multiFile',
			base: 'Logs/',
			property: 'categoryName',
			extension: '.log',
			maxLogSize: 4096,
			backup: 3,
			compress: true,
		},
	},
	categories: {
		default: {
			appenders: ['app'],
			level: 'debug',
		},
		// default: {
		// 	appenders: ['app', 'out', 'multi'],
		// 	level: 'debug',
		// },
	},
});

const logger = getLogger();

module.exports = logger;
