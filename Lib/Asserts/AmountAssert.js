const { assert } = require('chai');

const PageBase = require('../Base/PageBase');

let pageBase;

class AmountAssert {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.logger = logger;
	}

	async checkBidReduction(expectedAmount) {
		this.logger.info(`Checking if expected amount ${expectedAmount} reduced`);

		let realElement = await pageBase.waitForElementByCss('#maxAllowedAmount');
		let realAmount = await realElement.getText();

		assert.notEqual(parseInt(realAmount.replace(',', '')), expectedAmount);
	}

	async checkBidError() {
		this.logger.info('Checking if forbidding to bet 0');

		let element = await pageBase.waitForElementByCss('#errorWrongAmount');
		let text = await element.getText();

		assert.equal(text, 'The minimum trade amount is 1000.');
	}

	async checkNewBid() {
		this.logger.info('Checking if new bet opened');

		await pageBase.sleep(5000);
		let element = await pageBase.waitForElementByCss('#openTradesT > span');
		let text = await element.getText();
		console.log(text);

		assert.equal(parseInt(text) > 0, true);
	}

	async checkNoBids() {
		this.logger.info('Checking if bet closed');

		await pageBase.sleep(1000);
		let element = await pageBase.waitForElementByCss('#openTradesT > span');
		let text = await element.getText();
		console.log(text);

		assert.equal(parseInt(text), 0);
	}
}

module.exports = AmountAssert;
