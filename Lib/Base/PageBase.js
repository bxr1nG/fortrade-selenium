const ComponentBase = require('./ComponentBase');

class PageBase extends ComponentBase {
	constructor(webdriver, driver, waitTimeout = 10000) {
		super(webdriver, driver, waitTimeout);
	}

	async navigate(targetUrl) {
		await this.driver.navigate().to(targetUrl);
	}

	async returnFromDestination() {
		return this.driver.navigate().back();
	}

	async refreshPage() {
		return this.driver.navigate().refresh();
	}
}

module.exports = PageBase;
