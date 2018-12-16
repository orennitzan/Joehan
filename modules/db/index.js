const knex = require('knex');

const config = require('../../config').pg;

const db = knex(config);

module.exports = db;
