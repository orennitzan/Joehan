module.exports = `SET client_min_messages TO WARNING;

DROP TABLE IF EXISTS dollar_daily_rate CASCADE;
CREATE TABLE dollar_daily_rate (
  id serial,
  rate decimal,
  create_date timestamp DEFAULT now(),
  PRIMARY KEY (id)
);`;
