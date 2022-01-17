const PageBase = require('../Base/PageBase');

let pageBase;

class TradesZoneComponent {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.logger = logger;
	}

	async sleep(time) {
		await pageBase.sleep(time);
	}

	async clickClosedTradesButton() {
		this.logger.info('Opening closed trades tab');

		await pageBase.clickWhenClickableByCss('#closeTradesT', this.waitTimeout);
	}

	async clickOpenedTradesButton() {
		this.logger.info('Opening opened trades tab');

		await pageBase.clickWhenClickableByCss('#openTradesT', this.waitTimeout);
	}

	async clickCloseTradeButton() {
		this.logger.info('Closing bet');

		await pageBase.clickWhenClickableByCss(
			'span.icon.tradeCloseButtonClick.closeIcon',
			this.waitTimeout
		);
	}

	async clickCloseAllTradesButton() {
		this.logger.info('Closing all bets');

		await pageBase.sleep(1000);
		await pageBase.clickWhenClickableByCss(
			'#TradesZone > div.tradesTabHeader > div.closeAllTradesButton.webSprite',
			this.waitTimeout
		);
	}

	async clickSubmitCloseButton() {
		this.logger.info('Submitting closing bet');

		await pageBase.clickWhenClickableByCss(
			'#closeSaveButton',
			this.waitTimeout
		);
	}

	async clickExportToExcelButton() {
		this.logger.info('Downloading closed trades excel file');

		await pageBase.sleep(1000);
		await pageBase.clickWhenClickableByCss(
			'#tradesView > div > div.PositionsfilterContainer.sticky.boxSizing.sticky > span',
			this.waitTimeout
		);
	}
}

module.exports = TradesZoneComponent;
