const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const specialty_subjects = sequelize.define('specialty_subjects', {
    id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: true 
    },
    deleted:{
        type: DataTypes.TINYINT(1),
        allowNull: false ,
        defaultValue: 0
    },
    sinif:{
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    index:{
        type: DataTypes.INTEGER(2),
        allowNull: false
    }
},
{
    collate:'utf8_unicode_ci'
});

module.exports =  specialty_subjects  ;