const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const olympiad_certificates = sequelize.define('olympiad_certificates', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    olympiad_apply_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
    },
    doc_scan:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    }
});

module.exports =  olympiad_certificates  ;