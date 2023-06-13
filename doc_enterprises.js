const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Doc_enterprises = sequelize.define('doc_enterprises', {
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
    },
    ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    is_doc:{
        type: DataTypes.TINYINT(1),
        allowNull: false ,
        defaultValue: 0
    },
    is_new_payment:{
        type: DataTypes.TINYINT(1),
        allowNull: false ,
        defaultValue: 1
    },
    only_paid:{
        type: DataTypes.TINYINT(1),
        allowNull: false ,
        defaultValue: 0
    }
});

module.exports =  Doc_enterprises  ;