const { assert } = require('chai');

const PageBase = require('../Base/PageBase');

let pageBase;

class FavoritesAssert {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.logger = logger;
	}

	async checkAdditionToFavorites(symbol) {
		this.logger.info(`Checking if ${symbol} pair added to favorites`);

		let element = await pageBase.waitForElementByCss('#symbolNameHorizontal');
		let text = await element.getText();

		assert.equal(text.replace('/', ''), symbol);
	}
}

module.exports = FavoritesAssert;
