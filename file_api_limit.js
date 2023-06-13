const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const File_api_limit = sequelize.define('file_api_limit', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    api:{
        type: DataTypes.STRING(250)
    },
    ip:{
        type: DataTypes.STRING(250)
    }
});

module.exports =  File_api_limit  ;