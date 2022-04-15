const {sequelize, Sequelize} = require('../db.js');
const { DataTypes } = require('sequelize');

const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
});

Genre.sync()

module.exports = Genre