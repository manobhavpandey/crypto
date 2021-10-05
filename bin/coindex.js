#!/usr/bin/env node
const pkg = require("../package.json");
const program = require("commander");

program
  .version(pkg.version)
  .command("key", "Manage API Key -- https://nomics.com")
  .command("check", "Check Coin Price Info")
  .command("marketcap", "Check marketcap of coins")
  .parse(process.argv);
