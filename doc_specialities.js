const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Doc_specialities = sequelize.define('doc_specialities', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        primaryKey: true ,
        autoIncrement: true ,
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
    enterprise_name:{
        type: DataTypes.STRING(200)
    },
    enterprise_ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    specialty_code:{
        type: DataTypes.STRING(100)
    },
    educationForms:{
        type: DataTypes.STRING(100)
    }
});

module.exports =  Doc_specialities  ;