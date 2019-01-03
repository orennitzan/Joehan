const cron = require('node-cron');
const { schedulers } = require('./config');
const tasks = require('../Tasks');
const logger = require('../../helpers/logger').getLogger();

schedulers.forEach(item => {
  logger.info(`Initiating scheduler for task ${item.task_name}.`);
  cron.schedule(item.corn_config, () => {
    logger.info(`Task ${item.task_name} is initiating..`);
    tasks[item.task_name]();
  });
});
