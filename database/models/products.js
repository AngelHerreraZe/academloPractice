'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    
        id:{
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },

        name: {
          type: DataTypes.STRING,
          allowNull: false
          
        },

        price_id: {
          type : DataTypes.STRING,
          allowNull: false,
        },

        description: {
          type: DataTypes.STRING,
          allowNull: false
        },
  }, {
    sequelize,
    modelName: 'Products',
    tableName: "products",
    timestamps: true
  });
  return Products;
};