const puppeteer = require('puppeteer');

const getDollarRate = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    'https://www.boi.org.il/he/Markets/ExchangeRates/Pages/Default.aspx'
  );

  // eslint-disable-next-line no-undef
  const rate = await page.evaluate(() => $(
      '#BoiCurrencyExchangeRatesTab > table.BoiExchangeRateSearchTable.ng-table.responsive > tbody > tr:nth-child(2) > td.small-padding.tdno3 > div.tableTRText'
    ).text());
  // console.log(rate);
  await browser.close();

  return rate;
};

module.exports = {
  getDollarRate
};
