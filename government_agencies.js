const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const government_agencies = sequelize.define('government_agencies', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        allowNull: false ,
        primaryKey: true ,
        autoIncrement: true
    },
    organization_name:{
        type: DataTypes.STRING(100)
    },
    name:{
        type: DataTypes.STRING(100)
    },
    r_name:{
        type: DataTypes.STRING(100)
    }
});

module.exports =  government_agencies ;