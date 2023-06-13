const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const olympiad_apply = sequelize.define('olympiad_apply', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        allowNull: false ,
        primaryKey: true ,
        autoIncrement: true
    },
    step:{
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    status:{
        type: DataTypes.TINYINT(2),
        allowNull: false ,
        defaultValue: 0
    },
    user_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false 
    },
    child_id:{
        type: DataTypes.INTEGER(11) 
    },
    olympiad_process_id:{
        type: DataTypes.INTEGER(11).UNSIGNED 
    },
    olympiad_type:{
        type: DataTypes.TINYINT(3).UNSIGNED 
    },
    citizenship:{
        type: DataTypes.STRING(250)
    },
    fin:{
        type: DataTypes.STRING(250) ,
        collate:'utf8mb3_general_ci'
    },
    first_name:{
        type: DataTypes.STRING(250) ,
        collate:'utf8mb3_general_ci'
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
    address:{
        type: DataTypes.STRING(250)
    },
    is_address_current:{
        type: DataTypes.TINYINT(1)
    },
    actual_address:{
        type: DataTypes.STRING(250)
    },
    country:{
        type: DataTypes.STRING(250)
    },
    email:{
        type: DataTypes.STRING(250)
    },
    parent_type:{
        type: DataTypes.STRING(250)
    },
    utis_code:{
        type: DataTypes.STRING(250)
    },
    city:{
        type: DataTypes.STRING(250)
    },
    region:{
        type: DataTypes.STRING(250)
    },
    current_enterprise:{
        type: DataTypes.STRING(250)
    },
    teaching_language:{
        type: DataTypes.STRING(250)
    },
    grade:{
        type: DataTypes.STRING(2)
    },
    olympiad_module_id:{
        type: DataTypes.TINYINT(3).UNSIGNED
    },
    english_indicator:{
        type: DataTypes.TINYINT(3).UNSIGNED
    },
    exam_result:{
        type: DataTypes.STRING(250)
    },
    project_name:{
        type: DataTypes.STRING(250)
    },
    name_of_scientific_adviser:{
        type: DataTypes.STRING(250)
    },
    surname_of_scientific_adviser:{
        type: DataTypes.STRING(250)
    },
    phone_number_of_scientific_adviser:{
        type: DataTypes.STRING(250)
    },
    name_specialist_scientist:{
        type: DataTypes.STRING(250)
    },
    surname_specialist_scientist:{
        type: DataTypes.STRING(250)
    },
    phone_number_specialist_scientist:{
        type: DataTypes.STRING(250)
    },
    phone:{
        type: DataTypes.STRING(250) ,
        collate:'utf8mb3_general_ci'
    },
    videoUrl:{
        type: DataTypes.STRING(250)
    },
    docUrl:{
        type: DataTypes.STRING(250)
    },
    enterprise_name:{
        type: DataTypes.STRING(250)
    },
    room_no:{
        type: DataTypes.TINYINT(3).UNSIGNED
    },
    seat_no:{
        type: DataTypes.TINYINT(3).UNSIGNED
    }
},{
    collate:'utf8mb3_unicode_ci'
});

module.exports = olympiad_apply ;