const InstrumentsMenuComponent = require('../Components/InstrumentsMenuComponent');
const ChartComponent = require('../Components/ChartComponent');
const MainMenuComponent = require('../Components/MainMenuComponent');
const ProfileSettingsComponent = require('../Components/ProfileSettingsComponent');
const PasswordSettingsComponent = require('../Components/PasswordSettingsComponent');
const TradesZoneComponent = require('../Components/TradesZoneComponent');
const BuyPopupComponent = require('../Components/BuyPopupComponent');

let instrumentsMenuComponent;
let chartComponent;
let mainMenuComponent;
let profileSettingsComponent;
let passwordSettingsComponent;
let tradesZoneComponent;
let buyPopupComponent;

class HomePage {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		instrumentsMenuComponent = new InstrumentsMenuComponent(
			webdriver,
			driver,
			waitTimeout,
			logger
		);
		chartComponent = new ChartComponent(webdriver, driver, waitTimeout, logger);
		mainMenuComponent = new MainMenuComponent(
			webdriver,
			driver,
			waitTimeout,
			logger
		);
		profileSettingsComponent = new ProfileSettingsComponent(
			webdriver,
			driver,
			waitTimeout,
			logger
		);
		passwordSettingsComponent = new PasswordSettingsComponent(
			webdriver,
			driver,
			waitTimeout,
			logger
		);
		tradesZoneComponent = new TradesZoneComponent(
			webdriver,
			driver,
			waitTimeout,
			logger
		);
		buyPopupComponent = new BuyPopupComponent(
			webdriver,
			driver,
			waitTimeout,
			logger
		);
	}

	async openCurrencyPairFromFavorites(symbol) {
		await instrumentsMenuComponent.goToFavorites();
		await instrumentsMenuComponent.clickInstrumentBySymbol(symbol);
	}

	async openCurrencyPairFromMain(symbol) {
		await instrumentsMenuComponent.goToCurrencyPairs();
		await instrumentsMenuComponent.clickInstrumentBySymbol(symbol);
	}

	async addPairToFavorite() {
		await chartComponent.clickAddToFavoritesButton();
	}

	async makeMultiChart() {
		await chartComponent.clickMultichartButton();
	}

	async makeSingleChart() {
		await chartComponent.clickMaximizeChartButton();
	}

	async openProfileSettings() {
		await mainMenuComponent.clickOpenMenuButton();
		await mainMenuComponent.clickOpenMenuSettingsButton();
		await mainMenuComponent.clickOpenProfileSettingsButton();
	}

	async updateName(firstname, lastname) {
		await profileSettingsComponent.clickOpenNameSettingsButton();
		await profileSettingsComponent.fillFirstNameField(firstname);
		await profileSettingsComponent.fillLastNameField(lastname);
		await profileSettingsComponent.clickSubmitButton();
		await profileSettingsComponent.reloadPage();
	}

	async openPasswordSettings() {
		await mainMenuComponent.clickOpenMenuButton();
		await mainMenuComponent.clickOpenMenuSettingsButton();
		await mainMenuComponent.clickOpenPasswordSettingsButton();
	}

	async updatePassword() {
		await passwordSettingsComponent.fillOldPasswordField();
		await passwordSettingsComponent.fillNewPasswordField();
		await passwordSettingsComponent.fillNewPasswordVerificationField();
		await passwordSettingsComponent.clickSubmitButton();
	}

	async closeWindow() {
		await profileSettingsComponent.clickCloseButton();
	}

	async downloadTrades() {
		await tradesZoneComponent.clickClosedTradesButton();
		await tradesZoneComponent.clickExportToExcelButton();
	}

	async changeLanguageToRussian() {
		await mainMenuComponent.clickOpenMenuButton();
		await mainMenuComponent.clickOpenMenuSettingsButton();
		await mainMenuComponent.clickOpenLanguageSettingsButton();
		await mainMenuComponent.clickRussianLanguageButton();
	}

	async changeLanguageToEnglish() {
		await mainMenuComponent.clickOpenMenuButton();
		await mainMenuComponent.clickOpenMenuSettingsButton();
		await mainMenuComponent.clickOpenLanguageSettingsButton();
		await mainMenuComponent.clickEnglishLanguageButton();
	}

	async makeBid(amount) {
		await chartComponent.clickBuyButton();
		await buyPopupComponent.fillAmountField(amount);
		await buyPopupComponent.clickFreePlace();
	}

	async submitBid() {
		await buyPopupComponent.clickBuyNowButton();
	}

	async closeBidPopup() {
		await buyPopupComponent.clickClosePopupButton();
	}

	async closeBet() {
		await tradesZoneComponent.clickCloseTradeButton();
		await tradesZoneComponent.clickSubmitCloseButton();
	}

	async closeAllBets() {
		await tradesZoneComponent.clickCloseAllTradesButton();
		await tradesZoneComponent.clickSubmitCloseButton();
	}

	async openCurrentBets() {
		await tradesZoneComponent.clickOpenedTradesButton();
	}

	async sleep(time) {
		await tradesZoneComponent.sleep(time);
	}
}

module.exports = HomePage;
