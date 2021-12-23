const PageBase = require('../Base/PageBase');

class LoginPage extends PageBase {
	constructor(
		webdriver,
		driver,
		targetUrl = 'https://ready.fortrade.com/#login',
		waitTimeout = 20000
	) {
		super(webdriver, driver, targetUrl, waitTimeout);
	}

	async fillLoginField(login) {
		await this.sendKeysWhenEnabledByCss(
			'#tpaccountId',
			login,
			this.waitTimeout
		);
	}

	async fillPasswordField(password) {
		await this.sendKeysWhenEnabledByCss(
			'#loginpassword',
			password,
			this.waitTimeout
		);
	}

	async clickLoginButton() {
		await this.clickWhenClickableByCss('#loginButton');
	}

	async fillLoginForm() {
		const login = 'vochshukdaniil@gmail.com';
		const password = 'fzSr5dq28ZrZMte';

		await this.fillLoginField(login);
		await this.fillPasswordField(password);
	}

	async submitLoginForm() {
		await this.clickLoginButton();
	}

	async logIntoAccount() {
		await this.fillLoginForm();
		await this.submitLoginForm();
	}
}

module.exports = LoginPage;
