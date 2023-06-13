const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const specializations = sequelize.define('specializations', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(200)
    },
    ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    enterprise_ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    specialty_ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    teachingYear:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false 
    },
    specialty_code:{
        type: DataTypes.STRING(100)
    },
    EducationStageId:{
        type: DataTypes.INTEGER(2) ,
        allowNull: false 
    },
    educationLevelId:{
        type: DataTypes.INTEGER(2) 
    },
    basicEducation:{
        type: DataTypes.INTEGER(2) 
    },
    educationLanguageId:{
        type: DataTypes.INTEGER(2) ,
        allowNull: false 
    },
    educationFormId:{
        type: DataTypes.INTEGER(2) ,
        allowNull: false 
    },
    paymentTypeId:{
        type: DataTypes.INTEGER(2) ,
        allowNull: false 
    },
    entranceSpecialtyPaymentAmount:{
        type: DataTypes.STRING(250) ,
        defaultValue: ''
    },
    preparation_amunt:{
        type: DataTypes.STRING(250) ,
        defaultValue: ''
    }
});

module.exports =  specializations  ;