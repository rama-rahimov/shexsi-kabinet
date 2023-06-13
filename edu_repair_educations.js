const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Edu_repair_educations = sequelize.define('edu_repair_educations', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
    },
    edu_repair_apply_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
    },
    education_type:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false
    },
    abroad_education_type:{
        type: DataTypes.TINYINT(1)
    },
    enterprises:{
        type: DataTypes.STRING(250)
    },
    edu_name:{
        type: DataTypes.STRING(250)
    },
    doc_scan:{
        type: DataTypes.STRING(250)
    },
    country:{
        type: DataTypes.STRING(250)
    },
    specialty:{
        type: DataTypes.STRING(250)
    },
    teaching_language:{
        type: DataTypes.STRING(250)
    },
    material_base:{
        type: DataTypes.STRING(250)
    },
    doc_series_number:{
        type: DataTypes.STRING(250)
    },
    admission_date:{
        type: DataTypes.STRING(250)
    },
    graduate_date:{
        type: DataTypes.STRING(250)
    },
    education_level:{
        type: DataTypes.STRING(250)
    },
    diplom_series_number:{
        type: DataTypes.STRING(250)
    },
    education_duration:{
        type: DataTypes.STRING(250)
    },
    region:{
        type: DataTypes.STRING(250)
    },
    edu_base:{
        type: DataTypes.STRING(250)
    },
    given_date:{
        type: DataTypes.STRING(250)
    }
});

module.exports = Edu_repair_educations  ;