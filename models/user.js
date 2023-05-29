"use strict";
import { DataTypes, Model } from "sequelize";
import { db } from "./index.js";

const { sequelize } = db;
class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "User",
    tableName: "User",
    freezeTableName: true,
  }
);
export default User;
