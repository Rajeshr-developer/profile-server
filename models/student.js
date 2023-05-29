"use strict";

import { DataTypes, Model } from "sequelize";
import { db } from "./index.js";

const { sequelize } = db;
class Student extends Model {}
Student.init(
  {
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    parent: DataTypes.STRING,
    nationality: DataTypes.STRING,
    community: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.STRING,
    admission: DataTypes.DATE,
    class: DataTypes.STRING,
    qualified: DataTypes.STRING,
    majorSubject: DataTypes.STRING,
    firstLanguage: DataTypes.STRING,
    instructionMedium: DataTypes.STRING,
    dateLeft: DataTypes.DATE,
    reason: DataTypes.STRING,
    conductCharacter: DataTypes.STRING,
    profilePic: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Student",
  }
);
export default Student;
