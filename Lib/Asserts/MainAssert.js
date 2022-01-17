const FavoritesAssert = require('./FavoritesAssert');
const MultichartAssert = require('./MultichartAssert');
const NameAssert = require('./NameAssert');
const DownloadAssert = require('./DownloadAssert');
const LanguageAssert = require('./LanguageAssert');
const AmountAssert = require('./AmountAssert');

let favoritesAssert;
let multichartAssert;
let nameAssert;
let downloadAssert;
let languageAssert;
let amountAssert;

class MainAssert {
	constructor(webdriver, driver, waitTimeout = 10000, logger) {
		favoritesAssert = new FavoritesAssert(webdriver, driver, 10000, logger);
		multichartAssert = new MultichartAssert(webdriver, driver, 10000, logger);
		nameAssert = new NameAssert(webdriver, driver, 10000, logger);
		downloadAssert = new DownloadAssert(webdriver, driver, 10000, logger);
		languageAssert = new LanguageAssert(webdriver, driver, 10000, logger);
		amountAssert = new AmountAssert(webdriver, driver, 10000, logger);
	}

	async checkAdditionToFavorites(symbol) {
		await favoritesAssert.checkAdditionToFavorites(symbol);
	}

	async checkChartChanges() {
		await multichartAssert.checkChartChanges();
	}

	async checkNameChanges(firstname) {
		await nameAssert.checkNameChanges(firstname);
	}

	async checkLastDownloadedFile() {
		await downloadAssert.checkLastDownloadedFile();
	}

	async checkLanguageChange() {
		await languageAssert.checkLanguageChange();
	}

	async checkBidReduction(amount) {
		await amountAssert.checkBidReduction(amount);
	}

	async checkBidError() {
		await amountAssert.checkBidError();
	}

	async checkNewBid() {
		await amountAssert.checkNewBid();
	}

	async checkNoBids() {
		await amountAssert.checkNoBids();
	}
}

module.exports = MainAssert;
