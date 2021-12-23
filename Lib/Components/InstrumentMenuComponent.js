const ComponentBase = require('../Base/ComponentBase');

class InstrumentMenuComponent extends ComponentBase {
	constructor(webdriver, driver, waitTimeout = 20000) {
		super(webdriver, driver, waitTimeout);
	}

	async clickMenuSelector() {
		await this.clickWhenClickableByCss('#catSelector', this.waitTimeout);
	}

	async clickFavoritesMenuItem() {
		await this.clickWhenClickableByCss(
			'div[class="catOption"][idx="0"]',
			this.waitTimeout
		);
	}

	async clickAllMenuItem() {
		await this.clickWhenClickableByCss(
			'div[class="catOption"][idx="6"]',
			this.waitTimeout
		);
	}

	// All > Currency
	async clickAllCurrencyMenuItem() {
		await this.clickWhenClickableByCss(
			'#sortable>div:first-of-type',
			this.waitTimeout
		);
	}

	// All > Currency > Main currency pairs
	async clickAllCurrencyMainMenuItem() {
		await this.clickWhenClickableByCss(
			'.instrumentsAnimatedContainer > :first-child',
			this.waitTimeout
		);
	}

	// example: symbol = "AUDJPY"
	async clickInstrumentBySymbol(symbol) {
		await this.clickWhenClickableByCss(
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
		await this.clickAllCurrencyMainMenuItem();
	}

	async openCurrencyPairFromFavorites(symbol) {
		await this.goToFavorites();
		await this.clickInstrumentBySymbol(symbol);
	}

	async openCurrencyPairFromMain(symbol) {
		await this.goToCurrencyPairs();
		await this.clickInstrumentBySymbol(symbol);
	}
}

module.exports = InstrumentMenuComponent;
