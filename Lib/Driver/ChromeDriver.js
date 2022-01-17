const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
const pref = new webdriver.logging.Preferences();
const driver = new webdriver.Builder()
	.withCapabilities(webdriver.Capabilities.chrome())
	.setLoggingPrefs(pref)
	.build();

driver.manage().window().maximize();

module.exports = driver;
