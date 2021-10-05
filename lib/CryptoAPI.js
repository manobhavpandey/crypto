const axios = require("axios");
const colors = require("colors");
const KeyManager = require("./KeyManager");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = `https://api.nomics.com/v1/currencies/ticker?`;
  }

  async getDataFromAPI(coinOptions, currencyOption) {
    try {
      const url =
        this.baseUrl +
        `key=${this.apiKey}&ids=${coinOptions}&convert=${currencyOption}&per-page=100&page=1`;
      console.log("URL: ", url);
      const response = await axios.get(url);
      return response;
    } catch (err) {
      this.handleError(err);
    }
  }

  async getPriceData(coinOptions, currencyOption) {
    const response = await this.getDataFromAPI(coinOptions, currencyOption);
    let output = "";

    response.data.forEach((coin) => {
      output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${coin.price.green} | Rank: ${coin.rank.blue}\n`;
    });

    return output;
  }

  async getMarketCapData(coinOptions, currencyOption) {
    const response = await this.getDataFromAPI(coinOptions, currencyOption);

    let output = "";

    response.data.forEach((coin) => {
      output += `Coin: ${coin.symbol.yellow} (${coin.name}) | MarketCap: ${coin.market_cap.blue}\n`;
    });
    return output;
  }

  handleError(error) {
    if (error.response.status === 401) {
      console.log(`Your API key is invalid.`.red);
      console.log(`Head over to https://nomics.com to get an API key`.yellow);
    } else {
      console.log(`Something went wrong. Hang tight!`.yellow);
    }
  }
}

module.exports = CryptoAPI;
