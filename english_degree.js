const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const English_degree = sequelize.define('english_degree', {
    id:{
        type: DataTypes.INTEGER(11) ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING
    }
});

module.exports =  English_degree  ;