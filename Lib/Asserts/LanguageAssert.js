const { assert } = require('chai');

const PageBase = require('../Base/PageBase');

let pageBase;

class LanguageAssert {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.logger = logger;
	}

	async checkLanguageChange() {
		this.logger.info('Checking if main language changed to russian');

		await pageBase.sleep(1000);
		let element1 = await pageBase.waitForElementByCss(
			'cq-context div.accountFinanceState > div:nth-child(1) > span:nth-child(1)'
		);
		let element2 = await pageBase.waitForElementByCss(
			'cq-context div.accountFinanceState > div:nth-child(7) > span:nth-child(1)'
		);

		let text = new Array();
		text[0] = await element1.getText();
		text[1] = await element2.getText();

		assert.equal(text.join(' '), 'Баланс Собственный капитал');
	}
}

module.exports = LanguageAssert;
