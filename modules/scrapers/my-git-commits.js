const puppeteer = require('puppeteer');

const config = require('../../config');
const logger = require('../../helpers/logger').getLogger();

const getMyGitCommits = async () => {
  logger.info('my-git-commit - getMyGitCommits() - Start...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'
  );

  await page.goto('https://github.com/login');

  await page.evaluate((conf) => {
    // eslint-disable-next-line no-undef
    document.getElementById('login_field').value = conf.gitUser;
    // eslint-disable-next-line no-undef
    document.getElementById('password').value = conf.gitPass;
    return '';
  }, config);

  const loginBtn = await page.$('input[type=submit]');
  await loginBtn.click();

  await page.waitForNavigation();

  await page.goto('https://github.com/orennitzan/Joehan');

  const selector =
    '#js-repo-pjax-container > div.container.new-discussion-timeline.experiment-repo-nav > div.repository-content > div.overall-summary.overall-summary-bottomless > div > div > ul > li.commits > a > span';
  const resElm = await page.$(selector);
  const commits = await (await resElm.getProperty('textContent')).jsonValue();
  return commits;
};

module.exports = {
  getMyGitCommits
};
