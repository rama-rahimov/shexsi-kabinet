const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const table_name2 = sequelize.define('table_name2', {
    iso:{
        type: DataTypes.STRING(100)    
    },
    en_name:{
        type: DataTypes.STRING(100)
    },
    az_name:{
        type: DataTypes.STRING(100)
    },
    iso3:{
        type: DataTypes.STRING(100)
    }
});

table_name2.removeAttribute('id');

module.exports =  table_name2  ;