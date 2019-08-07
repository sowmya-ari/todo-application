'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const environment = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[environment];
const db = {};
const env = process.env;

const configuration = {
  username: env.POSTGRES_USERNAME || config.username,
  password: env.POSTGRES_PASSWORD || config.password,
  database: env.POSTGRES_DB || config.database,
  host: env.POSTGRES_HOSTNAME || config.host,
  port: env.POSTGRES_PORT  || config.port,
  dialect: 'postgres'
}
let sequelize = new Sequelize(configuration.database, configuration.username, configuration.password,configuration);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
