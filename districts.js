const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Districts = sequelize.define('districts', {
    id:{
        type: DataTypes.INTEGER(11) ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    region:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: 0
    },
    name:{
        type: DataTypes.STRING(500),
        allowNull: false
    },
    status:{
        type: DataTypes.TINYINT(2) ,
        allowNull: true ,
        defaultValue: 1
    },
    deleted:{
        type: DataTypes.TINYINT(1) ,
        defaultValue: 0
    }
},{
    collate:'utf8_unicode_ci'
});

module.exports =  Districts  ;