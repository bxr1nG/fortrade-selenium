const { assert } = require('chai');

const ComponentBase = require('../Base/ComponentBase');

class ChartComponent extends ComponentBase {
	constructor(webdriver, driver, waitTimeout = 20000) {
		super(webdriver, driver, waitTimeout);
	}

	async clickAddToFavoritesButton() {
		await this.clickWhenClickableByCss('#favIconMainChart', this.waitTimeout);
	}

	async clickMultichartButton() {
		await this.clickWhenClickableByCss('.multiCharts', this.waitTimeout);
	}

	async clickMaximizeChartButton() {
		await this.clickWhenClickableByCss(
			'div:nth-child(1) > .chartMini .resizeChart',
			this.waitTimeout
		);
	}

	async checkMessage() {
		let element = await this.waitForElementByCss('.message', this.waitTimeout);

		assert.equal(
			await element.getText(),
			'Instrument was added to your Favourites'
		);
	}

	// async checkMultichart() {
	// 	this.clickMultichartButton();

	// 	let element = await this.waitForElementByCss(
	// 		'div:nth-child(1) > .chartMini > .miniChartHeader',
	// 		this.waitTimeout
	// 	);

	// 	let event = new MouseEvent('mouseover', {
	// 		view: window,
	// 		bubbles: true,
	// 		cancelable: true,
	// 	});

	// 	await element.dispatchEvent(event);

	// 	this.clickMaximizeChartButton();

	// 	assert.equal(await element.Length, 2, 'Something wrong lol');
	// }

	async clickBuyButton() {
		await this.clickWhenClickableByCss(
			'.enableColorTransition:nth-child(3)',
			this.waitTimeout
		);
	}

	async clickSellButton() {
		await this.clickWhenClickableByCss(
			'.enableColorTransition:nth-child(1)',
			this.waitTimeout
		);
	}
}

module.exports = ChartComponent;
