// const dollarScraper = require('./modules/scrapers/dollar-rate');

const dollarWorker = require('./modules/workers/dollar-rate-worker')

dollarWorker.doWork();


// (async () => {
//     // const dRate = await dollarScraper.getDollarRate();
//     // console.log(`Current dollar rate is: ${dRate}`);


// })();
