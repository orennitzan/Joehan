const logger = require('./helpers/logger.js').getLogger();

logger.info('index.js - Starting...');

// Initiation
require('./helpers/init');

// validate configs (using joi)
require('./config');

logger.info(
    'index.js - Validation of configurations and env variables succeeded.'
);


require('./modules/schedulers')
