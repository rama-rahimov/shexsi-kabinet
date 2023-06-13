const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_task_contents = sequelize.define('informal_edu_task_contents', {
    id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    task_id:{
        type: DataTypes.BIGINT(20) 
    },
    section:{
        type: DataTypes.STRING(50)
    },
    task_content:{
        type: DataTypes.TEXT
    },
    number:{
        type: DataTypes.INTEGER(11)
    },
    status:{
        type: DataTypes.INTEGER(11)
    },
    approval_date:{
        type: DataTypes.DATE ,
    }
});

module.exports =  informal_edu_task_contents  ;