const cw = require("crypto-wallets");
const cryptoWallets = cw.CryptoWallets;

const wallet = cw.generateWallet("BTC");
console.log(wallet);

const fromAddress = wallet.address;
const toAddress = 'receiver_public_key';
const amount = 0.01; // 0.01 BTC
const privateKey = wallet.privateKey;
const fee = 0.0001; // 0.0001 BTC


cryptoWallets.sendTransaction('BTC', '18WWQ1bVsezQqFXNK7euRC2xVMv1m237oJ', '1FAbHNkNt2BoKEuaCAzXeHebLYxtG3MX26', amount, privateKey, fee)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
