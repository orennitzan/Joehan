module.exports = {
  schedulers: [
    { task_name: 'dollarRateTask', corn_config: '* * * * *' },
    { task_name: 'myGitCommitsTask', corn_config: '* * * * *' }
  ]
};
