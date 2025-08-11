const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    name: DataTypes.STRING
  },
  { sequelize, modelName: 'category' }
);

module.exports = Category;
