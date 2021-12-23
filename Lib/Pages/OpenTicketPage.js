const { assert } = require('chai');
const PageBase = require('../Base/PageBase');

class OpenTicketPage extends PageBase {
	constructor(
		webdriver,
		driver,
		targetUrl = 'https://ready.fortrade.com/#openticket',
		waitTimeout = 20000
	) {
		super(webdriver, driver, targetUrl, waitTimeout);
	}

	async getTitle() {
		let element = await this.waitForElementByCss(
			'#titleTicketSymbol',
			this.waitTimeout
		);
		return await element.getText();
	}

	async fillAmountField(amount) {
		await this.sendKeysWhenEnabledByCss(
			`#WebAmountPicker${(await this.getTitle()).replace('/', '')}`,
			amount,
			this.waitTimeout
		);
		await this.clickSomewere();
	}

	async clickAcceptButton(expectedValue) {
		let title = await this.getTitle();
		await this.clickWhenClickableByCss('.ticketActionButton');
		await this.checkAlertMessage(title, expectedValue);
	}

	async clickSomewere() {
		await this.clickWhenClickableByCss(
			'#webTicketPage > div:nth-child(1) > div.fieldTitle'
		);
	}

	async checkErrorMessage() {
		let element = await this.waitForElementByCss(
			'#errorWrongAmount',
			this.waitTimeout
		);

		assert.equal(await element.getText(), 'The minimum trade amount is 1000.');
	}

	async checkAlertMessage(title, expectedValue) {
		let element = await this.waitForElementByCss('.row2', this.waitTimeout);
		if (expectedValue)
			assert.equal((await element.getText()).includes(title), expectedValue);
	}

	async checkIsAmountChanged(expectedAmount) {
		let element = await this.waitForElementByCss(
			'#maxAllowedAmount',
			this.waitTimeout
		);
		assert.notEqual(
			parseInt(expectedAmount),
			parseInt((await element.getText()).replace(',', ''))
		);
	}
}

module.exports = OpenTicketPage;
