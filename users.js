const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const users = sequelize.define('users', {
    id:{
        type: DataTypes.INTEGER(11) ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(120),
        defaultValue: ''
    },
    password:{
        type: DataTypes.STRING(60),
        defaultValue: ''
    },
    role:{
        type: DataTypes.TINYINT(1),
        allowNull: false ,
        defaultValue: 1
    },
    phone:{
        type: DataTypes.STRING(20) ,
        defaultValue: ''
    },
    country_code:{
        type: DataTypes.STRING(11)
    },
    fin:{
        type: DataTypes.STRING(20),
        allowNull: false ,
        defaultValue: '' ,
        unique: true
    },
    citizenshipId:{
        type: DataTypes.TINYINT(1), 
        allowNull: false ,
        defaultValue: 1
    },
    asanLogin:{
        type: DataTypes.TINYINT(1), 
        allowNull: false ,
        defaultValue: 0
    },
    create_date:{
        type: DataTypes.DATE ,
        defaultValue: DataTypes.NOW
    }
});

module.exports =  users ;