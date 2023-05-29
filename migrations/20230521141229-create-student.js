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
      nationality: {
        type: Sequelize.STRING,
      },
      community: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.STRING,
      },
      admission: {
        type: Sequelize.DATE,
      },
      class: {
        type: Sequelize.STRING,
      },
      qualified: {
        type: Sequelize.STRING,
      },
      majorSubject: {
        type: Sequelize.STRING,
      },
      firstLanguage: {
        type: Sequelize.STRING,
      },
      instructionMedium: {
        type: Sequelize.STRING,
      },
      dateLeft: {
        type: Sequelize.DATE,
      },
      reason: {
        type: Sequelize.STRING,
      },
      conductCharacter: {
        type: Sequelize.STRING,
      },
      profilePic: {
        type: Sequelize.BLOB("tiny"),
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
