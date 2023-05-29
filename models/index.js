"use strict";
import Sequelize from "sequelize";
import process from "process";
import config from "../config/config.js";

const env = process.env.NODE_ENV || "development";

export const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(env, config);
} else {
  sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    config.development
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
