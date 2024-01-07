// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // integer data type
      allowNull: false, // doesn't allow null values
      primaryKey: true, // set as primary key
      autoIncrement: true // uses auto increment
    },
    product_name: {
      type: DataTypes.STRING, // string data type
      allowNull: false // doesn't allow null values
    },
    price: {
      type: DataTypes.DECIMAL, // decimal data type
      allowNull: false, // doesn't allow null values
      validate: {
        isDecimal: true // checks for decimal
      }
    },
    stock: {
      type: DataTypes.INTEGER, // integer data type
      defaultValue: 10, // set a default value of 10
      validate: {
        isNumeric: true // checks for numeric values
      }
    },
    category_id: {
      type: DataTypes.INTEGER, // integer data type
      references: {
        model: 'category', // references the category model
        key: 'id' // references the id column in the category model
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
