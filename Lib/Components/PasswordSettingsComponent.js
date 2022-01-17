const PageBase = require('../Base/PageBase');
const JSONManager = require('../Addons/JSONManager');
const StringCreator = require('../Addons/StringCreator');

let pageBase;
let jsonManager;

class ChangePasswordComponent {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		pageBase = new PageBase(webdriver, driver, waitTimeout);
		jsonManager = new JSONManager(logger);
		this.logger = logger;
	}

	async fillOldPasswordField() {
		this.logger.info('Filling old password field');

		this.user = await jsonManager.getUserData();
		await pageBase.sendKeysWhenEnabledByCss(
			'.ClField-OldPassword input',
			this.user.password,
			this.waitTimeout
		);
	}

	async fillNewPasswordField() {
		this.logger.info('Filling new password field');

		this.user.password = StringCreator.makePassword();
		await pageBase.sendKeysWhenEnabledByCss(
			'div.LcWidgetTopWrapper.ClField-NewPassword.lcFieldWrapper input',
			this.user.password,
			this.waitTimeout
		);
	}

	async fillNewPasswordVerificationField() {
		this.logger.info('Filling new password verification field');

		await pageBase.sendKeysWhenEnabledByCss(
			'div.LcWidgetTopWrapper.ClField-NewPasswordVerification.lcFieldWrapper input',
			this.user.password,
			this.waitTimeout
		);
	}

	async clickSubmitButton() {
		this.logger.info('Submitting password change');

		await jsonManager.setUserData(this.user);
		await pageBase.clickWhenClickableByCss(
			'form > input.Send-Submit',
			this.waitTimeout
		);
	}
}

module.exports = ChangePasswordComponent;
