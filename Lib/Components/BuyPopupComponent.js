const PageBase = require('../Base/PageBase');

let pageBase;

class BuyPopupComponent {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.webdriver = webdriver;
		this.driver = driver;
		this.logger = logger;
	}

	async clickBuyNowButton() {
		this.logger.info('Opening buy popup');

		await pageBase.clickWhenClickableByCss(
			'#webTicketPage div.ticketActionButton.t_button.primary',
			this.waitTimeout
		);
	}

	async clickClosePopupButton() {
		this.logger.info('Closing buy popup');

		await pageBase.clickWhenClickableByCss(
			'div.popupWebClassic div.newIconsWeb.backButton.crossPosition',
			this.waitTimeout
		);
	}

	async clickFreePlace() {
		await pageBase.clickWhenClickableByCss(
			'#titleTicketSymbol',
			this.waitTimeout
		);
	}

	async fillAmountField(amount) {
		this.logger.info('Filling amount field');

		await pageBase.sendKeysWhenEnabledByCss(
			'#ticketAmountContainer input.textpart',
			amount,
			this.waitTimeout
		);
	}
}

module.exports = BuyPopupComponent;
