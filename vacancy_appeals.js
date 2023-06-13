const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const vacancy_appeals = sequelize.define('vacancy_appeals', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    user_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
    },
    status:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 1
    },
    step:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false 
    },
    first_name:{
        type: DataTypes.STRING(250)
    },
    last_name:{
        type: DataTypes.STRING(250)
    },
    father_name:{
        type: DataTypes.STRING(250)
    },
    birth_date:{
        type: DataTypes.STRING(250)
    },
    borncity:{
        type: DataTypes.STRING(250)
    },
    address:{
        type: DataTypes.STRING(250)
    },
    phone:{
        type: DataTypes.STRING(250)
    },
    email:{
        type: DataTypes.STRING(250)
    },
    social_status:{
        type: DataTypes.STRING(250)
    },
    actual_address:{
        type: DataTypes.STRING(250)
    },
    is_address_current:{
        type: DataTypes.TINYINT(1)
    },
    genderId:{
        type: DataTypes.TINYINT(1)
    },
    position_type:{
        type: DataTypes.TINYINT(1)
    },
    choose_position:{
        type: DataTypes.STRING(50)
    },
    dq_point:{
        type: DataTypes.STRING(250)
    },
    miq_point:{
        type: DataTypes.STRING(250)
    },
    has_rewards:{
        type: DataTypes.TINYINT(1)
    },
    has_academic_degree:{
        type: DataTypes.TINYINT(1)
    },
    work_exp:{
        type: DataTypes.STRING(250)
    },
    pedagogical_exp:{
        type: DataTypes.STRING(250)
    },
    emp_history_scan:{
        type: DataTypes.STRING(250)
    },
    has_current_work:{
        type: DataTypes.TINYINT(1)
    },
    has_teaching_aids:{
        type: DataTypes.TINYINT(1)
    },
    social_scan:{
        type: DataTypes.STRING(250)
    },
    dq_subject:{
        type: DataTypes.STRING(250) 
    },
    miq_subject:{
        type: DataTypes.STRING(250)
    },
    is_director:{
        type: DataTypes.TINYINT(1),
        allowNull: false ,
        defaultValue: 0
    },
    general_value:{
        type: DataTypes.STRING(250)
    },
    error_value:{
        type: DataTypes.STRING(250)
    },
    unanswered_value:{
        type: DataTypes.STRING(250)
    },
    year:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false ,
        defaultValue: '2021'
    }
});

module.exports = vacancy_appeals  ;