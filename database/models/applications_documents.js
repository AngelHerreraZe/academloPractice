'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AplicationDocuments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AplicationDocuments.belongsTo(models.Applications, { as: 'application', foreignKey: 'application_id' })
    }
  }
  AplicationDocuments.init({

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
    modelName: 'AplicationDocuments',
    tableName: "applications_documents",
    timestamps: true

  });
  return AplicationDocuments;
};