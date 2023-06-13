const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const informal_edu_module_documents = sequelize.define('informal_edu_module_documents',{
    id:{
        type: DataTypes.BIGINT(20) ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    inf_education_apply_id:{
        type: DataTypes.BIGINT(20)
    },
    module_id:{
        type: DataTypes.BIGINT(20)
    },
    certificate:{
        type: DataTypes.STRING(500)
    },
    protocol:{
        type: DataTypes.STRING(500)
    },
    extract:{
        type: DataTypes.STRING(500)
    }
});

module.exports =  informal_edu_module_documents  ;