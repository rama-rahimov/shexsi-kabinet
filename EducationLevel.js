const {sequelize} = require('../db');
const {DataTypes, DATE} = require('sequelize');

const EducationLevel = sequelize.define('EducationLevel', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(200)
    },
    nameEn:{
        type: DataTypes.STRING(200)
    }
});

module.exports =  EducationLevel  ;