const fp = require('lodash/fp');
const joi = require('joi');
const db = require('../../db');

const tableName = 'dollar-daily-rate';

const insertSchema = joi
  .object({
    rate: joi.number().required()
  })
  .required();

// Expect: {rate: 3.7710}
async function insert(params) {
  const dRate = joi.attempt(params, insertSchema);

  return db(tableName)
    .insert(dRate)
    .returning('*')
    .then(fp.first);
}

const readSchema = joi
  .object({
    startDate: joi.date(),
    endDate: joi.date()
  })
  .and('startDate', 'startDate')
  .required();

async function readByDates(params) {
  const selection = joi.attempt(params, readSchema);

  return db(tableName)
    .whereBetween('create_date', selection)
    .select();
}

module.exports = {
  tableName,
  insert,
  readByDates
};
