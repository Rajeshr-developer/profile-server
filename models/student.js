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
    department: DataTypes.STRING,
    nationality: DataTypes.STRING,
    religion: DataTypes.STRING,
    community: DataTypes.STRING,
    dob: DataTypes.DATE,
    admission: DataTypes.STRING,
    dateofadmission: DataTypes.DATE,
    semester: DataTypes.STRING,
    qualified: DataTypes.STRING,
    feespaid: DataTypes.STRING,
    scholarship: DataTypes.STRING,
    dateLeft: DataTypes.DATE,
    dateOfTcApplied: DataTypes.DATE,
    extraCirricular: DataTypes.STRING,
    conductCharacter: DataTypes.STRING,
    profilePic: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Student",
  }
);
export default Student;
