const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const student_appeals_parent_data = sequelize.define('student_appeals_parent_data', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    fin:{
        type: DataTypes.STRING(30)
    },
    student_appeal_id:{
        type: DataTypes.INTEGER(11)
    },
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    parent_first_name:{
        type: DataTypes.STRING(250)
    },
    parent_last_name:{
        type: DataTypes.STRING(250)
    },
    parent_father_name:{
        type: DataTypes.STRING(250)
    },
    parent_birth_date:{
        type: DataTypes.STRING(250)
    },
    parent_actual_region:{
        type: DataTypes.STRING(250)
    },
    parent_is_address_current:{
        type: DataTypes.TINYINT(1)
    },
    parent_citizenshipId:{
        type: DataTypes.INTEGER(11)
    },
    parent_fin:{
        type: DataTypes.STRING(250)
    },
    parent_series:{
        type: DataTypes.STRING(250)
    },
    parent_number:{
        type: DataTypes.STRING(250)
    },
    parent_type:{
        type: DataTypes.INTEGER(11)
    },
    parent_genderId:{
        type: DataTypes.INTEGER(11)
    },
    parent_actual_address:{
        type: DataTypes.STRING(250)
    },
    parent_n_country:{
        type: DataTypes.STRING(250)
    },
    parent_phone:{
        type: DataTypes.STRING(250)
    },
    parent_citizenship:{
        type: DataTypes.STRING(5)
    },
    parent_docType:{
        type: DataTypes.STRING(5)
    },
    parent_s_docType:{
        type: DataTypes.STRING(5)
    },
    parent_s_citizenshipId:{
        type: DataTypes.STRING(5)
    },
    parent_s_fin:{
        type: DataTypes.STRING(12)   
    },
    parent_s_type:{
        type: DataTypes.STRING(12) 
    },
    parent_country_code:{
        type: DataTypes.STRING(12) 
    },
    parent_address:{
        type: DataTypes.STRING(250)
    },
    parent_s_first_name:{
        type: DataTypes.STRING(250)
    },
    parent_s_last_name:{
        type: DataTypes.STRING(250)
    },
    parent_s_father_name:{
        type: DataTypes.STRING(250)
    },
    parent_s_birth_date:{
        type: DataTypes.STRING(250)
    },
    parent_s_actual_region:{
        type: DataTypes.STRING(250)
    },
    parent_s_citizenship:{
        type: DataTypes.STRING(250)
    },
    parent_s_series:{
        type: DataTypes.STRING(250)
    },
    parent_s_number:{
        type: DataTypes.STRING(250)
    },
    parent_s_genderId:{
        type: DataTypes.STRING(250)
    },
    parent_s_actual_address:{
        type: DataTypes.STRING(250)
    },
    parent_s_address:{
        type: DataTypes.STRING(250)
    },
    parent_s_phone:{
        type: DataTypes.STRING(250)
    },
    parent_s_country_code:{
        type: DataTypes.STRING(250)
    },
    parent_s_absence_reason:{
        type: DataTypes.STRING(250)
    },
    parent_absence_reason:{ 
        type: DataTypes.STRING(250)
    },
    parent_s_n_country:{
        type: DataTypes.STRING(5)
    },
    parent_confirming_document:{
        type: DataTypes.STRING(250)
    },
    parent_s_confirming_document:{
        type: DataTypes.STRING(250)
    },
    parent_s_is_address_current:{
        type: DataTypes.STRING(2)
    }
},{
    indexes:[{
        name: 'student_appeals_parent_data_index',
        using: 'BTREE',
        fields: ['student_appeal_id']
    }],
    collate:'utf8_unicode_ci'
});

module.exports =  student_appeals_parent_data  ;