'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Business.init({
    name: { 
      type: DataTypes.STRING,
      unique: true
    },
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Business',
  });
  return Business;
};