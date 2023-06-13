const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const subjects = sequelize.define('subjects', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(41) ,
        allowNull: false ,
        defaultValue: ''
    }
});

module.exports =  subjects  ;