const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_tasks = sequelize.define('informal_edu_tasks', {
    id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false ,
        primaryKey: true ,
        autoIncrement: true
    },
    session_id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false
    },
    expert_id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false
    },
    module_id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false
    },
    task_name:{
        type: DataTypes.STRING(300)
    },
    status:{
        type: DataTypes.INTEGER(11)
    },
    approval_date:{
        type: DataTypes.DATE ,
        defaultValue: DataTypes.NOW
    }
});

module.exports =  informal_edu_tasks  ;