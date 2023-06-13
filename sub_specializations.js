const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const sub_specializations = sequelize.define('sub_specializations', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    name:{
        type: DataTypes.STRING
    },
    specialization_ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    enterprise_ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    specialty_ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    specialty_code:{
        type: DataTypes.DOUBLE
    },
    paymentTypeId:{
        type: DataTypes.DOUBLE
    },
    educationLanguageId:{
        type: DataTypes.DOUBLE
    },
    educationFormId:{
        type: DataTypes.DOUBLE
    },
    EducationStageId:{
        type: DataTypes.DOUBLE
    },
    educationLevelId:{
        type: DataTypes.DOUBLE
    },
    teachingYear:{
        type: DataTypes.DOUBLE
    },
    entranceSpecialtyPaymentAmount:{
        type: DataTypes.DOUBLE
    },
    preparation_amunt:{
        type: DataTypes.DOUBLE
    }
});

module.exports =  sub_specializations  ;