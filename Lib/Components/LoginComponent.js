const PageBase = require('../Base/PageBase');
const JSONManager = require('../Addons/JSONManager');

let pageBase;
let jsonManager;

class LoginComponent {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		jsonManager = new JSONManager(logger);
		this.logger = logger;
	}

	async openPage() {
		this.logger.info('Opening Fortrade login page');

		await pageBase.navigate('https://ready.fortrade.com/#login');
		this.user = await jsonManager.getUserData();
	}

	async fillEmailField() {
		this.logger.info('Filling in the email field');

		await pageBase.sendKeysWhenEnabledByCss(
			'#tpaccountId',
			this.user.login,
			this.waitTimeout
		);
	}

	async fillPasswordField() {
		this.logger.info('Filling in the password field');

		await pageBase.sendKeysWhenEnabledByCss(
			'#loginpassword',
			this.user.password,
			this.waitTimeout
		);
	}

	async clickLoginButton() {
		this.logger.info('Clicking on the login button');

		await pageBase.clickWhenClickableByCss('#loginButton');
	}
}

module.exports = LoginComponent;
