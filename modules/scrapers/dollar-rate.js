const puppeteer = require('puppeteer');

const getDollarRate = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    'http://www.bizportal.co.il/forex/quote/generalview/22212222'
  );

  // eslint-disable-next-line no-undef
  const rate = await page.evaluate(() =>
    $('body > div.container.body-content > section > article.top-area > div.data-row > span:nth-child(1)').text()
  );
  // console.log(rate);
  await browser.close();

  return rate;
};

module.exports = {
  getDollarRate
};
