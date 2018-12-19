const myGitCommitCreate = require('../modules/db/scripts/my-git-commit');

exports.up = (knex, Promise) =>
  Promise.all([knex.schema.raw(myGitCommitCreate)]);

exports.down = (knex, Promise) =>
  Promise.all([knex.schema.dropTable('my-git-commit')]);
