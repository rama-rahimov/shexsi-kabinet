const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_task_commission_assessment = sequelize.define('informal_edu_task_commission_assessment', {
    id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    session_id:{
        type: DataTypes.BIGINT(20)
    },
    commission_id:{
        type: DataTypes.BIGINT(20)
    },
    inf_education_apply_id:{
        type: DataTypes.BIGINT(20)
    },
    module_id:{
        type: DataTypes.BIGINT(20)
    },
    assessment_status:{
        type: DataTypes.STRING(50)
    },
    note:{
        type: DataTypes.TEXT
    }
});

module.exports =  informal_edu_task_commission_assessment  ;