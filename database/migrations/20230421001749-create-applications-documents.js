'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) =>  {
    const transaction = await queryInterface.sequelize.transaction()
    try {
    await queryInterface.createTable('applications_documents', {
      application_id: {
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      order: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true
         
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    } , {transaction});
    await transaction.commit();

  }catch(error){
    await transaction.rollback();
    throw error
  }
},
down: async (queryInterface, /*Sequelize*/) => {
  const transaction = await queryInterface.sequelize.transaction()
  try {
    await queryInterface.dropTable('applications_documents', { transaction })
    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}
};