const fs = require('fs');

class JSONManager {
	constructor(logger) {
		this.logger = logger;
	}

	async getUserData() {
		this.logger.info('Getting user data from file');

		let user = require('./user.json');
		user.password = atob(user.password);
		return user;
	}

	async setUserData(user) {
		this.logger.info('Setting user data to file');

		user.password = btoa(user.password);
		let data = JSON.stringify(user, null, 2);

		fs.writeFile('Lib/Addons/user.json', data, err => {
			if (err) throw err;
		});
	}
}

module.exports = JSONManager;

// {
//     "login": "vochshukdaniil@gmail.com",
//     "password": "fzSr5dq28ZrZMte"
//   }
