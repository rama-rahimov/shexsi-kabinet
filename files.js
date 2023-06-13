const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Files = sequelize.define('files', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    token:{
        type: DataTypes.STRING(100) ,
        allowNull: false ,
        unique: true ,
        defaultValue: ''
    },
    name:{
        type: DataTypes.STRING(500)
    },
    path:{
        type: DataTypes.STRING(500) 
    },
    fin:{
        type: DataTypes.STRING(50) 
    }
});

module.exports =  Files ;