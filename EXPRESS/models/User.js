const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING(20),
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  created_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  changed_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'user',
  timestamps: false,
});

module.exports = User;
