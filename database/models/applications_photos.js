'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationsPhotos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ApplicationsPhotos.init({
   
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
    modelName: 'ApplicationsPhotos',
    tableName: "applications_photos",
    timestamps: true
    
  });
  return ApplicationsPhotos;
};