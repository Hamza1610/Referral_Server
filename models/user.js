const Sequelize = require('sequelize');

const db = new Sequelize('database_name', 'username', 'password', {
  dialect: 'mysql', //
});

const User = db.define('User', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  referredCode: {
    type: Sequelize.STRING,
  },
  referralCode: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: true,
});

module.exports = User;
