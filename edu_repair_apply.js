const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Edu_repair_apply = sequelize.define('edu_repair_apply', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    status:{
        type: DataTypes.TINYINT(2).UNSIGNED ,
        allowNull: false
    },
    step:{
        type: DataTypes.TINYINT(1).UNSIGNED ,
        allowNull: false
    },
    country:{
        type: DataTypes.STRING(250)
    },
    phone:{
        type: DataTypes.STRING(250)
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
    address:{
        type: DataTypes.STRING(250)
    },
    actual_address:{
        type: DataTypes.STRING(250)
    },
    citizenship:{
        type: DataTypes.STRING(250)
    },
    email:{
        type: DataTypes.STRING(250)
    },
    is_address_current:{
        type: DataTypes.STRING(250)
    },
    fin:{
        type: DataTypes.STRING(250)
    },
    edu_institution:{
        type: DataTypes.STRING(250)
    },
    name_of_other_enterprise:{
        type: DataTypes.STRING(250)
    },
    apartment:{
        type: DataTypes.STRING(250)
    },
    specialty:{
        type: DataTypes.STRING(250)
    },
    name_of_other_specialty:{
        type: DataTypes.STRING(250)
    },
    year_of_admission:{
        type: DataTypes.STRING(250)
    },
    date_of_freezing_edu:{
        type: DataTypes.STRING(250)
    },
    teaching_group:{
        type: DataTypes.STRING(250)
    },
    reason_for_freezing_edu:{
        type: DataTypes.STRING(250)
    },
    number_of_order_freezing_edu:{
        type: DataTypes.STRING(250)
    },
    education_level:{
        type: DataTypes.STRING(250)
    },
    education_base:{
        type: DataTypes.STRING(250)
    },
    education_fees:{
        type: DataTypes.STRING(250)
    },
    education_duration:{
        type: DataTypes.STRING(250)
    },
    section:{
        type: DataTypes.INTEGER(11)
    },
    edu_direction:{
        type: DataTypes.STRING(250)
    },
    specialty_code:{
        type: DataTypes.STRING(250)
    },
    genderId:{
        type: DataTypes.TINYINT(1).UNSIGNED.ZEROFILL
    },
    course:{
        type: DataTypes.INTEGER(11)
    },
    borncity:{
        type: DataTypes.STRING(250) ,
        defaultValue: ''
    },
    name_of_other_apartment:{
        type: DataTypes.STRING(250)
    },
    edu_repair_number:{
        type: DataTypes.STRING(250)
    },
    edu_repair_date:{
        type: DataTypes.STRING(250)
    },
    edu_repair_file:{
        type: DataTypes.STRING(250)
    },
    reasonMessage:{
        type: DataTypes.STRING(250)
    },
    social_status:{
        type: DataTypes.TEXT
    },
    social_scan:{
        type: DataTypes.STRING(150)
    }
},{
    collate: 'utf8_unicode_ci'
});

module.exports =  Edu_repair_apply  ;