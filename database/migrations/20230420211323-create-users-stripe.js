'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) =>  {
    const transaction = await queryInterface.sequelize.transaction()
    try {
    await queryInterface.createTable('users_stripes', {
      user_id: {
        allowNull: false,
        primaryKey: true,
        foreignKey:true,
        type: Sequelize.UUID,

        references: {
            model: "users",
            key: "id"
        },

        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
        
      },
      client_id : {
        allowNull :false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    } ,  { transaction })
    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    throw error
  }
  },
  down: async (queryInterface, /*Sequelize*/) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('users_stripes', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
};