const { assert } = require('chai');

const ComponentBase = require('../Base/ComponentBase');

class HamburgerComponent extends ComponentBase {
	constructor(webdriver, driver, waitTimeout = 20000) {
		super(webdriver, driver, waitTimeout);
	}

	async clickOpenHamburgerMenuButton() {
		await this.clickWhenClickableByCss('.mainmenuDropButton', this.waitTimeout);
	}

	async clickOpenSettingsMenuButton() {
		await this.clickWhenClickableByCss(
			'.menuSettingsShortcut',
			this.waitTimeout
		);
	}

	async clickOpenAccountSettingsButton() {
		await this.clickWhenClickableByCss(
			'#profileAndSettings:first-child',
			this.waitTimeout
		);
	}
}

module.exports = HamburgerComponent;
