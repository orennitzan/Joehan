const puppeteer = require('puppeteer');
const logger = require('../../helpers/logger').getLogger();

const getDollarRate = async () => {
  logger.info('dollar-rate - getDollarRate() - Start...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  // In order to minimize target from detecting this as a robot. Find it by searching google for: `what's my user agent string`
  page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'
  );
  await page.goto(
    'http://www.bizportal.co.il/forex/quote/generalview/22212222'
  );

  const rate = await page.evaluate(() =>
    // eslint-disable-next-line no-undef
    $(
      'body > div.container.body-content > section > article.top-area > div.data-row > span:nth-child(1)'
    ).text()
  );

  await browser.close();

  return rate;
};

module.exports = {
  getDollarRate
};
