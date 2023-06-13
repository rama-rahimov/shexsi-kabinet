const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Doc_enterprises_foreigner = sequelize.define('doc_enterprises_foreigner', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false                                                                                                                                                                 
    },
    name:{
        type: DataTypes.STRING(200)
    },
    ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    stage:{
        type: DataTypes.INTEGER(1) ,
        allowNull: false
    },
    step:{
        type: DataTypes.INTEGER(1),
        allowNull: false
    }
});

module.exports =  Doc_enterprises_foreigner  ;