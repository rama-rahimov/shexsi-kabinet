const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Currencies = sequelize.define('currencies', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Code:{
        type: DataTypes.STRING(10),
        defaultValue: ''
    },
    Nominal:{
        type: DataTypes.STRING(100)
    },
    Name:{
        type: DataTypes.STRING(100),
        defaultValue: ''
    },
    Value:{
        type: DataTypes.STRING(100)
    }
});

module.exports =  Currencies  ;