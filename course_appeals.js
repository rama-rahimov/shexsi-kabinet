const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Course_appeals = sequelize.define('course_appeals',{
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    country:{
        type: DataTypes.STRING(250)
    },
    fin:{
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
    actual_address:{
        type: DataTypes.STRING(250)
    },
    is_address_current:{
        type: DataTypes.STRING(250)
    },
    genderId:{
        type: DataTypes.STRING(250)
    },
    position_type:{
        type: DataTypes.STRING(250)
    },
    dq_point:{
        type: DataTypes.STRING(250)
    },
    miq_point:{
        type: DataTypes.STRING(250)
    },
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    status:{
        type: DataTypes.INTEGER(11)
    },
    step:{
        type: DataTypes.INTEGER(11)
    },
    country_code:{
        type: DataTypes.STRING(250)
    },
    militaryService:{
        type: DataTypes.STRING(250)
    },
    social_status:{
        type: DataTypes.STRING(250)
    },
    social_scan:{
        type: DataTypes.STRING(250)
    },
    actual_region:{
        type: DataTypes.STRING(250)
    },
    lang:{
        type: DataTypes.STRING(250)
    },
    training_date:{
        type: DataTypes.STRING(250)
    },
    training_about:{
        type: DataTypes.STRING(250)
    },
    training_about_text:{
        type: DataTypes.STRING(250)
    },
    training_motivation:{
        type: DataTypes.STRING(250)
    }
},{
    collate: 'utf8_unicode_ci'
});

module.exports =  Course_appeals  ;