const cron = require('node-cron')
const { schedulers } = require('./config')
const tasks = require('../Tasks')

schedulers.forEach((item) => {
    cron.schedule(item.corn_config, () => {
        tasks[item.task_name]();
    })
});

