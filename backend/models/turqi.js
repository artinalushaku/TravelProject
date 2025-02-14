const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 

const TurqiPrices = sequelize.define('TurqiPrices', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  room_type: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  service: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  price_1: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  price_2: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
});

module.exports = TurqiPrices;
