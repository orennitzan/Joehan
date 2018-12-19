
const dollarRateTask = () => {
    require('../workers/dollar-rate-worker').doWork(); // eslint-disable-line global-require
} 


module.exports = {
    dollarRateTask
}

