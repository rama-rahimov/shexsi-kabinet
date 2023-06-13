const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Debt = sequelize.define('debt', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id:{
       type:DataTypes.INTEGER(11).UNSIGNED ,
       allowNull: false ,
    },
    status:{
        type:DataTypes.TINYINT(2).UNSIGNED ,
        allowNull: false 
    },
    step:{
        type:DataTypes.TINYINT(1) ,
        allowNull: false 
    },
    fin:{
        type:DataTypes.STRING(30),
        allowNull: false ,
        defaultValue: ''
    },
    citizenship:{
        type:DataTypes.STRING(5),
    },
    first_name:{
        type:DataTypes.STRING(250)
    },
    last_name:{
        type:DataTypes.STRING(250)
    },
    father_name:{
        type:DataTypes.STRING(250)
    },
    birth_date:{
        type:DataTypes.STRING(250)
    },
    address:{
        type:DataTypes.STRING(250)
    },
    is_address_current:{
        type:DataTypes.STRING(250)
    },
    actual_address:{
        type:DataTypes.STRING(250)
    },
    country:{
        type:DataTypes.STRING(250)
    },
    phone:{
        type:DataTypes.STRING(250)
    },
    email:{
        type:DataTypes.STRING(250)
    },
    confirm_email:{
        type:DataTypes.STRING(250)
    },
    level_of_education:{
        type:DataTypes.STRING(250)
    },
    education_level:{
        type:DataTypes.STRING(250)
    },
    education_institution:{
        type:DataTypes.STRING(250)
    },
    education_base:{
        type:DataTypes.STRING(250)
    },
    admission_year:{
        type:DataTypes.STRING(250)
    },
    specialty:{
        type:DataTypes.STRING(250)
    },
    specialty_password:{
        type:DataTypes.STRING(250)
    },
    sub_specialty:{
        type:DataTypes.STRING(250)
    },
    specialization:{
        type:DataTypes.STRING(250)
    },
    sub_specialization:{
        type:DataTypes.STRING(250)
    },
    education_type:{
        type:DataTypes.STRING(250)
    },
    education_language:{
        type:DataTypes.STRING(250)
    },
    invoice:{
        type:DataTypes.STRING(250)
    },
    subjectName:{
        type:DataTypes.STRING(250)
    },
    directed_enterprise:{
        type:DataTypes.STRING(250)
    },
    remainDebt:{
        type:DataTypes.STRING(250)
    },
    invoiceCreateDate:{
        type:DataTypes.STRING(250)
    },
    invoiceEndDate:{
        type:DataTypes.STRING(250)
    },
    RecoveryType:{
        type:DataTypes.STRING(250)
    },
    isSend:{
        type:DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 0
    },
    reject_description:{
        type:DataTypes.TEXT
    },
    reject_files:{
        type:DataTypes.TEXT
    }
},{
    collate:'utf8_unicode_ci'
});

module.exports = Debt  ;