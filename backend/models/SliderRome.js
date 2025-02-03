const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const RomeSlider = sequelize.define('RomeSlider', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageBase64: {
    type: DataTypes.TEXT('long'), 
    allowNull: false,
  },
});

module.exports = RomeSlider;
