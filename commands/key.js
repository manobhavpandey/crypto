const KeyManager = require("../lib/KeyManager.js");
const inquirer = require("inquirer");
const colors = require("colors");
const { isRequired } = require("../utils/validation");
const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API key:".green + " https://nomics.com",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);
    if (!key) console.log("Could not set API key.".red);

    console.log(`API key is set`.blue);
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      return key;
    } catch (err) {
      console.log(`API key not found`.red);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();
      console.log(`API key is deleted`.blue);
    } catch (err) {
      console.log(`Could not delete API key`.red);
    }
  },
};

module.exports = key;
