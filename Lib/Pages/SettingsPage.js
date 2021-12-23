const PageBase = require('../Base/PageBase');

const StringCreator = require('../Utils/StringCreator');

class SettingsPage extends PageBase {
	constructor(
		webdriver,
		driver,
		targetUrl = 'https://ready.fortrade.com/#settings',
		waitTimeout = 20000
	) {
		super(webdriver, driver, targetUrl, waitTimeout);

		this.name = StringCreator.makeString(7);
		this.surname = StringCreator.makeString(11);
	}

	async clickCloseSettingsButton() {
		await this.clickWhenClickableByCss(
			'div.newIconsWeb.backButton.crossPosition',
			this.waitTimeout
		);
	}

	async clickOpenNameSettingsButton() {
		await this.clickWhenClickableByCss('#settingsName', this.waitTimeout);
	}

	async fillNameField() {
		await this.sendKeysWhenEnabledByCss(
			'#firstname',
			this.name,
			this.waitTimeout
		);
	}

	async fillSurnameField() {
		await this.sendKeysWhenEnabledByCss(
			'#lastname',
			this.surname,
			this.waitTimeout
		);
	}

	async fillProfileForm() {
		await this.fillNameField();
		await this.fillSurnameField();
	}

	async clickSaveProfileInfoButton() {
		await this.clickWhenClickableByCss('#saveProfileInfoButton');
	}

	async changeProfileData() {
		await this.fillProfileForm();
		await this.clickSaveProfileInfoButton();
	}
}

module.exports = SettingsPage;
