const dollarRateCreate = require('../modules/db/scripts/dollar-daily-rate');

exports.up = (knex, Promise) =>
  Promise.all([knex.schema.raw(dollarRateCreate)]);

exports.down = (knex, Promise) =>
  Promise.all([knex.schema.dropTable('dollar_daily_rate')]);
