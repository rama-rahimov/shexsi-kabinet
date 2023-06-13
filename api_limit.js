const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Api_limit = sequelize.define('api_limit', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    } ,
    api:{
        type: DataTypes.STRING(250)
    },
    ip:{
        type: DataTypes.STRING(250)
    }
});

module.exports = Api_limit ;
