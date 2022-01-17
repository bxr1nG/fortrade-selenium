const webdriver = require('selenium-webdriver');
const LoginPage = require('../Lib/Pages/LoginPage');
const HomePage = require('../Lib/Pages/HomePage');

const MainAssert = require('../Lib/Asserts/MainAssert');

const driver = require('../Lib/Driver/ChromeDriver');
const logger = require('../Lib/Addons/Logger');
const StringCreator = require('../Lib/Addons/StringCreator');

let loginPage;
let homePage;

let mainAssert;

describe('Fortrade tests', async function () {
	before(async () => {
		loginPage = new LoginPage(webdriver, driver, 10000, logger);
		homePage = new HomePage(webdriver, driver, 10000, logger);

		mainAssert = new MainAssert(webdriver, driver, 10000, logger);

		await loginPage.loginToAccount();
	});

	it('Should add a trading pair to favorites', async () => {
		await homePage.openCurrencyPairFromMain('AUDJPY');
		await homePage.addPairToFavorite();
		await homePage.openCurrencyPairFromFavorites('AUDJPY');
		await mainAssert.checkAdditionToFavorites('AUDJPY');
		await homePage.addPairToFavorite();
	});

	it('Should create a multichart', async () => {
		await homePage.makeMultiChart();
		await mainAssert.checkChartChanges();
		await homePage.makeSingleChart();
	});

	it('Should change name in the settings', async () => {
		let fisrtname = StringCreator.makeString();
		let lastname = StringCreator.makeString();

		await homePage.openProfileSettings();
		await homePage.updateName(fisrtname, lastname);
		await mainAssert.checkNameChanges(fisrtname);
	});

	it('Should download closed trades excel file', async () => {
		await homePage.downloadTrades();
		await mainAssert.checkLastDownloadedFile();
	});

	it('Should change primary language of the site', async () => {
		await homePage.changeLanguageToRussian();
		await mainAssert.checkLanguageChange();
		await homePage.changeLanguageToEnglish();
	});

	it('Should reduce amount of bid', async () => {
		await homePage.sleep(1000);
		await homePage.openCurrencyPairFromFavorites('AUDCAD');
		await homePage.makeBid(100000000);
		await mainAssert.checkBidReduction(100000000);
		await homePage.closeBidPopup();
	});

	it('Should forbid to place a bet', async () => {
		await homePage.openCurrencyPairFromFavorites('AUDCAD');
		await homePage.makeBid(0);
		await mainAssert.checkBidError();
		await homePage.closeBidPopup();
	});

	it('Should place a bet', async () => {
		await homePage.openCurrentBets();
		await homePage.openCurrencyPairFromFavorites('AUDCAD');
		await homePage.makeBid(1000);
		await homePage.submitBid();
		await mainAssert.checkNewBid();
	});

	it('Should close a bet', async () => {
		await homePage.closeBet();
		await mainAssert.checkNoBids();
	});

	it('Should close all bets', async () => {
		await homePage.openCurrencyPairFromFavorites('AUDCAD');
		await homePage.makeBid(1000);
		await homePage.submitBid();
		await homePage.sleep(4000);
		await homePage.makeBid(1000);
		await homePage.submitBid();
		await homePage.closeAllBets();
		await mainAssert.checkNoBids();
	});

	after(async () => driver.quit());

	// NOT WORKING
	// it('Should change password in the settings', async () => {
	// 	await homePage.openPasswordSettings();
	// 	await homePage.updatePassword();
	// });
});
