const logger = require('./helpers/logger.js').getLogger();

logger.info('index.js - Starting...');

// Initiation
require('./helpers/init');

// validate configs (using joi)
require('./config');

logger.info(
  'index.js - Validation of configurations and env variables succeeded.'
);

try {
  require('./modules/schedulers'); // eslint-disable-line global-require
} catch (ex) {
  logger.error('schedulers Error: ', ex);
}
