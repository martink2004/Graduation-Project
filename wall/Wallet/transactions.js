const fromAddress = wallet.address;
const toAddress = 'receiver_public_key';
const amount = 0.01; // 0.01 BTC
const privateKey = wallet.privateKey;
const fee = 0.0001; // 0.0001 BTC

cryptoWallets.sendTransaction('BTC', fromAddress, toAddress, amount, privateKey, fee)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });