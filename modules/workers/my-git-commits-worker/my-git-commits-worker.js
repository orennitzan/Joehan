const scraper = require('../../scrapers/my-git-commits');
const logger = require('../../../helpers/logger').getLogger();
const myCommitsAccess = require('../../data-access/my-git-commit-access');

const doWork = async () => {
  logger.info('mu-git-commit-worker - doWork() - Start...');
  const myCommits = await scraper.getMyGitCommits();
  const res = await myCommitsAccess.insert({ commits: myCommits });
  return res;
};

module.exports = {
  doWork
};
