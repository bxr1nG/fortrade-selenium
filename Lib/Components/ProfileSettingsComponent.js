const PageBase = require('../Base/PageBase');

let pageBase;

class ProfileSettingsComponent {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.webdriver = webdriver;
		this.driver = driver;
		this.logger = logger;
	}

	async clickOpenNameSettingsButton() {
		this.logger.info('Opening name settings');

		await pageBase.clickWhenClickableByCss(
			'#settingsFullNameRow',
			this.waitTimeout
		);
	}

	async fillFirstNameField(firstname) {
		this.logger.info('Filling first name field');

		await pageBase.clearFieldByCss('#firstname', this.waitTimeout);
		await pageBase.sendKeysWhenEnabledByCss(
			'#firstname',
			firstname,
			this.waitTimeout
		);
	}

	async fillLastNameField(lastname) {
		this.logger.info('Filling last name field');

		await pageBase.clearFieldByCss('#lastname', this.waitTimeout);
		await pageBase.sendKeysWhenEnabledByCss(
			'#lastname',
			lastname,
			this.waitTimeout
		);
	}

	async clickSubmitButton() {
		this.logger.info('Submitting name changes');

		await pageBase.clickWhenClickableByCss(
			'#saveProfileInfoButton',
			this.waitTimeout
		);
	}

	async clickCloseButton() {
		this.logger.info('Closing opened window');

		await pageBase.clickWhenClickableByCss(
			'#bodyTemplate div.newIconsWeb.backButton.crossPosition',
			this.waitTimeout
		);
	}

	async reloadPage() {
		this.logger.info('Reloading page');

		await pageBase.refreshPage();
	}
}

module.exports = ProfileSettingsComponent;
