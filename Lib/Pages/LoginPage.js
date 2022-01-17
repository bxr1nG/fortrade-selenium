const LoginComponent = require('../Components/LoginComponent');

let loginComponent;

class LoginPage {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		loginComponent = new LoginComponent(webdriver, driver, waitTimeout, logger);
	}

	async loginToAccount() {
		await loginComponent.openPage();
		await loginComponent.fillEmailField();
		await loginComponent.fillPasswordField();
		await loginComponent.clickLoginButton();
	}
}

module.exports = LoginPage;
