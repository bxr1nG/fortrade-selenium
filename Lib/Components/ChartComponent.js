const PageBase = require('../Base/PageBase');

let pageBase;

class ChartComponent {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.webdriver = webdriver;
		this.driver = driver;
		this.logger = logger;
	}

	async clickAddToFavoritesButton() {
		this.logger.info('Adding opened pair to favorites');

		await pageBase.clickWhenClickableByCss(
			'#favIconMainChart',
			this.waitTimeout
		);
	}

	async clickMultichartButton() {
		this.logger.info('Opening multiple charts');

		await pageBase.clickWhenClickableByCss('.multiCharts', this.waitTimeout);
	}

	async clickMaximizeChartButton() {
		this.logger.info('Opening single chart');

		await pageBase.sleep(1000);
		let element = await pageBase.waitForElementByCss(
			'div:nth-child(2) > .chartMini .resizeChart',
			this.waitTimeout
		);
		await this.driver.wait(
			this.webdriver.until.elementIsEnabled(element),
			this.waitTimeout
		);
		await this.driver.wait(
			this.webdriver.until.elementIsVisible(element),
			this.waitTimeout
		);
		await pageBase.clickWhenClickable(element, this.waitTimeout);
	}

	async clickBuyButton() {
		this.logger.info('Opening buy popup');

		await pageBase.clickWhenClickableByCss(
			'#executionButtons div.buyButtonContainer.enableColorTransition.boxSizing',
			this.waitTimeout
		);
	}
}

module.exports = ChartComponent;
