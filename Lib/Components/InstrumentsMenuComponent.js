const PageBase = require('../Base/PageBase');

let pageBase;

class InstrumentsMenuComponent {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.logger = logger;
	}

	async clickMenuSelector() {
		this.logger.info('Opening components menu');

		await pageBase.clickWhenClickableByCss('#catSelector', this.waitTimeout);
	}

	async clickFavoritesMenuItem() {
		this.logger.info('Opening Favorites submenu');

		await pageBase.clickWhenClickableByCss(
			'#catSelector > div.catsDropdown > div:nth-child(1)', //div[class="catOption"][idx="0"]
			this.waitTimeout
		);
	}

	async clickAllMenuItem() {
		this.logger.info('Opening All submenu');

		await pageBase.clickWhenClickableByCss(
			'#catSelector > div.catsDropdown > div:nth-child(7)', //div[class="catOption"][idx="6"]
			this.waitTimeout
		);
	}

	// All > Currency
	async clickAllCurrencyMenuItem() {
		this.logger.info('Opening All > Currency submenu');

		await pageBase.clickWhenClickableByCss(
			'#sortable > div:nth-child(1)',
			this.waitTimeout
		);
	}

	// All > Currency > Major currency pairs
	async clickAllCurrencyMajorMenuItem() {
		this.logger.info('Opening All > Currency > Major submenu');

		await pageBase.clickWhenClickableByCss(
			'#sortable > div:nth-child(2) > div:nth-child(1)',
			this.waitTimeout
		);
	}

	// example: symbol = "AUDJPY"
	async clickInstrumentBySymbol(symbol) {
		this.logger.info(`Opening "${symbol}" trading pair`);

		await pageBase.clickWhenClickableByCss(
			`div[symbol="${symbol}"]>.nameColumn`,
			this.waitTimeout
		);
	}

	async goToFavorites() {
		await this.clickMenuSelector();
		await this.clickFavoritesMenuItem();
	}

	async goToCurrencyPairs() {
		await this.clickMenuSelector();
		await this.clickAllMenuItem();
		await this.clickAllCurrencyMenuItem();
		await this.clickAllCurrencyMajorMenuItem();
	}
}

module.exports = InstrumentsMenuComponent;
