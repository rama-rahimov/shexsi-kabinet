const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const sub_specialities = sequelize.define('sub_specialities', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(100)
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
    },
    basicEducation:{
        type: DataTypes.DOUBLE
    }
});

module.exports =  sub_specialities  ;