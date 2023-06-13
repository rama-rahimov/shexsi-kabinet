const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Ent_sp_join = sequelize.define('ent_sp_join', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    year:{
        type: DataTypes.STRING(250) ,
        allowNull: false ,
        defaultValue: '2020/2021'
    },
    enterprise_DIM_ID:{
        type: DataTypes.STRING(250) ,
    },
    enterprise:{
        type: DataTypes.STRING(250) ,
    },
    enterprise_ATIS_ID:{
        type: DataTypes.STRING(250) ,
    },
    specialty_code:{
        type: DataTypes.STRING(250) ,
    },
    specialty_DIM_ID:{
        type: DataTypes.STRING(250) ,
    },
    specialty:{
        type: DataTypes.STRING(250) ,
    },
    specialty_ATIS_ID:{
        type: DataTypes.STRING(250) ,
    },
    paymentTypeId:{
        type: DataTypes.STRING(250) ,
    },
    educationLanguageId:{
        type: DataTypes.STRING(250) ,
    },
    educationFormId:{
        type: DataTypes.STRING(250) ,
    },
    payment_amount:{
        type: DataTypes.STRING(250) ,
    },
    EducationStageId:{
        type: DataTypes.STRING(250) ,
    },
    educationLevelId:{
        type: DataTypes.STRING(250) ,
    }
},{
    collate: 'utf8_unicode_ci'
});

module.exports =  Ent_sp_join  ;