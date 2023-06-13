const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const support_apply = sequelize.define('support_apply', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    status:{
        type: DataTypes.INTEGER(2) 
    },
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    fin:{
        type: DataTypes.STRING(250)
    },
    child_id:{
        type: DataTypes.INTEGER(11)
    },
    tms_id:{
        type: DataTypes.INTEGER(11)
    },
    dublicateId:{
        type: DataTypes.INTEGER(11)
    },
    step:{
        type: DataTypes.INTEGER(1)
    },
    theme:{
        type: DataTypes.STRING(250)
    },
    description_application:{
        type: DataTypes.TEXT
    },
    result:{
        type: DataTypes.TEXT
    },
    area_id:{
        type: DataTypes.INTEGER(11)
    },
    apply_type:{
        type: DataTypes.TINYINT(1)
    },
    education_type:{
        type: DataTypes.TINYINT(3)
    },
    contingent:{
        type: DataTypes.INTEGER(11)
    },
    child_citizenship:{
        type: DataTypes.STRING(250)
    },
    child_fin:{
        type: DataTypes.STRING(250)
    },
    child_utis_code:{
        type: DataTypes.INTEGER(11)
    },
    child_first_name:{
        type: DataTypes.STRING(250)
    },
    child_last_name:{
        type: DataTypes.STRING(250)
    },
    child_father_name:{
        type: DataTypes.STRING(250)
    },
    child_birth_date:{
        type: DataTypes.STRING(250)
    },
    child_address:{
        type: DataTypes.STRING(250)
    },
    child_is_address_current:{
        type: DataTypes.TINYINT(1)
    },
    child_actual_address:{
        type: DataTypes.STRING(250)
    },
    child_city:{
        type: DataTypes.STRING(250)
    },
    child_region:{
        type: DataTypes.STRING(250)
    },
    child_current_enterprise:{
        type: DataTypes.STRING(250)
    },
    child_teaching_language:{
        type: DataTypes.STRING(250)
    },
    child_grade:{
        type: DataTypes.STRING(250)
    },
    child_parent_type:{
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
    consent:{
        type: DataTypes.INTEGER(11)
    },
    general_information:{
        type: DataTypes.STRING(250)
    },
    citizenship:{
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
    phone:{
        type: DataTypes.STRING(250)
    },
    country_code:{
        type: DataTypes.STRING(10)
    },
    born_country:{
        type: DataTypes.STRING(250)
    },
    rate_value:{
        type: DataTypes.STRING(10)
    },
    edu_doc_id:{
        type: DataTypes.INTEGER(11)
    },
    rate_comment:{
        type: DataTypes.STRING(250)
    },
    createInCallCenter:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 0
    },
    create_date:{
        type: DataTypes.DATE ,
        defaultValue: DataTypes.NOW
    }
},{
    collate:'utf8_unicode_ci'
});

module.exports =  support_apply  ;