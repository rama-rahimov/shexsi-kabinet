const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const student_appeals_private_data = sequelize.define('student_appeals_private_data', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    fin:{
        type: DataTypes.STRING(30) ,
        collate:'utf8mb3_general_ci'
    },
    student_appeal_id:{
        type: DataTypes.INTEGER(11)
    },
    user_id:{
        type: DataTypes.INTEGER(11)
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
    middle_name:{
        type: DataTypes.STRING(250)
    },
    birth_date:{
        type: DataTypes.STRING(250)
    },
    actual_region:{
        type: DataTypes.STRING(250)
    },
    is_address_current:{
        type: DataTypes.TINYINT(1)
    },
    actual_address:{
        type: DataTypes.STRING(250)
    },
    n_country:{
        type: DataTypes.STRING(250)
    },
    email:{
        type: DataTypes.STRING(250)
    },
    genderId:{
        type: DataTypes.STRING(250)
    },
    passport_series:{
        type: DataTypes.STRING(250)
    },
    passport_number:{
        type: DataTypes.STRING(250)
    },
    citizenship:{
        type: DataTypes.STRING(250)
    },
    maritalStatus:{
        type: DataTypes.TINYINT(1)
    },
    adress_in_foreign:{
        type: DataTypes.STRING(250)
    },
    last_live_country:{
        type: DataTypes.STRING(250)
    },
    phone:{
        type: DataTypes.STRING(250)
    },
    country_code:{
        type: DataTypes.STRING(250)
    },
    birth_certificate:{
        type: DataTypes.STRING(250)
    },
    have_residence_permit:{
        type: DataTypes.TINYINT(1)
    }
},{
    indexes:[{
        name: 'student_appeals_private_data_index',
        using: 'BTREE',
        fields: ['student_appeal_id']
    }],
    collate:'utf8_unicode_ci'
});

module.exports =  student_appeals_private_data  ;