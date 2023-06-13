const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const EducationLanguage = sequelize.define('EducationLanguage', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(250) ,
        allowNull: false
    },
    nameEn:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    }
});

module.exports =   EducationLanguage  ;