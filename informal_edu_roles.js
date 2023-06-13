const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_roles = sequelize.define('informal_edu_roles', {
    id:{
        type: DataTypes.INTEGER(11) ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(50) 
    },
    key:{
        type: DataTypes.STRING(50) 
    },
    status:{
        type: DataTypes.STRING(50)
    }
});

module.exports =  informal_edu_roles ;