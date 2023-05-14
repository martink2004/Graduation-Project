const request = require('request');

// const address = '18WWQ1bVsezQqFXNK7euRC2xVMv1m237oJ';
const address = document.getElementById('adress').value();


request.get(`https://blockchain.info/ticker`, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    const rate = data.USD.last; // Get the BTC to USD exchange rate
    request.get(`https://blockchain.info/rawaddr/${address}`, (error, response, body) => {
      if (error) {
        console.error(error);
      } else {
        const data = JSON.parse(body);
        const balance = data.final_balance / 100000000; // Convert satoshis to BTC
        const balance_usd = balance * rate; // Convert BTC to USD
        console.log(`Balance: ${balance} BTC`);
        console.log(`Balance in USD: ${balance_usd.toFixed(2)}`);
      }
    });
  }
});


// const axios = require('axios');

// axios.get('Wallet\\wallet.html').then(response => {
//   const html = response.data;
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, 'text/html');
//   const address = doc.getElementById('address').value;

//   axios.get('https://blockchain.info/ticker').then(response => {
//     const rate = response.data.USD.last;
//     axios.get(`https://blockchain.info/rawaddr/${address}`).then(response => {
//       const balance = response.data.final_balance / 100000000;
//       const balance_usd = balance * rate;
//       console.log(`Balance: ${balance} BTC`);
//       console.log(`Balance in USD: ${balance_usd.toFixed(2)}`);
//     }).catch(error => {
//       console.error(error);
//     });
//   }).catch(error => {
//     console.error(error);
//   });
// }).catch(error => {
//   console.error(error);
// });
