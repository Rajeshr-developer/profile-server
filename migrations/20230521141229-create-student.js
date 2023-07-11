"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      parent: {
        type: Sequelize.STRING,
      },
      department: {
        type: Sequelize.STRING,
      },
      nationality: {
        type: Sequelize.STRING,
      },
      religion: {
        type: Sequelize.STRING,
      },
      community: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
      admission: {
        type: Sequelize.STRING,
      },
      dateofadmission: {
        type: Sequelize.DATE,
      },
      semester: {
        type: Sequelize.STRING,
      },
      qualified: {
        type: Sequelize.STRING,
      },
      feespaid: {
        type: Sequelize.STRING,
      },
      scholarship: {
        type: Sequelize.STRING,
      },
      dateLeft: {
        type: Sequelize.DATE,
      },
      dateOfTcApplied: {
        type: Sequelize.DATE,
      },
      extraCirricular: {
        type: Sequelize.STRING,
      },
      conductCharacter: {
        type: Sequelize.STRING,
      },
      profilePic: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Students");
  },
};
