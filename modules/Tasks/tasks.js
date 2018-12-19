const dollarRateTask = () => {
  require('../workers/dollar-rate-worker').doWork(); // eslint-disable-line global-require
};

const myGitCommitsTask = () => {
  require('../workers/my-git-commits-worker').doWork(); // eslint-disable-line global-require
};

module.exports = {
  dollarRateTask,
  myGitCommitsTask
};
