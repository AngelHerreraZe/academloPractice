'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) =>  {
    const transaction = await queryInterface.sequelize.transaction()
    try {  
    await queryInterface.createTable('applications', {
      user_id: {
        allowNull: false,
        foreignKey: true,
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "id"
        },

        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
       },

       legal_first_names: {
        type: Sequelize.STRING,
        allowNull: false
      },

      legal_last_names: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      nationality: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      phone: {
          type: Sequelize.STRING,
          allowNull: false,
      },

      date_of_birth:{
        type: Sequelize.DATE,
        allowNull: false,
       },

       gender:{
        type: Sequelize.STRING,
        allowNull: false
       },

       passport_number:{
        type: Sequelize.STRING,
        allowNull: false
       },

       passport_expiration_date: {
         type: Sequelize.DATE,
         allowNull: false
       },

       residence: {
          type: Sequelize.STRING,
          allowNull: false
       },

       residence_address:{
         type: Sequelize.STRING,
         allowNull: false
       },

       job: {
          type: Sequelize.STRING,
          allowNull: false
       },

       comments: {
        type: Sequelize.TEXT,
        allowNull: false
       },

       status: {
         type: Sequelize.STRING,
         allowNull: false,
         validate: {
          isIn:["draft" , "confirmed"]
         }
       },

       createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }


    } ,{transaction} );
    await transaction.commit();

  } catch (error){
    await transaction.rollback();
    throw error
  }
},
down: async (queryInterface, /*Sequelize*/) => {
  const transaction = await queryInterface.sequelize.transaction()
  try {
    await queryInterface.dropTable('applications', { transaction })
    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}
};