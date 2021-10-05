const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/CryptoAPI");
const marketcap = {
  async getMarketCap(coinType, curType) {
    try {
      const keyManager = new KeyManager();
      const cryptoAPI = new CryptoAPI(keyManager.getKey());
      console.log(coinType, curType);
      const output = await cryptoAPI.getMarketCapData(coinType, curType);
      console.log("OUTPUT: ", output);
      if (output) console.log(output);
    } catch (error) {
      console.log(error.message.red);
    }
  },
};

module.exports = marketcap;
