const { assert } = require('chai');

const PageBase = require('../Base/PageBase');
const getMostRecentFile = require('../Addons/FileDigger');

let pageBase;

class DownloadAssert {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.logger = logger;
	}

	async checkLastDownloadedFile() {
		this.logger.info('Checking if excel file downloaded');

		await pageBase.sleep(1000);
		let filename = getMostRecentFile('C:/Users/voshc/Downloads');
		assert.equal(filename.includes('closedtrades'), true);
	}
}

module.exports = DownloadAssert;
