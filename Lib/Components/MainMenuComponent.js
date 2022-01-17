const PageBase = require('../Base/PageBase');

let pageBase;

class MainMenuComponent {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		this.webdriver = webdriver;
		this.driver = driver;
		this.logger = logger;
	}

	async clickOpenMenuButton() {
		this.logger.info('Opening main menu');

		await pageBase.clickWhenClickableByCss(
			'cq-context div.mainmenuDropButton',
			this.waitTimeout
		);
	}

	async clickOpenMenuSettingsButton() {
		this.logger.info('Opening settings submenu');

		await pageBase.clickWhenClickableByCss(
			'div.menuFooterButtons > div.menuSettingsShortcut',
			this.waitTimeout
		);
	}

	async clickOpenProfileSettingsButton() {
		this.logger.info('Opening profile settings');

		await pageBase.clickWhenClickableByCss(
			'.proSubMenu > #profileAndSettings',
			this.waitTimeout
		);
	}

	async clickOpenPasswordSettingsButton() {
		this.logger.info('Opening password settings');

		await pageBase.clickWhenClickableByCss(
			'.proSubMenu > #changePasswordMenu',
			this.waitTimeout
		);
	}

	async clickOpenLanguageSettingsButton() {
		this.logger.info('Opening language settings');

		await pageBase.clickWhenClickableByCss(
			'.proSubMenu > #languagesMenuItem',
			this.waitTimeout
		);
	}

	async clickRussianLanguageButton() {
		this.logger.info('Changing site language to russian');

		await pageBase.clickWhenClickableByCss(
			'#profileAndSettings > div.menuicon.langsImageFlags.ruFlag',
			this.waitTimeout
		);
	}

	async clickEnglishLanguageButton() {
		this.logger.info('Changing site language to english');

		await pageBase.clickWhenClickableByCss(
			'#profileAndSettings > div.menuicon.langsImageFlags.enFlag',
			this.waitTimeout
		);
	}
}

module.exports = MainMenuComponent;
