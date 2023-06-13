const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_previous_info = sequelize.define('informal_edu_previous_info', {
    id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false ,
        primaryKey: true ,
        autoIncrement: true 
    },
    inf_education_apply_id:{
        type: DataTypes.BIGINT(20)
    },
    education_type:{
        type: DataTypes.INTEGER(11)
    },
    abroad_education_type:{
        type: DataTypes.INTEGER(11)
    },
    enterprises:{
        type: DataTypes.STRING(300) 
    },
    edu_name:{
        type: DataTypes.STRING(300) 
    },
    doc_scan:{
        type: DataTypes.STRING(300) 
    },
    country:{
        type: DataTypes.STRING(300) 
    },
    region:{
        type: DataTypes.STRING(300) 
    },
    teaching_language:{
        type: DataTypes.STRING(300) 
    },
    specialty:{
        type: DataTypes.STRING(300) 
    },
    edu_base:{
        type: DataTypes.STRING(300) 
    },
    education_level:{
        type: DataTypes.STRING(300) 
    },
    doc_series_number:{
        type: DataTypes.STRING(50) 
    },
    diplom_series_number:{
        type: DataTypes.STRING(50) 
    },
    material_base:{
        type: DataTypes.STRING(50) 
    },
    graduate_date:{
        type: DataTypes.STRING(50) 
    },
    given_date:{
        type: DataTypes.STRING(50) 
    },
    admission_date:{
        type: DataTypes.STRING(50) 
    },
    education_duration:{
        type: DataTypes.STRING(50) 
    }
});

module.exports =  informal_edu_previous_info  ;