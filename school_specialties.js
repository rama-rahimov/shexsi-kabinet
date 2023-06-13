const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const school_specialties = sequelize.define('school_specialties', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    specialty_name:{
        type: DataTypes.STRING
    },
    kod:{
        type: DataTypes.STRING(100)
    },
    kod2:{
        type: DataTypes.STRING(100)
    },
    name:{
        type: DataTypes.STRING
    }
});

module.exports =  school_specialties  ;