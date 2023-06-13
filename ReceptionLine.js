const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const ReceptionLine = sequelize.define('ReceptionLine', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    group:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    },
    name:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: ''
    },
    nameEn:{
        type: DataTypes.STRING(250) ,
        defaultValue: ''
    },
    ATIS_ID:{
        type: DataTypes.INTEGER(11) 
    },
    is_delete:{
        type: DataTypes.TINYINT(1).UNSIGNED ,
        allowNull: false ,
        defaultValue: 0
    }
});

module.exports =  ReceptionLine  ;