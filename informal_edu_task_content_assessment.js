const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_task_content_assessment = sequelize.define('informal_edu_task_content_assessment', {
    id:{
        type: DataTypes.BIGINT(20) ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    task_assessment_id:{
        type: DataTypes.BIGINT(20)
    },
    task_content_id:{
        type: DataTypes.BIGINT(20)
    },
    evaluate:{
        type: DataTypes.INTEGER(11)
    },
    evaluate_note:{
        type: DataTypes.TEXT
    }
});

module.exports =  informal_edu_task_content_assessment  ;