const CryptoAPI = require("../lib/CryptoAPI");
const KeyManager = require("../lib/KeyManager");
const colors = require("colors");
const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const cryptoAPI = new CryptoAPI(keyManager.getKey());
      const output = await cryptoAPI.getPriceData(cmd.coin, cmd.cur);

      if (output) console.log(output);
    } catch (error) {
      console.log(error.message.red);
    }
  },
};

module.exports = check;
