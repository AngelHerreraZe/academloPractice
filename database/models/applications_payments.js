'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class applications_payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  applications_payments.init({
    
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    application_id: {
      allowNull: false,
      primaryKey: true,
     type: DataTypes.UUID,
    },

    payment_intent: {
       type: DataTypes.STRING,
       allowNull: false
    },


  }, {
    sequelize,
    modelName: 'applications_payments',
    tableName: "applications_payments",
    timestamps: true
  });
  return applications_payments;
};