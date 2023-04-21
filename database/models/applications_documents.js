'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class applications_documents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  applications_documents.init({
   
    application_id: {
      allowNull: false,
      primaryKey: true,
     type: DataTypes.UUID,

    },

    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    order: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true
       
    },


  }, {
    sequelize,
    modelName: 'applications_documents',
    tableName: "applications_documents",
    timestamps: true

  });
  return applications_documents;
};