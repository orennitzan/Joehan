const logger = require('./helpers/logger.js').getLogger();

logger.info('index.js - Starting...');

// Initiation
require('./helpers/init');

// validate configs (using joi)
require('./config');

logger.info(
    'index.js - Validation of configurations and env variables succeeded.'
);


// const dollarWorker = require('./modules/workers/dollar-rate-worker')

// dollarWorker.doWork();

const dollarRate = require('./modules/data-access/dollar-rate-access');

dollarRate.readByDates(['2018-12-10T17:02:25.669886Z', '2018-12-19T17:02:25.669886Z']).then((res) => console.log(res))

