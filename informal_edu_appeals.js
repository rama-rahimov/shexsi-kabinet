const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_appeals = sequelize.define('informal_edu_appeals', {
    id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false ,
        primaryKey: true ,
        autoIncrement: true
    },
    session_id:{
        type: DataTypes.BIGINT(20)
    },
    user_id:{
        type: DataTypes.BIGINT(20)
    },
    citizenship:{
        type: DataTypes.STRING(50)
    },
    fin:{
        type: DataTypes.STRING(50)
    },
    first_name:{
        type: DataTypes.STRING(50)
    },
    last_name:{
        type: DataTypes.STRING(50)
    },
    father_name:{
        type: DataTypes.STRING(50)
    },
    birth_date:{
        type: DataTypes.STRING(50)
    },
    genderId:{
        type: DataTypes.INTEGER(11)
    },
    address:{
        type: DataTypes.STRING(300)
    },
    is_address_current:{
        type: DataTypes.INTEGER(11)
    },
    ATIS_ID:{
        type: DataTypes.STRING(50)
    },
    specialty_ATIS_ID:{
        type: DataTypes.STRING(50)
    },
    sn:{
        type: DataTypes.STRING(50)
    },
    social_status:{
        type: DataTypes.STRING(300)
    },
    actual_address:{
        type: DataTypes.STRING(300)
    },
    borncity:{
        type: DataTypes.STRING(50)
    },
    country:{
        type: DataTypes.STRING(50)
    },
    social_scan:{
        type: DataTypes.STRING(100)
    },
    phone:{
        type: DataTypes.STRING(17)
    },
    work_exp:{
        type: DataTypes.STRING(17)
    },
    social_card_number:{
        type: DataTypes.STRING(17)
    },
    id_copy:{
        type: DataTypes.STRING(100)
    },
    doc_scan2:{
        type: DataTypes.STRING(100)
    },
    theo_extract:{
        type: DataTypes.STRING(100)
    },
    prac_extract:{
        type: DataTypes.STRING(100)
    },
    email:{
        type: DataTypes.STRING(50)
    },
    confirm_email:{
        type: DataTypes.STRING(50)
    },
    assignment_status:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        defaultValue: 0
    },
    payment_status:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        defaultValue: 0
    },
    step:{
        type: DataTypes.INTEGER(11)
    },
    apply_date:{
        type: DataTypes.DATE
    },
    apply_status:{
        type: DataTypes.INTEGER(11)
    }
});

module.exports =  informal_edu_appeals  ;