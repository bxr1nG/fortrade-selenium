const { assert } = require('chai');

const PageBase = require('../Base/PageBase');

let pageBase;

class MultichartAssert {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.webdriver = webdriver;
		this.driver = driver;
		this.logger = logger;
	}

	async checkChartChanges() {
		this.logger.info('Checking if chart changed');

		// let elements = await pageBase.waitForElementsByCss(
		// 	'#chartAndTabsWrapper > div.smallChartsContainer div.symbolName > translate'
		// );
		// for (let e of elements) {
		// 	console.log(await e.getText());
		// }

		let element = await pageBase.waitForElementByCss(
			'#chartAndTabsWrapper > div.smallChartsContainer'
		);

		assert.equal(!!element, true);
	}
}

module.exports = MultichartAssert;
