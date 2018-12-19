const fp = require('lodash/fp');
const joi = require('joi');
const db = require('../../db');
const logger = require('../../../helpers/logger').getLogger();

const tableName = 'my_git_commit';

const insertSchema = joi
  .object({
    commits: joi.number().required()
  })
  .required();

// Expect: {rate: 3.7710}
async function insert(params) {
  logger.info(`Inserting into ${tableName}.`)

  const myCommits = joi.attempt(params, insertSchema);

  return db(tableName)
    .insert(myCommits)
    .returning('*')
    .then(fp.first);
}

const readSchema = joi
  .object({
    create_date: joi.array()
  })
  .required();

// Expects array (for ):['2018-12-10T17:02:25.669886Z', '2018-12-18T17:02:25.669886Z']
async function readByDates(params) {
  joi.attempt(params, readSchema);
  return db(tableName)
    .whereBetween('create_date', params)
    .select();
}

module.exports = {
  tableName,
  insert,
  readByDates
};
