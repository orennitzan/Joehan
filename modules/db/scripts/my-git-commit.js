module.exports = `SET client_min_messages TO WARNING;

DROP TABLE IF EXISTS my_git_commit CASCADE;
CREATE TABLE my_git_commit (
  id serial,
  commits int,
  create_date timestamp DEFAULT now(),
  PRIMARY KEY (id)
);`;
