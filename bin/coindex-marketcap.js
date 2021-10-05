const program = require("commander");
const marketcap = require("../commands/marketcap");
program
  .option("--coin <type>", "Coin to get marketcap of. Default is BTN", "BTC")
  .option("--cur <currency>", "Currency of marketcap. Default is USD", "USD")
  .action((cmd) => marketcap.getMarketCap(cmd.coin, cmd.cur));

program.parse(process.argv);
