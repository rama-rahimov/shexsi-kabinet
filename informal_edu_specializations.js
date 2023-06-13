const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_specializations = sequelize.define('informal_edu_specializations', {
    id:{
        type: DataTypes.BIGINT(20) ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    ATIS_ID:{
        type: DataTypes.STRING(50)
    },
    specialty_ATIS_ID:{
        type: DataTypes.STRING(50)
    },
    sn:{
        type: DataTypes.STRING(50)
    },
    specialty_group_name:{
        type: DataTypes.STRING(300)
    },
    specialty:{
        type: DataTypes.STRING(300)
    },
    module_name:{
        type: DataTypes.STRING(50)
    },
    teaching_period:{
        type: DataTypes.STRING(30)
    },
    education_level:{
        type: DataTypes.STRING(50)
    },
    section:{
        type: DataTypes.STRING(50)
    },
    specialty_status:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0
    },
    module_status:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0
    }
});

module.exports =  informal_edu_specializations  ;