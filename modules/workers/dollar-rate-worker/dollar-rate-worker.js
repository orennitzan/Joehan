const scraper = require('../../scrapers/dollar-rate')

const dollarRate = require('../../data-access/dollar-rate-access');

const doWork = async () => {
    const currentRate = await scraper.getDollarRate();
    const res = await dollarRate.insert({ rate: currentRate });
    console.log(res);
};

module.exports = {
    doWork
}