class ComponentBase {
	constructor(webdriver, driver, waitTimeout = 10000) {
		this.webdriver = webdriver;
		this.driver = driver;
		this.waitTimeout = waitTimeout;
	}

	async clearFieldByCss(cssName, waitTimeout = 10000) {
		const element = await this.waitForElementByCss(cssName, waitTimeout);
		await this.clearField(element, waitTimeout);
	}

	async clearFieldByName(elementName, waitTimeout = 10000) {
		const element = await this.waitForElementByName(elementName, waitTimeout);
		await this.clearField(element, waitTimeout);
	}

	async clearField(element, waitTimeout = 10000) {
		await this.driver.wait(
			this.webdriver.until.elementIsVisible(element),
			waitTimeout
		);
		await this.driver.wait(
			this.webdriver.until.elementIsEnabled(element),
			waitTimeout
		);
		await element.clear();
	}

	async sendKeysWhenEnabledByCss(cssName, text, waitTimeout = 10000) {
		const element = await this.waitForElementByCss(cssName, waitTimeout);
		await this.sendKeysWhenEnabled(element, text, waitTimeout);
	}

	async sendKeysWhenEnabledByName(elementName, text, waitTimeout = 10000) {
		const element = await this.waitForElementByName(elementName, waitTimeout);
		await this.sendKeysWhenEnabled(element, text, waitTimeout);
	}

	async sendKeysWhenEnabled(element, text, waitTimeout = 10000) {
		await this.driver.wait(
			this.webdriver.until.elementIsVisible(element),
			waitTimeout
		);
		await this.driver.wait(
			this.webdriver.until.elementIsEnabled(element),
			waitTimeout
		);
		await element.sendKeys(text);
	}

	async clickWhenClickableByCss(cssName, waitTimeout = 10000) {
		const element = await this.waitForElementByCss(cssName, waitTimeout);
		await this.clickWhenClickable(element, waitTimeout);
	}

	async clickWhenClickableByName(elementName, waitTimeout = 10000) {
		const element = await this.waitForElementByName(elementName, waitTimeout);
		await this.clickWhenClickable(element, waitTimeout);
	}

	async clickWhenClickable(element, waitTimeout = 10000) {
		await this.driver.wait(
			this.webdriver.until.elementIsVisible(element),
			waitTimeout
		);
		await this.driver.wait(
			this.webdriver.until.elementIsEnabled(element),
			waitTimeout
		);
		await element.click();
	}

	async waitForElementByCss(cssName, waitTimeout = 10000) {
		const selector = this.webdriver.By.css(cssName);
		const result = await this.waitForElement(selector, cssName, waitTimeout);
		return result;
	}

	async waitForElementByName(elementName, waitTimeout = 10000) {
		const selector = this.webdriver.By.name(elementName);
		const result = await this.waitForElement(
			selector,
			elementName,
			waitTimeout
		);
		return result;
	}

	async waitForElement(selector, elementName, waitTimeout = 10000) {
		let result;
		await this.driver.wait(
			() =>
				this.driver.findElement(selector).then(
					element => {
						result = element;
						return true;
					},
					err => {
						if (err.name === 'NoSuchElementError') {
							return false;
						}
						return true;
					}
				),
			waitTimeout,
			`Unable to find element: ${elementName}`
		);
		return result;
	}

	async waitForElementsByCss(cssName, waitTimeout = 10000) {
		const selector = this.webdriver.By.css(cssName);
		const result = await this.waitForElements(selector, cssName, waitTimeout);
		return result;
	}

	async waitForElements(selector, elementsName, waitTimeout = 10000) {
		let result;
		await this.driver.wait(
			() =>
				this.driver.findElements(selector).then(
					elements => {
						result = elements;
						return true;
					},
					err => {
						if (err.name === 'NoSuchElementsError') {
							return false;
						}
						return true;
					}
				),
			waitTimeout,
			`Unable to find elements: ${elementsName}`
		);
		return result;
	}

	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}

module.exports = ComponentBase;
