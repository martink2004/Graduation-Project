const cw = require("crypto-wallets");

const wallet = cw.generateWallet("BTC");
console.log(wallet);