const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const olympiad_modules = sequelize.define('olympiad_modules', {
    id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
    olympiad_type:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 4
    },
    deleted:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 0
    }
});

module.exports =  olympiad_modules  ;