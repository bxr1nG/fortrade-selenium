const { assert } = require('chai');

const PageBase = require('../Base/PageBase');

let pageBase;

class NameAssert {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.logger = logger;
	}

	async checkNameChanges(firstname) {
		this.logger.info(`Checking if first name changed to ${firstname}`);

		let element = await pageBase.waitForElementByCss(
			'cq-context div.menuTPAccountId'
		);
		await pageBase.sleep(1000);
		let text = await element.getText();

		assert.equal(text, firstname);
	}
}

module.exports = NameAssert;
