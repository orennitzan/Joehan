const scraper = require('../../scrapers/dollar-rate');
const logger = require('../../../helpers/logger').getLogger();
const dollarRate = require('../../data-access/dollar-rate-access');

const doWork = async () => {
  logger.info('dollar-rate-worker - doWork() - Start...');
  const currentRate = await scraper.getDollarRate();
  const res = await dollarRate.insert({ rate: currentRate });
  return res;
};

module.exports = {
  doWork
};
