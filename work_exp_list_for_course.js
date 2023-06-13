const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const work_exp_list_for_course = sequelize.define('work_exp_list_for_course', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    course_appeals_id:{
        type: DataTypes.INTEGER(11)
    },
    company:{
        type: DataTypes.STRING(250)
    },
    employer:{
        type: DataTypes.STRING(250)
    },
    contract_type:{
        type: DataTypes.TINYINT(1)
    },
    position:{
        type: DataTypes.STRING(250)
    },
    work_type:{
        type: DataTypes.STRING(250)
    },
    description:{
        type: DataTypes.TEXT('medium')
    },
    start_date:{
        type: DataTypes.STRING(250)
    },
    end_date:{
        type: DataTypes.STRING(250)
    },
    salary:{
        type: DataTypes.STRING(250)
    },
    area_of_activity:{
        type: DataTypes.STRING(250)
    },
    isApi:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 0
    }
});

module.exports =  work_exp_list_for_course  ;