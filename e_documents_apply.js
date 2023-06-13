const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const E_documents_apply = sequelize.define('e_documents_apply', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
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
    fin:{
        type: DataTypes.STRING(250) ,
        collate: 'utf8mb3_general_ci'
    },
    docNo:{
        type: DataTypes.STRING(250) ,
        collate: 'utf8mb3_general_ci'
    },
    country:{
        type: DataTypes.STRING(250)
    },
    phone:{
        type: DataTypes.STRING(250)
    },
    country_code:{
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
    actual_region:{
        type: DataTypes.STRING(250)
    },
    citizenship:{
        type: DataTypes.STRING(250)
    },
    email:{
        type: DataTypes.STRING(250)
    },
    is_address_current:{
        type: DataTypes.INTEGER(11)
    },
    direction:{
        type: DataTypes.INTEGER(11)
    },
    edu_level:{
        type: DataTypes.INTEGER(11)
    },
    document_purpose:{
        type: DataTypes.INTEGER(11)
    },
    programs_type:{
        type: DataTypes.INTEGER(11)
    },
    reference_provided:{
        type: DataTypes.STRING(50)
    },
    government_agency:{
        type: DataTypes.INTEGER(11)
    },
    program:{
        type: DataTypes.STRING(250)
    },
    edu_institution:{
        type: DataTypes.STRING(250)
    },
    level_of_edu:{
        type: DataTypes.STRING(250)
    },
    specialty:{
        type: DataTypes.STRING(250)
    },
    edu_duration:{
        type: DataTypes.STRING(250)
    },
    entranceYear:{
        type: DataTypes.STRING(250)
    },
    update_date:{
        type: DataTypes.DATE 
    },
    apply_date:{
        type: DataTypes.DATE ,
        defaultValue: DataTypes.NOW
    }

},{
    timestamps: false ,
    collate: 'utf8_unicode_ci'
});

module.exports =  E_documents_apply  ;