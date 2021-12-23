const PageBase = require('../Base/PageBase');
const InstrumentMenuComponent = require('../Components/InstrumentMenuComponent');
const ChartComponent = require('../Components/ChartComponent');
const TradesComponent = require('../Components/TradesComponent');
const HamburgerComponent = require('../Components/HamburgerComponent');

class HomePage extends PageBase {
	constructor(
		webdriver,
		driver,
		targetUrl = 'https://ready.fortrade.com/#home',
		waitTimeout = 20000
	) {
		super(webdriver, driver, targetUrl, waitTimeout);
		this.menu = new InstrumentMenuComponent(webdriver, driver);
		this.chart = new ChartComponent(webdriver, driver);
		this.trades = new TradesComponent(webdriver, driver);
		this.hamburger = new HamburgerComponent(webdriver, driver);
	}

	async clickCloseAlertButton() {
		await this.clickWhenClickableByCss('.crossCloseBlue', this.waitTimeout);
	}

	async clickCloseWindowButton() {
		await this.clickWhenClickableByCss(
			'.sProHeader > .backButton',
			this.waitTimeout
		);
	}
}

module.exports = HomePage;
