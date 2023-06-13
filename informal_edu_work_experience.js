const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_work_experience = sequelize.define('informal_edu_work_experience', {
    id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    inf_education_apply_id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false 
    },
    work_type:{
        type: DataTypes.STRING(100)
    },
    confrontation_type:{
        type: DataTypes.STRING(100)
    },
    employer:{
        type: DataTypes.STRING(100)
    },
    position:{
        type: DataTypes.STRING(100)
    },
    area_of_activity:{
        type: DataTypes.STRING(100)
    },
    description:{
        type: DataTypes.TEXT
    },
    start_date:{
        type: DataTypes.STRING(50)
    },
    end_date:{
        type: DataTypes.STRING(50)
    }
});

module.exports =  informal_edu_work_experience  ;