const { assert } = require('chai');

const ComponentBase = require('../Base/ComponentBase');

class TradesComponent extends ComponentBase {
	constructor(webdriver, driver, waitTimeout = 20000) {
		super(webdriver, driver, waitTimeout);
	}

	async clickOpenedTradesButton() {
		await this.clickWhenClickableByCss('#openTradesT', this.waitTimeout);
	}

	async clickSummaryButton() {
		await this.clickWhenClickableByCss('#summaryT', this.waitTimeout);
	}

	async clickCloseAllTradesButton() {
		await this.clickWhenClickableByCss(
			'#TradesZone > div.tradesTabHeader > div.closeAllTradesButton.webSprite',
			this.waitTimeout
		);
	}

	// Need one active trade
	async clickCloseLastTradeButton() {
		await this.clickWhenClickableByCss(
			'.tradeItem > div > div > div:nth-child(7) > div:nth-child(4)',
			this.waitTimeout
		);
	}

	// Need one active trade
	async clickDuplicateLastTradeButton() {
		await this.clickWhenClickableByCss(
			'.tradeItem > div > div > div:nth-child(7) > div:nth-child(1)',
			this.waitTimeout
		);
	}

	async clickSubmitDuplicationButton() {
		await this.clickWhenClickableByCss(
			'#duplicateHedgeTradeButton',
			this.waitTimeout
		);
	}

	async checkDuplicationMessage() {
		let element = await this.waitForElementByCss('.row2', this.waitTimeout);

		console.log(await element.getText());

		assert.equal(
			await element.getText(),
			'Your request to open a new trade was executed successfully.'
		);
	}

	async clickSubmitCloseTradeButton() {
		await this.clickWhenClickableByCss('#closeSaveButton', this.waitTimeout);
	}

	async checkCloseMessage() {
		let element = await this.waitForElementByCss('.row2', this.waitTimeout);

		assert.equal(
			await element.getText(),
			'Your request to close an existing trade was executed successfully.'
		);
	}

	async checkActiveTradesCount() {
		let element = await this.waitForElementByCss(
			'.notradesmessage',
			this.waitTimeout
		);

		assert.equal(await element.getText(), "You don't have any open trade(s).");
	}
}

module.exports = TradesComponent;
